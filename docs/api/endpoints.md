# API Endpoints

This document provides details on all available endpoints in the Goction API.

## Execute a Goction

Execute a specific goction.

- **URL**: `/api/goctions/{goction_name}`
- **Method**: `POST`
- **Auth required**: Yes

### Request Body

```json
{
  "args": ["arg1", "arg2", ...]
}
```

### Success Response

- **Code**: 200 OK
- **Content**:

```json
{
  "result": "Result of the goction execution",
  "action": "executed_goction_name"
}
```

### Error Response

- **Code**: 404 Not Found
- **Content**:

```json
{
  "error": "Goction not found"
}
```

## List Available Goctions

Retrieve a list of all available goctions.

- **URL**: `/api/goctions`
- **Method**: `GET`
- **Auth required**: Yes

### Success Response

- **Code**: 200 OK
- **Content**:

```json
{
  "goctions": ["goction1", "goction2", ...]
}
```

## Get Goction Information

Retrieve information about a specific goction.

- **URL**: `/api/goctions/{goction_name}/info`
- **Method**: `GET`
- **Auth required**: Yes

### Success Response

- **Code**: 200 OK
- **Content**:

```json
{
  "name": "goction_name",
  "description": "Goction description",
  "last_updated": "2023-06-15T14:30:00Z",
  "stats": {
    "total_executions": 100,
    "average_duration": "1.5s"
  }
}
```

## Get Goction Execution History

Retrieve the execution history of a specific goction.

- **URL**: `/api/goctions/{goction_name}/history`
- **Method**: `GET`
- **Auth required**: Yes

### Success Response

- **Code**: 200 OK
- **Content**:

```json
{
  "history": [
    {
      "timestamp": "2023-06-15T14:30:00Z",
      "duration": "1.2s",
      "status": "success",
      "result": "Execution result"
    },
    ...
  ]
}
```

For more information on handling API responses and errors, please refer to the [Error Handling](./error-handling.md) section.