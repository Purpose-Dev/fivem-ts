[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Server](../README.md) / Vehicle

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

[server/models/Vehicle.ts:34](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Vehicle.ts#L34)

## Accessors

### Alarm

> `set` **Alarm**(`state`): `void`

#### Parameters

• **state**: `boolean`

#### Defined in

[server/models/Vehicle.ts:77](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Vehicle.ts#L77)

***

### AreLightsOn

> `get` **AreLightsOn**(): `boolean`

#### Returns

`boolean`

#### Defined in

[server/models/Vehicle.ts:85](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Vehicle.ts#L85)

***

### BodyHealth

> `get` **BodyHealth**(): `number`

> `set` **BodyHealth**(`value`): `void`

#### Parameters

• **value**: `number`

#### Returns

`number`

#### Defined in

[server/models/Vehicle.ts:53](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Vehicle.ts#L53)

***

### Colours

> `get` **Colours**(): [`VehicleColours`](../type-aliases/VehicleColours.md)

> `set` **Colours**(`colours`): `void`

#### Parameters

• **colours**: [`VehicleColours`](../type-aliases/VehicleColours.md)

#### Returns

[`VehicleColours`](../type-aliases/VehicleColours.md)

#### Defined in

[server/models/Vehicle.ts:97](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Vehicle.ts#L97)

***

### CustomPrimaryColour

> `get` **CustomPrimaryColour**(): [`CustomVehicleColour`](../type-aliases/CustomVehicleColour.md)

> `set` **CustomPrimaryColour**(`value`): `void`

#### Parameters

• **value**: [`CustomVehicleColour`](../type-aliases/CustomVehicleColour.md)

#### Returns

[`CustomVehicleColour`](../type-aliases/CustomVehicleColour.md)

#### Defined in

[server/models/Vehicle.ts:109](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Vehicle.ts#L109)

***

### CustomSecondaryColour

> `get` **CustomSecondaryColour**(): [`CustomVehicleColour`](../type-aliases/CustomVehicleColour.md)

> `set` **CustomSecondaryColour**(`value`): `void`

#### Parameters

• **value**: [`CustomVehicleColour`](../type-aliases/CustomVehicleColour.md)

#### Returns

[`CustomVehicleColour`](../type-aliases/CustomVehicleColour.md)

#### Defined in

[server/models/Vehicle.ts:122](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Vehicle.ts#L122)

***

### DashboardColour

> `get` **DashboardColour**(): `number`

#### Returns

`number`

#### Defined in

[server/models/Vehicle.ts:135](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Vehicle.ts#L135)

***

### DirtLevel

> `get` **DirtLevel**(): `number`

> `set` **DirtLevel**(`value`): `void`

#### Parameters

• **value**: `number`

#### Returns

`number`

#### Defined in

[server/models/Vehicle.ts:139](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Vehicle.ts#L139)

***

### EngineHealth

> `get` **EngineHealth**(): `number`

#### Returns

`number`

#### Defined in

[server/models/Vehicle.ts:61](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Vehicle.ts#L61)

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

### IsCollisionEnabled

> `get` **IsCollisionEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`Entity`](Entity.md).[`IsCollisionEnabled`](Entity.md#iscollisionenabled)

#### Defined in

[server/models/Entity.ts:96](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Entity.ts#L96)

***

### IsEngineRunning

> `get` **IsEngineRunning**(): `boolean`

#### Returns

`boolean`

#### Defined in

[server/models/Vehicle.ts:69](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Vehicle.ts#L69)

***

### IsEngineStarting

> `get` **IsEngineStarting**(): `boolean`

#### Returns

`boolean`

#### Defined in

[server/models/Vehicle.ts:73](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Vehicle.ts#L73)

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

### IsPrimaryColourCustom

> `get` **IsPrimaryColourCustom**(): `boolean`

#### Returns

`boolean`

#### Defined in

[server/models/Vehicle.ts:89](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Vehicle.ts#L89)

***

### IsSecondaryColourCustom

> `get` **IsSecondaryColourCustom**(): `boolean`

#### Returns

`boolean`

#### Defined in

[server/models/Vehicle.ts:93](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Vehicle.ts#L93)

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

### LightsState

> `get` **LightsState**(): [`boolean`, `boolean`, `boolean`]

#### Returns

[`boolean`, `boolean`, `boolean`]

#### Defined in

[server/models/Vehicle.ts:81](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Vehicle.ts#L81)

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

### PetrolTankHealth

> `get` **PetrolTankHealth**(): `number`

#### Returns

`number`

#### Defined in

[server/models/Vehicle.ts:65](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Vehicle.ts#L65)

***

### Plate

> `get` **Plate**(): `string`

> `set` **Plate**(`value`): `void`

#### Parameters

• **value**: `string`

#### Returns

`string`

#### Defined in

[server/models/Vehicle.ts:41](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Vehicle.ts#L41)

***

### PlateIndex

> `get` **PlateIndex**(): `number`

#### Returns

`number`

#### Defined in

[server/models/Vehicle.ts:49](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Vehicle.ts#L49)

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

### wash()

> **wash**(): `void`

Washes the vehicle by setting the DirtLevel to 0.

#### Returns

`void`

#### Defined in

[server/models/Vehicle.ts:150](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Vehicle.ts#L150)

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
