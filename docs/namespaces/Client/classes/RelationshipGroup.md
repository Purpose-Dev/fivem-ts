[**fivem-ts - Documentation v0.4.1**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.4.1](../../../README.md) / [Client](../README.md) / RelationshipGroup

# Class: RelationshipGroup

Class to create and manage a relationship group. Useful to manage behavior between Peds.

## Constructors

### new RelationshipGroup()

> **new RelationshipGroup**(`name`, `groupHash`?): [`RelationshipGroup`](RelationshipGroup.md)

Create a relationship group. Optionally pass a group hash.

#### Parameters

• **name**: `string`

Name of the relationship group.

• **groupHash?**: `number`

Optional custom group hash (default: 0).

#### Returns

[`RelationshipGroup`](RelationshipGroup.md)

#### Defined in

[client/RelationshipGroup.ts:18](https://github.com/Purpose-Dev/fivem-ts/blob/af9f57481b70813a163451854c2103aaaed13195/src/client/RelationshipGroup.ts#L18)

## Accessors

### Hash

> `get` **Hash**(): `number`

Gets the hash of the relationship group.

#### Returns

`number`

The hash of this object.

#### Defined in

[client/RelationshipGroup.ts:28](https://github.com/Purpose-Dev/fivem-ts/blob/af9f57481b70813a163451854c2103aaaed13195/src/client/RelationshipGroup.ts#L28)

## Methods

### clearRelationshipBetweenGroups()

> **clearRelationshipBetweenGroups**(`targetGroup`, `relationship`, `biDirectionally`): `void`

Clear the relationship between this relationship group and another.

#### Parameters

• **targetGroup**: [`RelationshipGroup`](RelationshipGroup.md)

The other relationship group.

• **relationship**: [`Relationship`](../enumerations/Relationship.md)

The desired relationship to clear.

• **biDirectionally**: `boolean` = `false`

Whether the target group should also clear the relationship.

#### Returns

`void`

#### Defined in

[client/RelationshipGroup.ts:68](https://github.com/Purpose-Dev/fivem-ts/blob/af9f57481b70813a163451854c2103aaaed13195/src/client/RelationshipGroup.ts#L68)

***

### getRelationshipBetweenGroups()

> **getRelationshipBetweenGroups**(`targetGroup`): [`Relationship`](../enumerations/Relationship.md)

Get the relationship between two relationship groups.

#### Parameters

• **targetGroup**: [`RelationshipGroup`](RelationshipGroup.md)

The other relationship group.

#### Returns

[`Relationship`](../enumerations/Relationship.md)

The relationship

#### Defined in

[client/RelationshipGroup.ts:38](https://github.com/Purpose-Dev/fivem-ts/blob/af9f57481b70813a163451854c2103aaaed13195/src/client/RelationshipGroup.ts#L38)

***

### remove()

> **remove**(): `void`

Remove this relationship group from the game. This will not delete this object.

#### Returns

`void`

#### Defined in

[client/RelationshipGroup.ts:83](https://github.com/Purpose-Dev/fivem-ts/blob/af9f57481b70813a163451854c2103aaaed13195/src/client/RelationshipGroup.ts#L83)

***

### setRelationshipBetweenGroups()

> **setRelationshipBetweenGroups**(`targetGroup`, `relationship`, `biDirectionally`): `void`

Set the relationship group between this relationship group and another one.

#### Parameters

• **targetGroup**: [`RelationshipGroup`](RelationshipGroup.md)

The other relationship group.

• **relationship**: [`Relationship`](../enumerations/Relationship.md)

The desired relationship.

• **biDirectionally**: `boolean` = `false`

If target group should have same relationship towards this.

#### Returns

`void`

#### Defined in

[client/RelationshipGroup.ts:49](https://github.com/Purpose-Dev/fivem-ts/blob/af9f57481b70813a163451854c2103aaaed13195/src/client/RelationshipGroup.ts#L49)
