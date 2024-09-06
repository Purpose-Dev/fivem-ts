[**fivem-ts - Documentation v0.5.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.5.5](../../../README.md) / [Shared](../README.md) / DynamicProperty

# Function: DynamicProperty()

> **DynamicProperty**(`propertyName`): (`target`, `propertyKey`) => `void`

A decorator for dynamically binding a class property to a FiveM resource KVP (Key-Value Pair).
This allows for automatic persistence of the property's value and synchronization across the network.

## Parameters

• **propertyName**: `string`

The name of the KVP to associate with the decorated property.

## Returns

`Function`

### Parameters

• **target**: `unknown`

• **propertyKey**: `string`

### Returns

`void`

## Example

```ts
class PlayerSettings {
  // Bind the 'playerName' property to a KVP, automatically syncing changes across the network.
  @DynamicProperty('playerNameKvp')
  public playerName: string;
}

const settings = new PlayerSettings();
settings.playerName = 'NewName'; // Automatically sets the KVP and syncs across the network
console.log(settings.playerName); // Retrieves the current value from the KVP
```

## Remarks

- When a property is decorated with `@DynamicProperty`, any changes to that property will automatically update
  the corresponding KVP and emit a network event to sync the new value with other clients.
- The property value is persisted across resource restarts using the KVP system.
- The network event emitted when the property is set is named in the format `updateProperty:<propertyName>`.

## Defined in

[shared/decorators/game/DynamicProperty.ts:26](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/decorators/game/DynamicProperty.ts#L26)
