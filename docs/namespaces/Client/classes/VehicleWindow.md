[**fivem-ts - Documentation v0.5.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.5.5](../../../README.md) / [Client](../README.md) / VehicleWindow

# Class: VehicleWindow

Represents a vehicle window with various functionalities to manipulate and check the state of the window.

## Constructors

### new VehicleWindow()

> **new VehicleWindow**(`owner`, `index`): [`VehicleWindow`](VehicleWindow.md)

Creates an instance of the class.

#### Parameters

• **owner**: [`Vehicle`](Vehicle.md)

The vehicle to which the window belongs.

• **index**: [`VehicleWindowIndex`](../enumerations/VehicleWindowIndex.md)

The index position of the window in the vehicle.

#### Returns

[`VehicleWindow`](VehicleWindow.md)

#### Defined in

[client/models/VehicleWindow.ts:14](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWindow.ts#L14)

## Accessors

### Index

> `get` **Index**(): [`VehicleWindowIndex`](../enumerations/VehicleWindowIndex.md)

Retrieves the current index of the vehicle window.

> `set` **Index**(`index`): `void`

Sets the index of the vehicle window.

#### Parameters

• **index**: [`VehicleWindowIndex`](../enumerations/VehicleWindowIndex.md)

The index to set for the vehicle window.

#### Returns

[`VehicleWindowIndex`](../enumerations/VehicleWindowIndex.md)

The index of the vehicle window.

#### Defined in

[client/models/VehicleWindow.ts:33](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWindow.ts#L33)

***

### Owner

> `get` **Owner**(): [`Vehicle`](Vehicle.md)

Gets the owner of the vehicle.

#### Returns

[`Vehicle`](Vehicle.md)

The owner of the vehicle.

#### Defined in

[client/models/VehicleWindow.ts:24](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWindow.ts#L24)

## Methods

### break()

> **break**(): `void`

Breaks the vehicle window associated with the specified owner and index.

This method triggers the game native to smash the vehicle window based on the provided owner's handle and the window index.

#### Returns

`void`

#### Defined in

[client/models/VehicleWindow.ts:77](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWindow.ts#L77)

***

### isIntact()

> **isIntact**(): `boolean`

Checks whether the window of a vehicle is intact.

#### Returns

`boolean`

True if the vehicle window is intact, otherwise false.

#### Defined in

[client/models/VehicleWindow.ts:50](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWindow.ts#L50)

***

### remove()

> **remove**(): `void`

Removes a vehicle window based on the owner's handle and window index.

#### Returns

`void`

#### Defined in

[client/models/VehicleWindow.ts:105](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWindow.ts#L105)

***

### repair()

> **repair**(): `void`

Repair a vehicle window

#### Returns

`void`

#### Remarks

This method use a native coded to not work on vehicles of type: `CBike`, `Bmx`, `CBoat`, `CTrain` and `CSubmarine`.

#### Defined in

[client/models/VehicleWindow.ts:98](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWindow.ts#L98)

***

### rollDown()

> **rollDown**(): `void`

Rolls down the window of the specified car.

#### Returns

`void`

#### Defined in

[client/models/VehicleWindow.ts:67](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWindow.ts#L67)

***

### rollUp()

> **rollUp**(): `void`

Rolls up the current window.

This method collapses the window associated with the
owner and index properties into a roll-up state.

#### Returns

`void`

#### Defined in

[client/models/VehicleWindow.ts:60](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWindow.ts#L60)

***

### smash()

> **smash**(): `void`

Smashes the vehicle window associated with this object.

This method is responsible for invoking the command to smash the window
of the vehicle that is identified by the owner and index properties.

#### Returns

`void`

#### Defined in

[client/models/VehicleWindow.ts:88](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWindow.ts#L88)
