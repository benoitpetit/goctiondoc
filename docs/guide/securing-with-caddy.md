# Securing Goction with Caddy

This guide explains how to set up Caddy as a reverse proxy for Goction, providing automatic HTTPS encryption and improved security.

## 1. Introduction

Caddy is a powerful, enterprise-ready, open source web server with automatic HTTPS written in Go. By using Caddy as a reverse proxy for Goction, we can easily add HTTPS support and benefit from additional security features.

## 2. Prerequisites

- A server with Goction installed and functional
- A domain name pointing to your server's IP address
- Root or sudo access on the server

## 3. Installing Caddy

Follow these instructions to install Caddy on your system:

### a. Ubuntu/Debian:
```bash
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy
```

### b. CentOS/RHEL:
```bash
sudo yum install yum-plugin-copr
sudo yum copr enable @caddy/caddy
sudo yum install caddy
```

### c. macOS (using Homebrew):
```bash
brew install caddy
```

For other systems, please refer to the [official Caddy documentation](https://caddyserver.com/docs/install).

## 4. Configuring Caddy

1. Open or create the Caddy configuration file:
   - On most Linux systems: `/etc/caddy/Caddyfile`
   - On macOS (Homebrew): `$(brew --prefix)/etc/Caddyfile`

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

## 5. Configuring Goction

Modify Goction's configuration to listen only on localhost for security reasons:

1. Open Goction's configuration file (usually `config.json` in Goction's installation directory).
2. Update the configuration to include:

```json
{
    "port": 8080,
    "host": "127.0.0.1",
    // ... other Goction configurations ...
}
```

## 6. Starting Services

1. Start or restart Caddy:
   ```bash
   sudo systemctl restart caddy
   ```

2. Start or restart Goction (the command may vary depending on your setup):
   ```bash
   sudo systemctl restart goction
   ```

## 7. Verifying the Setup

1. Open a web browser and navigate to `https://your-domain.com`.
2. You should see the Goction interface, now secured with HTTPS.
3. Check that the connection is secure (look for the padlock icon in your browser).

## 8. Troubleshooting

If you encounter issues:

1. Check Caddy logs:
   ```bash
   sudo journalctl -u caddy
   ```

2. Ensure ports 80 and 443 are open on your firewall.

3. Verify that your domain is correctly pointing to your server's IP address.

4. Check Goction logs for any application-specific issues.

## 9. Advanced Security Configuration

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

---

By following this guide, you've successfully set up Caddy as a reverse proxy for Goction, enabling HTTPS and improving the overall security of your deployment. Remember to keep both Caddy and Goction updated to ensure you have the latest security patches.