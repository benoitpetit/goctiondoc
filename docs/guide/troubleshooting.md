# Troubleshooting Guide

If you encounter issues with Goction, follow these steps to diagnose and resolve them:

## 1. Check Service Status

```bash
sudo systemctl status goction
```

## 2. View Service Logs

```bash
sudo journalctl -u goction
```

## 3. Check Goction Logs

```bash
goction logs
```

## 4. Verify Configuration

```bash
goction config view
```

## 5. Common Issues and Solutions

### a. Service Won't Start

- Check the service configuration:
  ```bash
  sudo systemctl cat goction
  ```
- Verify file permissions in the goctions directory

### b. API Connection Issues

- Confirm the correct port in the configuration
- Check firewall settings

### c. Goction Execution Failures

- Verify the goction code
- Check for any missing dependencies
- Review the goction's execution history:
  ```bash
  goction stats my_goction
  ```

### d. Dashboard Not Displaying Correctly

- Ensure the stats file path is correct in the configuration
- Check for any JavaScript console errors in your browser

## 6. Resetting Goction

If all else fails, you can try resetting Goction:

1. Stop the service: `sudo systemctl stop goction`
2. Reset the configuration: `goction config reset`
3. Start the service: `sudo systemctl start goction`

If problems persist, consider uninstalling and reinstalling Goction.

For further assistance, please open an issue on the [Goction GitHub repository](https://github.com/goction/goction/issues).

<FeedbackComponent/>
