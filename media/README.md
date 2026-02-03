# Image Management System

## How It Works

1. **Drop** raw camera photos into `raw/` (any size, any format — don't worry about it)
2. **Run** the optimizer: `python3 media/optimize.py`
3. **Done** — optimized WebP images appear in `public/images/`

Raw originals are never touched or modified.

## Folder Structure

```
media/
├── raw/                  ← Drop your camera photos HERE
│   ├── studios/          ← Room/studio photos
│   ├── gallery/          ← Gallery photos
│   └── events/           ← Event photos
├── optimize.py           ← The processing script
└── README.md             ← This file

public/images/            ← Auto-generated optimized images (do not edit manually)
├── studios/
├── gallery/
└── events/
```

## Which Folder?

| Photo Type | Drop Into |
|------------|-----------|
| Room/studio shots | `media/raw/studios/` |
| Gallery images | `media/raw/gallery/` |
| Event/party photos | `media/raw/events/` |
| Promo posters (from Canva/PostermyWall) | `media/raw/promos/` |

## What the Optimizer Does

- Converts to **WebP** format (30-80% smaller than JPEG)
- Resizes to optimal web dimensions (never upscales)
- Strips EXIF data (metadata, GPS, device info)
- Skips already-processed images (fast re-runs)

| Category | Max Width | WebP Quality |
|----------|-----------|--------------|
| Studios  | 1920px    | 82           |
| Gallery  | 1200px    | 80           |
| Events   | 1440px    | 80           |
| Promos   | 1200px    | 85           |

## After Processing

Update image paths in code to point to `/images/{category}/{filename}.webp`

Example:
```
Raw file:       media/raw/studios/my-photo.jpg
Optimized file: public/images/studios/my-photo.webp
Code path:      /images/studios/my-photo.webp
```

## Re-process Everything

If you need to re-run all images (e.g. after changing quality settings):
```bash
python3 media/optimize.py --force
```
