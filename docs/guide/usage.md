# Usage Guide

This guide covers the main usage scenarios for Goction.

## Managing Goctions

### Creating a New Goction
```bash
goction new my_goction
```

### Listing Goctions
```bash
goction list
```

### Updating a Goction
```bash
goction update my_goction
```

### Modifying a Goction
1. Navigate to the goction's directory: `/etc/goction/goctions/my_goction/`
2. Edit the `main.go` file.
3. Run `goction update my_goction`

## Service Management

### Using Goction Commands
- Start: `goction start`
- Stop: `goction stop`

### Using Systemd
- Start: `sudo systemctl start goction`
- Stop: `sudo systemctl stop goction`
- Restart: `sudo systemctl restart goction`
- Status: `sudo systemctl status goction`
- Enable at boot: `sudo systemctl enable goction`
- Disable at boot: `sudo systemctl disable goction`

## Using the API

Execute a goction via the HTTP API:

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -H "X-API-Token: your-secret-token" \
  -d '{"args":["arg1", "arg2"]}' \
  http://localhost:8080/api/goctions/my_goction
```

## Dashboard

To access the web-based dashboard:

1. Ensure the Goction service is running.
2. Open your web browser and navigate to `http://localhost:8080` (or the configured address).
3. Log in using the credentials set in your Goction configuration.

For more detailed information about the dashboard features and usage, please refer to our [Dashboard Guide](./dashboard.md).

## Advanced Usage

### Viewing Logs
- Goction logs: `goction logs`
- Systemd service logs: `sudo journalctl -u goction`

### Checking Goction Stats
```bash
goction stats my_goction
```

### Exporting a Goction
```bash
goction export my_goction
```

### Importing a Goction
```bash
goction import my_goction.zip
```

For more advanced topics and usage scenarios, please refer to the [Advanced Guide](./advanced.md).