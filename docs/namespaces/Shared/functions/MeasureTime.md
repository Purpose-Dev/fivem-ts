[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Shared](../README.md) / MeasureTime

# Function: MeasureTime()

> **MeasureTime**(`_target`, `propertyKey`, `descriptor`): `void`

A decorator that measures the execution time of a method.

The `@MeasureTime` decorator wraps a method, logging the time it takes to execute in milliseconds.
This can be useful for performance profiling and identifying slow methods.

## Parameters

• **\_target**: `unknown`

The target object that owns the method.

• **propertyKey**: `string`

The name of the method being decorated.

• **descriptor**: `PropertyDescriptor`

The method descriptor, which provides access to the method itself.

## Returns

`void`

A function that can be used as a method decorator.

## Example

```ts
class ExampleClass {
  @MeasureTime
  processData(data: string): string {
    // Simulate some processing time
    for (let i = 0; i < 1e6; i++) {

    }
    return `Processed ${data}`;
  }
}

const example = new ExampleClass();
example.processData('test');
// Logs:
// [processData] Execution time: 123.456ms
```

## Defined in

[shared/decorators/core/MeasureTime.ts:32](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/decorators/core/MeasureTime.ts#L32)
