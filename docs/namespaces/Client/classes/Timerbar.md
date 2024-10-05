[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Client](../README.md) / Timerbar

# Class: Timerbar

Create a Timerbar. It's automatically added to the internal Timerbar array and drawn in a FIFO (first in, first out) way.

```ts
// Create simple Timerbar
const myTimerbar = new Cfx.Timerbar("Hello");
myTimerbar.Text = "World";

// Disable Timerbar later on
myTimerbar.Visible = false;
```

## Constructors

### new Timerbar()

> **new Timerbar**(`title`, `useProgressBar`): [`Timerbar`](Timerbar.md)

Constructor for the Timerbar class.

#### Parameters

• **title**: `string`

The title of the Timerbar.

• **useProgressBar**: `boolean` = `false`

Whether to use a progress bar.

#### Returns

[`Timerbar`](Timerbar.md)

#### Defined in

[client/ui/Timerbar.ts:122](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Timerbar.ts#L122)

## Accessors

### PlayerStyle

> `get` **PlayerStyle**(): `boolean`

Gets the player style of the Timerbar.

> `set` **PlayerStyle**(`value`): `void`

Sets the player style of the Timerbar.

#### Parameters

• **value**: `boolean`

True to use player style, false otherwise.

#### Returns

`boolean`

True if using player style, false otherwise.

#### Defined in

[client/ui/Timerbar.ts:209](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Timerbar.ts#L209)

***

### Progress

> `get` **Progress**(): `number`

Gets the progress value of the Timerbar.

> `set` **Progress**(`value`): `void`

Sets the progress value of the Timerbar.

#### Parameters

• **value**: `number`

The new progress value, between 0.0 and 1.0.

#### Returns

`number`

The progress value, between 0.0 and 1.0.

#### Defined in

[client/ui/Timerbar.ts:255](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Timerbar.ts#L255)

***

### ProgressbarBgColor

> `get` **ProgressbarBgColor**(): `number` \| `number`[]

Gets the background color of the progress bar.

> `set` **ProgressbarBgColor**(`value`): `void`

Sets the background color of the progress bar.

#### Parameters

• **value**: `number` \| `number`[]

The new background color as an array or a number.

#### Returns

`number` \| `number`[]

The background color as an array or a number.

#### Defined in

[client/ui/Timerbar.ts:292](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Timerbar.ts#L292)

***

### ProgressbarFgColor

> `get` **ProgressbarFgColor**(): `number` \| `number`[]

Gets the foreground color of the progress bar.

> `set` **ProgressbarFgColor**(`value`): `void`

Sets the foreground color of the progress bar.

#### Parameters

• **value**: `number` \| `number`[]

The new foreground color as an array or a number.

#### Returns

`number` \| `number`[]

The foreground color as an array or a number.

#### Defined in

[client/ui/Timerbar.ts:313](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Timerbar.ts#L313)

***

### Sprite

> `get` **Sprite**(): [`Sprite`](Sprite.md)

Gets the sprite associated with the Timerbar.

#### Returns

[`Sprite`](Sprite.md)

The sprite object.

#### Defined in

[client/ui/Timerbar.ts:161](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Timerbar.ts#L161)

***

### Text

> `get` **Text**(): `string`

Gets the text of the Timerbar.

> `set` **Text**(`value`): `void`

Sets the text of the Timerbar.

#### Parameters

• **value**: `string`

The new text for the Timerbar.

#### Returns

`string`

The text as a string.

#### Defined in

[client/ui/Timerbar.ts:185](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Timerbar.ts#L185)

***

### TextColor

> `get` **TextColor**(): `number` \| `number`[]

Gets the text color of the Timerbar.

> `set` **TextColor**(`value`): `void`

Sets the text color of the Timerbar.

#### Parameters

• **value**: `number` \| `number`[]

The new text color as an array or a number.

#### Returns

`number` \| `number`[]

The text color as an array or a number.

#### Defined in

[client/ui/Timerbar.ts:271](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Timerbar.ts#L271)

***

### Title

> `get` **Title**(): `string`

Gets the title of the Timerbar.

> `set` **Title**(`value`): `void`

Sets the title of the Timerbar.

#### Parameters

• **value**: `string`

The new title for the Timerbar.

#### Returns

`string`

The title as a string.

#### Defined in

[client/ui/Timerbar.ts:169](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Timerbar.ts#L169)

***

### UseProgressBar

> `get` **UseProgressBar**(): `boolean`

Gets if the Timerbar is using a progress bar.

#### Returns

`boolean`

True if the Timerbar is using a progress bar, false otherwise.

#### Defined in

[client/ui/Timerbar.ts:201](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Timerbar.ts#L201)

***

### Visible

> `get` **Visible**(): `boolean`

Gets the visibility of the Timerbar.

> `set` **Visible**(`value`): `void`

Sets the visibility of the Timerbar.

#### Parameters

• **value**: `boolean`

True to make the Timerbar visible, false otherwise.

#### Returns

`boolean`

True if the Timerbar is visible, false otherwise.

#### Defined in

[client/ui/Timerbar.ts:225](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Timerbar.ts#L225)
