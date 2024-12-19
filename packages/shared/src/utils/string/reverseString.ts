/**
 * Reverses the characters in a string.
 *
 * @example
 * ```ts
 * const result = reverseString("Hello");
 * console.log(result); // "olleH"
 * ```
 *
 * @param {string} input - The string to be reversed.
 *
 * @returns {string} The reversed string.
 */
export function reverseString(input: string): string {
    return input.split('').reverse().join('');
}
