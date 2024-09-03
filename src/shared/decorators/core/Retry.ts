import 'reflect-metadata';
import { Maybe } from '../../types';

export type RetryValue = { attempts: number; delay: number };

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

export function getRetryMetadata(target: object, propertyKey: string): Maybe<RetryValue> {
    const attempts = Reflect.getMetadata(Symbol('retryAttempts'), target, propertyKey);
    const delay = Reflect.getMetadata(Symbol('retryDelay'), target, propertyKey);

    if (attempts !== undefined && delay !== undefined) {
        return { attempts, delay };
    }

    return undefined;
}
