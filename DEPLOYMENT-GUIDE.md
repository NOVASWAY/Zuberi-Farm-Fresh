# Zuberi Fresh Farm - Deployment Guide

## Overview
This guide explains how to safely update your GitHub Pages website without disrupting the live site, and how to maintain the nginx proxy configuration with security headers.

## Current Setup
- **Domain**: zuberifreshfarm.com (GoDaddy)
- **GitHub Pages**: njau-wangari.github.io/Zuberi-Farm-Fresh
- **Nginx Proxy**: Provides security headers and SSL termination
- **SSL**: Let's Encrypt certificates with auto-renewal

## Safe Deployment Process

### 1. Pre-Deployment Checklist
Before making any changes to your website:

```bash
# Test your changes locally
npm run dev
# Visit http://localhost:3000 to verify changes

# Build and test the static export
npm run build
npm run export
# Test the exported files in the 'out' directory
```

### 2. Staging Deployment (Recommended)
To avoid disrupting the live site, use a staging approach:

#### Option A: Branch-based Staging
1. Create a staging branch:
```bash
git checkout -b staging
# Make your changes
git add .
git commit -m "Your changes"
git push origin staging
```

2. Test on staging URL: `https://njau-wangari.github.io/Zuberi-Farm-Fresh/staging/`

3. If everything looks good, merge to main:
```bash
git checkout main
git merge staging
git push origin main
```

#### Option B: Feature Branch Testing
1. Create a feature branch:
```bash
git checkout -b feature/your-feature-name
# Make your changes
git add .
git commit -m "Add your feature"
git push origin feature/your-feature-name
```

2. Test the feature branch deployment
3. Create a Pull Request to main branch
4. Review and merge when ready

### 3. Production Deployment
When ready to deploy to production:

```bash
# Ensure you're on the main branch
git checkout main

# Pull latest changes
git pull origin main

# Build the project
npm run build

# The build process will create static files in the 'out' directory
# GitHub Pages will automatically deploy these files
```

### 4. Post-Deployment Verification
After deployment, verify everything is working:

```bash
# Run the nginx test script
sudo ./scripts/test-nginx-config.sh

# Check the live site
curl -I https://zuberifreshfarm.com

# Verify security headers
curl -s -I https://zuberifreshfarm.com | grep -i "strict-transport-security\|x-frame-options\|content-security-policy"
```

## Nginx Configuration Management

### Updating Nginx Configuration
If you need to modify the nginx configuration:

1. Edit the configuration file:
```bash
sudo nano /etc/nginx/sites-available/zuberi-farm-fresh.conf
```

2. Test the configuration:
```bash
sudo nginx -t
```

3. If the test passes, reload nginx:
```bash
sudo systemctl reload nginx
```

### Monitoring and Maintenance

#### Check Nginx Status
```bash
sudo systemctl status nginx
sudo nginx -t
```

#### View Nginx Logs
```bash
# Access logs
sudo tail -f /var/log/nginx/access.log

# Error logs
sudo tail -f /var/log/nginx/error.log
```

#### SSL Certificate Management
```bash
# Check certificate status
sudo certbot certificates

# Test certificate renewal
sudo certbot renew --dry-run

# Manual renewal (if needed)
sudo certbot renew
```

## Security Headers Explained

The nginx configuration includes these security headers:

- **HSTS**: Forces HTTPS connections
- **X-Frame-Options**: Prevents clickjacking attacks
- **X-Content-Type-Options**: Prevents MIME type sniffing
- **Content-Security-Policy**: Controls resource loading
- **Referrer-Policy**: Controls referrer information
- **Permissions-Policy**: Controls browser features

## Troubleshooting

### Common Issues

#### 1. Website Not Loading
```bash
# Check nginx status
sudo systemctl status nginx

# Check configuration
sudo nginx -t

# Check logs
sudo tail -f /var/log/nginx/error.log
```

#### 2. SSL Certificate Issues
```bash
# Check certificate
sudo certbot certificates

# Renew certificate
sudo certbot renew

# Check certificate details
echo | openssl s_client -servername zuberifreshfarm.com -connect zuberifreshfarm.com:443 2>/dev/null | openssl x509 -noout -text
```

#### 3. GitHub Pages Not Updating
- Check GitHub Actions status in your repository
- Verify the CNAME file is correct
- Ensure the build process completed successfully

### Emergency Rollback
If you need to quickly rollback:

1. Revert to previous commit:
```bash
git log --oneline  # Find the previous commit
git revert <commit-hash>
git push origin main
```

2. Or restore from backup branch:
```bash
git checkout main
git reset --hard <previous-commit-hash>
git push origin main --force
```

## Best Practices

### 1. Always Test Locally First
- Use `npm run dev` to test changes
- Use `npm run build` to test the production build

### 2. Use Feature Branches
- Create branches for new features
- Test thoroughly before merging to main

### 3. Monitor After Deployment
- Check the live site immediately after deployment
- Monitor nginx logs for any errors
- Verify all functionality works as expected

### 4. Keep Dependencies Updated
```bash
# Check for outdated packages
npm outdated

# Update packages
npm update

# Update major versions carefully
npm install package@latest
```

### 5. Regular Maintenance
- Monitor SSL certificate expiration
- Check nginx logs regularly
- Update system packages monthly
- Test security headers periodically

## Contact Information
For technical support or questions about this deployment setup, refer to the nginx configuration files and scripts in the `/nginx` and `/scripts` directories.

---

**Last Updated**: $(date)
**Version**: 1.0
