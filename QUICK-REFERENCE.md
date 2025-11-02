# 🎯 Quick Reference - indxai.tech Deployment

## Your Configuration

```
Domain:  indxai.tech
Email:   contact@indxai.tech
Hosting: Vercel (free)
CDN:     Cloudflare (free)
Cost:    ~$1/month (domain only)
```

---

## 🚀 Launch Commands

```powershell
# 1. Commit and push to GitHub
git add .
git commit -m "Production ready for indxai.tech"
git push

# 2. Deploy on Vercel
# Visit: https://vercel.com
# Import from GitHub
# Click Deploy

# 3. Configure DNS in Cloudflare
# Add CNAME: @ → cname.vercel-dns.com (Proxied)
# Add CNAME: www → cname.vercel-dns.com (Proxied)

# 4. Add domain in Vercel
# Settings → Domains → Add indxai.tech and www.indxai.tech

# 5. Activate form
# Visit site → Submit test form → Check email → Click activation link
```

---

## 🔧 Cloudflare DNS Records

```
Type: CNAME | Name: @   | Target: cname.vercel-dns.com | Proxied: ON
Type: CNAME | Name: www | Target: cname.vercel-dns.com | Proxied: ON
```

---

## ⚙️ Cloudflare Critical Settings

**SSL/TLS:**
- Encryption mode: **Full (strict)** ⚠️
- Always Use HTTPS: ON

**Speed:**
- Auto Minify: JS, CSS, HTML - ALL ON
- Brotli: ON
- Rocket Loader: **OFF** (breaks React)

**Caching:**
- Cache Level: Standard
- Browser Cache TTL: 4 hours

**Page Rule** (1 free):
- URL: `indxai.tech/*`
- Cache Level: Cache Everything
- Edge TTL: 1 month

---

## 📧 Email Addresses

```
contact@indxai.tech  - Main contact (ContactPage, FormSubmit)
privacy@indxai.tech  - Privacy inquiries (PrivacyPolicy)
legal@indxai.tech    - Terms inquiries (TermsOfService)
```

**Important:** Activate FormSubmit by submitting test form and clicking confirmation email!

---

## 🧪 Quick Tests

```powershell
# Test DNS
nslookup indxai.tech

# Test SSL
curl -I https://indxai.tech

# Open site
Start-Process "https://indxai.tech"
```

**Online Tests:**
- SSL: https://www.ssllabs.com/ssltest/analyze.html?d=indxai.tech
- Speed: https://gtmetrix.com/
- DNS: https://dnschecker.org/#CNAME/indxai.tech

---

## 📊 Expected Results

**Performance:**
- Load time: < 2 seconds
- Performance score: 90%+
- SSL rating: A or A+

**Features:**
- Global CDN (200+ cities)
- Automatic DDoS protection
- Free SSL certificate
- Edge caching

---

## 🆘 Common Issues

**"Too Many Redirects"**
→ SSL mode must be "Full (strict)"

**Site not loading**
→ Check DNS propagation (wait 5-60 min)
→ Verify CNAME records correct

**Form not working**
→ Did you activate FormSubmit?
→ Check spam for confirmation email

**Assets not loading**
→ Purge Cloudflare cache
→ Turn OFF Rocket Loader

---

## 📁 Files Updated

```
✅ components/ContactPage.tsx      - Form email & display
✅ components/PrivacyPolicy.tsx    - Privacy contact
✅ components/TermsOfService.tsx   - Legal contact
✅ index.html                      - Meta tags, OG, Schema.org
✅ public/robots.txt               - Sitemap URL
✅ .env.example                    - Environment template
```

---

## 📋 Post-Launch Checklist

Immediate:
- [ ] Site loads on https://indxai.tech
- [ ] WWW redirects to main domain
- [ ] HTTP redirects to HTTPS
- [ ] Contact form works
- [ ] Mobile responsive
- [ ] SSL certificate active (A+ rating)

Week 1:
- [ ] Monitor Cloudflare analytics
- [ ] Check for errors in Vercel logs
- [ ] Test form submissions
- [ ] Add favicon and images
- [ ] Set up Google Analytics

---

## 🔗 Important Links

**Cloudflare:**
- Dashboard: https://dash.cloudflare.com/
- Your site DNS: https://dash.cloudflare.com/[id]/indxai.tech/dns

**Vercel:**
- Dashboard: https://vercel.com/dashboard
- Your project: https://vercel.com/[username]/indxai-website

**Tools:**
- GitHub: https://github.com/[username]/indxai-website
- FormSubmit: https://formsubmit.co/

---

## 📞 Support

- Cloudflare: https://community.cloudflare.com/
- Vercel: https://vercel.com/docs
- Your email: contact@indxai.tech

---

## 💡 Tips

1. **Always use "Full (strict)" SSL** - Most important setting!
2. **Keep orange cloud ON** - Enables Cloudflare protection
3. **Test before launch** - Use development mode while testing
4. **Purge cache** - After making changes, purge Cloudflare cache
5. **Monitor analytics** - Check both Cloudflare and Vercel dashboards

---

**Build Status:** ✅ Production build successful (227.87 KB, 1.45s)

**You're ready to deploy!** 🚀

See `CLOUDFLARE-SETUP.md` for detailed step-by-step instructions.
