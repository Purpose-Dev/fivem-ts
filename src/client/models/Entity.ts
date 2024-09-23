import { Vector3, WeaponsHash } from '../../shared';
import { EntityBone, EntityBoneCollection, Ped, Prop, Vehicle } from '.';
import { Blip, Game, Model } from '../';
import { Quaternion } from '../utils';
import { ForceType } from '../enums';

/**
 * Represents an in-game entity with various properties and methods to interact with the underlying game engine.
 */
export class Entity {
    protected bones: EntityBoneCollection;

    constructor(protected handle: number) {
        this.handle = handle;
    }

    /**
     * Gets the handle value.
     *
     * @return The handle value as a number.
     */
    public get Handle(): number {
        return this.handle;
    }

    /**
     * Retrieves the EntityBoneCollection associated with this entity.
     *
     * @return {EntityBoneCollection} Entity Bone Collection of Entity
     */
    public get Bones(): EntityBoneCollection {
        if (!this.bones) {
            this.bones = new EntityBoneCollection(this);
        }
        return this.bones;
    }

    /**
     * Retrieves the network ID associated with the current entity.
     *
     * @return {number} The network ID of the entity.
     */
    public get NetworkId(): number {
        return NetworkGetNetworkIdFromEntity(this.handle);
    }

    /**
     * Retrieves the current health of the entity.
     *
     * @return {number} The health of the entity.
     */
    public get Health(): number {
        return GetEntityHealth(this.handle);
    }

    /**
     * Sets the health of the entity.
     *
     * @param {number} value - The health value to be set for the entity.
     */
    public set Health(value: number) {
        SetEntityHealth(this.handle, value);
    }

    /**
     * Retrieves the maximum health value of an entity.
     *
     * @return {number} The maximum health of the entity.
     */
    public get MaxHealth(): number {
        return GetEntityMaxHealth(this.handle);
    }

    /**
     * Sets the maximum health for the entity.
     *
     * @param {number} value - The maximum health value to be set for the entity.
     */
    public set MaxHealth(value: number) {
        SetEntityMaxHealth(this.handle, value);
    }

    /**
     * Checks whether the entity is dead.
     *
     * @return {boolean} Returns true if the entity is dead, otherwise false.
     */
    public get IsDead(): boolean {
        return IsEntityDead(this.handle);
    }

    /**
     * Checks the living status of the entity.
     *
     * @return {boolean} Returns true if the entity is alive, otherwise false.
     */
    public get IsAlive(): boolean {
        return !this.IsDead;
    }

    /**
     * Gets an instance of the Model class.
     *
     * @return {Model} A new instance of the Model class initialized with the entity model of the current handle.
     */
    public get Model(): Model {
        return new Model(GetEntityModel(this.handle));
    }

    /**
     * Gets the current position of the entity as a Vector3 object.
     *
     * @return {Vector3} The position of the entity in 3D space.
     */
    public get Position(): Vector3 {
        const coords: number[] = GetEntityCoords(this.handle, false);
        return new Vector3(coords[0], coords[1], coords[2]);
    }

    /**
     * Sets the position of the entity to the specified coordinates.
     *
     * @param {Vector3} vector - The vector containing the new coordinates (x, y, z).
     */
    public set Position(vector: Vector3) {
        SetEntityCoords(this.handle, vector.x, vector.y, vector.z, false, false, false, true);
    }

    /**
     * Retrieves the rotation of the entity as a Vector3.
     *
     * @return {Vector3} The rotation of the*/
    public get Rotation(): Vector3 {
        const rotation: number[] = GetEntityRotation(this.handle, 2);
        return new Vector3(rotation[0], rotation[1], rotation[2]);
    }

    /**
     * Sets the rotation of the entity.
     *
     * @param {Vector3} vector - The vector representing the new rotation angles (in degrees) for the entity.
     */
    public set Rotation(vector: Vector3) {
        SetEntityRotation(this.handle, vector.x, vector.y, vector.z, 2, true);
    }

    /**
     * Retrieves the quaternion for the current entity.
     *
     * @return {Quaternion} The quaternion representing the entity's orientation.
     */
    public get Quaternion(): Quaternion {
        const quaternion = GetEntityQuaternion(this.handle);
        return new Quaternion(quaternion[0], quaternion[1], quaternion[2], quaternion[3]);
    }

    /**
     * Sets the quaternion values for this entity.
     *
     * @param {Quaternion} quaternion - The quaternion object containing x, y, z, and w components.
     */
    public set Quaternion(quaternion: Quaternion) {
        SetEntityQuaternion(this.handle, quaternion.x, quaternion.y, quaternion.z, quaternion.w);
    }

    /**
     * Retrieves the current heading of the entity.
     *
     * @return {number} The heading of the entity.
     */
    public get Heading(): number {
        return GetEntityHeading(this.handle);
    }

    /**
     * Sets the heading of an entity to a specified value.
     *
     * @param {number} heading - The new heading value for the entity.
     */
    public set Heading(heading: number) {
        SetEntityHeading(this.handle, heading);
    }

    /**
     * Sets the frozen state of the entity's position.
     *
     * @param {boolean} value - If true, the entity's position will be frozen. If false, the entity's position will be unfrozen.
     */
    public set IsPositionFrozen(value: boolean) {
        FreezeEntityPosition(this.handle, value);
    }

    /**
     * Computes and returns the velocity of the entity as a Vector3*/
    public get Velocity(): Vector3 {
        const velocity = GetEntityVelocity(this.handle);
        return new Vector3(velocity[0], velocity[1], velocity[2]);
    }

    /**
     * Sets the velocity for the entity.
     *
     **/
    public set Velocity(velocity: Vector3) {
        SetEntityVelocity(this.handle, velocity.x, velocity.y, velocity.z);
    }

    /**
     * Retrieves the current rotation velocity of an entity.
     * The rotation velocity is represented as a Vector3 object.
     *
     * @return {Vector3} The rotation velocity of the entity.
     */
    public get RotationVelocity(): Vector3 {
        const velocity = GetEntityRotationVelocity(this.handle);
        return new Vector3(velocity[0], velocity[1], velocity[2]);
    }

    /**
     * Sets the maximum speed for the entity.
     *
     * @param {number} value - The maximum speed to be set for the entity.
     */
    public set MaxSpeed(value: number) {
        SetEntityMaxSpeed(this.handle, value);
    }

    /**
     * Sets whether the entity has gravity.
     *
     * @param {boolean} value - A boolean value indicating whether the entity should have gravity.
     */
    public set HasGravity(value: boolean) {
        SetEntityHasGravity(this.handle, value);
    }

    /**
     * Calculates and returns the height of the entity above the ground level.
     *
     * @return {number} The height of the entity above the ground.
     */
    public get HeightAboveGround(): number {
        return GetEntityHeightAboveGround(this.handle);
    }

    /**
     * Retrieves the submersion level of the entity as a number.
     *
     * @return {number} The submersion level of the entity, where a higher value indicates a greater degree of submersion.
     */
    public get SubmersionLevel(): number {
        return GetEntitySubmergedLevel(this.handle);
    }

    /**
     * Retrieves the Level of Detail (LOD) distance for the current entity.
     *
     * @return {number} The LOD distance of the entity.
     */
    public get LodDistance(): number {
        return GetEntityLodDist(this.handle);
    }

    /**
     * Sets the Level of Detail (LOD) distance for the entity.
     *
     * @param {number} value - The distance at which the entity will switch LOD models.
     */
    public set LodDistance(value: number) {
        SetEntityLodDist(this.handle, value);
    }

    /**
     * Check if the entity is currently visible.
     *
     * @return {boolean} True if the entity is visible, otherwise false.
     */
    public get IsVisible(): boolean {
        return IsEntityVisible(this.handle);
    }

    /**
     * Sets the visibility of the entity.
     *
     * @param {boolean} value - A boolean value indicating whether the entity should be visible.
     */
    public set IsVisible(value: boolean) {
        SetEntityVisible(this.handle, value, false);
    }

    /**
     * Checks if the current entity is occluded.
     *
     * This method determines whether the entity associated with the current instance is occluded,
     * meaning it is blocked from view by other objects or entities.
     *
     * @return {boolean*/
    public get IsOccluded(): boolean {
        return IsEntityOccluded(this.handle);
    }

    /**
     * Checks if the entity represented by this object is currently visible on the screen.
     *
     * @return {boolean} True if the entity is on the screen, false otherwise.
     */
    public get IsOnScreen(): boolean {
        return IsEntityOnScreen(this.handle);
    }

    /**
     * Checks if the entity is in an upright position.
     *
     * @return {boolean} True if the entity is upright, false otherwise.
     */
    public get IsUpright(): boolean {
        return IsEntityUpright(this.handle, 0);
    }

    /**
     * Determines if the entity is upside down.
     * This method checks the orientation*/
    public get IsUpsideDown(): boolean {
        return IsEntityUpsidedown(this.handle);
    }

    /**
     * Determines if the entity is currently in the air.
     *
     * @return {boolean} A boolean value indicating whether the entity is airborne.
     */
    public get IsInAir(): boolean {
        return IsEntityInAir(this.handle);
    }

    /**
     * Determines if the entity represented by this instance is in water.
     *
     * @return {boolean} True if the entity is in water, otherwise false.
     */
    public get IsInWater(): boolean {
        return IsEntityInWater(this.handle);
    }

    /**
     * Determines whether the current entity is persistent.
     *
     * @return {boolean} True if the entity is persistent; otherwise, false.
     */
    public get IsPersistent(): boolean {
        return IsEntityAMissionEntity(this.handle);
    }

    /**
     *
     */
    public set IsPersistent(value: boolean) {
        if (value) {
            SetEntityAsMissionEntity(this.handle, true, false);
        } else {
            this.markAsNoLongerNeeded();
        }
    }

    /**
     * Checks if the entity is currently on fire.
     *
     * @return*/
    public get IsOnFire(): boolean {
        return IsEntityOnFire(this.handle);
    }

    /**
     * Sets the invincibility status of the entity.
     *
     * @param {boolean} value - A boolean value where true makes the entity invincible and false removes invincibility.
     */
    public set IsInvincible(value: boolean) {
        SetEntityInvincible(this.handle, value);
    }

    /**
     * Modifies the entity to only take damage from players.
     *
     * @param {boolean} value - If true, the entity will only be damaged by players; otherwise, it can be damaged by other sources.
     */
    public set IsOnlyDamagedByPlayer(value: boolean) {
        SetEntityOnlyDamagedByPlayer(this.handle, value);
    }

    /**
     * Retrieves the opacity level of the entity associated with this handle.
     *
     * @return The opacity level as a number, where 0 represents fully transparent and 255 represents fully opaque.
     */
    public get Opacity(): number {
        return GetEntityAlpha(this.handle);
    }

    /**
     * Sets the opacity (alpha value) of this entity.
     *
     * @param {number} value - The opacity value to set, where 0 is fully transparent and 255 is fully opaque.
     */
    public set Opacity(value: number) {
        SetEntityAlpha(this.handle, value, false);
    }

    /**
     *
     */
    public resetOpacity(): void {
        ResetEntityAlpha(this.handle);
    }

    /**
     * Checks if the entity with the specified handle has collided with anything.
     *
     * @return {boolean} Returns true if the entity has collided with anything, otherwise false.
     */
    public get HasCollided(): boolean {
        return HasEntityCollidedWithAnything(this.handle);
    }

    /**
     * Checks if collision is enabled for*/
    public get IsCollisionEnabled(): boolean {
        return !GetEntityCollisonDisabled(this.handle);
    }

    /**
     * Enables or disables collision detection for the entity.
     *
     * @param {boolean} value - A boolean indicating whether collision should be enabled (true) or disabled (false).
     */
    public set IsCollisionEnabled(value: boolean) {
        SetEntityCollision(this.handle, value, false);
    }

    /**
     * Sets whether the entity is recording collisions.
     *
     * @param {boolean} value - A boolean indicating whether the entity should record collisions.
     */
    public set IsRecordingCollisions(value: boolean) {
        SetEntityRecordsCollisions(this.handle, value);
    }

    /**
     * Retrieves the attached blip for the entity.
     * If a valid blip handle exists for the entity, it returns a new Blip instance; otherwise, it returns null.
     *
     * @return {Blip|null} The attached Blip instance or null if no valid blip exists.
     */
    public get AttachedBlip(): Blip {
        const handle: number = GetBlipFromEntity(this.handle);

        if (DoesBlipExist(handle)) {
            return new Blip(handle);
        }

        return null;
    }

    /**
     * Attaches a blip to the entity associated with this instance.
     *
     * @return {Blip} The newly created Blip associated with the entity.
     */
    public attachBlip(): Blip {
        return new Blip(AddBlipForEntity(this.handle));
    }

    /**
     * Sets the no-collision state between this entity and another entity.
     *
     * @param {Entity} entity - The entity with which collision state will be set.
     * @param {boolean} toggle - A boolean flag indicating whether to enable or disable the no-collision state.
     *
     * @return {void}
     */
    public setNoCollision(entity: Entity, toggle: boolean): void {
        SetEntityNoCollisionEntity(this.handle, entity.Handle, toggle);
    }

    /**
     * Checks if there is a clear line of sight to the specified entity.
     *
     * @param {Entity} entity - The entity to check line of sight to.
     * @param [traceType=17] - The type of trace to use for the line of sight check.
     *
     * @return {boolean} - Returns true if there is a clear line of sight to the entity, otherwise false.
     */
    public hasClearLosToEntity(entity: Entity, traceType = 17): boolean {
        return HasEntityClearLosToEntity(this.handle, entity.Handle, traceType);
    }

    /**
     * Determines if there is a clear line of sight (LOS) from the current entity to the specified entity in front.
     *
     * @param {Entity} entity - The target entity to check LOS against.
     *
     * @return {boolean} - True if there is a clear line of sight to the target entity, false otherwise.
     */
    public hasClearLosToEntityInFront(entity: Entity): boolean {
        return HasEntityClearLosToEntityInFront(this.handle, entity.Handle);
    }

    /**
     * Determines if the current entity has been damaged by the specified entity.
     *
     * @param {Entity} entity - The entity to check against for damage.
     *
     * @return {boolean} - Returns true if the current entity has been damaged by the specified entity, otherwise false.
     */
    public hasBeenDamagedBy(entity: Entity): boolean {
        return HasEntityBeenDamagedByEntity(this.handle, entity.Handle, true);
    }

    /**
     * Checks if the entity has been damaged by the specified weapon.
     *
     * @param {WeaponsHash} weapon - The weapon to check against.
     *
     * @return {boolean} - Returns true if the entity has been damaged by the weapon, otherwise false.
     */
    public hasBeenDamagedByWeapon(weapon: WeaponsHash): boolean {
        return HasEntityBeenDamagedByWeapon(this.handle, weapon.valueOf(), 0);
    }

    /**
     * Checks if the entity has been damaged by any weapon.
     *
     * @return {boolean} True if the entity has been damaged by any weapon; otherwise, false.
     */
    public hasBeenDamagedByAnyWeapon(): boolean {
        return HasEntityBeenDamagedByWeapon(this.handle, 0, 2);
    }

    /**
     * Checks if the entity has been damaged by any melee weapon.
     *
     * This method determines whether the entity, represented by the 'handle',
     * has sustained damage from any weapon falling under the melee category.
     *
     * @return {boolean} True if the entity has been damaged by any melee weapon; otherwise, false.
     */
    public hasBeenDamagedByAnyMeleeWeapon(): boolean {
        return HasEntityBeenDamagedByWeapon(this.handle, 0, 1);
    }

    /**
     * Clears the last recorded weapon damage for the entity.
     *
     * @return {void} This method does not return a value.
     */
    public clearLastWeaponDamage(): void {
        ClearEntityLastWeaponDamage(this.handle);
    }

    /**
     * Checks if the current entity is within the specified area defined by the minimum and maximum bounds.
     *
     * @param {Vector3} minBounds - A Vector3 object representing the minimum bounds of the area.
     * @param {Vector3} maxBounds - A Vector3 object representing the maximum bounds of the area.
     *
     * @return {boolean} - Returns true if the entity is within the specified area, otherwise false.
     */
    public isInArea(minBounds: Vector3, maxBounds: Vector3): boolean {
        return IsEntityInArea(
            this.handle,
            minBounds.x,
            minBounds.y,
            minBounds.z,
            maxBounds.x,
            maxBounds.y,
            maxBounds.z,
            false,
            false,
            0,
        );
    }

    /**
     * Determines if the entity is within an angled area specified by an origin point,
     * an edge point, and an angle.
     *
     * @param {Vector3} origin - The origin point of the angled area.
     * @param {Vector3} edge - The edge point defining the angled area's width.
     * @param {number} angle - The angle of the area.
     *
     * @return {boolean} - True if the entity is within the angled area, otherwise false.
     */
    public isInAngledArea(origin: Vector3, edge: Vector3, angle: number): boolean {
        return IsEntityInAngledArea(
            this.handle,
            origin.x,
            origin.y,
            origin.z,
            edge.x,
            edge.y,
            edge.z,
            angle,
            false,
            true,
            0,
        );
    }

    /**
     * Determines whether a given position is within a specified range of this object's position.
     *
     * @param {Vector3} position - The position to check against this object's position.
     * @param {number} range - The range within which to check.
     *
     * @return {boolean} Returns true if the given position is within the specified range, otherwise false.
     */
    public isInRangeOf(position: Vector3, range: number): boolean {
        const v = Vector3.subtract(this.Position, position);

        return v.dotProduct(v) < range * range;
    }

    /**
     * Checks if the current entity is near the specified entity within the given bounds.
     *
     * @param {Entity} entity - The entity to check proximity against.
     * @param {Vector3} bounds - The 3D vector specifying the bounds to check within.
     *
     * @return {boolean} - Returns true if the current entity is within the specified bounds of the target entity, otherwise false.
     */
    public isNearEntity(entity: Entity, bounds: Vector3): boolean {
        return IsEntityAtEntity(
            this.handle,
            entity.Handle,
            bounds.x,
            bounds.y,
            bounds.z,
            false,
            true,
            0,
        );
    }

    /**
     * Checks if the current entity is touching the specified entity.
     *
     * @param {Entity} entity - The entity to check against.
     *
     * @return {boolean} True if the current entity is touching the specified entity, otherwise false.
     */
    public isTouching(entity: Entity): boolean {
        return IsEntityTouchingEntity(this.handle, entity.Handle);
    }

    /**
     * Checks if the current entity is touching the specified model.
     *
     * @param {Model} model - The model to check against.
     *
     * @return {boolean} - Returns true if the entity is touching the model, otherwise false.
     */
    public isTouchingModel(model: Model): boolean {
        return IsEntityTouchingModel(this.handle, model.Hash);
    }

    /**
     * Calculates the world position offset from the entity's current position.
     *
     * @param {Vector3} offset - The local offset vector to be applied to the entity's position.
     *
     * @return {Vector3} The new world position vector after applying the given offset.
     */
    public getOffsetPosition(offset: Vector3): Vector3 {
        const o = GetOffsetFromEntityInWorldCoords(this.handle, offset.x, offset.y, offset.z);

        return new Vector3(o[0], o[1], o[2]);
    }

    /**
     * Calculates the position offset from the given world coordinates.
     *
     * @param {Vector3} worldCoords - The world coordinates to calculate the offset from.
     *
     * @return {Vector3} - The calculated position offset.
     */
    public getPositionOffset(worldCoords: Vector3): Vector3 {
        const o = GetOffsetFromEntityGivenWorldCoords(
            this.handle,
            worldCoords.x,
            worldCoords.y,
            worldCoords.z,
        );

        return new Vector3(o[0], o[1], o[2]);
    }

    /**
     * Attaches the current entity to a specified target entity at a given position and rotation.
     *
     * @param {Entity} entity - The target entity to attach to.
     * @param {Vector3} position - The position offset from the target entity.
     * @param {Vector3} rotation - The rotation offset from the target entity.
     *
     * @return {void}
     */
    public attachTo(entity: Entity, position: Vector3, rotation: Vector3): void {
        AttachEntityToEntity(
            this.handle,
            entity.Handle,
            -1,
            position.x,
            position.y,
            position.z,
            rotation.x,
            rotation.y,
            rotation.z,
            false,
            false,
            false,
            false,
            2,
            true,
        );
    }

    /**
     * Attaches the current entity to a specified bone of another entity with given position and rotation offsets.
     *
     * @param {EntityBone} entityBone - The bone of the target entity to attach this entity to.
     * @param {Vector3} position - The position offset relative to the bone position.
     * @param {Vector3} rotation - The rotation offset relative to the bone orientation.
     *
     * @return {void}
     */
    public attachToBone(entityBone: EntityBone, position: Vector3, rotation: Vector3): void {
        AttachEntityToEntity(
            this.handle,
            entityBone.Owner.Handle,
            -1,
            position.x,
            position.y,
            position.z,
            rotation.x,
            rotation.y,
            rotation.z,
            false,
            false,
            false,
            false,
            2,
            true,
        );
    }

    /**
     * Detaches the current entity from its parent, effectively making it independent.
     *
     * This method calls `DetachEntity` with parameters to ensure the entity is completely detached,
     * handling any necessary dependencies and housekeeping.
     *
     * @return {void} No return value.
     */
    public detach(): void {
        DetachEntity(this.handle, true, true);
    }

    /**
     * Determines if the entity is currently attached.
     *
     * @return {boolean} True if the entity is attached, otherwise false.
     */
    public isAttached(): boolean {
        return IsEntityAttached(this.handle);
    }

    /**
     * Checks whether the current entity is attached to the specified entity.
     *
     * @param {Entity} entity - The entity to which the current entity might be attached.
     *
     * @return {boolean} True if the current entity is attached to the specified entity, false otherwise.
     */
    public isAttachedTo(entity: Entity): boolean {
        return IsEntityAttachedToEntity(this.handle, entity.Handle);
    }

    /**
     * Returns the entity to which this entity is attached.
     *
     * @return {Entity} The entity that this entity is attached to.
     */
    public getEntityAttachedTo(): Entity {
        return Entity.fromHandle(GetEntityAttachedTo(this.handle));
    }

    /**
     * Applies a force to the entity in a specified direction and with a specified rotation.
     *
     * @param {Vector3} direction - The direction in which the force is to be applied.
     * @param {Vector3} rotation - The rotational force to be applied.
     * @param {ForceType} [forceType=ForceType.MaxForceRot2] - The type of force to be applied, default is MaxForceRot2.
     *
     * @return {void}
     */
    public applyForce(
        direction: Vector3,
        rotation: Vector3,
        forceType: ForceType = ForceType.MaxForceRot2,
    ): void {
        ApplyForceToEntity(
            this.handle,
            Number(forceType),
            direction.x,
            direction.y,
            direction.z,
            rotation.x,
            rotation.y,
            rotation.z,
            0,
            false,
            true,
            true,
            false,
            true,
        );
    }

    /**
     * Applies a force to an entity in a direction relative to its current rotation.
     *
     * @param {Vector3} direction - The direction vector in which the force is applied.
     * @param {Vector3} rotation - The rotation vector representing the entity's current rotation.
     * @param {ForceType} [forceType=ForceType.MaxForceRot2] - The type of force to be applied. Defaults to MaxForceRot2.
     * @return {void}
     */
    public applyForceRelative(
        direction: Vector3,
        rotation: Vector3,
        forceType: ForceType = ForceType.MaxForceRot2,
    ): void {
        ApplyForceToEntity(
            this.handle,
            Number(forceType),
            direction.x,
            direction.y,
            direction.z,
            rotation.x,
            rotation.y,
            rotation.z,
            0,
            true,
            true,
            true,
            false,
            true,
        );
    }

    /**
     * Removes all particle effects from the entity associated with this instance.
     *
     * @return {void} This method does not return a value.
     */
    public removeAllParticleEffects(): void {
        RemoveParticleFxFromEntity(this.handle);
    }

    /**
     * Checks if the entity exists in the current context.
     *
     * @return {boolean} True if the entity exists, otherwise false.
     */
    public exists(): boolean {
        return DoesEntityExist(this.handle);
    }

    /**
     * Deletes the current entity if it is not the player's entity.
     * The method first sets the entity as a mission entity and then deletes it.
     *
     * @return {void} No return value.
     */
    public delete(): void {
        if (this.handle !== Game.PlayerPed.Handle) {
            SetEntityAsMissionEntity(this.handle, false, true);
            DeleteEntity(this.handle);
        }
    }

    /**
     * Marks the entity as no longer needed by the game, which allows the game engine
     * to clean it up as necessary. This method effectively turns off the mission flag
     * for the entity and informs the system that it can regard this entity as disposable.
     *
     * @return {void} No return value.
     */
    public markAsNoLongerNeeded(): void {
        SetEntityAsMissionEntity(this.Handle, false, true);
        SetEntityAsNoLongerNeeded(this.Handle);
    }

    /**
     * Creates an instance of Ped, Vehicle, or Prop based on the given handle.
     *
     * @param {number} handle - The handle of the entity.
     * @return {Ped | Vehicle | Prop | null} - The corresponding Ped, Vehicle, or Prop instance, or null if the handle does not map to a known entity type.
     */
    public static fromHandle(handle: number): Ped | Vehicle | Prop {
        switch (GetEntityType(handle)) {
            case 1:
                return new Ped(handle);
            case 2:
                return new Vehicle(handle);
            case 3:
                return new Prop(handle);
        }

        return null;
    }

    /**
     * Converts a network identifier to a corresponding entity (Ped, Vehicle, or Prop).
     *
     * @param {number} networkId - The network identifier for the entity.
     * @return {Ped | Vehicle | Prop} - The entity corresponding to the given network identifier.
     */
    public static fromNetworkId(networkId: number): Ped | Vehicle | Prop {
        return this.fromHandle(NetworkGetEntityFromNetworkId(networkId));
    }
}
