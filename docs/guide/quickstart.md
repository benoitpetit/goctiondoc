# Quickstart Guide

Get up and running with Goction in just a few minutes!

## 1. Installation

Install Goction using our quick installation script:

```bash
curl -sSL https://raw.githubusercontent.com/goction/goction/master/hack/install.sh | sudo bash
```

This script will install Goction and set up the necessary directories and configuration files.

## 2. Configuration

After installation, the main configuration file will be located at:

```
/etc/goction/config.json
```

You can view the current configuration using:

```bash
goction config view
```

## 3. Create Your First Goction

Create a new goction named `hello_world`:

```bash
goction new hello_world
```

This creates a new directory `/etc/goction/goctions/hello_world` with a `main.go` file.

## 4. Edit Your Goction

Open the `main.go` file:

```bash
sudo nano /etc/goction/goctions/hello_world/main.go
```

Replace the content with this simple example:

```go
package main

import "fmt"

func HelloWorld(args ...string) (string, error) {
    if len(args) == 0 {
        return "Hello, World!", nil
    }
    return fmt.Sprintf("Hello, %s!", args[0]), nil
}
```

## 5. Update Your Goction

After editing, update the goction:

```bash
goction update hello_world
```

## 6. Start the Goction Service

Start the Goction service to enable API access:

```bash
sudo systemctl start goction
```

## 7. Execute Your Goction

Now you can execute your goction via the HTTP API:

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -H "X-API-Token: your-secret-token" \
  -d '{"args":["World"]}' \
  http://localhost:8080/api/goctions/hello_world
```

Replace `your-secret-token` with your actual API token. You can find your token by running:

```bash
goction token
```

## 8. Using the Dashboard

Access the Goction dashboard by opening a web browser and navigating to:

```
http://localhost:8080
```

Log in using the credentials set in your `/etc/goction/config.json` file.

## 9. Next Steps

- Explore the [full installation guide](./installation.md) for more options
- Learn about [configuration](./configuration.md) to customize Goction
- Check out the [usage guide](./usage.md) for more detailed information