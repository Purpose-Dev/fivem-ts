/**
 * @interface Vec3
 * Interface representing a 3D Vector with x, y and z components.
 */
export interface Vec3 {
    /** The x-coordinate of the vector. */
    x: number;
    /** The y-coordinate of the vector. */
    y: number;
    /** The z-coordinate of the vector. */
    z: number;
}

/**
 * @type NumerableVector3
 * Type representing either a numeric value or a 3D vector.
 */
export type NumerableVector3 = number | Vec3;

/**
 * @class Vector3
 * Class representing a 3D vector, implementing the Vec3 interface.
 */
export class Vector3 implements Vec3 {
    /**
     * Constructs a new Vector3 instance.
     *
     * @param x - The x-coordinate of the vector.
     * @param y - The y-coordinate of the vector.
     * @param z - The z-coordinate of the vector.
     */
    constructor(
        public x: number,
        public y: number,
        public z: number,
    ) {}

    /**
     * Gets the length (magnitude) of the vector.
     *
     * @returns The length of the vector.
     */
    get Length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    /**
     * Clones the current Vector3 object into a new Vector3 object.
     *
     * @returns A new Vector3 object with the same x, y, and z values.
     */
    public clone(): Vector3 {
        return new Vector3(this.x, this.y, this.z);
    }

    /**
     * The product of the Euclidean magnitudes of this and another Vector3.
     *
     * @param v Vector3 to find Euclidean magnitude between.
     * @returns Euclidean magnitude with another vector.
     */
    public distanceSquared(v: Vec3): number {
        const w: Vector3 = this.subtract(v);
        return Vector3.dotProduct(w, w);
    }

    /**
     * Calculates the distance between this vector and another vector.
     *
     * @param v - The other vector to calculate the distance to.
     * @returns The distance between the two vectors.
     */
    public distance(v: Vec3): number {
        return Math.sqrt(this.distanceSquared(v));
    }

    /**
     * Gets a normalized version of this vector.
     *
     * @returns A new Vector3 object with the same direction as this vector but with a length of 1.
     */
    public get normalize(): Vector3 {
        return Vector3.normalize(this);
    }

    /**
     * Calculates the cross product of this vector and another vector.
     *
     * @param v - The other vector to calculate the cross product with.
     * @returns A new Vector3 representing the cross product of the two vectors.
     */
    public crossProduct(v: Vec3): Vector3 {
        return Vector3.crossProduct(this, v);
    }

    /**
     * Calculates the dot product of this vector and another vector.
     *
     * @param v - The other vector to calculate the dot product with.
     * @returns The dot product of the two vectors.
     */
    public dotProduct(v: Vec3): number {
        return Vector3.dotProduct(this, v);
    }

    /**
     * Adds a number or another vector to this vector.
     *
     * @param v - The value to add (either a number or a vector).
     * @returns A new Vector3 representing the result of the addition.
     */
    public add(v: NumerableVector3): Vec3 {
        return Vector3.add(this, v);
    }

    /**
     * Subtracts another vector from this vector.
     *
     * @param v - The vector to subtract.
     * @returns A new Vector3 representing the result of the subtraction.
     */
    public subtract(v: NumerableVector3): Vector3 {
        return Vector3.subtract(this, v);
    }

    /**
     * Multiplies this vector by a number or another vector.
     *
     * @param v - The value to multiply by (either a number or a vector).
     * @returns A new Vector3 representing the result of the multiplication.
     */
    public multiply(v: NumerableVector3): Vector3 {
        return Vector3.multiply(this, v);
    }

    /**
     * Divides this vector by a number or another vector.
     *
     * @param v - The value to divide by (either a number or a vector).
     * @returns A new Vector3 representing the result of the division.
     */
    public divide(v: NumerableVector3): Vec3 {
        return Vector3.divide(this, v);
    }

    /**
     * Replaces the current vector's components with those of another vector.
     *
     * @param v - The vector to replace with.
     */
    public replace(v: Vec3): void {
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
    }

    // Static Methods
    /**
     * Creates a new Vector3 instance from a number or a vector.
     *
     * @param v1 - A number or a vector to create a Vector3 from.
     * @returns A new Vector3 instance.
     */
    public static create(v1: NumerableVector3): Vector3 {
        if (typeof v1 === 'number') {
            return new Vector3(v1, v1, v1);
        }

        return new Vector3(v1.x, v1.y, v1.z);
    }

    /**
     * Clones a vector.
     *
     * @param v1 - The vector to clone.
     * @returns A new Vector3 instance identical to the input vector.
     */
    public static clone(v1: Vec3): Vector3 {
        return Vector3.create(v1);
    }

    /**
     * Adds two vectors or a vector and a number.
     *
     * @param v1 - The first vector.
     * @param v2 - The second vector or number to add.
     * @returns A new Vector3 representing the result of the addition.
     */
    public static add(v1: Vec3, v2: NumerableVector3): Vector3 {
        if (typeof v2 === 'number') {
            return new Vector3(v1.x + v2, v1.y + v2, v1.z + v2);
        }

        return new Vector3(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
    }

    /**
     * Subtracts a vector or a number from another vector.
     *
     * @param v1 - The vector to subtract from.
     * @param v2 - The vector or number to subtract.
     * @returns A new Vector3 representing the result of the subtraction.
     */
    public static subtract(v1: Vec3, v2: NumerableVector3): Vector3 {
        if (typeof v2 === 'number') {
            return new Vector3(v1.x - v2, v1.y - v2, v1.z - v2);
        }

        return new Vector3(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
    }

    /**
     * Multiplies two vectors or a vector and a number.
     *
     * @param v1 - The first vector.
     * @param v2 - The second vector or number to multiply by.
     * @returns A new Vector3 representing the result of the multiplication.
     */
    public static multiply(v1: Vec3, v2: NumerableVector3): Vector3 {
        if (typeof v2 === 'number') {
            return new Vector3(v1.x * v2, v1.y * v2, v1.z * v2);
        }

        return new Vector3(v1.x * v2.x, v1.y * v2.y, v1.z * v2.z);
    }

    /**
     * Divides a vector by another vector or a number.
     *
     * @param v1 - The vector to divide.
     * @param v2 - The vector or number to divide by.
     * @returns A new Vector3 representing the result of the division.
     */
    public static divide(v1: Vec3, v2: NumerableVector3): Vector3 {
        if (typeof v2 === 'number') {
            return new Vector3(v1.x / v2, v1.y / v2, v1.z / v2);
        }

        return new Vector3(v1.x / v2.x, v1.y / v2.y, v1.z / v2.z);
    }

    /**
     * Calculates the dot product of two vectors.
     *
     * @param v1 - The first vector.
     * @param v2 - The second vector.
     * @returns The dot product of the two vectors.
     */
    public static dotProduct(v1: Vec3, v2: Vec3): number {
        return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
    }

    /**
     * Calculates the cross product of two vectors.
     *
     * @param v1 - The first vector.
     * @param v2 - The second vector.
     * @returns A new Vector3 representing the cross product of the two vectors.
     */
    public static crossProduct(v1: Vec3, v2: Vec3): Vector3 {
        const x: number = v1.y * v2.z - v1.z * v2.y;
        const y: number = v1.z * v2.x - v1.z * v2.z;
        const z: number = v1.x * v2.y - v1.z * v2.x;
        return new Vector3(x, y, z);
    }

    /**
     * Normalizes a vector, scaling it to have a length of 1.
     *
     * @param v - The vector to normalize.
     * @returns A new Vector3 representing the normalized vector.
     */
    public static normalize(v: Vector3): Vector3 {
        return Vector3.divide(v, v.Length);
    }
}
