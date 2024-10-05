[**fivem-ts - Documentation v0.7.5**](../../../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../../../README.md) / [Client](../../../README.md) / [World](../README.md) / setRenderingCamera

# Function: setRenderingCamera()

> **setRenderingCamera**(`camera`): `void`

Sets the specified camera to be the active rendering camera.
Set null to reset : World.RenderingCamera = null
If the provided camera is null, the rendering will switch back to the default script camera.
Otherwise, the provided camera will be activated and used for rendering.

## Parameters

• **camera**: [`Camera`](../../../classes/Camera.md)

The camera object to be set as the active rendering camera. If null, the default script camera is used.

## Returns

`void`

## Example

```ts
const position = new Vector3(-802.311, 175.056, 72.8446);
const myCamera = World.createCamera(position, new Vector3(0,0,0), 180);
World.RenderingCamera = myCamera;

// Reset to default cam
World.RenderingCamera = null;
```

## Defined in

[client/World.ts:41](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/World.ts#L41)
