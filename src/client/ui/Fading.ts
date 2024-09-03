/**
 * Static class for managing screen fading effects.
 * This class allows you to fade the screen in and out with specified durations
 * and check the current fading status.
 */
export abstract class Fading {
    /**
     * Determines if the screen is currently fully faded in.
     *
     * @returns `true` if the screen is faded in, `false` otherwise.
     */
    public static get IsFadedIn(): boolean {
        return IsScreenFadedIn();
    }

    /**
     * Determines if the screen is currently in the process of fading in.
     *
     * @returns `true` if the screen is fading in, `false` otherwise.
     */
    public static get IsFadingIn(): boolean {
        return IsScreenFadingIn();
    }

    /**
     * Determines if the screen is currently fully faded out.
     *
     * @returns `true` if the screen is faded out, `false` otherwise.
     */
    public static get IsFadedOut(): boolean {
        return IsScreenFadedOut();
    }

    /**
     * Determines if the screen is currently in the process of fading out.
     *
     * @returns `true` if the screen is fading out, `false` otherwise.
     */
    public static get IsFadingOut(): boolean {
        return IsScreenFadingOut();
    }

    /**
     * Fades in the screen over a specified duration.
     * This method will return a promise that resolves once the screen is fully faded in.
     *
     * @param duration - The duration (in milliseconds) over which to fade in the screen.
     * @returns A promise that resolves when the fade-in is complete.
     */
    public static async fadeIn(duration: number): Promise<void> {
        return new Promise(async resolve => {
            DoScreenFadeIn(duration);

            const interval: CitizenTimer = setInterval(async () => {
                if (this.IsFadedIn) {
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
     * @param duration - The duration (in milliseconds) over which to fade out the screen.
     * @returns A promise that resolves when the fade-out is complete.
     */
    public static fadeOut(duration: number): Promise<void> {
        return new Promise(async resolve => {
            DoScreenFadeOut(duration);

            const interval: CitizenTimer = setInterval(async () => {
                if (this.IsFadedOut) {
                    clearInterval(interval);
                    resolve();
                }
            }, 0);
        });
    }
}
