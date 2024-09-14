[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Server](../README.md) / Vehicle

# Class: Vehicle

Vehicle class that extends the Entity class.
Represents a vehicle entity.

## Extends

- [`Entity`](Entity.md)

## Constructors

### new Vehicle()

> **new Vehicle**(`id`): [`Vehicle`](Vehicle.md)

#### Parameters

• **id**: `number`

#### Returns

[`Vehicle`](Vehicle.md)

#### Overrides

[`Entity`](Entity.md).[`constructor`](Entity.md#constructors)

#### Defined in

[server/models/Vehicle.ts:12](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Vehicle.ts#L12)

## Accessors

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

[server/models/Entity.ts:52](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L52)

***

### Health

> `get` **Health**(): `number`

#### Returns

`number`

#### Inherited from

[`Entity`](Entity.md).[`Health`](Entity.md#health)

#### Defined in

[server/models/Entity.ts:26](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L26)

***

### Id

> `get` **Id**(): `number`

#### Returns

`number`

#### Inherited from

[`Entity`](Entity.md).[`Id`](Entity.md#id)

#### Defined in

[server/models/Entity.ts:18](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L18)

***

### IsCollisionEnabled

> `get` **IsCollisionEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`Entity`](Entity.md).[`IsCollisionEnabled`](Entity.md#iscollisionenabled)

#### Defined in

[server/models/Entity.ts:90](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L90)

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

[server/models/Entity.ts:60](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L60)

***

### IsVisible

> `get` **IsVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`Entity`](Entity.md).[`IsVisible`](Entity.md#isvisible)

#### Defined in

[server/models/Entity.ts:86](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L86)

***

### MaxHealth

> `get` **MaxHealth**(): `number`

#### Returns

`number`

#### Inherited from

[`Entity`](Entity.md).[`MaxHealth`](Entity.md#maxhealth)

#### Defined in

[server/models/Entity.ts:30](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L30)

***

### NetworkId

> `get` **NetworkId**(): `number`

#### Returns

`number`

#### Inherited from

[`Entity`](Entity.md).[`NetworkId`](Entity.md#networkid)

#### Defined in

[server/models/Entity.ts:22](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L22)

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

[server/models/Entity.ts:34](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L34)

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

[server/models/Entity.ts:43](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L43)

***

### RotationVelocity

> `get` **RotationVelocity**(): [`Vector3`](../../Shared/classes/Vector3.md)

#### Returns

[`Vector3`](../../Shared/classes/Vector3.md)

#### Inherited from

[`Entity`](Entity.md).[`RotationVelocity`](Entity.md#rotationvelocity)

#### Defined in

[server/models/Entity.ts:77](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L77)

***

### Speed

> `get` **Speed**(): `number`

#### Returns

`number`

#### Inherited from

[`Entity`](Entity.md).[`Speed`](Entity.md#speed)

#### Defined in

[server/models/Entity.ts:82](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L82)

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

[server/models/Entity.ts:68](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L68)

## Methods

### delete()

> **delete**(): `void`

#### Returns

`void`

#### Inherited from

[`Entity`](Entity.md).[`delete`](Entity.md#delete)

#### Defined in

[server/models/Entity.ts:98](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L98)

***

### exists()

> **exists**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`Entity`](Entity.md).[`exists`](Entity.md#exists)

#### Defined in

[server/models/Entity.ts:94](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L94)

***

### getFromNetworkId()

> `static` **getFromNetworkId**(`netId`): [`Entity`](Entity.md)

#### Parameters

• **netId**: `number`

#### Returns

[`Entity`](Entity.md)

#### Inherited from

[`Entity`](Entity.md).[`getFromNetworkId`](Entity.md#getfromnetworkid)

#### Defined in

[server/models/Entity.ts:8](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L8)
