import { Entity, EntityBone } from '.';

/**
 * Represents a collection of bones associated with an entity.
 */
export class EntityBoneCollection {
    constructor(protected readonly owner: Entity) {}

    public get Core(): EntityBone {
        return new EntityBone(this.owner, -1);
    }

    /**
     * Checks if an entity has a specified bone by its name.
     *
     * @param {string} name - The name of the bone to check for.
     * @return {boolean} True if the bone exists, false otherwise.
     */
    public hasBone(name: string): boolean {
        return GetEntityBoneIndexByName(this.owner.Handle, name) !== -1;
    }
}
