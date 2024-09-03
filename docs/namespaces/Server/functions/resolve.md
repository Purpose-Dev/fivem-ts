[**fivem-ts - Documentation v0.4.1**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.4.1](../../../README.md) / [Server](../README.md) / resolve

# Function: resolve()

> **resolve**\<`T`\>(`constructor`): `T`

Resolves an instance of the specified class from the DI container.

This function retrieves an instance of a class by resolving it from the DI container. It uses the container's
`resolve` method to handle dependency injection and create an instance with its dependencies automatically injected.

**Note:** The class must be registered with the DI container (as a singleton, transient, or factory) for this
function to successfully resolve an instance. If the class is not registered, an error will be thrown.

**Example usage:**

```ts
@Injectable()
class MyService {
    constructor(private dependency: AnotherService) {}
}

// Register AnotherService
container.registerSingleton(AnotherService);

// Resolve MyService instance with dependencies injected
const myService = resolve(MyService);
```

## Type Parameters

• **T**

The type of the class to be resolved. It must be a constructor function.

## Parameters

• **constructor**

The constructor function of the class to be resolved.

## Returns

`T`

An instance of the specified class with its dependencies injected.

## Throws

Error if the class is not registered in the DI container or cannot be resolved.

## Defined in

[server/ioc/resolve.ts:35](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/ioc/resolve.ts#L35)
