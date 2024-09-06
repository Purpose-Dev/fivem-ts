[**fivem-ts - Documentation v0.5.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.5.5](../../../README.md) / [Shared](../README.md) / serializeToJSON

# Function: serializeToJSON()

> **serializeToJSON**(`data`): `string`

Serializes a value to a JSON string.

This function takes any value, such as objects, arrays, numbers, strings, etc.,
and converts it into a JSON-formatted string. This is useful for storing or transmitting data
in a format that is widely supported and can be easily parsed by other systems.

## Parameters

• **data**: `unknown`

The value to be serialized to JSON. This can be an object, array, string, number, etc.

## Returns

`string`

A JSON string representing the serialized data.

## Example

```ts
const obj = { name: "John", age: 30 };
const jsonString = serializeToJSON(obj);
console.log(jsonString); // Output: '{"name":"John","age":30}'
```

## Defined in

[shared/utils/serializeToJSON.ts:19](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/serializeToJSON.ts#L19)
