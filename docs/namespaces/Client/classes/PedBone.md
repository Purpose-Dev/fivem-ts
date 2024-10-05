[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Client](../README.md) / PedBone

# Class: PedBone

Represents a specific bone in a pedestrian entity.
Extends EntityBone to provide additional functionality specific to pedestrians.

 PedBone

## Extends

- [`EntityBone`](EntityBone.md)

## Constructors

### new PedBone()

> **new PedBone**(`owner`, `boneId`): [`PedBone`](PedBone.md)

#### Parameters

• **owner**: [`Ped`](Ped.md)

• **boneId**: [`Bone`](../enumerations/Bone.md)

#### Returns

[`PedBone`](PedBone.md)

#### Overrides

[`EntityBone`](EntityBone.md).[`constructor`](EntityBone.md#constructors)

#### Defined in

[client/models/PedBone.ts:12](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/PedBone.ts#L12)

## Accessors

### Index

> `get` **Index**(): `number`

#### Returns

`number`

#### Inherited from

[`EntityBone`](EntityBone.md).[`Index`](EntityBone.md#index)

#### Defined in

[client/models/EntityBone.ts:22](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/EntityBone.ts#L22)

***

### IsValid

> `get` **IsValid**(): `boolean`

#### Returns

`boolean`

#### Overrides

[`EntityBone`](EntityBone.md).[`IsValid`](EntityBone.md#isvalid)

#### Defined in

[client/models/PedBone.ts:16](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/PedBone.ts#L16)

***

### LocalRotation

> `get` **LocalRotation**(): [`Vector3`](../../Shared/classes/Vector3.md)

#### Returns

[`Vector3`](../../Shared/classes/Vector3.md)

#### Inherited from

[`EntityBone`](EntityBone.md).[`LocalRotation`](EntityBone.md#localrotation)

#### Defined in

[client/models/EntityBone.ts:40](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/EntityBone.ts#L40)

***

### Owner

> `get` **Owner**(): [`Entity`](Entity.md)

#### Returns

[`Entity`](Entity.md)

#### Inherited from

[`EntityBone`](EntityBone.md).[`Owner`](EntityBone.md#owner)

#### Defined in

[client/models/EntityBone.ts:18](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/EntityBone.ts#L18)

***

### Position

> `get` **Position**(): [`Vector3`](../../Shared/classes/Vector3.md)

#### Returns

[`Vector3`](../../Shared/classes/Vector3.md)

#### Inherited from

[`EntityBone`](EntityBone.md).[`Position`](EntityBone.md#position)

#### Defined in

[client/models/EntityBone.ts:30](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/EntityBone.ts#L30)

***

### Rotation

> `get` **Rotation**(): [`Vector3`](../../Shared/classes/Vector3.md)

#### Returns

[`Vector3`](../../Shared/classes/Vector3.md)

#### Inherited from

[`EntityBone`](EntityBone.md).[`Rotation`](EntityBone.md#rotation)

#### Defined in

[client/models/EntityBone.ts:35](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/EntityBone.ts#L35)
