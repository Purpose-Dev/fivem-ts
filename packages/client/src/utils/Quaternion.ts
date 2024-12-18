import { EulerAngles } from '../@types';

/**
 * @class Quaternion
 *
 * - Represents a 3D rotation using a quaternion.
 * - A quaternion is a mathematical concept used to represent rotations in three-dimensional space.
 * - It consists of four components: x, y, z (vector part) and w (scalar part).
 */
export class Quaternion {
    constructor(
        private x: number,
        private y: number,
        private z: number,
        private w: number,
    ) {}

    /**
     * Retrieves the value of the `x` property.
     *
     * @returns {number} The current value of `x`.
     */
    public get X(): number {
        return this.x;
    }

    /**
     * Sets the value of the property `x`.
     *
     * @param {number} value - The new value to assign to `x`.
     */
    public set X(value: number) {
        this.x = value;
    }

    /**
     * Gets the value of the property `y`.
     *
     * @returns {number} The current value of the `y` property.
     */
    public get Y(): number {
        return this.y;
    }

    /**
     * Sets the value of the Y property.
     *
     * @param {number} value - The new value to be assigned to Y.
     */
    public set Y(value: number) {
        this.y = value;
    }

    /**
     * Retrieves the value of property `z`.
     *
     * @returns {number} The value of the `z` property.
     */
    public get Z(): number {
        return this.z;
    }

    /**
     * Sets the value of the property 'z'.
     *
     * @param {number} value - The new value to assign to the property 'z'.
     */
    public set Z(value: number) {
        this.z = value;
    }

    /**
     * Gets the value of the property `w`.
     *
     * @returns {number} The current value of the property `w`.
     */
    public get W(): number {
        return this.w;
    }

    /**
     * Sets the value of the W property.
     *
     * @param {number} value - The new value to assign to W.
     */
    public set W(value: number) {
        this.w = value;
    }

    /**
     * Gets the length (magnitude) of the quaternion.
     *
     * @returns {number} The magnitude of the quaternion.
     */
    public get Length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }

    /**
     * Gets the normalized quaternion (unit quaternion).
     * Normalization makes the magnitude of the quaternion equal to 1.
     *
     * @returns {Quaternion} A new quaternion that is the normalized version of this quaternion.
     */
    public get normalize(): Quaternion {
        const magnitude: number = this.Length;

        if (magnitude === 0) {
            return new Quaternion(0, 0, 0, 0);
        }

        return new Quaternion(
            this.x / magnitude,
            this.y / magnitude,
            this.z / magnitude,
            this.w / magnitude,
        );
    }

    /**
     * Checks if this quaternion is equal to another quaternion within a certain tolerance.
     *
     * @param other {Quaternion} - The quaternion to compare with.
     * @param tolerance {number} - The tolerance within which the two quaternions are considered equal. Default is 1e-6.
     *
     * @returns {boolean} True if the quaternions are equal within the given tolerance, false otherwise.
     */
    public equals(other: Quaternion, tolerance: number = 1e-6): boolean {
        return (
            Math.abs(this.x - other.x) < tolerance &&
            Math.abs(this.y - other.y) < tolerance &&
            Math.abs(this.z - other.z) < tolerance &&
            Math.abs(this.w - other.w) < tolerance
        );
    }

    /**
     * Converts the Quaternion object to its string representation.
     *
     * @returns {string} A string representation of the Quaternion in the format 'Quaternion(x: value, y: value, z: value, w: value)'.
     */
    public toString(): string {
        return `Quaternion(x: ${this.x}, y: ${this.y}, z: ${this.z}, w: ${this.w})`;
    }

    /**
     * Converts the quaternion to an array of numbers [x, y, z, w].
     *
     * @returns {[number, number, number, number]} An array containing the quaternion components.
     */
    public toArray(): [number, number, number, number] {
        return [this.x, this.y, this.z, this.w];
    }

    /**
     * Converts the current instance to a JSON representation.
     *
     * @returns An object with properties x, y, z, and w, representing the current instance's data.
     */
    public toJson(): { x: number; y: number; z: number; w: number } {
        return {
            x: this.x,
            y: this.y,
            z: this.z,
            w: this.w,
        };
    }

    /**
     * Adds the values of another quaternion to this quaternion.
     *
     * @param {Quaternion} other - The quaternion to add to this quaternion.
     *
     * @returns {Quaternion} The updated quaternion after addition.
     */
    public add(other: Quaternion): Quaternion {
        this.X += other.X;
        this.Y += other.Y;
        this.Z += other.Z;
        this.W += other.W;

        return this;
    }

    /**
     * Subtracts the components of the given quaternion from the current quaternion.
     *
     * @param {Quaternion} other - The quaternion whose components will be subtracted from the current quaternion.
     *
     * @returns {Quaternion} The updated quaternion after subtraction.
     */
    public sub(other: Quaternion): Quaternion {
        this.X -= other.X;
        this.Y -= other.Y;
        this.Z -= other.Z;
        this.W -= other.W;

        return this;
    }

    /**
     * Multiplies this quaternion by another quaternion.
     * The result is a new quaternion representing the combined rotation.
     *
     * @param other {Quaternion} - The quaternion to multiply with.
     *
     * @returns {Quaternion} A new quaternion representing the product of the two quaternions.
     */
    public multiply(other: Quaternion): Quaternion {
        this.X = this.W * other.X + this.X * other.W + this.Y * other.Z - this.Z * other.Y;
        this.Y = this.W * other.Y - this.X * other.Z + this.Y * other.W + this.Z * other.X;
        this.Z = this.W * other.Z + this.X * other.Y - this.Y * other.X + this.Z * other.W;
        this.W = this.W * other.W - this.X * other.X - this.Y * other.Y - this.Z * other.Z;

        return this;
    }

    /**
     * Returns the conjugate of this quaternion.
     * The conjugate of a quaternion is obtained by negating its vector part.
     *
     * @returns {Quaternion} A new quaternion representing the conjugate of this quaternion.
     */
    public conjugate(): Quaternion {
        return new Quaternion(-this.x, -this.y, -this.z, -this.w);
    }

    /**
     * Returns the inverse of this quaternion.
     * The inverse is calculated by conjugating the quaternion and dividing by the square of its magnitude.
     *
     * @returns {Quaternion} A new quaternion representing the inverse of this quaternion.
     */
    public inverse(): Quaternion {
        const normSquared: number =
            this.X * this.X + this.Y * this.Y + this.Z * this.Z + this.W * this.W;
        return new Quaternion(
            -this.x / normSquared,
            -this.y / normSquared,
            -this.z / normSquared,
            this.w / normSquared,
        );
    }

    /**
     * Computes the dot product between this quaternion and another quaternion.
     * The dot product is a measure of the angle between two quaternions.
     *
     * @param q {Quaternion} - The other quaternion.
     *
     * @returns {Quaternion} The dot product of the two quaternions.
     */
    public dot(q: Quaternion): number {
        return this.x * q.x + this.y * q.y + this.z * q.z + this.w * q.w;
    }

    /**
     * Performs spherical linear interpolation (SLERP) between this quaternion and another quaternion.
     * SLERP is used to interpolate between two quaternions with constant angular velocity.
     *
     * @param q1 {Quaternion} - The quaternion to interpolate towards.
     * @param t {number} - The interpolation factor, ranging from 0 to 1.
     *
     * @returns {Quaternion} A new quaternion representing the interpolated quaternion.
     */
    public slerp(q1: Quaternion, t: number): Quaternion {
        let cosHalfTheta: number = this.W * q1.W + this.X * q1.X + this.Y * q1.Y + this.Z * q1.Z;

        if (cosHalfTheta < 0) {
            q1 = new Quaternion(-q1.X, -q1.Y, -q1.Z, -q1.W);
            cosHalfTheta = -cosHalfTheta;
        }

        if (cosHalfTheta >= 1.0) {
            return new Quaternion(this.X, this.Y, this.Z, this.W);
        }

        const sinHalfTheta: number = Math.sqrt(1.0 - cosHalfTheta * cosHalfTheta);

        if (Math.abs(sinHalfTheta) < 0.001) {
            const factor: number = 0.5;
            return new Quaternion(
                this.X * factor + q1.X * factor,
                this.Y * factor + q1.Y * factor,
                this.Z * factor + q1.Z * factor,
                this.W * factor + q1.W * factor,
            );
        }

        const halfTheta: number = Math.atan2(sinHalfTheta, cosHalfTheta);
        const invSinHalfTheta: number = 1.0 / sinHalfTheta;
        const ratioA: number = Math.sin((1 - t) * halfTheta) * invSinHalfTheta;
        const ratioB: number = Math.sin(t * halfTheta) * invSinHalfTheta;

        return new Quaternion(
            this.X * ratioA + q1.X * ratioB,
            this.Y * ratioA + q1.Y * ratioB,
            this.Z * ratioA + q1.Z * ratioB,
            this.W * ratioA + q1.W * ratioB,
        );
    }

    /**
     * Converts the quaternion to Euler angles (roll, pitch, yaw).
     * Euler angles are a way to represent 3D rotations using three angles.
     *
     * @returns {EulerAngles} An object containing the roll, pitch, and yaw angles in radians.
     */
    public toEulerAngles(): EulerAngles {
        const sinrCosp: number = 2 * (this.W * this.X + this.Y * this.Z);
        const cosrCosp: number = 1 - 2 * (this.X * this.X + this.Y * this.Y);
        const roll: number = Math.atan2(sinrCosp, cosrCosp);

        const sinp: number = 2 * (this.W * this.Y - this.Z * this.X);
        const pitch: number =
            Math.abs(sinp) >= 1 ? (Math.sign(sinp) * Math.PI) / 2 : Math.asin(sinp);

        const sinyCosp: number = 2 * (this.W * this.Z + this.X * this.Y);
        const cosyCosp: number = 1 - 2 * (this.Y * this.Y + this.Z * this.Z);
        const yaw: number = Math.atan2(sinyCosp, cosyCosp);

        return {
            roll,
            pitch,
            yaw,
        };
    }

    /**
     * Creates a quaternion from Euler angles (roll, pitch, yaw).
     * @param eulerAngles {EulerAngles} - An object containing the roll, pitch, and yaw angles in radians.
     *
     * @returns {Quaternion} A new quaternion representing the rotation.
     */
    public static fromEulerAngles(eulerAngles: EulerAngles): Quaternion {
        const cy: number = Math.cos(eulerAngles.yaw * 0.5);
        const sy: number = Math.sin(eulerAngles.yaw * 0.5);
        const cp: number = Math.cos(eulerAngles.pitch * 0.5);
        const sp: number = Math.sin(eulerAngles.pitch * 0.5);
        const cr: number = Math.cos(eulerAngles.roll * 0.5);
        const sr: number = Math.sin(eulerAngles.roll * 0.5);

        const x: number = sr * cp * cy - cr * sp * sy;
        const y: number = cr * sp * cy + sr * cp * sy;
        const z: number = cr * cp * sy - sr * sp * cy;
        const w: number = cr * cp * cy + sr * sp * sy;

        return new Quaternion(x, y, z, w);
    }

    /**
     * Returns the identity quaternion (no rotation).
     *
     * @returns {Quaternion} A new quaternion representing no rotation.
     */
    public static identity(): Quaternion {
        return new Quaternion(0, 0, 0, 1);
    }

    /**
     * Calculates the angle between two quaternions.
     *
     * @param q1 {Quaternion} - The first quaternion.
     * @param q2 {Quaternion} - The second quaternion.
     *
     * @returns {number} The angle in radians between the two quaternions.
     */
    public static angleBetween(q1: Quaternion, q2: Quaternion): number {
        const dotProduct: number = q1.dot(q2);
        return Math.acos(2 * dotProduct * dotProduct - 1);
    }

    /**
     * Creates a quaternion from an entity's rotation.
     *
     * @param entity - The entity whose quaternion is to be retrieved.
     *
     * @returns {Quaternion} A new quaternion representing the entity's rotation.
     */
    public static fromEntity(entity: number): Quaternion {
        const [x, y, z, w]: [number, number, number, number] = GetEntityQuaternion(entity);
        return new Quaternion(x, y, z, w);
    }

    /**
     * Applies a quaternion rotation to an entity.
     *
     * @param entity - The entity to apply the quaternion to.
     * @param quaternion - The quaternion representing the rotation to apply.
     *
     * @returns {void}
     */
    public static applyToEntity(entity: number, quaternion: Quaternion): void {
        SetEntityQuaternion(entity, quaternion.x, quaternion.y, quaternion.z, quaternion.w);
    }
}
