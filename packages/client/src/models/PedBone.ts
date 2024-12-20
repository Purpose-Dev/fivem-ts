import { EntityBone, Ped } from '.';
import { Bone } from '../enums';

/**
 * Represents a specific bone in a pedestrian entity.
 * Extends EntityBone to provide additional functionality specific to pedestrians.
 *
 * @class PedBone
 * @extends EntityBone
 * @see {EntityBone}
 */
export class PedBone extends EntityBone {
    constructor(owner: Ped, boneId: Bone) {
        super(owner, GetPedBoneIndex(owner.Handle, boneId));
    }
}
