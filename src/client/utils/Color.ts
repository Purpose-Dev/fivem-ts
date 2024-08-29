import { FMath } from '../../shared';

/**
 * Represents a color with red, green, blue, and alpha (opacity) components.
 */
export class Color {
    /**
     * A transparent color (fully transparent).
     */
    public static empty: Color = new Color(0, 0, 0, 0);

    /**
     * A fully transparent color.
     */
    public static transparent: Color = new Color(0, 0, 0, 0);

    /**
     * The color black (RGB: 0, 0, 0).
     */
    public static black: Color = new Color(0, 0, 0, 255);

    /**
     * The color white (RGB: 255, 255, 255).
     */
    public static white: Color = new Color(255, 255, 255, 255);

    /**
     * The color white smoke (RGB: 245, 245, 245).
     */
    public static whiteSmoke: Color = new Color(245, 245, 245, 255);

    /**
     * The color gray (RGB: 128, 128, 128).
     */
    public static gray: Color = new Color(128, 128, 128, 255);

    /**
     * The color silver (RGB: 192, 192, 192).
     */
    public static silver: Color = new Color(192, 192, 192, 255);

    /**
     * The color maroon (RGB: 128, 0, 0).
     */
    public static maroon: Color = new Color(128, 0, 0, 255);

    /**
     * The color red (RGB: 255, 0, 0).
     */
    public static red: Color = new Color(255, 0, 0, 255);

    /**
     * The color purple (RGB: 128, 0, 128).
     */
    public static purple: Color = new Color(128, 0, 128, 255);

    /**
     * The color fuchsia (RGB: 255, 0, 255).
     */
    public static fuchsia: Color = new Color(255, 0, 255, 255);

    /**
     * The color green (RGB: 0, 128, 0).
     */
    public static green: Color = new Color(0, 128, 0, 255);

    /**
     * The color lime (RGB: 0, 255, 0).
     */
    public static lime: Color = new Color(0, 255, 0, 255);

    /**
     * The color olive (RGB: 128, 128, 0).
     */
    public static olive: Color = new Color(128, 128, 0, 255);

    /**
     * The color yellow (RGB: 255, 255, 0).
     */
    public static yellow: Color = new Color(255, 255, 0, 255);

    /**
     * The color navy (RGB: 0, 0, 128).
     */
    public static navy: Color = new Color(0, 0, 128, 255);

    /**
     * The color blue (RGB: 0, 0, 255).
     */
    public static blue: Color = new Color(0, 0, 255, 255);

    /**
     * The color teal (RGB: 0, 128, 128).
     */
    public static teal: Color = new Color(0, 128, 128, 255);

    /**
     * The color aqua (RGB: 0, 255, 255).
     */
    public static aqua: Color = new Color(0, 255, 255, 255);

    /**
     * The color orange (RGB: 255, 165, 0).
     */
    public static orange: Color = new Color(255, 165, 0, 255);

    /**
     * The color pink (RGB: 255, 192, 203).
     */
    public static pink: Color = new Color(255, 192, 203, 255);

    /**
     * The color brown (RGB: 165, 42, 42).
     */
    public static brown: Color = new Color(165, 42, 42, 255);

    /**
     * The color light coral (RGB: 240, 128, 128).
     */
    public static lightCoral: Color = new Color(240, 128, 128, 255);

    /**
     * The color coral (RGB: 255, 127, 80).
     */
    public static coral: Color = new Color(255, 127, 80, 255);

    /**
     * The color gold (RGB: 255, 215, 0).
     */
    public static gold: Color = new Color(255, 215, 0, 255);

    /**
     * The color khaki (RGB: 240, 230, 140).
     */
    public static khaki: Color = new Color(240, 230, 140, 255);

    /**
     * The color salmon (RGB: 250, 128, 114).
     */
    public static salmon: Color = new Color(250, 128, 114, 255);

    /**
     * The color chocolate (RGB: 210, 105, 30).
     */
    public static chocolate: Color = new Color(210, 105, 30, 255);

    /**
     * Creates a new `Color` instance.
     * @param r - The red component of the color (0-255).
     * @param g - The green component of the color (0-255).
     * @param b - The blue component of the color (0-255).
     * @param a - The alpha (opacity) component of the color (0-255).
     */
    constructor(
        public r: number,
        public g: number,
        public b: number,
        public a = 255,
    ) {}

    /**
     * Checks if this color is equal to another color.
     * @param other - The color to compare with.
     * @returns `true` if the colors are equal, `false` otherwise.
     */
    public equals(other: Color): boolean {
        return this.a === other.a && this.r === other.r && this.g === other.g && this.b === other.b;
    }

    /**
     * Converts the color to a JSON object.
     * @returns An object representing the color with `r`, `g`, `b`, and `a` properties.
     */
    public toJson(): { r: number; g: number; b: number; a: number } {
        return {
            r: this.r,
            g: this.g,
            b: this.b,
            a: this.a,
        };
    }

    /**
     * Converts the color to an array.
     * @returns An array representing the color with `[r, g, b, a]` components.
     */
    public toArray(): [number, number, number, number] {
        return [this.r, this.g, this.b, this.a];
    }

    /**
     * Converts the color to an RGBA string.
     * @returns A string in the format `rgba(r, g, b, a)`.
     */
    public toRgbaString(): string {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    }

    /**
     * Converts the color to a hexadecimal string (RGB format).
     * @returns A string in the format `#rrggbb`.
     */
    public toHex(): string {
        return `#${this.componentToHex(this.r)}${this.componentToHex(this.g)}${this.componentToHex(this.b)}`;
    }

    /**
     * Converts the color to a hexadecimal string (ARGB format).
     * @returns A string in the format `#aarrggbb`.
     */
    public toArgbHex(): string {
        return `#${this.componentToHex(this.a)}${this.componentToHex(this.r)}${this.componentToHex(this.g)}${this.componentToHex(this.b)}`;
    }

    /**
     * Converts the color to HSL format.
     * @returns An object with `h` (hue), `s` (saturation), `l` (lightness), and `a` (alpha) properties.
     */
    public toHsl(): { h: number; s: number; l: number; a: number } {
        const r = this.r / 255;
        const g = this.g / 255;
        const b = this.b / 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const delta = max - min;

        let h: number, s: number, l: number;
        l = (max + min) / 2;

        if (delta === 0) {
            h = s = 0;
        } else {
            s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

            switch (max) {
                case r:
                    h = (g - b) / delta + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / delta + 2;
                    break;
                case b:
                    h = (r - g) / delta + 4;
                    break;
            }
            h /= 6;
        }

        return {
            h: Math.round(h * 360),
            s: Math.round(s * 100),
            l: Math.round(l * 100),
            a: this.a,
        };
    }

    /**
     * Adjusts the brightness of the color.
     * @param factor - The factor by which to adjust the brightness. Values less than 1 darken the color, values greater than 1 lighten the color.
     * @returns A new `Color` instance with adjusted brightness.
     */
    public adjustBrightness(factor: number) {
        return new Color(
            FMath.clamp(this.r * factor, 0, 255),
            FMath.clamp(this.g * factor, 0, 255),
            FMath.clamp(this.b * factor, 0, 255),
            255,
        );
    }

    /**
     * Darkens the color by a percentage.
     * @param percentage - The percentage by which to darken the color.
     * @returns A new `Color` instance that is darker by the specified percentage.
     */
    public darken(percentage: number): Color {
        return this.adjustBrightness(1 - percentage / 100);
    }

    /**
     * Lightens the color by a percentage.
     * @param percentage - The percentage by which to lighten the color.
     * @returns A new `Color` instance that is lighter by the specified percentage.
     */
    public lighten(percentage: number): Color {
        return this.adjustBrightness(1 + percentage / 100);
    }

    /**
     * Blends this color with another color.
     * @param other - The color to blend with.
     * @param ratio - The ratio of blending between this color and the other color. `0` means full color, `1` means full `other` color.
     * @returns A new `Color` instance representing the blended color.
     */
    public blend(other: Color, ratio: number): Color {
        const clampedRatio: number = FMath.clamp(ratio, 0, 1);

        return new Color(
            FMath.clamp(this.r * (1 - clampedRatio) + other.r * clampedRatio, 0, 255),
            FMath.clamp(this.g * (1 - clampedRatio) + other.g * clampedRatio, 0, 255),
            FMath.clamp(this.b * (1 - clampedRatio) + other.b * clampedRatio, 0, 255),
            FMath.clamp(this.a * (1 - clampedRatio) + other.a * clampedRatio, 0, 255),
        );
    }

    /**
     * Inverts the color.
     * @returns A new `Color` instance representing the inverted color.
     */
    public invert(): Color {
        return new Color(255 - this.r, 255 - this.g, 255 - this.b, this.a);
    }

    /**
     * Converts a color component to a hexadecimal string.
     * @param c - The color component (0-255).
     * @returns A two-character hexadecimal string representing the color component.
     */
    private componentToHex(c: number): string {
        return c.toString(16).padStart(2, '0');
    }

    // Static Methods

    /**
     * Creates a new `Color` instance from ARGB values.
     * @param a - The alpha (opacity) component (0-255).
     * @param r - The red component (0-255).
     * @param g - The green component (0-255).
     * @param b - The blue component (0-255).
     * @returns A new `Color` instance.
     */
    public static fromArgb(a: number, r: number, g: number, b: number): Color {
        return new Color(r, g, b, a);
    }

    /**
     * Creates a new `Color` instance from RGB values.
     * @param r - The red component (0-255).
     * @param g - The green component (0-255).
     * @param b - The blue component (0-255).
     * @returns A new `Color` instance with full opacity (alpha = 255).
     */
    public static fromRgb(r: number, g: number, b: number): Color {
        return new Color(255, r, g, b);
    }

    /**
     * Creates a new `Color` instance from a hexadecimal color string.
     * @param hex - The hexadecimal color string (e.g., `#RRGGBB`).
     * @returns A new `Color` instance.
     */
    public static fromHex(hex: string): Color {
        if (hex.startsWith('#')) {
            hex = hex.substring(1);
        }

        const bigInt: number = parseInt(hex, 16);
        const r = (bigInt >> 16) & 255;
        const g = (bigInt >> 8) & 255;
        const b = bigInt & 255;

        return new Color(r, g, b, 255);
    }

    /**
     * Creates a new `Color` instance from an RGBA string.
     * @param rgba - The RGBA color string (e.g., `rgba(255, 0, 0, 1)`).
     * @returns A new `Color` instance.
     * @throws Error if the RGBA string is invalid.
     */
    public static fromRgbaString(rgba: string): Color {
        const result = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+))?\s*\)$/.exec(
            rgba,
        );

        if (result) {
            const r = parseInt(result[1], 10);
            const g = parseInt(result[2], 10);
            const b = parseInt(result[3], 10);
            const a = result[4] ? Math.round(parseFloat(result[4]) * 255) : 255;
            return new Color(r, g, b, a);
        }

        throw new Error('Invalid RGBA string');
    }

    /**
     * Creates a new `Color` instance from HSL values.
     * @param h - The hue (0-360 degrees).
     * @param s - The saturation (0-100).
     * @param l - The lightness (0-100).
     * @param a - The alpha (opacity) component (0-255).
     * @returns A new `Color` instance.
     */
    public static fromHsl(h: number, s: number, l: number, a = 255): Color {
        h = h % 360;
        s = FMath.clamp(s, 0, 100) / 100;
        l = FMath.clamp(l, 0, 100) / 100;

        const c = (1 - Math.abs(2 * l - 1)) * s;
        const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
        const m = l - c / 2;

        let r: number, g: number, b: number;
        if (h >= 0 && h < 60) {
            r = c;
            g = x;
            b = 0;
        } else if (h >= 60 && h < 120) {
            r = x;
            g = c;
            b = 0;
        } else if (h >= 120 && h < 180) {
            r = 0;
            g = c;
            b = x;
        } else if (h >= 180 && h < 240) {
            r = 0;
            g = x;
            b = c;
        } else if (h >= 240 && h < 300) {
            r = x;
            g = 0;
            b = c;
        } else {
            r = c;
            g = 0;
            b = x;
        }

        return new Color(
            FMath.clamp((r + m) * 255, 0, 255),
            FMath.clamp((g + m) * 255, 0, 255),
            FMath.clamp((b + m) * 255, 0, 255),
            a,
        );
    }
}
