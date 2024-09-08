[**fivem-ts - Documentation v0.6.0**](../../../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../../../README.md) / [Client](../../../README.md) / [Audio](../README.md) / playSoundAt

# Function: playSoundAt()

> **playSoundAt**(`position`, `sound`, `audioRef`?, `networked`?): `number`

Plays a sound at a specific 3D position.

## Parameters

• **position**: [`Vector3`](../../../../Shared/classes/Vector3.md)

The 3D position where the sound should be played.

• **sound**: `string`

The name of the sound to play.

• **audioRef?**: `string`

An optional audio reference for the sound.

• **networked?**: `boolean`

Specifies if the sound should be networked across clients. Default is `false`.

## Returns

`number`

The ID of the sound that was played.

## Defined in

[client/Audio.ts:22](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Audio.ts#L22)
