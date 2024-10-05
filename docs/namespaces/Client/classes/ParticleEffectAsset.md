[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Client](../README.md) / ParticleEffectAsset

# Class: ParticleEffectAsset

## Constructors

### new ParticleEffectAsset()

> **new ParticleEffectAsset**(`assetName`): [`ParticleEffectAsset`](ParticleEffectAsset.md)

#### Parameters

• **assetName**: `string`

#### Returns

[`ParticleEffectAsset`](ParticleEffectAsset.md)

#### Defined in

[client/ParticleEffectAsset.ts:6](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ParticleEffectAsset.ts#L6)

## Accessors

### Asset

> `get` **Asset**(): `string`

#### Returns

`string`

#### Defined in

[client/ParticleEffectAsset.ts:12](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ParticleEffectAsset.ts#L12)

***

### AssetName

> `get` **AssetName**(): `string`

#### Returns

`string`

#### Defined in

[client/ParticleEffectAsset.ts:8](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ParticleEffectAsset.ts#L8)

***

### IsLoaded

> `get` **IsLoaded**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/ParticleEffectAsset.ts:16](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ParticleEffectAsset.ts#L16)

## Methods

### markAsNoLongerNeeded()

> **markAsNoLongerNeeded**(): `void`

#### Returns

`void`

#### Defined in

[client/ParticleEffectAsset.ts:24](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ParticleEffectAsset.ts#L24)

***

### request()

> **request**(`timeout`): `Promise`\<`boolean`\>

#### Parameters

• **timeout**: `number`

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[client/ParticleEffectAsset.ts:28](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ParticleEffectAsset.ts#L28)

***

### startLoopedAtCoords()

> **startLoopedAtCoords**(`effectName`, `position`, `rotation`, `scale`, `invertAxis`): `boolean`

#### Parameters

• **effectName**: `string`

• **position**: [`Vector3`](../../Shared/classes/Vector3.md)

• **rotation**: [`Vector3`](../../Shared/classes/Vector3.md) = `...`

• **scale**: `number` = `1.0`

• **invertAxis** = `...`

• **invertAxis.flags**: [`InvertAxisFlags`](../enumerations/InvertAxisFlags.md) = `InvertAxisFlags.None`

#### Returns

`boolean`

#### Defined in

[client/ParticleEffectAsset.ts:56](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ParticleEffectAsset.ts#L56)

***

### startLoopedOnEntity()

> **startLoopedOnEntity**(`effectName`, `entity`, `offset`, `rotation`, `scale`, `invertAxis`): `boolean`

#### Parameters

• **effectName**: `string`

• **entity**: [`Entity`](Entity.md)

• **offset**: [`Vector3`](../../Shared/classes/Vector3.md) = `...`

• **rotation**: [`Vector3`](../../Shared/classes/Vector3.md) = `...`

• **scale**: `number` = `1.0`

• **invertAxis** = `...`

• **invertAxis.flags**: [`InvertAxisFlags`](../enumerations/InvertAxisFlags.md) = `InvertAxisFlags.None`

#### Returns

`boolean`

#### Defined in

[client/ParticleEffectAsset.ts:145](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ParticleEffectAsset.ts#L145)

***

### startNetworkedLoopedOnEntity()

> **startNetworkedLoopedOnEntity**(`effectName`, `entity`, `offset`, `rotation`, `scale`, `invertAxis`): `boolean`

#### Parameters

• **effectName**: `string`

• **entity**: [`Entity`](Entity.md)

• **offset**: [`Vector3`](../../Shared/classes/Vector3.md) = `...`

• **rotation**: [`Vector3`](../../Shared/classes/Vector3.md) = `...`

• **scale**: `number` = `1.0`

• **invertAxis** = `...`

• **invertAxis.flags**: [`InvertAxisFlags`](../enumerations/InvertAxisFlags.md) = `InvertAxisFlags.None`

#### Returns

`boolean`

#### Defined in

[client/ParticleEffectAsset.ts:207](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ParticleEffectAsset.ts#L207)

***

### startNetworkedNonLoopedAtCoords()

> **startNetworkedNonLoopedAtCoords**(`effectName`, `position`, `rotation`, `scale`, `invertAxis`): `boolean`

#### Parameters

• **effectName**: `string`

• **position**: [`Vector3`](../../Shared/classes/Vector3.md)

• **rotation**: [`Vector3`](../../Shared/classes/Vector3.md) = `...`

• **scale**: `number` = `1.0`

• **invertAxis** = `...`

• **invertAxis.flags**: [`InvertAxisFlags`](../enumerations/InvertAxisFlags.md) = `InvertAxisFlags.None`

#### Returns

`boolean`

#### Defined in

[client/ParticleEffectAsset.ts:117](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ParticleEffectAsset.ts#L117)

***

### startNetworkedNonLoopedOnEntity()

> **startNetworkedNonLoopedOnEntity**(`effectName`, `entity`, `offset`, `rotation`, `scale`, `invertAxis`): `boolean`

#### Parameters

• **effectName**: `string`

• **entity**: [`Entity`](Entity.md)

• **offset**: [`Vector3`](../../Shared/classes/Vector3.md) = `...`

• **rotation**: [`Vector3`](../../Shared/classes/Vector3.md) = `...`

• **scale**: `number` = `1.0`

• **invertAxis** = `...`

• **invertAxis.flags**: [`InvertAxisFlags`](../enumerations/InvertAxisFlags.md) = `InvertAxisFlags.None`

#### Returns

`boolean`

#### Defined in

[client/ParticleEffectAsset.ts:239](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ParticleEffectAsset.ts#L239)

***

### startNonLoopedAtCoords()

> **startNonLoopedAtCoords**(`effectName`, `position`, `rotation`, `scale`, `invertAxis`): `boolean`

#### Parameters

• **effectName**: `string`

• **position**: [`Vector3`](../../Shared/classes/Vector3.md)

• **rotation**: [`Vector3`](../../Shared/classes/Vector3.md) = `...`

• **scale**: `number` = `1.0`

• **invertAxis** = `...`

• **invertAxis.flags**: [`InvertAxisFlags`](../enumerations/InvertAxisFlags.md) = `InvertAxisFlags.None`

#### Returns

`boolean`

#### Defined in

[client/ParticleEffectAsset.ts:87](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ParticleEffectAsset.ts#L87)

***

### startNonLoopedOnEntity()

> **startNonLoopedOnEntity**(`effectName`, `entity`, `offset`, `rotation`, `scale`, `invertAxis`): `boolean`

#### Parameters

• **effectName**: `string`

• **entity**: [`Entity`](Entity.md)

• **offset**: [`Vector3`](../../Shared/classes/Vector3.md) = `...`

• **rotation**: [`Vector3`](../../Shared/classes/Vector3.md) = `...`

• **scale**: `number` = `1.0`

• **invertAxis** = `...`

• **invertAxis.flags**: [`InvertAxisFlags`](../enumerations/InvertAxisFlags.md) = `InvertAxisFlags.None`

#### Returns

`boolean`

#### Defined in

[client/ParticleEffectAsset.ts:177](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ParticleEffectAsset.ts#L177)

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### Defined in

[client/ParticleEffectAsset.ts:20](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/ParticleEffectAsset.ts#L20)
