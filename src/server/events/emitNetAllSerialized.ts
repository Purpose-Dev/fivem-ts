import { Buffer } from 'buffer';
import { serializeToBuffer, serializeToJSON } from '../utils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function emitNetAllSerialized(eventName: string, useBuffer: boolean, ...args: any[]): void {
    const serializedArgs: (string | Buffer)[] = args.map(arg =>
        useBuffer ? serializeToBuffer(arg) : serializeToJSON(arg),
    );

    emitNet(eventName, -1, ...serializedArgs);
}
