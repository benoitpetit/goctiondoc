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

This creates a new directory `/etc/goction/goctions/hello_world` with a `main.go` file and a `go.mod` file.

## 4. Understanding Goction Structure

A goction consists of at least two files:

1. `main.go`: Contains the main logic of your goction.
2. `go.mod`: Declares the module and its dependencies.

Here's the directory structure for our `hello_world` goction:

```
/etc/goction/goctions/
└── hello_world/
    ├── main.go
    └── go.mod
```

## 5. Edit Your Goction

Open the `main.go` file:

```bash
sudo nano /etc/goction/goctions/hello_world/main.go
```

Replace the content with this example:

```go
package main

import (
    "encoding/json"
    "fmt"
)

func HelloWorld(args ...string) (string, error) {
    var name string
    if len(args) > 0 {
        name = args[0]
    } else {
        name = "World"
    }
    
    result := fmt.Sprintf("Hello, %s!", name)
    response := map[string]string{
        "result": result,
        "action": "hello_world",
    }
    
    jsonResponse, err := json.Marshal(response)
    if err != nil {
        return "", fmt.Errorf("error creating JSON response: %v", err)
    }
    
    return string(jsonResponse), nil
}
```

This goction does the following:
- Accepts an optional name argument
- Constructs a greeting
- Returns a JSON response with the result and action name

## 6. Update Your Goction

After editing, update the goction:

```bash
goction update hello_world
```

## 7. Start the Goction Service

Start the Goction service to enable API access:

```bash
sudo systemctl start goction
```

## 8. Execute Your Goction

Now you can execute your goction via the HTTP API:

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -H "X-API-Token: your-secret-token" \
  -d '{"args":["Alice"]}' \
  http://localhost:8080/api/goctions/hello_world
```

Replace `your-secret-token` with your actual API token. You can find your token by running:

```bash
goction token
```

You should receive a JSON response like this:

```json
{"result":"Hello, Alice!","action":"hello_world"}
```

## 9. Using the Dashboard

Access the Goction dashboard by opening a web browser and navigating to:

```
http://localhost:8080
```

Log in using the credentials set in your `/etc/goction/config.json` file.

## 10. Next Steps

- Explore the [full installation guide](./installation.md) for more options
- Learn about [configuration](./configuration.md) to customize Goction
- Check out the [usage guide](./usage.md) for more detailed information
- See the [advanced topics](./advanced.md) for more complex goction examples