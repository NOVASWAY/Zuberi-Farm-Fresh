#!/bin/bash

# Nginx Configuration Test Script
# Tests the nginx configuration and verifies security headers

set -e

DOMAIN="zuberifreshfarm.com"
NGINX_CONF="/etc/nginx/sites-available/zuberi-farm-fresh.conf"

echo "🧪 Testing nginx configuration for $DOMAIN"

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    echo "❌ Please run as root (use sudo)"
    exit 1
fi

# Test nginx configuration syntax
echo "📝 Testing nginx configuration syntax..."
nginx -t

if [ $? -eq 0 ]; then
    echo "✅ Nginx configuration syntax is valid"
else
    echo "❌ Nginx configuration has syntax errors"
    exit 1
fi

# Reload nginx
echo "🔄 Reloading nginx..."
systemctl reload nginx

# Wait for nginx to start
sleep 2

# Test if nginx is running
echo "🔍 Checking nginx status..."
systemctl is-active nginx

if [ $? -eq 0 ]; then
    echo "✅ Nginx is running"
else
    echo "❌ Nginx is not running"
    exit 1
fi

# Test HTTP to HTTPS redirect
echo "🔄 Testing HTTP to HTTPS redirect..."
HTTP_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" http://$DOMAIN)
if [ "$HTTP_RESPONSE" = "301" ] || [ "$HTTP_RESPONSE" = "302" ]; then
    echo "✅ HTTP to HTTPS redirect is working"
else
    echo "❌ HTTP to HTTPS redirect failed (HTTP $HTTP_RESPONSE)"
fi

# Test HTTPS connection
echo "🔒 Testing HTTPS connection..."
HTTPS_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" https://$DOMAIN)
if [ "$HTTPS_RESPONSE" = "200" ]; then
    echo "✅ HTTPS connection is working"
else
    echo "❌ HTTPS connection failed (HTTP $HTTPS_RESPONSE)"
fi

# Test security headers
echo "🛡️ Testing security headers..."
echo "Checking security headers on https://$DOMAIN..."

# Test HSTS header
HSTS=$(curl -s -I https://$DOMAIN | grep -i "strict-transport-security" || echo "")
if [ -n "$HSTS" ]; then
    echo "✅ HSTS header present: $HSTS"
else
    echo "❌ HSTS header missing"
fi

# Test X-Frame-Options header
XFRAME=$(curl -s -I https://$DOMAIN | grep -i "x-frame-options" || echo "")
if [ -n "$XFRAME" ]; then
    echo "✅ X-Frame-Options header present: $XFRAME"
else
    echo "❌ X-Frame-Options header missing"
fi

# Test X-Content-Type-Options header
XCONTENT=$(curl -s -I https://$DOMAIN | grep -i "x-content-type-options" || echo "")
if [ -n "$XCONTENT" ]; then
    echo "✅ X-Content-Type-Options header present: $XCONTENT"
else
    echo "❌ X-Content-Type-Options header missing"
fi

# Test Content-Security-Policy header
CSP=$(curl -s -I https://$DOMAIN | grep -i "content-security-policy" || echo "")
if [ -n "$CSP" ]; then
    echo "✅ Content-Security-Policy header present"
else
    echo "❌ Content-Security-Policy header missing"
fi

# Test SSL certificate
echo "🔐 Testing SSL certificate..."
SSL_INFO=$(echo | openssl s_client -servername $DOMAIN -connect $DOMAIN:443 2>/dev/null | openssl x509 -noout -dates 2>/dev/null)
if [ -n "$SSL_INFO" ]; then
    echo "✅ SSL certificate is valid"
    echo "📅 Certificate dates:"
    echo "$SSL_INFO"
else
    echo "❌ SSL certificate validation failed"
fi

# Test health endpoint
echo "🏥 Testing health endpoint..."
HEALTH_RESPONSE=$(curl -s https://$DOMAIN/health)
if [ "$HEALTH_RESPONSE" = "healthy" ]; then
    echo "✅ Health endpoint is working"
else
    echo "❌ Health endpoint failed"
fi

echo ""
echo "🎉 Configuration test complete!"
echo "🌐 Your website is available at: https://$DOMAIN"
echo "📊 Check the results above for any issues that need attention"
