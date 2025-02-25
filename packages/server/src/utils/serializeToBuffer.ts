import { serializeToJSON } from '@fivem-ts/shared';

export function serializeToBuffer(data: unknown): Buffer {
	if (Buffer.isBuffer(data)) {
		return data;
	}

	return Buffer.from(serializeToJSON(data), 'utf8');
}
