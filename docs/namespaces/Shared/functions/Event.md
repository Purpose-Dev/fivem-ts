[**fivem-ts - Documentation v0.4.1**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.4.1](../../../README.md) / [Shared](../README.md) / Event

# Function: Event()

> **Event**(`eventName`): (`target`, `propertyKey`, `descriptor`) => `void`

A decorator that subscribes a method to a specified local event.

The `@Event` decorator is used to associate a method with a named event. When the specified event is triggered, the decorated method will be automatically called with the event's arguments.

**Usage:**
- This decorator listens for an event and invokes the decorated method whenever the event is fired.

**Example:**
```ts
class EventHandler {
    @Event('userLoggedIn')
    onUserLoggedIn(userId: number, userName: string) {
        console.log(`User logged in: ${userName} (ID: ${userId})`);
    }
}
```

**Parameters:**
- `eventName`: The name of the event to listen for. The method decorated with `@Event` will be called whenever this event is triggered.

**Note:** Ensure that the event name matches the one used in the event system, and the method should match the expected signature of the event arguments.

## Parameters

• **eventName**: `string`

The name of the event to subscribe to.

## Returns

`Function`

A method decorator that subscribes the decorated method to the specified event.

### Parameters

• **target**: `object`

• **propertyKey**: `string`

• **descriptor**: `PropertyDescriptor`

### Returns

`void`

## Defined in

[shared/decorators/events/Event.ts:29](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/decorators/events/Event.ts#L29)
