[**fivem-ts - Documentation v0.4.1**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.4.1](../../../README.md) / [Shared](../README.md) / arrayToString

# Function: arrayToString()

> **arrayToString**(`inputArray`, `separator`): `string`

Joins an array of strings into a single string with an optional separator.

## Parameters

• **inputArray**: `string`[]

The array of strings to join.

• **separator**: `string` = `''`

The separator to use between each string. Defaults to an empty string.

## Returns

`string`

The concatenated string.

## Example

```ts
const result = arrayToString(["Hello", "World"], " ");
console.log(result); // "Hello World"
```

## Defined in

[shared/utils/FString.ts:30](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/FString.ts#L30)
