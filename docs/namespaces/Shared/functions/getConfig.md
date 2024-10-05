[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Shared](../README.md) / getConfig

# Function: getConfig()

> **getConfig**(`target`, `propertyKey`?): `object` \| `undefined`

Retrieves the configuration metadata associated with a class or method.

## Parameters

• **target**: `object`

The target object (class or prototype).

• **propertyKey?**: `string`

The name of the method being queried, if applicable.

## Returns

`object` \| `undefined`

- The configuration settings associated with the target or method, or `undefined` if no settings are found.

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
const classConfig = getConfig(GameConfig);
const methodConfig = getConfig(PlayerSettings.prototype, 'configurePlayer');
console.log('Class Config:', classConfig); // output: { maxPlayers: 32, gameMode: 'deathmatch' }
console.log('Method Config:', methodConfig); // output: { maxHealth: 100, canRespawn: true }
```

## Defined in

[shared/decorators/game/Config.ts:74](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/decorators/game/Config.ts#L74)
