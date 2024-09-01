import { Buffer } from 'buffer';
import { serializeToBuffer } from '../utils';
import { serializeToJSON } from '../../shared';

export function emitNetAllSerialized(eventName: string, useBuffer: boolean, ...args: any[]): void {
    const serializedArgs: (string | Buffer)[] = args.map(arg =>
        useBuffer ? serializeToBuffer(arg) : serializeToJSON(arg),
    );

    emitNet(eventName, -1, ...serializedArgs);
}
