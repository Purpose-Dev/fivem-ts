[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Client](../README.md) / Model

# Class: Model

Class to create and manage entity models.

## Constructors

### new Model()

> **new Model**(`hash`): [`Model`](Model.md)

#### Parameters

• **hash**: `string` \| `number`

#### Returns

[`Model`](Model.md)

#### Defined in

[client/Model.ts:10](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Model.ts#L10)

## Accessors

### Dimensions

> `get` **Dimensions**(): [`Vector3`](../../Shared/classes/Vector3.md)

Gets the model dimensions.

#### Returns

[`Vector3`](../../Shared/classes/Vector3.md)

This model dimensions.

#### Defined in

[client/Model.ts:180](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Model.ts#L180)

***

### Hash

> `get` **Hash**(): `number`

Gets hash of the model

#### Returns

`number`

The hash key

#### Defined in

[client/Model.ts:23](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Model.ts#L23)

***

### IsBicycle

> `get` **IsBicycle**(): `boolean`

Gets if the model is a bicycle or not.

#### Returns

`boolean`

Whether this model is a bicycle.

#### Defined in

[client/Model.ts:68](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Model.ts#L68)

***

### IsBike

> `get` **IsBike**(): `boolean`

Gets if the model is a motorbike or not.

#### Returns

`boolean`

Whether this model is a motorbike.

#### Defined in

[client/Model.ts:77](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Model.ts#L77)

***

### IsBoat

> `get` **IsBoat**(): `boolean`

Gets if the model is a boat or not.

#### Returns

`boolean`

Whether this model is a boat.

#### Defined in

[client/Model.ts:86](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Model.ts#L86)

***

### IsCar

> `get` **IsCar**(): `boolean`

Gets if the model is a car or not.

#### Returns

`boolean`

Whether this model is a car.

#### Defined in

[client/Model.ts:95](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Model.ts#L95)

***

### IsCargobob

> `get` **IsCargobob**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/Model.ts:144](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Model.ts#L144)

***

### IsCollisionLoaded

> `get` **IsCollisionLoaded**(): `boolean`

Gets if the model collision is loaded or not.

#### Returns

`boolean`

Whether this model collision is loaded.

#### Defined in

[client/Model.ts:59](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Model.ts#L59)

***

### IsHelicopter

> `get` **IsHelicopter**(): `boolean`

Gets if the model is a helicopter or not.

#### Returns

`boolean`

Whether this model is a helicopter.

#### Defined in

[client/Model.ts:104](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Model.ts#L104)

***

### IsInCdImage

> `get` **IsInCdImage**(): `boolean`

Gets if the model is in cd image or not.

#### Returns

`boolean`

Whether this model is in cd image.

#### Defined in

[client/Model.ts:41](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Model.ts#L41)

***

### IsLoaded

> `get` **IsLoaded**(): `boolean`

Gets if the model is loaded or not.

#### Returns

`boolean`

Whether this model is loaded.

#### Defined in

[client/Model.ts:50](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Model.ts#L50)

***

### IsPed

> `get` **IsPed**(): `boolean`

Gets if the model is a Ped or not.

#### Returns

`boolean`

Whether this model is a Ped.

#### Defined in

[client/Model.ts:162](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Model.ts#L162)

***

### IsPlane

> `get` **IsPlane**(): `boolean`

Gets if the model is a plane or not.

#### Returns

`boolean`

Whether this model is a plane.

#### Defined in

[client/Model.ts:113](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Model.ts#L113)

***

### IsProp

> `get` **IsProp**(): `boolean`

Gets if the model is a prop or not.

#### Returns

`boolean`

Whether this model is a prop.

#### Defined in

[client/Model.ts:171](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Model.ts#L171)

***

### IsQuadbike

> `get` **IsQuadbike**(): `boolean`

Gets if the model is a quadbike or not.

#### Returns

`boolean`

Whether this model is a quadbike.

#### Defined in

[client/Model.ts:122](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Model.ts#L122)

***

### IsTrain

> `get` **IsTrain**(): `boolean`

Gets if the model is a train or not.

#### Returns

`boolean`

Whether this model is a train.

#### Defined in

[client/Model.ts:131](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Model.ts#L131)

***

### IsValid

> `get` **IsValid**(): `boolean`

Gets if the model is valid or not.

#### Returns

`boolean`

Whether this model is valid.

#### Defined in

[client/Model.ts:32](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Model.ts#L32)

***

### IsVehicle

> `get` **IsVehicle**(): `boolean`

Gets if the model is a Cargobob or not.

#### Returns

`boolean`

Whether this model is a Cargobob.

#### Defined in

[client/Model.ts:140](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Model.ts#L140)

## Methods

### markAsNoLongerNeeded()

> **markAsNoLongerNeeded**(): `void`

Sets the model as no longer needed allowing the game engine to free memory.

#### Returns

`void`

#### Defined in

[client/Model.ts:215](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Model.ts#L215)

***

### request()

> **request**(`timeout`): `Promise`\<`boolean`\>

Request and load the model with a specified timeout. Advised timeout - 1000.

#### Parameters

• **timeout**: `number`

{number} Maximum allowed time for model to load.

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[client/Model.ts:194](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Model.ts#L194)
