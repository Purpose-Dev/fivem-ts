[**fivem-ts - Documentation v0.6.0**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.6.0](../../../README.md) / [Server](../README.md) / Bucket

# Class: Bucket

Represents a population-aware routing bucket, also known as a 'dimension' or 'virtual world'.

In the context of a FiveM server, routing buckets are used to segregate entities and players into different
logical spaces that can operate independently. These buckets allow you to control entity routing, player visibility,
and interaction within the game world, with the added capability of managing population awareness.

## Constructors

### new Bucket()

> **new Bucket**(`bucketName`, `bucketId`, `bucketPopulation`?, `bucketEntityLockdownMode`?): [`Bucket`](Bucket.md)

Creates a new instance of the `Bucket` class.

#### Parameters

• **bucketName**: `string`

The name of the bucket.

• **bucketId**: `number`

The unique identifier for the bucket.

• **bucketPopulation?**: `boolean`

(Optional) A flag to enable or disable population within the bucket. Defaults to `false`.

• **bucketEntityLockdownMode?**: [`BucketLockdownMode`](../enumerations/BucketLockdownMode.md)

(Optional) The mode controlling entity access within the bucket. Defaults to `BucketLockdownMode.Relaxed`.

#### Returns

[`Bucket`](Bucket.md)

#### Defined in

[server/models/Bucket.ts:27](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Bucket.ts#L27)

## Accessors

### BucketEntityLockdownMode

> `get` **BucketEntityLockdownMode**(): [`BucketLockdownMode`](../enumerations/BucketLockdownMode.md)

Retrieves the current lockdown mode of the bucket entity.

> `set` **BucketEntityLockdownMode**(`mode`): `void`

Sets the lockdown mode for the bucket entity.

#### Parameters

• **mode**: [`BucketLockdownMode`](../enumerations/BucketLockdownMode.md)

The lockdown mode to be set for the bucket entity.

#### Returns

[`BucketLockdownMode`](../enumerations/BucketLockdownMode.md)

The current lockdown mode of the bucket entity.

#### Defined in

[server/models/Bucket.ts:81](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Bucket.ts#L81)

***

### BucketId

> `get` **BucketId**(): `number`

Gets the unique ID of the bucket.

#### Returns

`number`

The unique identifier of the bucket.

#### Defined in

[server/models/Bucket.ts:53](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Bucket.ts#L53)

***

### BucketName

> `get` **BucketName**(): `string`

Gets the name of the bucket.

#### Returns

`string`

The name of the bucket.

#### Defined in

[server/models/Bucket.ts:44](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Bucket.ts#L44)

***

### BucketPopulation

> `get` **BucketPopulation**(): `boolean`

Retrieves the current population status of the bucket.

> `set` **BucketPopulation**(`enabled`): `void`

Sets the bucket population state for this instance and updates the corresponding routing bucket.

#### Parameters

• **enabled**: `boolean`

A boolean flag indicating whether the bucket population should be enabled (true) or disabled (false).

#### Returns

`boolean`

The population status of the bucket.

#### Defined in

[server/models/Bucket.ts:62](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Bucket.ts#L62)

***

### Entities

> `get` **Entities**(): `number`[]

Gets a list of entity IDs currently assigned to the bucket.

#### Returns

`number`[]

An array of entity IDs.

#### Defined in

[server/models/Bucket.ts:100](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Bucket.ts#L100)

***

### Players

> `get` **Players**(): `string`[]

Gets a list of player IDs currently assigned to the bucket.

#### Returns

`string`[]

An array of player IDs.

#### Defined in

[server/models/Bucket.ts:109](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Bucket.ts#L109)

## Methods

### addEntity()

> **addEntity**(`entityId`): `boolean`

Adds an entity to the bucket if it is not already present.

#### Parameters

• **entityId**: `number`

The ID of the entity to add.

#### Returns

`boolean`

`true` if the entity was successfully added; `false` if the entity was already present.

#### Defined in

[server/models/Bucket.ts:119](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Bucket.ts#L119)

***

### addPlayer()

> **addPlayer**(`playerId`): `boolean`

Adds a player to the bucket if they are not already present.

#### Parameters

• **playerId**: `string`

The ID of the player to add.

#### Returns

`boolean`

`true` if the player was successfully added; `false` if the player was already present.

#### Defined in

[server/models/Bucket.ts:133](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/Bucket.ts#L133)
