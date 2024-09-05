import { Buffer } from 'buffer';
import { serializeToJSON } from '../../shared';

export function serializeToBuffer(data: unknown): Buffer {
    if (Buffer.isBuffer(data)) {
        return data;
    }

    return Buffer.from(serializeToJSON(data), 'utf-8');
}
