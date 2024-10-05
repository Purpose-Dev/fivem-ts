[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Server](../README.md) / Ped

# Class: Ped

The `Ped` class represents a pedestrian entity.

This class extends the `Entity` class and provides an interface for interacting with pedestrian entities.
The constructor takes the entity ID as a parameter and ensures the entity type is a pedestrian.

## Extends

- [`Entity`](Entity.md)

## Constructors

### new Ped()

> **new Ped**(`id`): [`Ped`](Ped.md)

#### Parameters

• **id**: `number`

#### Returns

[`Ped`](Ped.md)

#### Overrides

[`Entity`](Entity.md).[`constructor`](Entity.md#constructors)

#### Defined in

[server/models/Ped.ts:12](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Ped.ts#L12)

## Accessors

### CurrentVehicle

> `get` **CurrentVehicle**(): [`Vehicle`](Vehicle.md)

#### Returns

[`Vehicle`](Vehicle.md)

#### Defined in

[server/models/Ped.ts:19](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Ped.ts#L19)

***

### Heading

> `get` **Heading**(): `number`

> `set` **Heading**(`value`): `void`

#### Parameters

• **value**: `number`

#### Returns

`number`

#### Inherited from

[`Entity`](Entity.md).[`Heading`](Entity.md#heading)

#### Defined in

[server/models/Entity.ts:58](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L58)

***

### Health

> `get` **Health**(): `number`

#### Returns

`number`

#### Inherited from

[`Entity`](Entity.md).[`Health`](Entity.md#health)

#### Defined in

[server/models/Entity.ts:32](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L32)

***

### Id

> `get` **Id**(): `number`

#### Returns

`number`

#### Inherited from

[`Entity`](Entity.md).[`Id`](Entity.md#id)

#### Defined in

[server/models/Entity.ts:24](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L24)

***

### IsAPlayer

> `get` **IsAPlayer**(): `boolean`

#### Returns

`boolean`

#### Defined in

[server/models/Ped.ts:33](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Ped.ts#L33)

***

### IsCollisionEnabled

> `get` **IsCollisionEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`Entity`](Entity.md).[`IsCollisionEnabled`](Entity.md#iscollisionenabled)

#### Defined in

[server/models/Entity.ts:96](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L96)

***

### IsHandcuffed

> `get` **IsHandcuffed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[server/models/Ped.ts:37](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Ped.ts#L37)

***

### IsInVehicle

> `get` **IsInVehicle**(): `boolean`

#### Returns

`boolean`

#### Defined in

[server/models/Ped.ts:29](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Ped.ts#L29)

***

### IsPositionFrozen

> `get` **IsPositionFrozen**(): `boolean`

> `set` **IsPositionFrozen**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Returns

`boolean`

#### Inherited from

[`Entity`](Entity.md).[`IsPositionFrozen`](Entity.md#ispositionfrozen)

#### Defined in

[server/models/Entity.ts:66](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L66)

***

### IsRagdoll

> `get` **IsRagdoll**(): `boolean`

#### Returns

`boolean`

#### Defined in

[server/models/Ped.ts:41](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Ped.ts#L41)

***

### IsStrafing

> `get` **IsStrafing**(): `boolean`

#### Returns

`boolean`

#### Defined in

[server/models/Ped.ts:45](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Ped.ts#L45)

***

### IsUsingActionMode

> `get` **IsUsingActionMode**(): `boolean`

#### Returns

`boolean`

#### Defined in

[server/models/Ped.ts:49](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Ped.ts#L49)

***

### IsVisible

> `get` **IsVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`Entity`](Entity.md).[`IsVisible`](Entity.md#isvisible)

#### Defined in

[server/models/Entity.ts:92](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L92)

***

### LastVehicle

> `get` **LastVehicle**(): [`Vehicle`](Vehicle.md)

#### Returns

[`Vehicle`](Vehicle.md)

#### Defined in

[server/models/Ped.ts:24](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Ped.ts#L24)

***

### MaxHealth

> `get` **MaxHealth**(): `number`

#### Returns

`number`

#### Inherited from

[`Entity`](Entity.md).[`MaxHealth`](Entity.md#maxhealth)

#### Defined in

[server/models/Entity.ts:36](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L36)

***

### NetworkId

> `get` **NetworkId**(): `number`

#### Returns

`number`

#### Inherited from

[`Entity`](Entity.md).[`NetworkId`](Entity.md#networkid)

#### Defined in

[server/models/Entity.ts:28](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L28)

***

### Position

> `get` **Position**(): [`Vector3`](../../Shared/classes/Vector3.md)

> `set` **Position**(`vector`): `void`

#### Parameters

• **vector**: [`Vector3`](../../Shared/classes/Vector3.md)

#### Returns

[`Vector3`](../../Shared/classes/Vector3.md)

#### Inherited from

[`Entity`](Entity.md).[`Position`](Entity.md#position)

#### Defined in

[server/models/Entity.ts:40](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L40)

***

### Rotation

> `get` **Rotation**(): [`Vector3`](../../Shared/classes/Vector3.md)

> `set` **Rotation**(`vector`): `void`

#### Parameters

• **vector**: [`Vector3`](../../Shared/classes/Vector3.md)

#### Returns

[`Vector3`](../../Shared/classes/Vector3.md)

#### Inherited from

[`Entity`](Entity.md).[`Rotation`](Entity.md#rotation)

#### Defined in

[server/models/Entity.ts:49](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L49)

***

### RotationVelocity

> `get` **RotationVelocity**(): [`Vector3`](../../Shared/classes/Vector3.md)

#### Returns

[`Vector3`](../../Shared/classes/Vector3.md)

#### Inherited from

[`Entity`](Entity.md).[`RotationVelocity`](Entity.md#rotationvelocity)

#### Defined in

[server/models/Entity.ts:83](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L83)

***

### Speed

> `get` **Speed**(): `number`

#### Returns

`number`

#### Inherited from

[`Entity`](Entity.md).[`Speed`](Entity.md#speed)

#### Defined in

[server/models/Entity.ts:88](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L88)

***

### Velocity

> `get` **Velocity**(): [`Vector3`](../../Shared/classes/Vector3.md)

> `set` **Velocity**(`vector`): `void`

#### Parameters

• **vector**: [`Vector3`](../../Shared/classes/Vector3.md)

#### Returns

[`Vector3`](../../Shared/classes/Vector3.md)

#### Inherited from

[`Entity`](Entity.md).[`Velocity`](Entity.md#velocity)

#### Defined in

[server/models/Entity.ts:74](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L74)

## Methods

### delete()

> **delete**(): `void`

Deletes the current entity based on its id.

#### Returns

`void`

No return value.

#### Inherited from

[`Entity`](Entity.md).[`delete`](Entity.md#delete)

#### Defined in

[server/models/Entity.ts:113](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L113)

***

### exists()

> **exists**(): `boolean`

Checks if the entity with the current instance's ID exists.

#### Returns

`boolean`

True if the entity exists, otherwise false.

#### Inherited from

[`Entity`](Entity.md).[`exists`](Entity.md#exists)

#### Defined in

[server/models/Entity.ts:104](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L104)

***

### getFromNetworkId()

> `static` **getFromNetworkId**(`netId`): [`Entity`](Entity.md)

Retrieves an entity based on the provided network ID.

#### Parameters

• **netId**: `number`

The network identifier for the entity.

#### Returns

[`Entity`](Entity.md)

- The entity corresponding to the given network ID.

#### Inherited from

[`Entity`](Entity.md).[`getFromNetworkId`](Entity.md#getfromnetworkid)

#### Defined in

[server/models/Entity.ts:14](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L14)
