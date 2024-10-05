[**fivem-ts - Documentation v0.7.5**](../../../README.md) • **Docs**

***

[fivem-ts - Documentation v0.7.5](../../../README.md) / [Client](../README.md) / Ped

# Class: Ped

Represents a pedestrian character (Ped) in the game world.

## Extends

- [`Entity`](Entity.md)

## Constructors

### new Ped()

> **new Ped**(`owner`): [`Ped`](Ped.md)

#### Parameters

• **owner**: `number`

#### Returns

[`Ped`](Ped.md)

#### Overrides

[`Entity`](Entity.md).[`constructor`](Entity.md#constructors)

#### Defined in

[client/models/Ped.ts:53](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L53)

## Accessors

### AttachedBlip

> `get` **AttachedBlip**(): [`Blip`](Blip.md)

Retrieves the attached blip for the entity.
If a valid blip handle exists for the entity, it returns a new Blip instance; otherwise, it returns null.

#### Returns

[`Blip`](Blip.md)

The attached Blip instance or null if no valid blip exists.

#### Inherited from

[`Entity`](Entity.md).[`AttachedBlip`](Entity.md#attachedblip)

#### Defined in

[client/models/Entity.ts:456](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L456)

***

### Bones

> `get` **Bones**(): [`PedBoneCollection`](PedBoneCollection.md)

Retrieves the EntityBoneCollection associated with this entity.

#### Returns

[`PedBoneCollection`](PedBoneCollection.md)

Entity Bone Collection of Entity

#### Overrides

[`Entity`](Entity.md).[`Bones`](Entity.md#bones)

#### Defined in

[client/models/Ped.ts:61](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L61)

***

### CanRagdoll

> `get` **CanRagdoll**(): `boolean`

> `set` **CanRagdoll**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:560](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L560)

***

### CurrentVehicle

> `get` **CurrentVehicle**(): [`Vehicle`](Vehicle.md)

#### Returns

[`Vehicle`](Vehicle.md)

#### Defined in

[client/models/Ped.ts:98](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L98)

***

### DrivingSpeed

> `set` **DrivingSpeed**(`value`): `void`

#### Parameters

• **value**: `number`

#### Defined in

[client/models/Ped.ts:379](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L379)

***

### DrivingStyle

> `get` **DrivingStyle**(): [`DrivingStyle`](../enumerations/DrivingStyle.md)

> `set` **DrivingStyle**(`style`): `void`

#### Parameters

• **style**: [`DrivingStyle`](../enumerations/DrivingStyle.md)

#### Returns

[`DrivingStyle`](../enumerations/DrivingStyle.md)

#### Defined in

[client/models/Ped.ts:69](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L69)

***

### DropsWeaponsOnDeath

> `set` **DropsWeaponsOnDeath**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Defined in

[client/models/Ped.ts:375](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L375)

***

### FiringPattern

> `set` **FiringPattern**(`value`): `void`

#### Parameters

• **value**: `number`

#### Defined in

[client/models/Ped.ts:371](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L371)

***

### Handle

> `get` **Handle**(): `number`

Gets the handle value.

#### Returns

`number`

The handle value as a number.

#### Inherited from

[`Entity`](Entity.md).[`Handle`](Entity.md#handle)

#### Defined in

[client/models/Entity.ts:22](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L22)

***

### HasCollided

> `get` **HasCollided**(): `boolean`

Checks if the entity with the specified handle has collided with anything.

#### Returns

`boolean`

Returns true if the entity has collided with anything, otherwise false.

#### Inherited from

[`Entity`](Entity.md).[`HasCollided`](Entity.md#hascollided)

#### Defined in

[client/models/Entity.ts:422](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L422)

***

### HasGravity

> `set` **HasGravity**(`value`): `void`

Sets whether the entity has gravity.

#### Parameters

• **value**: `boolean`

A boolean value indicating whether the entity should have gravity.

#### Inherited from

[`Entity`](Entity.md).[`HasGravity`](Entity.md#hasgravity)

#### Defined in

[client/models/Entity.ts:233](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L233)

***

### Heading

> `get` **Heading**(): `number`

Retrieves the current heading of the entity.

> `set` **Heading**(`heading`): `void`

Sets the heading of an entity to a specified value.

#### Parameters

• **heading**: `number`

The new heading value for the entity.

#### Returns

`number`

The heading of the entity.

#### Inherited from

[`Entity`](Entity.md).[`Heading`](Entity.md#heading)

#### Defined in

[client/models/Entity.ts:171](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L171)

***

### Health

> `get` **Health**(): `number`

Retrieves the current health of the entity.

> `set` **Health**(`health`): `void`

Retrieves the current health of the entity.

#### Parameters

• **health**: `number`

#### Returns

`number`

The health of the entity.

#### Overrides

[`Entity`](Entity.md).[`Health`](Entity.md#health)

#### Defined in

[client/models/Ped.ts:82](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L82)

***

### HeightAboveGround

> `get` **HeightAboveGround**(): `number`

Calculates and returns the height of the entity above the ground level.

#### Returns

`number`

The height of the entity above the ground.

#### Inherited from

[`Entity`](Entity.md).[`HeightAboveGround`](Entity.md#heightaboveground)

#### Defined in

[client/models/Entity.ts:242](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L242)

***

### IsAimingFromCover

> `get` **IsAimingFromCover**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:359](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L359)

***

### IsAlive

> `get` **IsAlive**(): `boolean`

Checks the living status of the entity.

#### Returns

`boolean`

Returns true if the entity is alive, otherwise false.

#### Inherited from

[`Entity`](Entity.md).[`IsAlive`](Entity.md#isalive)

#### Defined in

[client/models/Entity.ts:97](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L97)

***

### IsAmbientSpeechEnabled

> `get` **IsAmbientSpeechEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:319](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L319)

***

### IsAmbientSpeechPlaying

> `get` **IsAmbientSpeechPlaying**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:307](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L307)

***

### IsAnySpeechPlaying

> `get` **IsAnySpeechPlaying**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:315](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L315)

***

### IsBeingJacked

> `get` **IsBeingJacked**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:275](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L275)

***

### IsBeingStealthKilled

> `get` **IsBeingStealthKilled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:351](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L351)

***

### IsBeingStunned

> `get` **IsBeingStunned**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:347](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L347)

***

### IsClimbing

> `get` **IsClimbing**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:183](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L183)

***

### IsCollisionEnabled

> `get` **IsCollisionEnabled**(): `boolean`

Checks if collision is enabled for

> `set` **IsCollisionEnabled**(`value`): `void`

Enables or disables collision detection for the entity.

#### Parameters

• **value**: `boolean`

A boolean indicating whether collision should be enabled (true) or disabled (false).

#### Returns

`boolean`

#### Inherited from

[`Entity`](Entity.md).[`IsCollisionEnabled`](Entity.md#iscollisionenabled)

#### Defined in

[client/models/Entity.ts:428](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L428)

***

### IsCuffed

> `get` **IsCuffed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:141](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L141)

***

### IsDead

> `get` **IsDead**(): `boolean`

Checks whether the entity is dead.

#### Returns

`boolean`

Returns true if the entity is dead, otherwise false.

#### Inherited from

[`Entity`](Entity.md).[`IsDead`](Entity.md#isdead)

#### Defined in

[client/models/Entity.ts:88](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L88)

***

### IsDiving

> `get` **IsDiving**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:211](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L211)

***

### IsDoingDriveBy

> `get` **IsDoingDriveBy**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:339](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L339)

***

### IsDucking

> `get` **IsDucking**(): `boolean`

> `set` **IsDucking**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:175](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L175)

***

### IsEnemy

> `set` **IsEnemy**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Defined in

[client/models/Ped.ts:129](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L129)

***

### IsFalling

> `get` **IsFalling**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:191](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L191)

***

### IsFleeing

> `get` **IsFleeing**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:291](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L291)

***

### IsGettingIntoAVehicle

> `get` **IsGettingIntoAVehicle**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:279](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L279)

***

### IsGettingUp

> `get` **IsGettingUp**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:179](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L179)

***

### IsGoingIntoCover

> `get` **IsGoingIntoCover**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:343](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L343)

***

### IsHuman

> `get` **IsHuman**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:125](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L125)

***

### IsIdle

> `get` **IsIdle**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:153](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L153)

***

### IsInAir

> `get` **IsInAir**(): `boolean`

Determines if the entity is currently in the air.

#### Returns

`boolean`

A boolean value indicating whether the entity is airborne.

#### Inherited from

[`Entity`](Entity.md).[`IsInAir`](Entity.md#isinair)

#### Defined in

[client/models/Entity.ts:333](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L333)

***

### IsInBoat

> `get` **IsInBoat**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:263](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L263)

***

### IsInCombat

> `get` **IsInCombat**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:295](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L295)

***

### IsInCoverFacingLeft

> `get` **IsInCoverFacingLeft**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:367](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L367)

***

### IsInFlyingVehicle

> `get` **IsInFlyingVehicle**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:259](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L259)

***

### IsInGroup

> `get` **IsInGroup**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:449](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L449)

***

### IsInHeli

> `get` **IsInHeli**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:251](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L251)

***

### IsInjured

> `get` **IsInjured**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:287](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L287)

***

### IsInMeleeCombat

> `get` **IsInMeleeCombat**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:299](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L299)

***

### IsInParachuteFreeFall

> `get` **IsInParachuteFreeFall**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:215](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L215)

***

### IsInPlane

> `get` **IsInPlane**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:255](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L255)

***

### IsInPoliceVehicle

> `get` **IsInPoliceVehicle**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:267](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L267)

***

### IsInStealthMode

> `get` **IsInStealthMode**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:303](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L303)

***

### IsInSub

> `get` **IsInSub**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:239](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L239)

***

### IsInTaxi

> `get` **IsInTaxi**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:243](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L243)

***

### IsInTrain

> `get` **IsInTrain**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:247](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L247)

***

### IsInvincible

> `set` **IsInvincible**(`value`): `void`

Sets the invincibility status of the entity.

#### Parameters

• **value**: `boolean`

A boolean value where true makes the entity invincible and false removes invincibility.

#### Inherited from

[`Entity`](Entity.md).[`IsInvincible`](Entity.md#isinvincible)

#### Defined in

[client/models/Entity.ts:379](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L379)

***

### IsInWater

> `get` **IsInWater**(): `boolean`

Determines if the entity represented by this instance is in water.

#### Returns

`boolean`

True if the entity is in water, otherwise false.

#### Inherited from

[`Entity`](Entity.md).[`IsInWater`](Entity.md#isinwater)

#### Defined in

[client/models/Entity.ts:342](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L342)

***

### IsJacking

> `get` **IsJacking**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:271](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L271)

***

### IsJumping

> `get` **IsJumping**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:187](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L187)

***

### IsJumpingOutOfVehicle

> `get` **IsJumpingOutOfVehicle**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:113](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L113)

***

### IsOccluded

> `get` **IsOccluded**(): `boolean`

Checks if the current entity is occluded.

This method determines whether the entity associated with the current instance is occluded,
meaning it is blocked from view by other objects or entities.

#### Returns

`boolean`

#### Inherited from

[`Entity`](Entity.md).[`IsOccluded`](Entity.md#isoccluded)

#### Defined in

[client/models/Entity.ts:299](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L299)

***

### IsOnBike

> `get` **IsOnBike**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:231](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L231)

***

### IsOnFire

> `get` **IsOnFire**(): `boolean`

Checks if the entity is currently on fire.

#### Returns

`boolean`

#### Inherited from

[`Entity`](Entity.md).[`IsOnFire`](Entity.md#isonfire)

#### Defined in

[client/models/Entity.ts:370](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L370)

***

### IsOnFoot

> `get` **IsOnFoot**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:235](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L235)

***

### IsOnlyDamagedByPlayer

> `set` **IsOnlyDamagedByPlayer**(`value`): `void`

Modifies the entity to only take damage from players.

#### Parameters

• **value**: `boolean`

If true, the entity will only be damaged by players; otherwise, it can be damaged by other sources.

#### Inherited from

[`Entity`](Entity.md).[`IsOnlyDamagedByPlayer`](Entity.md#isonlydamagedbyplayer)

#### Defined in

[client/models/Entity.ts:388](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L388)

***

### IsOnScreen

> `get` **IsOnScreen**(): `boolean`

Checks if the entity represented by this object is currently visible on the screen.

#### Returns

`boolean`

True if the entity is on the screen, false otherwise.

#### Inherited from

[`Entity`](Entity.md).[`IsOnScreen`](Entity.md#isonscreen)

#### Defined in

[client/models/Entity.ts:308](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L308)

***

### IsPainAudioEnabled

> `set` **IsPainAudioEnabled**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Defined in

[client/models/Ped.ts:323](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L323)

***

### IsPerformingStealthKill

> `get` **IsPerformingStealthKill**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:355](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L355)

***

### IsPersistent

> `get` **IsPersistent**(): `boolean`

Determines whether the current entity is persistent.

> `set` **IsPersistent**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Returns

`boolean`

True if the entity is persistent; otherwise, false.

#### Inherited from

[`Entity`](Entity.md).[`IsPersistent`](Entity.md#ispersistent)

#### Defined in

[client/models/Entity.ts:351](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L351)

***

### IsPlantingBomb

> `get` **IsPlantingBomb**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:327](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L327)

***

### IsPlayer

> `get` **IsPlayer**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:137](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L137)

***

### IsPositionFrozen

> `set` **IsPositionFrozen**(`value`): `void`

Sets the frozen state of the entity's position.

#### Parameters

• **value**: `boolean`

If true, the entity's position will be frozen. If false, the entity's position will be unfrozen.

#### Inherited from

[`Entity`](Entity.md).[`IsPositionFrozen`](Entity.md#ispositionfrozen)

#### Defined in

[client/models/Entity.ts:189](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L189)

***

### IsPriorityTargetForEnemies

> `set` **IsPriorityTargetForEnemies**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Defined in

[client/models/Ped.ts:133](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L133)

***

### IsProne

> `get` **IsProne**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:167](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L167)

***

### IsRagdoll

> `get` **IsRagdoll**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:149](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L149)

***

### IsRecordingCollisions

> `set` **IsRecordingCollisions**(`value`): `void`

Sets whether the entity is recording collisions.

#### Parameters

• **value**: `boolean`

A boolean indicating whether the entity should record collisions.

#### Inherited from

[`Entity`](Entity.md).[`IsRecordingCollisions`](Entity.md#isrecordingcollisions)

#### Defined in

[client/models/Entity.ts:446](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L446)

***

### IsReloading

> `get` **IsReloading**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:335](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L335)

***

### IsRunning

> `get` **IsRunning**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:203](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L203)

***

### IsScriptedSpeechPlaying

> `get` **IsScriptedSpeechPlaying**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:311](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L311)

***

### IsShooting

> `get` **IsShooting**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:331](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L331)

***

### IsSprinting

> `get` **IsSprinting**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:207](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L207)

***

### IsStopped

> `get` **IsStopped**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:195](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L195)

***

### IsSwimming

> `get` **IsSwimming**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:219](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L219)

***

### IsSwimmingUnderWater

> `get` **IsSwimmingUnderWater**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:223](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L223)

***

### IsTryingToEnterALockedVehicle

> `get` **IsTryingToEnterALockedVehicle**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:283](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L283)

***

### IsUpright

> `get` **IsUpright**(): `boolean`

Checks if the entity is in an upright position.

#### Returns

`boolean`

True if the entity is upright, false otherwise.

#### Inherited from

[`Entity`](Entity.md).[`IsUpright`](Entity.md#isupright)

#### Defined in

[client/models/Entity.ts:317](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L317)

***

### IsUpsideDown

> `get` **IsUpsideDown**(): `boolean`

Determines if the entity is upside down.
This method checks the orientation

#### Returns

`boolean`

#### Inherited from

[`Entity`](Entity.md).[`IsUpsideDown`](Entity.md#isupsidedown)

#### Defined in

[client/models/Entity.ts:324](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L324)

***

### IsVaulting

> `get` **IsVaulting**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:227](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L227)

***

### IsVisible

> `get` **IsVisible**(): `boolean`

Check if the entity is currently visible.

> `set` **IsVisible**(`value`): `void`

Sets the visibility of the entity.

#### Parameters

• **value**: `boolean`

A boolean value indicating whether the entity should be visible.

#### Returns

`boolean`

True if the entity is visible, otherwise false.

#### Inherited from

[`Entity`](Entity.md).[`IsVisible`](Entity.md#isvisible)

#### Defined in

[client/models/Entity.ts:278](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L278)

***

### IsWalking

> `get` **IsWalking**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:199](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L199)

***

### IsWearingHelmet

> `get` **IsWearingHelmet**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:145](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L145)

***

### Jacker

> `get` **Jacker**(): [`Ped`](Ped.md)

#### Returns

[`Ped`](Ped.md)

#### Defined in

[client/models/Ped.ts:411](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L411)

***

### JackTarget

> `get` **JackTarget**(): [`Ped`](Ped.md)

#### Returns

[`Ped`](Ped.md)

#### Defined in

[client/models/Ped.ts:415](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L415)

***

### Killer

> `get` **Killer**(): [`Entity`](Entity.md)

#### Returns

[`Entity`](Entity.md)

#### Defined in

[client/models/Ped.ts:423](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L423)

***

### LastVehicle

> `get` **LastVehicle**(): [`Vehicle`](Vehicle.md)

#### Returns

[`Vehicle`](Vehicle.md)

#### Defined in

[client/models/Ped.ts:103](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L103)

***

### LodDistance

> `get` **LodDistance**(): `number`

Retrieves the Level of Detail (LOD) distance for the current entity.

> `set` **LodDistance**(`value`): `void`

Sets the Level of Detail (LOD) distance for the entity.

#### Parameters

• **value**: `number`

The distance at which the entity will switch LOD models.

#### Returns

`number`

The LOD distance of the entity.

#### Inherited from

[`Entity`](Entity.md).[`LodDistance`](Entity.md#loddistance)

#### Defined in

[client/models/Entity.ts:260](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L260)

***

### MaxDrivingSpeed

> `set` **MaxDrivingSpeed**(`value`): `void`

#### Parameters

• **value**: `number`

#### Defined in

[client/models/Ped.ts:121](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L121)

***

### MaxHealth

> `get` **MaxHealth**(): `number`

Retrieves the maximum health value of an entity.

> `set` **MaxHealth**(`amount`): `void`

Retrieves the maximum health value of an entity.

#### Parameters

• **amount**: `number`

#### Returns

`number`

The maximum health of the entity.

#### Overrides

[`Entity`](Entity.md).[`MaxHealth`](Entity.md#maxhealth)

#### Defined in

[client/models/Ped.ts:90](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L90)

***

### MaxSpeed

> `set` **MaxSpeed**(`value`): `void`

Sets the maximum speed for the entity.

#### Parameters

• **value**: `number`

The maximum speed to be set for the entity.

#### Inherited from

[`Entity`](Entity.md).[`MaxSpeed`](Entity.md#maxspeed)

#### Defined in

[client/models/Entity.ts:224](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L224)

***

### MeleeTarget

> `get` **MeleeTarget**(): [`Ped`](Ped.md)

#### Returns

[`Ped`](Ped.md)

#### Defined in

[client/models/Ped.ts:419](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L419)

***

### Model

> `get` **Model**(): [`Model`](Model.md)

Gets an instance of the Model class.

#### Returns

[`Model`](Model.md)

A new instance of the Model class initialized with the entity model of the current handle.

#### Inherited from

[`Entity`](Entity.md).[`Model`](Entity.md#model)

#### Defined in

[client/models/Entity.ts:106](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L106)

***

### NetworkId

> `get` **NetworkId**(): `number`

Retrieves the network ID associated with the current entity.

#### Returns

`number`

The network ID of the entity.

#### Inherited from

[`Entity`](Entity.md).[`NetworkId`](Entity.md#networkid)

#### Defined in

[client/models/Entity.ts:43](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L43)

***

### NeverLeavesGroup

> `set` **NeverLeavesGroup**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Defined in

[client/models/Ped.ts:453](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L453)

***

### Opacity

> `get` **Opacity**(): `number`

Retrieves the opacity level of the entity associated with this handle.

> `set` **Opacity**(`value`): `void`

Sets the opacity (alpha value) of this entity.

#### Parameters

• **value**: `number`

The opacity value to set, where 0 is fully transparent and 255 is fully opaque.

#### Returns

`number`

The opacity level as a number, where 0 represents fully transparent and 255 represents fully opaque.

#### Inherited from

[`Entity`](Entity.md).[`Opacity`](Entity.md#opacity)

#### Defined in

[client/models/Entity.ts:397](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L397)

***

### Position

> `get` **Position**(): [`Vector3`](../../Shared/classes/Vector3.md)

Gets the current position of the entity as a Vector3 object.

> `set` **Position**(`vector`): `void`

Sets the position of the entity to the specified coordinates.

#### Parameters

• **vector**: [`Vector3`](../../Shared/classes/Vector3.md)

The vector containing the new coordinates (x, y, z).

#### Returns

[`Vector3`](../../Shared/classes/Vector3.md)

The position of the entity in 3D space.

#### Inherited from

[`Entity`](Entity.md).[`Position`](Entity.md#position)

#### Defined in

[client/models/Entity.ts:115](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L115)

***

### Quaternion

> `get` **Quaternion**(): [`Quaternion`](Quaternion.md)

Retrieves the quaternion for the current entity.

> `set` **Quaternion**(`quaternion`): `void`

Sets the quaternion values for this entity.

#### Parameters

• **quaternion**: [`Quaternion`](Quaternion.md)

The quaternion object containing x, y, z, and w components.

#### Returns

[`Quaternion`](Quaternion.md)

The quaternion representing the entity's orientation.

#### Inherited from

[`Entity`](Entity.md).[`Quaternion`](Entity.md#quaternion)

#### Defined in

[client/models/Entity.ts:152](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L152)

***

### Rotation

> `get` **Rotation**(): [`Vector3`](../../Shared/classes/Vector3.md)

Retrieves the rotation of the entity as a Vector3.

> `set` **Rotation**(`vector`): `void`

Sets the rotation of the entity.

#### Parameters

• **vector**: [`Vector3`](../../Shared/classes/Vector3.md)

The vector representing the new rotation angles (in degrees) for the entity.

#### Returns

[`Vector3`](../../Shared/classes/Vector3.md)

The rotation of the

#### Inherited from

[`Entity`](Entity.md).[`Rotation`](Entity.md#rotation)

#### Defined in

[client/models/Entity.ts:133](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L133)

***

### RotationVelocity

> `get` **RotationVelocity**(): [`Vector3`](../../Shared/classes/Vector3.md)

Retrieves the current rotation velocity of an entity.
The rotation velocity is represented as a Vector3 object.

#### Returns

[`Vector3`](../../Shared/classes/Vector3.md)

The rotation velocity of the entity.

#### Inherited from

[`Entity`](Entity.md).[`RotationVelocity`](Entity.md#rotationvelocity)

#### Defined in

[client/models/Entity.ts:214](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L214)

***

### SpeechModifiersName

> `get` **SpeechModifiersName**(): `string`[]

#### Returns

`string`[]

#### Defined in

[client/models/Ped.ts:78](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L78)

***

### StaysInVehicleWhenJacked

> `set` **StaysInVehicleWhenJacked**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Defined in

[client/models/Ped.ts:117](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L117)

***

### SubmersionLevel

> `get` **SubmersionLevel**(): `number`

Retrieves the submersion level of the entity as a number.

#### Returns

`number`

The submersion level of the entity, where a higher value indicates a greater degree of submersion.

#### Inherited from

[`Entity`](Entity.md).[`SubmersionLevel`](Entity.md#submersionlevel)

#### Defined in

[client/models/Entity.ts:251](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L251)

***

### VehicleTryingToEnter

> `get` **VehicleTryingToEnter**(): [`Vehicle`](Vehicle.md)

#### Returns

[`Vehicle`](Vehicle.md)

#### Defined in

[client/models/Ped.ts:108](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L108)

***

### Velocity

> `get` **Velocity**(): [`Vector3`](../../Shared/classes/Vector3.md)

Computes and returns the velocity of the entity as a Vector3

> `set` **Velocity**(`velocity`): `void`

Sets the velocity for the entity.

#### Parameters

• **velocity**: [`Vector3`](../../Shared/classes/Vector3.md)

#### Returns

[`Vector3`](../../Shared/classes/Vector3.md)

#### Inherited from

[`Entity`](Entity.md).[`Velocity`](Entity.md#velocity)

#### Defined in

[client/models/Entity.ts:195](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L195)

## Methods

### applyDamage()

> **applyDamage**(`damageAmount`): `void`

#### Parameters

• **damageAmount**: `number`

#### Returns

`void`

#### Defined in

[client/models/Ped.ts:483](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L483)

***

### applyForce()

> **applyForce**(`direction`, `rotation`, `forceType`?): `void`

Applies a force to the entity in a specified direction and with a specified rotation.

#### Parameters

• **direction**: [`Vector3`](../../Shared/classes/Vector3.md)

The direction in which the force is to be applied.

• **rotation**: [`Vector3`](../../Shared/classes/Vector3.md)

The rotational force to be applied.

• **forceType?**: [`ForceType`](../enumerations/ForceType.md) = `ForceType.MaxForceRot2`

The type of force to be applied, default is MaxForceRot2.

#### Returns

`void`

#### Inherited from

[`Entity`](Entity.md).[`applyForce`](Entity.md#applyforce)

#### Defined in

[client/models/Entity.ts:807](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L807)

***

### applyForceRelative()

> **applyForceRelative**(`direction`, `rotation`, `forceType`?): `void`

Applies a force to an entity in a direction relative to its current rotation.

#### Parameters

• **direction**: [`Vector3`](../../Shared/classes/Vector3.md)

The direction vector in which the force is applied.

• **rotation**: [`Vector3`](../../Shared/classes/Vector3.md)

The rotation vector representing the entity's current rotation.

• **forceType?**: [`ForceType`](../enumerations/ForceType.md) = `ForceType.MaxForceRot2`

The type of force to be applied. Defaults to MaxForceRot2.

#### Returns

`void`

#### Inherited from

[`Entity`](Entity.md).[`applyForceRelative`](Entity.md#applyforcerelative)

#### Defined in

[client/models/Entity.ts:838](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L838)

***

### attachBlip()

> **attachBlip**(): [`Blip`](Blip.md)

Attaches a blip to the entity associated with this instance.

#### Returns

[`Blip`](Blip.md)

The newly created Blip associated with the entity.

#### Inherited from

[`Entity`](Entity.md).[`attachBlip`](Entity.md#attachblip)

#### Defined in

[client/models/Entity.ts:471](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L471)

***

### attachTo()

> **attachTo**(`entity`, `position`, `rotation`): `void`

Attaches the current entity to a specified target entity at a given position and rotation.

#### Parameters

• **entity**: [`Entity`](Entity.md)

The target entity to attach to.

• **position**: [`Vector3`](../../Shared/classes/Vector3.md)

The position offset from the target entity.

• **rotation**: [`Vector3`](../../Shared/classes/Vector3.md)

The rotation offset from the target entity.

#### Returns

`void`

#### Inherited from

[`Entity`](Entity.md).[`attachTo`](Entity.md#attachto)

#### Defined in

[client/models/Entity.ts:708](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L708)

***

### attachToBone()

> **attachToBone**(`entityBone`, `position`, `rotation`): `void`

Attaches the current entity to a specified bone of another entity with given position and rotation offsets.

#### Parameters

• **entityBone**: [`EntityBone`](EntityBone.md)

The bone of the target entity to attach this entity to.

• **position**: [`Vector3`](../../Shared/classes/Vector3.md)

The position offset relative to the bone position.

• **rotation**: [`Vector3`](../../Shared/classes/Vector3.md)

The rotation offset relative to the bone orientation.

#### Returns

`void`

#### Inherited from

[`Entity`](Entity.md).[`attachToBone`](Entity.md#attachtobone)

#### Defined in

[client/models/Entity.ts:737](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L737)

***

### cancelRagdoll()

> **cancelRagdoll**(): `void`

#### Returns

`void`

#### Defined in

[client/models/Ped.ts:597](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L597)

***

### clearBloodDamage()

> **clearBloodDamage**(): `void`

#### Returns

`void`

#### Defined in

[client/models/Ped.ts:445](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L445)

***

### clearLastWeaponDamage()

> **clearLastWeaponDamage**(): `void`

Clears the last recorded weapon damage for the entity.

#### Returns

`void`

This method does not return a value.

#### Overrides

[`Entity`](Entity.md).[`clearLastWeaponDamage`](Entity.md#clearlastweapondamage)

#### Defined in

[client/models/Ped.ts:499](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L499)

***

### clone()

> **clone**(`networked`): [`Ped`](Ped.md)

#### Parameters

• **networked**: `boolean`

#### Returns

[`Ped`](Ped.md)

#### Defined in

[client/models/Ped.ts:625](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L625)

***

### delete()

> **delete**(): `void`

Deletes the current entity if it is not the player's entity.
The method first sets the entity as a mission entity and then deletes it.

#### Returns

`void`

No return value.

#### Inherited from

[`Entity`](Entity.md).[`delete`](Entity.md#delete)

#### Defined in

[client/models/Entity.ts:885](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L885)

***

### detach()

> **detach**(): `void`

Detaches the current entity from its parent, effectively making it independent.

This method calls `DetachEntity` with parameters to ensure the entity is completely detached,
handling any necessary dependencies and housekeeping.

#### Returns

`void`

No return value.

#### Inherited from

[`Entity`](Entity.md).[`detach`](Entity.md#detach)

#### Defined in

[client/models/Entity.ts:765](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L765)

***

### exists()

> **exists**(): `boolean`

Checks if the entity exists in the current context.

#### Returns

`boolean`

True if the entity exists, otherwise false.

#### Inherited from

[`Entity`](Entity.md).[`exists`](Entity.md#exists)

#### Defined in

[client/models/Entity.ts:875](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L875)

***

### getConfigFlag()

> **getConfigFlag**(`flagId`): `boolean`

#### Parameters

• **flagId**: `number`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:613](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L613)

***

### getEntityAttachedTo()

> **getEntityAttachedTo**(): [`Entity`](Entity.md)

Returns the entity to which this entity is attached.

#### Returns

[`Entity`](Entity.md)

The entity that this entity is attached to.

#### Inherited from

[`Entity`](Entity.md).[`getEntityAttachedTo`](Entity.md#getentityattachedto)

#### Defined in

[client/models/Entity.ts:794](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L794)

***

### getLastWeaponImpactPosition()

> **getLastWeaponImpactPosition**(): [`Vector3`](../../Shared/classes/Vector3.md)

**`Experimental`**

Retrieves the last recorded impact position of a weapon.
To Check after v0.9.0 update

#### Returns

[`Vector3`](../../Shared/classes/Vector3.md)

The position where the last weapon impact occurred.

#### Defined in

[client/models/Ped.ts:554](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L554)

***

### getOffsetPosition()

> **getOffsetPosition**(`offset`): [`Vector3`](../../Shared/classes/Vector3.md)

Calculates the world position offset from the entity's current position.

#### Parameters

• **offset**: [`Vector3`](../../Shared/classes/Vector3.md)

The local offset vector to be applied to the entity's position.

#### Returns

[`Vector3`](../../Shared/classes/Vector3.md)

The new world position vector after applying the given offset.

#### Inherited from

[`Entity`](Entity.md).[`getOffsetPosition`](Entity.md#getoffsetposition)

#### Defined in

[client/models/Entity.ts:675](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L675)

***

### getPositionOffset()

> **getPositionOffset**(`worldCoords`): [`Vector3`](../../Shared/classes/Vector3.md)

Calculates the position offset from the given world coordinates.

#### Parameters

• **worldCoords**: [`Vector3`](../../Shared/classes/Vector3.md)

The world coordinates to calculate the offset from.

#### Returns

[`Vector3`](../../Shared/classes/Vector3.md)

- The calculated position offset.

#### Inherited from

[`Entity`](Entity.md).[`getPositionOffset`](Entity.md#getpositionoffset)

#### Defined in

[client/models/Entity.ts:688](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L688)

***

### giveHelmet()

> **giveHelmet**(`canBeRemoved`, `helmetType`, `textureIndex`): `void`

#### Parameters

• **canBeRemoved**: `boolean`

• **helmetType**: [`HelmetType`](../enumerations/HelmetType.md)

• **textureIndex**: `number`

#### Returns

`void`

#### Defined in

[client/models/Ped.ts:601](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L601)

***

### giveWeapon()

> **giveWeapon**(`weapon`, `ammoCount`?, `isHidden`?, `equipNow`?): `void`

Assigns a weapon to the character with specified properties.

#### Parameters

• **weapon**: [`WeaponsHash`](../../Shared/enumerations/WeaponsHash.md)

The type of weapon to give.

• **ammoCount?**: `number` = `999`

The amount of ammunition for the weapon.

• **isHidden?**: `boolean` = `false`

Whether the weapon should be hidden.

• **equipNow?**: `boolean` = `true`

Whether the weapon should be equipped immediately.

#### Returns

`void`

#### Defined in

[client/models/Ped.ts:515](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L515)

***

### hasBeenDamagedBy()

> **hasBeenDamagedBy**(`entity`): `boolean`

Determines if the current entity has been damaged by the specified entity.

#### Parameters

• **entity**: [`Entity`](Entity.md)

The entity to check against for damage.

#### Returns

`boolean`

- Returns true if the current entity has been damaged by the specified entity, otherwise false.

#### Inherited from

[`Entity`](Entity.md).[`hasBeenDamagedBy`](Entity.md#hasbeendamagedby)

#### Defined in

[client/models/Entity.ts:517](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L517)

***

### hasBeenDamagedByAnyMeleeWeapon()

> **hasBeenDamagedByAnyMeleeWeapon**(): `boolean`

Checks if the entity has been damaged by any melee weapon.

This method determines whether the entity, represented by the 'handle',
has sustained damage from any weapon falling under the melee category.

#### Returns

`boolean`

True if the entity has been damaged by any melee weapon; otherwise, false.

#### Overrides

[`Entity`](Entity.md).[`hasBeenDamagedByAnyMeleeWeapon`](Entity.md#hasbeendamagedbyanymeleeweapon)

#### Defined in

[client/models/Ped.ts:495](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L495)

***

### hasBeenDamagedByAnyWeapon()

> **hasBeenDamagedByAnyWeapon**(): `boolean`

Checks if the entity has been damaged by any weapon.

#### Returns

`boolean`

True if the entity has been damaged by any weapon; otherwise, false.

#### Overrides

[`Entity`](Entity.md).[`hasBeenDamagedByAnyWeapon`](Entity.md#hasbeendamagedbyanyweapon)

#### Defined in

[client/models/Ped.ts:491](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L491)

***

### hasBeenDamagedByWeapon()

> **hasBeenDamagedByWeapon**(`weapon`): `boolean`

Checks if the entity has been damaged by the specified weapon.

#### Parameters

• **weapon**: [`WeaponsHash`](../../Shared/enumerations/WeaponsHash.md)

The weapon to check against.

#### Returns

`boolean`

- Returns true if the entity has been damaged by the weapon, otherwise false.

#### Overrides

[`Entity`](Entity.md).[`hasBeenDamagedByWeapon`](Entity.md#hasbeendamagedbyweapon)

#### Defined in

[client/models/Ped.ts:487](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L487)

***

### hasClearLosToEntity()

> **hasClearLosToEntity**(`entity`, `traceType`?): `boolean`

Checks if there is a clear line of sight to the specified entity.

#### Parameters

• **entity**: [`Entity`](Entity.md)

The entity to check line of sight to.

• **traceType?**: `number` = `17`

The type of trace to use for the line of sight check.

#### Returns

`boolean`

- Returns true if there is a clear line of sight to the entity, otherwise false.

#### Inherited from

[`Entity`](Entity.md).[`hasClearLosToEntity`](Entity.md#hasclearlostoentity)

#### Defined in

[client/models/Entity.ts:495](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L495)

***

### hasClearLosToEntityInFront()

> **hasClearLosToEntityInFront**(`entity`): `boolean`

Determines if there is a clear line of sight (LOS) from the current entity to the specified entity in front.

#### Parameters

• **entity**: [`Entity`](Entity.md)

The target entity to check LOS against.

#### Returns

`boolean`

- True if there is a clear line of sight to the target entity, false otherwise.

#### Inherited from

[`Entity`](Entity.md).[`hasClearLosToEntityInFront`](Entity.md#hasclearlostoentityinfront)

#### Defined in

[client/models/Entity.ts:506](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L506)

***

### isAttached()

> **isAttached**(): `boolean`

Determines if the entity is currently attached.

#### Returns

`boolean`

True if the entity is attached, otherwise false.

#### Inherited from

[`Entity`](Entity.md).[`isAttached`](Entity.md#isattached)

#### Defined in

[client/models/Entity.ts:774](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L774)

***

### isAttachedTo()

> **isAttachedTo**(`entity`): `boolean`

Checks whether the current entity is attached to the specified entity.

#### Parameters

• **entity**: [`Entity`](Entity.md)

The entity to which the current entity might be attached.

#### Returns

`boolean`

True if the current entity is attached to the specified entity, false otherwise.

#### Inherited from

[`Entity`](Entity.md).[`isAttachedTo`](Entity.md#isattachedto)

#### Defined in

[client/models/Entity.ts:785](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L785)

***

### isHeadtracking()

> **isHeadtracking**(`entity`): `boolean`

#### Parameters

• **entity**: [`Entity`](Entity.md)

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:403](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L403)

***

### isInAngledArea()

> **isInAngledArea**(`origin`, `edge`, `angle`): `boolean`

Determines if the entity is within an angled area specified by an origin point,
an edge point, and an angle.

#### Parameters

• **origin**: [`Vector3`](../../Shared/classes/Vector3.md)

The origin point of the angled area.

• **edge**: [`Vector3`](../../Shared/classes/Vector3.md)

The edge point defining the angled area's width.

• **angle**: `number`

The angle of the area.

#### Returns

`boolean`

- True if the entity is within the angled area, otherwise false.

#### Inherited from

[`Entity`](Entity.md).[`isInAngledArea`](Entity.md#isinangledarea)

#### Defined in

[client/models/Entity.ts:595](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L595)

***

### isInAnyVehicle()

> **isInAnyVehicle**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:383](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L383)

***

### isInArea()

> **isInArea**(`minBounds`, `maxBounds`): `boolean`

Checks if the current entity is within the specified area defined by the minimum and maximum bounds.

#### Parameters

• **minBounds**: [`Vector3`](../../Shared/classes/Vector3.md)

A Vector3 object representing the minimum bounds of the area.

• **maxBounds**: [`Vector3`](../../Shared/classes/Vector3.md)

A Vector3 object representing the maximum bounds of the area.

#### Returns

`boolean`

- Returns true if the entity is within the specified area, otherwise false.

#### Inherited from

[`Entity`](Entity.md).[`isInArea`](Entity.md#isinarea)

#### Defined in

[client/models/Entity.ts:570](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L570)

***

### isInCombatAgainst()

> **isInCombatAgainst**(`target`): `boolean`

#### Parameters

• **target**: [`Ped`](Ped.md)

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:407](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L407)

***

### isInCover()

> **isInCover**(`expectUseWeapon`): `boolean`

#### Parameters

• **expectUseWeapon**: `boolean` = `false`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:363](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L363)

***

### isInRangeOf()

> **isInRangeOf**(`position`, `range`): `boolean`

Determines whether a given position is within a specified range of this object's position.

#### Parameters

• **position**: [`Vector3`](../../Shared/classes/Vector3.md)

The position to check against this object's position.

• **range**: `number`

The range within which to check.

#### Returns

`boolean`

Returns true if the given position is within the specified range, otherwise false.

#### Inherited from

[`Entity`](Entity.md).[`isInRangeOf`](Entity.md#isinrangeof)

#### Defined in

[client/models/Entity.ts:619](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L619)

***

### isInVehicle()

> **isInVehicle**(`vehicle`): `boolean`

#### Parameters

• **vehicle**: [`Vehicle`](Vehicle.md)

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:387](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L387)

***

### isNearEntity()

> **isNearEntity**(`entity`, `bounds`): `boolean`

Checks if the current entity is near the specified entity within the given bounds.

#### Parameters

• **entity**: [`Entity`](Entity.md)

The entity to check proximity against.

• **bounds**: [`Vector3`](../../Shared/classes/Vector3.md)

The 3D vector specifying the bounds to check within.

#### Returns

`boolean`

- Returns true if the current entity is within the specified bounds of the target entity, otherwise false.

#### Inherited from

[`Entity`](Entity.md).[`isNearEntity`](Entity.md#isnearentity)

#### Defined in

[client/models/Entity.ts:633](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L633)

***

### isSittingInAnyVehicle()

> **isSittingInAnyVehicle**(): `boolean`

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:391](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L391)

***

### isSittingInVehicle()

> **isSittingInVehicle**(`vehicle`): `boolean`

#### Parameters

• **vehicle**: [`Vehicle`](Vehicle.md)

#### Returns

`boolean`

#### Defined in

[client/models/Ped.ts:395](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L395)

***

### isTouching()

> **isTouching**(`entity`): `boolean`

Checks if the current entity is touching the specified entity.

#### Parameters

• **entity**: [`Entity`](Entity.md)

The entity to check against.

#### Returns

`boolean`

True if the current entity is touching the specified entity, otherwise false.

#### Inherited from

[`Entity`](Entity.md).[`isTouching`](Entity.md#istouching)

#### Defined in

[client/models/Entity.ts:653](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L653)

***

### isTouchingModel()

> **isTouchingModel**(`model`): `boolean`

Checks if the current entity is touching the specified model.

#### Parameters

• **model**: [`Model`](Model.md)

The model to check against.

#### Returns

`boolean`

- Returns true if the entity is touching the model, otherwise false.

#### Inherited from

[`Entity`](Entity.md).[`isTouchingModel`](Entity.md#istouchingmodel)

#### Defined in

[client/models/Entity.ts:664](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L664)

***

### kill()

> **kill**(): `void`

#### Returns

`void`

#### Defined in

[client/models/Ped.ts:427](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L427)

***

### leaveGroup()

> **leaveGroup**(): `void`

#### Returns

`void`

#### Defined in

[client/models/Ped.ts:457](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L457)

***

### markAsNoLongerNeeded()

> **markAsNoLongerNeeded**(): `void`

Marks the entity as no longer needed by the game, which allows the game engine
to clean it up as necessary. This method effectively turns off the mission flag
for the entity and informs the system that it can regard this entity as disposable.

#### Returns

`void`

No return value.

#### Inherited from

[`Entity`](Entity.md).[`markAsNoLongerNeeded`](Entity.md#markasnolongerneeded)

#### Defined in

[client/models/Entity.ts:899](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L899)

***

### openParachute()

> **openParachute**(): `void`

#### Returns

`void`

#### Defined in

[client/models/Ped.ts:609](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L609)

***

### playAmbientSpeed()

> **playAmbientSpeed**(`speechName`, `voiceName`, `modifier`): `void`

#### Parameters

• **speechName**: `string`

• **voiceName**: `string` = `''`

• **modifier**: [`SpeechModifier`](../enumerations/SpeechModifier.md) = `SpeechModifier.Standard`

#### Returns

`void`

#### Defined in

[client/models/Ped.ts:461](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L461)

***

### ragdoll()

> **ragdoll**(`duration`, `ragdollType`): `void`

#### Parameters

• **duration**: `number` = `-1`

• **ragdollType**: [`RagdollType`](../enumerations/RagdollType.md) = `RagdollType.Normal`

#### Returns

`void`

#### Defined in

[client/models/Ped.ts:568](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L568)

***

### ragdollWithFall()

> **ragdollWithFall**(`duration`, `ragdollType`, `position`): `void`

#### Parameters

• **duration**: `number` = `-1`

• **ragdollType**: [`RagdollType`](../enumerations/RagdollType.md) = `RagdollType.Normal`

• **position**: [`Vector3`](../../Shared/classes/Vector3.md) = `...`

#### Returns

`void`

#### Defined in

[client/models/Ped.ts:573](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L573)

***

### removeAllParticleEffects()

> **removeAllParticleEffects**(): `void`

Removes all particle effects from the entity associated with this instance.

#### Returns

`void`

This method does not return a value.

#### Inherited from

[`Entity`](Entity.md).[`removeAllParticleEffects`](Entity.md#removeallparticleeffects)

#### Defined in

[client/models/Entity.ts:866](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L866)

***

### removeAllWeapons()

> **removeAllWeapons**(): `void`

Removes all weapons from the current entity.

This method will strip the entity of all weapons it currently possesses.

#### Returns

`void`

#### Defined in

[client/models/Ped.ts:542](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L542)

***

### removeHelmet()

> **removeHelmet**(`instantly`): `void`

#### Parameters

• **instantly**: `boolean`

#### Returns

`void`

#### Defined in

[client/models/Ped.ts:605](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L605)

***

### removeWeapon()

> **removeWeapon**(`weapon`): `void`

Removes the specified weapon from the current entity.

#### Parameters

• **weapon**: [`WeaponsHash`](../../Shared/enumerations/WeaponsHash.md)

The hash of the weapon to be removed.

#### Returns

`void`

#### Defined in

[client/models/Ped.ts:531](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L531)

***

### resetConfigFlag()

> **resetConfigFlag**(`flagId`): `void`

#### Parameters

• **flagId**: `number`

#### Returns

`void`

#### Defined in

[client/models/Ped.ts:621](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L621)

***

### resetOpacity()

> **resetOpacity**(): `void`

#### Returns

`void`

#### Inherited from

[`Entity`](Entity.md).[`resetOpacity`](Entity.md#resetopacity)

#### Defined in

[client/models/Entity.ts:413](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L413)

***

### resetVisibleDamage()

> **resetVisibleDamage**(): `void`

#### Returns

`void`

#### Defined in

[client/models/Ped.ts:442](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L442)

***

### resurrect()

> **resurrect**(): `void`

#### Returns

`void`

#### Defined in

[client/models/Ped.ts:431](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L431)

***

### setConfigFlag()

> **setConfigFlag**(`flagId`, `value`): `void`

#### Parameters

• **flagId**: `number`

• **value**: `boolean`

#### Returns

`void`

#### Defined in

[client/models/Ped.ts:617](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L617)

***

### setIntoVehicle()

> **setIntoVehicle**(`vehicle`, `seat`): `void`

#### Parameters

• **vehicle**: [`Vehicle`](Vehicle.md)

• **seat**: [`VehicleSeat`](../../Shared/enumerations/VehicleSeat.md)

#### Returns

`void`

#### Defined in

[client/models/Ped.ts:399](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Ped.ts#L399)

***

### setNoCollision()

> **setNoCollision**(`entity`, `toggle`): `void`

Sets the no-collision state between this entity and another entity.

#### Parameters

• **entity**: [`Entity`](Entity.md)

The entity with which collision state will be set.

• **toggle**: `boolean`

A boolean flag indicating whether to enable or disable the no-collision state.

#### Returns

`void`

#### Inherited from

[`Entity`](Entity.md).[`setNoCollision`](Entity.md#setnocollision)

#### Defined in

[client/models/Entity.ts:483](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L483)

***

### fromHandle()

> `static` **fromHandle**(`handle`): [`Ped`](Ped.md) \| [`Vehicle`](Vehicle.md) \| [`Prop`](Prop.md)

Creates an instance of Ped, Vehicle, or Prop based on the given handle.

#### Parameters

• **handle**: `number`

The handle of the entity.

#### Returns

[`Ped`](Ped.md) \| [`Vehicle`](Vehicle.md) \| [`Prop`](Prop.md)

- The corresponding Ped, Vehicle, or Prop instance, or null if the handle does not map to a known entity type.

#### Inherited from

[`Entity`](Entity.md).[`fromHandle`](Entity.md#fromhandle)

#### Defined in

[client/models/Entity.ts:910](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L910)

***

### fromNetworkId()

> `static` **fromNetworkId**(`networkId`): [`Ped`](Ped.md) \| [`Vehicle`](Vehicle.md) \| [`Prop`](Prop.md)

Converts a network identifier to a corresponding entity (Ped, Vehicle, or Prop).

#### Parameters

• **networkId**: `number`

The network identifier for the entity.

#### Returns

[`Ped`](Ped.md) \| [`Vehicle`](Vehicle.md) \| [`Prop`](Prop.md)

- The entity corresponding to the given network identifier.

#### Inherited from

[`Entity`](Entity.md).[`fromNetworkId`](Entity.md#fromnetworkid)

#### Defined in

[client/models/Entity.ts:929](https://github.com/Purpose-Dev/fivem-ts/blob/main/src/client/models/Entity.ts#L929)
