# Error Handling

The Goction API uses conventional HTTP response codes to indicate the success or failure of an API request.

## HTTP Status Codes

- `200 OK`: The request was successful.
- `400 Bad Request`: The request was invalid or cannot be served.
- `401 Unauthorized`: The request lacks valid authentication credentials.
- `404 Not Found`: The requested resource could not be found.
- `500 Internal Server Error`: The server encountered an unexpected condition.

## Error Response Format

When an error occurs, the API will return a JSON response in the following format:

```json
{
  "error": "Description of the error"
}
```

## Common Error Scenarios

1. **Invalid API Token**:
   - Status Code: 401 Unauthorized
   - Error Message: "Invalid or missing API token"

2. **Goction Not Found**:
   - Status Code: 404 Not Found
   - Error Message: "Goction '{name}' not found"

3. **Invalid Request Body**:
   - Status Code: 400 Bad Request
   - Error Message: "Invalid request body: {specific error details}"

4. **Goction Execution Error**:
   - Status Code: 500 Internal Server Error
   - Error Message: "Error executing goction: {specific error details}"

## Handling Errors

When working with the Goction API, always check the HTTP status code and the error message in the response body. This will help you diagnose and handle errors appropriately in your application.

<FeedbackComponent/>