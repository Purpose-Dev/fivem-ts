import { EntityBoneCollection, Ped, PedBone } from '.';
import { Bone } from '../enums';

/**
 * Represents a collection of bones associated with an entity.
 *
 * @class PedBoneCollection
 * @extends EntityBoneCollection
 * @see {EntityBoneCollection}
 */
export class PedBoneCollection extends EntityBoneCollection {
	/**
	 * Retrieves the core `PedBone` of the associated entity.
	 *
	 * @returns {PedBone} The core `PedBone` representing the root or main bone of the entity.
	 */
	public override get Core(): PedBone {
		return new PedBone(this.owner as Ped, Bone.Unknown);
	}
}
