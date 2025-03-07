import { Vector } from '.';

export class Vector3 extends Vector {
	constructor(
		x: number,
		y: number,
		private _z: number,
	) {
		super(x, y);
	}

	public get z(): number {
		return this._z;
	}

	public set z(value: number) {
		this._z = value;
	}

	public get Length(): number {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}

	public get normalize(): Vector3 {
		const length: number = this.Length;

		if (length === 0) return new Vector3(0, 0, 0);

		const normalizedX: number = this.x / length;
		const normalizedY: number = this.y / length;
		const normalizedZ: number = this.z / length;

		return new Vector3(normalizedX, normalizedY, normalizedZ);
	}

	public override clone(): Vector3 {
		return new Vector3(this.x, this.y, this.z);
	}

	public override distanceSquared(vector: Vector3): number {
		const w: Vector3 = this.subtract(vector);
		return this.dotProduct(w);
	}

	public override distance(vector: Vector3): number {
		return Math.sqrt(this.distanceSquared(vector));
	}

	public override crossProduct(vector: Vector3): Vector3 {
		const x: number = this.y * vector.z - this.z * vector.y;
		const y: number = this.z * vector.x - this.z * vector.z;
		const z: number = this.x * vector.y - this.z * vector.x;

		return new Vector3(x, y, z);
	}

	public override dotProduct(vector: Vector3): number {
		return this.x * vector.x + this.y * vector.y + this.z * vector.z;
	}

	public override add(vector: Vector3 | number): Vector3 {
		if (typeof vector === 'number') {
			return new Vector3(this.x + vector, this.y + vector, this.z + vector);
		}

		return new Vector3(this.x + vector.x, this.y + vector.y, this.z + vector.z);
	}

	public override subtract(vector: Vector3 | number): Vector3 {
		if (typeof vector === 'number') {
			return new Vector3(this.x - vector, this.y - vector, this.z - vector);
		}

		return new Vector3(this.x - vector.x, this.y - vector.y, this.z - vector.z);
	}

	public override multiply(vector: Vector3 | number): Vector3 {
		if (typeof vector === 'number') {
			return new Vector3(this.x * vector, this.y * vector, this.z * vector);
		}

		return new Vector3(this.x * vector.x, this.y * vector.y, this.z * vector.z);
	}

	public override divide(vector: Vector3 | number): Vector3 {
		if (typeof vector === 'number') {
			return new Vector3(this.x / vector, this.y / vector, this.z / vector);
		}

		return new Vector3(this.x / vector.x, this.y / vector.y, this.z / vector.z);
	}

	public override replace(vector: Vector3): void {
		this.x = vector.x;
		this.y = vector.y;
		this.z = vector.z;
	}

	/**
	 * Calculates the dot product of two vectors.
	 *
	 * @param v1 {Vector3} - The first vector.
	 * @param v2 {Vector3} - The second vector.
	 *
	 * @returns {Vector3} The dot product of the two vectors.
	 */
	public static dotProduct(v1: Vector3, v2: Vector3): number {
		return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
	}

	/**
	 * Calculates the cross product of two vectors.
	 *
	 * @param v1 {Vector3} - The first vector.
	 * @param v2 {Vector3} - The second vector.
	 *
	 * @returns {Vector3} A new Vector3 representing the cross product of the two vectors.
	 */
	public static crossProduct(v1: Vector3, v2: Vector3): Vector3 {
		const x: number = v1.y * v2.z - v1.z * v2.y;
		const y: number = v1.z * v2.x - v1.z * v2.z;
		const z: number = v1.x * v2.y - v1.z * v2.x;
		return new Vector3(x, y, z);
	}

	/**
	 * Normalizes a vector, scaling it to have a length of 1.
	 *
	 * @param v {Vector3} - The vector to normalize.
	 *
	 * @returns {Vector3} A new Vector3 representing the normalized vector.
	 */
	public static normalize(v: Vector3): Vector3 {
		return v.divide(v.Length);
	}
}
