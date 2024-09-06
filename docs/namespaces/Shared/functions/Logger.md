[**fivem-ts - Documentation v0.5.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.5.5](../../../README.md) / [Shared](../README.md) / Logger

# Function: Logger()

> **Logger**(`logLevel`): (`_target`, `propertyKey`, `descriptor`) => `void`

A decorator that logs method calls and their results.

The `@Logger` decorator wraps a method, logging its invocation with the provided log level,
including the arguments passed and the result returned. This can be useful for debugging and
monitoring method execution in your application.

## Parameters

• **logLevel**: `"info"` \| `"warn"` \| `"error"` \| `"debug"` = `'info'`

The level of logging. Possible values are `'info'`, `'warn'`, `'error'`, or `'debug'`.
The default is `'info'`.

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
  @Logger('debug')
  someMethod(arg1: string, arg2: number): string {
    return `Processed ${arg1} and ${arg2}`;
  }
}

const example = new ExampleClass();
example.someMethod('test', 123);
// Logs:
// [someMethod] Called with args: ['test', 123]
// [someMethod] Returned: 'Processed test and 123'
```

## Defined in

[shared/decorators/core/Logger.ts:29](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/decorators/core/Logger.ts#L29)
