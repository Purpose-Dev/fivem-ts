[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Client](../README.md) / Quaternion

# Class: Quaternion

Represents a 3D rotation using a quaternion.
A quaternion is a mathematical concept used to represent rotations in three-dimensional space.
It consists of four components: x, y, z (vector part) and w (scalar part).

## Constructors

### new Quaternion()

> **new Quaternion**(`x`, `y`, `z`, `w`): [`Quaternion`](Quaternion.md)

Creates a new Quaternion instance.

#### Parameters

• **x**: `number`

The x component of the quaternion.

• **y**: `number`

The y component of the quaternion.

• **z**: `number`

The z component of the quaternion.

• **w**: `number`

The w (scalar) component of the quaternion.

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[client/utils/Quaternion.ts:36](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/utils/Quaternion.ts#L36)

## Properties

### w

> **w**: `number`

The w (scalar) component of the quaternion.

#### Defined in

[client/utils/Quaternion.ts:40](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/utils/Quaternion.ts#L40)

***

### x

> **x**: `number`

The x component of the quaternion.

#### Defined in

[client/utils/Quaternion.ts:37](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/utils/Quaternion.ts#L37)

***

### y

> **y**: `number`

The y component of the quaternion.

#### Defined in

[client/utils/Quaternion.ts:38](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/utils/Quaternion.ts#L38)

***

### z

> **z**: `number`

The z component of the quaternion.

#### Defined in

[client/utils/Quaternion.ts:39](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/utils/Quaternion.ts#L39)

## Accessors

### Length

> `get` **Length**(): `number`

Gets the length (magnitude) of the quaternion.

#### Returns

`number`

The magnitude of the quaternion.

#### Defined in

[client/utils/Quaternion.ts:47](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/utils/Quaternion.ts#L47)

***

### normalize

> `get` **normalize**(): [`Quaternion`](Quaternion.md)

Gets the normalized quaternion (unit quaternion).
Normalization makes the magnitude of the quaternion equal to 1.

#### Returns

[`Quaternion`](Quaternion.md)

A new quaternion that is the normalized version of this quaternion.

#### Defined in

[client/utils/Quaternion.ts:56](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/utils/Quaternion.ts#L56)

## Methods

### conjugate()

> **conjugate**(): [`Quaternion`](Quaternion.md)

Returns the conjugate of this quaternion.
The conjugate of a quaternion is obtained by negating its vector part.

#### Returns

[`Quaternion`](Quaternion.md)

A new quaternion representing the conjugate of this quaternion.

#### Defined in

[client/utils/Quaternion.ts:124](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/utils/Quaternion.ts#L124)

***

### dot()

> **dot**(`q`): `number`

Computes the dot product between this quaternion and another quaternion.
The dot product is a measure of the angle between two quaternions.

#### Parameters

• **q**: [`Quaternion`](Quaternion.md)

The other quaternion.

#### Returns

`number`

The dot product of the two quaternions.

#### Defined in

[client/utils/Quaternion.ts:149](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/utils/Quaternion.ts#L149)

***

### equals()

> **equals**(`other`, `tolerance`): `boolean`

Checks if this quaternion is equal to another quaternion within a certain tolerance.

#### Parameters

• **other**: [`Quaternion`](Quaternion.md)

The quaternion to compare with.

• **tolerance**: `number` = `1e-6`

The tolerance within which the two quaternions are considered equal. Default is 1e-6.

#### Returns

`boolean`

True if the quaternions are equal within the given tolerance, false otherwise.

#### Defined in

[client/utils/Quaternion.ts:74](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/utils/Quaternion.ts#L74)

***

### inverse()

> **inverse**(): [`Quaternion`](Quaternion.md)

Returns the inverse of this quaternion.
The inverse is calculated by conjugating the quaternion and dividing by the square of its magnitude.

#### Returns

[`Quaternion`](Quaternion.md)

A new quaternion representing the inverse of this quaternion.

#### Defined in

[client/utils/Quaternion.ts:133](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/utils/Quaternion.ts#L133)

***

### multiply()

> **multiply**(`other`): [`Quaternion`](Quaternion.md)

Multiplies this quaternion by another quaternion.
The result is a new quaternion representing the combined rotation.

#### Parameters

• **other**: [`Quaternion`](Quaternion.md)

The quaternion to multiply with.

#### Returns

[`Quaternion`](Quaternion.md)

A new quaternion representing the product of the two quaternions.

#### Defined in

[client/utils/Quaternion.ts:110](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/utils/Quaternion.ts#L110)

***

### slerp()

> **slerp**(`q1`, `t`): [`Quaternion`](Quaternion.md)

Performs spherical linear interpolation (SLERP) between this quaternion and another quaternion.
SLERP is used to interpolate between two quaternions with constant angular velocity.

#### Parameters

• **q1**: [`Quaternion`](Quaternion.md)

The quaternion to interpolate towards.

• **t**: `number`

The interpolation factor, ranging from 0 to 1.

#### Returns

[`Quaternion`](Quaternion.md)

A new quaternion representing the interpolated quaternion.

#### Defined in

[client/utils/Quaternion.ts:160](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/utils/Quaternion.ts#L160)

***

### toArray()

> **toArray**(): [`number`, `number`, `number`, `number`]

Converts the quaternion to an array of numbers [x, y, z, w].

#### Returns

[`number`, `number`, `number`, `number`]

An array containing the quaternion components.

#### Defined in

[client/utils/Quaternion.ts:87](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/utils/Quaternion.ts#L87)

***

### toEulerAngles()

> **toEulerAngles**(): [`EulerAngles`](../type-aliases/EulerAngles.md)

Converts the quaternion to Euler angles (roll, pitch, yaw).
Euler angles are a way to represent 3D rotations using three angles.

#### Returns

[`EulerAngles`](../type-aliases/EulerAngles.md)

An object containing the roll, pitch, and yaw angles in radians.

#### Defined in

[client/utils/Quaternion.ts:199](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/utils/Quaternion.ts#L199)

***

### toJson()

> **toJson**(): `object`

Converts the quaternion to a JSON object.

#### Returns

`object`

A JSON object with x, y, z, and w properties.

##### w

> **w**: `number`

##### x

> **x**: `number`

##### y

> **y**: `number`

##### z

> **z**: `number`

#### Defined in

[client/utils/Quaternion.ts:95](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/utils/Quaternion.ts#L95)

***

### angleBetween()

> `static` **angleBetween**(`q1`, `q2`): `number`

Calculates the angle between two quaternions.

#### Parameters

• **q1**: [`Quaternion`](Quaternion.md)

The first quaternion.

• **q2**: [`Quaternion`](Quaternion.md)

The second quaternion.

#### Returns

`number`

The angle in radians between the two quaternions.

#### Defined in

[client/utils/Quaternion.ts:274](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/utils/Quaternion.ts#L274)

***

### applyToEntity()

> `static` **applyToEntity**(`entity`, `quaternion`): `void`

Applies a quaternion rotation to an entity.

#### Parameters

• **entity**: `number`

The entity to apply the quaternion to.

• **quaternion**: [`Quaternion`](Quaternion.md)

The quaternion representing the rotation to apply.

#### Returns

`void`

#### Defined in

[client/utils/Quaternion.ts:296](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/utils/Quaternion.ts#L296)

***

### fromEntity()

> `static` **fromEntity**(`entity`): [`Quaternion`](Quaternion.md)

Creates a quaternion from an entity's rotation.

#### Parameters

• **entity**: `number`

The entity whose quaternion is to be retrieved.

#### Returns

[`Quaternion`](Quaternion.md)

A new quaternion representing the entity's rotation.

#### Defined in

[client/utils/Quaternion.ts:285](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/utils/Quaternion.ts#L285)

***

### fromEulerAngles()

> `static` **fromEulerAngles**(`eulerAngles`): [`Quaternion`](Quaternion.md)

Creates a quaternion from Euler angles (roll, pitch, yaw).

#### Parameters

• **eulerAngles**: [`EulerAngles`](../type-aliases/EulerAngles.md)

An object containing the roll, pitch, and yaw angles in radians.

#### Returns

[`Quaternion`](Quaternion.md)

A new quaternion representing the rotation.

#### Defined in

[client/utils/Quaternion.ts:225](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/utils/Quaternion.ts#L225)

***

### identity()

> `static` **identity**(): [`Quaternion`](Quaternion.md)

Returns the identity quaternion (no rotation).

#### Returns

[`Quaternion`](Quaternion.md)

A new quaternion representing no rotation.

#### Defined in

[client/utils/Quaternion.ts:263](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/utils/Quaternion.ts#L263)

***

### lerp()

> `static` **lerp**(`q1`, `q2`, `t`): [`Quaternion`](Quaternion.md)

Performs linear interpolation (LERP) between two quaternions.

#### Parameters

• **q1**: [`Quaternion`](Quaternion.md)

The starting quaternion.

• **q2**: [`Quaternion`](Quaternion.md)

The ending quaternion.

• **t**: `number`

The interpolation factor (0 to 1).

#### Returns

[`Quaternion`](Quaternion.md)

A new quaternion that is the result of the interpolation.

#### Defined in

[client/utils/Quaternion.ts:249](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/utils/Quaternion.ts#L249)
