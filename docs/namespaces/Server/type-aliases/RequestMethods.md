[**fivem-ts - Documentation v0.4.1**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.4.1](../../../README.md) / [Server](../README.md) / RequestMethods

# Type Alias: RequestMethods

> **RequestMethods**: `"GET"` \| `"POST"` \| `"PUT"` \| `"DELETE"`

Defines the allowed HTTP methods for making requests.

This type restricts the values to common HTTP methods. It is used to
specify which HTTP method will be used for the request.

Possible values:
- 'GET': Retrieves data from the server.
- 'POST': Submits data to the server.
- 'PUT': Updates existing data on the server.
- 'DELETE': Removes data from the server.

Example:
```ts
const method: RequestMethods = 'POST';
```

## Defined in

[server/web/makeRequest.ts:57](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/web/makeRequest.ts#L57)
