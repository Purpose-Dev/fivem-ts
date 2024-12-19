/**
 * Generates a unique key based on the event name and an optional player ID.
 *
 * @example
 * ```typescript
 * const key1 = generateUniqueKey("eventStart");
 * // Possible output: "eventStart:45321"
 *
 * const key2 = generateUniqueKey("eventStart", 42);
 * // Possible output: "eventStart:67890:42"
 * ```
 *
 * @remarks
 * - The unique key is generated by combining the event name with a random number and optionally a player ID.
 * - The random suffix is a number between 1 and 100,000, ensuring a low likelihood of collision.
 * - If `playerId` is provided, it is appended to the key for additional uniqueness.
 * - This function is not suitable for cryptographic purposes as the random number generator is not cryptographically secure.
 *
 * @param {string} eventName - The name of the event to include in the unique key.
 * @param {number} [playerId] - An optional player ID to include in the key.
 *
 * @returns {string} A unique string key constructed from the inputs and a random suffix.
 */
export function generateUniqueKey(eventName: string, playerId?: number): string {
    const randomSuffix: number = (Math.random() * 100000 + 1) | 0;
    return playerId !== undefined
        ? eventName + ':' + randomSuffix + ':' + playerId
        : eventName + ':' + randomSuffix;
}
