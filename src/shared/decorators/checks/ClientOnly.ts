import 'reflect-metadata';
import { isDuplicityVersion } from '../../utils';

export function ClientOnly(target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
    if (isDuplicityVersion()) {
        console.warn(`Client-side function "${propertyKey}" attempted to run on the server side.`);
        descriptor.value = () => {};
    }

    Reflect.defineMetadata('clientOnly', true, target, propertyKey);
    console.log(`Registered client-side function: ${propertyKey}`);
}
