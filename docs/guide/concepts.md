# Goction Concepts

This page explains the fundamental concepts of Goction to help you understand how it works and how to use it effectively.

## What is Goction?

Goction is a lightweight and extensible platform designed for creating, managing, and executing custom actions (called "goctions") via a command-line interface (CLI), an HTTP API, and a web-based dashboard. It provides a flexible framework for automation, integration, and workflow management.

## Key Components

### 1. Goctions

A "goction" is the core unit of functionality in the Goction framework. It's a piece of Go code that can be executed via the Goction CLI or HTTP API. Goctions are designed to be modular, reusable, and easy to manage.

#### Goction Structure

Each goction consists of at least two files:

- `main.go`: Contains the main logic of the goction.
- `go.mod`: Declares the module and its dependencies.

#### Goction Function Signature

```go
func MyGoction(args ...string) (string, error)
```

### 2. Goction Registry

The Goction Registry is a central repository where all your goctions are stored and managed. When you create or update a goction, it's registered here.

### 3. CLI (Command Line Interface)

The Goction CLI provides commands for creating, updating, listing, and executing goctions. It's the primary way to manage your goctions during development.

Key CLI commands:

- `goction new`: Create a new goction
- `goction list`: List all goctions
- `goction update`: Update an existing goction
- `goction run`: Execute a goction

### 4. HTTP API

The HTTP API allows you to execute goctions remotely. This is useful for integrating Goction with other services or applications.

### 5. Dashboard

The web-based dashboard provides a user-friendly interface for managing and monitoring your goctions. It offers features like execution history, performance statistics, and real-time logs.

### 6. Configuration

Goction uses a JSON configuration file (`/etc/goction/config.json`) to manage settings such as:

- The location of the goctions directory
- The API port
- Logging options
- Dashboard credentials

### 7. Service Management

Goction can be run as a system service, allowing it to continuously listen for API requests to execute goctions.

## How Goctions Work

1. **Creation**: A goction is created using the CLI command `goction new`.
2. **Implementation**: You write the Go code for your goction, defining what it does and what arguments it accepts.
3. **Registration**: The goction is registered in the Goction Registry using `goction update`.
4. **Execution**: The goction can be executed via the CLI (`goction run`) or the HTTP API.
5. **Response**: Goctions return a JSON response with a standard format, including a `result` and `action` field.

## Security

Goction implements security measures to protect your goctions and their executions:

- API token authentication for HTTP requests
- Username/password authentication for the dashboard
- Option to run the service on localhost only

## Extensibility

Goction's architecture allows for easy extension:

- Create custom goctions for any task
- Use Go's powerful standard library and third-party packages in your goctions
- Integrate with external services and APIs

## Use Cases

Goction can be used for a wide range of tasks, including:

- Automation of repetitive tasks
- Integration between different systems or services
- Building custom APIs
- Creating simple microservices
- Centralized management of scripts and utilities

## Next Steps

Now that you understand the basic concepts of Goction, you're ready to:

1. [Install Goction](./installation.md)
2. [Create your first goction](./quickstart.md)
3. [Explore advanced usage](./advanced.md)
