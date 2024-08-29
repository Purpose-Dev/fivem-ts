import { Buffer } from 'buffer';
import { serializeToJSON } from './';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function serializeToBuffer(data: any): Buffer {
    if (Buffer.isBuffer(data)) {
        return data;
    }

    return Buffer.from(serializeToJSON(data), 'utf-8');
}
