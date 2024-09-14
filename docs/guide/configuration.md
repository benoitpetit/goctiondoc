# Configuration Guide

## 1. Configuration File Location
- Root: `/etc/goction/config.json`
- Other users: `~/.config/goction/config.json`

## 2. Configuration Options
Example configuration:
```json
{
  "goctions_dir": "/path/to/your/goctions",
  "port": 8080,
  "log_file": "/path/to/goction.log",
  "api_token": "your-secret-api-token",
  "stats_file": "/path/to/goction_stats.json"
}
```

## 3. Modifying the Configuration
1. Edit the configuration file
2. Save changes
3. Restart the service:
   ```bash
   sudo systemctl restart goction
   ```

## 4. Viewing Current Configuration
```bash
goction config view
```

## 5. Resetting the Configuration
```bash
goction config reset
```

## 6. Systemd Service Configuration
1. Edit the service file:
   ```bash
   sudo nano /etc/systemd/system/goction.service
   ```
2. Make changes
3. Save the file
4. Reload systemd:
   ```bash
   sudo systemctl daemon-reload
   ```
5. Restart the service:
   ```bash
   sudo systemctl restart goction
   ```

Remember to keep your `api_token` secure.

<FeedbackComponent/>