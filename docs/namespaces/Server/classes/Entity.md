[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Server](../README.md) / Entity

# Class: Entity

Represents an entity.
Provides various methods and properties to access and manipulate the entity's state.

## Extended by

- [`Ped`](Ped.md)
- [`Vehicle`](Vehicle.md)

## Constructors

### new Entity()

> **new Entity**(`id`): [`Entity`](Entity.md)

#### Parameters

• **id**: `number`

#### Returns

[`Entity`](Entity.md)

#### Defined in

[server/models/Entity.ts:20](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L20)

## Accessors

### Heading

> `get` **Heading**(): `number`

> `set` **Heading**(`value`): `void`

#### Parameters

• **value**: `number`

#### Returns

`number`

#### Defined in

[server/models/Entity.ts:58](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L58)

***

### Health

> `get` **Health**(): `number`

#### Returns

`number`

#### Defined in

[server/models/Entity.ts:32](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L32)

***

### Id

> `get` **Id**(): `number`

#### Returns

`number`

#### Defined in

[server/models/Entity.ts:24](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L24)

***

### IsCollisionEnabled

> `get` **IsCollisionEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[server/models/Entity.ts:96](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L96)

***

### IsPositionFrozen

> `get` **IsPositionFrozen**(): `boolean`

> `set` **IsPositionFrozen**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Returns

`boolean`

#### Defined in

[server/models/Entity.ts:66](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L66)

***

### IsVisible

> `get` **IsVisible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[server/models/Entity.ts:92](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L92)

***

### MaxHealth

> `get` **MaxHealth**(): `number`

#### Returns

`number`

#### Defined in

[server/models/Entity.ts:36](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L36)

***

### NetworkId

> `get` **NetworkId**(): `number`

#### Returns

`number`

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

#### Defined in

[server/models/Entity.ts:49](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L49)

***

### RotationVelocity

> `get` **RotationVelocity**(): [`Vector3`](../../Shared/classes/Vector3.md)

#### Returns

[`Vector3`](../../Shared/classes/Vector3.md)

#### Defined in

[server/models/Entity.ts:83](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L83)

***

### Speed

> `get` **Speed**(): `number`

#### Returns

`number`

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

#### Defined in

[server/models/Entity.ts:74](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L74)

## Methods

### delete()

> **delete**(): `void`

Deletes the current entity based on its id.

#### Returns

`void`

No return value.

#### Defined in

[server/models/Entity.ts:113](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L113)

***

### exists()

> **exists**(): `boolean`

Checks if the entity with the current instance's ID exists.

#### Returns

`boolean`

True if the entity exists, otherwise false.

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

#### Defined in

[server/models/Entity.ts:14](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L14)
