const eventTimers: Record<string, number> = {};

/**
 * Manages the timing of events to prevent them from being triggered too frequently.
 *
 * @example
 * ```typescript
 * if (eventTimer("jump", 1000)) {
 *      console.log("Jump action executed");
 * } else {
 *      console.log("Jump action is on cooldown");
 * }
 * ```
 *
 * @privateRemarks
 * - The function uses a global record (`eventTimers`) to track the next available time an event can be triggered.
 * - If the current time is less than the stored time for the event, the event is considered "on cooldown."
 * - Otherwise, the event is allowed, and the next available time is updated based on the provided delay.
 *
 * @remarks
 * - The function uses `GetGameTimer()` to fetch the current time. Ensure this function is available in the execution environment.
 * - The `delay` should be a positive number. If it is `0` or negative, the event will not be throttled.
 *
 * @param {string} eventName The name of the event to be managed.
 * @param {number} delay The delay in milliseconds before the event can be triggered again.
 *
 * @returns {boolean} Returns true if the event can be triggered, otherwise false.
 */
export function eventTimer(eventName: string, delay: number): boolean {
	if (delay && delay > 0) {
		const currentTime: number = GetGameTimer();

		if ((eventTimers[eventName] || 0) > currentTime) {
			return false;
		}

		eventTimers[eventName] = currentTime + delay;
	}

	return true;
}
