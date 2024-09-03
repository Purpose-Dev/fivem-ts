[**fivem-ts - Documentation v0.4.1**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.4.1](../../../README.md) / [Client](../README.md) / Container

# Class: Container

Represents a drawable container that can hold and manage other drawable items.
The container has a position, size, and color, and it can draw itself and its child items on the screen.

## Implements

- [`IDrawable`](../interfaces/IDrawable.md)

## Constructors

### new Container()

> **new Container**(`pos`, `size`, `color`): [`Container`](Container.md)

Creates an instance of a `Container`.

#### Parameters

• **pos**: [`Point`](Point.md)

The position of the container on the screen.

• **size**: [`Size`](Size.md)

The size of the container.

• **color**: [`Color`](Color.md)

The color of the container.

#### Returns

[`Container`](Container.md)

#### Defined in

[client/ui/Container.ts:21](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Container.ts#L21)

## Properties

### color

> **color**: [`Color`](Color.md)

#### Implementation of

[`IDrawable`](../interfaces/IDrawable.md).[`color`](../interfaces/IDrawable.md#color)

#### Defined in

[client/ui/Container.ts:11](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Container.ts#L11)

***

### items

> **items**: [`IDrawable`](../interfaces/IDrawable.md)[] = `[]`

#### Defined in

[client/ui/Container.ts:12](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Container.ts#L12)

***

### pos

> **pos**: [`Point`](Point.md)

#### Implementation of

[`IDrawable`](../interfaces/IDrawable.md).[`pos`](../interfaces/IDrawable.md#pos)

#### Defined in

[client/ui/Container.ts:9](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Container.ts#L9)

***

### size

> **size**: [`Size`](Size.md)

#### Implementation of

[`IDrawable`](../interfaces/IDrawable.md).[`size`](../interfaces/IDrawable.md#size)

#### Defined in

[client/ui/Container.ts:10](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Container.ts#L10)

## Methods

### addItem()

> **addItem**(`item`): `void`

Adds a single drawable item to the container.

#### Parameters

• **item**: [`IDrawable`](../interfaces/IDrawable.md)

The drawable item to add.

#### Returns

`void`

#### Defined in

[client/ui/Container.ts:33](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Container.ts#L33)

***

### addItems()

> **addItems**(`items`): `void`

Adds multiple drawable items to the container.

#### Parameters

• **items**: [`IDrawable`](../interfaces/IDrawable.md)[]

An array of drawable items to add.

#### Returns

`void`

#### Defined in

[client/ui/Container.ts:42](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Container.ts#L42)

***

### draw()

> **draw**(`offset`?, `resolution`?): `void`

Draws the container and its contained items on the screen.

#### Parameters

• **offset?**: [`Size`](Size.md)

An optional size offset to apply when drawing the container.

• **resolution?**: [`Size`](Size.md)

The resolution of the screen. Defaults to a new `Size(0, 0)` if not provided.

#### Returns

`void`

#### Implementation of

[`IDrawable`](../interfaces/IDrawable.md).[`draw`](../interfaces/IDrawable.md#draw)

#### Defined in

[client/ui/Container.ts:52](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Container.ts#L52)
