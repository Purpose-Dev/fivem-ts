/**
 * Capitalizes the first letter of each word in a sentence.
 *
 * @example
 * ```ts
 * const result = capitalizeWords("hello world");
 * console.log(result); // "Hello World"
 * ```
 *
 * @param {string} input - The input string where each word's first letter will be capitalized.
 *
 * @returns {string} The string with each word's first letter capitalized.
 */
export function capitalizeWords(input: string): string {
    return input
        .split(/(\s+|-|(?<=\s)'|(?<=\b)')/)
        .map((part, index) => {
            if (index % 2 === 0 && part.length > 0 && !/^\s|-|'$/.test(part)) {
                return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
            }

            return part;
        })
        .join('');
}
