# 🚀 Pre-Deployment Checklist for Vercel

## ✅ Completed Items

- [x] Fixed email consistency (`contact@indxai.com` throughout)
- [x] Updated `package.json` with correct project name
- [x] Created `vercel.json` with build configuration
- [x] Updated `.gitignore` for production files
- [x] Created comprehensive `DEPLOYMENT.md` guide
- [x] Updated `README.md` with project documentation
- [x] Added `robots.txt` for SEO
- [x] Tested production build successfully ✓

## ⚠️ Required Before Deployment

### 1. Create Visual Assets (High Priority)

You need to create these 4 image files in the `public/` folder:

**Favicon** (`public/favicon.png`)
- Size: 512x512 pixels
- Format: PNG
- Design: Simple "Indxai" or "I" logo
- Colors: Black background with orange accent
- Tool suggestions: Figma, Canva, favicon.io

**Apple Touch Icon** (`public/apple-touch-icon.png`)
- Size: 180x180 pixels
- Format: PNG
- Design: Same as favicon
- Used when users add site to iOS home screen

**Open Graph Image** (`public/og-image.jpg`)
- Size: 1200x630 pixels
- Format: JPG
- Content: Company logo + tagline + gradient background
- Used for social media link previews (Twitter, LinkedIn, Facebook)
- Tool suggestions: Canva (use "Facebook Post" template)

**About Section Image** (`public/img.png`)
- Size: Recommended 800x600 pixels or larger
- Format: PNG or JPG
- Content: Company office, team photo, or branded graphic
- Used in the About page

### 2. Update Google Analytics (Medium Priority)

**Current state:** Placeholder ID `G-XXXXXXXXXX` in `index.html`

**Steps:**
1. Go to https://analytics.google.com/
2. Create a new GA4 property for "Indxai"
3. Get your Measurement ID (format: `G-XXXXXXXXXX`)
4. Open `index.html`
5. Replace `G-XXXXXXXXXX` on **line 40** and **line 42**
6. Save and commit

**OR** Remove analytics entirely if not needed yet:
- Delete lines 39-49 in `index.html`

### 3. Update Business Address (Medium Priority)

**Current address:** "Cbe-641 035, Tamil Nadu, India"

Replace with full address in these files:
- [ ] `components/ContactPage.tsx` (line ~200)
- [ ] `components/PrivacyPolicy.tsx`
- [ ] `components/TermsOfService.tsx`
- [ ] `index.html` (structured data, around line 72)

**Example format:**
```
123 Business Street,
Suite 456,
Coimbatore - 641 035,
Tamil Nadu, India
```

### 4. Email Verification (Critical)

**Email used:** `contact@indxai.com`

**Before deployment, verify:**
- [ ] Email account exists and is accessible
- [ ] You can receive emails at this address
- [ ] Set up email forwarding if needed (to sanjayrajendranm7@gmail.com)
- [ ] Configure spam filter to whitelist FormSubmit emails

**Email services:**
- Google Workspace (recommended for business)
- Domain registrar email forwarding
- Zoho Mail (free option)

## 📦 Deployment Steps

### Step 1: Initialize Git Repository

```powershell
cd c:\Users\SANJAY\Documents\indxai

# Initialize git if not done
git init

# Add all files
git add .

# First commit
git commit -m "Initial deployment setup - Indxai website"

# Create GitHub repository (if not exists)
# Go to https://github.com/new
# Create a new repository named "indxai-website"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/indxai-website.git

# Push to GitHub
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to **https://vercel.com**
2. **Sign in** with GitHub
3. Click **"New Project"**
4. Click **"Import"** next to `indxai-website` repository
5. Verify settings (auto-detected):
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. Click **"Deploy"**
7. Wait 1-2 minutes for deployment
8. Get your live URL: `https://indxai-website.vercel.app`

### Step 3: Activate Contact Form

**Critical step - Form won't work without this!**

1. Visit your live Vercel site
2. Navigate to Contact page
3. Fill out and submit a TEST form using YOUR email
4. Check `contact@indxai.com` inbox
5. Find email from **FormSubmit** with subject "Please Confirm Your Email"
6. Click the confirmation/activation link
7. Test the form again - it should now work!

**If you don't see the email:**
- Check spam folder
- Verify email account is working
- Try submitting again

### Step 4: Add Missing Assets (After Deployment)

Once you create the favicon and images:

```powershell
# Add new files
git add public/favicon.png public/apple-touch-icon.png public/og-image.jpg public/img.png

# Commit
git commit -m "Add favicon and images"

# Push
git push
```

Vercel will automatically redeploy with the new assets!

## 🧪 Post-Deployment Testing

Visit your live site and test these items:

### Basic Functionality
- [ ] Homepage loads without errors
- [ ] Navigation works (Home, About, Contact)
- [ ] Smooth scrolling between sections
- [ ] All text displays correctly

### Pages & Routing
- [ ] About section scrolls and displays content
- [ ] Contact page loads
- [ ] Privacy Policy loads (`yoursite.com/#privacy`)
- [ ] Terms of Service loads (`yoursite.com/#terms`)
- [ ] 404 page appears for invalid URLs (`yoursite.com/#invalid`)

### Contact Form
- [ ] Form displays correctly
- [ ] All fields are required
- [ ] Form validation works (try submitting empty)
- [ ] Success message appears after submission
- [ ] Email received at `contact@indxai.com`

### Mobile Testing
- [ ] Open site on mobile phone
- [ ] Test navigation menu
- [ ] Test form submission
- [ ] Check responsive layout

### Social Sharing
- [ ] Share link on Twitter/X - preview should show
- [ ] Share link on LinkedIn - preview should show
- [ ] Preview should include title, description, and image

### Performance
- [ ] Open browser DevTools → Network tab
- [ ] Check page load time (should be < 3 seconds)
- [ ] Check for 404 errors on missing resources

## 🔧 Optional Enhancements

### Custom Domain Setup

If you own `indxai.com`:

1. In Vercel Dashboard → Settings → Domains
2. Add both:
   - `indxai.com`
   - `www.indxai.com`
3. Update DNS at your domain registrar:

```
Type: A
Name: @
Value: 76.76.19.19

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

4. Wait 5-60 minutes for DNS propagation
5. Update `index.html` meta tags with new domain
6. Commit and push

### Environment Variables (Optional)

In Vercel Dashboard → Settings → Environment Variables:

```
VITE_GA_ID = G-YOUR-ACTUAL-ID
VITE_SITE_URL = https://indxai-website.vercel.app
VITE_FORM_EMAIL = contact@indxai.com
```

After adding, click **Redeploy** from Deployments tab.

## 📊 Monitoring

### Vercel Dashboard
- **Analytics**: View page views, visitors, top pages (free built-in)
- **Logs**: Check for runtime errors
- **Deployments**: See deployment history
- **Domains**: Manage custom domains

### Google Analytics (if configured)
- Go to https://analytics.google.com/
- Select your property
- View Real-Time reports
- Check if events are being tracked

## 🐛 Troubleshooting

### Build Fails
**Error:** Build fails on Vercel
**Solution:** 
- Check Vercel build logs for specific error
- Test `npm run build` locally
- Ensure all dependencies are in `package.json`

### Contact Form Not Working
**Error:** Form submits but no email received
**Solution:**
- Did you click FormSubmit activation link?
- Check spam folder
- Verify email account exists
- Check browser console for errors

### Images Not Loading
**Error:** Broken image icons or missing favicon
**Solution:**
- Ensure files are in `public/` folder
- Check file names match exactly (case-sensitive)
- Verify files are committed to Git
- Push changes to trigger redeploy

### 404 on Page Refresh
**Error:** Refreshing `/privacy` shows 404
**Solution:**
- Use hash routes: `/#privacy` instead of `/privacy`
- `vercel.json` handles this automatically
- If issue persists, check Vercel configuration

### Slow Performance
**Error:** Site loads slowly
**Solution:**
- Optimize images (compress, use WebP format)
- Check Vercel Analytics for bottlenecks
- Consider lazy loading components

## 📞 Support

### Documentation
- **Vercel Docs**: https://vercel.com/docs
- **Vite Docs**: https://vitejs.dev/
- **React Docs**: https://react.dev/
- **FormSubmit**: https://formsubmit.co/

### Contact
- **Website Issues**: contact@indxai.com
- **Vercel Support**: https://vercel.com/support

## ✨ You're Ready!

Once you complete the items in **"Required Before Deployment"**, you're ready to launch! 🎉

**Quick deployment command:**
```powershell
git add .
git commit -m "Ready for deployment"
git push
```

Good luck with your launch! 🚀
