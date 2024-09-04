import { ScreenEffect } from '../enums';

/**
 * The `Effects` module provides functions to manage screen effects, such as starting, stopping, and checking the status of various screen effects.
 */
export module Effects {
    /**
     * Starts a specified screen effect.
     *
     * @param effectName - The name of the screen effect to start.
     * @param duration - The duration of the effect in milliseconds (optional). If not specified, the effect will use a default duration of 0.
     * @param looped - Whether the effect should loop (optional). Defaults to `false` if not specified.
     */
    export function start(effectName: ScreenEffect, duration?: number, looped?: boolean): void {
        StartScreenEffect(effectName.valueOf(), duration ?? 0, looped ?? false);
    }

    /**
     * Stops a specified screen effect. If no effect is specified, all active screen effects will be stopped.
     *
     * @param screenEffect - The screen effect to stop (optional). If `null`, all screen effects will be stopped.
     */
    export function stop(screenEffect?: ScreenEffect): void {
        screenEffect === null ? StopAllScreenEffects() : StopScreenEffect(screenEffect.valueOf());
    }

    /**
     * Checks if a specified screen effect is currently active.
     *
     * @param screenEffect - The screen effect to check.
     * @returns `true` if the specified screen effect is active, otherwise `false`.
     */
    export function isActive(screenEffect: ScreenEffect): boolean {
        return GetScreenEffectIsActive(screenEffect.valueOf());
    }
}
