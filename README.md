# Indxai - Official Website

> Where Innovation Meets Design

Modern, responsive website for Indxai - providing foundational blocks for enterprises to build and deploy powerful, contextually-aware AI.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS (via CDN)
- **Form Handler**: FormSubmit.co
- **Deployment**: Vercel (recommended)

## 🌟 Features

- ✅ Single-page application with hash routing
- ✅ Fully responsive design
- ✅ SEO optimized (meta tags, Open Graph, Twitter Cards)
- ✅ Accessibility compliant (WCAG 2.1 AA)
- ✅ Contact form with validation
- ✅ Legal pages (Privacy Policy, Terms of Service)
- ✅ Error boundaries and 404 handling
- ✅ Loading states and animations
- ✅ Google Analytics integration
- ✅ Performance optimized

## 📂 Project Structure

```
indxai/
├── components/
│   ├── AboutPage.tsx          # About section content
│   ├── AboutSection.tsx       # Header/Navigation
│   ├── ContactPage.tsx        # Contact form & info
│   ├── ErrorBoundary.tsx      # Error handling
│   ├── FeaturesSection.tsx    # (Empty placeholder)
│   ├── Footer.tsx             # Site footer
│   ├── HeroSection.tsx        # Hero banner
│   ├── Icons.tsx              # Icon components
│   ├── Loading.tsx            # Loading components
│   ├── NotFound.tsx           # 404 page
│   ├── PrivacyPolicy.tsx      # Privacy policy
│   ├── SkipToContent.tsx      # Accessibility
│   ├── TermsOfService.tsx     # Terms of service
│   └── VisionSection.tsx      # Core offerings
├── public/
│   └── robots.txt             # SEO crawler rules
├── App.tsx                    # Root component
├── index.tsx                  # Entry point
├── index.html                 # HTML template
├── index.css                  # Global styles
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript config
├── vite.config.ts             # Vite config
├── vercel.json                # Vercel config
├── .env.example               # Environment variables template
└── DEPLOYMENT.md              # Deployment instructions
```

## 🔧 Configuration
### Before Deployment

1. **Add Assets** (in `public/` folder):
   - `favicon.png` (512x512px)
   - `apple-touch-icon.png` (180x180px)
   - `og-image.jpg` (1200x630px)
   - `img.png` (about section image)

2. **Update Configuration**:
   - Replace Google Analytics ID in `index.html`
   - Update business address in contact pages
   - Verify email addresses

3. **Test Locally**:
   ```bash
   npm run build
   npm run preview
   ```

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## 📧 Contact Form Setup

The site uses [FormSubmit.co](https://formsubmit.co/) for contact form handling.

**Important**: On first form submission, FormSubmit sends a confirmation email to `contact@indxai.com`. You MUST click the activation link before the form will work!

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy (auto-configured via `vercel.json`)
4. Add environment variables in Vercel dashboard
5. Activate contact form (submit test + confirm email)

### Other Platforms

- **Netlify**: Works with same build settings
- **GitHub Pages**: Requires additional routing config
- **Custom Server**: Build and serve `dist/` folder

## 📊 Analytics

Google Analytics 4 is integrated. To activate:

1. Create GA4 property at [analytics.google.com](https://analytics.google.com/)
2. Get Measurement ID (format: `G-XXXXXXXXXX`)
3. Update in `index.html` (lines 40 & 42)
4. Redeploy

## 🧪 Testing

```bash
# Lint check (if ESLint configured)
npm run lint

# Type check
npx tsc --noEmit

# Build test
npm run build
```

## 📱 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔐 Security

- Content Security Policy headers via `vercel.json`
- XSS protection enabled
- No sensitive data in client code
- FormSubmit handles form submissions securely

## 📄 License

© 2025 Indxai. All rights reserved.

## 🤝 Contributing

This is a private company website. For inquiries, contact: contact@indxai.com

## 🐛 Issues

Found a bug? Contact the development team at contact@indxai.com

---

**Built with ❤️ by Indxai Team**
