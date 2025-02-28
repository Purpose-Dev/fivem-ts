/**
 * Module for managing screen fading effects.
 * This module allows you to fade the screen in and out with specified durations and check the current fading status.
 */
export namespace Fading {
	/**
	 * Determines if the screen is currently fully faded in.
	 *
	 * @returns {boolean} `true` if the screen is faded in, `false` otherwise.
	 */
	export function getIsFadedIn(): boolean {
		return IsScreenFadedIn();
	}

	/**
	 * Determines if the screen is currently in the process of fading in.
	 *
	 * @returns {boolean} `true` if the screen is fading in, `false` otherwise.
	 */
	export function getIsFadingIn(): boolean {
		return IsScreenFadingIn();
	}

	/**
	 * Determines if the screen is currently fully faded out.
	 *
	 * @returns {boolean} `true` if the screen is faded out, `false` otherwise.
	 */
	export function getIsFadedOut(): boolean {
		return IsScreenFadedOut();
	}

	/**
	 * Determines if the screen is currently in the process of fading out.
	 *
	 * @returns {boolean} `true` if the screen is fading out, `false` otherwise.
	 */
	export function getIsFadingOut(): boolean {
		return IsScreenFadingOut();
	}

	/**
	 * Fades in the screen over a specified duration.
	 * This method will return a promise that resolves once the screen is fully faded in.
	 *
	 * @param duration {number} - The duration (in milliseconds) over which to fade in the screen.
	 *
	 * @returns {Promise<void>} A promise that resolves when the fade-in is complete.
	 */
	export function fadeIn(duration: number): Promise<void> {
		return new Promise((resolve: (value: PromiseLike<void> | void) => void): void => {
			DoScreenFadeIn(duration);

			const interval: CitizenTimer = setInterval((): void => {
				if (getIsFadedIn()) {
					clearInterval(interval);
					resolve();
				}
			}, 0);
		});
	}

	/**
	 * Fades out the screen over a specified duration.
	 * This method will return a promise that resolves once the screen is fully faded out.
	 *
	 * @param duration {number} - The duration (in milliseconds) over which to fade out the screen.
	 *
	 * @returns {Promise<void>} A promise that resolves when the fade-out is complete.
	 */
	export function fadeOut(duration: number): Promise<void> {
		return new Promise((resolve: (value: PromiseLike<void> | void) => void): void => {
			DoScreenFadeOut(duration);

			const interval: CitizenTimer = setInterval((): void => {
				if (getIsFadedOut()) {
					clearInterval(interval);
					resolve();
				}
			}, 0);
		});
	}
}
