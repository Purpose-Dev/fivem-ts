[**fivem-ts - Documentation v0.4.1**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.4.1](../../../README.md) / [Shared](../README.md) / truncateString

# Function: truncateString()

> **truncateString**(`input`, `maxLength`, `useEllipsis`): `string`

Truncates a string to a specified length and optionally appends an ellipsis.

## Parameters

• **input**: `string`

The input string to be truncated.

• **maxLength**: `number`

The maximum length of the resulting string.

• **useEllipsis**: `boolean` = `false`

Whether to append an ellipsis (`...`) if the string is truncated. Defaults to `false`.

## Returns

`string`

The truncated string.

## Example

```ts
const result = truncateString("This is a long string", 10, true);
console.log(result); // "This is a..."
```

## Defined in

[shared/utils/FString.ts:48](https://github.com/Purpose-Dev/fivem-ts/blob/af9f57481b70813a163451854c2103aaaed13195/src/shared/utils/FString.ts#L48)
