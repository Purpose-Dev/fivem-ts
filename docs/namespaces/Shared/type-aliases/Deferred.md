[**fivem-ts - Documentation v0.5.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.5.5](../../../README.md) / [Shared](../README.md) / Deferred

# Type Alias: Deferred\<T\>

> **Deferred**\<`T`\>: `object`

## Type Parameters

• **T**

## Type declaration

### promise

> **promise**: `Promise`\<`T`\>

### reject()

> **reject**: (`reason`?) => `void`

#### Parameters

• **reason?**: `unknown`

#### Returns

`void`

### resolve()

> **resolve**: (`value`) => `void`

#### Parameters

• **value**: `T` \| `PromiseLike`\<`T`\>

#### Returns

`void`

## Defined in

[shared/types/utilities/Deferred.ts:1](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/types/utilities/Deferred.ts#L1)
