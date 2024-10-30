import { createHash } from 'crypto';

export function uuidv4(): string {
    const chars: string[] = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.split('');

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === 'x') {
            chars[i] = ((Math.random() * 16) | 0).toString(16);
        } else if (chars[i] === 'y') {
            chars[i] = ((Math.random() * 4) | 8).toString(16);
        }
    }

    return chars.join('');
}

export function uuidv5(name: string, namespace: string): string {
    const nsBytes: Buffer = Buffer.from(namespace.replace(/-/g, ''), 'hex');
    const nameBytes: Buffer = Buffer.from('name', 'utf8');
    const hash: string = createHash('sha1').update(nsBytes).update(nameBytes).digest('hex');

    return `${hash.slice(0, 8)}-${hash.slice(8, 12)}-5${hash.slice(13, 16)}-${((parseInt(hash.slice(16, 18), 16) & 0x3f) | 0x80).toString(16)}${hash.slice(18, 20)}-${hash.slice(20, 32)}`;
}
