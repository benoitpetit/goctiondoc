# Securing Goction with Caddy

This guide explains how to set up Caddy as a reverse proxy for Goction, providing automatic HTTPS encryption and improved security.

## Introduction

Caddy is a powerful, enterprise-ready, open source web server with automatic HTTPS written in Go. Using Caddy as a reverse proxy for Goction offers several benefits:

- Automatic HTTPS with Let's Encrypt
- HTTP/2 and HTTP/3 support
- Additional security headers
- Easy configuration

## Prerequisites

- A server with Goction installed and functional
- A domain name pointing to your server's IP address
- Root or sudo access on the server

## Step-by-Step Guide

### 1. Install Caddy

#### For Ubuntu/Debian:
```bash
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy
```

#### For CentOS/RHEL:
```bash
sudo yum install yum-plugin-copr
sudo yum copr enable @caddy/caddy
sudo yum install caddy
```

For other systems, refer to the [official Caddy documentation](https://caddyserver.com/docs/install).

### 2. Configure Caddy

1. Open the Caddy configuration file:
   ```bash
   sudo nano /etc/caddy/Caddyfile
   ```

2. Add the following configuration:

   ```caddyfile
   {
       email your-email@example.com
   }

   your-domain.com {
       reverse_proxy localhost:8080
       encode gzip
       tls {
           protocols tls1.2 tls1.3
       }
       header {
           Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
           X-Content-Type-Options nosniff
           X-Frame-Options DENY
           Referrer-Policy no-referrer-when-downgrade
       }
   }
   ```

   Replace `your-email@example.com` with your actual email address and `your-domain.com` with your domain name.

### 3. Configure Goction

1. Open Goction's configuration file:
   ```bash
   sudo nano /etc/goction/config.json
   ```

2. Update the configuration to listen only on localhost:
   ```json
   {
       "port": 8080,
       "host": "127.0.0.1",
       // ... other Goction configurations ...
   }
   ```

### 4. Start Services

1. Restart Caddy:
   ```bash
   sudo systemctl restart caddy
   ```

2. Restart Goction:
   ```bash
   sudo systemctl restart goction
   ```

### 5. Verify the Setup

1. Open a web browser and navigate to `https://your-domain.com`.
2. You should see the Goction interface, now secured with HTTPS.
3. Check that the connection is secure (look for the padlock icon in your browser).

## Security Enhancements

### Enable HTTP/3 (QUIC)

Add the following to your Caddyfile:

```caddyfile
your-domain.com {
    # ... existing configuration ...
    servers {
        protocol {
            experimental_http3
        }
    }
}
```

### Implement IP Filtering

To restrict access to specific IP addresses:

```caddyfile
your-domain.com {
    # ... existing configuration ...
    @allowed_ips {
        remote_ip 192.168.1.0/24 10.0.0.0/8
    }
    handle {
        reverse_proxy @allowed_ips localhost:8080
        respond 403
    }
}
```

Replace the IP ranges with your allowed IP addresses or ranges.

### Enable Basic Authentication

For an additional layer of security:

1. Generate a password file:
   ```bash
   caddy hash-password
   ```
   Enter your desired password and note the generated hash.

2. Create a users file:
   ```bash
   sudo nano /etc/caddy/users
   ```
   Add a line in the format: `username:hashed_password`

3. Update your Caddyfile:
   ```caddyfile
   your-domain.com {
       # ... existing configuration ...
       basic_auth {
           realm "Goction Dashboard"
           file /etc/caddy/users
       }
   }
   ```

### Implement Rate Limiting

To protect against abuse:

```caddyfile
your-domain.com {
    # ... existing configuration ...
    rate_limit {
        zones {
            goction_api {
                max 100
                period 1m
            }
        }
    }
    handle_path /api/* {
        rate_limit goction_api
        reverse_proxy localhost:8080
    }
}
```

This limits API requests to 100 per minute.

## Troubleshooting

If you encounter issues:

1. Check Caddy logs:
   ```bash
   sudo journalctl -u caddy
   ```

2. Verify Caddy configuration:
   ```bash
   caddy run --config /etc/caddy/Caddyfile
   ```

3. Ensure ports 80 and 443 are open:
   ```bash
   sudo ufw allow 80/tcp
   sudo ufw allow 443/tcp
   ```

4. Verify that your domain is correctly pointing to your server's IP address.

## Maintenance

### Updating Caddy

To update Caddy:

```bash
sudo apt update
sudo apt upgrade caddy
```

### Backing Up Caddy Configuration

Regularly backup your Caddy configuration:

```bash
sudo cp /etc/caddy/Caddyfile /etc/caddy/Caddyfile.backup
```

## Conclusion

By following this guide, you've successfully set up Caddy as a reverse proxy for Goction, enabling HTTPS and improving the overall security of your deployment. Remember to:

- Regularly update both Caddy and Goction
- Monitor logs for any suspicious activity
- Keep your SSL certificates up to date (Caddy handles this automatically with Let's Encrypt)
- Periodically review and adjust your security settings

For more information on Goction's configuration and usage, refer to the [Configuration Guide](./configuration.md) and [Usage Guide](./usage.md).