# Securing Goction with Caddy

This guide explains how to set up Caddy as a reverse proxy for Goction, providing automatic HTTPS encryption and improved security.

## Introduction

Caddy is a powerful, enterprise-ready, open source web server with automatic HTTPS written in Go. By using Caddy as a reverse proxy for Goction, we can easily add HTTPS support and benefit from additional security features.

## Prerequisites

- A server with Goction installed and functional
- A domain name pointing to your server's IP address
- Root or sudo access on the server

## Installing Caddy

Follow these instructions to install Caddy on your system:

### Ubuntu/Debian:

```bash
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy
```

### CentOS/RHEL:

```bash
sudo yum install yum-plugin-copr
sudo yum copr enable @caddy/caddy
sudo yum install caddy
```

For other systems, please refer to the [official Caddy documentation](https://caddyserver.com/docs/install).

## Configuring Caddy

1. Open the Caddy configuration file:

   ```bash
   sudo nano /etc/caddy/Caddyfile
   ```

2. Add the following configuration:

```caddyfile
{
    email your-email@example.com  # Used for ACME account registration
}

your-domain.com {
    reverse_proxy localhost:8080  # Ensure this port matches Goction's port
    encode gzip
    tls {
        protocols tls1.2 tls1.3
    }
}
```

Replace `your-email@example.com` with your actual email address and `your-domain.com` with your domain name.

## Configuring Goction

Modify Goction's configuration to listen only on localhost for security reasons:

1. Open Goction's configuration file:

   ```bash
   sudo nano /etc/goction/config.json
   ```

2. Update the configuration to include:

```json
{
  "port": 8080,
  "host": "127.0.0.1"
  // ... other Goction configurations ...
}
```

## Starting Services

1. Start or restart Caddy:

   ```bash
   sudo systemctl restart caddy
   ```

2. Start or restart Goction:
   ```bash
   sudo systemctl restart goction
   ```

## Verifying the Setup

1. Open a web browser and navigate to `https://your-domain.com`.
2. You should see the Goction interface, now secured with HTTPS.
3. Check that the connection is secure (look for the padlock icon in your browser).

## Troubleshooting

If you encounter issues:

1. Check Caddy logs:

   ```bash
   sudo journalctl -u caddy
   ```

2. Check Goction logs:

   ```bash
   sudo journalctl -u goction
   ```

3. Ensure ports 80 and 443 are open on your firewall.

4. Verify that your domain is correctly pointing to your server's IP address.

## Advanced Security Configuration

For enhanced security, you can add additional HTTP headers to your Caddy configuration:

```caddyfile
your-domain.com {
    reverse_proxy localhost:8080
    encode gzip
    header {
        Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
        X-Content-Type-Options nosniff
        X-Frame-Options DENY
        Referrer-Policy no-referrer-when-downgrade
    }
}
```

These headers improve browser security and reduce the risk of common attacks.

## Conclusion

By following this guide, you've successfully set up Caddy as a reverse proxy for Goction, enabling HTTPS and improving the overall security of your deployment. Remember to keep both Caddy and Goction updated to ensure you have the latest security patches.

For more information on Goction's configuration and usage, refer to the [Configuration Guide](./configuration.md) and [Usage Guide](./usage.md).
