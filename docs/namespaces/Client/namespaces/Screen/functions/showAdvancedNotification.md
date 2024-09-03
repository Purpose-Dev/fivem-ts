[**fivem-ts - Documentation v0.4.1**](../../../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.4.1](../../../../../README.md) / [Client](../../../README.md) / [Screen](../README.md) / showAdvancedNotification

# Function: showAdvancedNotification()

> **showAdvancedNotification**(`message`, `title`, `subtitle`, `iconSet`, `icon`, `bgColor`?, `flashColor`?, `blinking`?, `type`?, `showInBrief`?, `sound`?): [`Notification`](../../../classes/Notification.md)

Displays an advanced notification on the screen.

## Parameters

• **message**: `string`

The message to display in the notification.

• **title**: `string`

The title of the notification.

• **subtitle**: `string`

The subtitle of the notification.

• **iconSet**: `string`

The icon set to use for the notification.

• **icon**: `string`

The icon to display in the notification.

• **bgColor?**: [`HudColors`](../../../enumerations/HudColors.md) = `HudColors.HudColourPauseBg`

The background color of the notification.

• **flashColor?**: [`Color`](../../../classes/Color.md) = `Color.empty`

The flash color of the notification.

• **blinking?**: `boolean` = `false`

Whether the notification should blink.

• **type?**: [`NotificationType`](../../../enumerations/NotificationType.md) = `NotificationType.Default`

The type of the notification.

• **showInBrief?**: `boolean` = `true`

Whether the notification should be shown in the brief.

• **sound?**: `boolean` = `true`

Whether a sound should play when the notification is shown.

## Returns

[`Notification`](../../../classes/Notification.md)

The created notification.

## Defined in

[client/ui/Screen.ts:147](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ui/Screen.ts#L147)
