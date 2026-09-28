#!/bin/bash
# LifeHub Next.js Development Server Launcher
# Run in terminal: bash start-dev.command
# Or double-click to open in Finder

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR"

# Kill existing dev server
pkill -f "next dev" 2>/dev/null || true

echo "Starting LifeHub Next.js dev server..."

# Start dev server in background
npx next dev -p 3040 &
DEV_PID=$!

# Wait for server startup
sleep 3

# Open Korean homepage only
open http://localhost:3040/ko

echo ""
echo "Dev server started! Open the following URL:"
echo "   URL: http://localhost:3040/ko (Korean)"
echo ""
echo "Press Ctrl+C to stop the dev server."

# Wait for the dev server to be killed
wait $DEV_PID
