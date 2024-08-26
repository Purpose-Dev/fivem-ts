import { Vector3 } from '../shared';
import { CheckpointIcon } from './enums';

export class Checkpoint {
    private readonly handle: number;
    private position: Vector3;
    private targetPosition: Vector3;
    private icon: CheckpointIcon;
    private radius: number;

    constructor(handle: number) {
        this.handle = handle;
    }

    public get Handle(): number {
        return this.handle;
    }

    public get Position(): Vector3 {
        return this.position;
    }

    public set Position(pos: Vector3) {
        this.position = pos;
    }

    public get TargetPosition(): Vector3 {
        return this.targetPosition;
    }

    public set TargetPosition(targetPos: Vector3) {
        this.targetPosition = targetPos;
    }

    public get Icon(): CheckpointIcon {
        return this.icon;
    }

    public set Icon(icon: CheckpointIcon) {
        this.icon = icon;
    }

    public get Radius(): number {
        return this.radius;
    }

    public set Radius(radius: number) {
        this.radius = radius;
    }
}
