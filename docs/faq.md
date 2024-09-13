# Frequently Asked Questions

## General

### What is Goction?

Goction is a lightweight and extensible framework for creating, managing, and executing custom actions (called "goctions") via a command-line interface (CLI) and an HTTP API.

### Why should I use Goction?

Goction provides an easy way to automate tasks, create integrations, and build workflows. It's extensible, secure, and comes with built-in monitoring capabilities.

## Installation

### What are the system requirements for Goction?

Goction requires Go 1.16 or higher and a Linux-based operating system for full functionality (due to systemd integration).

### Can I install Goction on Windows or macOS?

While the core functionality of Goction can work on Windows and macOS, some features like the systemd service integration are Linux-specific. We recommend using a Linux environment for the best experience.

## Usage

### How do I create a new goction?

You can create a new goction using the CLI command:

```bash
goction new my_goction_name
```

### Can I use external Go packages in my goctions?

Yes, you can use any Go packages in your goctions. Just make sure to update the `go.mod` file in your goction directory and run `go mod tidy` before updating the goction.

### How do I execute a goction remotely?

You can execute a goction remotely using the HTTP API. Send a POST request to `/goctions/{goction_name}` with the appropriate headers and body. See the [API documentation](/api/) for more details.

## Troubleshooting

### My goction isn't working after an update. What should I do?

First, check the logs using `goction logs`. If you see any errors, make sure your goction code is correct and all dependencies are properly imported. You can also try recreating the goction using `goction new` and copying your code into the new file.

### I'm getting a "permission denied" error when trying to start the Goction service. What's wrong?

This usually means you're not running the command with sufficient privileges. Try using `sudo goction start` to start the service.

<FeedbackComponent/>