[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Server](../README.md) / Injectable

# Function: Injectable()

> **Injectable**(): \<`T`\>(`constructor`) => `void`

Marks a class as injectable and registers it as a singleton in the DI container.

This decorator is used to indicate that a class should be managed by the DI container and registered
as a singleton. When a class is decorated with `@Injectable`, an instance of that class will be created
once and reused for all future requests from the DI container.

This is useful for marking classes that should be automatically resolved and injected into other classes
or components managed by the DI container.

**Example usage:**

```ts
@Injectable()
class MyService {
    constructor(private dependency: AnotherService) {}
}

// Register AnotherService
container.registerSingleton(AnotherService);

// Resolve MyService; dependency will be automatically injected
const myService = container.resolve(MyService);
```

## Returns

`Function`

A decorator function that registers the class as a singleton in the DI container.

### Type Parameters

• **T** *extends* (...`args`) => `object`

### Parameters

• **constructor**: `T`

### Returns

`void`

## Defined in

[server/ioc/Injectable.ts:32](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/ioc/Injectable.ts#L32)
