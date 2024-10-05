[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Client](../README.md) / VehicleWheelCollection

# Class: VehicleWheelCollection

The VehicleWheelCollection class manages a collection of wheels associated with a vehicle.
It provides utility functions to retrieve, burst, fix, and check the existence of wheels.

## Constructors

### new VehicleWheelCollection()

> **new VehicleWheelCollection**(`owner`): [`VehicleWheelCollection`](VehicleWheelCollection.md)

#### Parameters

• **owner**: [`Vehicle`](Vehicle.md)

#### Returns

[`VehicleWheelCollection`](VehicleWheelCollection.md)

#### Defined in

[client/models/VehicleWheelCollection.ts:11](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWheelCollection.ts#L11)

## Accessors

### Owner

> `get` **Owner**(): [`Vehicle`](Vehicle.md)

#### Returns

[`Vehicle`](Vehicle.md)

#### Defined in

[client/models/VehicleWheelCollection.ts:13](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWheelCollection.ts#L13)

***

### VehicleWheels

> `get` **VehicleWheels**(): `Map`\<`number`, [`VehicleWheel`](VehicleWheel.md)\>

#### Returns

`Map`\<`number`, [`VehicleWheel`](VehicleWheel.md)\>

#### Defined in

[client/models/VehicleWheelCollection.ts:17](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWheelCollection.ts#L17)

## Methods

### burstAllWheels()

> **burstAllWheels**(): `void`

Bursts all the wheels of the vehicle.

Iterates through each wheel in the vehicle's list of wheels and calls the burst method on them.

#### Returns

`void`

#### Defined in

[client/models/VehicleWheelCollection.ts:60](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWheelCollection.ts#L60)

***

### fixAllWheels()

> **fixAllWheels**(): `void`

Repairs all wheels of the vehicle by invoking the fix method on each wheel.

#### Returns

`void`

#### Defined in

[client/models/VehicleWheelCollection.ts:71](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWheelCollection.ts#L71)

***

### getAllVehicles()

> **getAllVehicles**(): [`VehicleWheel`](VehicleWheel.md)[]

Retrieves an array of all vehicles that have wheels attached.

#### Returns

[`VehicleWheel`](VehicleWheel.md)[]

An array containing the vehicles with wheels attached.

#### Defined in

[client/models/VehicleWheelCollection.ts:40](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWheelCollection.ts#L40)

***

### getWheel()

> **getWheel**(`index`): [`VehicleWheel`](VehicleWheel.md)

Retrieves the wheel of the vehicle at the specified index.

#### Parameters

• **index**: [`VehicleWheelIndex`](../enumerations/VehicleWheelIndex.md)

The index of the wheel to retrieve.

#### Returns

[`VehicleWheel`](VehicleWheel.md)

The wheel at the specified index.

#### Defined in

[client/models/VehicleWheelCollection.ts:28](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWheelCollection.ts#L28)

***

### hasWheel()

> **hasWheel**(`wheel`): `boolean`

Checks if the vehicle has a specified wheel.

#### Parameters

• **wheel**: [`VehicleWheelIndex`](../enumerations/VehicleWheelIndex.md)

The index of the wheel to check.

#### Returns

`boolean`

- Returns true if the vehicle has the specified wheel, otherwise false.

#### Defined in

[client/models/VehicleWheelCollection.ts:84](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWheelCollection.ts#L84)
