# 🚀 Local Development Setup - Choose Your Path

## ⚡ EASIEST: Use VS Code Live Server (Recommended)

1. **Install extension:**
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Search for "Live Server" by Ritwick Dey
   - Click Install

2. **Start server:**
   - Right-click any HTML file → "Open with Live Server"
   - Browser opens automatically at `http://127.0.0.1:5500`
   - Auto-refreshes when you save changes

---

## Option 2: Install Python 3 (Lightweight)

```powershell
# Install via Windows Store or Chocolatey
choco install python
# OR download from https://www.python.org

# Then run:
python -m http.server 8000
# Open: http://localhost:8000
```

---

## Option 3: Install Node (If you want npm tools)

```powershell
# Download from https://nodejs.org
# Then run:
npx http-server
```

---

## Git Workflow

When you're happy with local changes:

```powershell
# View changes
git status

# Stage all changes
git add .

# Commit with message
git commit -m "Personalize portfolio with founder story"

# Push to GitHub Pages
git push

# Site live at: https://yourusername.github.io
```

---

## Current Changes Ready to Push
- ✅ index.html (personalized hero section)
- ✅ about.html (full story with timeline)
- ✅ contact.html (collaboration-focused)
- ✅ serve.ps1 (local server script)
- ✅ LOCAL_DEV.md (this file)
