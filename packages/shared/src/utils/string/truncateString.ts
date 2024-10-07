/**
 * Truncates a string to a specified length and optionally appends an ellipsis.
 *
 * @example
 * ```ts
 * const result = truncateString("This is a long string", 10, true);
 * console.log(result); // "This is a..."
 * ```
 *
 * @param {string} input - The input string to be truncated.
 * @param {number} maxLength - The maximum length of the resulting string.
 * @param [useEllipsis=false] - Whether to append an ellipsis (`...`) if the string is truncated. Defaults to `false`.
 *
 * @return {string} The truncated string.
 */
export function truncateString(input: string, maxLength: number, useEllipsis = false): string {
    if (input.length <= maxLength) {
        return input;
    }
    const truncated = input.substring(0, maxLength);
    return useEllipsis ? `${truncated.trimEnd()}...` : truncated;
}
