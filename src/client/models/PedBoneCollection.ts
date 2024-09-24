import { EntityBoneCollection, Ped, PedBone } from '.';
import { Bone } from '../enums';

/**
 * Represents a collection of bones for a pedestrian (Ped) entity.
 * Extends the functionality of EntityBoneCollection specifically for Ped entities.
 *
 * @class PedBoneCollection
 * @extends EntityBoneCollection
 */
export class PedBoneCollection extends EntityBoneCollection {
    constructor(owner: Ped) {
        super(owner);
    }

    public override get Core(): PedBone {
        return new PedBone(this.owner as Ped, Bone.Unknown);
    }
}
