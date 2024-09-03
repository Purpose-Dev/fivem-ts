[**fivem-ts - Documentation v0.4.1**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.4.1](../../../README.md) / [Shared](../README.md) / isInRange

# Function: isInRange()

> **isInRange**(`value`, `min`, `max`): `boolean`

Checks if a value is within a specified range.

## Parameters

• **value**: `number`

The value to check.

• **min**: `number`

The minimum value of the range.

• **max**: `number`

The maximum value of the range.

## Returns

`boolean`

`true` if the value is within the range, `false` otherwise.

## Example

```ts
isInRange(5, 1, 10); // true
isInRange(0, 1, 10); // false
```

## Defined in

[shared/utils/FMath.ts:193](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/FMath.ts#L193)
