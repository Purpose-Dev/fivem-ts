[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Client](../README.md) / VehicleDoorCollection

# Class: VehicleDoorCollection

Manages a collection of vehicle doors associated with a specific vehicle.

## Constructors

### new VehicleDoorCollection()

> **new VehicleDoorCollection**(`owner`): [`VehicleDoorCollection`](VehicleDoorCollection.md)

#### Parameters

• **owner**: [`Vehicle`](Vehicle.md)

#### Returns

[`VehicleDoorCollection`](VehicleDoorCollection.md)

#### Defined in

[client/models/VehicleDoorCollection.ts:10](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleDoorCollection.ts#L10)

## Accessors

### Owner

> `get` **Owner**(): [`Vehicle`](Vehicle.md)

#### Returns

[`Vehicle`](Vehicle.md)

#### Defined in

[client/models/VehicleDoorCollection.ts:12](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleDoorCollection.ts#L12)

***

### VehicleDoors

> `get` **VehicleDoors**(): `Map`\<[`VehicleDoorIndex`](../enumerations/VehicleDoorIndex.md), [`VehicleDoor`](VehicleDoor.md)\>

#### Returns

`Map`\<[`VehicleDoorIndex`](../enumerations/VehicleDoorIndex.md), [`VehicleDoor`](VehicleDoor.md)\>

#### Defined in

[client/models/VehicleDoorCollection.ts:16](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleDoorCollection.ts#L16)

## Methods

### breakAllDoors()

> **breakAllDoors**(`stayInTheWorld`?): `void`

Breaks all doors in the current context.

#### Parameters

• **stayInTheWorld?**: `boolean`

Optional parameter, if set to true, the doors will stay in the world after being broken.

#### Returns

`void`

#### Defined in

[client/models/VehicleDoorCollection.ts:59](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleDoorCollection.ts#L59)

***

### closeAllDoors()

> **closeAllDoors**(`instantly`): `void`

Closes all doors in the system.

#### Parameters

• **instantly**: `boolean`

Determines whether the doors should close instantly or not.

#### Returns

`void`

This method does not return a value.

#### Defined in

[client/models/VehicleDoorCollection.ts:72](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleDoorCollection.ts#L72)

***

### getAllDoors()

> **getAllDoors**(): [`VehicleDoor`](VehicleDoor.md)[]

Retrieves all doors associated with the vehicle.

#### Returns

[`VehicleDoor`](VehicleDoor.md)[]

An array containing all valid vehicle doors.

#### Defined in

[client/models/VehicleDoorCollection.ts:39](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleDoorCollection.ts#L39)

***

### getDoor()

> **getDoor**(`index`): [`VehicleDoor`](VehicleDoor.md)

Retrieves the door of the vehicle at the given index.

#### Parameters

• **index**: [`VehicleDoorIndex`](../enumerations/VehicleDoorIndex.md)

The index of the door to retrieve.

#### Returns

[`VehicleDoor`](VehicleDoor.md)

The door at the specified index.

#### Defined in

[client/models/VehicleDoorCollection.ts:27](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleDoorCollection.ts#L27)

***

### hasDoor()

> **hasDoor**(`index`): `boolean`

Checks if the vehicle has a specified door.

#### Parameters

• **index**: [`VehicleDoorIndex`](../enumerations/VehicleDoorIndex.md)

The index of the vehicle door to check.

#### Returns

`boolean`

True if the vehicle has the specified door, false otherwise.

#### Defined in

[client/models/VehicleDoorCollection.ts:128](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleDoorCollection.ts#L128)

***

### openAllDoors()

> **openAllDoors**(`loose`?, `instantly`?): `void`

Opens all doors associated with the current object.

#### Parameters

• **loose?**: `boolean`

If true, doors will open loosely.

• **instantly?**: `boolean`

If true, doors will open instantly.

#### Returns

`void`

This method does not return any value.

#### Defined in

[client/models/VehicleDoorCollection.ts:86](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleDoorCollection.ts#L86)

***

### setControlForAll()

> **setControlForAll**(`speed`?, `angle`?): `void`

Sets control parameters for all doors managed by this instance.

#### Parameters

• **speed?**: `number`

The speed parameter to set for each door. Defaults to undefined.

• **angle?**: `number`

The angle parameter to set for each door. Defaults to undefined.

#### Returns

`void`

#### Defined in

[client/models/VehicleDoorCollection.ts:100](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleDoorCollection.ts#L100)

***

### setLatchedForAll()

> **setLatchedForAll**(`forceClose`, `lock`, `p4`?): `void`

Sets the latched state for all doors.

#### Parameters

• **forceClose**: `boolean`

Indicates if the doors should be forcefully closed.

• **lock**: `boolean`

Indicates if the doors should be locked.

• **p4?**: `boolean`

Optional parameter to set additional state on the doors.

#### Returns

`void`

#### Defined in

[client/models/VehicleDoorCollection.ts:115](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleDoorCollection.ts#L115)
