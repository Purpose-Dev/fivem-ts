[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Client](../README.md) / Rope

# Class: Rope

Class to manage ropes between entities.

## Constructors

### new Rope()

> **new Rope**(`handle`): [`Rope`](Rope.md)

#### Parameters

• **handle**: `number`

#### Returns

[`Rope`](Rope.md)

#### Defined in

[client/Rope.ts:8](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Rope.ts#L8)

## Accessors

### Handle

> `get` **Handle**(): `number`

Retrieves the handle of the object.

#### Returns

`number`

The handle identifier.

#### Defined in

[client/Rope.ts:15](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Rope.ts#L15)

***

### Length

> `get` **Length**(): `number`

Gets the length of the rope.

> `set` **Length**(`value`): `void`

Sets the length of the rope force.

#### Parameters

• **value**: `number`

The desired length of the rope force.

#### Returns

`number`

The length of the rope.

#### Defined in

[client/Rope.ts:24](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Rope.ts#L24)

***

### VertexCount

> `get` **VertexCount**(): `number`

Gets the count of vertices in the rope.

#### Returns

`number`

The number of vertices.

#### Defined in

[client/Rope.ts:42](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Rope.ts#L42)

## Methods

### activatePhysics()

> **activatePhysics**(): `void`

Activates the physics simulation for the current object by calling the
ActivatePhysics function with the object's handle.

#### Returns

`void`

#### Defined in

[client/Rope.ts:52](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Rope.ts#L52)

***

### attachEntities()

> **attachEntities**(`fEntity`, `fPosition`, `sEntity`, `sPosition`, `length`): `void`

Attaches two entities together at specified positions using a rope.

#### Parameters

• **fEntity**: [`Entity`](Entity.md)

The first entity to attach.

• **fPosition**: [`Vector3`](../../Shared/classes/Vector3.md)

The position to attach the first entity.

• **sEntity**: [`Entity`](Entity.md)

The second entity to attach.

• **sPosition**: [`Vector3`](../../Shared/classes/Vector3.md)

The position to attach the second entity.

• **length**: `number`

The length of the rope used to attach the entities.

#### Returns

`void`

#### Defined in

[client/Rope.ts:79](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Rope.ts#L79)

***

### attachEntity()

> **attachEntity**(`entity`, `position`): `void`

Attaches an entity to the current object at a specified position.

#### Parameters

• **entity**: [`Entity`](Entity.md)

The entity to be attached.

• **position**: [`Vector3`](../../Shared/classes/Vector3.md)

The position where the entity should be attached.

#### Returns

`void`

#### Defined in

[client/Rope.ts:64](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Rope.ts#L64)

***

### delete()

> **delete**(): `void`

Deletes an inner resource represented by the instance handle.

This method invokes the DeleteRope function, which handles
the cleanup and deletion of the resource associated with
this Handle.

#### Returns

`void`

#### Defined in

[client/Rope.ts:113](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Rope.ts#L113)

***

### detachEntity()

> **detachEntity**(`entity`): `void`

Detaches a specified entity from the current object.

#### Parameters

• **entity**: [`Entity`](Entity.md)

The entity to be detached.

#### Returns

`void`

#### Defined in

[client/Rope.ts:124](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Rope.ts#L124)

***

### exists()

> **exists**(): `boolean`

Checks if the rope instance exists.

#### Returns

`boolean`

True if the rope exists, otherwise false.

#### Defined in

[client/Rope.ts:133](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Rope.ts#L133)

***

### getVertexCoords()

> **getVertexCoords**(`vertex`): [`Vector3`](../../Shared/classes/Vector3.md)

Retrieves the coordinates of a specified vertex for a given rope.

#### Parameters

• **vertex**: `number`

The index of the vertex whose coordinates are to be retrieved.

#### Returns

[`Vector3`](../../Shared/classes/Vector3.md)

A Vector3 object containing the x, y, and z coordinates of the vertex.

#### Defined in

[client/Rope.ts:144](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Rope.ts#L144)

***

### pinVertex()

> **pinVertex**(`vertex`, `position`): `void`

Pins a vertex at a given position.

#### Parameters

• **vertex**: `number`

The index of the vertex to pin.

• **position**: [`Vector3`](../../Shared/classes/Vector3.md)

The position to pin the vertex at, represented as a Vector3 object.

#### Returns

`void`

#### Defined in

[client/Rope.ts:157](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Rope.ts#L157)

***

### resetLength()

> **resetLength**(`reset`): `void`

Resets the length of the rope.

#### Parameters

• **reset**: `boolean`

If true, the rope length will be reset to 1. If false, it will reset to the current length.

#### Returns

`void`

#### Defined in

[client/Rope.ts:168](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Rope.ts#L168)

***

### unpinVertex()

> **unpinVertex**(`vertex`): `void`

Unpins the specified vertex from the rope, making it movable again.

#### Parameters

• **vertex**: `number`

The index of the vertex to be unpinned.

#### Returns

`void`

#### Defined in

[client/Rope.ts:179](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Rope.ts#L179)
