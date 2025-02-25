import { Vector3 } from '@fivem-ts/shared';

export class PointF {
	constructor(
		public x: number,
		public y: number,
		public z: number,
	) {}

	public distanceTo(other: PointF): number {
		return Math.sqrt(
			Math.pow(this.x - other.x, 2) +
				Math.pow(this.y - other.y, 2) +
				Math.pow(this.z - other.z, 2),
		);
	}

	public isNear(other: PointF, radius: number): boolean {
		return this.distanceTo(other) <= radius;
	}

	public equals(other: PointF): boolean {
		return this.x === other.x && this.y === other.y && this.z === other.z;
	}

	public toString(): string {
		return `PointF(x: ${this.x}, y: ${this.y}, z: ${this.z})`;
	}

	public static empty(): PointF {
		return new PointF(0, 0, 0);
	}

	public static fromVector(vector: Vector3): PointF {
		return new PointF(vector.x, vector.y, vector.z);
	}
}
