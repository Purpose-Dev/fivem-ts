[**fivem-ts - Documentation v0.4.1**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.4.1](../../../README.md) / [Server](../README.md) / RequestHeaders

# Interface: RequestHeaders

Defines the headers to include in the HTTP request.

This interface represents an object where the keys are header names
and the values are header values.

Example:
```ts
const headers: RequestHeaders = {
  'Authorization': 'Bearer token',
  'Accept': 'application/json'
};
```

## Indexable

 \[`key`: `string`\]: `string`
