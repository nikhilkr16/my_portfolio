# Nikhil Kumar - Personal Portfolio

A premium, recruiter-first personal portfolio built with React, showcasing skills, experience, and projects.

## Tech Stack

- **Frontend**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router
- **UI Components**: Headless UI
- **Icons**: React Icons

## Features

- ✨ Two-column layout with fixed animated avatar
- 🎨 Modern glassmorphism design
- 🎭 Smooth Framer Motion animations
- 📱 Fully responsive (mobile-first)
- ⚡ Optimized for performance (Lighthouse 90+)
- ♿ Accessible (keyboard navigation, reduced motion support)
- 🎯 Clean, recruiter-focused content

## Project Structure

```
nikportfolio/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Layout.jsx       # Main layout wrapper
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── AnimatedAvatar.jsx
│   │   └── Modal.jsx        # Modal component
│   ├── pages/               # Route pages
│   │   ├── Home.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── portfolioData.js # All content data
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   ├── avatar.png
│   └── favicon.svg
└── index.html
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Personal Information

Edit `src/data/portfolioData.js` to update:
- Personal info (name, title, email, social links)
- Education details
- Work experience
- Projects
- Skills & certifications

### Update Resume Link

In `src/data/portfolioData.js`, update the `resumeLink` field with your Google Drive resume link:

```javascript
resumeLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view"
```

### Change Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: '#b74b4b',  // Main accent color
  dark: '#0a0a0a',     // Background dark
  darker: '#050505',   // Darker background
}
```

### Add/Remove Sections

Modify routes in `src/App.jsx` and update the navigation in `src/components/Navbar.jsx`.

## Performance Optimizations

- Lazy loading for images
- Optimized animations with `will-change` CSS
- Reduced motion support for accessibility
- Code splitting with Vite
- Minified production builds

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify

1. Push code to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## License

Personal use only. All rights reserved.

---

Built with ❤️ by Nikhil Kumar
