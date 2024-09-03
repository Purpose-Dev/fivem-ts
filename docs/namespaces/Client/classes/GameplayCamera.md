[**fivem-ts - Documentation v0.4.1**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.4.1](../../../README.md) / [Client](../README.md) / GameplayCamera

# Class: `abstract` GameplayCamera

The current rendering gameplay camera

## Constructors

### new GameplayCamera()

> **new GameplayCamera**(): [`GameplayCamera`](GameplayCamera.md)

#### Returns

[`GameplayCamera`](GameplayCamera.md)

## Accessors

### ForwardVector

> `get` `static` **ForwardVector**(): [`Vector3`](../../Shared/classes/Vector3.md)

Get the forward vector of gameplay camera.

#### Returns

[`Vector3`](../../Shared/classes/Vector3.md)

#### Defined in

[client/GameplayCamera.ts:26](https://github.com/Purpose-Dev/fivem-ts/blob/af9f57481b70813a163451854c2103aaaed13195/src/client/GameplayCamera.ts#L26)

***

### Position

> `get` `static` **Position**(): [`Vector3`](../../Shared/classes/Vector3.md)

Get the world position of gameplay camera.

#### Returns

[`Vector3`](../../Shared/classes/Vector3.md)

#### Defined in

[client/GameplayCamera.ts:10](https://github.com/Purpose-Dev/fivem-ts/blob/af9f57481b70813a163451854c2103aaaed13195/src/client/GameplayCamera.ts#L10)

***

### RelativeHeading

> `get` `static` **RelativeHeading**(): `number`

Get heading of gameplay camera.

> `set` `static` **RelativeHeading**(`heading`): `void`

Get heading of gameplay camera.

#### Parameters

• **heading**: `number`

#### Returns

`number`

#### Defined in

[client/GameplayCamera.ts:56](https://github.com/Purpose-Dev/fivem-ts/blob/af9f57481b70813a163451854c2103aaaed13195/src/client/GameplayCamera.ts#L56)

***

### RelativePitch

> `get` `static` **RelativePitch**(): `number`

Get the pitch of the gameplay camera relative to player.

> `set` `static` **RelativePitch**(`pitch`): `void`

Set gameplay camera pitch relative to player.

#### Parameters

• **pitch**: `number`

#### Returns

`number`

#### Defined in

[client/GameplayCamera.ts:42](https://github.com/Purpose-Dev/fivem-ts/blob/af9f57481b70813a163451854c2103aaaed13195/src/client/GameplayCamera.ts#L42)

***

### Rotation

> `get` `static` **Rotation**(): [`Vector3`](../../Shared/classes/Vector3.md)

Get the rotation of gameplay camera.

#### Returns

[`Vector3`](../../Shared/classes/Vector3.md)

#### Defined in

[client/GameplayCamera.ts:18](https://github.com/Purpose-Dev/fivem-ts/blob/af9f57481b70813a163451854c2103aaaed13195/src/client/GameplayCamera.ts#L18)
