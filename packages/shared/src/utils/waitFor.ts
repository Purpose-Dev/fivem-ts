// Thanks to overextended for the base function
/**
 * Waits for a callback function to return a defined value within a specified timeout.
 * This function repeatedly calls the provided callback until it returns a non-`undefined`
 * value or the specified timeout is reached. If the timeout is `false`, the function will
 * wait indefinitely until the callback returns a non-`undefined` value or the script is terminated.
 *
 *
 * @example
 * ```ts
 * async function exampleCallback(): Promise<number | undefined> {
 *   return new Promise(resolve => setTimeout(() => resolve(Math.random() > 0.5 ? 42 : undefined), 500));
 * }
 *
 * waitFor(exampleCallback, 'Value not returned in time', 2000)
 *   .then(value => console.log('Received value:', value))
 *   .catch(error => console.error('Error:', error));
 * ```
 *
 * @template T
 *
 * @param {Promise<T> | T} cb - A callback function that returns a value of type `T` or a `Promise` of type `T`.
 *              The function will be called repeatedly until it returns a non-`undefined` value.
 * @param [errorMessage='Callback failed to resolve'] - An optional custom error message to use if the timeout is reached before
 *                     the callback returns a value. Defaults to `'Callback failed to resolve'`.
 * @param {number | boolean} [timeout=1000] - An optional timeout duration in milliseconds. If `false`, it disables the
 *                   timeout, making the function wait indefinitely. If not provided or if `null`,
 *                   defaults to `1000` milliseconds. If provided, must be a non-negative number.
 *
 * @returns {Promise<T>} A promise that resolves with the non-`undefined` value returned by the callback,
 *          or rejects with an error if the timeout is reached before a value is returned.
 *
 * @throws {Error} Error if the timeout is reached before the callback returns a non-`undefined` value.
 *                The error message includes the provided or default error message and the elapsed
 *                time in milliseconds.
 */
export async function waitFor<T>(
	cb: () => Promise<T> | T,
	errorMessage = 'Callback failed to resolve',
	timeout: number | boolean = 1000,
): Promise<T> {
	const actualTimeout: number | false = timeout === false ? false : Number(timeout) || 1000;

	let value: Awaited<T> = await cb();
	if (value !== undefined) return value;

	if (actualTimeout === false) {
		throw new Error('Timeout is disabled but not value returned');
	}

	const start: number = GetGameTimer();
	let id: number;

	return new Promise<T>((resolve, reject: (reason?: unknown) => void): void => {
		id = setTick(async () => {
			const elapsed: number = GetGameTimer() - start;

			if (elapsed > actualTimeout) {
				reject(new Error(`${errorMessage} (waited ${elapsed}ms)`));
				return;
			}

			value = await cb();
			if (value !== undefined) {
				resolve(value);
			}
		});
	}).finally((): void => clearTick(id));
}
