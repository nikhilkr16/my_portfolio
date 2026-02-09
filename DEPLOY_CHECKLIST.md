# 🚀 Pre-Deployment Checklist

## Step 1: Update Personal Information

### Must Update (Critical) ⚠️

Open `src/data/portfolioData.js` and update:

- [ ] **Resume Link** (Line 7)
  ```javascript
  resumeLink: "https://drive.google.com/file/d/YOUR_ACTUAL_ID/view"
  ```
  
- [ ] **Instagram Handle** (Line 11)
  ```javascript
  instagram: "https://instagram.com/YOUR_HANDLE"
  ```
  
- [ ] **CGPA** (Line 20)
  ```javascript
  cgpa: "7.85" // Your actual CGPA
  ```

### Should Update (Important) 📝

- [ ] **Location** (Line 5) - Update if different
- [ ] **Email** (Line 4) - Verify it's correct
- [ ] **Add more projects** - Showcase your best work
- [ ] **Verify all social links** - Make sure they all work
- [ ] **Check all experience dates** - Accuracy matters

---

## Step 2: Content Quality Check

### Grammar & Spelling ✍️
- [ ] Run through Grammarly or similar tool
- [ ] Check for typos in project names
- [ ] Verify technical terms are spelled correctly
- [ ] Read everything out loud once

### Honesty Check 🎯
- [ ] Only list skills you can discuss in interview
- [ ] Project descriptions are accurate
- [ ] Achievements are factual, not exaggerated
- [ ] Dates and durations are correct

### Professionalism 💼
- [ ] No casual language ("Hey", "Yo", etc.)
- [ ] Consistent tense (past for completed, present for ongoing)
- [ ] Professional tone throughout
- [ ] No emoji in professional text (except icons that are intentional)

---

## Step 3: Technical Testing

### Local Testing 🔧

Run these commands and verify:

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Test production build
npm run build
npm run preview
```

**Check:**
- [ ] Dev server starts without errors
- [ ] All routes work (Home, Education, Experience, Projects, Skills, Contact)
- [ ] All modals open and close properly
- [ ] All external links work in new tabs
- [ ] Resume link opens correctly
- [ ] Email link opens mail client
- [ ] Social icons link to correct profiles
- [ ] No console errors in browser (F12)

### Cross-Browser Testing 🌐
Test in:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari (if on Mac)
- [ ] Edge

### Mobile Testing 📱
- [ ] Open Chrome DevTools (F12)
- [ ] Click Toggle Device Toolbar (Ctrl+Shift+M)
- [ ] Test these viewports:
  - [ ] iPhone SE (375px)
  - [ ] iPhone 12 Pro (390px)
  - [ ] iPad (768px)
  - [ ] Desktop (1920px)
- [ ] Check hamburger menu works on mobile
- [ ] Verify text is readable
- [ ] Confirm buttons are tappable

### Performance Testing ⚡
- [ ] Run Lighthouse audit (Chrome DevTools)
  - Target: Performance > 90
  - Target: Accessibility > 95
  - Target: Best Practices > 90
  - Target: SEO > 85

To run Lighthouse:
1. Open site in Chrome
2. F12 → Lighthouse tab
3. Select "Desktop" or "Mobile"
4. Click "Analyze page load"

---

## Step 4: Asset Optimization

### Images 🖼️
- [ ] Avatar image is under 500KB
- [ ] Avatar image is professional (no memes)
- [ ] Image format is web-friendly (PNG, WebP, JPG)

### Resume 📄
- [ ] Resume is uploaded to Google Drive
- [ ] Resume permissions: "Anyone with link can view"
- [ ] Resume file name is professional: `Nikhil_Kumar_Resume.pdf`
- [ ] Resume is up to date (< 1 month old)
- [ ] Resume link works in incognito mode

---

## Step 5: SEO & Meta Tags

Already configured, but verify in `index.html`:
- [ ] Title: "Nikhil Kumar - Portfolio"
- [ ] Meta description is compelling
- [ ] Favicon appears correctly

---

## Step 6: Git Repository Setup

If deploying via Vercel/Netlify with Git:

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial portfolio commit"

# Create GitHub repo and push
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

**Check:**
- [ ] `.gitignore` is present (excludes node_modules, dist)
- [ ] No sensitive data committed (API keys, passwords)
- [ ] README.md is clear

---

## Step 7: Deploy

### Option A: Vercel (Easiest) ⭐

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Select your portfolio repository
5. Vercel auto-detects settings ✨
6. Click "Deploy"
7. Wait 2-3 minutes
8. ✅ Done! Your site is live

**Post-Deploy:**
- [ ] Visit the deployed URL
- [ ] Test all routes work
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Test in incognito mode

### Option B: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"
7. ✅ Done!

### Option C: Manual Deploy (Netlify Drop)

1. Run `npm run build`
2. Go to [netlify.com/drop](https://app.netlify.com/drop)
3. Drag and drop the `dist` folder
4. ✅ Instant deploy!

---

## Step 8: Post-Deployment

### Final Checks ✅
- [ ] Visit live URL and test everything again
- [ ] Share link with a friend for feedback
- [ ] Test on your actual phone (not just emulator)
- [ ] Check loading speed on slow network (Chrome DevTools → Network → Slow 3G)
- [ ] Verify Google Drive resume link works from deployed site

### Custom Domain (Optional) 🌐
If you want `nikhilkumar.dev` instead of `yourproject.vercel.app`:

**Vercel:**
1. Go to Project Settings → Domains
2. Add custom domain
3. Follow DNS instructions

**Netlify:**
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Follow DNS instructions

**Domain registrars:**
- [Namecheap](https://namecheap.com) - $8-12/year
- [GoDaddy](https://godaddy.com) - $10-15/year
- [Google Domains](https://domains.google) - $12/year

---

## Step 9: Share Your Portfolio

### Update Your Profiles 📢
Add portfolio link to:
- [ ] LinkedIn (in "Contact Info" section)
- [ ] GitHub bio
- [ ] Resume header
- [ ] Email signature
- [ ] College placement portal
- [ ] Internshala/other job portals

### LinkedIn Post Template

```
Excited to share my new portfolio! 🚀

After weeks of planning and development, I've built a modern, 
recruiter-focused portfolio showcasing my journey as a developer.

🔗 Check it out: [YOUR_URL]

Built with React, Vite, Tailwind CSS, and Framer Motion.

Tech Stack:
✅ React.js
✅ Tailwind CSS
✅ Framer Motion
✅ Responsive Design
✅ Optimized Performance

Would love your feedback!

#WebDevelopment #React #Portfolio #OpenToWork
```

---

## Step 10: Analytics Setup (Optional)

### Google Analytics
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking ID
3. Add to `index.html` `<head>`

### Vercel Analytics (Easiest)
1. In Vercel project dashboard
2. Go to Analytics tab
3. Enable with one click
4. Track visitors, performance, etc.

---

## 🎯 Final Reality Check

Before you share with recruiters, ask yourself:

- [ ] **Would I hire me based on this?**
- [ ] **Is everything I claim defensible in an interview?**
- [ ] **Does this represent my best work?**
- [ ] **Is the content clear and concise?**
- [ ] **Does it load fast?**
- [ ] **Is it mobile-friendly?**

If yes to all → **You're ready to deploy! 🚀**

---

## 🆘 Common Issues & Fixes

### Issue: Build fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: Blank page after deploy
- Check browser console for errors
- Verify all imports are correct (case-sensitive!)
- Make sure all files are committed to Git

### Issue: 404 on refresh (Vercel/Netlify)
- Already handled! Vercel/Netlify auto-configure SPA routing

### Issue: Slow performance
- Compress avatar image
- Remove unused dependencies
- Check Lighthouse for specific issues

---

## 📞 Need Help?

**Resources:**
- [Vite Docs](https://vitejs.dev)
- [React Router Docs](https://reactrouter.com)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://framer.com/motion)
- [Vercel Docs](https://vercel.com/docs)

**Stack Overflow Search Tips:**
- "Vite + React + [your error]"
- "Framer Motion [specific animation issue]"
- "Tailwind CSS responsive [component]"

---

## ✅ You're Done!

Once you complete this checklist:
1. Your portfolio is live
2. Your content is polished
3. Your site is performant
4. You're ready to share with recruiters

**Now go land that dream job! 💼🚀**

---

**Last Updated:** February 9, 2026
**Created by:** Nikhil Kumar
