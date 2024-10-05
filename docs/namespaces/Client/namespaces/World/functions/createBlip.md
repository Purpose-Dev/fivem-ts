[**fivem-ts - Documentation v0.7.5**](../../../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../../../README.md) / [Client](../../../README.md) / [World](../README.md) / createBlip

# Function: createBlip()

> **createBlip**(`position`, `radius`?): [`Blip`](../../../classes/Blip.md)

Creates a blip at a given position and optionally radius.

## Parameters

• **position**: [`Vector3`](../../../../Shared/classes/Vector3.md)

World coordinate of blip.

• **radius?**: `number`

(Optional) Radius of where blip should be shown.

## Returns

[`Blip`](../../../classes/Blip.md)

Blip object.

## Example

```ts
const position = new Vector3(-802.311, 175.056, 72.8446);
const myStoreBlip = World.createBlip(position, 5.0);
myStoreBlip.Sprite = BlipSprite.Store;
```

## Defined in

[client/World.ts:245](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/World.ts#L245)
