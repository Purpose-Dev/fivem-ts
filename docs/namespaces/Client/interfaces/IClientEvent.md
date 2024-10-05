[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Client](../README.md) / IClientEvent

# Interface: IClientEvent

## Properties

### CEventName()

> **CEventName**: (`entities`, `eventEntity`, `data`) => `void`

#### Parameters

• **entities**: `number`[]

• **eventEntity**: `number`

• **data**: `unknown`[]

#### Returns

`void`

#### Defined in

[client/events/IClientEvent.ts:2](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/events/IClientEvent.ts#L2)

***

### entityDamaged()

> **entityDamaged**: (`victim`, `culprit`, `weapon`, `baseDamage`) => `void`

#### Parameters

• **victim**: `number`

• **culprit**: `number`

• **weapon**: `number`

• **baseDamage**: `number`

#### Returns

`void`

#### Defined in

[client/events/IClientEvent.ts:3](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/events/IClientEvent.ts#L3)

***

### gameEventTriggered()

> **gameEventTriggered**: (`name`, `data`) => `void`

#### Parameters

• **name**: `string`

• **data**: `number`[]

#### Returns

`void`

#### Defined in

[client/events/IClientEvent.ts:4](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/events/IClientEvent.ts#L4)

***

### mumbleConnected()

> **mumbleConnected**: (`address`, `reconnecting`) => `void`

#### Parameters

• **address**: `string`

• **reconnecting**: `boolean`

#### Returns

`void`

#### Defined in

[client/events/IClientEvent.ts:5](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/events/IClientEvent.ts#L5)

***

### mumbleDisconnected()

> **mumbleDisconnected**: (`address`) => `void`

#### Parameters

• **address**: `string`

#### Returns

`void`

#### Defined in

[client/events/IClientEvent.ts:6](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/events/IClientEvent.ts#L6)

***

### onClientResourceStart()

> **onClientResourceStart**: (`resource`) => `void`

#### Parameters

• **resource**: `string`

#### Returns

`void`

#### Defined in

[client/events/IClientEvent.ts:7](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/events/IClientEvent.ts#L7)

***

### onClientResourceStop()

> **onClientResourceStop**: (`resource`) => `void`

#### Parameters

• **resource**: `string`

#### Returns

`void`

#### Defined in

[client/events/IClientEvent.ts:8](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/events/IClientEvent.ts#L8)

***

### onResourceStart()

> **onResourceStart**: (`resource`) => `void`

#### Parameters

• **resource**: `string`

#### Returns

`void`

#### Defined in

[client/events/IClientEvent.ts:9](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/events/IClientEvent.ts#L9)

***

### onResourceStarting()

> **onResourceStarting**: (`resource`) => `void`

#### Parameters

• **resource**: `string`

#### Returns

`void`

#### Defined in

[client/events/IClientEvent.ts:10](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/events/IClientEvent.ts#L10)

***

### onResourceStop()

> **onResourceStop**: (`resource`) => `void`

#### Parameters

• **resource**: `string`

#### Returns

`void`

#### Defined in

[client/events/IClientEvent.ts:11](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/events/IClientEvent.ts#L11)

***

### populationPedCreating()

> **populationPedCreating**: (`x`, `y`, `z`, `model`, `overrideCalls`) => `void`

#### Parameters

• **x**: `number`

• **y**: `number`

• **z**: `number`

• **model**: `number`

• **overrideCalls**

• **overrideCalls.setModel**: `unknown`

• **overrideCalls.setPosition**: `unknown`

#### Returns

`void`

#### Defined in

[client/events/IClientEvent.ts:12](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/events/IClientEvent.ts#L12)
