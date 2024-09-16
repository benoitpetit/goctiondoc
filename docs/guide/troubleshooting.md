# Troubleshooting Guide

This guide provides steps to diagnose and resolve common issues with Goction.

## General Troubleshooting Steps

1. Check the Goction service status
2. Review the logs
3. Verify the configuration
4. Restart the service
5. Check for updates

## Specific Issues and Solutions

### 1. Goction Service Won't Start

#### Symptoms
- `goction start` command fails
- Service status shows as inactive

#### Troubleshooting Steps
1. Check the service status:
   ```bash
   sudo systemctl status goction
   ```
2. Review the service logs:
   ```bash
   sudo journalctl -u goction
   ```
3. Verify the service configuration:
   ```bash
   sudo systemctl cat goction
   ```
4. Check file permissions in the goctions directory:
   ```bash
   ls -l /etc/goction/goctions
   ```

#### Possible Solutions
- Correct any configuration errors in `/etc/goction/config.json`
- Fix file permissions: `sudo chown -R goction:goction /etc/goction/goctions`
- Reinstall Goction if the binary is corrupted

### 2. API Connection Issues

#### Symptoms
- Unable to connect to the Goction API
- Curl commands to the API fail

#### Troubleshooting Steps
1. Verify the API is running:
   ```bash
   curl http://localhost:8080/api/health
   ```
2. Check the configured port in `/etc/goction/config.json`
3. Ensure the firewall allows connections to the API port
4. Verify the API token:
   ```bash
   goction token
   ```

#### Possible Solutions
- Update the `port` setting in the configuration file
- Adjust firewall rules: `sudo ufw allow 8080/tcp`
- Regenerate the API token: `goction token generate`

### 3. Goction Execution Failures

#### Symptoms
- Goctions fail to execute or return errors
- Unexpected results from goction execution

#### Troubleshooting Steps
1. Check the goction's code for errors
2. Review the goction's execution history:
   ```bash
   goction stats my_goction
   ```
3. Execute the goction with verbose logging:
   ```bash
   goction run my_goction --verbose
   ```

#### Possible Solutions
- Fix any syntax errors in the goction's code
- Ensure all required dependencies are installed
- Update the goction: `goction update my_goction`

### 4. Dashboard Not Displaying Correctly

#### Symptoms
- Dashboard doesn't load or shows errors
- Missing or incorrect data in the dashboard

#### Troubleshooting Steps
1. Check browser console for JavaScript errors
2. Verify the dashboard configuration in `/etc/goction/config.json`
3. Ensure the stats file exists and is writable:
   ```bash
   ls -l /var/log/goction/goction_stats.json
   ```

#### Possible Solutions
- Clear browser cache and reload the dashboard
- Correct any configuration errors related to the dashboard
- Fix permissions on the stats file:
   ```bash
   sudo chown goction:goction /var/log/goction/goction_stats.json
   sudo chmod 644 /var/log/goction/goction_stats.json
   ```

## Resetting Goction

If all else fails, you can try resetting Goction:

1. Stop the service: `sudo systemctl stop goction`
2. Backup your goctions: `cp -r /etc/goction/goctions /tmp/goctions_backup`
3. Reset the configuration: `goction config reset`
4. Reinstall Goction using the installation script
5. Restore your goctions: `cp -r /tmp/goctions_backup/* /etc/goction/goctions/`
6. Start the service: `sudo systemctl start goction`

## Getting Further Help

If you're still experiencing issues after trying these troubleshooting steps:

1. Check the [Goction documentation](https://docs.goction.com) for updates
2. Search for similar issues in the [Goction GitHub repository](https://github.com/goction/goction/issues)
3. Post a question on the [Goction community forum](https://community.goction.com)
4. Open a new issue on GitHub with detailed information about your problem

Remember to include relevant logs, configuration details, and steps to reproduce the issue when seeking help.