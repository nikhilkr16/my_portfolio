# Portfolio Setup Guide

## Quick Start (3 Steps)

### 1. Install Dependencies

Open a **new** terminal/PowerShell window in the project directory and run:

```bash
npm install
```

Wait for all packages to install (this may take 2-3 minutes).

### 2. Start Development Server

```bash
npm run dev
```

The site will automatically open at `http://localhost:3000`

### 3. Customize Your Content

Edit `src/data/portfolioData.js` to add your information:

- Update resume link
- Add your Instagram handle
- Adjust CGPA
- Add more projects
- Update any other personal details

---

## Troubleshooting

### Issue: EPERM or spawn errors on Windows

**Solution 1**: Run as Administrator
- Right-click PowerShell/Terminal → "Run as Administrator"
- Navigate to project folder
- Run `npm install` then `npm run dev`

**Solution 2**: Clear npm cache
```bash
npm cache clean --force
npm install
```

**Solution 3**: Use different package manager
```bash
# Install pnpm
npm install -g pnpm

# Then use pnpm instead
pnpm install
pnpm dev
```

### Issue: Port 3000 already in use

Edit `vite.config.js` and change the port:
```javascript
server: {
  port: 3001, // Change to any available port
  open: true
}
```

### Issue: Blank page or errors in browser

1. Check browser console (F12) for errors
2. Make sure all files are saved
3. Clear browser cache (Ctrl+Shift+R)
4. Restart dev server

---

## Building for Production

### Build the project

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Test production build locally

```bash
npm run preview
```

---

## Deployment

### Option 1: Vercel (Recommended - Easiest)

1. Create a GitHub account (if you don't have one)
2. Push this project to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. Go to [vercel.com](https://vercel.com)
4. Sign in with GitHub
5. Click "New Project"
6. Import your repository
7. Vercel auto-detects Vite settings
8. Click "Deploy"
9. Done! Your site is live at `your-project.vercel.app`

### Option 2: Netlify

1. Build the project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Done! Your site is live

**OR** connect to GitHub (like Vercel):
- Build command: `npm run build`
- Publish directory: `dist`

### Option 3: GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Add to `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/YOUR_REPO_NAME/',
     // ... rest of config
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

---

## Important: Update Before Deploying

### 1. Resume Link
In `src/data/portfolioData.js`, line 7:
```javascript
resumeLink: "https://drive.google.com/file/d/YOUR_ACTUAL_FILE_ID/view"
```

To get your Google Drive link:
1. Upload resume to Google Drive
2. Right-click → Share → Change to "Anyone with the link"
3. Copy the link

### 2. Instagram Handle
In `src/data/portfolioData.js`, line 11:
```javascript
instagram: "https://instagram.com/YOUR_HANDLE"
```

### 3. CGPA
In `src/data/portfolioData.js`, line 20:
```javascript
cgpa: "7.85" // Replace with your actual CGPA
```

### 4. Add More Projects
In `src/data/portfolioData.js`, add to the `projects` array:
```javascript
{
  id: "unique-id",
  name: "Project Name",
  description: "One-line description",
  techStack: ["React", "Node.js", "etc"],
  github: "https://github.com/...",
  link: "https://...", // optional live link
  featured: true // or false
}
```

---

## Performance Checklist

Before deploying, ensure:

- ✅ All images are optimized (compressed)
- ✅ Resume link works
- ✅ All social links are correct
- ✅ Test on mobile device
- ✅ Check all routes work
- ✅ Run `npm run build` successfully
- ✅ Test with `npm run preview`

---

## Customization Guide

### Change Color Scheme

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#b74b4b',  // Change this to your color
  dark: '#0a0a0a',
  darker: '#050505',
}
```

Color suggestions:
- Blue: `#3b82f6`
- Green: `#10b981`
- Purple: `#8b5cf6`
- Orange: `#f97316`

### Change Fonts

1. Go to [Google Fonts](https://fonts.google.com)
2. Select a font
3. Copy the `<link>` tag
4. Add to `index.html` `<head>`
5. Update `tailwind.config.js`:
   ```javascript
   fontFamily: {
     sans: ['Your Font Name', 'system-ui', 'sans-serif'],
   }
   ```

### Add a New Page

1. Create new file in `src/pages/YourPage.jsx`
2. Add route in `src/App.jsx`:
   ```javascript
   <Route path="/yourpage" element={<YourPage />} />
   ```
3. Add to navbar in `src/components/Navbar.jsx`:
   ```javascript
   { name: 'Your Page', path: '/yourpage' }
   ```

---

## Support

If you encounter issues:

1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Clear browser cache
4. Restart your computer (if permission errors persist)
5. Try running terminal as Administrator (Windows)

---

## Next Steps

1. ✅ Install dependencies
2. ✅ Run dev server and verify everything works
3. ✅ Update all personal information
4. ✅ Test on mobile (Chrome DevTools → Toggle Device Toolbar)
5. ✅ Build for production
6. ✅ Deploy to Vercel/Netlify
7. ✅ Share your portfolio link!

---

**Built with React + Vite + Tailwind + Framer Motion**

Good luck with your job search! 🚀
