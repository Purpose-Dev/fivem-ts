/**
 * Represents a point in 3D space with floating-point precision.
 *
 * This class is used to define a point in a 3D coordinate system, typically in the context
 * of FiveM scripts, where coordinates in the game world are required. The `PointF` class
 * includes `x`, `y`, and `z` properties for the three axes.
 *
 * @example
 *
 * ```ts
 * const point = new PointF(100.5, 200.75, 300.25);
 * console.log(point.x); // Output: 100.5
 * console.log(point.y); // Output: 200.75
 * console.log(point.z); // Output: 300.25
 * ```
 */
export class PointF {
    /**
     * Creates an instance of `PointF`.
     *
     * @param x The x-coordinate of the point.
     * @param y The y-coordinate of the point.
     * @param z The z-coordinate of the point.
     */
    constructor(
        public x: number,
        public y: number,
        public z: number,
    ) {}

    /**
     * Returns a `PointF` instance with all coordinates set to zero.
     *
     * This is useful when you need a default or "empty" point in 3D space.
     *
     * @example
     *
     * ```ts
     * const emptyPoint = PointF.empty();
     * console.log(emptyPoint.x); // Output: 0
     * console.log(emptyPoint.y); // Output: 0
     * console.log(emptyPoint.z); // Output: 0
     * ```
     *
     * @returns A `PointF` instance with `x`, `y`, and `z` all set to `0`.
     */
    public static empty(): PointF {
        return new PointF(0, 0, 0);
    }
}
