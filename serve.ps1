# Simple local development server for sushi.github.io
# Usage: .\serve.ps1

$port = 8000
$path = Get-Location

Write-Host "🚀 Starting local server..." -ForegroundColor Green
Write-Host "📍 Serving files from: $path" -ForegroundColor Cyan
Write-Host "🌐 Open browser to: http://localhost:$port" -ForegroundColor Cyan
Write-Host "⏹️  Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

# Use Python's built-in HTTP server if available
if (Get-Command python -ErrorAction SilentlyContinue) {
    python -m http.server $port --directory $path
} elseif (Get-Command python3 -ErrorAction SilentlyContinue) {
    python3 -m http.server $port --directory $path
} else {
    Write-Host "❌ Python not found. Install Python or use: npx http-server" -ForegroundColor Red
    exit 1
}
