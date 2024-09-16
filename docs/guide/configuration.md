# Configuration Guide

This guide explains how to configure Goction to suit your needs.

## Configuration File Location

The Goction configuration file is located at:

- `/etc/goction/config.json`

## Configuration Options

Here's an example of a typical Goction configuration file:

```json
{
  "goctions_dir": "/etc/goction/goctions",
  "port": 8080,
  "log_file": "/var/log/goction/goction.log",
  "api_token": "your-secret-api-token",
  "stats_file": "/var/log/goction/goction_stats.json",
  "dashboard_username": "admin",
  "dashboard_password": "your-dashboard-password"
}
```

Let's break down each option:

- `goctions_dir`: The directory where your goctions are stored.
- `port`: The port number for the HTTP API and dashboard.
- `log_file`: The location of the Goction log file.
- `api_token`: The secret token used for API authentication.
- `stats_file`: The location of the file storing goction execution statistics.
- `dashboard_username`: The username for accessing the web dashboard.
- `dashboard_password`: The password for accessing the web dashboard.

## Modifying the Configuration

To modify the configuration:

1. Open the configuration file in a text editor:
   ```bash
   sudo nano /etc/goction/config.json
   ```
2. Make your changes and save the file.
3. Restart the Goction service for the changes to take effect:
   ```bash
   sudo systemctl restart goction
   ```

## Viewing Current Configuration

You can view the current configuration using the following command:

```bash
goction config view
```

## Resetting the Configuration

To reset the configuration to default values:

```bash
goction config reset
```

Remember to restart the Goction service after resetting the configuration.

## Security Considerations

- Keep your `api_token` secret and change it regularly.
- Use strong passwords for the dashboard access.
- Consider using environment variables for sensitive information in production environments.

For more information on using Goction, please refer to the [Usage Guide](./usage.md).