/**
 * Converts a string or an array of strings to their corresponding JOaat hash values.
 *
 * If an array is provided, it returns an array of JOaat hash values.
 *
 * @example
 * ```ts
 * toHash("exampleString"); // 123456789
 * toHash(["stringOne", "stringTwo"]); // [123456789, 987654321]
 * ```
 *
 * @param {string | string[]} input - The string or array of strings to convert to JOaat hash.
 *
 * @return {number | number[]} The JOaat hash value of the input string, or an array of hash values if an array is provided.
 */

export function toHash(input: string | string[]): number | number[] {
  const calculateHash = (str: string): number => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash += str.charCodeAt(i);
      hash += hash << 10;
      hash ^= hash >> 6;
    }
    hash += hash << 3;
    hash ^= hash >> 11;
    hash += hash << 15;
    return hash >>> 0;
  };

  if (Array.isArray(input)) {
    return input.map(calculateHash);
  } else {
    return calculateHash(input);
  }
}
