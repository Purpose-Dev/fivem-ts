[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Shared](../README.md) / getRandomEnumValue

# Function: getRandomEnumValue()

> **getRandomEnumValue**\<`T`\>(`enumType`, `valueType`): `T`\[keyof `T`\]

Returns a random value from an enumerated type, filtered by the specified value type.

## Type Parameters

• **T** *extends* `object`

## Parameters

• **enumType**: `T`

The enumerated type object from which to select a random value.

• **valueType**: `"string"` \| `"number"`

Specifies the type of the values to consider ('string' or 'number').

## Returns

`T`\[keyof `T`\]

A random value from the enumerated type that matches the specified value type.

## Defined in

[shared/utils/getRandomEnumValue.ts:13](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/getRandomEnumValue.ts#L13)
