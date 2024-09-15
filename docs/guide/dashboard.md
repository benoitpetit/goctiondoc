# Goction Dashboard (beta)

The Goction Dashboard is an intuitive and powerful web interface for managing and monitoring your goctions (Goction actions). It provides a comprehensive overview of your configurations, statistics, and real-time logs.

## 1. Features

- **Dark UI**: A modern, ergonomic design optimized for extended use.
- **Secure Authentication**: Protect your data with a robust login system.
- **Configuration Overview**: Quickly access essential information about your Goction installation.
- **Detailed Statistics**: Track the performance of your goctions with key metrics.
- **Execution History**: View the complete history of your goctions' executions.
- **Real-time Logs**: Visualize the most recent logs directly from the interface.

### a. Dashboard Overview

![DashboardLogin](/images/dashboardlogin.png)
![Dashboard](/images/dashboard.png)

## 2. Configuration

### a. Prerequisites

- Goction installed and configured on your system
- A modern web browser

### b. Accessing the Dashboard

1. Ensure the Goction service is running.
2. Open your browser and navigate to `http://localhost:8080` (or the address configured for your installation).
3. Use the credentials set in your Goction configuration file to log in.

### c. Dashboard Configuration

The dashboard uses the parameters defined in your Goction configuration file `~/.config/goction/config.json`.
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

## 3. Customization

The dashboard uses the Bulma CSS framework and is designed to be easily customizable. If you want to modify the appearance or add new features, you can edit the template files located in the `internal/api/dashboard/templates/` folder.

---

We hope this dashboard will help you get the most out of your goctions. Don't hesitate to provide feedback and suggestions to further improve it!
