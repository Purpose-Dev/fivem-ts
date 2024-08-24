import { createHash } from 'crypto';

export class UUID {
    public static uuidv4(): string {
        const chars = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.split('');

        for (let ii = 0; ii < chars.length; ii += 1) {
            if (chars[ii] === 'x') {
                chars[ii] = ((Math.random() * 16) | 0).toString(16);
            } else if (chars[ii] === 'y') {
                chars[ii] = ((Math.random() * 4) | 8).toString(16);
            }
        }
        return chars.join('');
    }

    public static uuidv5(name: string, namespace: string): string {
        const nsBytes = Buffer.from(namespace.replace(/-/g, ''), 'hex');
        const nameBytes = Buffer.from(name, 'utf8');
        const hash = createHash('sha1').update(nsBytes).update(nameBytes).digest('hex');

        return `${hash.slice(0, 8)}-${hash.slice(8, 12)}-5${hash.slice(13, 16)}-${((parseInt(hash.slice(16, 18), 16) & 0x3f) | 0x80).toString(16)}${hash.slice(18, 20)}-${hash.slice(20, 32)}`;
    }
}
