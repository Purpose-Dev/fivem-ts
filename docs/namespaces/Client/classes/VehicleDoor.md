[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Client](../README.md) / VehicleDoor

# Class: VehicleDoor

Represents a door of a vehicle and provides various methods to interact with it.

## Constructors

### new VehicleDoor()

> **new VehicleDoor**(`owner`, `index`): [`VehicleDoor`](VehicleDoor.md)

#### Parameters

• **owner**: [`Vehicle`](Vehicle.md)

• **index**: [`VehicleDoorIndex`](../enumerations/VehicleDoorIndex.md)

#### Returns

[`VehicleDoor`](VehicleDoor.md)

#### Defined in

[client/models/VehicleDoor.ts:9](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleDoor.ts#L9)

## Accessors

### AngleRatio

> `get` **AngleRatio**(): `number`

#### Returns

`number`

#### Defined in

[client/models/VehicleDoor.ts:22](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleDoor.ts#L22)

***

### CanBreak

> `set` **CanBreak**(`isBreakable`): `void`

#### Parameters

• **isBreakable**: `boolean`

#### Defined in

[client/models/VehicleDoor.ts:50](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleDoor.ts#L50)

***

### Index

> `get` **Index**(): [`VehicleDoorIndex`](../enumerations/VehicleDoorIndex.md)

#### Returns

[`VehicleDoorIndex`](../enumerations/VehicleDoorIndex.md)

#### Defined in

[client/models/VehicleDoor.ts:18](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleDoor.ts#L18)

***

### IsClosed

> `get` **IsClosed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/VehicleDoor.ts:42](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleDoor.ts#L42)

***

### IsDamaged

> `get` **IsDamaged**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/VehicleDoor.ts:34](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleDoor.ts#L34)

***

### IsFullyOpen

> `get` **IsFullyOpen**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/VehicleDoor.ts:46](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleDoor.ts#L46)

***

### IsOpen

> `get` **IsOpen**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/VehicleDoor.ts:38](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleDoor.ts#L38)

***

### LockStatus

> `get` **LockStatus**(): [`VehicleLockState`](../../Shared/enumerations/VehicleLockState.md)

> `set` **LockStatus**(`lockState`): `void`

#### Parameters

• **lockState**: [`VehicleLockState`](../../Shared/enumerations/VehicleLockState.md)

#### Returns

[`VehicleLockState`](../../Shared/enumerations/VehicleLockState.md)

#### Defined in

[client/models/VehicleDoor.ts:26](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleDoor.ts#L26)

***

### Owner

> `get` **Owner**(): [`Vehicle`](Vehicle.md)

#### Returns

[`Vehicle`](Vehicle.md)

#### Defined in

[client/models/VehicleDoor.ts:14](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleDoor.ts#L14)

## Methods

### break()

> **break**(`stayInTheWorld`?): `void`

Breaks the vehicle door with the option to keep it in the world.

#### Parameters

• **stayInTheWorld?**: `boolean` = `true`

Determines whether the broken door stays in the world.

#### Returns

`void`

#### Defined in

[client/models/VehicleDoor.ts:60](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleDoor.ts#L60)

***

### close()

> **close**(`instantly`?): `void`

Closes the vehicle door associated with this instance.

#### Parameters

• **instantly?**: `boolean` = `false`

Indicates whether the door should be closed instantly (true) or with normal animation (false).

#### Returns

`void`

#### Defined in

[client/models/VehicleDoor.ts:71](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleDoor.ts#L71)

***

### open()

> **open**(`loose`?, `openInstantly`?): `void`

Opens a vehicle door.

#### Parameters

• **loose?**: `boolean` = `false`

Indicates if the door should be opened loosely.

• **openInstantly?**: `boolean` = `false`

If true, the door opens instantly.

#### Returns

`void`

#### Defined in

[client/models/VehicleDoor.ts:83](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleDoor.ts#L83)

***

### setControl()

> **setControl**(`speed`?, `angle`?): `void`

Controls the door of the vehicle by setting its speed and angle.

#### Parameters

• **speed?**: `number` = `0.5`

The speed at which the door should move. Default is 0.5.

• **angle?**: `number` = `45`

The angle to which the door should be moved. Default is 45 degrees.

#### Returns

`void`

#### Defined in

[client/models/VehicleDoor.ts:95](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleDoor.ts#L95)

***

### setLatched()

> **setLatched**(`forceClose`, `lock`, `p4`?): `void`

Sets the latch state of the vehicle door.

#### Parameters

• **forceClose**: `boolean`

A flag determining whether to force the door closed.

• **lock**: `boolean`

A flag indicating whether to lock the door.

• **p4?**: `boolean` = `true`

An optional unknown and undocumented parameter

#### Returns

`void`

This method does not return a value.

#### Defined in

[client/models/VehicleDoor.ts:108](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleDoor.ts#L108)
