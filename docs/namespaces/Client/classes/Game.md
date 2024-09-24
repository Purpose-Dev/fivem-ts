[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Client](../README.md) / Game

# Class: Game

Represents a Game with various methods to interact with and retrieve game-related data.

## Constructors

### new Game()

> **new Game**(): [`Game`](Game.md)

#### Returns

[`Game`](Game.md)

## Accessors

### CurrentInputMode

> `get` `static` **CurrentInputMode**(): [`InputMode`](../enumerations/InputMode.md)

#### Returns

[`InputMode`](../enumerations/InputMode.md)

#### Defined in

[client/Game.ts:156](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L156)

***

### FPS

> `get` `static` **FPS**(): `number`

#### Returns

`number`

#### Defined in

[client/Game.ts:43](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L43)

***

### FrameCount

> `get` `static` **FrameCount**(): `number`

#### Returns

`number`

#### Defined in

[client/Game.ts:35](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L35)

***

### GameTime

> `get` `static` **GameTime**(): `number`

#### Returns

`number`

#### Defined in

[client/Game.ts:27](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L27)

***

### IsCutsceneActive

> `get` `static` **IsCutsceneActive**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/Game.ts:136](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L136)

***

### IsCutscenePlaying

> `get` `static` **IsCutscenePlaying**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/Game.ts:140](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L140)

***

### IsLoading

> `get` `static` **IsLoading**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/Game.ts:152](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L152)

***

### IsMissionActive

> `get` `static` **IsMissionActive**(): `boolean`

> `set` `static` **IsMissionActive**(`toggle`): `void`

#### Parameters

• **toggle**: `boolean`

#### Returns

`boolean`

#### Defined in

[client/Game.ts:120](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L120)

***

### IsPaused

> `get` `static` **IsPaused**(): `boolean`

> `set` `static` **IsPaused**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Returns

`boolean`

#### Defined in

[client/Game.ts:144](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L144)

***

### IsRandomEventActive

> `get` `static` **IsRandomEventActive**(): `boolean`

> `set` `static` **IsRandomEventActive**(`toggle`): `void`

#### Parameters

• **toggle**: `boolean`

#### Returns

`boolean`

#### Defined in

[client/Game.ts:128](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L128)

***

### LastFrameTime

> `get` `static` **LastFrameTime**(): `number`

#### Returns

`number`

#### Defined in

[client/Game.ts:39](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L39)

***

### MaxWantedLevel

> `get` `static` **MaxWantedLevel**(): `number`

> `set` `static` **MaxWantedLevel**(`value`): `void`

#### Parameters

• **value**: `number`

#### Returns

`number`

#### Defined in

[client/Game.ts:82](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L82)

***

### NightVision

> `get` `static` **NightVision**(): `boolean`

> `set` `static` **NightVision**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Returns

`boolean`

#### Defined in

[client/Game.ts:104](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L104)

***

### Player

> `get` `static` **Player**(): [`Player`](Player.md)

#### Returns

[`Player`](Player.md)

#### Defined in

[client/Game.ts:47](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L47)

***

### PlayerPed

> `get` `static` **PlayerPed**(): [`Ped`](Ped.md)

#### Returns

[`Ped`](Ped.md)

#### Defined in

[client/Game.ts:57](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L57)

***

### PlayerVersusPlayer

> `get` `static` **PlayerVersusPlayer**(): `boolean`

Get whether PvP is enabled.

> `set` `static` **PlayerVersusPlayer**(`value`): `void`

Set whether PvP is enabled.

#### Parameters

• **value**: `boolean`

#### Returns

`boolean`

True if enabled.

#### Defined in

[client/Game.ts:71](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L71)

***

### RadioStation

> `get` `static` **RadioStation**(): [`RadioStation`](../../Shared/enumerations/RadioStation.md)

> `set` `static` **RadioStation**(`radioStation`): `void`

#### Parameters

• **radioStation**: [`RadioStation`](../../Shared/enumerations/RadioStation.md)

#### Returns

[`RadioStation`](../../Shared/enumerations/RadioStation.md)

#### Defined in

[client/Game.ts:160](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L160)

***

### ShowPoliceBlipsOnRadar

> `set` `static` **ShowPoliceBlipsOnRadar**(`toggle`): `void`

#### Parameters

• **toggle**: `boolean`

#### Defined in

[client/Game.ts:100](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L100)

***

### ThermalVision

> `get` `static` **ThermalVision**(): `boolean`

> `set` `static` **ThermalVision**(`toggle`): `void`

#### Parameters

• **toggle**: `boolean`

#### Returns

`boolean`

#### Defined in

[client/Game.ts:112](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L112)

***

### TimeScale

> `set` `static` **TimeScale**(`time`): `void`

#### Parameters

• **time**: `number`

#### Defined in

[client/Game.ts:31](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L31)

***

### WantedMultiplier

> `set` `static` **WantedMultiplier**(`value`): `void`

#### Parameters

• **value**: `number`

#### Defined in

[client/Game.ts:96](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L96)

## Methods

### disableAllControlsThisFrame()

> `static` **disableAllControlsThisFrame**(`inputMode`): `void`

Disables all control actions for the current frame based on the specified input mode.

#### Parameters

• **inputMode**: [`InputMode`](../enumerations/InputMode.md)

The input mode for which the controls should be disabled.

#### Returns

`void`

#### Defined in

[client/Game.ts:323](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L323)

***

### disableControlThisFrame()

> `static` **disableControlThisFrame**(`inputMode`, `control`): `void`

Disables a specific control for the current frame.

#### Parameters

• **inputMode**: [`InputMode`](../enumerations/InputMode.md)

The mode of input that should be disabled (e.g., keyboard, gamepad).

• **control**: [`Controls`](../enumerations/Controls.md)

The specific control within the input mode to be disabled.

#### Returns

`void`

#### Defined in

[client/Game.ts:301](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L301)

***

### enableAllControlsThisFrame()

> `static` **enableAllControlsThisFrame**(`inputMode`): `void`

Enables all control actions for the given input mode for the current frame.

#### Parameters

• **inputMode**: [`InputMode`](../enumerations/InputMode.md)

The input mode for which to enable all control actions.

#### Returns

`void`

#### Defined in

[client/Game.ts:312](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L312)

***

### enableControlThisFrame()

> `static` **enableControlThisFrame**(`inputMode`, `control`): `void`

Enables a specific control during the current frame for a given input mode.

#### Parameters

• **inputMode**: [`InputMode`](../enumerations/InputMode.md)

The input mode for which the control should be enabled.

• **control**: [`Controls`](../enumerations/Controls.md)

The control to enable for the specified input mode.

#### Returns

`void`

This method does not return a value.

#### Defined in

[client/Game.ts:289](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L289)

***

### generateHash()

> `static` **generateHash**(`input`): `number`

Generates a hash based on the input value.
If the input is a number, it will return the number directly.
If the input is a string, it will return the hashed key of the string.

#### Parameters

• **input**: `string` \| `number`

The value to be hashed, can be a string or a number.

#### Returns

`number`

The generated hash key or the input number.

#### Defined in

[client/Game.ts:19](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L19)

***

### isControlEnabled()

> `static` **isControlEnabled**(`inputMode`, `control`): `boolean`

Determines if a specific control is enabled in the given input mode.

#### Parameters

• **inputMode**: [`InputMode`](../enumerations/InputMode.md)

The mode in which input is being processed.

• **control**: [`Controls`](../enumerations/Controls.md)

The control being checked for enabled status.

#### Returns

`boolean`

Returns true if the control is enabled in the given input mode, otherwise false.

#### Defined in

[client/Game.ts:181](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L181)

***

### isControlJustPressed()

> `static` **isControlJustPressed**(`inputMode`, `control`): `boolean`

Checks if a control has just been pressed within the specified input mode.

#### Parameters

• **inputMode**: [`InputMode`](../enumerations/InputMode.md)

The input mode in which to check the control press.

• **control**: [`Controls`](../enumerations/Controls.md)

The specific control to check.

#### Returns

`boolean`

Returns true if the control has just been pressed, otherwise false.

#### Defined in

[client/Game.ts:205](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L205)

***

### isControlJustReleased()

> `static` **isControlJustReleased**(`inputMode`, `control`): `boolean`

Checks if the control has just been released in the specified input mode.

#### Parameters

• **inputMode**: [`InputMode`](../enumerations/InputMode.md)

The input mode to check (e.g., keyboard, gamepad).

• **control**: [`Controls`](../enumerations/Controls.md)

The specific control to check.

#### Returns

`boolean`

- Returns true if the control has just been released, false otherwise.

#### Defined in

[client/Game.ts:253](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L253)

***

### isControlPressed()

> `static` **isControlPressed**(`inputMode`, `control`): `boolean`

Checks if a specific control is currently being pressed.

#### Parameters

• **inputMode**: [`InputMode`](../enumerations/InputMode.md)

The mode of input to check for control press.

• **control**: [`Controls`](../enumerations/Controls.md)

The specific control to check.

#### Returns

`boolean`

- Returns true if the control is being pressed, otherwise false.

#### Defined in

[client/Game.ts:193](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L193)

***

### isControlReleased()

> `static` **isControlReleased**(`inputMode`, `control`): `boolean`

Checks if a specific control is released in the given input mode.

#### Parameters

• **inputMode**: [`InputMode`](../enumerations/InputMode.md)

The input mode for which the control release state is being checked.

• **control**: [`Controls`](../enumerations/Controls.md)

The control whose release state is being checked.

#### Returns

`boolean`

- Returns true if the control is released, otherwise false.

#### Defined in

[client/Game.ts:241](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L241)

***

### isDisabledControlJustPressed()

> `static` **isDisabledControlJustPressed**(`inputMode`, `control`): `boolean`

Checks if a disabled control has just been pressed.

#### Parameters

• **inputMode**: [`InputMode`](../enumerations/InputMode.md)

The input mode to check (e.g., keyboard, gamepad).

• **control**: [`Controls`](../enumerations/Controls.md)

The specific control to check for a press.

#### Returns

`boolean`

- Returns true if the specified disabled control was just pressed, false otherwise.

#### Defined in

[client/Game.ts:229](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L229)

***

### isDisabledControlJustReleased()

> `static` **isDisabledControlJustReleased**(`inputMode`, `control`): `boolean`

Checks if the specified control was just released while disabled.

#### Parameters

• **inputMode**: [`InputMode`](../enumerations/InputMode.md)

The input mode in which the control is being checked.

• **control**: [`Controls`](../enumerations/Controls.md)

The control that is being checked for release.

#### Returns

`boolean`

- Returns true if the specified disabled control was just released; otherwise, false.

#### Defined in

[client/Game.ts:277](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L277)

***

### isDisabledControlPressed()

> `static` **isDisabledControlPressed**(`inputMode`, `control`): `boolean`

Checks if a specific control is disabled and currently pressed down.

#### Parameters

• **inputMode**: [`InputMode`](../enumerations/InputMode.md)

The mode of input being used, such as keyboard or gamepad.

• **control**: [`Controls`](../enumerations/Controls.md)

The specific control to check, like a button or key.

#### Returns

`boolean`

Returns true if the control is both disabled and pressed; otherwise, false.

#### Defined in

[client/Game.ts:217](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L217)

***

### isDisabledControlReleased()

> `static` **isDisabledControlReleased**(`inputMode`, `control`): `boolean`

Checks if the specified control, when disabled, has been released in the given input mode.

#### Parameters

• **inputMode**: [`InputMode`](../enumerations/InputMode.md)

The mode of input being used (e.g., keyboard, gamepad).

• **control**: [`Controls`](../enumerations/Controls.md)

The control to check if it has been released.

#### Returns

`boolean`

`true` if the disabled control has been released; `false` otherwise.

#### Defined in

[client/Game.ts:265](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L265)

***

### playersList()

> `static` **playersList**(): `IterableIterator`\<[`Player`](Player.md)\>

#### Returns

`IterableIterator`\<[`Player`](Player.md)\>

#### Defined in

[client/Game.ts:61](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L61)
