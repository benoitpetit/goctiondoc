# Configuration Guide

Goction uses a JSON configuration file to manage its settings. This guide will help you understand and customize your Goction configuration.

## Configuration File Location

The JSON configuration file is automatically created on first launch:

- For root: `/etc/goction/config.json`
- For other users: `~/.config/goction/config.json`

## Configuration Options

Here's an example of a typical Goction configuration file:

```json
{
  "goctions_dir": "/path/to/your/goctions",
  "port": 8080,
  "log_file": "/path/to/goction.log",
  "api_token": "your-secret-api-token",
  "stats_file": "/path/to/goction_stats.json"
}
```

- `goctions_dir`: The directory where your goctions are stored.
- `port`: The port number for the HTTP API server.
- `log_file`: The path to the log file.
- `api_token`: Your secret API token for authenticating API requests.
- `stats_file`: The path to the file storing goction execution statistics.

## Modifying the Configuration

To modify the configuration:

1. Open the configuration file in a text editor.
2. Make your changes.
3. Save the file.
4. Restart the Goction service for the changes to take effect:

```bash
goction stop
goction start
```

## Viewing Current Configuration

To view your current configuration:

```bash
goction config view
```

This will display the current configuration settings.

## Resetting the Configuration

If you need to reset the configuration to its default values:

```bash
goction config reset
```

This will create a new configuration file with default settings.

Remember to keep your `api_token` secret and secure, as it's used to authenticate requests to your Goction API.

<FeedbackComponent/>