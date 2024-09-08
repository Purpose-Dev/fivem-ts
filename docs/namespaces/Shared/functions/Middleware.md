[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Shared](../README.md) / Middleware

# Function: Middleware()

> **Middleware**(`preFn`, `postFn`): (`_target`, `propertyKey`, `descriptor`) => `void`

A decorator that adds middleware functions before and after a method execution.

The `@Middleware` decorator allows you to specify functions to run before (`preFn`) and after (`postFn`) the
execution of a method. This can be useful for adding common logic such as logging, validation, or transformation
around method calls.

## Parameters

• **preFn**: `Function`

The function to execute before the method. It receives the same arguments as the method.

• **postFn**: `Function`

The function to execute after the method. It receives the same arguments as the method.

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
function logStart(...args: any[]) {
  console.log('Method started with args:', args);
}

function logEnd(...args: any[]) {
  console.log('Method ended with args:', args);
}

class ExampleClass {
  @Middleware(logStart, logEnd)
  processData(data: string): string {
    return `Processed ${data}`;
  }
}

const example = new ExampleClass();
example.processData('test');
// Logs:
// Method started with args: ['test']
// Method ended with args: ['test']
```

## Defined in

[shared/decorators/core/Middleware.ts:37](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/decorators/core/Middleware.ts#L37)
