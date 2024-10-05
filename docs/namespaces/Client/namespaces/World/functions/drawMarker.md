[**fivem-ts - Documentation v0.7.5**](../../../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../../../README.md) / [Client](../../../README.md) / [World](../README.md) / drawMarker

# Function: drawMarker()

> **drawMarker**(`type`, `position`, `direction`, `rotation`, `scale`, `color`, `bobUpAndDown`?, `faceCamera`?, `rotateY`?, `textureDict`?, `textureName`?, `drawOnEntity`?): `void`

Draw a marker at a desired location.
Must be drawn every tick.

## Parameters

• **type**: [`MarkerTypes`](../../../enumerations/MarkerTypes.md)

Type of marker.

• **position**: [`Vector3`](../../../../Shared/classes/Vector3.md)

Location of marker.

• **direction**: [`Vector3`](../../../../Shared/classes/Vector3.md)

Direction facing.

• **rotation**: [`Vector3`](../../../../Shared/classes/Vector3.md)

World rotation.

• **scale**: [`Vector3`](../../../../Shared/classes/Vector3.md)

Size of marker.

• **color**: [`Color`](../../../classes/Color.md)

Color of marker.

• **bobUpAndDown?**: `boolean` = `false`

Animated movement along marker's own X axis.

• **faceCamera?**: `boolean` = `false`

Rendering marker facing rendering camera.

• **rotateY?**: `boolean` = `false`

Rotate along Y axis.

• **textureDict?**: `string`

Custom texture dictionary for custom marker.

• **textureName?**: `string`

Custom texture name for custom marker.

• **drawOnEntity?**: `boolean` = `false`

Render the marker on an entity.

## Returns

`void`

## Example

```ts
const position = new Vector3(-802.311, 175.056, 72.8446);
const zeroVector = new Vector3(0,0,0);

setTick(() => {
 World.drawMarker(MarkerType.ThickChevronUp, position, zeroVector, zeroVector, 1.0, new Color(255,0,0));
})
```

## Defined in

[client/World.ts:474](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/World.ts#L474)
