import { Color, IDrawable, Point, Screen, Size } from '..';

/**
 * Represents a sprite, an object that can be drawn on the screen with a texture,
 * position, size, rotation, and color.
 */
export class Sprite implements IDrawable {
    public textureName: string;
    public pos: Point;
    public size: Size;
    public heading: number;
    public color: Color;
    public visible: boolean;
    private _textureDict: string;

    /**
     * Creates an instance of a Sprite.
     * @param textureDict - The name of the texture dictionary.
     * @param textureName - The name of the texture.
     * @param pos - The position of the sprite on the screen.
     * @param size - The size of the sprite.
     * @param heading - The heading (rotation) of the sprite in degrees. Default is 0.
     * @param color - The color of the sprite. Default is white.
     */
    constructor(
        textureDict: string,
        textureName: string,
        pos?: Point,
        size?: Size,
        heading = 0,
        color?: Color,
    ) {
        this._textureDict = textureDict;
        this.textureName = textureName;
        this.pos = pos || new Point();
        this.size = size || new Size(0, 0);
        this.heading = heading || 0;
        this.color = color || Color.white;
        this.visible = true;
    }

    /**
     * Loads the texture dictionary required for the sprite.
     * This method will keep trying to load until the texture dictionary is loaded.
     *
     * @returns {void]
     */
    public loadTextureDictionary(): void {
        RequestStreamedTextureDict(this._textureDict, true);
        const interval: CitizenTimer = setInterval(() => {
            if (this.IsTextureDictionaryLoaded) {
                clearInterval(interval);
            }
        }, 0);
    }

    /**
     * Gets the texture dictionary name.
     *
     * @returns {string} The texture dictionary name as a string.
     */
    public get TextureDict(): string {
        return this._textureDict;
    }

    /**
     * Sets the texture dictionary name and loads it if not already loaded.
     * @param v - The texture dictionary name.
     */
    public set TextureDict(v: string) {
        this._textureDict = v;
        if (!this.IsTextureDictionaryLoaded) {
            this.loadTextureDictionary();
        }
    }

    /**
     * Checks if the texture dictionary is loaded.
     *
     * @returns {boolean} True if the texture dictionary is loaded, otherwise false.
     */
    public get IsTextureDictionaryLoaded(): boolean {
        return HasStreamedTextureDictLoaded(this._textureDict);
    }

    /**
     * Draws the sprite on the screen.
     * @param resolution - The screen resolution to use for scaling.
     */
    public draw(resolution?: Size): void;

    /**
     * Draws the sprite on the screen with the specified parameters.
     *
     * @param textureDictionary - The texture dictionary name.
     * @param textureName - The texture name.
     * @param pos - The position to draw the sprite at.
     * @param size - The size to draw the sprite with.
     * @param heading - The heading (rotation) of the sprite in degrees.
     * @param color - The color to draw the sprite with.
     * @param loadTexture - Whether to load the texture if not already loaded.
     * @param resolution - The screen resolution to use for scaling.
     */
    public draw(
        textureDictionary?: string,
        textureName?: string,
        pos?: Point,
        size?: Size,
        heading?: number,
        color?: Color,
        loadTexture?: boolean,
        resolution?: Size,
    ): void;

    /**
     * Draws the sprite on the screen with either the specified or current attributes.
     *
     * @param arg1 - The screen resolution to use for scaling or the texture dictionary name.
     * @param textureName - The texture name.
     * @param pos - The position to draw the sprite at.
     * @param size - The size to draw the sprite with.
     * @param heading - The heading (rotation) of the sprite in degrees.
     * @param color - The color to draw the sprite with.
     * @param loadTexture=true - Whether to load the texture if not already loaded.
     * @param resolution - The screen resolution to use for scaling.
     *
     * @returns {void}
     */
    public draw(
        arg1?: Size | string,
        textureName?: string,
        pos?: Point,
        size?: Size,
        heading?: number,
        color?: Color,
        loadTexture = true,
        resolution?: Size,
    ): void {
        const textureDictionary: string =
            arg1 && typeof arg1 === 'string' ? arg1 : this.TextureDict;

        textureName = textureName || this.textureName;
        pos = pos || this.pos;
        size = size || this.size;
        heading = heading || this.heading;
        color = color || this.color;

        if (loadTexture) {
            if (!HasStreamedTextureDictLoaded(textureDictionary)) {
                RequestStreamedTextureDict(textureDictionary, false);
            }
        }

        resolution = arg1 instanceof Size ? arg1 : resolution;
        resolution = resolution || new Size(Screen.getScaledWidth(), Screen.getHeight());

        const w: number = size.width / resolution.width;
        const h: number = size.height / resolution.height;
        const x: number = pos.x / resolution.width + w * 0.5;
        const y: number = pos.y / resolution.height + h * 0.5;

        DrawSprite(
            textureDictionary,
            textureName,
            x,
            y,
            w,
            h,
            heading,
            color.r,
            color.g,
            color.b,
            color.a,
        );
    }
}
