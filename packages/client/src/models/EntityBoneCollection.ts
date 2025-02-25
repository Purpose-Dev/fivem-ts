import { Entity, EntityBone } from '.';
import { Bone } from '../enums';

/**
 * Represents a collection of bones associated with an entity.
 *
 * @class EntityBoneCollection
 */
export class EntityBoneCollection {
	constructor(protected readonly owner: Entity) {}

	/**
	 * Retrieves the core `EntityBone` of the associated entity.
	 *
	 * @returns {EntityBone} The core `EntityBone` representing the root or main bone of the entity.
	 */
	public get Core(): EntityBone {
		return new EntityBone(this.owner, Bone.Unknown);
	}

	/**
	 * Checks if an entity has a specified bone by its name.
	 *
	 * @param {string} name - The name of the bone to check for.
	 *
	 * @returns {boolean} True if the bone exists, false otherwise.
	 */
	public hasBone(name: string): boolean {
		return GetEntityBoneIndexByName(this.owner.Handle, name) !== -1;
	}
}
