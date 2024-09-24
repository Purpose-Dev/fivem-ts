[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Client](../README.md) / VehicleToggleMod

# Class: VehicleToggleMod

Represents a vehicle modification that can be toggled on or off.

## Constructors

### new VehicleToggleMod()

> **new VehicleToggleMod**(`owner`, `modType`): [`VehicleToggleMod`](VehicleToggleMod.md)

#### Parameters

• **owner**: [`Vehicle`](Vehicle.md)

• **modType**: [`VehicleToggleModType`](../enumerations/VehicleToggleModType.md)

#### Returns

[`VehicleToggleMod`](VehicleToggleMod.md)

#### Defined in

[client/models/VehicleToggleMod.ts:8](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleToggleMod.ts#L8)

## Accessors

### IsInstalled

> `get` **IsInstalled**(): `boolean`

> `set` **IsInstalled**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/VehicleToggleMod.ts:21](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleToggleMod.ts#L21)

***

### LocalizedModTypeName

> `get` **LocalizedModTypeName**(): `string`

#### Returns

`string`

#### Defined in

[client/models/VehicleToggleMod.ts:29](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleToggleMod.ts#L29)

***

### ModType

> `get` **ModType**(): [`VehicleToggleModType`](../enumerations/VehicleToggleModType.md)

#### Returns

[`VehicleToggleModType`](../enumerations/VehicleToggleModType.md)

#### Defined in

[client/models/VehicleToggleMod.ts:17](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleToggleMod.ts#L17)

***

### Owner

> `get` **Owner**(): [`Vehicle`](Vehicle.md)

#### Returns

[`Vehicle`](Vehicle.md)

#### Defined in

[client/models/VehicleToggleMod.ts:13](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleToggleMod.ts#L13)

## Methods

### remove()

> **remove**(): `void`

Removes a vehicle modification.

This method removes a specific modification type from the vehicle owned by the current owner.

#### Returns

`void`

#### Defined in

[client/models/VehicleToggleMod.ts:40](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleToggleMod.ts#L40)
