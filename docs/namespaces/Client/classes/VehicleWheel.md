[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Client](../README.md) / VehicleWheel

# Class: VehicleWheel

Represents a wheel of a vehicle and provides methods to interact with its state.

## Constructors

### new VehicleWheel()

> **new VehicleWheel**(`_owner`, `_index`): [`VehicleWheel`](VehicleWheel.md)

#### Parameters

• **\_owner**: [`Vehicle`](Vehicle.md)

• **\_index**: `number`

#### Returns

[`VehicleWheel`](VehicleWheel.md)

#### Defined in

[client/models/VehicleWheel.ts:7](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWheel.ts#L7)

## Accessors

### Health

> `get` **Health**(): `number`

> `set` **Health**(`value`): `void`

#### Parameters

• **value**: `number`

#### Returns

`number`

#### Defined in

[client/models/VehicleWheel.ts:28](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWheel.ts#L28)

***

### Index

> `get` **Index**(): `number`

> `set` **Index**(`index`): `void`

#### Parameters

• **index**: `number`

#### Returns

`number`

#### Defined in

[client/models/VehicleWheel.ts:16](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWheel.ts#L16)

***

### Owner

> `get` **Owner**(): [`Vehicle`](Vehicle.md)

#### Returns

[`Vehicle`](Vehicle.md)

#### Defined in

[client/models/VehicleWheel.ts:12](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWheel.ts#L12)

***

### WearMultiplier

> `get` **WearMultiplier**(): `number`

#### Returns

`number`

#### Defined in

[client/models/VehicleWheel.ts:36](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWheel.ts#L36)

## Methods

### burst()

> **burst**(): `void`

Causes the vehicle tyre to burst for the vehicle associated with the owner.

This method utilizes `SetVehicleTyreBurst` to simulate a tyre burst effect.
The tyre index and bursting properties are specified in the parameters of the method.

#### Returns

`void`

No return value.

#### Defined in

[client/models/VehicleWheel.ts:58](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWheel.ts#L58)

***

### exists()

> **exists**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/VehicleWheel.ts:24](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWheel.ts#L24)

***

### fix()

> **fix**(): `void`

Repairs a specific vehicle tire associated with the vehicle owner.
This method ensures that the tire at the provided index of the owner's vehicle is fixed.

#### Returns

`void`

Does not return any value.

#### Defined in

[client/models/VehicleWheel.ts:68](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWheel.ts#L68)

***

### isBurstable()

> **isBurstable**(`completely`): `boolean`

Determines if the vehicle's tire is burst.

#### Parameters

• **completely**: `boolean`

Flag indicating if the check should consider complete burst.

#### Returns

`boolean`

- Returns true if the tire is burst based on the provided condition, otherwise false.

#### Defined in

[client/models/VehicleWheel.ts:46](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/VehicleWheel.ts#L46)
