[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Client](../README.md) / VehicleMod

# Class: VehicleMod

A class representing vehicle mod.

## Constructors

### new VehicleMod()

> **new VehicleMod**(`owner`, `modType`): [`VehicleMod`](VehicleMod.md)

#### Parameters

• **owner**: [`Vehicle`](Vehicle.md)

• **modType**: [`VehicleMods`](../enumerations/VehicleMods.md)

#### Returns

[`VehicleMod`](VehicleMod.md)

#### Defined in

[client/models/VehicleMod.ts:8](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleMod.ts#L8)

## Accessors

### IdentifierHash

> `get` **IdentifierHash**(): `number`

#### Returns

`number`

#### Defined in

[client/models/VehicleMod.ts:21](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleMod.ts#L21)

***

### Index

> `get` **Index**(): `number`

> `set` **Index**(`index`): `void`

#### Parameters

• **index**: `number`

#### Returns

`number`

#### Defined in

[client/models/VehicleMod.ts:25](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleMod.ts#L25)

***

### IsHswExclusive

> `get` **IsHswExclusive**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/VehicleMod.ts:33](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleMod.ts#L33)

***

### ModCount

> `get` **ModCount**(): `number`

#### Returns

`number`

#### Defined in

[client/models/VehicleMod.ts:37](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleMod.ts#L37)

***

### ModifierValue

> `get` **ModifierValue**(): `number`

#### Returns

`number`

#### Defined in

[client/models/VehicleMod.ts:41](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleMod.ts#L41)

***

### ModType

> `get` **ModType**(): [`VehicleMods`](../enumerations/VehicleMods.md)

#### Returns

[`VehicleMods`](../enumerations/VehicleMods.md)

#### Defined in

[client/models/VehicleMod.ts:17](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleMod.ts#L17)

***

### Owner

> `get` **Owner**(): [`Vehicle`](Vehicle.md)

#### Returns

[`Vehicle`](Vehicle.md)

#### Defined in

[client/models/VehicleMod.ts:13](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleMod.ts#L13)

***

### Variation

> `get` **Variation**(): `boolean`

> `set` **Variation**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/VehicleMod.ts:45](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleMod.ts#L45)

## Methods

### preload()

> **preload**(): `void`

Preloads a vehicle mod for the given owner's handle, modification type, and index.

#### Returns

`void`

#### Defined in

[client/models/VehicleMod.ts:58](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleMod.ts#L58)

***

### remove()

> **remove**(): `void`

Removes the vehicle mod from the owner's vehicle based on the specified modification type.

#### Returns

`void`

#### Defined in

[client/models/VehicleMod.ts:67](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleMod.ts#L67)
