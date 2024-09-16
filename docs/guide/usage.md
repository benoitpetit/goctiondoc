# Usage Guide

This guide covers the main usage scenarios for Goction, including detailed information on goction structure and advanced examples.

## Managing Goctions

### Creating a New Goction

```bash
goction new my_goction
```

### Listing Goctions

```bash
goction list
```

### Updating a Goction

```bash
goction update my_goction
```

### Modifying a Goction

1. Navigate to the goction's directory: `/etc/goction/goctions/my_goction/`
2. Edit the `main.go` file.
3. Run `goction update my_goction`

## Goction Structure and Creation

Each goction should be in its own directory under `/etc/goction/goctions/` and contain at least two files:

1. `main.go`: This file contains the main logic of your goction.
2. `go.mod`: This file declares the module and its dependencies.

### Goction Function Signature

The main function of your goction should have the following signature:

```go
func MyGoction(args ...string) (string, error)
```

Replace `MyGoction` with the actual name of your goction (it should start with an uppercase letter).

### Example Goction Structure

Here's a more detailed example of a goction structure:

```go
package main

import (
    "encoding/json"
    "fmt"
    "strings"
)

// Concatenate joins all input strings and returns them as a JSON object
func Concatenate(args ...string) (string, error) {
    if len(args) == 0 {
        return "", fmt.Errorf("no arguments provided")
    }

    result := strings.Join(args, " ")
    response := map[string]string{
        "result": result,
        "action": "concatenate",
    }

    jsonResponse, err := json.Marshal(response)
    if err != nil {
        return "", fmt.Errorf("error creating JSON response: %v", err)
    }

    return string(jsonResponse), nil
}
```

This goction concatenates all input strings and returns the result as a JSON object.

## Service Management

### Using Goction Commands

- Start: `goction start`
- Stop: `goction stop`

### Using Systemd

- Start: `sudo systemctl start goction`
- Stop: `sudo systemctl stop goction`
- Restart: `sudo systemctl restart goction`
- Status: `sudo systemctl status goction`
- Enable at boot: `sudo systemctl enable goction`
- Disable at boot: `sudo systemctl disable goction`

## Using the API

Execute a goction via the HTTP API:

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -H "X-API-Token: your-secret-token" \
  -d '{"args":["arg1", "arg2"]}' \
  http://localhost:8080/api/goctions/my_goction
```

## Dashboard

To access the web-based dashboard:

1. Ensure the Goction service is running.
2. Open your web browser and navigate to `http://localhost:8080` (or the configured address).
3. Log in using the credentials set in your Goction configuration.

For more detailed information about the dashboard features and usage, please refer to our [Dashboard Guide](./dashboard.md).

## Advanced Usage

### Viewing Logs

- Goction logs: `goction logs`
- Systemd service logs: `sudo journalctl -u goction`

### Checking Goction Stats

```bash
goction stats my_goction
```

### Exporting a Goction

```bash
goction export my_goction
```

### Importing a Goction

```bash
goction import my_goction.zip
```

### Advanced Goction Example

Here's an example of a more complex goction:

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

This goction demonstrates how to:
1. Make an HTTP request to an external API
2. Parse the JSON response
3. Format the result into the standard goction response structure

To use this goction:

1. Create a new goction named `joke`:
   ```bash
   goction new joke
   ```

2. Replace the contents of `/etc/goction/goctions/joke/main.go` with the code above.

3. Update the goction:
   ```bash
   goction update joke
   ```

4. Execute the goction:
   ```bash
   curl -X POST \
     -H "Content-Type: application/json" \
     -H "X-API-Token: your-secret-token" \
     http://localhost:8080/api/goctions/joke
   ```

This example shows how goctions can interact with external services and APIs, while still conforming to the standard response format expected by Goction.

For more advanced topics and usage scenarios, please refer to the [Advanced Guide](./advanced.md).
