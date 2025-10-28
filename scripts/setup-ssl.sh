#!/bin/bash

# SSL Certificate Setup Script for Zuberi Fresh Farm
# This script sets up Let's Encrypt SSL certificates for zuberifreshfarm.com

set -e

DOMAIN="zuberifreshfarm.com"
EMAIL="admin@zuberifreshfarm.com"  # Change this to your email
NGINX_CONF="/etc/nginx/conf.d/zuberi-farm-fresh.conf"

echo "🔐 Setting up SSL certificates for $DOMAIN"

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    echo "❌ Please run as root (use sudo)"
    exit 1
fi

# Update system packages
echo "📦 Updating system packages..."
apt update && apt upgrade -y

# Install required packages
echo "📦 Installing required packages..."
apt install -y nginx certbot python3-certbot-nginx ufw

# Configure firewall
echo "🔥 Configuring firewall..."
ufw allow 'Nginx Full'
ufw allow ssh
ufw --force enable

# Stop nginx temporarily for initial setup
systemctl stop nginx

# Create temporary nginx config for certificate generation
echo "📝 Creating temporary nginx configuration..."
cat > /etc/nginx/sites-available/temp-ssl << EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;
    
    location / {
        return 200 'Temporary page for SSL setup';
        add_header Content-Type text/plain;
    }
    
    location /.well-known/acme-challenge/ {
        root /var/www/html;
    }
}
EOF

# Enable temporary site
ln -sf /etc/nginx/sites-available/temp-ssl /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Start nginx
systemctl start nginx

# Obtain SSL certificate
echo "🔐 Obtaining SSL certificate from Let's Encrypt..."
certbot certonly --webroot -w /var/www/html -d $DOMAIN -d www.$DOMAIN --email $EMAIL --agree-tos --non-interactive

# Remove temporary config
rm -f /etc/nginx/sites-enabled/temp-ssl

# Copy our main configuration
echo "📝 Installing main nginx configuration..."
cp /home/njau-wangari/Zuberi-Farm-Fresh/nginx/zuberi-farm-fresh.conf /etc/nginx/sites-available/
ln -sf /etc/nginx/sites-available/zuberi-farm-fresh.conf /etc/nginx/sites-enabled/

# Test nginx configuration
echo "🧪 Testing nginx configuration..."
nginx -t

# Reload nginx
echo "🔄 Reloading nginx..."
systemctl reload nginx

# Setup automatic certificate renewal
echo "⏰ Setting up automatic certificate renewal..."
(crontab -l 2>/dev/null; echo "0 12 * * * /usr/bin/certbot renew --quiet") | crontab -

# Enable nginx to start on boot
systemctl enable nginx

echo "✅ SSL setup complete!"
echo "🌐 Your website should now be available at https://$DOMAIN"
echo "🔒 SSL certificate will auto-renew every 12 hours"

# Display certificate info
echo "📋 Certificate information:"
certbot certificates
