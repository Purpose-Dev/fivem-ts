import { Hud, LoadingPrompt, Screen, Sprite } from '.';
import { Color, Point, Size } from '../utils';
import { HudComponent } from '../enums';

/**
 * Holds an array of active Timerbar instances.
 * Each Timerbar represents a progress bar or timer that is currently active.
 * Initialized as an empty array.
 *
 * @type {Timerbar[]}
 */
const activeTimerBars: Timerbar[] = [];

/**
 * Draws text on the screen at the specified position with the given options.
 *
 * @param {string} text - The text to be displayed.
 * @param {[number, number]} position - The x and y coordinates where the text should be displayed.
 * @param {Object} options - Configuration options for the text.
 * @param {number} options.align - The alignment of the text (1 for center, 2 for right-justified).
 * @param {number | number[]} options.color - The color of the text as an RGBA array or a single integer.
 * @param {number} options.font - The font type to be used.
 * @param {boolean} options.outline - Whether to draw an outline around the text.
 * @param {number} options.scale - The scale of the text.
 * @param {boolean} options.shadow - Whether to draw a shadow behind the text.
 * @return {void}
 */
function drawText(
    text: string,
    position: [number, number],
    options: {
        align: number;
        color: number | number[];
        font: number;
        outline: boolean;
        scale: number;
        shadow: boolean;
    },
): void {
    options = {
        ...{
            align: 1,
            color: [255, 255, 255, 255],
            font: 4,
            outline: true,
            scale: 0.3,
            shadow: true,
        },
        ...options,
    };

    const font = options.font;
    const scale = options.scale;
    const outline = options.outline;
    const shadow = options.shadow;
    const color = options.color;
    const align = options.align;

    SetTextEntry('CELL_EMAIL_BCON');

    for (let i = 0; i < text.length; i++) {
        const subStringText: string = text.substring(i, Math.min(i + 99, text.length));
        AddTextComponentSubstringPlayerName(subStringText);
    }

    SetTextFont(font);
    SetTextScale(scale, scale);
    SetTextColour(color[0], color[1], color[2], color[3]);

    if (shadow) {
        SetTextDropShadow();
    }

    if (outline) {
        SetTextOutline();
    }

    switch (align) {
        case 1: {
            SetTextCentre(true);
            break;
        }

        case 2: {
            SetTextRightJustify(true);
            SetTextWrap(0.0, position[0] || 0);
            break;
        }
    }

    DrawText(position[0] || 0, position[1] || 0);
}

/**
 * Create a Timerbar. It's automatically added to the internal Timerbar array and drawn in a FIFO (first in, first out) way.
 *
 * ```ts
 * // Create simple Timerbar
 * const myTimerbar = new Cfx.Timerbar("Hello");
 * myTimerbar.Text = "World";
 *
 * // Disable Timerbar later on
 * myTimerbar.Visible = false;
 * ```
 */
export class Timerbar {
    private readonly sprite = null;
    private title = '';
    private text = '';
    private usePlayerStyle = false;
    private isVisible = false;
    private pbarValue = 0.0;
    private textColor = [240, 240, 240, 255];
    private pbarBgColor = [155, 155, 155, 255];
    private pbarFgColor = [255, 255, 255, 255];

    /**
     * Constructor for the Timerbar class.
     * @param title - The title of the Timerbar.
     * @param useProgressBar - Whether to use a progress bar.
     */
    constructor(
        title: string,
        private readonly useProgressBar = false,
    ) {
        this.title = title;
        this.text = '';
        this.useProgressBar = useProgressBar;
        this.usePlayerStyle = false;
        this.pbarValue = 0.0;
        this.textColor = [240, 240, 240, 255];
        this.pbarBgColor = [155, 155, 155, 255];
        this.pbarFgColor = [255, 255, 255, 255];

        const safeZone: number = GetSafeZoneSize();
        const safeZoneX: number = (1.0 - safeZone) * 0.5;
        const safeZoneY: number = (1.0 - safeZone) * 0.5;
        this.sprite = new Sprite(
            'timerbars',
            'all_black_bg',
            new Point(
                Screen.getScaledWidth() * 0.918 - safeZoneX,
                Screen.getHeight() * 0.984 - safeZoneY,
            ),
            new Size(Screen.getScaledWidth() * 0.165, Screen.getHeight() * 0.035),
            0,
            new Color(160, 255, 255, 255),
        );
        if (!this.sprite.IsTextureDictionaryLoaded) {
            this.sprite.loadTextureDictionary();
        }

        this.isVisible = true;
        activeTimerBars.push(this);
    }

    /**
     * Gets the sprite associated with the Timerbar.
     * @returns {Sprite} The sprite object.
     */
    public get Sprite(): Sprite {
        return this.sprite;
    }

    /**
     * Gets the title of the Timerbar.
     * @returns {string} The title as a string.
     */
    public get Title(): string {
        return this.title;
    }

    /**
     * Sets the title of the Timerbar.
     * @param {string} value - The new title for the Timerbar.
     */
    public set Title(value: string) {
        this.title = value;
    }

    /**
     * Gets the text of the Timerbar.
     * @returns {string} The text as a string.
     */
    public get Text(): string {
        return this.text;
    }

    /**
     * Sets the text of the Timerbar.
     * @param {string} value - The new text for the Timerbar.
     */
    public set Text(value: string) {
        this.text = value;
    }

    /**
     * Gets if the Timerbar is using a progress bar.
     * @returns {boolean} True if the Timerbar is using a progress bar, false otherwise.
     */
    public get UseProgressBar(): boolean {
        return this.useProgressBar;
    }

    /**
     * Gets the player style of the Timerbar.
     * @returns {boolean} True if using player style, false otherwise.
     */
    public get PlayerStyle(): boolean {
        return this.usePlayerStyle;
    }

    /**
     * Sets the player style of the Timerbar.
     * @param {boolean} value - True to use player style, false otherwise.
     */
    public set PlayerStyle(value: boolean) {
        this.usePlayerStyle = value;
    }

    /**
     * Gets the visibility of the Timerbar.
     * @returns {boolean} True if the Timerbar is visible, false otherwise.
     */
    public get Visible(): boolean {
        return this.isVisible;
    }

    /**
     * Sets the visibility of the Timerbar.
     * @param {boolean} value - True to make the Timerbar visible, false otherwise.
     */
    public set Visible(value: boolean) {
        const idx: number = activeTimerBars.indexOf(this);

        if (value) {
            if (idx !== -1) {
                return;
            }
            activeTimerBars.push(this);
        } else {
            if (idx === -1) {
                return;
            }
            activeTimerBars.splice(idx, 1);
        }

        this.isVisible = value;
    }

    /**
     * Gets the progress value of the Timerbar.
     * @returns {number} The progress value, between 0.0 and 1.0.
     */
    public get Progress(): number {
        return this.pbarValue;
    }

    /**
     * Sets the progress value of the Timerbar.
     * @param {number} value - The new progress value, between 0.0 and 1.0.
     */
    public set Progress(value: number) {
        this.pbarValue = value <= 0.0 ? 0.0 : value >= 1.0 ? 1.0 : value;
    }

    /**
     * Gets the text color of the Timerbar.
     * @returns {number | number[]} The text color as an array or a number.
     */
    public get TextColor(): number | number[] {
        return this.textColor;
    }

    /**
     * Sets the text color of the Timerbar.
     * @param {number | number[]} value - The new text color as an array or a number.
     */
    public set TextColor(value: number | number[]) {
        if (Array.isArray(value)) {
            this.textColor = value;
        } else {
            const result: [number, number, number, number] = GetHudColour(value);
            this.textColor = [result[0], result[1], result[2], result[3]];
        }
    }

    /**
     * Gets the background color of the progress bar.
     * @returns {number[] | number} The background color as an array or a number.
     */
    public get ProgressbarBgColor(): number[] | number {
        return this.pbarBgColor;
    }

    /**
     * Sets the background color of the progress bar.
     * @param {number[] | number} value - The new background color as an array or a number.
     */
    public set ProgressbarBgColor(value: number[] | number) {
        if (Array.isArray(value)) {
            this.pbarBgColor = value;
        } else {
            const result: [number, number, number, number] = GetHudColour(value);
            this.pbarBgColor = [result[0], result[1], result[2], result[3]];
        }
    }

    /**
     * Gets the foreground color of the progress bar.
     * @returns {number[] | number} The foreground color as an array or a number.
     */
    public get ProgressbarFgColor(): number[] | number {
        return this.pbarFgColor;
    }

    /**
     * Sets the foreground color of the progress bar.
     * @param {number[] | number} value - The new foreground color as an array or a number.
     */
    public set ProgressbarFgColor(value: number[] | number) {
        if (Array.isArray(value)) {
            this.pbarFgColor = value;
        } else {
            const result: [number, number, number, number] = GetHudColour(value);
            this.pbarFgColor = [result[0], result[1], result[2], result[3]];
        }
    }
}

setTick((): void => {
    if (activeTimerBars.length <= 0) {
        return;
    }

    const safeZone: number = GetSafeZoneSize();
    const safeZoneX: number = (1.0 - safeZone) * 0.5;
    const safeZoneY: number = (1.0 - safeZone) * 0.5;

    Hud.hideComponentThisFrame(HudComponent.AreaName);
    Hud.hideComponentThisFrame(HudComponent.StreetName);

    let loadingPromptOffset = 0;
    if (LoadingPrompt.getIsActive()) {
        loadingPromptOffset = 0.035 + 0.035 * 0.038 * 2;
    }

    activeTimerBars.forEach((timerbar: Timerbar) => {
        const drawY: number =
            0.984 - loadingPromptOffset - safeZoneY - activeTimerBars.indexOf(timerbar) * 0.038;
        DrawSprite(
            'timerbars',
            'all_black_bg',
            0.918 - safeZoneX,
            drawY,
            0.165,
            0.035,
            0.0,
            255,
            255,
            255,
            160,
        );

        drawText(
            timerbar.Title,
            [0.918 - safeZoneX + 0.012, drawY - 0.009 - (timerbar.PlayerStyle ? 0.00625 : 0)],
            {
                align: 2,
                color: timerbar.TextColor,
                font: timerbar.PlayerStyle ? 4 : 0,
                outline: false,
                scale: timerbar.PlayerStyle ? 0.465 : 0.3,
                shadow: timerbar.PlayerStyle,
            },
        );

        if (timerbar.UseProgressBar) {
            const pbarX = 0.918 - safeZoneX + 0.047;
            const pbarY = drawY + 0.0015;
            const width = 0.0616 * timerbar.Progress;

            DrawRect(
                pbarX,
                pbarY,
                0.0616,
                0.0105,
                timerbar.ProgressbarBgColor[0],
                timerbar.ProgressbarBgColor[1],
                timerbar.ProgressbarBgColor[2],
                timerbar.ProgressbarBgColor[3],
            );

            DrawRect(
                pbarX - 0.0616 / 2 + width / 2,
                pbarY,
                width,
                0.0105,
                timerbar.ProgressbarFgColor[0],
                timerbar.ProgressbarFgColor[1],
                timerbar.ProgressbarFgColor[2],
                timerbar.ProgressbarFgColor[3],
            );
        } else {
            drawText(timerbar.Text, [0.918 - safeZoneX + 0.0785, drawY + -0.0165], {
                align: 2,
                color: timerbar.TextColor,
                font: 0,
                outline: false,
                scale: 0.425,
                shadow: false,
            });
        }
    });
});
