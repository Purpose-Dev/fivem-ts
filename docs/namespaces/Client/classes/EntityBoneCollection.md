[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Client](../README.md) / EntityBoneCollection

# Class: EntityBoneCollection

Represents a collection of bones associated with an entity.

## Extended by

- [`PedBoneCollection`](PedBoneCollection.md)

## Constructors

### new EntityBoneCollection()

> **new EntityBoneCollection**(`owner`): [`EntityBoneCollection`](EntityBoneCollection.md)

#### Parameters

• **owner**: [`Entity`](Entity.md)

#### Returns

[`EntityBoneCollection`](EntityBoneCollection.md)

#### Defined in

[client/models/EntityBoneCollection.ts:7](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/EntityBoneCollection.ts#L7)

## Accessors

### Core

> `get` **Core**(): [`EntityBone`](EntityBone.md)

#### Returns

[`EntityBone`](EntityBone.md)

#### Defined in

[client/models/EntityBoneCollection.ts:9](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/EntityBoneCollection.ts#L9)

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

#### Defined in

[client/models/EntityBoneCollection.ts:19](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/EntityBoneCollection.ts#L19)
