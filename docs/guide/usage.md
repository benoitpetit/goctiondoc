# Usage Guide

This guide covers the main usage scenarios for Goction.

## 1. Managing Goctions

### a. Creating a New Goction
```bash
goction new my_goction
```

### b. Listing Goctions
```bash
goction list
```

### c. Updating a Goction
```bash
goction update my_goction
```

### d. Modifying a Goction
1. Navigate to the goction's directory.
2. Edit the `main.go` file.
3. Run `goction update my_goction`

## 2. Service Management

### a. Using Goction Commands
Start: `goction start`
Stop: `goction stop`

### b. Using Systemd
- Start: `sudo systemctl start goction`
- Stop: `sudo systemctl stop goction`
- Restart: `sudo systemctl restart goction`
- Status: `sudo systemctl status goction`
- Enable at boot: `sudo systemctl enable goction`
- Disable at boot: `sudo systemctl disable goction`

## 3. Using the API
```bash
curl -X POST -H "Content-Type: application/json" -H "X-API-Token: your-secret-token" -d '{"args":["arg1", "arg2"]}' http://localhost:8080/goctions/my_goction
```

## 4. Dashboard CLI and Execution

### a. Displaying the Dashboard
```bash
goction dashboard
```

### b. Executing a Goction
```bash
goction run my_goction [arg1 arg2 ...]
```

## 5. Dashboard HTTP

Goction provides a powerful web-based dashboard for managing and monitoring your goctions. To access the dashboard:

1. Ensure the Goction service is running.
2. Open your web browser and navigate to `http://localhost:8080` (or the configured address).
3. Log in using the credentials set in your Goction configuration.

For more detailed information about the dashboard features and usage, please refer to our [Dashboard Guide](./dashboard.md).


## 6. Advanced Usage

### a. Viewing Logs
Goction logs: `goction logs`
Systemd service logs: `sudo journalctl -u goction`

### b. Checking Goction Stats
```bash
goction stats my_goction
```

### c. Updating Goction
```bash
goction self-update
```

### d. Exporting a Goction
```bash
goction export my_goction
```

### e. Importing a Goction
```bash
goction import my_goction.zip
```

Remember to check the [configuration guide](/guide/configuration.md) for customizing Goction's behavior.

<FeedbackComponent/>