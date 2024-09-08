[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Client](../README.md) / Rectangle

# Class: Rectangle

Represents a rectangle that can be drawn on the screen.

## Implements

- [`IDrawable`](../interfaces/IDrawable.md)

## Constructors

### new Rectangle()

> **new Rectangle**(`pos`, `size`, `color`): [`Rectangle`](Rectangle.md)

Creates a new Rectangle instance.

#### Parameters

• **pos**: [`Point`](Point.md)

The position of the rectangle.

• **size**: [`Size`](Size.md)

The size of the rectangle.

• **color**: [`Color`](Color.md)

The color of the rectangle.

#### Returns

[`Rectangle`](Rectangle.md)

#### Defined in

[client/ui/Rectangle.ts:15](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Rectangle.ts#L15)

## Properties

### color

> **color**: [`Color`](Color.md)

The color of the rectangle.

#### Implementation of

[`IDrawable`](../interfaces/IDrawable.md).[`color`](../interfaces/IDrawable.md#color)

#### Defined in

[client/ui/Rectangle.ts:18](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Rectangle.ts#L18)

***

### pos

> **pos**: [`Point`](Point.md)

The position of the rectangle.

#### Implementation of

[`IDrawable`](../interfaces/IDrawable.md).[`pos`](../interfaces/IDrawable.md#pos)

#### Defined in

[client/ui/Rectangle.ts:16](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Rectangle.ts#L16)

***

### size

> **size**: [`Size`](Size.md)

The size of the rectangle.

#### Implementation of

[`IDrawable`](../interfaces/IDrawable.md).[`size`](../interfaces/IDrawable.md#size)

#### Defined in

[client/ui/Rectangle.ts:17](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Rectangle.ts#L17)

## Methods

### draw()

Internal draw function that handles the logic for drawing the rectangle.

#### Param

Either an offset size or a position point.

#### Param

The size to draw the rectangle with.

#### Param

The color to draw the rectangle with.

#### Param

An optional size specifying the resolution.

#### draw(offset, resolution)

> **draw**(`offset`?, `resolution`?): `void`

Draws the rectangle on the screen.

##### Parameters

• **offset?**: [`Size`](Size.md)

An optional size specifying an offset to use when drawing.

• **resolution?**: [`Size`](Size.md)

An optional size specifying the resolution.

##### Returns

`void`

##### Param

Either an offset size or a position point.

##### Param

The size to draw the rectangle with.

##### Param

The color to draw the rectangle with.

##### Param

An optional size specifying the resolution.

##### Implementation of

[`IDrawable`](../interfaces/IDrawable.md).[`draw`](../interfaces/IDrawable.md#draw)

##### Defined in

[client/ui/Rectangle.ts:27](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Rectangle.ts#L27)

#### draw(pos, size, color, resolution)

> **draw**(`pos`, `size`, `color`, `resolution`?): `void`

Draws the rectangle on the screen with the specified position, size, and color.

##### Parameters

• **pos**: [`Point`](Point.md)

The position to draw the rectangle at.

• **size**: [`Size`](Size.md)

The size to draw the rectangle with.

• **color**: [`Color`](Color.md)

The color to draw the rectangle with.

• **resolution?**: [`Size`](Size.md)

An optional size specifying the resolution.

##### Returns

`void`

##### Param

Either an offset size or a position point.

##### Param

The size to draw the rectangle with.

##### Param

The color to draw the rectangle with.

##### Param

An optional size specifying the resolution.

##### Implementation of

`IDrawable.draw`

##### Defined in

[client/ui/Rectangle.ts:37](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Rectangle.ts#L37)
