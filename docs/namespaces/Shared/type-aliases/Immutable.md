[**fivem-ts - Documentation v0.5.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.5.5](../../../README.md) / [Shared](../README.md) / Immutable

# Type Alias: Immutable\<T\>

> **Immutable**\<`T`\>: `{ readonly [K in keyof T]: T[K] extends object ? Immutable<T[K]> : T[K] }`

## Type Parameters

• **T**

## Defined in

[shared/types/interfaces/Immutable.ts:1](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/types/interfaces/Immutable.ts#L1)
