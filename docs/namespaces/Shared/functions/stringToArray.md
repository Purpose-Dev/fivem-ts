[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Shared](../README.md) / stringToArray

# Function: stringToArray()

> **stringToArray**(`input`): `string`[]

Converts a string into an array of substrings, each with a maximum length of 99 characters.

## Parameters

• **input**: `string`

The input string to be split.

## Returns

`string`[]

An array of substrings, each up to 99 characters long.

## Example

```ts
const result = stringToArray("This is a very long string that needs to be split.");
console.log(result); // ["This", "is", "a", "very", "long", "string", "that", "needs", "to", "be", "split"]
```

## Defined in

[shared/utils/FString.ts:13](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/FString.ts#L13)
