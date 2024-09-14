[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Server](../README.md) / Entity

# Class: Entity

Represents an entity.
Provides various methods and properties to access and manipulate the entity's state.

## Constructors

### new Entity()

> **new Entity**(`id`): [`Entity`](Entity.md)

#### Parameters

• **id**: `number`

#### Returns

[`Entity`](Entity.md)

#### Defined in

[server/models/Entity.ts:14](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L14)

## Accessors

### Heading

> `get` **Heading**(): `number`

> `set` **Heading**(`value`): `void`

#### Parameters

• **value**: `number`

#### Returns

`number`

#### Defined in

[server/models/Entity.ts:52](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L52)

***

### Health

> `get` **Health**(): `number`

#### Returns

`number`

#### Defined in

[server/models/Entity.ts:26](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L26)

***

### Id

> `get` **Id**(): `number`

#### Returns

`number`

#### Defined in

[server/models/Entity.ts:18](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L18)

***

### IsCollisionEnabled

> `get` **IsCollisionEnabled**(): `boolean`

#### Returns

`boolean`

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

#### Defined in

[server/models/Entity.ts:60](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L60)

***

### IsVisible

> `get` **IsVisible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[server/models/Entity.ts:86](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L86)

***

### MaxHealth

> `get` **MaxHealth**(): `number`

#### Returns

`number`

#### Defined in

[server/models/Entity.ts:30](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L30)

***

### NetworkId

> `get` **NetworkId**(): `number`

#### Returns

`number`

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

#### Defined in

[server/models/Entity.ts:43](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L43)

***

### RotationVelocity

> `get` **RotationVelocity**(): [`Vector3`](../../Shared/classes/Vector3.md)

#### Returns

[`Vector3`](../../Shared/classes/Vector3.md)

#### Defined in

[server/models/Entity.ts:77](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L77)

***

### Speed

> `get` **Speed**(): `number`

#### Returns

`number`

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

#### Defined in

[server/models/Entity.ts:68](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L68)

## Methods

### delete()

> **delete**(): `void`

#### Returns

`void`

#### Defined in

[server/models/Entity.ts:98](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L98)

***

### exists()

> **exists**(): `boolean`

#### Returns

`boolean`

#### Defined in

[server/models/Entity.ts:94](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L94)

***

### getFromNetworkId()

> `static` **getFromNetworkId**(`netId`): [`Entity`](Entity.md)

#### Parameters

• **netId**: `number`

#### Returns

[`Entity`](Entity.md)

#### Defined in

[server/models/Entity.ts:8](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L8)
