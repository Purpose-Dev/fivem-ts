[**fivem-ts - Documentation v0.4.1**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.4.1](../../../README.md) / [Shared](../README.md) / ErrorHandler

# Function: ErrorHandler()

> **ErrorHandler**(`handleError`): (`_target`, `propertyKey`, `descriptor`) => `void`

A decorator that wraps a method with error handling logic.

The `@ErrorHandler` decorator catches any errors thrown by the decorated method and
passes them to the provided error handler function. This allows for centralized error
handling and custom responses to errors.

## Parameters

• **handleError**

A function to handle errors. This function is called with the error
that was thrown by the decorated method.

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

function logError(error: unknown): void {
  console.error('An error occurred:', error);
}

class ExampleClass {
  @ErrorHandler(logError)
  riskyMethod() {
    throw new Error('Something went wrong');
  }
}

const example = new ExampleClass();
example.riskyMethod(); // Logs: An error occurred: Error: Something went wrong
```

## Defined in

[shared/decorators/core/ErrorHandler.ts:31](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/decorators/core/ErrorHandler.ts#L31)
