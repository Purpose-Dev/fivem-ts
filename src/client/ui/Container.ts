import { Point, Size, Color } from '../utils';
import { IDrawable } from './interfaces';

/**
 * Represents a drawable container that can hold and manage other drawable items.
 * The container has a position, size, and color, and it can draw itself and its child items on the screen.
 */
export class Container implements IDrawable {
    public pos: Point;
    public size: Size;
    public color: Color;
    public items: IDrawable[] = [];

    /**
     * Creates an instance of a `Container`.
     *
     * @param pos - The position of the container on the screen.
     * @param size - The size of the container.
     * @param color - The color of the container.
     */
    constructor(pos: Point, size: Size, color: Color) {
        this.pos = pos;
        this.size = size;
        this.color = color;
        this.items = [];
    }

    /**
     * Adds a single drawable item to the container.
     *
     * @param item - The drawable item to add.
     */
    public addItem(item: IDrawable): void {
        this.items.push(item);
    }

    /**
     * Adds multiple drawable items to the container.
     *
     * @param items - An array of drawable items to add.
     */
    public addItems(items: IDrawable[]): void {
        this.items.push(...items);
    }

    /**
     * Draws the container and its contained items on the screen.
     *
     * @param offset - An optional size offset to apply when drawing the container.
     * @param resolution - The resolution of the screen. Defaults to a new `Size(0, 0)` if not provided.
     */
    draw(offset?: Size, resolution?: Size): void {
        resolution = resolution || new Size(0, 0);
        offset = offset || new Size();

        const h: number = this.size.height / resolution.height;
        const w: number = this.size.width / resolution.width;
        const x: number = (this.pos.x + offset.width) / resolution.width + w * 0.5;
        const y: number = (this.pos.y + offset.height) / resolution.height + h * 0.5;

        DrawRect(x, y, w, h, this.color.r, this.color.g, this.color.b, this.color.a);

        for (const item of this.items) {
            item.draw(new Size(this.pos.x + offset.width, this.pos.y + offset.height), resolution);
        }
    }
}
