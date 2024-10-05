[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Client](../README.md) / VehicleWindowCollection

# Class: VehicleWindowCollection

Represents a collection of windows for a specific vehicle.

## Constructors

### new VehicleWindowCollection()

> **new VehicleWindowCollection**(`owner`): [`VehicleWindowCollection`](VehicleWindowCollection.md)

#### Parameters

• **owner**: [`Vehicle`](Vehicle.md)

#### Returns

[`VehicleWindowCollection`](VehicleWindowCollection.md)

#### Defined in

[client/models/VehicleWindowCollection.ts:14](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWindowCollection.ts#L14)

## Accessors

### AreAllWindowsIntact

> `get` **AreAllWindowsIntact**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/VehicleWindowCollection.ts:26](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWindowCollection.ts#L26)

***

### Owner

> `get` **Owner**(): [`Vehicle`](Vehicle.md)

#### Returns

[`Vehicle`](Vehicle.md)

#### Defined in

[client/models/VehicleWindowCollection.ts:18](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWindowCollection.ts#L18)

***

### VehicleWindows

> `get` **VehicleWindows**(): `Map`\<[`VehicleWindowIndex`](../../Shared/enumerations/VehicleWindowIndex.md), [`VehicleWindow`](VehicleWindow.md)\>

#### Returns

`Map`\<[`VehicleWindowIndex`](../../Shared/enumerations/VehicleWindowIndex.md), [`VehicleWindow`](VehicleWindow.md)\>

#### Defined in

[client/models/VehicleWindowCollection.ts:22](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWindowCollection.ts#L22)

## Methods

### getAllWindows()

> **getAllWindows**(): [`VehicleWindow`](VehicleWindow.md)[]

Retrieves all window objects in the vehicle.

#### Returns

[`VehicleWindow`](VehicleWindow.md)[]

An array of VehicleWindow objects that exist in the vehicle.

#### Defined in

[client/models/VehicleWindowCollection.ts:49](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWindowCollection.ts#L49)

***

### getWindow()

> **getWindow**(`index`): [`VehicleWindow`](VehicleWindow.md)

Retrieves the window object associated with a specific index in the vehicle.

#### Parameters

• **index**: [`VehicleWindowIndex`](../../Shared/enumerations/VehicleWindowIndex.md)

The index of the window to retrieve.

#### Returns

[`VehicleWindow`](VehicleWindow.md)

The window object associated with the specified index.

#### Defined in

[client/models/VehicleWindowCollection.ts:36](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWindowCollection.ts#L36)

***

### hasWindow()

> **hasWindow**(`windowIndex`): `boolean`

Checks if a window of the vehicle exists based on the given window index.

#### Parameters

• **windowIndex**: [`VehicleWindowIndex`](../../Shared/enumerations/VehicleWindowIndex.md)

The index of the window to check.

#### Returns

`boolean`

True if the window exists, false otherwise.

#### Defined in

[client/models/VehicleWindowCollection.ts:90](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWindowCollection.ts#L90)

***

### rollDownAllWindows()

> **rollDownAllWindows**(): `void`

Rolls down all the windows of the vehicle.

#### Returns

`void`

No return value

#### Defined in

[client/models/VehicleWindowCollection.ts:67](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWindowCollection.ts#L67)

***

### rollUpAllWindows()

> **rollUpAllWindows**(): `void`

Rolls up all windows in the vehicle.

#### Returns

`void`

#### Defined in

[client/models/VehicleWindowCollection.ts:78](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWindowCollection.ts#L78)
