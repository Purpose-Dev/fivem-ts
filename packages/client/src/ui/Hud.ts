import { CursorType, HudComponent, Point, RadarZoomLevel } from '../';

/**
 * Module for managing HUD (Heads-Up Display) components and cursor interactions.
 * This module allows you to control the visibility of HUD components, the cursor's position and sprite,
 * and the radar's zoom level and visibility.
 */
export namespace Hud {
    /**
     * Checks if a specific HUD component is currently active (visible).
     *
     * @param component {HudComponent} - The HUD component to check.
     *
     * @returns {boolean} `true` if the HUD component is active, `false` otherwise.
     */
    export function isComponentActive(component: HudComponent): boolean {
        return IsHudComponentActive(component);
    }

    /**
     * Forces a specific HUD component to be shown for the current frame.
     *
     * @param component {HudComponent} - The HUD component to show.
     *
     * @returns {void}
     */
    export function showComponentThisFrame(component: HudComponent): void {
        ShowHudComponentThisFrame(component);
    }

    /**
     * Forces a specific HUD component to be hidden for the current frame.
     *
     * @param component {HudComponent} - The HUD component to hide.
     *
     * @returns {void}
     */
    export function hideComponentThisFrame(component: HudComponent): void {
        HideHudComponentThisFrame(component);
    }

    /**
     * Sets the cursor's position on the screen.
     *
     * @param point {Point} - The `Point` object representing the cursor's new position (with x and y coordinates).
     *
     * @returns {void}
     */
    export function setCursorPosition(point: Point): void {
        SetCursorLocation(point.x, point.y);
    }

    /**
     * Gets the current sprite used for the cursor.
     *
     * @returns {CursorType} The current cursor sprite, defaulting to `CursorType.DownArrow`.
     */
    export function getCursorSprite(): CursorType {
        return CursorType.DownArrow;
    }

    /**
     * Sets the sprite used for the cursor.
     *
     * @param cursorType {CursorType} - The `CursorType` to set as the current cursor sprite.
     *
     * @returns {void}
     */
    export function setCursorSprite(cursorType: CursorType): void {
        SetCursorSprite(cursorType);
    }

    /**
     * Gets whether the HUD is currently visible.
     *
     * @returns {boolean} `true` if the HUD is visible, `false` otherwise.
     */
    export function getIsVisible(): boolean {
        return !(IsHudHidden() || !IsHudPreferenceSwitchedOn());
    }

    /**
     * Sets the visibility of the HUD.
     *
     * @param toggle {boolean} - A boolean indicating whether to show (`true`) or hide (`false`) the HUD.
     *
     * @returns {void}
     */
    export function setIsVisible(toggle: boolean): void {
        DisplayHud(toggle);
    }

    /**
     * Gets whether the radar (minimap) is currently visible.
     *
     * @returns {boolean} `true` if the radar is visible, `false` otherwise.
     */
    export function getIsRadarVisible(): boolean {
        return !(IsRadarHidden() || IsRadarPreferenceSwitchedOn());
    }

    /**
     * Sets the visibility of the radar (minimap).
     *
     * @param toggle {boolean} - A boolean indicating whether to show (`true`) or hide (`false`) the radar.
     *
     * @returns {void}
     */
    export function setIsRadarVisible(toggle: boolean): void {
        DisplayRadar(toggle);
    }

    /**
     * Sets the zoom level of the radar (minimap).
     *
     * @param zoomLevel {RadarZoomLevel} - The zoom level for the radar, between 0 and 200. Values outside this range will be clamped.
     *
     * @returns {void}
     */
    export function setRadarZoom(zoomLevel: RadarZoomLevel): void {
        SetRadarZoom(zoomLevel);
    }

    /**
     * Sets the precise zoom level of the radar (minimap).
     *
     * @param zoomLevel {RadarZoomLevel} - The precise zoom level for the radar.
     *
     * @returns {void}
     */
    export function setRadarZoomPrecise(zoomLevel: RadarZoomLevel): void {
        SetRadarZoomPrecise(zoomLevel);
    }
}
