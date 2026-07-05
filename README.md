# Boini Rakesh — Portfolio Website

A world-class personal portfolio built with React 19, Vite, TypeScript, Tailwind CSS, and Framer Motion.
Inspired by Apple, Stripe, Linear, and Vercel's design systems.

---

## 🚀 Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 + Vite |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Routing | React Scroll (single-page) |
| Icons | React Icons |
| Forms | EmailJS / Formspree |
| Deployment | Vercel |

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Hero, About, Skills, Experience, Projects, GitHub, Blog, Contact...
│   └── ui/              # BackToTop, CustomCursor, LoadingScreen
├── data/
│   └── portfolio.ts     # ⭐ All portfolio content — edit here
├── hooks/
│   └── index.ts         # useTheme, useScrollProgress, useActiveSection, useCountUp
└── utils/
    └── animations.ts    # Reusable Framer Motion variants
```

---

## ⚡ Quick Start

```bash
# 1. Clone or download the project
cd portfolio

# 2. Install dependencies
npm install

# 3. Copy env file and fill in your keys
cp .env.example .env

# 4. Start dev server
npm run dev

# 5. Build for production
npm run build
```

---

## 🎨 Customization Guide

### 1. Update Personal Info
Edit **`src/data/portfolio.ts`** — this is the single source of truth for all content.

```ts
export const personalInfo = {
  name: "Your Name",
  email: "your@email.com",
  // ...
};
```

### 2. Add/Edit Projects
In `portfolio.ts`, add objects to the `projects` array:

```ts
{
  id: 9,
  title: "My New Project",
  category: ["Full Stack", "Personal"],
  status: "Completed",
  description: "...",
  techStack: ["Spring Boot", "React"],
  github: "https://github.com/...",
  demo: "https://...",
  year: "2025",
}
```

### 3. Add Experience
Add to the `experiences` array in `portfolio.ts`:

```ts
{
  id: 2,
  role: "Senior Developer",
  company: "Company Name",
  period: "Jan 2026 – Present",
  achievements: ["..."],
  technologies: ["Java", "Spring Boot"],
}
```

### 4. Add Your Resume PDF
Place your resume at `public/resume.pdf`.

### 5. Update Social Links
In `personalInfo.social`:
```ts
social: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  // ...
}
```

### 6. Change Colors / Theme
Edit `src/index.css` CSS variables under `:root` and `.dark`.

---

## 📧 Setting Up Contact Form

### Option A: EmailJS (Recommended)
1. Go to [emailjs.com](https://www.emailjs.com) and create an account
2. Create an Email Service and Template
3. Add to `.env`:
```
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx
VITE_EMAILJS_PUBLIC_KEY=your_key
```
4. In `Contact.tsx`, replace the `handleSubmit` timeout with:
```ts
import emailjs from '@emailjs/browser';
await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  { from_name: form.name, reply_to: form.email, message: form.message },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
```

### Option B: Formspree
1. Go to [formspree.io](https://formspree.io) and create a form
2. Add your endpoint to `.env`: `VITE_FORMSPREE_ID=your_id`
3. Replace the form action with Formspree's endpoint

---

## 🌐 Deployment — Vercel (Recommended)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# Or connect GitHub repo at vercel.com for automatic deployments
```

The `vercel.json` already handles SPA routing rewrites.

### Environment Variables on Vercel
Go to your Vercel project → Settings → Environment Variables and add your `.env` values.

---

## 🔧 Other Deployment Options

### Netlify
```bash
npm run build
# Drag the `dist/` folder to netlify.com/drop
# Or use netlify.toml:
[build]
  command = "npm run build"
  publish = "dist"
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

---

## 📊 Performance Targets

- Lighthouse Performance: 95+
- Lighthouse Accessibility: 95+
- Lighthouse SEO: 100
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

---

## 🛠️ Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production (TypeScript check + Vite build)
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
```

---

## 📝 Component Documentation

| Component | File | Purpose |
|---|---|---|
| `Hero` | `sections/Hero.tsx` | Landing with particle canvas, typed roles, CTAs |
| `About` | `sections/About.tsx` | Story, timeline, education |
| `Skills` | `sections/Skills.tsx` | Animated skill bars with category tabs |
| `Experience` | `sections/Experience.tsx` | Work history timeline |
| `Projects` | `sections/Projects.tsx` | Filterable project cards |
| `GitHub` | `sections/GitHub.tsx` | Stats, contribution graph, pinned repos |
| `Achievements` | `sections/AchievementsBlog.tsx` | Numbers + certifications |
| `Blog` | `sections/AchievementsBlog.tsx` | Article cards |
| `Testimonials` | `sections/Testimonials.tsx` | Carousel |
| `Contact` | `sections/Contact.tsx` | Form + contact info |
| `Navbar` | `layout/Navbar.tsx` | Sticky nav with scroll progress |
| `Footer` | `layout/Footer.tsx` | Links + social icons |

---

## 🎨 Design System

| Token | Value |
|---|---|
| Brand (light) | `#6366f1` |
| Brand (dark) | `#818cf8` |
| Font | Inter (body), JetBrains Mono (code) |
| Border radius | 12px cards, 8px tags, 16px modals |
| Animation | Framer Motion, ease `[0.22, 1, 0.36, 1]` |

---

## 📄 License

MIT — free to use and modify for personal portfolios.

---

Built with ❤️ by Boini Rakesh
