[**fivem-ts - Documentation v0.7.5**](../../../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../../../README.md) / [Client](../../../README.md) / [LoadingPrompt](../README.md) / show

# Function: show()

> **show**(`loadingText`?, `spinnerType`?): `void`

Shows the loading prompt with an optional custom text and spinner type.
If the prompt is already active, it will be hidden and then shown again with the new settings.

## Parameters

• **loadingText?**: `string`

The text to display in the loading prompt. If not provided, no text will be displayed.

• **spinnerType?**: [`LoadingSpinnerType`](../../../enumerations/LoadingSpinnerType.md)

The type of spinner to display. If not provided, a default spinner is used.

## Returns

`void`

## Defined in

[client/ui/LoadingPrompt.ts:37](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/LoadingPrompt.ts#L37)
