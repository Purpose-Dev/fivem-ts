[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Client](../README.md) / PointF

# Class: PointF

Represents a point in 3D space with floating-point precision.

This class is used to define a point in a 3D coordinate system, typically in the context
of FiveM scripts, where coordinates in the game world are required. The `PointF` class
includes `x`, `y`, and `z` properties for the three axes.

## Example

```ts
const point = new PointF(100.5, 200.75, 300.25);
console.log(point.x); // Output: 100.5
console.log(point.y); // Output: 200.75
console.log(point.z); // Output: 300.25
```

## Constructors

### new PointF()

> **new PointF**(`x`, `y`, `z`): [`PointF`](PointF.md)

Creates an instance of `PointF`.

#### Parameters

• **x**: `number`

The x-coordinate of the point.

• **y**: `number`

The y-coordinate of the point.

• **z**: `number`

The z-coordinate of the point.

#### Returns

[`PointF`](PointF.md)

#### Defined in

[client/utils/PointF.ts:25](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/utils/PointF.ts#L25)

## Properties

### x

> **x**: `number`

The x-coordinate of the point.

#### Defined in

[client/utils/PointF.ts:26](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/utils/PointF.ts#L26)

***

### y

> **y**: `number`

The y-coordinate of the point.

#### Defined in

[client/utils/PointF.ts:27](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/utils/PointF.ts#L27)

***

### z

> **z**: `number`

The z-coordinate of the point.

#### Defined in

[client/utils/PointF.ts:28](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/utils/PointF.ts#L28)

## Methods

### empty()

> `static` **empty**(): [`PointF`](PointF.md)

Returns a `PointF` instance with all coordinates set to zero.

This is useful when you need a default or "empty" point in 3D space.

#### Returns

[`PointF`](PointF.md)

A `PointF` instance with `x`, `y`, and `z` all set to `0`.

#### Example

```ts
const emptyPoint = PointF.empty();
console.log(emptyPoint.x); // Output: 0
console.log(emptyPoint.y); // Output: 0
console.log(emptyPoint.z); // Output: 0
```

#### Defined in

[client/utils/PointF.ts:47](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/utils/PointF.ts#L47)
