[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Shared](../README.md) / RateLimitPerPlayer

# Function: RateLimitPerPlayer()

> **RateLimitPerPlayer**(`calls`, `interval`): (`_target`, `propertyKey`, `descriptor`) => `void`

A decorator to enforce a rate limit on a method, restricting the number of times it can be called by each player
within a specified time interval.

## Parameters

• **calls**: `number`

The maximum number of allowed calls per player within the specified interval.

• **interval**: `number`

The time window (in milliseconds) within which the call limit is enforced.

## Returns

`Function`

A method decorator that enforces the rate limit per player.

### Parameters

• **\_target**: `unknown`

• **propertyKey**: `string`

• **descriptor**: `PropertyDescriptor`

### Returns

`void`

## Example

```ts
class Game {
  // Allow each player to call the `performAction` method a maximum of 5 times per minute.
  @RateLimitPerPlayer(5, 60000)
  performAction(playerId: number, action: string) {
    console.log(`Action ${action} performed for player ${playerId}`)
  }
}

const game = new Game();
game.performAction(1, 'test') // Action test performed for player 1
game.performAction(1, 'test') // Action test performed for player 1
game.performAction(1, 'test') // Action test performed for player 1
game.performAction(1, 'test') // Action test performed for player 1
game.performAction(1, 'test') // Action test performed for player 1
game.performAction(1, 'test') // Rate limit exceeded for player 1 on function: performAction
```

## Remarks

- The rate limit is enforced per player. If a player exceeds the allowed number of calls within the interval,
  subsequent calls will be ignored and a warning will be logged.
- The `playerId` is expected to be the first argument of the decorated method.

## Defined in

[shared/decorators/game/RateLimitPerPlayer.ts:34](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/decorators/game/RateLimitPerPlayer.ts#L34)
