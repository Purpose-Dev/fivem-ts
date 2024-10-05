[**fivem-ts - Documentation v0.7.5**](../../../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../../../README.md) / [Client](../../../README.md) / [World](../README.md) / createPed

# Function: createPed()

> **createPed**(`model`, `position`, `heading`?): `Promise`\<[`Ped`](../../../classes/Ped.md)\>

Creates a pedestrian (ped) instance in the game world at the specified position and heading with the provided model.

## Parameters

• **model**: [`Model`](../../../classes/Model.md)

The model to be used for creating the ped. Must be a valid pedestrian model.

• **position**: [`Vector3`](../../../../Shared/classes/Vector3.md)

The 3D vector specifying the position where the ped will be created.

• **heading?**: `number` = `0`

The heading direction for the ped. Defaults to 0 if not specified.

## Returns

`Promise`\<[`Ped`](../../../classes/Ped.md)\>

A promise that resolves to the created Ped instance, or null if the model is invalid or unavailable.

## Defined in

[client/World.ts:322](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/World.ts#L322)
