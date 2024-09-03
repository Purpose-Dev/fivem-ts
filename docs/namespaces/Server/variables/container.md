[**fivem-ts - Documentation v0.4.1**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.4.1](../../../README.md) / [Server](../README.md) / container

# Variable: container

> `const` **container**: [`DIContainer`](../classes/DIContainer.md)

The default instance of the DIContainer that can be used directly.

This instance is used to register and resolve dependencies globally.

## Example

```ts
container.registerSingleton(MyService);
const myService = container.resolve(MyService);
```

## Defined in

[server/ioc/DIContainer.ts:313](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/ioc/DIContainer.ts#L313)
