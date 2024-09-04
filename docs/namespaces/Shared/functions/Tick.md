[**fivem-ts - Documentation v0.4.1**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.4.1](../../../README.md) / [Shared](../README.md) / Tick

# Function: Tick()

> **Tick**(`_target`, `propertyKey`, `descriptor`): `void`

A decorator that schedules a method to be executed every game tick.

The `@Tick` decorator registers the decorated method to be executed on each game tick. This is particularly useful
where a method needs to be run continuously at every update cycle.

## Parameters

• **\_target**: `unknown`

The prototype of the class.

• **propertyKey**: `string`

The name of the method being decorated.

• **descriptor**: `PropertyDescriptor`

The property descriptor for the method.

## Returns

`void`

## Example

```ts
class GameLogic {
    @Tick
    public update() {
        console.log('Updating game state...');
    }
}

const game = new GameLogic();
// The `update` method will now be called on every game tick.
```

## Defined in

[shared/decorators/core/Tick.ts:24](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/decorators/core/Tick.ts#L24)
