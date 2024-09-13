# Authentication in Goction

Goction uses token-based authentication to secure access to its API and certain CLI commands. This document explains how authentication works in Goction, how to manage tokens, and best practices for security.

## API Token

The API token is a secret key used to authenticate requests to the Goction API. It's essential to keep this token secure and not share it publicly.

### Generating a Token

When you first install Goction, a random API token is generated automatically. You can view this token using the following command:

```bash
goction token
```

### Regenerating a Token

If you need to regenerate your token for security reasons, use:

```bash
goction token regenerate
```

This will invalidate the old token and generate a new one.

## Using the Token

### In API Requests

When making requests to the Goction API, include the token in the `X-API-Token` header:

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -H "X-API-Token: your-secret-token" \
  -d '{"args":["arg1", "arg2"]}' \
  http://localhost:8080/goctions/my_goction
```

### In Configuration

The token is stored in your Goction configuration file. By default, this file is located at:

- For root: `/etc/goction/config.json`
- For other users: `~/.config/goction/config.json`

## CLI Commands and Authentication

Most CLI commands do not require explicit authentication as they use the token stored in the configuration file. However, commands that interact with the API (like `goction run`) will use this token automatically.

---

Remember, security is a shared responsibility. While we strive to make Goction as secure as possible, it's crucial to follow best practices and keep your systems and tokens secure.

<FeedbackComponent />
