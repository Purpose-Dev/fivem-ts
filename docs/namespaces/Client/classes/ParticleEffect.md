[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Client](../README.md) / ParticleEffect

# Class: `abstract` ParticleEffect

An abstract class representing a particle effect.

This class provides methods and properties to manage and control
various aspects of a particle effect such as its asset, effect name,
offset, rotation, color, scale, range, and axis inversion.

## Accessors

### Asset

> `get` **Asset**(): `string`

#### Returns

`string`

#### Defined in

[client/ParticleEffect.ts:45](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ParticleEffect.ts#L45)

***

### AssetName

> `get` **AssetName**(): `string`

#### Returns

`string`

#### Defined in

[client/ParticleEffect.ts:41](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ParticleEffect.ts#L41)

***

### Color

> `get` **Color**(): [`Color`](Color.md)

> `set` **Color**(`color`): `void`

#### Parameters

• **color**: [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Defined in

[client/ParticleEffect.ts:81](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ParticleEffect.ts#L81)

***

### EffectName

> `get` **EffectName**(): `string`

#### Returns

`string`

#### Defined in

[client/ParticleEffect.ts:49](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ParticleEffect.ts#L49)

***

### Handle

> `get` **Handle**(): `number`

> `set` **Handle**(`handle`): `void`

#### Parameters

• **handle**: `number`

#### Returns

`number`

#### Defined in

[client/ParticleEffect.ts:33](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ParticleEffect.ts#L33)

***

### InvertAxis

> `get` **InvertAxis**(): [`InvertAxis`](../interfaces/InvertAxis.md)

> `set` **InvertAxis**(`invertAxis`): `void`

#### Parameters

• **invertAxis**: [`InvertAxis`](../interfaces/InvertAxis.md)

#### Returns

[`InvertAxis`](../interfaces/InvertAxis.md)

#### Defined in

[client/ParticleEffect.ts:106](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ParticleEffect.ts#L106)

***

### IsActive

> `get` **IsActive**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/ParticleEffect.ts:118](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ParticleEffect.ts#L118)

***

### Offset

> `get` **Offset**(): [`Vector3`](../../Shared/classes/Vector3.md)

> `set` **Offset**(`offset`): `void`

#### Parameters

• **offset**: [`Vector3`](../../Shared/classes/Vector3.md)

#### Returns

[`Vector3`](../../Shared/classes/Vector3.md)

#### Defined in

[client/ParticleEffect.ts:53](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ParticleEffect.ts#L53)

***

### Range

> `get` **Range**(): `number`

> `set` **Range**(`range`): `void`

#### Parameters

• **range**: `number`

#### Returns

`number`

#### Defined in

[client/ParticleEffect.ts:97](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ParticleEffect.ts#L97)

***

### Rotation

> `get` **Rotation**(): [`Vector3`](../../Shared/classes/Vector3.md)

> `set` **Rotation**(`rotation`): `void`

#### Parameters

• **rotation**: [`Vector3`](../../Shared/classes/Vector3.md)

#### Returns

[`Vector3`](../../Shared/classes/Vector3.md)

#### Defined in

[client/ParticleEffect.ts:61](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ParticleEffect.ts#L61)

***

### Scale

> `get` **Scale**(): `number`

> `set` **Scale**(`scale`): `void`

#### Parameters

• **scale**: `number`

#### Returns

`number`

#### Defined in

[client/ParticleEffect.ts:89](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ParticleEffect.ts#L89)

## Methods

### setParameter()

> **setParameter**(`parameterName`, `value`): `void`

Sets the value of a specific parameter for the particle effect.

#### Parameters

• **parameterName**: `string`

The name of the parameter to set.

• **value**: `number`

The value to set for the specified parameter.

#### Returns

`void`

#### Defined in

[client/ParticleEffect.ts:143](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ParticleEffect.ts#L143)

***

### start()

> `abstract` **start**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/ParticleEffect.ts:31](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ParticleEffect.ts#L31)

***

### stop()

> **stop**(): `void`

Stops the particle effect if it is currently active.
This method will remove the particle effect associated with the current handle.

#### Returns

`void`

#### Defined in

[client/ParticleEffect.ts:128](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ParticleEffect.ts#L128)

***

### toString()

> **toString**(): `string`

Returns a string representation of the asset and effect names.

#### Returns

`string`

A string combining the asset name and effect name separated by a backslash.

#### Defined in

[client/ParticleEffect.ts:154](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ParticleEffect.ts#L154)
