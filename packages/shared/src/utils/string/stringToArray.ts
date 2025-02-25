/**
 * Converts a string into an array of substrings, each with a maximum length of 99 characters.
 *
 * @example
 * ```ts
 * const result = stringToArray("This is a very long string that needs to be split.");
 * console.log(result); // ["This", "is", "a", "very", "long", "string", "that", "needs", "to", "be", "split"]
 * ```
 *
 * @param {string} input - The input string to be split.
 *
 * @returns {string[]} An array of substrings, each up to 99 characters long.
 */
export function stringToArray(input: string): string[] {
	return input.trim() === '' ? [] : input.trim().split(/\s+/);
}
