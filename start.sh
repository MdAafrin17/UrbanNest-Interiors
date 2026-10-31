#!/usr/bin/env bash
# ==============================================================================
# UrbanNest Interiors — Localhost Server Launcher
# ==============================================================================

PORT=${1:-8080}
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"

echo "========================================================"
echo "  🏡 UrbanNest Interiors — Local Development Server"
echo "  Tagline: 'Spaces that feel like you.'"
echo "========================================================"
echo "  Serving directory: $PROJECT_DIR"
echo "  Localhost URL:     http://localhost:$PORT"
echo "========================================================"
echo "  Press Ctrl+C to stop the server anytime."
echo "========================================================"

# Attempt to open default browser automatically on macOS / Linux
if [[ "$OSTYPE" == "darwin"* ]]; then
  (sleep 1 && open "http://localhost:$PORT/index.html") &
elif which xdg-open > /dev/null; then
  (sleep 1 && xdg-open "http://localhost:$PORT/index.html") &
fi

# Run python HTTP server
python3 -m http.server "$PORT"
