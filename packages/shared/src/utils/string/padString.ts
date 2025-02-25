/**
 * Pads a string to a specified length with a given character.
 *
 * @example
 * ```ts
 * const result = padString("Hello", 10, "*");
 * console.log(result); // "Hello*****"
 * ```
 *
 * @param {string} input - The input string to be padded.
 * @param {number} targetLength - The target length of the resulting string.
 * @param [padChar=' '] - The character to pad the string with. Defaults to a space character.
 *
 * @returns The padded string.
 */
export function padString(input: string, targetLength: number, padChar = ' '): string {
	if (input.length >= targetLength) {
		return input;
	}
	const padding = padChar.repeat(targetLength - input.length);
	return input + padding;
}
