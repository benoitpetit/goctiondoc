# Advanced Topics

This guide covers advanced features and usage scenarios for Goction.

## 1. Custom Goction Development

### a. Using External Packages

You can use any Go packages in your goctions. Here's how:

1. In your goction directory, initialize a Go module:

   ```bash
   cd /etc/goction/goctions/my_goction
   go mod init my_goction
   ```

2. Add your dependencies:

   ```bash
   go get github.com/example/package
   ```

3. Use the package in your `main.go`:

   ```go
   import "github.com/example/package"
   ```

4. Update your goction:
   ```bash
   goction update my_goction
   ```

For more details on goction structure and creation, see the [Usage Guide](./usage.md#goction-structure-and-creation).

### b. Goction Best Practices

- Keep your goctions focused on a single task
- Use meaningful names for your goctions
- Handle errors gracefully
- Use environment variables for sensitive information

## 2. API Authentication

Goction uses token-based authentication for its API. To generate a new token:

```bash
goction token generate
```

Use this token in the `X-API-Token` header when making API requests.

For more information on API usage and authentication, see our [API Reference](../api/README.md).

## 3. Advanced Goction Example

Here's an example of a more complex goction that interacts with an external API:

```go
package main

import (
    "encoding/json"
    "fmt"
    "io/ioutil"
    "net/http"
)

func JokeGoction(args ...string) (string, error) {
    // Make a request to a joke API
    resp, err := http.Get("https://official-joke-api.appspot.com/random_joke")
    if err != nil {
        return "", fmt.Errorf("error making request to joke API: %v", err)
    }
    defer resp.Body.Close()

    // Read the response body
    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        return "", fmt.Errorf("error reading response body: %v", err)
    }

    // Parse the JSON response
    var joke struct {
        Setup     string `json:"setup"`
        Punchline string `json:"punchline"`
    }
    err = json.Unmarshal(body, &joke)
    if err != nil {
        return "", fmt.Errorf("error parsing JSON response: %v", err)
    }

    // Create the result string
    result := fmt.Sprintf("%s\n%s", joke.Setup, joke.Punchline)

    // Create the response in the generic format
    response := map[string]string{
        "result": result,
        "action": "joke_goction",
    }

    // Marshal the response to JSON
    jsonResponse, err := json.Marshal(response)
    if err != nil {
        return "", fmt.Errorf("error creating JSON response: %v", err)
    }

    return string(jsonResponse), nil
}
```

This goction fetches a random joke from an external API and returns it in the standard Goction response format.

## 4. Monitoring and Logging

### a. Advanced Logging

Goction uses logrus for logging. You can configure advanced logging options in your `config.json`:

```json
{
  "log_level": "debug",
  "log_format": "json"
}
```

For more details on configuration options, see our [Configuration Guide](./configuration.md).

### b. Checking Goction Stats

To view statistics for a specific goction:

```bash
goction stats my_goction
```

## 5. Security Considerations

- Regularly rotate your API tokens
- Use HTTPS for API communication
- Implement rate limiting to prevent abuse
- Regularly update Goction and its dependencies

For setting up HTTPS, we recommend using Caddy as a reverse proxy. See our [Securing Goction with Caddy](./securing-with-caddy.md) guide for detailed instructions.

Remember to always refer to the official Goction documentation for the most up-to-date information on advanced features and best practices.
