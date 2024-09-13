# Usage Guide

This guide covers the main usage scenarios for Goction.

## Managing Goctions

### Creating a New Goction

To create a new goction:

```bash
goction new my_goction
```

This creates a new directory `my_goction` in your goctions directory with a `main.go` file.

### Listing Goctions

To list all available goctions:

```bash
goction list
```

### Updating a Goction

After modifying a goction's code, update it in the registry:

```bash
goction update my_goction
```

### Modifying a Goction

1. Navigate to the goction's directory.
2. Edit the `main.go` file.
3. Run the update command:

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

## Using the API

Execute a goction via the HTTP API:

```bash
curl -X POST -H "Content-Type: application/json" -H "X-API-Token: your-secret-token" -d '{"args":["arg1", "arg2"]}' http://localhost:8080/goctions/my_goction
```

Replace `your-secret-token` with your actual API token.

## Dashboard and Execution

### Displaying the Dashboard

```bash
goction dashboard
```

This displays information about your goctions, system status, and recent logs.

### Executing a Goction

```bash
goction run my_goction [arg1 arg2 ...]
```

## Advanced Usage

### Viewing Logs

```bash
goction logs
```

### Checking Goction Stats

```bash
goction stats my_goction
```

### Updating Goction

To update Goction itself:

```bash
goction self-update
```

### Exporting a Goction

To export a goction for sharing or backup:

```bash
goction export my_goction
```

This will create a zip file named `my_goction.zip` in the current directory.

### Importing a Goction

To import a goction from a zip file:

```bash
goction import my_goction.zip
```



Remember to check the [configuration guide](/guide/configuration.md) for customizing Goction's behavior.

<FeedbackComponent/>