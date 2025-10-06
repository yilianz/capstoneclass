# Deployment Guide

This guide explains how to deploy the Dice Roll Game PWA to various platforms.

## Quick Start (Local Testing)

### Option 1: Python HTTP Server
```bash
python3 -m http.server 8000
```
Then visit: http://localhost:8000

### Option 2: Node.js HTTP Server
```bash
npx http-server -p 8000
```
Then visit: http://localhost:8000

### Option 3: PHP Server
```bash
php -S localhost:8000
```
Then visit: http://localhost:8000

## Deployment Options

### 1. GitHub Pages (Recommended for this repo)

**Steps:**
1. Push all files to your GitHub repository
2. Go to repository Settings → Pages
3. Under "Source", select the branch (e.g., `main`)
4. Select root `/` as the folder
5. Click Save
6. Your site will be available at: `https://username.github.io/capstoneclass/`

**Important Note for GitHub Pages:**
Since GitHub Pages deploys to a subdirectory, you may need to update the `start_url` in `manifest.json`:
```json
"start_url": "/capstoneclass/"
```
And update service worker paths accordingly.

### 2. Netlify

**Steps:**
1. Create account at https://netlify.com
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Build settings:
   - Build command: (leave empty)
   - Publish directory: `/` (or `.`)
5. Click "Deploy site"
6. Your site will be live on a netlify.app subdomain
7. Optional: Add custom domain

**Advantages:**
- Automatic HTTPS
- Automatic deployments on git push
- Free tier available
- CDN included

### 3. Vercel

**Steps:**
1. Create account at https://vercel.com
2. Import your GitHub repository
3. Vercel will auto-detect static site
4. Click Deploy
5. Site will be live on vercel.app subdomain

**Advantages:**
- Automatic HTTPS
- Free tier available
- Fast deployments
- Good analytics

### 4. Firebase Hosting

**Steps:**
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Select your project or create new one
5. Set public directory to current directory (`.`)
6. Configure as single-page app: No
7. Deploy: `firebase deploy`

**Advantages:**
- Google infrastructure
- Free tier available
- Excellent performance
- Easy SSL/HTTPS

### 5. Traditional Web Hosting

Upload all files to your web host via FTP/SFTP:
- index.html
- style.css
- app.js
- manifest.json
- service-worker.js
- icons/ (entire folder)

**Requirements:**
- HTTPS is required for PWA features (Service Worker)
- If your host doesn't provide HTTPS, consider using Cloudflare (free)

## Post-Deployment Checklist

After deploying, verify:

1. **HTTPS is working**
   - PWAs require HTTPS (except localhost)
   - Check that the URL starts with `https://`

2. **Manifest is accessible**
   - Visit: `https://yourdomain.com/manifest.json`
   - Should return JSON with no errors

3. **Service Worker registers**
   - Open DevTools → Application → Service Workers
   - Should show service-worker.js as activated

4. **Icons are accessible**
   - Visit: `https://yourdomain.com/icons/icon-192x192.png`
   - All icons should load

5. **Install prompt appears**
   - On mobile Chrome: Should see install banner
   - On desktop Chrome: Should see install icon in address bar

6. **Offline functionality works**
   - Load the page once
   - Disconnect from internet
   - Reload page - should still work

## Testing PWA Score

Use Google Lighthouse to verify PWA compliance:

1. Open your deployed site
2. Open Chrome DevTools (F12)
3. Go to "Lighthouse" tab
4. Select "Progressive Web App"
5. Click "Generate report"

**Target scores:**
- PWA: 100%
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+

## Troubleshooting

### Service Worker not registering
- Ensure HTTPS is enabled
- Check browser console for errors
- Verify service-worker.js path is correct

### Icons not showing
- Verify all icon files exist in icons/ directory
- Check manifest.json paths
- Ensure icon files are uploaded to server

### Install prompt not appearing
- Manifest must be valid JSON
- HTTPS is required
- Service worker must be registered
- May need to wait a moment after first visit

### App not working offline
- Visit the app once while online
- Check that service worker is activated
- Verify all resources are cached

## Custom Domain Setup

### For GitHub Pages:
1. Add CNAME file with your domain
2. Configure DNS with your registrar
3. Enable HTTPS in GitHub Pages settings

### For Netlify/Vercel:
1. Go to Domain settings
2. Add custom domain
3. Update DNS records as instructed
4. HTTPS is automatic

## Performance Optimization

Already implemented:
- ✅ Minified CSS (single file)
- ✅ Vanilla JavaScript (no frameworks)
- ✅ Optimized icons
- ✅ Service Worker caching
- ✅ No external dependencies

## Monitoring

After deployment, monitor:
- User installations (via analytics)
- Service worker updates
- Error rates
- Performance metrics

## Updates and Maintenance

To update the app:
1. Make changes to files
2. Update cache version in service-worker.js:
   ```javascript
   const CACHE_NAME = 'dice-game-v2'; // increment version
   ```
3. Deploy changes
4. Service worker will update automatically

---

**Need help?** Check the README.md for more information or open an issue on GitHub.
