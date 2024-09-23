import '@citizenfx/client';

/**
 * Represents the Euler angles in radians.
 */
export type EulerAngles = {
    /**
     * Rotation around the X-axis in radians.
     */
    roll: number;

    /**
     * Rotation around the Y-axis in radians.
     */
    pitch: number;

    /**
     * Rotation around the Z-axis in radians.
     */
    yaw: number;
};

/**
 * Represents a 3D rotation using a quaternion.
 * A quaternion is a mathematical concept used to represent rotations in three-dimensional space.
 * It consists of four components: x, y, z (vector part) and w (scalar part).
 */
export class Quaternion {
    /**
     * Creates a new Quaternion instance.
     * @param x {number} - The x component of the quaternion.
     * @param y {number} - The y component of the quaternion.
     * @param z {number} - The z component of the quaternion.
     * @param w {number} - The w (scalar) component of the quaternion.
     */
    constructor(
        public x: number,
        public y: number,
        public z: number,
        public w: number,
    ) {}

    /**
     * Gets the length (magnitude) of the quaternion.
     *
     * @returns {number} The magnitude of the quaternion.
     */
    get Length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }

    /**
     * Gets the normalized quaternion (unit quaternion).
     * Normalization makes the magnitude of the quaternion equal to 1.
     *
     * @returns {Quaternion} A new quaternion that is the normalized version of this quaternion.
     */
    get normalize(): Quaternion {
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
     * @param tolerance - The tolerance within which the two quaternions are considered equal. Default is 1e-6.
     *
     * @returns {boolean} True if the quaternions are equal within the given tolerance, false otherwise.
     */
    public equals(other: Quaternion, tolerance = 1e-6): boolean {
        return (
            Math.abs(this.x - other.x) < tolerance &&
            Math.abs(this.y - other.y) < tolerance &&
            Math.abs(this.z - other.z) < tolerance &&
            Math.abs(this.w - other.w) < tolerance
        );
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
     * Converts the quaternion to a JSON object.
     *
     * @returns {{x: number, y: number, z: number, w: number}} A JSON object with x, y, z, and w properties.
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
     * Multiplies this quaternion by another quaternion.
     * The result is a new quaternion representing the combined rotation.
     *
     * @param other {Quaternion} - The quaternion to multiply with.
     *
     * @returns {Quaternion} A new quaternion representing the product of the two quaternions.
     */
    public multiply(other: Quaternion): Quaternion {
        const x = this.w * other.x + this.x * other.w + this.y * other.z - this.z * other.y;
        const y = this.w * other.y - this.x * other.z + this.y * other.w + this.z * other.x;
        const z = this.w * other.z + this.x * other.y - this.y * other.x + this.z * other.w;
        const w = this.w * other.w - this.x * other.x - this.y * other.y - this.z * other.z;

        return new Quaternion(x, y, z, w);
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
        const normSquared = this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
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
        let cosHalfTheta = this.w * q1.w + this.x * q1.x + this.y * q1.y + this.z * q1.z;

        if (cosHalfTheta < 0) {
            q1 = new Quaternion(-q1.x, -q1.y, -q1.z, -q1.w);
            cosHalfTheta = -cosHalfTheta;
        }

        if (cosHalfTheta >= 1.0) {
            return new Quaternion(this.x, this.y, this.z, this.w);
        }

        const sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta * cosHalfTheta);
        if (Math.abs(sinHalfTheta) < 0.001) {
            return new Quaternion(
                this.x * 0.5 + q1.x * 0.5,
                this.y * 0.5 + q1.y * 0.5,
                this.z * 0.5 + q1.z * 0.5,
                this.w * 0.5 + q1.w * 0.5,
            );
        }

        const halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
        const ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta;
        const ratioB = Math.sin(t * halfTheta) / sinHalfTheta;

        return new Quaternion(
            this.x * ratioA + q1.x * ratioB,
            this.y * ratioA + q1.y * ratioB,
            this.z * ratioA + q1.z * ratioB,
            this.w * ratioA + q1.w * ratioB,
        );
    }

    /**
     * Converts the quaternion to Euler angles (roll, pitch, yaw).
     * Euler angles are a way to represent 3D rotations using three angles.
     *
     * @returns {EulerAngles} An object containing the roll, pitch, and yaw angles in radians.
     */
    public toEulerAngles(): EulerAngles {
        const sinr_cosp = 2 * (this.w * this.x + this.y * this.z);
        const cosr_cosp = 1 - 2 * (this.x * this.x + this.y * this.y);
        const roll = Math.atan2(sinr_cosp, cosr_cosp);

        const sinp = 2 * (this.w * this.y - this.z * this.x);
        const pitch = Math.abs(sinp) >= 1 ? (Math.sign(sinp) * Math.PI) / 2 : Math.asin(sinp);

        const siny_cosp = 2 * (this.w * this.z + this.x * this.y);
        const cosy_cosp = 1 - 2 * (this.y * this.y + this.z * this.z);
        const yaw = Math.atan2(siny_cosp, cosy_cosp);

        return {
            roll,
            pitch,
            yaw,
        };
    }

    // Static Methods

    /**
     * Creates a quaternion from Euler angles (roll, pitch, yaw).
     * @param eulerAngles {EulerAngles} - An object containing the roll, pitch, and yaw angles in radians.
     *
     * @returns A new quaternion representing the rotation.
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
     * Performs linear interpolation (LERP) between two quaternions.
     *
     * @param q1 {Quaternion} - The starting quaternion.
     * @param q2 {Quaternion} - The ending quaternion.
     * @param t {number} - The interpolation factor (0 to 1).
     *
     * @returns {Quaternion} A new quaternion that is the result of the interpolation.
     */
    public static lerp(q1: Quaternion, q2: Quaternion, t: number): Quaternion {
        const x = q1.x + t * (q2.x - q1.x);
        const y = q1.y + t * (q2.y - q1.y);
        const z = q1.z + t * (q2.z - q1.z);
        const w = q1.w + t * (q2.w - q1.w);

        return new Quaternion(x, y, z, w).normalize;
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
     * @returns A new quaternion representing the entity's rotation.
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
     */
    public static applyToEntity(entity: number, quaternion: Quaternion): void {
        SetEntityQuaternion(entity, quaternion.x, quaternion.y, quaternion.z, quaternion.w);
    }
}
