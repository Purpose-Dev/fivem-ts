[**fivem-ts - Documentation v0.5.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.5.5](../../../README.md) / [Server](../README.md) / Factory

# Function: Factory()

> **Factory**(`_target`, `_propertyKey`, `descriptor`): `PropertyDescriptor`

Factory decorator for methods that create instances and automatically register them as singletons in the DI container.

This decorator is used on methods that create instances of a class. When the method is called, the created instance is registered
as a singleton in the DI container. This means that the same instance will be returned whenever the class is resolved from the container.

Example usage:

```ts
class MyService {
    // Decorated factory method
    @Factory
    public static createInstance(): MyService {
        return new MyService();
    }
}

// Resolve the singleton instance
const myService = container.resolve(MyService);
```

## Parameters

• **\_target**: `unknown`

The prototype of the class on which the method is defined. This parameter is not used.

• **\_propertyKey**: `string`

The name of the method being decorated. This parameter is not used.

• **descriptor**: `PropertyDescriptor`

The property descriptor of the method being decorated.

## Returns

`PropertyDescriptor`

The modified property descriptor with the factory logic applied.

## Defined in

[server/ioc/Factory.ts:30](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/ioc/Factory.ts#L30)
