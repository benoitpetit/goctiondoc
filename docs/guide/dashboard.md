# Goction Dashboard

The Goction Dashboard is an intuitive and powerful web interface for managing and monitoring your goctions (Goction actions). It provides a comprehensive overview of your configurations, statistics, and real-time logs.

## Features

- **Dark UI**: A modern, ergonomic design optimized for extended use.
- **Secure Authentication**: Protect your data with a robust login system.
- **Configuration Overview**: Quickly access essential information about your Goction installation.
- **Detailed Statistics**: Track the performance of your goctions with key metrics.
- **Execution History**: View the complete history of your goctions' executions.
- **Real-time Logs**: Visualize the most recent logs directly from the interface.

### Dashboard Overview

![DashboardLogin](/images/dashboardlogin.png)
![Dashboard](/images/dashboard.png)

## Accessing the Dashboard

1. Ensure the Goction service is running:

   ```bash
   sudo systemctl status goction
   ```

   If it's not running, start it with:

   ```bash
   sudo systemctl start goction
   ```

2. Open your web browser and navigate to:

   ```
   http://localhost:8080
   ```

   Replace `localhost` with your server's IP address or domain name if accessing remotely.

3. Log in using the credentials set in your Goction configuration file.

## Dashboard Configuration

The dashboard uses the parameters defined in your Goction configuration file `/etc/goction/config.json`.
Here are the main elements to configure:

```json
{
  "dashboard_username": "your_username",
  "dashboard_password": "your_password",
  "port": 8080
}
```

- `dashboard_username`: The username for accessing the dashboard.
- `dashboard_password`: The password for accessing the dashboard.
- `port`: The port on which the Goction server (and thus the dashboard) will be accessible.

To modify these settings:

1. Open the configuration file:
   ```bash
   sudo nano /etc/goction/config.json
   ```
2. Make your changes and save the file.
3. Restart the Goction service:
   ```bash
   sudo systemctl restart goction
   ```

## Dashboard Sections

1. **Overview**: Displays general information about your Goction installation, including version, uptime, and total number of goctions.

2. **Goctions List**: Shows all available goctions with options to view details, execute, or manage each one.

3. **Execution History**: Provides a detailed log of all goction executions, including timestamps, duration, and results.

4. **System Logs**: Displays recent system logs for troubleshooting and monitoring.

5. **Configuration**: Allows you to view and edit your Goction configuration directly from the dashboard.

## Security Considerations

- Always use a strong, unique password for dashboard access.
- Consider setting up HTTPS to encrypt dashboard traffic. You can use a reverse proxy like Nginx or Caddy for this purpose. For detailed instructions on securing Goction with Caddy, see our [Securing with Caddy](./securing-with-caddy.md) guide.
- Regularly update your Goction installation to ensure you have the latest security patches.

## Troubleshooting

If you're having trouble accessing the dashboard:

1. Verify that the Goction service is running.
2. Check the Goction logs for any error messages:
   ```bash
   sudo journalctl -u goction
   ```
3. Ensure your firewall allows traffic on the configured port (default 8080).
4. Verify that the dashboard credentials in `/etc/goction/config.json` are correct.

For more detailed information on using Goction, please refer to the [Usage Guide](./usage.md).
