/**
 * Combines two objects into a single object, merging their properties.
 * If both objects contain properties with the same key, the value from the second object (`sObj`) will overwrite the value from the first object (`fObj`).
 *
 * @example
 * ```typescript
 * const obj1 = { a: 1, b: 2 };
 * const obj2 = { b: 3, c: 4 };
 * const result = merge(obj1, obj2);
 * // result: { a: 1, b: 3, c: 4 }
 * ```
 *
 * @remarks
 * - This function uses shallow merging, meaning nested objects will not be deeply merged.
 * - The resulting object is a new object and does not modify the input objects.
 *
 * @template T - The type of the first object.
 * @template U - The type of the second object.
 *
 * @param {T} fObj - The first object to be merged.
 * @param {U} sObj - The second object to be merged. Its properties will overwrite those of `fObj` in case of conflicts.
 *
 * @returns {T & U} - A new object containing all properties from both input objects, with type safety applied to ensure the merged object conforms to the union of the input types.
 */
export function merge<T extends object, U extends object>(fObj: T, sObj: U): T & U {
    return { ...fObj, ...sObj };
}
