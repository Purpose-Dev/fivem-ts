import { Vector3 } from '../../shared';

/**
 * Sets what happens when the entity is orphaned and no longer has its original owner.
 * **NOTE**: This native doesn't guarantee the persistence of the entity.
 * https://github.com/citizenfx/fivem/commit/db0d747a9c900d93e336028ee495ed87ea946c83#diff-ace4096b9336f866094d85230f5cbddd788ad5c158cac2bc613b872c55cb53f4R23
 * @enum {number}
 */
enum OrphanMode {
  /**
   * Default, this will delete the entity when it isn't relevant to any players
   * NOTE: this *doesn't* mean when they're no longer in scope
   */
  DeleteWhenNotRelevant = 0,
  /**
   * The entity will be deleted whenever its original owner disconnects
   * NOTE: if this is set when the entities original owner has already left it will be
   * marked for deletion (similar to just calling DELETE_ENTITY)
   */
  DeleteOnOwnerDisconnect = 1,
  /**
   * The entity will never be deleted by the server when it does relevancy checks
   * you should only use this on entities that need to be relatively persistent
   */
  KeepEntity = 2,
}

/**
 * Represents an entity.
 * Provides various methods and properties to access and manipulate the entity's state.
 */
export class Entity {
    /**
     * Retrieves an entity based on the provided network ID.
     *
     * @param {number} netId - The network identifier for the entity.
     * @return {Entity} - The entity corresponding to the given network ID.
     */
    public static getFromNetworkId(netId: number): Entity {
        return new Entity(NetworkGetEntityFromNetworkId(netId));
    }

    private readonly id: number;

    constructor(id: number) {
        this.id = id;
    }

    public get Id(): number {
        return this.id;
    }

    public get NetworkId(): number {
        return NetworkGetNetworkIdFromEntity(this.id);
    }

    public get Health(): number {
        return GetEntityHealth(this.id);
    }

    public get MaxHealth() {
        return GetEntityMaxHealth(this.id);
    }

    public get Position(): Vector3 {
        const coords: number[] = GetEntityCoords(this.id);
        return new Vector3(coords[0], coords[1], coords[2]);
    }

    public set Position(vector: Vector3) {
        SetEntityCoords(this.id, vector.x, vector.y, vector.z, false, false, false, true);
    }

    public get Rotation(): Vector3 {
        const rotation: number[] = GetEntityRotation(this.id);
        return new Vector3(rotation[0], rotation[1], rotation[2]);
    }

    public set Rotation(vector: Vector3) {
        SetEntityRotation(this.id, vector.x, vector.y, vector.z, 2, true);
    }

    public get Heading(): number {
        return GetEntityHeading(this.id);
    }

    public set Heading(value: number) {
        SetEntityHeading(this.id, value);
    }

    public get IsPositionFrozen() {
        return IsEntityPositionFrozen(this.id);
    }

    public set IsPositionFrozen(value: boolean) {
        FreezeEntityPosition(this.id, value);
    }

    public get Velocity(): Vector3 {
        const velocity: number[] = GetEntityVelocity(this.id);
        return new Vector3(velocity[0], velocity[1], velocity[2]);
    }

    public set Velocity(vector: Vector3) {
        SetEntityVelocity(this.id, vector.x, vector.y, vector.z);
    }

    public get RotationVelocity(): Vector3 {
        const velocity = GetEntityRotationVelocity(this.id);
        return new Vector3(velocity[0], velocity[1], velocity[2]);
    }

    public get Speed(): number {
        return GetEntitySpeed(this.id);
    }

    public get IsVisible(): boolean {
        return IsEntityVisible(this.id);
    }

    public get IsCollisionEnabled(): boolean {
        return !GetEntityCollisionDisabled(this.id);
    }

    /**
     * Checks if the entity with the current instance's ID exists.
     * @return {boolean} True if the entity exists, otherwise false.
     */
    public exists(): boolean {
        return DoesEntityExist(this.id);
    }

    /**
     * Deletes the current entity based on its id.
     *
     * @return {void} No return value.
     */
    public delete(): void {
        DeleteEntity(this.id);
    }
    public set EntityOrphanMode(value: OrphanMode) {
      SetEntityOrphanMode(this.id, value);
    }
    public get EntityOrphanMode(): number {
      return GetEntityOrphanMode(this.id);
    }
}