[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Client](../README.md) / Camera

# Class: Camera

The Camera class provides methods to manipulate and control camera.

## Constructors

### new Camera()

> **new Camera**(`handle`): [`Camera`](Camera.md)

#### Parameters

• **handle**: `number`

#### Returns

[`Camera`](Camera.md)

#### Defined in

[client/Camera.ts:9](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Camera.ts#L9)

## Accessors

### DepthOfFieldStrength

> `get` **DepthOfFieldStrength**(): `number`

Gets the strength of the depth of field effect for the current camera.

> `set` **DepthOfFieldStrength**(`strength`): `void`

Sets the strength of the depth of field effect for the camera.

#### Parameters

• **strength**: `number`

The desired strength of the depth of field effect. This should be a numerical value that determines the intensity of the effect.

#### Returns

`number`

The strength of the depth of field effect.

#### Defined in

[client/Camera.ts:226](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Camera.ts#L226)

***

### Direction

> `get` **Direction**(): [`Vector3`](../../Shared/classes/Vector3.md)

Gets the direction vector.

> `set` **Direction**(`direction`): `void`

Sets the direction vector and adjusts the rotation angles accordingly.

#### Parameters

• **direction**: [`Vector3`](../../Shared/classes/Vector3.md)

The input vector representing the direction.

#### Returns

[`Vector3`](../../Shared/classes/Vector3.md)

The forward direction vector.

#### Defined in

[client/Camera.ts:109](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Camera.ts#L109)

***

### FarClip

> `get` **FarClip**(): `number`

Retrieves the far clipping distance for the camera.

> `set` **FarClip**(`farClip`): `void`

Sets the far clipping distance for the camera.

#### Parameters

• **farClip**: `number`

The distance at which the camera will stop rendering objects.

#### Returns

`number`

The far clipping distance.

#### Defined in

[client/Camera.ts:172](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Camera.ts#L172)

***

### FarDepthOfField

> `get` **FarDepthOfField**(): `number`

Retrieves the far depth of field value for the current camera handle.

> `set` **FarDepthOfField**(`farDepthOfField`): `void`

Sets the far depth of field value for the camera.

#### Parameters

• **farDepthOfField**: `number`

The distance from the camera lens to the farthest object in focus.

#### Returns

`number`

The far depth of field value.

#### Defined in

[client/Camera.ts:208](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Camera.ts#L208)

***

### FieldOfView

> `get` **FieldOfView**(): `number`

Retrieves the field of view of the camera associated with the given handle.

> `set` **FieldOfView**(`fieldOfView`): `void`

Sets the camera's field of view.

#### Parameters

• **fieldOfView**: `number`

A number representing the new field of view to be set for the camera.

#### Returns

`number`

The field of view of the camera.

#### Defined in

[client/Camera.ts:136](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Camera.ts#L136)

***

### ForwardVector

> `get` **ForwardVector**(): [`Vector3`](../../Shared/classes/Vector3.md)

Calculates and returns the forward vector of an entity based on its current rotation.
The forward vector represents the direction in which the entity is facing.

#### Returns

[`Vector3`](../../Shared/classes/Vector3.md)

The normalized forward vector computed from the entity's rotation.

#### Defined in

[client/Camera.ts:91](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Camera.ts#L91)

***

### Handle

> `get` **Handle**(): `number`

Retrieves the handle associated with this object.

> `set` **Handle**(`value`): `void`

Sets the handle value.

#### Parameters

• **value**: `number`

#### Returns

`number`

#### Defined in

[client/Camera.ts:16](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Camera.ts#L16)

***

### IsActive

> `get` **IsActive**(): `boolean`

Checks if the camera associated with the current handle is active.

> `set` **IsActive**(`value`): `void`

Sets the active state of the camera.

#### Parameters

• **value**: `boolean`

The desired active state of the camera. True to activate, false to deactivate.

#### Returns

`boolean`

true if the camera is active, false otherwise.

#### Defined in

[client/Camera.ts:34](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Camera.ts#L34)

***

### IsInterpolating

> `get` **IsInterpolating**(): `boolean`

Indicates whether the current object is in an interpolating state.

#### Returns

`boolean`

True if the object is currently interpolating; otherwise, false.

#### Defined in

[client/Camera.ts:337](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Camera.ts#L337)

***

### IsShaking

> `get` **IsShaking**(): `boolean`

Checks if the camera is currently shaking.

#### Returns

`boolean`

True if the camera is shaking, false otherwise.

#### Defined in

[client/Camera.ts:255](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Camera.ts#L255)

***

### NearClip

> `get` **NearClip**(): `number`

Retrieves the near clipping distance of the camera.

> `set` **NearClip**(`nearClip`): `void`

Sets the near clipping plane distance for the camera.

#### Parameters

• **nearClip**: `number`

The distance to the near clipping plane. Objects closer than this distance to the camera will not be rendered.

#### Returns

`number`

The near clipping distance of the camera.

#### Defined in

[client/Camera.ts:154](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Camera.ts#L154)

***

### NearDepthOfField

> `get` **NearDepthOfField**(): `number`

Retrieves the near depth of field value for the camera.

> `set` **NearDepthOfField**(`nearDepthOfField`): `void`

Sets the near depth of field value for the camera.

#### Parameters

• **nearDepthOfField**: `number`

The new near depth of field value to be applied.

#### Returns

`number`

The near depth of field value.

#### Defined in

[client/Camera.ts:190](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Camera.ts#L190)

***

### Position

> `get` **Position**(): [`Vector3`](../../Shared/classes/Vector3.md)

Gets the current position of the camera as a Vector3 object.

> `set` **Position**(`pos`): `void`

Sets the camera's position in the 3D space.

#### Parameters

• **pos**: [`Vector3`](../../Shared/classes/Vector3.md)

The position vector containing the x, y, and z coordinates to set the camera's position.

#### Returns

[`Vector3`](../../Shared/classes/Vector3.md)

The position of the camera.

#### Defined in

[client/Camera.ts:52](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Camera.ts#L52)

***

### Rotation

> `get` **Rotation**(): [`Vector3`](../../Shared/classes/Vector3.md)

Retrieves the current rotation of the camera as a Vector3 object.

> `set` **Rotation**(`rot`): `void`

Sets the rotation of the camera using a Vector3 object.

#### Parameters

• **rot**: [`Vector3`](../../Shared/classes/Vector3.md)

A Vector3 object containing the rotation values for x, y, and z axes.

#### Returns

[`Vector3`](../../Shared/classes/Vector3.md)

A Vector3 instance containing the rotation values (pitch, roll, yaw) of the camera.

#### Defined in

[client/Camera.ts:71](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Camera.ts#L71)

## Methods

### attachTo()

> **attachTo**(`object`, `offset`): `void`

Attach the camera to an Entity or a PedBone with a specified offset.

#### Parameters

• **object**: [`Entity`](Entity.md) \| [`PedBone`](PedBone.md)

The object to which the camera will be attached. This can either be an Entity or a PedBone.

• **offset**: [`Vector3`](../../Shared/classes/Vector3.md)

The offset from the object where the camera will be positioned.

#### Returns

`void`

#### Defined in

[client/Camera.ts:374](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Camera.ts#L374)

***

### delete()

> **delete**(): `void`

Deletes the camera associated with the current instance by calling
the DestroyCam function and passing the handle of the camera.

#### Returns

`void`

#### Defined in

[client/Camera.ts:405](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Camera.ts#L405)

***

### detach()

> **detach**(): `void`

Detaches the camera associated with the current instance.

#### Returns

`void`

#### Defined in

[client/Camera.ts:395](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Camera.ts#L395)

***

### exists()

> **exists**(): `boolean`

Checks if a camera exists based on its handle.

#### Returns

`boolean`

True if the camera exists, otherwise false.

#### Defined in

[client/Camera.ts:414](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Camera.ts#L414)

***

### interpTo()

> **interpTo**(`camTo`, `duration`, `easePosition`, `easeRotation`): `void`

Interpolates the current camera to another camera over a specified duration with options for easing position and rotation.

#### Parameters

• **camTo**: [`Camera`](Camera.md)

The target camera to interpolate to.

• **duration**: `number`

The time in milliseconds over which the interpolation will occur.

• **easePosition**: `boolean`

Determines whether the interpolation should ease the position.

• **easeRotation**: `boolean`

Determines whether the interpolation should ease the rotation.

#### Returns

`void`

#### Defined in

[client/Camera.ts:351](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Camera.ts#L351)

***

### pointAt()

> **pointAt**(`target`, `offset`?): `void`

Points the camera at a specified target with an optional offset.

#### Parameters

• **target**: [`Vector3`](../../Shared/classes/Vector3.md) \| [`Entity`](Entity.md) \| [`PedBone`](PedBone.md)

The target to point the camera at.
This can be an entity, a ped bone, or a specific coordinate.

• **offset?**: [`Vector3`](../../Shared/classes/Vector3.md) = `...`

The optional offset to apply when pointing the camera. Defaults to (0, 0, 0).

#### Returns

`void`

#### Defined in

[client/Camera.ts:302](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Camera.ts#L302)

***

### setMotionBlurStrength()

> **setMotionBlurStrength**(`strength`): `void`

Sets the motion blur strength for the camera.

#### Parameters

• **strength**: `number`

A value representing the new strength of the motion blur effect.

#### Returns

`void`

#### Defined in

[client/Camera.ts:246](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Camera.ts#L246)

***

### setShakeAmplitude()

> **setShakeAmplitude**(`amplitude`): `void`

Sets the shake amplitude for the camera.

#### Parameters

• **amplitude**: `number`

The amplitude to set for the camera shake.

#### Returns

`void`

#### Defined in

[client/Camera.ts:266](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Camera.ts#L266)

***

### shake()

> **shake**(`type`, `amplitude`): `void`

Applies a shaking effect to the camera.

#### Parameters

• **type**: [`CameraShake`](../enumerations/CameraShake.md)

The type of camera shake to apply.

• **amplitude**: `number`

The intensity of the shake effect.

#### Returns

`void`

#### Defined in

[client/Camera.ts:278](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Camera.ts#L278)

***

### stopPointing()

> **stopPointing**(): `void`

Stops the camera from pointing at its current target.

#### Returns

`void`

#### Defined in

[client/Camera.ts:328](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Camera.ts#L328)

***

### stopShaking()

> **stopShaking**(): `void`

Stops the camera from shaking.

This method stops any ongoing camera shake effect associated with the current handle.

#### Returns

`void`

#### Defined in

[client/Camera.ts:289](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Camera.ts#L289)
