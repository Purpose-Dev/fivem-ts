[**fivem-ts - Documentation v0.5.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.5.5](../../../README.md) / [Shared](../README.md) / NetEvent

# Function: NetEvent()

> **NetEvent**(`eventName`): (`target`, `propertyKey`, `descriptor`) => `void`

A decorator that subscribes a method to a network event.

The `@NetEvent` decorator is used to associate a method with a network event. When the specified network event occurs, the decorated method will be automatically called with the event's arguments.

**Usage:**
- This decorator listens for a network event and invokes the decorated method whenever the event is triggered.

**Example:**
```ts
class NetworkHandler {
    @NetEvent('playerJoined')
    onPlayerJoined(playerId: number, playerName: string) {
        console.log(`Player joined: ${playerName} (ID: ${playerId})`);
    }
}
```

**Parameters:**
- `eventName`: The name of the network event to listen for. The method decorated with `@NetEvent` will be called whenever this event is fired.

**Note:** Ensure that the event name matches the one used in the network event system, and the method should match the expected signature of the event arguments.

## Parameters

• **eventName**: `string`

The name of the network event to subscribe to.

## Returns

`Function`

A method decorator that subscribes the decorated method to the specified network event.

### Parameters

• **target**: `object`

• **propertyKey**: `string`

• **descriptor**: `PropertyDescriptor`

### Returns

`void`

## Defined in

[shared/decorators/events/netEvent.ts:29](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/decorators/events/netEvent.ts#L29)
