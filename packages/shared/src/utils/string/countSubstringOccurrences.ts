/**
 * Counts the occurrences of a substring within a string.
 *
 * @example
 * ```ts
 * const result = countSubstringOccurrences("hello hello world", "hello");
 * console.log(result); // 2
 * ```
 *
 * @param {string} input - The string to search within.
 * @param {string} substring - The substring to count occurrences of.
 *
 * @returns {number} The number of times the substring occurs in the input string.
 */
export function countSubstringOccurrences(input: string, substring: string): number {
	if (substring.length === 0) {
		return 0;
	}
	let count = 0;
	let position = input.indexOf(substring);

	while (position !== -1) {
		count++;
		position = input.indexOf(substring, position + 1);
	}

	return count;
}
