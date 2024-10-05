[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Client](../README.md) / Sprite

# Class: Sprite

Represents a sprite, an object that can be drawn on the screen with a texture,
position, size, rotation, and color.

## Implements

- [`IDrawable`](../interfaces/IDrawable.md)

## Constructors

### new Sprite()

> **new Sprite**(`textureDict`, `textureName`, `pos`?, `size`?, `heading`?, `color`?): [`Sprite`](Sprite.md)

Creates an instance of a Sprite.

#### Parameters

• **textureDict**: `string`

The name of the texture dictionary.

• **textureName**: `string`

The name of the texture.

• **pos?**: [`Point`](Point.md)

The position of the sprite on the screen.

• **size?**: [`Size`](Size.md)

The size of the sprite.

• **heading?**: `number` = `0`

The heading (rotation) of the sprite in degrees. Default is 0.

• **color?**: [`Color`](Color.md)

The color of the sprite. Default is white.

#### Returns

[`Sprite`](Sprite.md)

#### Defined in

[client/ui/Sprite.ts:26](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Sprite.ts#L26)

## Properties

### color

> **color**: [`Color`](Color.md)

#### Implementation of

[`IDrawable`](../interfaces/IDrawable.md).[`color`](../interfaces/IDrawable.md#color)

#### Defined in

[client/ui/Sprite.ts:13](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Sprite.ts#L13)

***

### heading

> **heading**: `number`

#### Defined in

[client/ui/Sprite.ts:12](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Sprite.ts#L12)

***

### pos

> **pos**: [`Point`](Point.md)

#### Implementation of

[`IDrawable`](../interfaces/IDrawable.md).[`pos`](../interfaces/IDrawable.md#pos)

#### Defined in

[client/ui/Sprite.ts:10](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Sprite.ts#L10)

***

### size

> **size**: [`Size`](Size.md)

#### Implementation of

[`IDrawable`](../interfaces/IDrawable.md).[`size`](../interfaces/IDrawable.md#size)

#### Defined in

[client/ui/Sprite.ts:11](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Sprite.ts#L11)

***

### textureName

> **textureName**: `string`

#### Defined in

[client/ui/Sprite.ts:9](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Sprite.ts#L9)

***

### visible

> **visible**: `boolean`

#### Defined in

[client/ui/Sprite.ts:14](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Sprite.ts#L14)

## Accessors

### IsTextureDictionaryLoaded

> `get` **IsTextureDictionaryLoaded**(): `boolean`

Checks if the texture dictionary is loaded.

#### Returns

`boolean`

True if the texture dictionary is loaded, otherwise false.

#### Defined in

[client/ui/Sprite.ts:79](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Sprite.ts#L79)

***

### TextureDict

> `get` **TextureDict**(): `string`

Gets the texture dictionary name.

> `set` **TextureDict**(`v`): `void`

Sets the texture dictionary name and loads it if not already loaded.

#### Parameters

• **v**: `string`

The texture dictionary name.

#### Returns

`string`

The texture dictionary name as a string.

#### Defined in

[client/ui/Sprite.ts:60](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Sprite.ts#L60)

## Methods

### draw()

Draws the sprite on the screen with either the specified or current attributes.

#### Param

The screen resolution to use for scaling or the texture dictionary name.

#### Param

The texture name.

#### Param

The position to draw the sprite at.

#### Param

The size to draw the sprite with.

#### Param

The heading (rotation) of the sprite in degrees.

#### Param

The color to draw the sprite with.

#### Param

Whether to load the texture if not already loaded.

#### Param

The screen resolution to use for scaling.

#### draw(resolution)

> **draw**(`resolution`?): `void`

Draws the sprite on the screen.

##### Parameters

• **resolution?**: [`Size`](Size.md)

The screen resolution to use for scaling.

##### Returns

`void`

##### Param

The screen resolution to use for scaling or the texture dictionary name.

##### Param

The texture name.

##### Param

The position to draw the sprite at.

##### Param

The size to draw the sprite with.

##### Param

The heading (rotation) of the sprite in degrees.

##### Param

The color to draw the sprite with.

##### Param

Whether to load the texture if not already loaded.

##### Param

The screen resolution to use for scaling.

##### Implementation of

[`IDrawable`](../interfaces/IDrawable.md).[`draw`](../interfaces/IDrawable.md#draw)

##### Defined in

[client/ui/Sprite.ts:87](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Sprite.ts#L87)

#### draw(textureDictionary, textureName, pos, size, heading, color, loadTexture, resolution)

> **draw**(`textureDictionary`?, `textureName`?, `pos`?, `size`?, `heading`?, `color`?, `loadTexture`?, `resolution`?): `void`

Draws the sprite on the screen with the specified parameters.

##### Parameters

• **textureDictionary?**: `string`

The texture dictionary name.

• **textureName?**: `string`

The texture name.

• **pos?**: [`Point`](Point.md)

The position to draw the sprite at.

• **size?**: [`Size`](Size.md)

The size to draw the sprite with.

• **heading?**: `number`

The heading (rotation) of the sprite in degrees.

• **color?**: [`Color`](Color.md)

The color to draw the sprite with.

• **loadTexture?**: `boolean`

Whether to load the texture if not already loaded.

• **resolution?**: [`Size`](Size.md)

The screen resolution to use for scaling.

##### Returns

`void`

##### Param

The screen resolution to use for scaling or the texture dictionary name.

##### Param

The texture name.

##### Param

The position to draw the sprite at.

##### Param

The size to draw the sprite with.

##### Param

The heading (rotation) of the sprite in degrees.

##### Param

The color to draw the sprite with.

##### Param

Whether to load the texture if not already loaded.

##### Param

The screen resolution to use for scaling.

##### Implementation of

`IDrawable.draw`

##### Defined in

[client/ui/Sprite.ts:101](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Sprite.ts#L101)

***

### loadTextureDictionary()

> **loadTextureDictionary**(): `void`

Loads the texture dictionary required for the sprite.
This method will keep trying to load until the texture dictionary is loaded.

#### Returns

`void`

#### Defined in

[client/ui/Sprite.ts:47](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Sprite.ts#L47)
