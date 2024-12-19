/**
 * Joins an array of strings into a single string with an optional separator.
 *
 * @example
 * ```ts
 * const result = arrayToString(["Hello", "World"], " ");
 * console.log(result); // "Hello World"
 * ```
 *
 * @param {string} inputArray - The array of strings to join.
 * @param [separator=''] - The separator to use between each string. Defaults to an empty string.
 *
 * @returns {string} The concatenated string.
 */
export function arrayToString(inputArray: string[], separator = ''): string {
    return inputArray.join(separator);
}
