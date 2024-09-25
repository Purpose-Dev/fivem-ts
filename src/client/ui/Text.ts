import { Point, Size, Color } from '../utils';
import { IDrawable } from './interfaces';
import { Alignment, Font } from '../enums';
import { Screen } from './Screen';

/**
 * The `Text` class is responsible for rendering text on the screen in FiveM.
 * It provides several customization options including font, color, alignment, and more.
 *
 * Example usage:
 *
 * ```ts
 * import { Text } from 'fivem-ts/client/ui';
 * import { Point, Color } from 'fivem-ts/client/utils';
 * import { Font, Alignment } from 'fivem-ts/client/enums';
 *
 * const myText = new Text(
 *     'Hello, World!',
 *     new Point(500, 500),
 *     1.5,
 *     new Color(255, 0, 0, 255),
 *     Font.ChaletLondon,
 *     Alignment.Centered,
 *     true,
 *     true,
 * );
 *
 * myText.draw();
 * ```
 */
export class Text implements IDrawable {
    public caption: string;
    public pos: Point;
    public scale: number;
    public color: Color;
    public font: Font;
    public alignment: Alignment;
    public dropShadow: boolean;
    public outline: boolean;
    public wordWrap: Size;
    public size: Size;

    /**
     *
     * @param caption Text to display
     * @param pos Position of text relative to alignment. In pixels.
     * @param scale Size of text. Default 1.0
     * @param color Color of text. Default black.
     * @param font Font of text. Default Chalet London.
     * @param alignment Alignment of text. Default Left.
     * @param dropShadow
     * @param outline
     * @param wordWrap
     */
    constructor(
        caption: string,
        pos: Point,
        scale = 1,
        color = Color.white,
        font = Font.ChaletLondon,
        alignment = Alignment.Left,
        dropShadow = false,
        outline = false,
        wordWrap?: Size,
    ) {
        this.caption = caption;
        this.pos = pos;
        this.scale = scale;
        this.color = color;
        this.font = font;
        this.alignment = alignment;
        this.dropShadow = dropShadow;
        this.outline = outline;
        this.wordWrap = wordWrap;
    }

    /**
     * Draws the text on the screen with the specified properties.
     *
     * This method can be used to draw text with specific parameters or by using the properties defined in the instance.
     *
     * @param offset Optional offset from the original position.
     * @param resolution Optional screen resolution to adapt the position and size.
     */
    draw(offset?: Size, resolution?: Size): void;
    /**
     * Draws the text with overridden parameters.
     *
     * @param caption The text to display.
     * @param pos The position of the text.
     * @param scale The scale of the text.
     * @param color The color of the text.
     * @param font The font of the text.
     * @param alignment The alignment of the text.
     * @param dropShadow Whether to apply a drop shadow.
     * @param outline Whether to apply an outline.
     * @param wordWrap The word wrap size.
     * @param resolution The screen resolution.
     */
    draw(
        caption: string,
        pos: Point,
        scale: number,
        color?: Color,
        font?: Font,
        alignment?: Alignment,
        dropShadow?: boolean,
        outline?: boolean,
        wordWrap?: Size,
        resolution?: Size,
    ): void;
    public draw(
        arg1?: Size | string,
        arg2?: Size | Point,
        scale?: number,
        color?: Color,
        font?: Font,
        alignment?: Alignment,
        dropShadow?: boolean,
        outline?: boolean,
        wordWrap?: Size,
        resolution?: Size,
    ): void {
        resolution = arg2 instanceof Size ? arg2 : resolution;

        if (scale === undefined) {
            if (arg1 && arg1 instanceof Size) {
                arg2 = new Point(this.pos.x + arg1.width, this.pos.y + arg1.height);
            } else {
                arg2 = this.pos;
            }
            arg1 = this.caption;
            scale = this.scale;
            color = this.color;
            font = this.font;
            alignment = this.alignment;
            dropShadow = this.dropShadow;
            outline = this.outline;
            wordWrap = this.wordWrap;
        } else {
            arg1 = arg1 || this.caption;
            if (!arg2) {
                arg2 = this.pos;
            } else {
                arg2 = arg2 as Point;
            }
            scale = scale !== null ? scale : this.scale;
            color = color || this.color;
            font = font !== undefined && font !== null ? font : this.font;
            alignment = alignment !== undefined && alignment !== null ? alignment : this.alignment;
            dropShadow = typeof dropShadow === 'boolean' ? dropShadow : dropShadow;
            outline = typeof outline === 'boolean' ? outline : outline;
            wordWrap = wordWrap || this.wordWrap;
        }

        Text.draw(
            arg1 as string,
            arg2,
            scale,
            color,
            font,
            alignment,
            dropShadow,
            outline,
            wordWrap,
            resolution,
        );
    }

    // Static Methods

    /**
     * Adds a long string to the text component, splitting it into chunks that can be rendered in GTA V.
     *
     * @param str The string to add.
     */
    public static addLongString(str: string): void {
        const strLength = 99;

        for (let i = 0; i < str.length; i++) {
            const subStr: string = str.substring(i, i + Math.min(strLength - i));
            AddTextComponentSubstringPlayerName(subStr);
        }
    }

    /**
     * Draws the text with the specified parameters.
     *
     * This is a static method that can be used to draw text without needing to create an instance of `Text`.
     *
     * @param caption The text to display.
     * @param pos The position of the text on the screen.
     * @param scale The scale of the text.
     * @param color The color of the text.
     * @param font The font of the text.
     * @param alignment The alignment of the text.
     * @param dropShadow Whether to apply a drop shadow to the text.
     * @param outline Whether to apply an outline to the text.
     * @param wordWrap The word wrap size for the text.
     * @param resolution The screen resolution for scaling.
     */
    public static draw(
        caption: string,
        pos: Point,
        scale = 1,
        color = Color.white,
        font = Font.ChaletLondon,
        alignment = Alignment.Left,
        dropShadow = false,
        outline = false,
        wordWrap?: Size,
        resolution?: Size,
    ): void {
        resolution = resolution || new Size(Screen.getScaledWidth(), Screen.getHeight());
        const x: number = pos.x / resolution.width;
        const y: number = pos.y / resolution.height;

        SetTextFont(Number(font));
        SetTextScale(1.0, scale);
        SetTextColour(color.r, color.g, color.b, color.a);

        if (dropShadow) {
            SetTextDropshadow(2, 0, 0, 0, 0);
        }

        if (outline) {
            SetTextOutline();
        }

        switch (alignment) {
            case Alignment.Centered:
                SetTextCentre(true);
                break;
            case Alignment.Right:
                SetTextRightJustify(true);
                if (!wordWrap) {
                    SetTextWrap(0.0, x);
                }
                break;
            default:
                break;
        }

        if (wordWrap) {
            SetTextWrap(x, (pos.x + wordWrap.width) / resolution.width);
        }

        SetTextEntry('STRING');
        Text.addLongString(caption);
        DrawText(x, y);
    }
}
