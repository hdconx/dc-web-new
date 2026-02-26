#!/bin/bash
# Sync OpenClaw docs to Windows folder
# Run from: /home/node/.openclaw/workspace/projects/dc-web-new/
# Usage: bash 00_OPENCLAW/sync-to-windows.sh

LINUX_SRC="/home/node/.openclaw/workspace/projects/dc-web-new/00_OPENCLAW"
WINDOWS_DST="/mnt/c/Users/nvntr/Documents/dc-web-new/00_OPENCLAW"

if [ -d "/mnt/c/Users/nvntr" ]; then
    echo "Windows is mounted. Syncing..."
    rsync -av "$LINUX_SRC/" "$WINDOWS_DST/"
    echo "✅ Sync complete"
else
    echo "⚠️  Windows not mounted."
    echo "Files are safe in Git at:"
    echo "  /home/node/.openclaw/workspace/projects/dc-web-new/"
    echo ""
    echo "To access from Windows, run git pull in your Windows WSL terminal."
fi
