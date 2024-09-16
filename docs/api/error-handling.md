# Error Handling

The Goction API uses conventional HTTP response codes to indicate the success or failure of an API request. This section outlines how to interpret and handle errors in the Goction API.

## HTTP Status Codes

- `200 OK`: The request was successful.
- `400 Bad Request`: The request was invalid or cannot be served.
- `401 Unauthorized`: The request lacks valid authentication credentials.
- `404 Not Found`: The requested resource could not be found.
- `429 Too Many Requests`: The user has sent too many requests in a given amount of time (rate limiting).
- `500 Internal Server Error`: The server encountered an unexpected condition.

## Error Response Format

When an error occurs, the API will return a JSON response in the following format:

```json
{
  "error": "Description of the error"
}
```

## Common Error Scenarios

### Invalid API Token

- Status Code: 401 Unauthorized
- Error Message: "Invalid or missing API token"

### Goction Not Found

- Status Code: 404 Not Found
- Error Message: "Goction '{name}' not found"

### Invalid Request Body

- Status Code: 400 Bad Request
- Error Message: "Invalid request body: {specific error details}"

### Goction Execution Error

- Status Code: 500 Internal Server Error
- Error Message: "Error executing goction: {specific error details}"

### Rate Limit Exceeded

- Status Code: 429 Too Many Requests
- Error Message: "API rate limit exceeded. Please try again later."

## Handling Errors

When working with the Goction API, always check the HTTP status code and the error message in the response body. This will help you diagnose and handle errors appropriately in your application.

### Best Practices for Error Handling

1. Always check the HTTP status code of the response.
2. Parse the error message from the response body for more detailed information.
3. Implement appropriate retry logic for transient errors (e.g., rate limiting).
4. Log errors for debugging and monitoring purposes.
5. Provide meaningful error messages to end-users of your application.

## Rate Limiting

The Goction API implements rate limiting to prevent abuse. If you exceed the rate limit, you'll receive a 429 Too Many Requests response. The response will include headers indicating the rate limit status:

- `X-RateLimit-Limit`: The maximum number of requests you're permitted to make per hour.
- `X-RateLimit-Remaining`: The number of requests remaining in the current rate limit window.
- `X-RateLimit-Reset`: The time at which the current rate limit window resets in UTC epoch seconds.

When you receive a 429 response, it's best to wait until the rate limit window resets before making further requests.

For more information on the available API endpoints, please refer to the [Endpoints](./endpoints.md) section.