# Goction Guide

Welcome to the Goction guide! This comprehensive documentation will help you get started with Goction and master its features.

Goction is a powerful, lightweight tool designed for creating, managing, and executing custom actions (called "goctions") via an HTTP API or CLI. It provides a flexible platform for automating tasks and integrating custom actions into your workflows.

## 1. Key Features

- **HTTP API for Execution**: Execute goctions remotely with a secure HTTP API, perfect for integration with other services and applications.
- **Intuitive CLI**: Easily create, list, and manage your goctions, with a `run` command for quick testing during development.
- **Dynamic Loading**: Use Go plugins to extend functionality on the fly.
- **Monitoring Dashboard**: Keep track of your goctions with a built-in console dashboard.
- **Flexible Configuration**: Customize Goction to fit your needs with JSON configuration.

## 2. Quick Start

Here's a quick example to get you started:

1. [Install Goction](./installation.md)
2. [Create your first goction](./quickstart.md#create-your-first-goction)
3. Execute your goction via HTTP:

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -H "X-API-Token: your-secret-token" \
  -d '{"args":["arg1", "arg2"]}' \
  http://localhost:8080/goctions/my_first_goction
```

## 3. Table of Contents

1. [Quick Start](./quickstart.md)
2. [Installation](./installation.md)
3. [Configuration](./configuration.md)
4. [Usage](./usage.md)
5. [Advanced Topics](./advanced.md)

Whether you're new to Goction or an experienced user, this guide has something for everyone. Let's begin with the [Quick Start](./quickstart.md) to get you up and running in no time!

For more detailed information on using Goction, including how to create, manage, and execute goctions, check out our [Usage Guide](./usage.md).

<FeedbackComponent />
