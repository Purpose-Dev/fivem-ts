import { RadioStation } from '../shared';
import { Controls, InputMode } from './enums';

/**
 * Represents a Game with various methods to interact with and retrieve game-related data.
 */
export class Game {
    /**
     * Generates a hash based on the input value.
     * If the input is a number, it will return the number directly.
     * If the input is a string, it will return the hashed key of the string.
     *
     * @param {string | number} input - The value to be hashed, can be a string or a number.
     * @return {number} The generated hash key or the input number.
     */
    public static generateHash(input: string | number) {
        if (typeof input === 'number') {
            return input;
        } else {
            return GetHashKey(input);
        }
    }

    public static get GameTime(): number {
        return GetGameTimer();
    }

    public static set TimeScale(time: number) {
        SetTimeScale(time <= 1 && time >= 0 ? time : 1);
    }

    public static get FrameCount(): number {
        return GetFrameCount();
    }

    public static get LastFrameTime(): number {
        return GetFrameTime();
    }

    public static get FPS(): number {
        return 1 / this.LastFrameTime;
    }

    public static get MaxWantedLevel(): number {
        return GetMaxWantedLevel();
    }

    public static set MaxWantedLevel(value: number) {
        if (value < 0) {
            value = 0;
        } else if (value > 5) {
            value = 5;
        }

        SetMaxWantedLevel(value);
    }

    public static set WantedMultiplier(value: number) {
        SetWantedLevelMultiplier(value);
    }

    public static set ShowPoliceBlipsOnRadar(toggle: boolean) {
        SetPoliceRadarBlips(toggle);
    }

    public static get NightVision(): boolean {
        return !!IsNightvisionActive();
    }

    public static set NightVision(value: boolean) {
        SetNightvision(value);
    }

    public static get ThermalVision(): boolean {
        return !!IsSeethroughActive();
    }

    public static set ThermalVision(toggle: boolean) {
        SetSeethrough(toggle);
    }

    public static get IsMissionActive(): boolean {
        return !!GetMissionFlag();
    }

    public static set IsMissionActive(toggle: boolean) {
        SetMissionFlag(toggle);
    }

    public static get IsRandomEventActive(): boolean {
        return GetRandomEventFlag();
    }

    public static set IsRandomEventActive(toggle: boolean) {
        SetRandomEventFlag(toggle);
    }

    public static get IsCutsceneActive(): boolean {
        return IsCutsceneActive();
    }

    public static get IsCutscenePlaying(): boolean {
        return IsCutscenePlaying();
    }

    public static get IsPaused(): boolean {
        return IsPauseMenuActive();
    }

    public static set IsPaused(value: boolean) {
        SetPauseMenuActive(value);
    }

    public static get IsLoading(): boolean {
        return GetIsLoadingScreenActive();
    }

    public static get CurrentInputMode(): InputMode {
        return IsInputDisabled(2) ? InputMode.MouseAndKeyboard : InputMode.GamePad;
    }

    public static get RadioStation(): RadioStation {
        const actualStationName: string = GetPlayerRadioStationName();
        const keys: string[] = Object.keys(RadioStation).filter(
            (x: string): boolean => RadioStation[x] === actualStationName,
        );
        return keys.length > 0 ? RadioStation[keys[0]] : RadioStation.Off;
    }

    public static set RadioStation(radioStation: RadioStation) {
        const stationName: string = RadioStation[radioStation];
        SetRadioToStationName(stationName);
    }

    /**
     * Determines if a specific control is enabled in the given input mode.
     *
     * @param {InputMode} inputMode - The mode in which input is being processed.
     * @param {Controls} control - The control being checked for enabled status.
     *
     * @return {boolean} Returns true if the control is enabled in the given input mode, otherwise false.
     */
    public static isControlEnabled(inputMode: InputMode, control: Controls): boolean {
        return IsControlEnabled(inputMode, control.valueOf());
    }

    /**
     * Checks if a specific control is currently being pressed.
     *
     * @param {InputMode} inputMode - The mode of input to check for control press.
     * @param {Controls} control - The specific control to check.
     *
     * @return {boolean} - Returns true if the control is being pressed, otherwise false.
     */
    public static isControlPressed(inputMode: InputMode, control: Controls): boolean {
        return IsControlPressed(inputMode, control.valueOf());
    }

    /**
     * Checks if a control has just been pressed within the specified input mode.
     *
     * @param {InputMode} inputMode - The input mode in which to check the control press.
     * @param {Controls} control - The specific control to check.
     *
     * @return {boolean} Returns true if the control has just been pressed, otherwise false.
     */
    public static isControlJustPressed(inputMode: InputMode, control: Controls): boolean {
        return IsControlJustPressed(inputMode, control.valueOf());
    }

    /**
     * Checks if a specific control is disabled and currently pressed down.
     *
     * @param {InputMode} inputMode - The mode of input being used, such as keyboard or gamepad.
     * @param {Controls} control - The specific control to check, like a button or key.
     *
     * @return {boolean} Returns true if the control is both disabled and pressed; otherwise, false.
     */
    public static isDisabledControlPressed(inputMode: InputMode, control: Controls): boolean {
        return IsDisabledControlPressed(inputMode, control.valueOf());
    }

    /**
     * Checks if a disabled control has just been pressed.
     *
     * @param {InputMode} inputMode - The input mode to check (e.g., keyboard, gamepad).
     * @param {Controls} control - The specific control to check for a press.
     *
     * @return {boolean} - Returns true if the specified disabled control was just pressed, false otherwise.
     */
    public static isDisabledControlJustPressed(inputMode: InputMode, control: Controls): boolean {
        return IsDisabledControlJustPressed(inputMode, control.valueOf());
    }

    /**
     * Checks if a specific control is released in the given input mode.
     *
     * @param {InputMode} inputMode - The input mode for which the control release state is being checked.
     * @param {Controls} control - The control whose release state is being checked.
     *
     * @return {boolean} - Returns true if the control is released, otherwise false.
     */
    public static isControlReleased(inputMode: InputMode, control: Controls): boolean {
        return IsControlReleased(inputMode, control.valueOf());
    }

    /**
     * Checks if the control has just been released in the specified input mode.
     *
     * @param {InputMode} inputMode - The input mode to check (e.g., keyboard, gamepad).
     * @param {Controls} control - The specific control to check.
     *
     * @return {boolean} - Returns true if the control has just been released, false otherwise.
     */
    public static isControlJustReleased(inputMode: InputMode, control: Controls): boolean {
        return IsControlJustReleased(inputMode, control.valueOf());
    }

    /**
     * Checks if the specified control, when disabled, has been released in the given input mode.
     *
     * @param {InputMode} inputMode - The mode of input being used (e.g., keyboard, gamepad).
     * @param {Controls} control - The control to check if it has been released.
     *
     * @return {boolean} `true` if the disabled control has been released; `false` otherwise.
     */
    public static isDisabledControlReleased(inputMode: InputMode, control: Controls): boolean {
        return IsDisabledControlReleased(inputMode, control.valueOf());
    }

    /**
     * Checks if the specified control was just released while disabled.
     *
     * @param {InputMode} inputMode - The input mode in which the control is being checked.
     * @param {Controls} control - The control that is being checked for release.
     *
     * @return {boolean} - Returns true if the specified disabled control was just released; otherwise, false.
     */
    public static isDisabledControlJustReleased(inputMode: InputMode, control: Controls): boolean {
        return IsDisabledControlJustReleased(inputMode, control.valueOf());
    }

    /**
     * Enables a specific control during the current frame for a given input mode.
     *
     * @param {InputMode} inputMode - The input mode for which the control should be enabled.
     * @param {Controls} control - The control to enable for the specified input mode.
     *
     * @return {void} This method does not return a value.
     */
    public static enableControlThisFrame(inputMode: InputMode, control: Controls): void {
        EnableControlAction(inputMode, control.valueOf(), true);
    }

    /**
     * Disables a specific control for the current frame.
     *
     * @param {InputMode} inputMode - The mode of input that should be disabled (e.g., keyboard, gamepad).
     * @param {Controls} control - The specific control within the input mode to be disabled.
     *
     * @return {void}
     */
    public static disableControlThisFrame(inputMode: InputMode, control: Controls): void {
        DisableControlAction(inputMode, control.valueOf(), true);
    }

    /**
     * Enables all control actions for the given input mode for the current frame.
     *
     * @param {InputMode} inputMode - The input mode for which to enable all control actions.
     *
     * @returns {void}
     */
    public static enableAllControlsThisFrame(inputMode: InputMode): void {
        EnableAllControlActions(inputMode);
    }

    /**
     * Disables all control actions for the current frame based on the specified input mode.
     *
     * @param {InputMode} inputMode - The input mode for which the controls should be disabled.
     *
     * @return {void}
     */
    public static disableAllControlsThisFrame(inputMode: InputMode): void {
        DisableAllControlActions(inputMode);
    }
}
