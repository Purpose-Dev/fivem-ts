import {
    stringToArray,
    arrayToString,
    truncateString,
    padString,
    isPalindrome,
    countSubstringOccurrences,
    reverseString,
    capitalizeWords,
    capitalizeFirstLetter,
} from '../FString';

describe('FString', () => {
    // Tests for stringToArray method
    describe('stringToArray', () => {
        it('should split a string by whitespace into an array of substrings', () => {
            const result = stringToArray('This is a test');
            expect(result).toEqual(['This', 'is', 'a', 'test']);
        });

        it('should handle input with multiple spaces between words', () => {
            const result = stringToArray('This   is    spaced   out');
            expect(result).toEqual(['This', 'is', 'spaced', 'out']);
        });

        it('should handle input with multiple newlines', () => {
            const result = stringToArray('line1\nline2\nline3');
            expect(result).toEqual(['line1', 'line2', 'line3']);
        });

        it('should return an empty array when input is an empty string', () => {
            const result = stringToArray('');
            expect(result).toEqual([]);
        });
    });

    // Tests for arrayToString method
    describe('arrayToString', () => {
        it('should join an array of strings with a specified separator', () => {
            const result = arrayToString(['Hello', 'World'], ' ');
            expect(result).toBe('Hello World');
        });

        it('should handle different separators including empty string', () => {
            const resultWithSpace = arrayToString(['A', 'B', 'C'], ' ');
            expect(resultWithSpace).toBe('A B C');

            const resultWithComma = arrayToString(['A', 'B', 'C'], ',');
            expect(resultWithComma).toBe('A,B,C');

            const resultWithEmpty = arrayToString(['A', 'B', 'C'], '');
            expect(resultWithEmpty).toBe('ABC');
        });

        it('should return an empty string when input array is empty', () => {
            const result = arrayToString([]);
            expect(result).toBe('');
        });
    });

    // Tests for truncateString method
    describe('truncateString', () => {
        it('should truncate a string to a specified length with optional ellipsis', () => {
            const result = truncateString('This is a long string', 10, true);
            expect(result).toBe('This is a...');
        });

        it('should return the original string when it is shorter than the specified length', () => {
            const result = truncateString('short', 10);
            expect(result).toBe('short');
        });

        it('should return an empty string when maxLength is 0', () => {
            const result = truncateString('Some text', 0);
            expect(result).toBe('');
        });

        it('should truncate a very long string to a small length with ellipsis', () => {
            const longString = 'a'.repeat(1000);
            const result = truncateString(longString, 10, true);
            expect(result).toBe('aaaaaaaaaa...');
        });
    });

    // Tests for padString method
    describe('padString', () => {
        it('should pad a string to a specified length with a given character', () => {
            const result = padString('Hello', 10, '*');
            expect(result).toBe('Hello*****');
        });

        it('should handle a very short string to a large target length', () => {
            const result = padString('short', 50, '*');
            expect(result).toBe('short' + '*'.repeat(45));
        });

        it('should return the original string when it is longer than the target length', () => {
            const result = padString('longer than target', 10);
            expect(result).toBe('longer than target');
        });

        it('should handle a negative target length by returning the original string', () => {
            const result = padString('text', -5);
            expect(result).toBe('text');
        });
    });

    // Tests for isPalindrome method
    describe('isPalindrome', () => {
        it('should check if a string is a palindrome ignoring case and non-alphanumeric characters', () => {
            const result = isPalindrome('A man, a plan, a canal, Panama');
            expect(result).toBe(true);
        });

        it('should return true for an empty string input', () => {
            const result = isPalindrome('');
            expect(result).toBe(true);
        });

        it('should check if a string with special characters and mixed casing is a palindrome', () => {
            const result = isPalindrome("No 'x' in Nixon");
            expect(result).toBe(true);
        });
    });

    // Tests for countSubstringOccurrences method
    describe('countSubstringOccurrences', () => {
        it('should count the occurrences of a substring within a string', () => {
            const result = countSubstringOccurrences('hello hello world', 'hello');
            expect(result).toBe(2);
        });

        it('should return 0 when the substring input is empty', () => {
            const result = countSubstringOccurrences('hello world', '');
            expect(result).toBe(0);
        });

        it('should count occurrences of an overlapping substring', () => {
            const result = countSubstringOccurrences('aaa', 'aa');
            expect(result).toBe(2); // "aa" overlaps with another "aa"
        });
    });

    // Tests for reverseString method
    describe('reverseString', () => {
        it('should reverse the characters in a string', () => {
            const result = reverseString('Hello');
            expect(result).toBe('olleH');
        });

        it('should reverse a string with special characters correctly', () => {
            const result = reverseString('!@# $%^&*()');
            expect(result).toBe(')(*&^%$ #@!');
        });
    });

    // Tests for capitalizeWords method
    describe('capitalizeWords', () => {
        it('should capitalize the first letter of each word in a sentence', () => {
            const result = capitalizeWords('hello world');
            expect(result).toBe('Hello World');
        });

        it('should capitalize words but leave non-alphabetic characters untouched', () => {
            const result = capitalizeWords("hello-world! let's test.");
            expect(result).toBe("Hello-World! Let'S Test.");
        });

        it('should handle a string with multiple spaces and hyphens', () => {
            const result = capitalizeWords('  multiple   spaces   and-hyphens  ');
            expect(result).toBe('  Multiple   Spaces   And-Hyphens  ');
        });

        it('should handle a string with leading and trailing spaces', () => {
            const result = capitalizeWords('   leading and trailing spaces   ');
            expect(result).toBe('   Leading And Trailing Spaces   ');
        });

        it('should handle strings with only special characters', () => {
            const result = capitalizeWords('!!! @#$% ');
            expect(result).toBe('!!! @#$% ');
        });

        it('should handle an empty string', () => {
            const result = capitalizeWords('');
            expect(result).toBe('');
        });

        it('should handle string with apostrophes and hyphens correctly', () => {
            const result = capitalizeWords('don’t stop believing, i’ll keep going!');
            expect(result).toBe('Don’t Stop Believing, I’ll Keep Going!');
        });

        it('should handle multiple hyphens and apostrophes correctly', () => {
            const result = capitalizeWords('jack-o’-lantern and well-known');
            expect(result).toBe('Jack-O’-Lantern And Well-Known');
        });

        it('should not capitalize after apostrophes', () => {
            const result = capitalizeWords('don’t test it');
            expect(result).toBe('Don’t Test It');
        });
    });

    // Tests for capitalizeFirstLetter method
    describe('capitalizeFirstLetter', () => {
        it('should capitalize the first letter of a string', () => {
            const result = capitalizeFirstLetter('hello');
            expect(result).toBe('Hello');
        });

        it('should return the same string when it contains only special characters', () => {
            const result = capitalizeFirstLetter('!!!');
            expect(result).toBe('!!!');
        });
    });
});
