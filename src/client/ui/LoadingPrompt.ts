import { LoadingSpinnerType } from '../enums';

/**
 * A utility class to manage a loading prompt that appears at the bottom right of the screen.
 * The loading prompt can display a custom message and spinner, and it can be shown or hidden as needed.
 *
 * @example
 * ```ts
 * import { LoadingPrompt } from 'fivem-ts/client';
 *
 * // Show the loading prompt with a custom message
 * LoadingPrompt.show("Hello World");
 *
 * // Hide the loading prompt after 10 seconds
 * setTimeout(() => {
 *  LoadingPrompt.hide();
 * }, 10000);
 * ```
 */
export namespace LoadingPrompt {
    /**
     * Checks whether the loading prompt is currently being displayed.
     *
     * @returns `true` if the loading prompt is active, `false` otherwise.
     */
    export function getIsActive(): boolean {
        return IsLoadingPromptBeingDisplayed();
    }

    /**
     * Shows the loading prompt with an optional custom text and spinner type.
     * If the prompt is already active, it will be hidden and then shown again with the new settings.
     *
     * @param loadingText - The text to display in the loading prompt. If not provided, no text will be displayed.
     * @param spinnerType - The type of spinner to display. If not provided, a default spinner is used.
     */
    export function show(loadingText?: string, spinnerType?: LoadingSpinnerType): void {
        if (this.IsActive) {
            this.hide();
        }

        if (loadingText === null) {
            BeginTextCommandBusyString(null);
        } else {
            BeginTextCommandBusyString('STRING');
            AddTextComponentSubstringPlayerName(loadingText);
        }

        EndTextCommandBusyString(
            spinnerType ? spinnerType.valueOf() : LoadingSpinnerType.RegularClockwise.valueOf(),
        );
    }

    /**
     * Hides the loading prompt if it is currently being displayed.
     */
    export function hide(): void {
        if (getIsActive()) {
            RemoveLoadingPrompt();
        }
    }
}
