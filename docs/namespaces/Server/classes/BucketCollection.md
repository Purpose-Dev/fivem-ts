[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Server](../README.md) / BucketCollection

# Class: BucketCollection

Represents a collection of population-aware routing buckets.

In the context of a FiveM server, routing buckets are used to segregate entities and players into different
logical spaces that can operate independently. These buckets allow you to control entity routing, player visibility,
and interaction within the game world, with the added capability of managing population awareness.

## Constructors

### new BucketCollection()

> **new BucketCollection**(): [`BucketCollection`](BucketCollection.md)

Creates a new instance of the `BucketCollection` class.

#### Returns

[`BucketCollection`](BucketCollection.md)

#### Defined in

[server/models/BucketCollection.ts:17](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/BucketCollection.ts#L17)

## Accessors

### BucketCount

> `get` **BucketCount**(): `number`

Gets the count of buckets in the collection.

#### Returns

`number`

The number of buckets in the collection.

#### Defined in

[server/models/BucketCollection.ts:33](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/BucketCollection.ts#L33)

***

### Buckets

> `get` **Buckets**(): `Map`\<`number`, [`Bucket`](Bucket.md)\>

Gets the map of buckets.

#### Returns

`Map`\<`number`, [`Bucket`](Bucket.md)\>

A map where the key is the bucket ID and the value is the bucket.

#### Defined in

[server/models/BucketCollection.ts:24](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/BucketCollection.ts#L24)

## Methods

### addBucket()

> **addBucket**(`bucket`): `void`

Adds a new bucket to the collection.

#### Parameters

• **bucket**: [`Bucket`](Bucket.md)

The bucket to add to the collection.

#### Returns

`void`

#### Defined in

[server/models/BucketCollection.ts:78](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/BucketCollection.ts#L78)

***

### clear()

> **clear**(): `void`

Removes all buckets from the collection.

#### Returns

`void`

#### Defined in

[server/models/BucketCollection.ts:98](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/BucketCollection.ts#L98)

***

### createBucket()

> **createBucket**(`name`, `id`, `population`?, `entityLockdownMode`?): `void`

Create a new bucket and add it to the collection.

#### Parameters

• **name**: `string`

The name of the bucket.

• **id**: `number`

The unique identifier for the bucket.

• **population?**: `boolean`

(Optional) A flag to enable or disable population within the bucket. Defaults to `false`.

• **entityLockdownMode?**: [`BucketLockdownMode`](../enumerations/BucketLockdownMode.md)

(Optional) The mode controlling entity access within the bucket. Defaults to `BucketLockdownMode.Relaxed`.

#### Returns

`void`

#### Defined in

[server/models/BucketCollection.ts:64](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/BucketCollection.ts#L64)

***

### getAllBuckets()

> **getAllBuckets**(): [`Bucket`](Bucket.md)[]

Retrieves all buckets in the collection.

#### Returns

[`Bucket`](Bucket.md)[]

An array of all buckets in the collection.

#### Defined in

[server/models/BucketCollection.ts:42](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/BucketCollection.ts#L42)

***

### getBucket()

> **getBucket**(`bucketId`): [`Bucket`](Bucket.md)

Retrieves a bucket from the collection.

#### Parameters

• **bucketId**: `number`

The unique identifier of the bucket to retrieve.

#### Returns

[`Bucket`](Bucket.md)

The bucket with the specified identifier, or `undefined` if no such bucket exists.

#### Defined in

[server/models/BucketCollection.ts:52](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/BucketCollection.ts#L52)

***

### getEmptyBuckets()

> **getEmptyBuckets**(): [`Bucket`](Bucket.md)[]

Retrieves a list of buckets that are currently empty.

#### Returns

[`Bucket`](Bucket.md)[]

An array of buckets that are currently empty.

#### Defined in

[server/models/BucketCollection.ts:116](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/BucketCollection.ts#L116)

***

### getPopulatedBuckets()

> **getPopulatedBuckets**(): [`Bucket`](Bucket.md)[]

Retrieves a list of buckets that are currently populated.

#### Returns

[`Bucket`](Bucket.md)[]

An array of buckets that are currently populated.

#### Defined in

[server/models/BucketCollection.ts:107](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/BucketCollection.ts#L107)

***

### removeBucket()

> **removeBucket**(`bucketId`): `void`

Removes a bucket from the collection.

#### Parameters

• **bucketId**: `number`

The unique identifier of the bucket to remove.

#### Returns

`void`

#### Defined in

[server/models/BucketCollection.ts:89](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/server/models/BucketCollection.ts#L89)
