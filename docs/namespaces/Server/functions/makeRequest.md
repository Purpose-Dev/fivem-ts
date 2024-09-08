[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Server](../README.md) / makeRequest

# Function: makeRequest()

> **makeRequest**\<`T`\>(`url`, `method`, `data`?, `headers`?): `Promise`\<`T`\>

A general-purpose function for making HTTP requests.

This function performs HTTP requests using the Fetch API. It supports various HTTP methods
(GET, POST, PUT, DELETE) and allows you to include request headers and body data.

## Type Parameters

• **T**

## Parameters

• **url**: `string`

The URL to which the request is sent.
  - Type: `string`
  - Description: The endpoint to which the HTTP request will be made.

• **method**: [`RequestMethods`](../type-aliases/RequestMethods.md) = `'GET'`

The HTTP method to use for the request.
  - Type: `RequestMethods` (a type alias for `'GET' | 'POST' | 'PUT' | 'DELETE'`)
  - Default: `'GET'`
  - Description: The HTTP method to be used for the request. Defaults to `'GET'` if not specified.

• **data?**: [`RequestData`](../interfaces/RequestData.md)

The request body data.
  - Type: `RequestData` (an interface where keys are strings and values can be any type)
  - Default: `undefined`
  - Description: The data to be sent in the body of the request, used for POST and PUT requests. If not provided, no body is included in the request.

• **headers?**: [`RequestHeaders`](../interfaces/RequestHeaders.md) = `{}`

Optional headers to include in the request.
  - Type: `RequestHeaders` (an interface where keys are strings and values are strings)
  - Default: `{}`
  - Description: Additional headers to be included in the request. The `Content-Type` header is automatically set to `'application/json'`.

## Returns

`Promise`\<`T`\>

A promise that resolves to the response data of type `T`.
  - Type: `Promise<T>`
  - Description: The promise resolves to the parsed JSON response from the server. The type of the response data is specified by the generic type parameter `T`.

## Throws

Throws an error if the response status is not OK or if there is an error during the fetch operation.

## Example

```ts
interface User {
  id: number;
  name: string;
}

async function fetchUser() {
  try {
    const user = await makeRequest<User>('https://api.example.com/user/1');
    console.log(user);
  } catch (error) {
    console.error('Error fetching user:', error);
  }
}
```

## Defined in

[server/web/makeRequest.ts:107](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/web/makeRequest.ts#L107)
