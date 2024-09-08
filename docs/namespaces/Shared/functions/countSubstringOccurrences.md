[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Shared](../README.md) / countSubstringOccurrences

# Function: countSubstringOccurrences()

> **countSubstringOccurrences**(`input`, `substring`): `number`

Counts the occurrences of a substring within a string.

## Parameters

• **input**: `string`

The string to search within.

• **substring**: `string`

The substring to count occurrences of.

## Returns

`number`

The number of times the substring occurs in the input string.

## Example

```ts
const result = countSubstringOccurrences("hello hello world", "hello");
console.log(result); // 2
```

## Defined in

[shared/utils/FString.ts:109](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/FString.ts#L109)
