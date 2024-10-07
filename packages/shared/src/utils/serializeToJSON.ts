/**
 * Serializes a value to a JSON string.
 *
 * This function takes any value, such as objects, arrays, numbers, strings, etc.,
 * and converts it into a JSON-formatted string. This is useful for storing or transmitting data
 * in a format that is widely supported and can be easily parsed by other systems.
 *
 * @example
 * ```ts
 * const obj = { name: "John", age: 30 };
 * const jsonString = serializeToJSON(obj);
 * console.log(jsonString); // Output: '{"name":"John","age":30}'
 * ```
 *
 * @param {unknown} data The value to be serialized to JSON. This can be an object, array, string, number, etc.
 *
 * @return {string} A JSON string representing the serialized data.
 */
export function serializeToJSON(data: unknown): string {
    return JSON.stringify(data);
}
