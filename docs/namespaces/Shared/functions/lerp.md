[**fivem-ts - Documentation v0.4.1**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.4.1](../../../README.md) / [Shared](../README.md) / lerp

# Function: lerp()

> **lerp**(`start`, `end`, `amount`): `number`

Linearly interpolates between two values.

## Parameters

• **start**: `number`

The start value.

• **end**: `number`

The end value.

• **amount**: `number`

The interpolation factor between 0 and 1.

## Returns

`number`

The interpolated value.

## Example

```ts
lerp(0, 10, 0.5); // 5
lerp(0, 10, 0.75); // 7.5
```

## Defined in

[shared/utils/FMath.ts:53](https://github.com/Purpose-Dev/fivem-ts/blob/af9f57481b70813a163451854c2103aaaed13195/src/shared/utils/FMath.ts#L53)
