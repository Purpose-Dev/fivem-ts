[**fivem-ts - Documentation v0.7.5**](../../../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../../../README.md) / [Client](../../../README.md) / [World](../README.md) / createRandomPed

# Function: createRandomPed()

> **createRandomPed**(`position`): [`Ped`](../../../classes/Ped.md)

Creates a Ped with a random model.

## Parameters

• **position**: [`Vector3`](../../../../Shared/classes/Vector3.md)

World coordinate of Ped spawn.

## Returns

[`Ped`](../../../classes/Ped.md)

Ped object.

## Example

```ts
const position = new Vector3(-802.311, 175.056, 72.8446);
const randomPed = World.createRandomPed(position);
```

## Defined in

[client/World.ts:345](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/World.ts#L345)
