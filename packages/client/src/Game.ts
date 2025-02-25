import { Nullable, RadioStation } from '@fivem-ts/shared';
import { Controls, InputMode, Ped, Player } from '.';

/**
 * Represents a Game with various methods to interact with and retrieve game-related data.
 */
export namespace Game {
	let cachedPlayer: Nullable<Player> = null;

	/**
	 * Generates a hash based on the input value.
	 * If the input is a number, it will return the number directly.
	 * If the input is a string, it will return the hashed key of the string.
	 *
	 * @param {string | number} input - The value to be hashed, can be a string or a number.
	 *
	 * @returns {number} The generated hash key or the input number.
	 */
	export function generateHash(input: string | number): number {
		if (typeof input === 'string') {
			return GetHashKey(input);
		} else {
			return input;
		}
	}

	/**
	 * Retrieves the current game time.
	 *
	 * @returns {number} The current game time.
	 */
	export function getGameTime(): number {
		return GetGameTimer();
	}

	/**
	 * Adjusts the timescale.
	 * Controls the flow of time within the system where 1 represents normal speed,
	 * 0 represents a full stop, and values between 0 and 1 represent slower speeds.
	 *
	 * @param {number} time - A value between 0 and 1 that sets the new timescale.
	 *                         If the provided value is outside this range, the timescale defaults to 1 (normal speed).
	 *
	 * @returns {void}
	 */
	export function setTimeScale(time: number): void {
		SetTimeScale(time <= 1 && time >= 0 ? time : 1);
	}

	/**
	 * Retrieves the number of frames that have been rendered since the application started.
	 *
	 * @returns {number} The total count of rendered frames.
	 */
	export function getFrameCount(): number {
		return GetFrameCount();
	}

	/**
	 * Retrieves the time elapsed in seconds since the last frame.
	 *
	 * @returns {number} The time elapsed in seconds since the last frame.
	 */
	export function getLastFrameTime(): number {
		return GetFrameTime();
	}

	/**
	 * Calculates and returns the current frames per second (FPS).
	 *
	 * @returns {number} The current FPS, calculated as the reciprocal of the time taken for the last frame.
	 */
	export function getFPS(): number {
		return 1 / getLastFrameTime();
	}

	/**
	 * Retrieves the player instance, caching it if necessary.
	 *
	 * The method checks if there is a cached player instance. If the cached
	 * player is undefined or its owner does not match the current player ID,
	 * it creates a new Player instance and caches it. Otherwise, it returns
	 * the cached player.
	 *
	 * @returns {Player} The current player instance.
	 */
	export function getPlayer(): Player {
		const handle: number = PlayerId();

		if (cachedPlayer === null || handle !== cachedPlayer.Owner) {
			cachedPlayer = new Player(handle);
		}

		return cachedPlayer;
	}

	/**
	 * Retrieves the Ped instance associated with the current player.
	 *
	 * @returns {Ped} The Ped instance of the current player.
	 */
	export function getPlayerPed(): Nullable<Ped> {
		return getPlayer().Ped;
	}

	/**
	 * Generates an iterable sequence of Player objects for the currently active players.
	 *
	 * @returns {IterableIterator<Player>} An iterator that yields Player instances representing each active player.
	 */
	export function* playersList(): IterableIterator<Player> {
		for (const id of GetActivePlayers() as number[]) {
			yield new Player(id);
		}
	}

	/**
	 * Get whether PvP is enabled.
	 *
	 * @returns {boolean} True if enabled.
	 */
	export function getPlayerVersusPlayer(): boolean {
		return getPlayer().PvpEnabled;
	}

	/**
	 * Set whether PvP is enabled.
	 *
	 * @returns {void}
	 */
	export function setPlayerVersusPlayer(value: boolean): void {
		getPlayer().PvpEnabled = value;
	}

	/**
	 * Retrieves the maximum wanted level allowed in the game.
	 * The wanted level indicates the player's level of police pursuit.
	 *
	 * @returns {number} The maximum wanted level possible.
	 */
	export function getMaxWantedLevel(): number {
		return GetMaxWantedLevel();
	}

	/**
	 * Sets the maximum wanted level for the player.
	 *
	 * @param {number} value - The desired maximum wanted level, ranging between 0 and 5.
	 *
	 * @returns {void}
	 */
	export function setMaxWantedLevel(value: number): void {
		if (value < 0) {
			value = 0;
		} else if (value > 5) {
			value = 5;
		}

		SetMaxWantedLevel(value);
	}

	/**
	 * Sets the wanted level multiplier to the given value.
	 *
	 * @param {number} value - The multiplier value to set for the wanted level.
	 *
	 * @returns {void}
	 */
	export function setWantedMultiplier(value: number): void {
		SetWantedLevelMultiplier(value);
	}

	/**
	 * Sets the visibility of police blips on the radar.
	 *
	 * @param {boolean} toggle - A boolean value indicating whether to show (true) or hide (false) police blips on the radar.
	 *
	 * @returns {void}
	 */
	export function setShowPoliceBlipsOnRadar(toggle: boolean): void {
		SetPoliceRadarBlips(toggle);
	}

	/**
	 * Checks if night vision is currently active.
	 *
	 * @returns {boolean} True if night vision is active, false otherwise.
	 */
	export function getNightVision(): boolean {
		return IsNightvisionActive();
	}

	/**
	 * Enables or disables the night vision setting.
	 *
	 * @param {boolean} value - A boolean indicating whether to enable (true) or disable (false) night vision.
	 *
	 * @returns {void}
	 */
	export function setNightVision(value: boolean): void {
		SetNightvision(value);
	}

	/**
	 * Checks if the thermal vision mode is currently active.
	 *
	 * @returns {boolean} True if thermal vision is active, otherwise false.
	 */
	export function getThermalVision(): boolean {
		return IsSeethroughActive();
	}

	/**
	 * Enables or disables thermal vision for the user.
	 *
	 * @param {boolean} toggle - A boolean indicating whether to turn thermal vision on (true) or off (false).
	 *
	 * @returns {void}
	 */
	export function setThermalVision(toggle: boolean): void {
		SetSeethrough(toggle);
	}

	/**
	 * Determines if a mission is currently active.
	 *
	 * @returns {boolean} true if a mission is active, false otherwise.
	 */
	export function getIsMissionActive(): boolean {
		return GetMissionFlag();
	}

	/**
	 * Sets the mission active state to the given boolean value.
	 *
	 * @param {boolean} toggle - A boolean value indicating whether the mission should be active (true) or inactive (false).
	 *
	 * @returns {void}
	 */
	export function setIsMissionActive(toggle: boolean): void {
		SetMissionFlag(toggle);
	}

	/**
	 * Checks if a random event is currently active.
	 *
	 * @returns {boolean} True if a random event is active, false otherwise.
	 */
	export function getIsRandomEventActive(): boolean {
		return GetRandomEventFlag();
	}

	/**
	 * Toggles the random event active status.
	 *
	 * @param {boolean} toggle - The flag to set the random event active status.
	 *
	 * @returns {void}
	 */
	export function setIsRandomEventActive(toggle: boolean): void {
		SetRandomEventFlag(toggle);
	}

	/**
	 * Checks if a cutscene is currently active in the game.
	 *
	 * @returns {boolean} True if a cutscene is active, otherwise false.
	 */
	export function getIsCutsceneActive(): boolean {
		return IsCutsceneActive();
	}

	/**
	 * Checks if a cutscene is currently playing.
	 *
	 * @returns {boolean} Returns true if a cutscene is playing, otherwise false.
	 */
	export function getIsCutscenePlaying(): boolean {
		return IsCutscenePlaying();
	}

	/**
	 * Checks if the pause menu is currently active.
	 *
	 * @returns {boolean} Returns true if the pause menu is active, otherwise false.
	 */
	export function getIsPaused(): boolean {
		return IsPauseMenuActive();
	}

	/**
	 * Sets the pause state in the application.
	 *
	 * @param {boolean} value - A boolean value indicating whether the pause state is active (true) or inactive (false).
	 * @returns {void} This function does not return any value.
	 */
	export function setIsPaused(value: boolean): void {
		SetPauseMenuActive(value);
	}

	/**
	 * Checks if the loading screen is currently active.
	 *
	 * @returns {boolean} `true` if the loading screen is active, otherwise `false`.
	 */
	export function getIsLoading(): boolean {
		return GetIsLoadingScreenActive();
	}

	/**
	 * Retrieves the current input mode based on the input status.
	 *
	 * @returns {InputMode} The current input mode, either MouseAndKeyboard or GamePad.
	 */
	export function getCurrentInputMode(): InputMode {
		return IsInputDisabled(2) ? InputMode.MouseAndKeyboard : InputMode.GamePad;
	}

	/**
	 * Retrieves the current radio station the player is listening to.
	 *
	 * @returns {RadioStation} The current radio station, or `RadioStation.Off` if no match is found.
	 */
	export function getRadioStation(): RadioStation {
		const actualStationName: string = GetPlayerRadioStationName();
		const keys: string[] = Object.keys(RadioStation).filter(
			(x: string): boolean =>
				RadioStation[x as keyof typeof RadioStation] === actualStationName,
		);

		return keys.length > 0
			? RadioStation[keys[0] as keyof typeof RadioStation]
			: RadioStation.Off;
	}

	/**
	 * Sets the radio station to the specified station.
	 *
	 * @param {RadioStation} radioStation - The radio station to set.
	 *
	 * @returns {void}
	 */
	export function setRadioStation(radioStation: RadioStation): void {
		SetRadioToStationName(radioStation);
	}

	/**
	 * Determines if a specific control is enabled in the given input mode.
	 *
	 * @param {InputMode} inputMode - The mode in which input is being processed.
	 * @param {Controls} control - The control being checked for enabled status.
	 *
	 * @returns {boolean} Returns true if the control is enabled in the given input mode, otherwise false.
	 */
	export function isControlEnabled(inputMode: InputMode, control: Controls): boolean {
		return IsControlEnabled(inputMode, control.valueOf());
	}

	/**
	 * Checks if a specific control is currently being pressed.
	 *
	 * @param {InputMode} inputMode - The mode of input to check for control press.
	 * @param {Controls} control - The specific control to check.
	 *
	 * @returns {boolean} - Returns true if the control is being pressed, otherwise false.
	 */
	export function isControlPressed(inputMode: InputMode, control: Controls): boolean {
		return IsControlPressed(inputMode, control.valueOf());
	}

	/**
	 * Checks if a control has just been pressed within the specified input mode.
	 *
	 * @param {InputMode} inputMode - The input mode in which to check the control press.
	 * @param {Controls} control - The specific control to check.
	 *
	 * @returns {boolean} Returns true if the control has just been pressed, otherwise false.
	 */
	export function isControlJustPressed(inputMode: InputMode, control: Controls): boolean {
		return IsControlJustPressed(inputMode, control.valueOf());
	}

	/**
	 * Checks if a specific control is disabled and currently pressed down.
	 *
	 * @param {InputMode} inputMode - The mode of input being used, such as keyboard or gamepad.
	 * @param {Controls} control - The specific control to check, like a button or key.
	 *
	 * @returns {boolean} Returns true if the control is both disabled and pressed; otherwise, false.
	 */
	export function isDisabledControlPressed(inputMode: InputMode, control: Controls): boolean {
		return IsDisabledControlPressed(inputMode, control.valueOf());
	}

	/**
	 * Checks if a disabled control has just been pressed.
	 *
	 * @param {InputMode} inputMode - The input mode to check (e.g., keyboard, gamepad).
	 * @param {Controls} control - The specific control to check for a press.
	 *
	 * @returns {boolean} - Returns true if the specified disabled control was just pressed, false otherwise.
	 */
	export function isDisabledControlJustPressed(inputMode: InputMode, control: Controls): boolean {
		return IsDisabledControlJustPressed(inputMode, control.valueOf());
	}

	/**
	 * Checks if a specific control is released in the given input mode.
	 *
	 * @param {InputMode} inputMode - The input mode for which the control release state is being checked.
	 * @param {Controls} control - The control whose release state is being checked.
	 *
	 * @returns {boolean} - Returns true if the control is released, otherwise false.
	 */
	export function isControlReleased(inputMode: InputMode, control: Controls): boolean {
		return IsControlReleased(inputMode, control.valueOf());
	}

	/**
	 * Checks if the control has just been released in the specified input mode.
	 *
	 * @param {InputMode} inputMode - The input mode to check (e.g., keyboard, gamepad).
	 * @param {Controls} control - The specific control to check.
	 *
	 * @returns {boolean} - Returns true if the control has just been released, false otherwise.
	 */
	export function isControlJustReleased(inputMode: InputMode, control: Controls): boolean {
		return IsControlJustReleased(inputMode, control.valueOf());
	}

	/**
	 * Checks if the specified control, when disabled, has been released in the given input mode.
	 *
	 * @param {InputMode} inputMode - The mode of input being used (e.g., keyboard, gamepad).
	 * @param {Controls} control - The control to check if it has been released.
	 *
	 * @returns {boolean} `true` if the disabled control has been released; `false` otherwise.
	 */
	export function isDisabledControlReleased(inputMode: InputMode, control: Controls): boolean {
		return IsDisabledControlReleased(inputMode, control.valueOf());
	}

	/**
	 * Checks if the specified control was just released while disabled.
	 *
	 * @param {InputMode} inputMode - The input mode in which the control is being checked.
	 * @param {Controls} control - The control that is being checked for release.
	 *
	 * @returns {boolean} - Returns true if the specified disabled control was just released; otherwise, false.
	 */
	export function isDisabledControlJustReleased(
		inputMode: InputMode,
		control: Controls,
	): boolean {
		return IsDisabledControlJustReleased(inputMode, control.valueOf());
	}

	/**
	 * Enables a specific control during the current frame for a given input mode.
	 *
	 * @param {InputMode} inputMode - The input mode for which the control should be enabled.
	 * @param {Controls} control - The control to enable for the specified input mode.
	 *
	 * @returns {void}
	 */
	export function enableControlThisFrame(inputMode: InputMode, control: Controls): void {
		EnableControlAction(inputMode, control.valueOf(), true);
	}

	/**
	 * Disables a specific control for the current frame.
	 *
	 * @param {InputMode} inputMode - The mode of input that should be disabled (e.g., keyboard, gamepad).
	 * @param {Controls} control - The specific control within the input mode to be disabled.
	 *
	 * @returns {void}
	 */
	export function disableControlThisFrame(inputMode: InputMode, control: Controls): void {
		DisableControlAction(inputMode, control.valueOf(), true);
	}

	/**
	 * Enables all control actions for the given input mode for the current frame.
	 *
	 * @param {InputMode} inputMode - The input mode for which to enable all control actions.
	 *
	 * @returns {void}
	 */
	export function enableAllControlsThisFrame(inputMode: InputMode): void {
		EnableAllControlActions(inputMode);
	}

	/**
	 * Disables all control actions for the current frame based on the specified input mode.
	 *
	 * @param {InputMode} inputMode - The input mode for which the controls should be disabled.
	 *
	 * @returns {void}
	 */
	export function disableAllControlsThisFrame(inputMode: InputMode): void {
		DisableAllControlActions(inputMode);
	}
}
