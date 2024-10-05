[**fivem-ts - Documentation v0.7.5**](../../../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../../../README.md) / [Client](../../../README.md) / [World](../README.md) / createRandomVehicle

# Function: createRandomVehicle()

> **createRandomVehicle**(`position`, `heading`?): `Promise`\<[`Vehicle`](../../../classes/Vehicle.md)\>

Create a random vehicle at a desired location.

## Parameters

• **position**: [`Vector3`](../../../../Shared/classes/Vector3.md)

World position (coordinates) of Vehicle spawn.

• **heading?**: `number` = `0`

Heading of Vehicle when spawning.

## Returns

`Promise`\<[`Vehicle`](../../../classes/Vehicle.md)\>

Vehicle object.

## Example

```ts
const position = new Vector3(-802.311, 175.056, 72.8446);
const myVehicle = await World.createRandomVehicle(position);
```

## Defined in

[client/World.ts:393](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/World.ts#L393)
