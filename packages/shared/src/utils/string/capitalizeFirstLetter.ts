/**
 * Capitalizes the first letter of a string.
 *
 * @example
 * ```ts
 * const result = capitalizeFirstLetter("hello");
 * console.log(result); // "Hello"
 * ```
 *
 * @param {string} input - The string to capitalize the first letter of.
 *
 * @returns {string} The string with its first letter capitalized.
 */
export function capitalizeFirstLetter(input: string): string {
	if (input.length === 0) {
		return input;
	}
	return input.charAt(0).toUpperCase() + input.slice(1);
}
