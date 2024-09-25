import { CursorType, HudComponent } from '../enums';
import { Point } from '../utils';

/**
 * Module for managing HUD (Heads-Up Display) components and cursor interactions.
 * This module allows you to control the visibility of HUD components, the cursor's position and sprite,
 * and the radar's zoom level and visibility.
 */
export namespace Hud {
    /**
     * Checks if a specific HUD component is currently active (visible).
     *
     * @param component - The HUD component to check.
     * @returns `true` if the HUD component is active, `false` otherwise.
     */
    export function isComponentActive(component: HudComponent): boolean {
        return IsHudComponentActive(component.valueOf());
    }

    /**
     * Forces a specific HUD component to be shown for the current frame.
     *
     * @param component - The HUD component to show.
     */
    export function showComponentThisFrame(component: HudComponent): void {
        ShowHudComponentThisFrame(component.valueOf());
    }

    /**
     * Forces a specific HUD component to be hidden for the current frame.
     *
     * @param component - The HUD component to hide.
     */
    export function hideComponentThisFrame(component: HudComponent): void {
        HideHudComponentThisFrame(component.valueOf());
    }

    /**
     * Sets the cursor's position on the screen.
     *
     * @param point - The `Point` object representing the cursor's new position (with x and y coordinates).
     */
    export function setCursorPosition(point: Point): void {
        SetCursorLocation(point.x, point.y);
    }

    /**
     * Gets the current sprite used for the cursor.
     *
     * @returns The current cursor sprite, defaulting to `CursorType.DownArrow`.
     */
    export function getCursorSprite(): CursorType {
        return CursorType.DownArrow;
    }

    /**
     * Sets the sprite used for the cursor.
     *
     * @param cursorType - The `CursorType` to set as the current cursor sprite.
     */
    export function setCursorSprite(cursorType: CursorType): void {
        SetCursorSprite(cursorType.valueOf());
    }

    /**
     * Gets whether the HUD is currently visible.
     *
     * @returns `true` if the HUD is visible, `false` otherwise.
     */
    export function getIsVisible(): boolean {
        return !(IsHudHidden() || !IsHudPreferenceSwitchedOn());
    }

    /**
     * Sets the visibility of the HUD.
     *
     * @param toggle - A boolean indicating whether to show (`true`) or hide (`false`) the HUD.
     */
    export function setIsVisible(toggle: boolean): void {
        DisplayHud(toggle);
    }

    /**
     * Gets whether the radar (minimap) is currently visible.
     *
     * @returns `true` if the radar is visible, `false` otherwise.
     */
    export function getIsRadarVisible(): boolean {
        return !(IsRadarHidden() || IsRadarPreferenceSwitchedOn());
    }

    /**
     * Sets the visibility of the radar (minimap).
     *
     * @param toggle - A boolean indicating whether to show (`true`) or hide (`false`) the radar.
     */
    export function setIsRadarVisible(toggle: boolean): void {
        DisplayRadar(toggle);
    }

    /**
     * Sets the zoom level of the radar (minimap).
     *
     * @param zoomLevel - The zoom level for the radar, between 0 and 200. Values outside this range will be clamped.
     */
    export function setRadarZoom(zoomLevel: RadarZoomLevel): void {
        SetRadarZoom(zoomLevel);
    }

    /**
     * Sets the precise zoom level of the radar (minimap).
     *
     * @param zoomLevel - The precise zoom level for the radar.
     */
    export function setRadarZoomPrecise(zoomLevel: RadarZoomLevel): void {
        SetRadarZoomPrecise(zoomLevel);
    }

    export type RadarZoomLevel =
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12
        | 13
        | 14
        | 15
        | 16
        | 17
        | 18
        | 19
        | 20
        | 21
        | 22
        | 23
        | 24
        | 25
        | 26
        | 27
        | 28
        | 29
        | 30
        | 31
        | 32
        | 33
        | 34
        | 35
        | 36
        | 37
        | 38
        | 39
        | 40
        | 41
        | 42
        | 43
        | 44
        | 45
        | 46
        | 47
        | 48
        | 49
        | 50
        | 51
        | 52
        | 53
        | 54
        | 55
        | 56
        | 57
        | 58
        | 59
        | 60
        | 61
        | 62
        | 63
        | 64
        | 65
        | 66
        | 67
        | 68
        | 69
        | 70
        | 71
        | 72
        | 73
        | 74
        | 75
        | 76
        | 77
        | 78
        | 79
        | 80
        | 81
        | 82
        | 83
        | 84
        | 85
        | 86
        | 87
        | 88
        | 89
        | 90
        | 91
        | 92
        | 93
        | 94
        | 95
        | 96
        | 97
        | 98
        | 99
        | 100
        | 101
        | 102
        | 103
        | 104
        | 105
        | 106
        | 107
        | 108
        | 109
        | 110
        | 111
        | 112
        | 113
        | 114
        | 115
        | 116
        | 117
        | 118
        | 119
        | 120
        | 121
        | 122
        | 123
        | 124
        | 125
        | 126
        | 127
        | 128
        | 129
        | 130
        | 131
        | 132
        | 133
        | 134
        | 135
        | 136
        | 137
        | 138
        | 139
        | 140
        | 141
        | 142
        | 143
        | 144
        | 145
        | 146
        | 147
        | 148
        | 149
        | 150
        | 151
        | 152
        | 153
        | 154
        | 155
        | 156
        | 157
        | 158
        | 159
        | 160
        | 161
        | 162
        | 163
        | 164
        | 165
        | 166
        | 167
        | 168
        | 169
        | 170
        | 171
        | 172
        | 173
        | 174
        | 175
        | 176
        | 177
        | 178
        | 179
        | 180
        | 181
        | 182
        | 183
        | 184
        | 185
        | 186
        | 187
        | 188
        | 189
        | 190
        | 191
        | 192
        | 193
        | 194
        | 195
        | 196
        | 197
        | 198
        | 199
        | 200;
}
