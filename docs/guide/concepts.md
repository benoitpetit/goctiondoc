# Goction Concepts

This page explains the fundamental concepts of Goction to help you understand how it works and how to use it effectively.

## 1. What is a Goction?

A "goction" is a custom action in the Goction framework. It's a piece of Go code that can be executed via the Goction CLI or HTTP API. Goctions are designed to be modular, reusable, and easy to manage.

## 2. Key Components

### a. Goction Registry

The Goction Registry is a central repository where all your goctions are stored and managed. When you create or update a goction, it's registered here.

### b. CLI (Command Line Interface)

The Goction CLI provides commands for creating, updating, listing, and executing goctions. It's the primary way to manage your goctions during development.

### c. HTTP API

The HTTP API allows you to execute goctions remotely. This is useful for integrating Goction with other services or applications.

### d. Configuration

Goction uses a JSON configuration file to manage settings such as the location of the goctions directory, the API port, and logging options.

### e. Service Management

Goction can be run as a service, allowing it to continuously listen for API requests to execute goctions.

## 3. How Goctions Work

1. Creation: A goction is created using the CLI command `goction new`.
2. Implementation: You write the Go code for your goction, defining what it does and what arguments it accepts.
3. Registration: The goction is registered using `goction update`.
4. Execution: The goction can be executed via the CLI (`goction run`) or the HTTP API.

## 4. Next Steps

Now that you understand the basic concepts of Goction, you're ready to [create your first goction](./quickstart.md).
