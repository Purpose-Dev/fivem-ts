[**fivem-ts - Documentation v0.4.1**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.4.1](../../../README.md) / [Server](../README.md) / Inject

# Function: Inject()

> **Inject**(`target`, `propertyKey`, `parameterIndex`): `void`

Injects a dependency into a class property or constructor parameter.

This decorator is used to automatically inject dependencies into class properties or constructor parameters
by resolving them from the DI container. It works by leveraging TypeScript's metadata reflection to determine
the type of dependency needed and then retrieving it from the global DI container.

**Note:** To use this decorator effectively, ensure that the `emitDecoratorMetadata` option is enabled in your
`tsconfig.json` configuration file.

Example usage:

```ts
class MyService {
    constructor(@Inject private dependency: AnotherService) {}
}

// Ensure that AnotherService is registered with the DI container
container.registerSingleton(AnotherService);

// Resolve an instance of MyService with its dependencies injected
const myService = container.resolve(MyService);
```

## Parameters

• **target**: `any`

The prototype of the class or the constructor function where the dependency is injected.

• **propertyKey**: `string` \| `symbol`

The name of the property or method parameter where the dependency is injected.

• **parameterIndex**: `number`

The index of the constructor parameter to be injected with a dependency. This is relevant only for constructor parameters.

## Returns

`void`

## Throws

Error if the dependency cannot be resolved. This might occur if:
- The dependency is not registered in the DI container.
- The `emitDecoratorMetadata` option is not enabled in `tsconfig.json`.

## Defined in

[server/ioc/Inject.ts:36](https://github.com/Purpose-Dev/fivem-ts/blob/af9f57481b70813a163451854c2103aaaed13195/src/server/ioc/Inject.ts#L36)
