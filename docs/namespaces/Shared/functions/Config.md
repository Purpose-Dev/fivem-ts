[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Shared](../README.md) / Config

# Function: Config()

> **Config**(`settings`): (`target`, `propertyKey`?, `_descriptor`?) => `void`

A decorator for attaching configuration settings to a class or method in game environment.
This allows for easy retrieval and management of settings via metadata.

## Parameters

• **settings**: `object`

An object containing configuration settings to associate with the class or method.

## Returns

`Function`

### Parameters

• **target**: `any`

• **propertyKey?**: `string`

• **\_descriptor?**: `PropertyDescriptor`

### Returns

`void`

## Example

```ts
@Config({ maxPlayers: 32, gameMode: 'deathmatch' })
class GameConfig {

}

class PlayerSettings {
  @Config({ maxHealth: 100, canRespawn: true })
  configurePlayer() {

  }
}

// Retrieve configuration metadata
const configMetadata = Reflect.getMetadata('config', GameConfig);
const playerSettings = Reflect.getMetadata('configurePlayer', PlayerSettings.prototype);
console.log(configMetadata, playerSettings);
```

## Remarks

- When applied to a class, the settings are stored with the key `'config'` in the class's metadata.
- When applied to a method, the settings are stored using the method name as the metadata key.
- This decorator is useful for organizing and applying settings consistently across different parts of the application.

## Defined in

[shared/decorators/game/Config.ts:32](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/decorators/game/Config.ts#L32)
