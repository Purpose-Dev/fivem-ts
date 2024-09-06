[**fivem-ts - Documentation v0.5.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.5.5](../../../README.md) / [Client](../README.md) / Scaleform

# Class: Scaleform

Represents a Scaleform in FiveM.

Scaleforms are graphical elements that can be used to render UI components, notifications, or other visual effects in the game.
This class provides methods to manage and render scaleforms in different contexts such as 2D, 3D, or screen-space.

Example usage:

```ts
import { Scaleform } from 'fivem-ts/client/ui';

const scaleform = new Scaleform("MIDSIZED_MESSAGE");

scaleform.callFunction("SHOW_MIDSIZED_MESSAGE", ["Title", "Message"]);

setTick(async () => {
 await scaleform.render2D();
});
```

## Constructors

### new Scaleform()

> **new Scaleform**(`name`): [`Scaleform`](Scaleform.md)

Creates a new Scaleform instance.

#### Parameters

• **name**: `string`

The name of the scaleform movie to be loaded.

#### Returns

[`Scaleform`](Scaleform.md)

#### Defined in

[client/ui/Scaleform.ts:34](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Scaleform.ts#L34)

## Accessors

### Handle

> `get` **Handle**(): `number`

Gets the handle of the scaleform.

#### Returns

`number`

The handle of the scaleform.

#### Defined in

[client/ui/Scaleform.ts:44](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Scaleform.ts#L44)

***

### IsLoaded

> `get` **IsLoaded**(): `boolean`

Checks if the scaleform is loaded.

#### Returns

`boolean`

`true` if the scaleform is loaded; otherwise `false`.

#### Defined in

[client/ui/Scaleform.ts:62](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Scaleform.ts#L62)

***

### IsValid

> `get` **IsValid**(): `boolean`

Checks if the scaleform handle is valid.

#### Returns

`boolean`

`true` if the handle is not zero, indicating a valid handle; otherwise `false`.

#### Defined in

[client/ui/Scaleform.ts:53](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Scaleform.ts#L53)

## Methods

### callFunction()

> **callFunction**(`name`, ...`args`): `void`

Calls a function/method on the scaleform movie.

#### Parameters

• **name**: `string`

Name of the function to call.

• ...**args**: `unknown`[]

Additional arguments to pass to the function.

#### Returns

`void`

#### Defined in

[client/ui/Scaleform.ts:110](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Scaleform.ts#L110)

***

### dispose()

> **dispose**(): `void`

Disposes of the scaleform, freeing associated memory.

This method should be called when the scaleform is no longer needed.

#### Returns

`void`

#### Defined in

[client/ui/Scaleform.ts:75](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Scaleform.ts#L75)

***

### load()

> **load**(): `Promise`\<`boolean`\>

Loads the scaleform and waits until it is ready to be rendered.

#### Returns

`Promise`\<`boolean`\>

A promise that resolves with `true` if the scaleform is successfully loaded; otherwise `false` after 5 seconds.

#### Defined in

[client/ui/Scaleform.ts:261](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Scaleform.ts#L261)

***

### render2D()

> **render2D**(): `Promise`\<`void`\>

Renders the scaleform as a fullscreen 2D element.

This method should be called to draw the scaleform on the screen.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the rendering is complete.

#### Defined in

[client/ui/Scaleform.ts:143](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Scaleform.ts#L143)

***

### render2DScreenSpace()

> **render2DScreenSpace**(`location`, `size`): `Promise`\<`void`\>

Renders the scaleform in screen space with specified location and size.

#### Parameters

• **location**: [`PointF`](PointF.md)

The location on the screen where the scaleform should be rendered.

• **size**: [`PointF`](PointF.md)

The size of the scaleform on the screen.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the rendering is complete.

#### Defined in

[client/ui/Scaleform.ts:161](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Scaleform.ts#L161)

***

### render3D()

> **render3D**(`position`, `rotation`, `scale`): `Promise`\<`void`\>

Renders the scaleform in a 3D space.

#### Parameters

• **position**: [`Vector3`](../../Shared/classes/Vector3.md)

The position in 3D space where the scaleform should be rendered.

• **rotation**: [`Vector3`](../../Shared/classes/Vector3.md)

The rotation of the scaleform in 3D space.

• **scale**: [`Vector3`](../../Shared/classes/Vector3.md)

The scale of the scaleform in 3D space.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the rendering is complete.

#### Defined in

[client/ui/Scaleform.ts:196](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Scaleform.ts#L196)

***

### render3DAdditive()

> **render3DAdditive**(`position`, `rotation`, `scale`): `Promise`\<`void`\>

Renders the scaleform in a 3D space with additive blending.

#### Parameters

• **position**: [`Vector3`](../../Shared/classes/Vector3.md)

The position in 3D space where the scaleform should be rendered.

• **rotation**: [`Vector3`](../../Shared/classes/Vector3.md)

The rotation of the scaleform in 3D space.

• **scale**: [`Vector3`](../../Shared/classes/Vector3.md)

The scale of the scaleform in 3D space.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the rendering is complete.

#### Defined in

[client/ui/Scaleform.ts:230](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Scaleform.ts#L230)

***

### setDuration()

> **setDuration**(`duration`): `void`

Sets a duration for which the scaleform should be displayed.

This is useful for displaying temporary messages or notifications.

#### Parameters

• **duration**: `number`

Duration in milliseconds for which the scaleform should be displayed.

#### Returns

`void`

#### Defined in

[client/ui/Scaleform.ts:89](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Scaleform.ts#L89)
