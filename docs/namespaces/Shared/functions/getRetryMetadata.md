[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Shared](../README.md) / getRetryMetadata

# Function: getRetryMetadata()

> **getRetryMetadata**(`target`, `propertyKey`): [`Maybe`](../type-aliases/Maybe.md)\<[`RetryValue`](../type-aliases/RetryValue.md)\>

Retrieves the retry metadata for a given method.

This function can be used to obtain the number of retry attempts and the delay between attempts
for a method decorated with the `Retry` decorator.

## Parameters

• **target**: `object`

The target object (usually the prototype of a class).

• **propertyKey**: `string`

The name of the method to retrieve metadata for.

## Returns

[`Maybe`](../type-aliases/Maybe.md)\<[`RetryValue`](../type-aliases/RetryValue.md)\>

An object containing the number of attempts and the delay, or `undefined` if not found.

## Example

```ts
import { getRetryMetadata } from 'fivem-ts/shared/decorators';

const retryMetadata = getRetryMetadata(MyService.prototype, 'unstableMethod');
if (retryMetadata) {
    console.log(`Retry attempts: ${retryMetadata.attempts}, Delay: ${retryMetadata.delay}`);
}
```

## Defined in

[shared/decorators/core/Retry.ts:84](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/decorators/core/Retry.ts#L84)
