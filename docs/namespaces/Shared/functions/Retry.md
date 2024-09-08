[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Shared](../README.md) / Retry

# Function: Retry()

> **Retry**(`attempts`, `delay`): (`target`, `propertyKey`, `descriptor`) => `void`

A decorator to automatically retry a method upon failure.

This decorator retries the decorated method a specified number of times, with a delay between each attempt.
If all attempts fail, the last error will be thrown.

## Parameters

• **attempts**: `number`

The number of retry attempts before failing.

• **delay**: `number`

The delay in milliseconds between each retry attempt.

## Returns

`Function`

A method decorator that applies the retry logic.

### Parameters

• **target**: `object`

• **propertyKey**: `string` \| `symbol`

• **descriptor**: `TypedPropertyDescriptor`\<`Function`\>

### Returns

`void`

## Example

```ts
import { Retry } from 'fivem-ts/shared/decorators';

class MyService {
    @Retry(3, 1000)
    async unstableMethod(): Promise<void> {
        // Some operation that might fail
    }
}
```

## Defined in

[shared/decorators/core/Retry.ts:29](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/decorators/core/Retry.ts#L29)
