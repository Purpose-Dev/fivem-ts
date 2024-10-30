import { serializeToJSON } from '@fivem-ts/shared';

export function emitNetAllSerialized(eventName: string, ...args: unknown[]): void {
    emitNet(eventName, -1, serializeToJSON(args));
}
