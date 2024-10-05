import { Entity } from './models';
import { Vector3 } from '../shared';

/**
 * Class to manage ropes between entities.
 */
export class Rope {
    constructor(private readonly handle: number) {}

    /**
     * Retrieves the handle of the object.
     *
     * @return {number} The handle identifier.
     */
    public get Handle(): number {
        return this.handle;
    }

    /**
     * Gets the length of the rope.
     *
     * @return {number} The length of the rope.
     */
    public get Length(): number {
        return GetRopeLength(this.Handle);
    }

    /**
     * Sets the length of the rope force.
     *
     * @param {number} value - The desired length of the rope force.
     */
    public set Length(value: number) {
        RopeForceLength(this.Handle, value);
    }

    /**
     * Gets the count of vertices in the rope.
     *
     * @return {number} The number of vertices.
     */
    public get VertexCount(): number {
        return GetRopeVertexCount(this.Handle);
    }

    /**
     * Activates the physics simulation for the current object by calling the
     * ActivatePhysics function with the object's handle.
     *
     * @return {void}
     */
    public activatePhysics(): void {
        ActivatePhysics(this.Handle);
    }

    /**
     * Attaches an entity to the current object at a specified position.
     *
     * @param {Entity} entity - The entity to be attached.
     * @param {Vector3} position - The position where the entity should be attached.
     *
     * @return {void}
     */
    public attachEntity(entity: Entity, position: Vector3): void {
        AttachRopeToEntity(this.Handle, entity.Handle, position.x, position.y, position.z, false);
    }

    /**
     * Attaches two entities together at specified positions using a rope.
     *
     * @param {Entity} fEntity - The first entity to attach.
     * @param {Vector3} fPosition - The position to attach the first entity.
     * @param {Entity} sEntity - The second entity to attach.
     * @param {Vector3} sPosition - The position to attach the second entity.
     * @param {number} length - The length of the rope used to attach the entities.
     *
     * @return {void}
     */
    public attachEntities(
        fEntity: Entity,
        fPosition: Vector3,
        sEntity: Entity,
        sPosition: Vector3,
        length: number,
    ): void {
        AttachEntitiesToRope(
            this.Handle,
            fEntity.Handle,
            sEntity.Handle,
            fPosition.x,
            fPosition.y,
            fPosition.z,
            sPosition.x,
            sPosition.y,
            sPosition.z,
            length,
            false,
            false,
            null,
            null,
        );
    }

    /**
     * Deletes an inner resource represented by the instance handle.
     *
     * This method invokes the DeleteRope function, which handles
     * the cleanup and deletion of the resource associated with
     * this Handle.
     *
     * @return {void}
     */
    public delete(): void {
        DeleteRope(this.Handle);
    }

    /**
     * Detaches a specified entity from the current object.
     *
     * @param {Entity} entity - The entity to be detached.
     *
     * @return {void}
     */
    public detachEntity(entity: Entity): void {
        DetachRopeFromEntity(this.Handle, entity.Handle);
    }

    /**
     * Checks if the rope instance exists.
     *
     * @return {boolean} True if the rope exists, otherwise false.
     */
    public exists(): boolean {
        return DoesRopeExist(this.Handle)[0];
    }

    /**
     * Retrieves the coordinates of a specified vertex for a given rope.
     *
     * @param {number} vertex - The index of the vertex whose coordinates are to be retrieved.
     *
     * @return {Vector3} A Vector3 object containing the x, y, and z coordinates of the vertex.
     */
    public getVertexCoords(vertex: number): Vector3 {
        const coords: number[] = GetRopeVertexCoord(this.handle, vertex);
        return new Vector3(coords[0], coords[1], coords[2]);
    }

    /**
     * Pins a vertex at a given position.
     *
     * @param {number} vertex - The index of the vertex to pin.
     * @param {Vector3} position - The position to pin the vertex at, represented as a Vector3 object.
     *
     * @return {void}
     */
    public pinVertex(vertex: number, position: Vector3): void {
        PinRopeVertex(this.handle, vertex, position.x, position.y, position.z);
    }

    /**
     * Resets the length of the rope.
     *
     * @param {boolean} reset - If true, the rope length will be reset to 1. If false, it will reset to the current length.
     *
     * @return {void}
     */
    public resetLength(reset: boolean): void {
        RopeResetLength(this.handle, reset ? 1 : this.Length);
    }

    /**
     * Unpins the specified vertex from the rope, making it movable again.
     *
     * @param {number} vertex - The index of the vertex to be unpinned.
     *
     * @return {void}
     */
    public unpinVertex(vertex: number): void {
        UnpinRopeVertex(this.handle, vertex);
    }
}
