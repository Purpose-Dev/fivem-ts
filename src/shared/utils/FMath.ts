/**
 * @class
 * Class including Math utilities for FiveM development
 */
export class FMath {
    /**
     * Clamps a number to a specified range.
     *
     * @param num - The number to clamp.
     * @param min - The minimum value.
     * @param max - The maximum value.
     * @returns The clamped value.
     *
     * @example
     * ```ts
     * FMath.clamp(5, 1, 10); // 5
     * FMath.clamp(0, 1, 10); // 1
     * FMath.clamp(15, 1, 10); // 10
     * ```
     */
    public static clamp(num: number, min: number, max: number): number {
        return num <= min ? min : num >= max ? max : num;
    }

    /**
     * Generates a random integer between the specified minimum and maximum values.
     *
     * @param min - The minimum value (inclusive).
     * @param max - The maximum value (inclusive).
     * @returns A random integer between min and max.
     *
     * @example
     * ```ts
     * FMath.getRandomInt(1, 10); // A random integer between 1 and 10
     * ```
     */
    public static getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.ceil(max);

        return Math.floor(Math.random() * (max - min)) + min;
    }

    /**
     * Linearly interpolates between two values.
     *
     * @param start - The start value.
     * @param end - The end value.
     * @param amount - The interpolation factor between 0 and 1.
     * @returns The interpolated value.
     *
     * @example
     * ```ts
     * lerp(0, 10, 0.5); // 5
     * lerp(0, 10, 0.75); // 7.5
     * ```
     */
    public static lerp(start: number, end: number, amount: number): number {
        return (1 - amount) * start + amount * end;
    }

    /**
     * Converts an angle from radians to degrees.
     *
     * @param radians - The angle in radians.
     * @returns The angle in degrees.
     *
     * @example
     * ```ts
     * toDegrees(Math.PI); // 180
     * toDegrees(Math.PI / 2); // 90
     * ```
     */
    public static toDegrees(radians: number): number {
        return radians * (180 / Math.PI);
    }

    /**
     * Converts an angle from degrees to radians.
     *
     * @param degrees - The angle in degrees.
     * @returns The angle in radians.
     *
     * @example
     * ```ts
     * toRadians(180); // Math.PI
     * toRadians(90); // Math.PI / 2
     * ```
     */
    public static toRadians(degrees: number): number {
        return degrees * (Math.PI / 180);
    }

    /**
     * Calculates the distance between two points in 2D space.
     *
     * @param x1 - The x-coordinate of the first point.
     * @param y1 - The y-coordinate of the first point.
     * @param x2 - The x-coordinate of the second point.
     * @param y2 - The y-coordinate of the second point.
     * @returns The distance between the two points.
     *
     * @example
     * ```ts
     * distance2D(0, 0, 3, 4); // 5
     * ```
     */
    public static distance2D(x1: number, y1: number, x2: number, y2: number): number {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    /**
     * Calculates the distance between two points in 3D space.
     *
     * @param x1 - The x-coordinate of the first point.
     * @param y1 - The y-coordinate of the first point.
     * @param z1 - The z-coordinate of the first point.
     * @param x2 - The x-coordinate of the second point.
     * @param y2 - The y-coordinate of the second point.
     * @param z2 - The z-coordinate of the second point.
     * @returns The distance between the two points.
     *
     * @example
     * ```ts
     * distance3D(0, 0, 0, 3, 4, 12); // 13
     * ```
     */
    public static distance3D(
        x1: number,
        y1: number,
        z1: number,
        x2: number,
        y2: number,
        z2: number,
    ): number {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2);
    }

    /**
     * Normalizes a value within a given range to a value between 0 and 1.
     *
     * @param value - The value to normalize.
     * @param min - The minimum value of the range.
     * @param max - The maximum value of the range.
     * @returns The normalized value.
     *
     * @example
     * ```ts
     * normalize(75, 50, 100); // 0.5
     * ```
     */
    public static normalize(value: number, min: number, max: number): number {
        return (value - min) / (max - min);
    }

    /**
     * Maps a value from one range to another.
     *
     * @param value - The value to map.
     * @param inMin - The minimum value of the input range.
     * @param inMax - The maximum value of the input range.
     * @param outMin - The minimum value of the output range.
     * @param outMax - The maximum value of the output range.
     * @returns The mapped value.
     *
     * @example
     * ```ts
     * mapRange(5, 0, 10, 0, 100); // 50
     * ```
     */
    public static mapRange(
        value: number,
        inMin: number,
        inMax: number,
        outMin: number,
        outMax: number,
    ): number {
        if (inMin === inMax) {
            return NaN;
        }
        return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    }

    /**
     * Checks if a value is within a specified range.
     *
     * @param value - The value to check.
     * @param min - The minimum value of the range.
     * @param max - The maximum value of the range.
     * @returns `true` if the value is within the range, `false` otherwise.
     *
     * @example
     * ```ts
     * isInRange(5, 1, 10); // true
     * isInRange(0, 1, 10); // false
     * ```
     */
    public static isInRange(value: number, min: number, max: number): boolean {
        return value >= min && value <= max;
    }
}
