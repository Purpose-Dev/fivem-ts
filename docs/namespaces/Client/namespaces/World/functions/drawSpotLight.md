[**fivem-ts - Documentation v0.7.5**](../../../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../../../README.md) / [Client](../../../README.md) / [World](../README.md) / drawSpotLight

# Function: drawSpotLight()

> **drawSpotLight**(`pos`, `dir`, `color`, `distance`, `brightness`, `roundness`, `radius`, `fadeOut`): `void`

Creates a light in the world. More configurable than World.drawLightWithRange.

## Parameters

• **pos**: [`Vector3`](../../../../Shared/classes/Vector3.md)

World coordinate of spotlight.

• **dir**: [`Vector3`](../../../../Shared/classes/Vector3.md)

Direction to face spotlight.

• **color**: [`Color`](../../../classes/Color.md)

RGB colors of spotlight.

• **distance**: `number`

The maximum distance the spotlight can reach.

• **brightness**: `number`

Brightness of the spotlight.

• **roundness**: `number`

"Smoothness" of the edge of the spotlight.

• **radius**: `number`

Radius size of spotlight.

• **fadeOut**: `number`

Falloff size of the spotlight's edge.

## Returns

`void`

## Defined in

[client/World.ts:549](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/World.ts#L549)
