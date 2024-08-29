export class FString {
    /**
     * Converts a string into an array of substrings, each with a maximum length of 99 characters.
     *
     * @param input - The input string to be split.
     * @returns An array of substrings, each up to 99 characters long.
     *
     * @example
     * ```ts
     * const result = stringToArray("This is a very long string that needs to be split.");
     * console.log(result); // ["This", "is", "a", "very", "long", "string", "that", "needs", "to", "be", "split"]
     * ```
     */
    public static stringToArray(input: string): string[] {
        return input.trim() === '' ? [] : input.trim().split(/\s+/);
    }

    /**
     * Joins an array of strings into a single string with an optional separator.
     *
     * @param inputArray - The array of strings to join.
     * @param separator - The separator to use between each string. Defaults to an empty string.
     * @returns The concatenated string.
     *
     * @example
     * ```ts
     * const result = arrayToString(["Hello", "World"], " ");
     * console.log(result); // "Hello World"
     * ```
     */
    public static arrayToString(inputArray: string[], separator = ''): string {
        return inputArray.join(separator);
    }

    /**
     * Truncates a string to a specified length and optionally appends an ellipsis.
     *
     * @param input - The input string to be truncated.
     * @param maxLength - The maximum length of the resulting string.
     * @param useEllipsis - Whether to append an ellipsis (`...`) if the string is truncated. Defaults to `false`.
     * @returns The truncated string.
     *
     * @example
     * ```ts
     * const result = truncateString("This is a long string", 10, true);
     * console.log(result); // "This is a..."
     * ```
     */
    public static truncateString(
        input: string,
        maxLength: number,
        useEllipsis = false,
    ): string {
        if (input.length <= maxLength) {
            return input;
        }
        const truncated = input.substring(0, maxLength);
        return useEllipsis ? truncated.trimEnd() + '...' : truncated;
    }

    /**
     * Pads a string to a specified length with a given character.
     *
     * @param input - The input string to be padded.
     * @param targetLength - The target length of the resulting string.
     * @param padChar - The character to pad the string with. Defaults to a space character.
     * @returns The padded string.
     *
     * @example
     * ```ts
     * const result = padString("Hello", 10, "*");
     * console.log(result); // "Hello*****"
     * ```
     */
    public static padString(input: string, targetLength: number, padChar = ' '): string {
        if (input.length >= targetLength) {
            return input;
        }
        const padding = padChar.repeat(targetLength - input.length);
        return input + padding;
    }

    /**
     * Checks if a string is a palindrome, ignoring case and non-alphanumeric characters.
     *
     * @param input - The input string to be checked.
     * @returns `true` if the input string is a palindrome, `false` otherwise.
     *
     * @example
     * ```ts
     * const result = isPalindrome("A man, a plan, a canal, Panama");
     * console.log(result); // true
     * ```
     */
    public static isPalindrome(input: string): boolean {
        const normalized = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const reversed = normalized.split('').reverse().join('');
        return normalized === reversed;
    }

    /**
     * Counts the occurrences of a substring within a string.
     *
     * @param input - The string to search within.
     * @param substring - The substring to count occurrences of.
     * @returns The number of times the substring occurs in the input string.
     *
     * @example
     * ```ts
     * const result = countSubstringOccurrences("hello hello world", "hello");
     * console.log(result); // 2
     * ```
     */
    public static countSubstringOccurrences(input: string, substring: string): number {
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

    /**
     * Reverses the characters in a string.
     *
     * @param input - The string to be reversed.
     * @returns The reversed string.
     *
     * @example
     * ```ts
     * const result = reverseString("Hello");
     * console.log(result); // "olleH"
     * ```
     */
    public static reverseString(input: string): string {
        return input.split('').reverse().join('');
    }

    /**
     * Capitalizes the first letter of each word in a sentence.
     *
     * @param input - The input string where each word's first letter will be capitalized.
     * @returns The string with each word's first letter capitalized.
     *
     * @example
     * ```ts
     * const result = capitalizeWords("hello world");
     * console.log(result); // "Hello World"
     * ```
     */
    public static capitalizeWords(input: string): string {
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

    /**
     * Capitalizes the first letter of a string.
     *
     * @param input - The string to capitalize the first letter of.
     * @returns The string with its first letter capitalized.
     *
     * @example
     * ```ts
     * const result = capitalizeFirstLetter("hello");
     * console.log(result); // "Hello"
     * ```
     */
    public static capitalizeFirstLetter(input: string): string {
        if (input.length === 0) {
            return input;
        }
        return input.charAt(0).toUpperCase() + input.slice(1);
    }
}
