[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Shared](../README.md) / Vector3

# Class: Vector3

Vector3
Class representing a 3D vector, implementing the Vec3 interface.

## Implements

- [`Vec3`](../interfaces/Vec3.md)

## Constructors

### new Vector3()

> **new Vector3**(`x`, `y`, `z`): [`Vector3`](Vector3.md)

Constructs a new Vector3 instance.

#### Parameters

• **x**: `number`

The x-coordinate of the vector.

• **y**: `number`

The y-coordinate of the vector.

• **z**: `number`

The z-coordinate of the vector.

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[shared/utils/Vector3.ts:32](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/Vector3.ts#L32)

## Properties

### x

> **x**: `number`

The x-coordinate of the vector.

#### Implementation of

[`Vec3`](../interfaces/Vec3.md).[`x`](../interfaces/Vec3.md#x)

#### Defined in

[shared/utils/Vector3.ts:33](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/Vector3.ts#L33)

***

### y

> **y**: `number`

The y-coordinate of the vector.

#### Implementation of

[`Vec3`](../interfaces/Vec3.md).[`y`](../interfaces/Vec3.md#y)

#### Defined in

[shared/utils/Vector3.ts:34](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/Vector3.ts#L34)

***

### z

> **z**: `number`

The z-coordinate of the vector.

#### Implementation of

[`Vec3`](../interfaces/Vec3.md).[`z`](../interfaces/Vec3.md#z)

#### Defined in

[shared/utils/Vector3.ts:35](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/Vector3.ts#L35)

## Accessors

### Length

> `get` **Length**(): `number`

Gets the length (magnitude) of the vector.

#### Returns

`number`

The length of the vector.

#### Defined in

[shared/utils/Vector3.ts:43](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/Vector3.ts#L43)

***

### normalize

> `get` **normalize**(): [`Vector3`](Vector3.md)

Gets a normalized version of this vector.

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 object with the same direction as this vector but with a length of 1.

#### Defined in

[shared/utils/Vector3.ts:52](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/Vector3.ts#L52)

## Methods

### add()

> **add**(`v`): [`Vec3`](../interfaces/Vec3.md)

Adds a number or another vector to this vector.

#### Parameters

• **v**: [`NumerableVector3`](../type-aliases/NumerableVector3.md)

The value to add (either a number or a vector).

#### Returns

[`Vec3`](../interfaces/Vec3.md)

A new Vector3 representing the result of the addition.

#### Defined in

[shared/utils/Vector3.ts:112](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/Vector3.ts#L112)

***

### clone()

> **clone**(): [`Vector3`](Vector3.md)

Clones the current Vector3 object into a new Vector3 object.

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 object with the same x, y, and z values.

#### Defined in

[shared/utils/Vector3.ts:61](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/Vector3.ts#L61)

***

### crossProduct()

> **crossProduct**(`v`): [`Vector3`](Vector3.md)

Calculates the cross product of this vector and another vector.

#### Parameters

• **v**: [`Vec3`](../interfaces/Vec3.md)

The other vector to calculate the cross product with.

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 representing the cross product of the two vectors.

#### Defined in

[shared/utils/Vector3.ts:92](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/Vector3.ts#L92)

***

### distance()

> **distance**(`v`): `number`

Calculates the distance between this vector and another vector.

#### Parameters

• **v**: [`Vec3`](../interfaces/Vec3.md)

The other vector to calculate the distance to.

#### Returns

`number`

The distance between the two vectors.

#### Defined in

[shared/utils/Vector3.ts:82](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/Vector3.ts#L82)

***

### distanceSquared()

> **distanceSquared**(`v`): `number`

The product of the Euclidean magnitudes of this and another Vector3.

#### Parameters

• **v**: [`Vec3`](../interfaces/Vec3.md)

Vector3 to find Euclidean magnitude between.

#### Returns

`number`

Euclidean magnitude with another vector.

#### Defined in

[shared/utils/Vector3.ts:71](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/Vector3.ts#L71)

***

### divide()

> **divide**(`v`): [`Vec3`](../interfaces/Vec3.md)

Divides this vector by a number or another vector.

#### Parameters

• **v**: [`NumerableVector3`](../type-aliases/NumerableVector3.md)

The value to divide by (either a number or a vector).

#### Returns

[`Vec3`](../interfaces/Vec3.md)

A new Vector3 representing the result of the division.

#### Defined in

[shared/utils/Vector3.ts:142](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/Vector3.ts#L142)

***

### dotProduct()

> **dotProduct**(`v`): `number`

Calculates the dot product of this vector and another vector.

#### Parameters

• **v**: [`Vec3`](../interfaces/Vec3.md)

The other vector to calculate the dot product with.

#### Returns

`number`

The dot product of the two vectors.

#### Defined in

[shared/utils/Vector3.ts:102](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/Vector3.ts#L102)

***

### multiply()

> **multiply**(`v`): [`Vector3`](Vector3.md)

Multiplies this vector by a number or another vector.

#### Parameters

• **v**: [`NumerableVector3`](../type-aliases/NumerableVector3.md)

The value to multiply by (either a number or a vector).

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 representing the result of the multiplication.

#### Defined in

[shared/utils/Vector3.ts:132](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/Vector3.ts#L132)

***

### replace()

> **replace**(`v`): `void`

Replaces the current vector's components with those of another vector.

#### Parameters

• **v**: [`Vec3`](../interfaces/Vec3.md)

The vector to replace with.

#### Returns

`void`

#### Defined in

[shared/utils/Vector3.ts:151](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/Vector3.ts#L151)

***

### subtract()

> **subtract**(`v`): [`Vector3`](Vector3.md)

Subtracts another vector from this vector.

#### Parameters

• **v**: [`NumerableVector3`](../type-aliases/NumerableVector3.md)

The vector to subtract.

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 representing the result of the subtraction.

#### Defined in

[shared/utils/Vector3.ts:122](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/Vector3.ts#L122)

***

### add()

> `static` **add**(`v1`, `v2`): [`Vector3`](Vector3.md)

Adds two vectors or a vector and a number.

#### Parameters

• **v1**: [`Vec3`](../interfaces/Vec3.md)

The first vector.

• **v2**: [`NumerableVector3`](../type-aliases/NumerableVector3.md)

The second vector or number to add.

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 representing the result of the addition.

#### Defined in

[shared/utils/Vector3.ts:189](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/Vector3.ts#L189)

***

### clone()

> `static` **clone**(`v1`): [`Vector3`](Vector3.md)

Clones a vector.

#### Parameters

• **v1**: [`Vec3`](../interfaces/Vec3.md)

The vector to clone.

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 instance identical to the input vector.

#### Defined in

[shared/utils/Vector3.ts:178](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/Vector3.ts#L178)

***

### create()

> `static` **create**(`v1`): [`Vector3`](Vector3.md)

Creates a new Vector3 instance from a number or a vector.

#### Parameters

• **v1**: [`NumerableVector3`](../type-aliases/NumerableVector3.md)

A number or a vector to create a Vector3 from.

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 instance.

#### Defined in

[shared/utils/Vector3.ts:164](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/Vector3.ts#L164)

***

### crossProduct()

> `static` **crossProduct**(`v1`, `v2`): [`Vector3`](Vector3.md)

Calculates the cross product of two vectors.

#### Parameters

• **v1**: [`Vec3`](../interfaces/Vec3.md)

The first vector.

• **v2**: [`Vec3`](../interfaces/Vec3.md)

The second vector.

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 representing the cross product of the two vectors.

#### Defined in

[shared/utils/Vector3.ts:260](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/Vector3.ts#L260)

***

### divide()

> `static` **divide**(`v1`, `v2`): [`Vector3`](Vector3.md)

Divides a vector by another vector or a number.

#### Parameters

• **v1**: [`Vec3`](../interfaces/Vec3.md)

The vector to divide.

• **v2**: [`NumerableVector3`](../type-aliases/NumerableVector3.md)

The vector or number to divide by.

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 representing the result of the division.

#### Defined in

[shared/utils/Vector3.ts:234](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/Vector3.ts#L234)

***

### dotProduct()

> `static` **dotProduct**(`v1`, `v2`): `number`

Calculates the dot product of two vectors.

#### Parameters

• **v1**: [`Vec3`](../interfaces/Vec3.md)

The first vector.

• **v2**: [`Vec3`](../interfaces/Vec3.md)

The second vector.

#### Returns

`number`

The dot product of the two vectors.

#### Defined in

[shared/utils/Vector3.ts:249](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/Vector3.ts#L249)

***

### multiply()

> `static` **multiply**(`v1`, `v2`): [`Vector3`](Vector3.md)

Multiplies two vectors or a vector and a number.

#### Parameters

• **v1**: [`Vec3`](../interfaces/Vec3.md)

The first vector.

• **v2**: [`NumerableVector3`](../type-aliases/NumerableVector3.md)

The second vector or number to multiply by.

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 representing the result of the multiplication.

#### Defined in

[shared/utils/Vector3.ts:219](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/Vector3.ts#L219)

***

### normalize()

> `static` **normalize**(`v`): [`Vector3`](Vector3.md)

Normalizes a vector, scaling it to have a length of 1.

#### Parameters

• **v**: [`Vector3`](Vector3.md)

The vector to normalize.

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 representing the normalized vector.

#### Defined in

[shared/utils/Vector3.ts:273](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/Vector3.ts#L273)

***

### subtract()

> `static` **subtract**(`v1`, `v2`): [`Vector3`](Vector3.md)

Subtracts a vector or a number from another vector.

#### Parameters

• **v1**: [`Vec3`](../interfaces/Vec3.md)

The vector to subtract from.

• **v2**: [`NumerableVector3`](../type-aliases/NumerableVector3.md)

The vector or number to subtract.

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 representing the result of the subtraction.

#### Defined in

[shared/utils/Vector3.ts:204](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/shared/utils/Vector3.ts#L204)
