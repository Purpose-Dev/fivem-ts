import 'reflect-metadata';
import { Maybe } from '../../types';

export type RetryValue = { attempts: number; delay: number };

/**
 * A decorator to automatically retry a method upon failure.
 *
 * This decorator retries the decorated method a specified number of times, with a delay between each attempt.
 * If all attempts fail, the last error will be thrown.
 *
 * @example
 *
 * ```ts
 * import { Retry } from 'fivem-ts/shared/decorators';
 *
 * class MyService {
 *     @Retry(3, 1000)
 *     async unstableMethod(): Promise<void> {
 *         // Some operation that might fail
 *     }
 * }
 * ```
 *
 * @param attempts The number of retry attempts before failing.
 * @param delay The delay in milliseconds between each retry attempt.
 * @returns A method decorator that applies the retry logic.
 */
export function Retry(attempts: number, delay: number) {
    return function (
        target: object,
        propertyKey: string | symbol,
        descriptor: TypedPropertyDescriptor<Function>,
    ): void {
        if (!descriptor.value) {
            throw new Error(`Method ${String(propertyKey)} does not exist on the target.`);
        }

        Reflect.defineMetadata(Symbol('retryAttempts'), attempts, target, propertyKey);
        Reflect.defineMetadata(Symbol('retryDelay'), delay, target, propertyKey);

        const originalMethod = descriptor.value;

        descriptor.value = async function (...args: unknown[]) {
            for (let i = 0; i < attempts; i++) {
                try {
                    return await originalMethod.apply(this, args);
                } catch (error) {
                    console.warn(
                        `Retry ${i + 1} for function ${String(propertyKey)} failed: ${error}`,
                    );
                    if (i < attempts - 1) {
                        await new Promise(resolve => setTimeout(resolve, delay, {}));
                    }
                }
            }
        };

        console.log(`Registered retry for function: ${String(propertyKey)}`);
    };
}

/**
 * Retrieves the retry metadata for a given method.
 *
 * This function can be used to obtain the number of retry attempts and the delay between attempts
 * for a method decorated with the `Retry` decorator.
 *
 * @example
 *
 * ```ts
 * import { getRetryMetadata } from 'fivem-ts/shared/decorators';
 *
 * const retryMetadata = getRetryMetadata(MyService.prototype, 'unstableMethod');
 * if (retryMetadata) {
 *     console.log(`Retry attempts: ${retryMetadata.attempts}, Delay: ${retryMetadata.delay}`);
 * }
 * ```
 *
 * @param target The target object (usually the prototype of a class).
 * @param propertyKey The name of the method to retrieve metadata for.
 * @returns An object containing the number of attempts and the delay, or `undefined` if not found.
 */
export function getRetryMetadata(target: object, propertyKey: string): Maybe<RetryValue> {
    const attempts = Reflect.getMetadata(Symbol('retryAttempts'), target, propertyKey);
    const delay = Reflect.getMetadata(Symbol('retryDelay'), target, propertyKey);

    if (attempts !== undefined && delay !== undefined) {
        return { attempts, delay };
    }

    return undefined;
}
