import { Vector3 } from '@fivem-ts/shared';
import { Entity } from '.';

/**
 * Represents a bone of an entity in a game environment.
 *
 * @class EntityBone
 */
export class EntityBone {
    protected readonly index: number;

    constructor(
        protected readonly owner: Entity,
        boneIndex?: number,
        boneName?: string,
    ) {
        this.index = boneIndex
            ? boneIndex
            : GetEntityBoneIndexByName(this.owner.Handle, boneName ?? '');
    }

    public get Owner(): Entity {
        return this.owner;
    }

    public get Index(): number {
        return this.index;
    }

    public get IsValid(): boolean {
        return this.Owner.exists() && this.index !== -1;
    }

    public get Position(): Vector3 {
        const boneCoords: number[] = GetWorldPositionOfEntityBone(this.owner.Handle, this.index);
        return new Vector3(boneCoords[0], boneCoords[1], boneCoords[2]);
    }

    public get Rotation(): Vector3 {
        const boneRotation: number[] = GetEntityBoneRotation(this.owner.Handle, this.index);
        return new Vector3(boneRotation[0], boneRotation[1], boneRotation[2]);
    }

    public get LocalRotation(): Vector3 {
        const boneRotation: number[] = GetEntityBoneRotationLocal(this.owner.Handle, this.index);
        return new Vector3(boneRotation[0], boneRotation[1], boneRotation[2]);
    }
}
