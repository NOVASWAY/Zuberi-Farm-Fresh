# Quick Setup Instructions

## Prerequisites
- Ubuntu/Debian server with root access
- Domain: zuberifreshfarm.com
- GoDaddy DNS access

## Step 1: DNS Configuration
1. Log into GoDaddy
2. Go to DNS management for zuberifreshfarm.com
3. Update A records:
   - `@` → `YOUR_SERVER_IP`
   - `www` → `YOUR_SERVER_IP`
4. Wait for DNS propagation (1-24 hours)

## Step 2: Server Setup
```bash
# Clone the repository
git clone https://github.com/njau-wangari/Zuberi-Farm-Fresh.git
cd Zuberi-Farm-Fresh

# Run SSL setup script
sudo ./scripts/setup-ssl.sh

# Test configuration
sudo ./scripts/test-nginx-config.sh
```

## Step 3: Verify Setup
- Visit https://zuberifreshfarm.com
- Check security headers
- Test all website functionality

## Files Created
- `nginx/nginx.conf` - Main nginx configuration
- `nginx/zuberi-farm-fresh.conf` - Site-specific configuration
- `scripts/setup-ssl.sh` - SSL certificate setup
- `scripts/test-nginx-config.sh` - Configuration testing
- `DEPLOYMENT-GUIDE.md` - Detailed deployment guide
- `DNS-CONFIGURATION.md` - DNS setup instructions

## Security Features Included
- ✅ HTTPS redirect
- ✅ HSTS headers
- ✅ X-Frame-Options
- ✅ X-Content-Type-Options
- ✅ Content Security Policy
- ✅ Rate limiting
- ✅ SSL/TLS optimization
- ✅ Automatic certificate renewal

## Safe Updates
- Use feature branches for testing
- Test locally before deploying
- Monitor after deployment
- Follow the DEPLOYMENT-GUIDE.md for detailed procedures
