# Usage Guide

This guide covers the main usage scenarios for Goction.

## Executing Goctions

### Method: HTTP API

The primary way to execute goctions is through the HTTP API:

```bash
curl -X POST -H "Content-Type: application/json" -H "X-API-Token: your-secret-token" -d '{"args":["arg1", "arg2"]}' http://localhost:8080/goctions/my_goction
```

Replace `your-secret-token` with your actual API token and `my_goction` with the name of your goction.

### Method: CLI for Testing

For rapid testing during development, you can use the CLI:

```bash
goction run my_goction [arg1 arg2 ...]
```

## Managing Goctions

### Creating a New Goction

To create a new goction:

```bash
goction new my_goction
```

### Updating a Goction

After modifying a goction's code, update it:

```bash
goction update my_goction
```

## Service Management

### Starting the Service

```bash
goction start
```

### Stopping the Service

```bash
goction stop
```

## Dashboard and Monitoring

### Displaying the Dashboard

```bash
goction dashboard
```

This displays information about your goctions, system status, and recent logs.

Remember to check the [configuration guide](/guide/configuration.md) for customizing Goction's behavior.

<FeedbackComponent/>