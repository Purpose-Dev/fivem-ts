[**fivem-ts - Documentation v0.7.5**](../../../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../../../README.md) / [Client](../../../README.md) / [World](../README.md) / createCamera

# Function: createCamera()

> **createCamera**(`position`, `rotation`, `fieldOfView`): [`Camera`](../../../classes/Camera.md)

Creates a camera using 'DEFAULT_SCRIPTED_CAMERA'.

## Parameters

• **position**: [`Vector3`](../../../../Shared/classes/Vector3.md)

World coordinate where the camera should render.

• **rotation**: [`Vector3`](../../../../Shared/classes/Vector3.md)

Rotation of camera relative to world.

• **fieldOfView**: `number`

Field of view angle of camera.

## Returns

[`Camera`](../../../classes/Camera.md)

Camera object.

## Example

```ts
const position = new Vector3(-802.311, 175.056, 72.8446);
const myCamera = World.createCamera(position, new Vector3(0,0,0), 180);
```

## Defined in

[client/World.ts:292](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/World.ts#L292)
