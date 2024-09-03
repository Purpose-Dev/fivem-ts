[**fivem-ts - Documentation v0.4.1**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.4.1](../../../README.md) / [Server](../README.md) / Scoped

# Function: Scoped()

> **Scoped**(`scope`): \<`T`\>(`constructor`) => `void`

Marks a class as injectable with a specific scope and registers it in the DI container.

This decorator allows you to specify the scope for a class when registering it with the DI container.
Depending on the provided scope, the class will be registered either as a singleton, transient, request-scoped, or session-scoped:

- **Singleton**: A single instance of the class will be created and shared across all injections. The same instance
  will be returned each time the class is resolved.
- **Transient**: A new instance of the class will be created each time it is resolved. Every request for the class
  will result in a new instance.
- **Request**: A single instance of the class will be created and shared for the duration of a single request. Once the request completes, the instance is discarded.
- **Session**: A single instance of the class will be created and shared for the duration of a user's session. The instance is discarded once the session ends.

This is useful for controlling the lifecycle and sharing behavior of service instances in your application.

**Example usage:**

```ts
@Scoped(Scope.Singleton)
class MyService {
    constructor(private dependency: AnotherService) {}
}

@Scoped(Scope.Transient)
class MyOtherService {
    constructor(private dependency: AnotherService) {}
}

@Scoped(Scope.Request)
class MyRequestService {
    constructor(private dependency: AnotherService) {}
}

@Scoped(Scope.Session)
class MySessionService {
    constructor(private dependency: AnotherService) {}
}

// Register AnotherService
container.registerSingleton(AnotherService);

// Resolve instances of MyService, MyOtherService, MyRequestService, and MySessionService
const myService = container.resolve(MyService); // Singleton instance
const myOtherService = container.resolve(MyOtherService); // New instance
const myRequestService = container.resolve(MyRequestService); // Request-scoped instance
const mySessionService = container.resolve(MySessionService); // Session-scoped instance
```

## Parameters

• **scope**: [`Scope`](../enumerations/Scope.md)

The scope to use for the class. Determines how instances of the class are managed and shared:
  - `Scope.Singleton`: Register the class as a singleton.
  - `Scope.Transient`: Register the class as transient.
  - `Scope.Request`: Register the class as request-scoped.
  - `Scope.Session`: Register the class as session-scoped.

## Returns

`Function`

A decorator function that registers the class with the specified scope in the DI container.

### Type Parameters

• **T** *extends* (...`args`) => `object`

### Parameters

• **constructor**: `T`

### Returns

`void`

## Defined in

[server/ioc/Scoped.ts:62](https://github.com/Purpose-Dev/fivem-ts/blob/af9f57481b70813a163451854c2103aaaed13195/src/server/ioc/Scoped.ts#L62)
