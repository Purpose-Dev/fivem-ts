[**fivem-ts - Documentation v0.5.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.5.5](../../../README.md) / [Client](../README.md) / Text

# Class: Text

The `Text` class is responsible for rendering text on the screen in FiveM.
It provides several customization options including font, color, alignment, and more.

Example usage:

```ts
import { Text } from 'fivem-ts/client/ui';
import { Point, Color } from 'fivem-ts/client/utils';
import { Font, Alignment } from 'fivem-ts/client/enums';

const myText = new Text(
    'Hello, World!',
    new Point(500, 500),
    1.5,
    new Color(255, 0, 0, 255),
    Font.ChaletLondon,
    Alignment.Centered,
    true,
    true,
);

myText.draw();
```

## Implements

- [`IDrawable`](../interfaces/IDrawable.md)

## Constructors

### new Text()

> **new Text**(`caption`, `pos`, `scale`, `color`, `font`, `alignment`, `dropShadow`, `outline`, `wordWrap`?): [`Text`](Text.md)

#### Parameters

• **caption**: `string`

Text to display

• **pos**: [`Point`](Point.md)

Position of text relative to alignment. In pixels.

• **scale**: `number` = `1`

Size of text. Default 1.0

• **color**: [`Color`](Color.md) = `Color.white`

Color of text. Default black.

• **font**: [`Font`](../enumerations/Font.md) = `Font.ChaletLondon`

Font of text. Default Chalet London.

• **alignment**: [`Alignment`](../enumerations/Alignment.md) = `Alignment.Left`

Alignment of text. Default Left.

• **dropShadow**: `boolean` = `false`

• **outline**: `boolean` = `false`

• **wordWrap?**: [`Size`](Size.md)

#### Returns

[`Text`](Text.md)

#### Defined in

[client/ui/Text.ts:55](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Text.ts#L55)

## Properties

### alignment

> **alignment**: [`Alignment`](../enumerations/Alignment.md)

#### Defined in

[client/ui/Text.ts:37](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Text.ts#L37)

***

### caption

> **caption**: `string`

#### Defined in

[client/ui/Text.ts:32](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Text.ts#L32)

***

### color

> **color**: [`Color`](Color.md)

#### Implementation of

[`IDrawable`](../interfaces/IDrawable.md).[`color`](../interfaces/IDrawable.md#color)

#### Defined in

[client/ui/Text.ts:35](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Text.ts#L35)

***

### dropShadow

> **dropShadow**: `boolean`

#### Defined in

[client/ui/Text.ts:38](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Text.ts#L38)

***

### font

> **font**: [`Font`](../enumerations/Font.md)

#### Defined in

[client/ui/Text.ts:36](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Text.ts#L36)

***

### outline

> **outline**: `boolean`

#### Defined in

[client/ui/Text.ts:39](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Text.ts#L39)

***

### pos

> **pos**: [`Point`](Point.md)

#### Implementation of

[`IDrawable`](../interfaces/IDrawable.md).[`pos`](../interfaces/IDrawable.md#pos)

#### Defined in

[client/ui/Text.ts:33](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Text.ts#L33)

***

### scale

> **scale**: `number`

#### Defined in

[client/ui/Text.ts:34](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Text.ts#L34)

***

### size

> **size**: [`Size`](Size.md)

#### Implementation of

[`IDrawable`](../interfaces/IDrawable.md).[`size`](../interfaces/IDrawable.md#size)

#### Defined in

[client/ui/Text.ts:41](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Text.ts#L41)

***

### wordWrap

> **wordWrap**: [`Size`](Size.md)

#### Defined in

[client/ui/Text.ts:40](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Text.ts#L40)

## Methods

### draw()

#### draw(offset, resolution)

> **draw**(`offset`?, `resolution`?): `void`

Draws the text on the screen with the specified properties.

This method can be used to draw text with specific parameters or by using the properties defined in the instance.

##### Parameters

• **offset?**: [`Size`](Size.md)

Optional offset from the original position.

• **resolution?**: [`Size`](Size.md)

Optional screen resolution to adapt the position and size.

##### Returns

`void`

##### Implementation of

[`IDrawable`](../interfaces/IDrawable.md).[`draw`](../interfaces/IDrawable.md#draw)

##### Defined in

[client/ui/Text.ts:85](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Text.ts#L85)

#### draw(caption, pos, scale, color, font, alignment, dropShadow, outline, wordWrap, resolution)

> **draw**(`caption`, `pos`, `scale`, `color`?, `font`?, `alignment`?, `dropShadow`?, `outline`?, `wordWrap`?, `resolution`?): `void`

Draws the text with overridden parameters.

##### Parameters

• **caption**: `string`

The text to display.

• **pos**: [`Point`](Point.md)

The position of the text.

• **scale**: `number`

The scale of the text.

• **color?**: [`Color`](Color.md)

The color of the text.

• **font?**: [`Font`](../enumerations/Font.md)

The font of the text.

• **alignment?**: [`Alignment`](../enumerations/Alignment.md)

The alignment of the text.

• **dropShadow?**: `boolean`

Whether to apply a drop shadow.

• **outline?**: `boolean`

Whether to apply an outline.

• **wordWrap?**: [`Size`](Size.md)

The word wrap size.

• **resolution?**: [`Size`](Size.md)

The screen resolution.

##### Returns

`void`

##### Implementation of

`IDrawable.draw`

##### Defined in

[client/ui/Text.ts:100](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Text.ts#L100)

***

### addLongString()

> `static` **addLongString**(`str`): `void`

Adds a long string to the text component, splitting it into chunks that can be rendered in GTA V.

#### Parameters

• **str**: `string`

The string to add.

#### Returns

`void`

#### Defined in

[client/ui/Text.ts:177](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Text.ts#L177)

***

### draw()

> `static` **draw**(`caption`, `pos`, `scale`, `color`, `font`, `alignment`, `dropShadow`, `outline`, `wordWrap`?, `resolution`?): `void`

Draws the text with the specified parameters.

This is a static method that can be used to draw text without needing to create an instance of `Text`.

#### Parameters

• **caption**: `string`

The text to display.

• **pos**: [`Point`](Point.md)

The position of the text on the screen.

• **scale**: `number` = `1`

The scale of the text.

• **color**: [`Color`](Color.md) = `Color.white`

The color of the text.

• **font**: [`Font`](../enumerations/Font.md) = `Font.ChaletLondon`

The font of the text.

• **alignment**: [`Alignment`](../enumerations/Alignment.md) = `Alignment.Left`

The alignment of the text.

• **dropShadow**: `boolean` = `false`

Whether to apply a drop shadow to the text.

• **outline**: `boolean` = `false`

Whether to apply an outline to the text.

• **wordWrap?**: [`Size`](Size.md)

The word wrap size for the text.

• **resolution?**: [`Size`](Size.md)

The screen resolution for scaling.

#### Returns

`void`

#### Defined in

[client/ui/Text.ts:202](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Text.ts#L202)
