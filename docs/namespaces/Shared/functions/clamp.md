[**fivem-ts - Documentation v0.5.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.5.5](../../../README.md) / [Shared](../README.md) / clamp

# Function: clamp()

> **clamp**(`num`, `min`, `max`): `number`

Clamps a number to a specified range.

## Parameters

• **num**: `number`

The number to clamp.

• **min**: `number`

The minimum value.

• **max**: `number`

The maximum value.

## Returns

`number`

The clamped value.

## Example

```ts
clamp(5, 1, 10); // 5
clamp(0, 1, 10); // 1
clamp(15, 1, 10); // 10
```

## Defined in

[shared/utils/FMath.ts:16](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/FMath.ts#L16)
