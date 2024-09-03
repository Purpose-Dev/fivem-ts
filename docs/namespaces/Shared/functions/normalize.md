[**fivem-ts - Documentation v0.4.1**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.4.1](../../../README.md) / [Shared](../README.md) / normalize

# Function: normalize()

> **normalize**(`value`, `min`, `max`): `number`

Normalizes a value within a given range to a value between 0 and 1.

## Parameters

• **value**: `number`

The value to normalize.

• **min**: `number`

The minimum value of the range.

• **max**: `number`

The maximum value of the range.

## Returns

`number`

The normalized value.

## Example

```ts
normalize(75, 50, 100); // 0.5
```

## Defined in

[shared/utils/FMath.ts:147](https://github.com/Purpose-Dev/fivem-ts/blob/af9f57481b70813a163451854c2103aaaed13195/src/shared/utils/FMath.ts#L147)
