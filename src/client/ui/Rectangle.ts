import { Color, Point, Size } from '../utils';
import { IDrawable, Screen } from '.';

/**
 * Represents a rectangle that can be drawn on the screen.
 */
export class Rectangle implements IDrawable {
    /**
     * Creates a new Rectangle instance.
     *
     * @param {Point} pos - The position of the rectangle.
     * @param {Size} size - The size of the rectangle.
     * @param {Color} color - The color of the rectangle.
     */
    constructor(
        public pos: Point,
        public size: Size,
        public color: Color,
    ) {}

    /**
     * Draws the rectangle on the screen.
     *
     * @param {Size} [offset] - An optional size specifying an offset to use when drawing.
     * @param {Size} [resolution] - An optional size specifying the resolution.
     */
    public draw(offset?: Size, resolution?: Size): void;

    /**
     * Draws the rectangle on the screen with the specified position, size, and color.
     *
     * @param {Point} pos - The position to draw the rectangle at.
     * @param {Size} size - The size to draw the rectangle with.
     * @param {Color} color - The color to draw the rectangle with.
     * @param {Size} [resolution] - An optional size specifying the resolution.
     */
    public draw(pos: Point, size: Size, color: Color, resolution?: Size): void;

    /**
     * Internal draw function that handles the logic for drawing the rectangle.
     *
     * @param {Point | Size} [arg1] - Either an offset size or a position point.
     * @param {Size} [arg2] - The size to draw the rectangle with.
     * @param {Color} [color] - The color to draw the rectangle with.
     * @param {Size} [resolution] - An optional size specifying the resolution.
     */
    public draw(arg1?: Point | Size, arg2?: Size, color?: Color, resolution?: Size): void {
        resolution = color === undefined ? arg2 : resolution;
        resolution = resolution || new Size(Screen.getScaledWidth(), Screen.getHeight());

        if (color === undefined) {
            if (arg1 && arg1 instanceof Size) {
                arg1 = new Point(this.pos.x + arg1.width, this.pos.y + arg1.height);
            } else {
                arg1 = this.pos;
            }
            arg2 = this.size;
        } else {
            if (!arg1) {
                arg1 = this.pos;
            } else {
                arg1 = arg1 as Point;
            }
            arg2 = arg2 || this.size;
        }

        color = color || this.color;

        const w: number = arg2.width / resolution.width;
        const h: number = arg2.height / resolution.height;
        const x: number = arg1.x / resolution.width + w * 0.5;
        const y: number = arg1.y / resolution.height + h * 0.5;

        DrawRect(x, y, w, h, color.r, color.g, color.b, color.a);
    }
}
