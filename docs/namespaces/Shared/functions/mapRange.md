[**fivem-ts - Documentation v0.4.1**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.4.1](../../../README.md) / [Shared](../README.md) / mapRange

# Function: mapRange()

> **mapRange**(`value`, `inMin`, `inMax`, `outMin`, `outMax`): `number`

Maps a value from one range to another.

## Parameters

• **value**: `number`

The value to map.

• **inMin**: `number`

The minimum value of the input range.

• **inMax**: `number`

The maximum value of the input range.

• **outMin**: `number`

The minimum value of the output range.

• **outMax**: `number`

The maximum value of the output range.

## Returns

`number`

The mapped value.

## Example

```ts
mapRange(5, 0, 10, 0, 100); // 50
```

## Defined in

[shared/utils/FMath.ts:166](https://github.com/Purpose-Dev/fivem-ts/blob/af9f57481b70813a163451854c2103aaaed13195/src/shared/utils/FMath.ts#L166)
