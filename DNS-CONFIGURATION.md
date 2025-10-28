# DNS Configuration Guide for GoDaddy

## Current Setup
- **Domain**: zuberifreshfarm.com
- **GitHub Pages**: njau-wangari.github.io/Zuberi-Farm-Fresh
- **Nginx Proxy**: Your server IP (to be configured)

## GoDaddy DNS Configuration

### Required DNS Records

#### 1. A Records (IPv4)
Point your domain to your nginx server's IP address:

```
Type: A
Name: @
Value: YOUR_SERVER_IP_ADDRESS
TTL: 3600 (1 hour)

Type: A  
Name: www
Value: YOUR_SERVER_IP_ADDRESS
TTL: 3600 (1 hour)
```

#### 2. CNAME Record (Alternative)
If you prefer to use CNAME for www subdomain:

```
Type: CNAME
Name: www
Value: zuberifreshfarm.com
TTL: 3600 (1 hour)
```

### Steps to Configure in GoDaddy

1. **Log into GoDaddy**
   - Go to https://godaddy.com
   - Sign in to your account
   - Go to "My Products" → "Domains"

2. **Access DNS Management**
   - Find zuberifreshfarm.com
   - Click "DNS" or "Manage DNS"

3. **Update A Records**
   - Find existing A records for @ and www
   - Edit them to point to your nginx server IP
   - If they don't exist, add new A records

4. **Remove GitHub Pages Records**
   - Remove any existing CNAME records pointing to GitHub Pages
   - Remove any A records pointing to GitHub Pages IPs

### Important Notes

⚠️ **Before making DNS changes:**
- Ensure your nginx server is running and accessible
- Test that your server responds to HTTP requests
- Have the SSL setup script ready to run

⚠️ **DNS Propagation:**
- Changes can take 1-24 hours to propagate globally
- Use tools like `dig` or `nslookup` to check propagation
- Test from different locations if possible

### Verification Commands

After updating DNS, verify the configuration:

```bash
# Check A records
dig zuberifreshfarm.com A
dig www.zuberifreshfarm.com A

# Check from different DNS servers
dig @8.8.8.8 zuberifreshfarm.com A
dig @1.1.1.1 zuberifreshfarm.com A

# Test connectivity
ping zuberifreshfarm.com
ping www.zuberifreshfarm.com
```

### Troubleshooting DNS Issues

#### 1. DNS Not Propagating
- Wait up to 24 hours for full propagation
- Clear your local DNS cache: `sudo systemctl flush-dns` (Linux) or `ipconfig /flushdns` (Windows)
- Use different DNS servers to test

#### 2. Website Not Loading After DNS Update
- Check if your nginx server is running
- Verify firewall allows HTTP/HTTPS traffic
- Check nginx configuration syntax
- Review nginx error logs

#### 3. SSL Certificate Issues
- Ensure DNS is fully propagated before requesting SSL certificate
- Run the SSL setup script after DNS propagation is complete
- Check that both zuberifreshfarm.com and www.zuberifreshfarm.com resolve to your server

### Security Considerations

1. **Use HTTPS Only**
   - The nginx configuration redirects all HTTP traffic to HTTPS
   - Ensure SSL certificates are properly configured

2. **Monitor DNS Changes**
   - Keep track of when DNS changes were made
   - Monitor for any unauthorized DNS modifications

3. **Backup DNS Configuration**
   - Take screenshots of your DNS settings
   - Document any custom configurations

### Next Steps After DNS Configuration

1. **Wait for DNS Propagation** (1-24 hours)
2. **Run SSL Setup Script**:
   ```bash
   sudo ./scripts/setup-ssl.sh
   ```
3. **Test Configuration**:
   ```bash
   sudo ./scripts/test-nginx-config.sh
   ```
4. **Verify Website**:
   - Visit https://zuberifreshfarm.com
   - Check security headers
   - Test all functionality

---

**Important**: Replace `YOUR_SERVER_IP_ADDRESS` with your actual nginx server's IP address before making DNS changes.
