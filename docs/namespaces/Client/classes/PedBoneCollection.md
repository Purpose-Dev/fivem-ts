[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Client](../README.md) / PedBoneCollection

# Class: PedBoneCollection

Represents a collection of bones for a pedestrian (Ped) entity.
Extends the functionality of EntityBoneCollection specifically for Ped entities.

 PedBoneCollection

## Extends

- [`EntityBoneCollection`](EntityBoneCollection.md)

## Constructors

### new PedBoneCollection()

> **new PedBoneCollection**(`owner`): [`PedBoneCollection`](PedBoneCollection.md)

#### Parameters

• **owner**: [`Ped`](Ped.md)

#### Returns

[`PedBoneCollection`](PedBoneCollection.md)

#### Overrides

[`EntityBoneCollection`](EntityBoneCollection.md).[`constructor`](EntityBoneCollection.md#constructors)

#### Defined in

[client/models/PedBoneCollection.ts:12](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/PedBoneCollection.ts#L12)

## Accessors

### Core

> `get` **Core**(): [`PedBone`](PedBone.md)

#### Returns

[`PedBone`](PedBone.md)

#### Overrides

[`EntityBoneCollection`](EntityBoneCollection.md).[`Core`](EntityBoneCollection.md#core)

#### Defined in

[client/models/PedBoneCollection.ts:16](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/PedBoneCollection.ts#L16)

## Methods

### hasBone()

> **hasBone**(`name`): `boolean`

Checks if an entity has a specified bone by its name.

#### Parameters

• **name**: `string`

The name of the bone to check for.

#### Returns

`boolean`

True if the bone exists, false otherwise.

#### Inherited from

[`EntityBoneCollection`](EntityBoneCollection.md).[`hasBone`](EntityBoneCollection.md#hasbone)

#### Defined in

[client/models/EntityBoneCollection.ts:19](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/EntityBoneCollection.ts#L19)
