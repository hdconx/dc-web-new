# Run this in PowerShell on Windows to create the project folder structure
# Just paste this into a PowerShell window and hit Enter

$base = "C:\Users\nvntr\Documents\dc-web-new"

$folders = @(
    "00_OPENCLAW",
    "01_RESEARCH",
    "02_DESIGN",
    "03_IMPLEMENTATION",
    "04_ARCHIVE\2026-02-19_MIGRATION\obsolete",
    "04_ARCHIVE\2026-02-19_MIGRATION\redundant",
    "04_ARCHIVE\2026-02-19_MIGRATION\unclear",
    "04_ARCHIVE\2026-02-19_MIGRATION\restructured"
)

foreach ($folder in $folders) {
    $path = Join-Path $base $folder
    New-Item -ItemType Directory -Path $path -Force | Out-Null
    Write-Host "Created: $path"
}

Write-Host ""
Write-Host "Done! All folders created in $base"
