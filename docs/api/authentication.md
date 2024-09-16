# Authentication

The Goction API uses token-based authentication to secure access to its endpoints.

## API Token

The API token is a secret key used to authenticate requests to the Goction API. It's essential to keep this token secure and not share it publicly.

### Obtaining the API Token

When you first install Goction, a random API token is generated automatically. You can view this token using the following command:

```bash
goction token
```

### Regenerating the API Token

If you need to regenerate your token for security reasons, use:

```bash
goction token regenerate
```

This will invalidate the old token and generate a new one.

## Using the API Token

To authenticate your requests to the Goction API, include the API token in the `X-API-Token` header of your HTTP requests.

Example:

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -H "X-API-Token: your-secret-token" \
  -d '{"args":["arg1", "arg2"]}' \
  http://localhost:8080/api/goctions/my_goction
```

## Security Best Practices

1. Keep your API token confidential.
2. Regenerate your API token periodically.
3. Use HTTPS when making API requests in production environments.
4. Implement proper error handling for authentication failures in your applications.

## Authentication Errors

If authentication fails, the API will return a 401 Unauthorized status code. See the [Error Handling](./error-handling.md) section for more details on API errors.

For more information on configuring and managing your Goction installation, please refer to the [Configuration Guide](../guide/configuration.md).