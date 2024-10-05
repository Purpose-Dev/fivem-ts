[**fivem-ts - Documentation v0.7.5**](../../../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../../../README.md) / [Client](../../../README.md) / [World](../README.md) / createProp

# Function: createProp()

> **createProp**(`model`, `position`, `dynamic`, `placeOnGround`): `Promise`\<[`Prop`](../../../classes/Prop.md)\>

Spawns a [[`Prop`]] at the given position.

## Parameters

• **model**: [`Model`](../../../classes/Model.md)

The [[`Model`]] to spawn (must be a Prop)

• **position**: [`Vector3`](../../../../Shared/classes/Vector3.md)

Location of Prop

• **dynamic**: `boolean`

If set to true, the Prop will have physics otherwise it's static.

• **placeOnGround**: `boolean`

If set to true, sets the Prop on the ground nearest to position.

## Returns

`Promise`\<[`Prop`](../../../classes/Prop.md)\>

## Example

```ts
const position = new Vector3(-802.311, 175.056, 72.8446);
const model = new Model("prop_barrel_02a");
const myBarrelProp = await World.createProp(model, position, false, true);
```

## Defined in

[client/World.ts:424](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/World.ts#L424)
