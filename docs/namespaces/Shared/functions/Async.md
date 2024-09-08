[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Shared](../README.md) / Async

# Function: Async()

> **Async**(`_target`, `propertyKey`, `descriptor`): `void`

A decorator that transforms a method into an asynchronous method.

The `@Async` decorator can be applied to any method within a class, converting it into an
asynchronous function. When the decorated method is called, it will execute asynchronously,
allowing other code to run concurrently.

If the method is not already asynchronous, this decorator will wrap it in a `Promise` and
handle any errors that occur during its execution, logging them to the console.

## Parameters

• **\_target**: `unknown`

The target object that owns the method.

• **propertyKey**: `string`

The name of the method being decorated.

• **descriptor**: `PropertyDescriptor`

The method descriptor, which provides access to the method itself.

## Returns

`void`

## Example

```ts
class ExampleClass {
  @Async
  async myMethod() {
    // Your async code here
  }
}
```

## Throws

Will throw an error if the `@Async` decorator is applied to something other than a method.

## Defined in

[shared/decorators/core/Async.ts:28](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/decorators/core/Async.ts#L28)
