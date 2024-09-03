[**fivem-ts - Documentation v0.4.1**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.4.1](../../../README.md) / [Shared](../README.md) / Immutable

# Type Alias: Immutable\<T\>

> **Immutable**\<`T`\>: `{ readonly [K in keyof T]: T[K] extends object ? Immutable<T[K]> : T[K] }`

## Type Parameters

• **T**

## Defined in

[shared/types/interfaces/Immutable.ts:1](https://github.com/Purpose-Dev/fivem-ts/blob/af9f57481b70813a163451854c2103aaaed13195/src/shared/types/interfaces/Immutable.ts#L1)
