/**
 * Converts an angle from degrees to radians.
 *
 * @example
 * ```ts
 * toRadians(180); // Math.PI
 * toRadians(90); // Math.PI / 2
 * ```
 *
 * @param {number} degrees - The angle in degrees.
 *
 * @returns {number} The angle in radians.
 */
export function toRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
}
