[**fivem-ts - Documentation v0.7.5**](../../../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../../../README.md) / [Client](../../../README.md) / [Game](../README.md) / getPlayer

# Function: getPlayer()

> **getPlayer**(): [`Player`](../../../classes/Player.md)

Retrieves the player instance, caching it if necessary.

The method checks if there is a cached player instance. If the cached
player is undefined or its owner does not match the current player ID,
it creates a new Player instance and caches it. Otherwise, it returns
the cached player.

## Returns

[`Player`](../../../classes/Player.md)

The current player instance.

## Defined in

[client/Game.ts:87](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L87)
