# Goction Commands

This page provides a comprehensive list of all available commands in Goction, organized by category.

## Goction Management

### `goction new <goction-name>`
Creates a new goction with the specified name.

### `goction list`
Lists all available goctions.

### `goction update <goction-name>`
Updates an existing goction.

### `goction run <goction-name> [args...]`
Executes a specific goction with optional arguments.

### `goction export <goction-name>`
Exports a goction to a zip file for sharing or backup.

### `goction import <file.zip>`
Imports a goction from a zip file.

## Service Management

### `goction start`
Starts the Goction service.

### `goction stop`
Stops the Goction service.

### `goction restart`
Restarts the Goction service.

### `goction status`
Displays the current status of the Goction service.

## Configuration and Security

### `goction config view`
Displays the current Goction configuration.

### `goction config reset`
Resets the Goction configuration to default values.

### `goction token`
Displays the current API token.

### `goction token generate`
Regenerates the API token.

## Monitoring and Logging

### `goction stats [goction-name]`
Displays statistics for all goctions or a specific goction if name is provided.

### `goction logs`
Displays recent log entries.

### `goction dashboard`
Launches the Goction web dashboard.

## Maintenance

### `goction self-update`
Updates Goction to the latest version.

## Help and Information

### `goction --help`
Displays help information about Goction commands.

### `goction <command> --help`
Displays help information for a specific command.

### `goction version`
Displays the current version of Goction.

## Usage Notes

- Some commands may require administrator privileges, especially those related to service management and configuration.
- Use `goction <command> --help` for detailed information on each command's usage and options.
- For security reasons, always use `goction token generate` after suspecting that your API token might have been compromised.

For more detailed information on using these commands, please refer to the [Usage Guide](./usage.md).