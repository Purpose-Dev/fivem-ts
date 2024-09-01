import 'reflect-metadata';
import { isDuplicityVersion } from '../../utils';

export function ServerOnly(target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
    if (!isDuplicityVersion()) {
        console.warn(`Client-side function "${propertyKey}" attempted to run on the client side.`);
        descriptor.value = () => {};
    }

    Reflect.defineMetadata('serverOnly', true, target, propertyKey);
    console.log(`Registered server-side function: ${propertyKey}`);
}
