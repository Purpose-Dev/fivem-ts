[**fivem-ts - Documentation v0.7.5**](../../../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../../../README.md) / [Client](../../../README.md) / [Game](../README.md) / setTimeScale

# Function: setTimeScale()

> **setTimeScale**(`time`): `void`

Adjusts the timescale.
Controls the flow of time within the system where 1 represents normal speed,
0 represents a full stop, and values between 0 and 1 represent slower speeds.

## Parameters

• **time**: `number`

A value between 0 and 1 that sets the new timescale.
                        If the provided value is outside this range, the timescale defaults to 1 (normal speed).

## Returns

`void`

## Defined in

[client/Game.ts:46](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/Game.ts#L46)
