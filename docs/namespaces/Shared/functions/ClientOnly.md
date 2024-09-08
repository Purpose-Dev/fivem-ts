[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Shared](../README.md) / ClientOnly

# Function: ClientOnly()

> **ClientOnly**(`target`, `propertyKey`, `descriptor`): `void`

A decorator that ensures a method is only executed on the client side.

The `@ClientOnly` decorator modifies the behavior of the decorated method to prevent its execution
on the server side. If the method is called on the server side, a warning is logged and the method is replaced
with an empty function to prevent any unintended behavior.

**Note:** This decorator intended to be used in environments where both server and client code can be executed,
such as in frameworks that support both server-side and client-side execution

## Parameters

• **target**: `unknown`

The prototype of the class.

• **propertyKey**: `string`

The name of the method being decorated.

• **descriptor**: `PropertyDescriptor`

The property descriptor for the method.

## Returns

`void`

## Example

```ts
class Example {
    @ClientOnly
    public clientMethod() {
        console.log('This method should only run on the client side.');
    }
}

const example = new Example();
example.clientMethod(); // Executes only if running on the client side.
```

## Defined in

[shared/decorators/checks/ClientOnly.ts:31](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/decorators/checks/ClientOnly.ts#L31)
