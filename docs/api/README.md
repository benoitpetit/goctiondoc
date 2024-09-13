# Goction API Reference

Welcome to the Goction API reference. This documentation provides comprehensive information about the Goction HTTP API, which allows you to interact with Goction programmatically.

## Overview

The Goction API is a RESTful API that uses JSON for serialization and token-based authentication. It provides endpoints for executing goctions, managing the Goction service, and retrieving information about goctions and their execution statistics.

## Base URL

All API requests should be made to:

```
http://localhost:8080/
```

Replace `localhost` with your server's hostname or IP address if you're accessing the API remotely.

## Authentication

All API requests require authentication. See the [Authentication](./authentication.md) section for details.

## Endpoints

For a complete list of available endpoints and their usage, see the [Endpoints](./endpoints.md) section.

## Error Handling

The API uses conventional HTTP response codes to indicate the success or failure of requests. See the [Error Handling](./error-handling.md) section for more information.

## Examples

For code examples in various programming languages, see the [Examples](./examples.md) section.

<FeedbackComponent/>