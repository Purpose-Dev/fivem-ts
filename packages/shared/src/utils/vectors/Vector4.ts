import { Vector } from './Vector';

export class Vector4 extends Vector {
	constructor(
		x: number,
		y: number,
		private _z: number,
		private _h: number,
	) {
		super(x, y);
	}

	public get z(): number {
		return this._z;
	}

	public set z(value: number) {
		this._z = value;
	}

	public get h(): number {
		return this._h;
	}

	public set h(value: number) {
		this._h = value;
	}

	public get Length(): number {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.h * this.h);
	}

	public get normalize(): Vector4 {
		const length: number = this.Length;

		if (length === 0) return new Vector4(0, 0, 0, 0);

		const normalizedX: number = this.x / length;
		const normalizedY: number = this.y / length;
		const normalizedZ: number = this.z / length;
		const normalizedH: number = this.h / length;

		return new Vector4(normalizedX, normalizedY, normalizedZ, normalizedH);
	}

	public override clone(): Vector4 {
		return new Vector4(this.x, this.y, this.z, this.h);
	}

	public override distanceSquared(vector: Vector4): number {
		const dx: number = this.x - vector.x;
		const dy: number = this.y - vector.y;
		const dz: number = this.z - vector.z;
		const dh: number = this.h - vector.h;

		return dx * dx + dy * dy + dz * dz + dh * dh;
	}

	public override distance(vector: Vector4): number {
		const dx: number = this.x - vector.x;
		const dy: number = this.y - vector.y;
		const dz: number = this.z - vector.z;
		const dh: number = this.h - vector.h;

		return Math.sqrt(dx * dx + dy * dy + dz * dz + dh * dh);
	}

	public override crossProduct(vector: Vector4): Vector4 {
		const x: number = this.y * vector.z - this.z * vector.y;
		const y: number = this.z * vector.x - this.x * vector.z;
		const z: number = this.x * vector.y - this.y * vector.x;

		return new Vector4(x, y, z, 0);
	}

	public override dotProduct(vector: Vector4): number {
		return this.x * vector.x + this.y * vector.y + this.z * vector.z + this.h * vector.h;
	}

	public override add(vector: Vector4 | number): Vector4 {
		if (typeof vector === 'number') {
			return new Vector4(this.x + vector, this.y + vector, this.z + vector, this.h + vector);
		}

		return new Vector4(
			this.x + vector.x,
			this.y + vector.y,
			this.z + vector.z,
			this.h + vector.h,
		);
	}

	public override subtract(vector: Vector4 | number): Vector4 {
		if (typeof vector === 'number') {
			return new Vector4(this.x - vector, this.y - vector, this.z - vector, this.h - vector);
		}

		return new Vector4(
			this.x - vector.x,
			this.y - vector.y,
			this.z - vector.z,
			this.h - vector.h,
		);
	}

	public override multiply(vector: Vector4 | number): Vector4 {
		if (typeof vector === 'number') {
			return new Vector4(this.x * vector, this.y * vector, this.z * vector, this.h * vector);
		}

		return new Vector4(
			this.x * vector.x,
			this.y * vector.y,
			this.z * vector.z,
			this.h * vector.h,
		);
	}

	public override divide(vector: Vector4 | number): Vector4 {
		if (typeof vector === 'number') {
			return new Vector4(this.x / vector, this.y / vector, this.z / vector, this.h / vector);
		}

		return new Vector4(
			this.x / vector.x,
			this.y / vector.y,
			this.z / vector.z,
			this.h / vector.h,
		);
	}

	public override replace(vector: Vector4): void {
		this.x = vector.x;
		this.y = vector.y;
		this.z = vector.z;
		this.h = vector.h;
	}
}
