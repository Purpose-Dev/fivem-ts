[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Shared](../README.md) / Cooldown

# Function: Cooldown()

> **Cooldown**(`milliseconds`): (`_target`, `propertyKey`, `descriptor`) => `void`

A decorator that enforces a cooldown period between successive calls to a method.

The `@Cooldown` decorator ensures that a method can only be executed once every specified
number of milliseconds. If the method is called again before the cooldown period has elapsed,
a warning is logged, and the method is not executed.

## Parameters

• **milliseconds**: `number`

The cooldown period (in milliseconds) that must elapse between method calls.

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
  @Cooldown(1000) // 1 second cooldown
  performAction() {
    console.log('Action performed');
  }
}

const example = new ExampleClass();

// The first call will execute the method
example.performAction(); // Outputs: Action performed

// Subsequent calls within 1 second will be ignored
example.performAction(); // Outputs: Function performAction is on cooldown.

// After 1 second, the method can be called again
setTimeout(() => example.performAction(), 1000); // Outputs: Action performed
```

## Defined in

[shared/decorators/core/Cooldown.ts:33](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/decorators/core/Cooldown.ts#L33)
