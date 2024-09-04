/**
 * Represents the size of a 2D object with width and height dimensions.
 *
 * This class is used to define the dimensions of 2D elements, such as UI components
 * or screen areas, typically in the context of FiveM scripts. The `Size` class includes
 * `width` and `height` properties to specify these dimensions.
 *
 * @example
 *
 * ```ts
 * const size = new Size(1920, 1080);
 * console.log(size.width);  // Output: 1920
 * console.log(size.height); // Output: 1080
 * ```
 */
export class Size {
    public width: number;
    public height: number;

    /**
     * Creates an instance of `Size` with specified width and height.
     *
     * @param w The width dimension of the size. Defaults to `0`.
     * @param h The height dimension of the size. Defaults to `0`.
     */
    constructor(w = 0, h = 0) {
        this.width = w;
        this.height = h;
    }
}
