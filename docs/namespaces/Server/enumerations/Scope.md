[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Server](../README.md) / Scope

# Enumeration: Scope

Enum representing the different scopes for Inversion of Control (IoC) in dependency injection.

This enum defines the scopes in which services can be registered and managed by the DI container. It determines
how instances of services are created and shared within the application:

- `Singleton`: A single instance of the service is created and shared across all requests. Every time the service is resolved, the same instance is returned.
- `Transient`: A new instance of the service is created each time it is resolved. Each request for the service results in a new instance being provided.
- `Request`: A single instance of the service is created and shared for the duration of a single request. Once the request is completed, the instance is discarded.
- `Session`: A single instance of the service is created and shared for the duration of a user's session. This scope is useful for services that need to maintain state across multiple requests from the same user.

These scopes help control the lifecycle and sharing of service instances within the DI container, providing flexibility
in how dependencies are managed in a gaming server environment.

**Example usage:**

```ts
// Register a service with a singleton scope
container.registerSingleton(MyService);

// Register a service with a transient scope
container.registerTransient(MyOtherService);

// Register a service with a request scope
container.registerRequestScoped(MyRequestService);

// Register a service with a session scope
container.registerSessionScoped(MySessionService);
```

## Enumeration Members

### Request

> **Request**: `2`

Represents a request scope where a single instance of the service is created and shared for the duration of a single request.

When a service is registered with this scope, the DI container will create a new instance at the beginning of a request
and will reuse that instance throughout the request. The instance is discarded once the request completes.

#### Defined in

[server/ioc/Scope.ts:54](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/ioc/Scope.ts#L54)

***

### Session

> **Session**: `3`

Represents a session scope where a single instance of the service is created and shared for the duration of a user's session.

When a service is registered with this scope, the DI container will create a new instance at the beginning of a session
and will reuse that instance throughout the session. The instance is discarded once the session ends.

This is particularly useful in gaming environments where certain services need to maintain state across multiple requests from the same user.

#### Defined in

[server/ioc/Scope.ts:64](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/ioc/Scope.ts#L64)

***

### Singleton

> **Singleton**: `0`

Represents a singleton scope where a single instance of the service is created and shared across all requests.

When a service is registered with this scope, the DI container will return the same instance for every resolution.

#### Defined in

[server/ioc/Scope.ts:39](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/ioc/Scope.ts#L39)

***

### Transient

> **Transient**: `1`

Represents a transient scope where a new instance of the service is created each time it is resolved.

When a service is registered with this scope, a new instance is created and provided every time the service is resolved.

#### Defined in

[server/ioc/Scope.ts:46](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/ioc/Scope.ts#L46)
