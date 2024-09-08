[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Client](../README.md) / VehicleWindowCollection

# Class: VehicleWindowCollection

## Constructors

### new VehicleWindowCollection()

> **new VehicleWindowCollection**(`owner`): [`VehicleWindowCollection`](VehicleWindowCollection.md)

#### Parameters

• **owner**: [`Vehicle`](Vehicle.md)

#### Returns

[`VehicleWindowCollection`](VehicleWindowCollection.md)

#### Defined in

[client/models/VehicleWindowCollection.ts:11](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWindowCollection.ts#L11)

## Accessors

### Owner

> `get` **Owner**(): [`Vehicle`](Vehicle.md)

#### Returns

[`Vehicle`](Vehicle.md)

#### Defined in

[client/models/VehicleWindowCollection.ts:15](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWindowCollection.ts#L15)

***

### VehicleWindows

> `get` **VehicleWindows**(): `Map`\<[`VehicleWindowIndex`](../../Shared/enumerations/VehicleWindowIndex.md), [`VehicleWindow`](VehicleWindow.md)\>

#### Returns

`Map`\<[`VehicleWindowIndex`](../../Shared/enumerations/VehicleWindowIndex.md), [`VehicleWindow`](VehicleWindow.md)\>

#### Defined in

[client/models/VehicleWindowCollection.ts:19](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWindowCollection.ts#L19)

## Methods

### getAllWindows()

> **getAllWindows**(): [`VehicleWindow`](VehicleWindow.md)[]

#### Returns

[`VehicleWindow`](VehicleWindow.md)[]

#### Defined in

[client/models/VehicleWindowCollection.ts:31](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWindowCollection.ts#L31)

***

### getWindow()

> **getWindow**(`index`): [`VehicleWindow`](VehicleWindow.md)

#### Parameters

• **index**: [`VehicleWindowIndex`](../../Shared/enumerations/VehicleWindowIndex.md)

#### Returns

[`VehicleWindow`](VehicleWindow.md)

#### Defined in

[client/models/VehicleWindowCollection.ts:23](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWindowCollection.ts#L23)

***

### hasWindow()

> **hasWindow**(`windowIndex`): `boolean`

#### Parameters

• **windowIndex**: [`VehicleWindowIndex`](../../Shared/enumerations/VehicleWindowIndex.md)

#### Returns

`boolean`

#### Defined in

[client/models/VehicleWindowCollection.ts:44](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWindowCollection.ts#L44)
