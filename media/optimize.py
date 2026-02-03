#!/usr/bin/env python3
"""
Image Optimizer for Dance Connexions Website
=============================================
Processes raw camera photos into web-optimized WebP images.

Usage:
    python3 media/optimize.py          # Process all new images
    python3 media/optimize.py --force  # Re-process everything

Folder mapping:
    media/raw/studios/  →  public/images/studios/
    media/raw/gallery/  →  public/images/gallery/
    media/raw/events/   →  public/images/events/
"""

import os
import sys
from pathlib import Path
from PIL import Image, ExifTags

# --- Configuration -----------------------------------------------------------

BASE_DIR = Path(__file__).resolve().parent.parent

PRESETS = {
    "studios": {"max_width": 1920, "quality": 82},
    "gallery": {"max_width": 1200, "quality": 80},
    "events":  {"max_width": 1440, "quality": 80},
    "promos":  {"max_width": 1200, "quality": 85},
}

RAW_ROOT = BASE_DIR / "media" / "raw"
OUT_ROOT = BASE_DIR / "public" / "images"

SUPPORTED_FORMATS = {".jpg", ".jpeg", ".png", ".tiff", ".bmp", ".webp"}

# --- Core Logic --------------------------------------------------------------

def get_output_path(raw_path: Path, category: str) -> Path:
    """Map raw file to output WebP path."""
    return OUT_ROOT / category / (raw_path.stem + ".webp")


def needs_processing(raw_path: Path, out_path: Path) -> bool:
    """Check if output is missing or older than source."""
    if not out_path.exists():
        return True
    return raw_path.stat().st_mtime > out_path.stat().st_mtime


def optimize_image(raw_path: Path, out_path: Path, preset: dict):
    """Resize, strip EXIF, convert to WebP."""
    img = Image.open(raw_path)

    # Convert to RGB if needed (PNG with alpha, CMYK, etc.)
    if img.mode in ("RGBA", "P", "LA"):
        background = Image.new("RGB", img.size, (255, 255, 255))
        background.paste(img, mask=img.split()[-1] if img.mode == "RGBA" else None)
        img = background
    elif img.mode != "RGB":
        img = img.convert("RGB")

    # Resize — maintain aspect ratio, only downscale
    max_w = preset["max_width"]
    if img.width > max_w:
        ratio = max_w / img.width
        new_h = int(img.height * ratio)
        img = img.resize((max_w, new_h), Image.LANCZOS)

    # Save as WebP (EXIF is automatically stripped)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    img.save(out_path, "WEBP", quality=preset["quality"], method=6)


# --- Main --------------------------------------------------------------------

def main():
    force = "--force" in sys.argv
    processed = 0
    skipped = 0
    errors = 0

    print("Dance Connexions — Image Optimizer")
    print("=" * 45)

    for category, preset in PRESETS.items():
        raw_dir = RAW_ROOT / category
        if not raw_dir.exists():
            continue

        for raw_file in sorted(raw_dir.iterdir()):
            if raw_file.suffix.lower() not in SUPPORTED_FORMATS:
                continue

            out_file = get_output_path(raw_file, category)

            if not force and not needs_processing(raw_file, out_file):
                skipped += 1
                continue

            try:
                optimize_image(raw_file, out_file, preset)
                orig_kb = raw_file.stat().st_size / 1024
                new_kb = out_file.stat().st_size / 1024
                saving = int((1 - new_kb / orig_kb) * 100)
                print(f"  ✓ {raw_file.name:<40} {orig_kb:>7.0f}KB → {new_kb:>5.0f}KB  ({saving}% saved)")
                processed += 1
            except Exception as e:
                print(f"  ✗ {raw_file.name:<40} ERROR: {e}")
                errors += 1

    print("=" * 45)
    print(f"  Processed: {processed}  |  Skipped: {skipped}  |  Errors: {errors}")

    if processed == 0 and skipped == 0:
        print("\n  No images found. Drop photos into:")
        print("    media/raw/studios/   — Room photos")
        print("    media/raw/gallery/   — Gallery photos")
        print("    media/raw/events/    — Event photos")


if __name__ == "__main__":
    main()
