# Quickstart Guide

Get up and running with Goction in just a few minutes!

## 1. Installation

Install Goction using our quick installation script:

```bash
curl -sSL https://raw.githubusercontent.com/goction/goction/master/hack/install.sh | sudo bash
```

## 2. Create Your First Goction

Create a new goction named `hello_world`:

```bash
goction new hello_world
```

This creates a new directory `~/.config/goction/goctions/hello_world` with a `main.go` file.

## 3. Edit Your Goction

Open the `main.go` file:

```bash
nano ~/.config/goction/goctions/hello_world/main.go
```

Replace the content with this simple example:

```go
package main

import "fmt"

func HelloWorld(args ...string) (string, error) {
    return fmt.Sprintf("Hello, %s!", args[0]), nil
}
```

## 4. Update Your Goction

After editing, update the goction:

```bash
goction update hello_world
```

## 5. Start the Goction Service

Start the Goction service to enable API access:

```bash
goction start
```

## 6. Execute Your Goction

Now you can execute your goction via the HTTP API:

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -H "X-API-Token: your-secret-token" \
  -d '{"args":["World"]}' \
  http://localhost:8080/goctions/hello_world
```

Replace `your-secret-token` with your actual API token. You can find your token by running:

```bash
goction token
```

## 7. Quick CLI Test (Optional)

For rapid testing during development, you can also use the CLI:

```bash
goction run hello_world World
```

## Next Steps

- Explore the [full installation guide](./installation.md) for more options
- Learn about [configuration](./configuration.md) to customize Goction
- Check out the [usage guide](./usage.md) for more detailed information

<FeedbackComponent/>
