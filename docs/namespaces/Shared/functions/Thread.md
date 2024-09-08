[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Shared](../README.md) / Thread

# Function: Thread()

> **Thread**(`delay`): (`target`, `propertyKey`, `descriptor`) => `void`

A decorator that executes a method periodically at a specified interval.

The `@Thread` decorator schedules the decorated method to be executed repeatedly after a specified delay.
This is useful for scenarios where you need a method to be run on a regular interval, such as updating
status, checking conditions, or performing background tasks.

## Parameters

• **delay**: `number`

The interval in milliseconds between successive executions of the method.

## Returns

`Function`

A decorator function that modifies the behavior of the method to run periodically.

### Parameters

• **target**: `unknown`

• **propertyKey**: `string`

• **descriptor**: `PropertyDescriptor`

### Returns

`void`

## Example

```ts
class StatusUpdater {
    @Thread(5000) // Runs every 5 seconds
    public updateStatus() {
        console.log('Updating status...');
    }
}

const updater = new StatusUpdater();
// The `updateStatus` method will now be called every 5 seconds.
```

## Defined in

[shared/decorators/core/Thread.ts:27](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/decorators/core/Thread.ts#L27)
