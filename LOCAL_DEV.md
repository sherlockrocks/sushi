# Local Dev Setup

## To test locally before pushing to GitHub Pages:

### Option 1: Python (Built-in)
```powershell
python -m http.server 8000
# or
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

### Option 2: Node (if you have it)
```powershell
npx http-server
```

## Workflow:
1. Start local server
2. Test all pages and interactions at `http://localhost:8000`
3. Check console for any errors (F12 DevTools)
4. When happy, commit changes:
   ```powershell
   git add .
   git commit -m "Your message"
   git push
   ```
5. Check live site at `https://yourusername.github.io`

## Git Status:
Current changes waiting to be pushed:
- index.html (personalized)
- about.html (personalized)
- contact.html (personalized)
