[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Shared](../README.md) / Cache

# Function: Cache()

> **Cache**(`duration`): (`_target`, `propertyKey`, `descriptor`) => `void`

A decorator that caches the result of a method for a specified duration.

The `@Cache` decorator can be applied to methods to store their return values for a given amount
of time. If the method is called again within the cache duration, the cached result is returned
instead of re-executing the method. This can improve performance by reducing the need for repeated
expensive computations or operations.

## Parameters

• **duration**: `number`

The duration (in milliseconds) for which the result should be cached.

## Returns

`Function`

A function that can be used as a method decorator.

### Parameters

• **\_target**: `unknown`

• **propertyKey**: `string`

• **descriptor**: `PropertyDescriptor`

### Returns

`void`

## Example

```ts
class ExampleClass {
  @Cache(5000) // Cache the result for 5 seconds
  computeExpensiveOperation() {
    console.log('Computing...');
    return Math.random(); // Simulate an expensive operation
  }
}

const example = new ExampleClass();

// First call will compute and cache the result
console.log(example.computeExpensiveOperation()); // Outputs: Computing... followed by a random number

// Subsequent calls within 5 seconds will return the cached result
console.log(example.computeExpensiveOperation()); // Outputs: the cached random number

// After 5 seconds, a new result will be computed and cached again
setTimeout(() => console.log(example.computeExpensiveOperation()), 6000); // Outputs: Computing... followed by a new random number
```

## Defined in

[shared/decorators/core/Cache.ts:36](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/decorators/core/Cache.ts#L36)
