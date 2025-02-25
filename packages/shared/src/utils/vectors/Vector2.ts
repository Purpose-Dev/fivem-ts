import { Vector } from '.';

export class Vector2 extends Vector {
	constructor(x: number, y: number) {
		super(x, y);
	}

	public get Length(): number {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}

	public get normalize(): Vector2 {
		const length: number = this.Length;

		if (length === 0) return new Vector2(0, 0);

		const normalizedX: number = this.x / length;
		const normalizedY: number = this.y / length;

		return new Vector2(normalizedX, normalizedY);
	}

	public override clone(): Vector2 {
		return new Vector2(this.x, this.y);
	}

	public override distanceSquared(vector: Vector2): number {
		const dx: number = this.x - vector.x;
		const dy: number = this.y - vector.y;

		return dx * dx + dy * dy;
	}

	public override distance(vector: Vector2): number {
		return Math.sqrt(this.distanceSquared(vector));
	}

	public override crossProduct(vector: Vector2): number {
		return this.x * vector.y - this.y * vector.x;
	}

	public override dotProduct(vector: Vector2): number {
		return this.x * vector.x + this.y * vector.y;
	}

	public override add(vector: Vector2 | number): Vector2 {
		if (typeof vector === 'number') {
			return new Vector2(this.x + vector, this.y + vector);
		}

		return new Vector2(this.x + vector.x, this.y + vector.y);
	}

	public override subtract(vector: Vector2 | number): Vector2 {
		if (typeof vector === 'number') {
			return new Vector2(this.x - vector, this.y - vector);
		}

		return new Vector2(this.x - vector.x, this.y - vector.y);
	}

	public override multiply(vector: Vector2 | number): Vector2 {
		if (typeof vector === 'number') {
			return new Vector2(this.x * vector, this.y * vector);
		}

		return new Vector2(this.x * vector.x, this.y * vector.y);
	}

	public override divide(vector: Vector2 | number): Vector2 {
		if (typeof vector === 'number') {
			return new Vector2(this.x / vector, this.y / vector);
		}

		return new Vector2(this.x / vector.x, this.y / vector.y);
	}

	public override replace(vector: Vector2): void {
		this.x = vector.x;
		this.y = vector.y;
	}
}
