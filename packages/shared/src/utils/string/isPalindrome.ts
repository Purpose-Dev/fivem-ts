/**
 * Checks if a string is a palindrome, ignoring case and non-alphanumeric characters.
 *
 * @example
 * ```ts
 * const result = isPalindrome("A man, a plan, a canal, Panama");
 * console.log(result); // true
 * ```
 *
 * @param {string} input - The input string to be checked.
 *
 * @returns {boolean} `true` if the input string is a palindrome, `false` otherwise.
 */
export function isPalindrome(input: string): boolean {
    const normalized = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversed = normalized.split('').reverse().join('');
    return normalized === reversed;
}
