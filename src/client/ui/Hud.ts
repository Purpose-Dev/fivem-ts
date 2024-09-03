import { CursorType, HudComponent } from '../enums';
import { Point } from '../utils';

/**
 * Static class for managing HUD (Heads-Up Display) components and cursor interactions.
 * This class allows you to control the visibility of HUD components, the cursor's position and sprite,
 * and the radar's zoom level and visibility.
 */
export abstract class Hud {
    /**
     * Checks if a specific HUD component is currently active (visible).
     *
     * @param component - The HUD component to check.
     * @returns `true` if the HUD component is active, `false` otherwise.
     */
    public static isComponentActive(component: HudComponent): boolean {
        return IsHudComponentActive(component.valueOf());
    }

    /**
     * Forces a specific HUD component to be shown for the current frame.
     *
     * @param component - The HUD component to show.
     */
    public static showComponentThisFrame(component: HudComponent): void {
        ShowHudComponentThisFrame(component.valueOf());
    }

    /**
     * Forces a specific HUD component to be hidden for the current frame.
     *
     * @param component - The HUD component to hide.
     */
    public static hideComponentThisFrame(component: HudComponent): void {
        HideHudComponentThisFrame(component.valueOf());
    }

    /**
     * Sets the cursor's position on the screen.
     *
     * @param point - The `Point` object representing the cursor's new position (with x and y coordinates).
     */
    public static set CursorPosition(point: Point) {
        SetCursorLocation(point.x, point.y);
    }

    /**
     * Gets the current sprite used for the cursor.
     *
     * @returns The current cursor sprite, defaulting to `CursorType.DownArrow`.
     */
    public static get CursorSprite(): CursorType {
        return CursorType.DownArrow;
    }

    /**
     * Sets the sprite used for the cursor.
     *
     * @param cursorType - The `CursorType` to set as the current cursor sprite.
     */
    public static set CursorSprite(cursorType: CursorType) {
        SetCursorSprite(cursorType.valueOf());
    }

    /**
     * Gets whether the HUD is currently visible.
     *
     * @returns `true` if the HUD is visible, `false` otherwise.
     */
    public static get IsVisible(): boolean {
        return !(IsHudHidden() || !IsHudPreferenceSwitchedOn());
    }

    /**
     * Sets the visibility of the HUD.
     *
     * @param toggle - A boolean indicating whether to show (`true`) or hide (`false`) the HUD.
     */
    public static set IsVisible(toggle: boolean) {
        DisplayHud(toggle);
    }

    /**
     * Gets whether the radar (minimap) is currently visible.
     *
     * @returns `true` if the radar is visible, `false` otherwise.
     */
    public static get IsRadarVisible(): boolean {
        return !(IsRadarHidden() || IsRadarPreferenceSwitchedOn());
    }

    /**
     * Sets the visibility of the radar (minimap).
     *
     * @param toggle - A boolean indicating whether to show (`true`) or hide (`false`) the radar.
     */
    public static set IsRadarVisible(toggle: boolean) {
        DisplayRadar(toggle);
    }

    /**
     * Sets the zoom level of the radar (minimap).
     *
     * @param zoomLevel - The zoom level for the radar, between 0 and 200. Values outside this range will be clamped.
     */
    public static set RadarZoom(zoomLevel: number) {
        if (zoomLevel < 0) {
            zoomLevel = 0;
        } else if (zoomLevel > 200) {
            zoomLevel = 200;
        }

        SetRadarZoom(zoomLevel);
    }

    /**
     * Sets the precise zoom level of the radar (minimap).
     *
     * @param zoomLevel - The precise zoom level for the radar.
     */
    public static set RadarZoomPrecise(zoomLevel: number) {
        SetRadarZoomPrecise(zoomLevel);
    }
}
