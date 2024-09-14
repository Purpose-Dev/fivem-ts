import { Vector3 } from '../../shared';

/**
 * Represents an entity.
 * Provides various methods and properties to access and manipulate the entity's state.
 */
export class Entity {
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

    public exists(): boolean {
        return DoesEntityExist(this.id);
    }

    public delete(): void {
        DeleteEntity(this.id);
    }
}
