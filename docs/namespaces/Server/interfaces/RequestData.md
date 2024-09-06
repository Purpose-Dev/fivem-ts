[**fivem-ts - Documentation v0.5.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.5.5](../../../README.md) / [Server](../README.md) / RequestData

# Interface: RequestData

Represents the data to be included in the HTTP request body.

This interface represents an object where the keys are property names
and the values are property values. The structure of the data is flexible
and can vary depending on the API endpoint and the data being sent.

Example:
```ts
const data: RequestData = {
  name: 'John Doe',
  age: 30
};
```

## Indexable

 \[`key`: `string`\]: `unknown`
