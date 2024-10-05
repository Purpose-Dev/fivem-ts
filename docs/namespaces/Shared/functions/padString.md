[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Shared](../README.md) / padString

# Function: padString()

> **padString**(`input`, `targetLength`, `padChar`): `string`

Pads a string to a specified length with a given character.

## Parameters

• **input**: `string`

The input string to be padded.

• **targetLength**: `number`

The target length of the resulting string.

• **padChar**: `string` = `' '`

The character to pad the string with. Defaults to a space character.

## Returns

`string`

The padded string.

## Example

```ts
const result = padString("Hello", 10, "*");
console.log(result); // "Hello*****"
```

## Defined in

[shared/utils/FString.ts:70](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/FString.ts#L70)
