import { getRandomInt } from '../maths';

/**
 * Returns a random value from an enumerated type, filtered by the specified value type.
 *
 * @template T
 *
 * @param {object} enumType - The enumerated type object from which to select a random value.
 * @param {'string'|'number'} valueType - Specifies the type of the values to consider ('string' or 'number').
 *
 * @returns {T[keyof T]} A random value from the enumerated type that matches the specified value type.
 */
export function getRandomEnumValue<T extends object>(
	enumType: T,
	valueType: 'string' | 'number',
): T[keyof T] {
	const values = Object.values(enumType).filter(value => typeof value === valueType) as Array<
		T[keyof T]
	>;
	const randomIndex: number = getRandomInt(0, values.length);
	return values[randomIndex];
}
