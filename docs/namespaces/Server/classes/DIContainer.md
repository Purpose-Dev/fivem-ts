[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Server](../README.md) / DIContainer

# Class: DIContainer

A simple Dependency Injection (DI) container for managing dependency injection.

This class allows for the registration and resolution of singletons, transients, and factory-based dependencies.
It uses TypeScript decorators and metadata reflection to handle dependency injection.

Example usage:

## Example

```ts
// Define a service
class MyService {
    constructor(private dependency: AnotherService) {}
}

// Register the service
container.registerSingleton(MyService);

// Resolve the service
const myService = container.resolve(MyService);
```

## Constructors

### new DIContainer()

> **new DIContainer**(): [`DIContainer`](DIContainer.md)

#### Returns

[`DIContainer`](DIContainer.md)

## Methods

### clearRequestScope()

> **clearRequestScope**(): `void`

Clears the request-scoped instances.

This should be called at the end of a request to clean up the container.

#### Returns

`void`

#### Example

```ts
container.clearRequestScope();
```

#### Defined in

[server/ioc/DIContainer.ts:41](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/ioc/DIContainer.ts#L41)

***

### clearSessionScope()

> **clearSessionScope**(`sessionId`): `void`

Clears the session-scoped instances for a given session ID.

This should be called at the end of a session to clean up the container.

#### Parameters

• **sessionId**: `string`

The ID of the session to clear.

#### Returns

`void`

#### Example

```ts
container.clearSessionScope('sessionId123');
```

#### Defined in

[server/ioc/DIContainer.ts:57](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/ioc/DIContainer.ts#L57)

***

### handleHttpRequest()

> **handleHttpRequest**(`request`, `response`): `void`

Handles an HTTP request by matching it against the registered routes.

#### Parameters

• **request**: [`HttpRequest`](../interfaces/HttpRequest.md)

The HTTP request object.

• **response**: [`HttpResponse`](../interfaces/HttpResponse.md)

The HTTP response object.

#### Returns

`void`

#### Defined in

[server/ioc/DIContainer.ts:163](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/ioc/DIContainer.ts#L163)

***

### registerFactory()

> **registerFactory**\<`T`\>(`constructor`, `factoryFn`): `void`

Registers a factory function to create an instance of the class.

The factory function will be called to produce the instance.

#### Type Parameters

• **T**

#### Parameters

• **constructor**

The constructor function of the class to be registered.

• **factoryFn**

The factory function to create an instance of the class.

#### Returns

`void`

#### Example

```ts
container.registerFactory(MyService, () => new MyService(new Dependency()));
```

#### Defined in

[server/ioc/DIContainer.ts:138](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/ioc/DIContainer.ts#L138)

***

### registerRequestScoped()

> **registerRequestScoped**\<`T`\>(`constructor`): `void`

Registers a class as request-scoped in the container.

A request-scoped instance will be created and shared throughout a single request, and then discarded.

#### Type Parameters

• **T**

#### Parameters

• **constructor**

The constructor function of the class to be registered.

#### Returns

`void`

#### Example

```ts
container.registerRequestScoped(MyRequestService);
```

#### Defined in

[server/ioc/DIContainer.ts:105](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/ioc/DIContainer.ts#L105)

***

### registerRoute()

> **registerRoute**(`method`, `path`, `handler`): `void`

Registers a route in the container. This route will handle HTTP requests that match the method and path provided.

#### Parameters

• **method**: `string`

The HTTP method (GET, POST, etc.).

• **path**: `string`

The path of the route.

• **handler**: `Function`

The function that handles the route.

#### Returns

`void`

#### Defined in

[server/ioc/DIContainer.ts:152](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/ioc/DIContainer.ts#L152)

***

### registerSessionScoped()

> **registerSessionScoped**\<`T`\>(`constructor`): `void`

Registers a class as session-scoped in the container.

A session-scoped instance will be created and shared throughout a user's session, and then discarded when the session ends.

#### Type Parameters

• **T**

#### Parameters

• **constructor**

The constructor function of the class to be registered.

#### Returns

`void`

#### Example

```ts
container.registerSessionScoped(MySessionService);
```

#### Defined in

[server/ioc/DIContainer.ts:121](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/ioc/DIContainer.ts#L121)

***

### registerSingleton()

> **registerSingleton**\<`T`\>(`constructor`): `void`

Registers a class as a singleton in the container.

A singleton instance will be created once and reused for all future requests.

#### Type Parameters

• **T**

#### Parameters

• **constructor**

The constructor function of the class to be registered.

#### Returns

`void`

#### Example

```ts
container.registerSingleton(MyService);
```

#### Defined in

[server/ioc/DIContainer.ts:73](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/ioc/DIContainer.ts#L73)

***

### registerTransient()

> **registerTransient**\<`T`\>(`constructor`): `void`

Registers a class as a transient in the container.

A transient instance will be created every time it is resolved.

#### Type Parameters

• **T**

#### Parameters

• **constructor**

The constructor function of the class to be registered.

#### Returns

`void`

#### Example

```ts
container.registerTransient(MyTransientService);
```

#### Defined in

[server/ioc/DIContainer.ts:89](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/ioc/DIContainer.ts#L89)

***

### resolve()

> **resolve**\<`T`\>(`constructor`, `request`?, `sessionId`?): `T`

Resolves an instance of the specified class.

This method creates an instance of the class and injects its dependencies.
If a request or session context is provided, it will resolve accordingly.

#### Type Parameters

• **T**

#### Parameters

• **constructor**

The constructor function of the class to be resolved.

• **request?**: `unknown`

An optional request context for request-scoped dependencies.

• **sessionId?**: `string`

An optional session ID for session-scoped dependencies.

#### Returns

`T`

An instance of the specified class.

#### Example

```ts
const myService = container.resolve(MyService);
```

#### Defined in

[server/ioc/DIContainer.ts:206](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/ioc/DIContainer.ts#L206)
