[**fivem-ts - Documentation v0.7.5**](../../../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../../../README.md) / [Client](../../../README.md) / [World](../README.md) / createVehicle

# Function: createVehicle()

> **createVehicle**(`model`, `position`, `heading`?): `Promise`\<[`Vehicle`](../../../classes/Vehicle.md)\>

Create a vehicle at a desired location.

## Parameters

• **model**: [`Model`](../../../classes/Model.md)

Vehicle model to be spawned.

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
const model = new Model("adder");
const myVehicle = await World.createVehicle(model, position);
```

## Defined in

[client/World.ts:365](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/World.ts#L365)
