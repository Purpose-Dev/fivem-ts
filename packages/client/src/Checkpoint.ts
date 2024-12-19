import { Nullable, Vector3 } from '@fivem-ts/shared';
import { CheckpointIcon } from '.';

export class Checkpoint {
    private readonly handle: number;
    private position: Nullable<Vector3>;
    private targetPosition: Nullable<Vector3>;
    private icon: Nullable<CheckpointIcon>;
    private radius: Nullable<number>;

    constructor(handle: number) {
        this.handle = handle;
        this.position = null;
        this.targetPosition = null;
        this.icon = null;
        this.radius = null;
    }

    public get Handle(): number {
        return this.handle;
    }

    public get Position(): Nullable<Vector3> {
        return this.position;
    }

    public set Position(pos: Vector3) {
        this.position = pos;
    }

    public get TargetPosition(): Nullable<Vector3> {
        return this.targetPosition;
    }

    public set TargetPosition(targetPos: Vector3) {
        this.targetPosition = targetPos;
    }

    public get Icon(): Nullable<CheckpointIcon> {
        return this.icon;
    }

    public set Icon(icon: CheckpointIcon) {
        this.icon = icon;
    }

    public get Radius(): Nullable<number> {
        return this.radius;
    }

    public set Radius(radius: number) {
        this.radius = radius;
    }
}
