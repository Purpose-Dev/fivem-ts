[**fivem-ts - Documentation v0.4.1**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.4.1](../../../README.md) / [Shared](../README.md) / Singleton

# Function: Singleton()

> **Singleton**\<`T`\>(`constructor`): (...`args`) => `(Anonymous class)`\<`T`\> & `T`

A decorator that ensures a class follows the Singleton pattern.

The `@Singleton` decorator enforces that a class can have only one instance. When a class is decorated with
`@Singleton`, any subsequent instantiations will return the same instance rather than creating a new one.
This is useful for scenarios where you want to ensure a single point of control or a global state.

## Type Parameters

• **T** *extends* (...`args`) => `object`

constructor type of the class being decorated.

## Parameters

• **constructor**: `T`

The class constructor to decorate.

## Returns

(...`args`) => `(Anonymous class)`\<`T`\> & `T`

A new class that extends the original class, ensuring only one instance is created.

## Example

```ts
@Singleton
class Configuration {
    public settings: any;

    constructor() {
        this.settings = { theme: 'dark' };
    }
}

const instance1 = new Configuration();
const instance2 = new Configuration();

console.log(instance1 === instance2); // true
```

## Defined in

[shared/decorators/core/Singleton.ts:33](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/decorators/core/Singleton.ts#L33)
