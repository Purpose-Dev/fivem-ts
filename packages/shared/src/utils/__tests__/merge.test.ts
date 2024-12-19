import { merge } from '../merge';

describe('merge', () => {
    it('should merge two objects with unique keys', () => {
        const obj1 = { a: 1 };
        const obj2 = { b: 2 };
        const result = merge(obj1, obj2);
        expect(result).toEqual({ a: 1, b: 2 });
    });

    it('should overwrite properties in the first object with properties from the second object', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { b: 3, c: 4 };
        const result = merge(obj1, obj2);
        expect(result).toEqual({ a: 1, b: 3, c: 4 });
    });

    it('should return a new object and not mutate the original objects', () => {
        const obj1 = { a: 1 };
        const obj2 = { b: 2 };
        const result = merge(obj1, obj2);
        expect(result).not.toBe(obj1);
        expect(result).not.toBe(obj2);
        expect(obj1).toEqual({ a: 1 });
        expect(obj2).toEqual({ b: 2 });
    });

    it('should handle empty objects correctly', () => {
        const obj1 = {};
        const obj2 = { a: 1 };
        const result = merge(obj1, obj2);
        expect(result).toEqual({ a: 1 });
    });

    it('should prioritize second object properties even if they are undefined', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { b: undefined };
        const result = merge(obj1, obj2);
        expect(result).toEqual({ a: 1, b: undefined });
    });
});
