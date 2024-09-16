# Goction Guide

Welcome to the Goction guide! This comprehensive documentation will help you get started with Goction and master its features.

Goction is a lightweight and extensible platform designed for creating, managing, and executing custom actions (called "goctions") via a command-line interface (CLI), an HTTP API, and a web-based dashboard. It provides powerful tools for automation, integration, and workflow management.

## Key Features

- Easy creation and management of goctions in Go
- Dynamic loading of goctions via Go plugins
- Intuitive CLI interface
- Secure HTTP API for remote execution
- Web-based dashboard for monitoring and management
- Flexible configuration via JSON
- Advanced logging with logrus
- Integration with systemd for robust service management
- Import and export functionality for easy sharing and backup of goctions

## Quick Start

Here's a quick example to get you started:

1. [Install Goction](./installation.md)
2. Create your first goction:
   ```bash
   goction new my_first_goction
   ```
3. Edit the `main.go` file in the newly created goction directory
4. Update your goction:
   ```bash
   goction update my_first_goction
   ```
5. Execute your goction via HTTP:
   ```bash
   curl -X POST \
     -H "Content-Type: application/json" \
     -H "X-API-Token: your-secret-token" \
     -d '{"args":["arg1", "arg2"]}' \
     http://localhost:8080/api/goctions/my_first_goction
   ```

## Table of Contents

1. [Concepts](./concepts.md)
2. [Installation](./installation.md)
3. [Configuration](./configuration.md)
4. [Usage](./usage.md)
5. [Commands](./commands.md)
6. [Advanced Topics](./advanced.md)
7. [Troubleshooting](./troubleshooting.md)
8. [Dashboard](./dashboard.md)
9. [Securing with Caddy](./securing-with-caddy.md)

Whether you're new to Goction or an experienced user, this guide has something for everyone. Let's begin with understanding the [core concepts](./concepts.md) of Goction!