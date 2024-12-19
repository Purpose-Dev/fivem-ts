/**
 * Serializes a value to a JSON string.
 *
 * This function takes any value, such as objects, arrays, numbers, strings, etc.,
 * and converts it into a JSON-formatted string. This is useful for storing or transmitting data
 * in a format that is widely supported and can be easily parsed by other systems.
 *
 * @example
 * ```typescript
 * // Example 1: Serializing an object
 * const obj = { name: "John", age: 30 };
 * const jsonString = serializeToJSON(obj);
 * console.log(jsonString);
 * // Output: '{"name":"John","age":30}'
 *
 * // Example 2: Serializing an array
 * const arr = [1, 2, 3];
 * const jsonArrayString = serializeToJSON(arr);
 * console.log(jsonArrayString);
 * // Output: '[1,2,3]'
 *
 * // Example 3: Serializing a primitive value
 * const num = 42;
 * const jsonNumberString = serializeToJSON(num);
 * console.log(jsonNumberString);
 * // Output: '42'
 * ```
 * @remarks
 * - This function leverages `JSON.stringify` to convert the input value into a JSON-formatted string.
 * - It is particularly useful for storing or transmitting data in a format that is widely supported across platforms and programming languages.
 * - Be cautious when serializing objects with circular references, as `JSON.stringify` will throw an error in such cases.
 * - This function does not handle circular references or unsupported data types (e.g., `BigInt`). Consider using libraries such as `flatted` or `json5` for more complex serialization needs.
 *
 * @param {unknown} data The value to be serialized to JSON. This can be an object, array, string, number, etc.
 *
 * @returns {string} A JSON string representing the serialized data.
 */
export function serializeToJSON(data: unknown): string {
    if (data === undefined || typeof data === "function") {
        return "";
    }

    try {
        return JSON.stringify(data) || "";
    } catch {
        return "";
    }
}
