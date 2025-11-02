# Deployment Guide - Indxai Website

## 🚀 Pre-Deployment Checklist

### Required Assets (Create These Before Deploying)

1. **Favicon and Icons**
   - [ ] `public/favicon.png` (512x512px) - Site icon
   - [ ] `public/apple-touch-icon.png` (180x180px) - iOS home screen icon
   - [ ] `public/og-image.jpg` (1200x630px) - Social media preview
   - [ ] `public/img.png` - About section image

2. **Configuration Updates**
   - [ ] Replace Google Analytics ID in `index.html` (line 40)
     - Current: `G-XXXXXXXXXX`
     - Replace with your actual GA4 ID from https://analytics.google.com/
   - [ ] Update business address in multiple files:
     - `components/ContactPage.tsx`
     - `components/PrivacyPolicy.tsx`
     - `components/TermsOfService.tsx`
     - `index.html` (structured data)

3. **Email Setup**
   - [ ] Verify `contact@indxai.com` email exists and is accessible
   - [ ] Set up email forwarding if needed
   - [ ] Configure spam filtering

---

## 📦 Local Build Test

Before deploying, test the build locally:

```bash
# Install dependencies (if not already done)
npm install

# Build the project
npm run build

# Preview the production build
npm run preview
```

Open http://localhost:4173 and test:
- [ ] All pages load correctly
- [ ] Navigation works (home, about, contact, privacy, terms)
- [ ] Contact form displays properly
- [ ] Images load (placeholders if not added yet)
- [ ] No console errors

---

## 🌐 Deploy to Vercel

### Step 1: Push to GitHub

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial deployment setup"

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/indxai-website.git

# Push to GitHub
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click **"New Project"**
4. **Import** your `indxai-website` repository
5. Configure project:
   - **Framework Preset**: Vite (auto-detected)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **"Deploy"**

### Step 3: Configure Environment Variables (Optional)

In Vercel Dashboard → Settings → Environment Variables, add:

```
VITE_GA_ID = G-YOUR-ACTUAL-ID
VITE_SITE_URL = https://your-site.vercel.app
VITE_FORM_EMAIL = contact@indxai.com
```

---

## ✉️ Activate Contact Form (FormSubmit)

**Important**: FormSubmit requires first-time activation!

1. After deployment, visit your live site
2. Go to the Contact page
3. Submit a test form with YOUR email
4. Check `contact@indxai.com` inbox
5. Click the confirmation link from FormSubmit
6. Test the form again - it should now work!

**Note**: Forms will NOT work until you confirm the email!

---

## 🎨 Add Missing Assets

After deployment, create and add these assets:

### Favicon (512x512px)
- Design a simple icon with "Indxai" or "I" logo
- Export as PNG
- Upload to `public/favicon.png`

### Apple Touch Icon (180x180px)
- Use same design as favicon
- Export as 180x180px PNG
- Upload to `public/apple-touch-icon.png`

### Open Graph Image (1200x630px)
- Create a social media preview card
- Include: Indxai logo, tagline, gradient background
- Export as JPG
- Upload to `public/og-image.jpg`

### About Section Image
- Add relevant company/team image
- Upload to `public/img.png`

**After uploading assets, commit and push:**
```bash
git add public/
git commit -m "Add favicon and images"
git push
```

Vercel will auto-deploy the update.

---

## 🔧 Custom Domain (Optional)

### Using indxai.com:

1. In Vercel Dashboard → Settings → Domains
2. Add `indxai.com` and `www.indxai.com`
3. Update DNS records at your domain registrar:

```
Type: A
Name: @
Value: 76.76.19.19

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

4. Wait for DNS propagation (5-60 minutes)
5. Update `index.html` meta tags with new domain

---

## 🧪 Post-Deployment Testing

Visit your live site and test:

- [ ] Homepage loads
- [ ] Navigation to all sections works
- [ ] About section scrolls correctly
- [ ] Contact form submits successfully
- [ ] Privacy Policy page loads
- [ ] Terms of Service page loads
- [ ] 404 page appears for invalid URLs
- [ ] Mobile responsive on phone/tablet
- [ ] Social sharing preview works (test on Twitter/LinkedIn)

---

## 📊 Monitoring & Analytics

### Google Analytics Setup:

1. Create GA4 property at https://analytics.google.com/
2. Get your Measurement ID (format: G-XXXXXXXXXX)
3. Update `index.html` line 40 and line 42
4. Redeploy
5. Check Real-Time reports to verify tracking

### Vercel Analytics (Built-in):

- Go to Vercel Dashboard → Analytics
- Free tier includes: Page views, visitors, top pages
- No code changes needed!

---

## 🐛 Troubleshooting

### Build fails on Vercel:
- Check Vercel build logs
- Ensure `package.json` dependencies are correct
- Test `npm run build` locally first

### Contact form not working:
- Did you activate FormSubmit via email confirmation?
- Check browser console for errors
- Verify `contact@indxai.com` receives emails

### Images not loading:
- Ensure files are in `public/` folder
- Check file names match exactly (case-sensitive)
- Commit and push images to Git

### 404 on page refresh:
- `vercel.json` handles this with rewrites
- If issue persists, check Vercel logs

---

## 🔄 Future Updates

To deploy changes:

```bash
git add .
git commit -m "Your update description"
git push
```

Vercel automatically deploys on every push to main branch!

---

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- FormSubmit: https://formsubmit.co/
- Google Analytics: https://support.google.com/analytics

---

## ✅ Final Checklist

Before going live:

- [ ] All assets created and uploaded
- [ ] Google Analytics ID updated
- [ ] Business address updated
- [ ] Email setup and tested
- [ ] FormSubmit activated
- [ ] All pages tested on live site
- [ ] Mobile responsive verified
- [ ] Social sharing preview tested
- [ ] Custom domain configured (if applicable)

**You're ready to launch! 🎉**
