/**
 * Abstract class representing a 2D vector.
 */
export abstract class Vector {
	protected constructor(
		private _x: number,
		private _y: number,
	) {}

	/**
	 * Retrieves the value of the private member variable _x.
	 *
	 * @returns {number} The value of _x.
	 */
	public get x(): number {
		return this._x;
	}

	/**
	 * Sets the value of the property `x`.
	 *
	 * @param {number} value - The new value to set for the property.
	 */
	public set x(value: number) {
		this._x = value;
	}

	/**
	 * Gets the y-coordinate value.
	 *
	 * @returns {number} The current value of the y-coordinate.
	 */
	public get y(): number {
		return this._y;
	}

	/**
	 * Sets the value of the y property.
	 *
	 * @param {number} value - The new value for the y property.
	 */
	public set y(value: number) {
		this._y = value;
	}

	/**
	 * Gets the length of the current object.
	 *
	 * @returns {number} The length of the object.
	 */
	public abstract get Length(): number;

	/**
	 * The normalize method returns a normalized version of the current vector.
	 * A normalized vector has a magnitude of 1 and points in the same direction as the original vector.
	 *
	 * @returns {Vector} The normalized vector.
	 */
	public abstract get normalize(): Vector;

	/**
	 * Creates and returns a deep copy of the current Vector instance.
	 *
	 * @returns {Vector} A new Vector instance that is a copy of the original.
	 */
	public abstract clone(): Vector;

	/**
	 * Calculates and returns the squared distance from this vector to another vector.
	 *
	 * @param {Vector} vector - The other vector to which the squared distance is calculated.
	 *
	 * @returns {number} The squared distance between this vector and the specified vector.
	 */
	public abstract distanceSquared(vector: Vector): number;

	/**
	 * Calculates the distance from the current vector to the provided vector.
	 *
	 * @param {Vector} vector - The vector to which the distance is to be calculated.
	 *
	 * @returns {number} - The distance between the current vector and the provided vector*/
	public abstract distance(vector: Vector): number;

	/**
	 * Computes the cross product of the current vector and the provided vector.
	 *
	 * @param {Vector} vector - The vector to cross with the current vector.
	 *
	 * @returns {Vector} The resulting vector from the cross product operation.
	 */
	public abstract crossProduct(vector: Vector): Vector | number;

	/**
	 * Calculates the dot product of the current vector with another vector.
	 *
	 * @param {Vector} vector - The vector to perform the dot product with.
	 *
	 * @returns {number} The result of the dot product.
	 */
	public abstract dotProduct(vector: Vector): number;

	/**
	 * Adds a vector or a number to the current vector.
	 *
	 * @param {Vector | number} vector - The vector or number to add.
	 *
	 * @returns {Vector} The resulting vector after the addition.
	 */
	public abstract add(vector: Vector | number): Vector;

	/**
	 * Subtracts a specified vector or number from the current vector.
	 *
	 * @param {Vector | number} vector - The vector or number to subtract from the current vector.
	 *
	 * @returns {Vector} - The resulting vector after subtraction.
	 */
	public abstract subtract(vector: Vector | number): Vector;

	/**
	 * Multiplies the given vector or scalar by the current vector.
	 *
	 * @param {Vector | number} vector - The vector or scalar value to multiply with the current vector.
	 *
	 * @returns {Vector} The result of the multiplication.
	 */
	public abstract multiply(vector: Vector | number): Vector;

	/**
	 * Divides the current vector by another vector or a scalar.
	 *
	 * @param {Vector | number} vector - The vector or scalar to divide by.
	 *
	 * @returns {Vector} The result of the division as a new vector.
	 */
	public abstract divide(vector: Vector | number): Vector;

	/**
	 * Replaces the contents of the current vector with the provided vector.
	 *
	 * @param {Vector} vector - The vector to replace the current vector with.
	 *
	 * @returns {void}
	 */
	public abstract replace(vector: Vector): void;
}
