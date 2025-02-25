/**
 * Calculates the distance between two points in 2D space.
 *
 * @example
 * ```ts
 * distance2D(0, 0, 3, 4); // 5
 * ```
 *
 * @param {number} x1 - The x-coordinate of the first point.
 * @param {number} y1 - The y-coordinate of the first point.
 * @param {number} x2 - The x-coordinate of the second point.
 * @param {number} y2 - The y-coordinate of the second point.
 *
 * @returns {number} The distance between the two points.
 */
export function distance2D(x1: number, y1: number, x2: number, y2: number): number {
	return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}
