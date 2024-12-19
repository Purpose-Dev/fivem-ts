import { serializeToJSON } from '../serializeToJSON';

describe('serializeToJSON', () => {
    it('should serialize an object to a JSON string', () => {
        const obj = { name: 'John', age: 30 };
        const result = serializeToJSON(obj);
        expect(result).toBe('{"name":"John","age":30}');
    });

    it('should serialize an array to a JSON string', () => {
        const arr = [1, 2, 3];
        const result = serializeToJSON(arr);
        expect(result).toBe('[1,2,3]');
    });

    it('should serialize a primitive value (number) to a JSON string', () => {
        const num = 42;
        const result = serializeToJSON(num);
        expect(result).toBe('42');
    });

    it('should serialize a primitive value (string) to a JSON string', () => {
        const str = 'hello';
        const result = serializeToJSON(str);
        expect(result).toBe('"hello"');
    });

    it('should return an empty string for undefined', () => {
        const result = serializeToJSON(undefined);
        expect(result).toBe('');
    });

    it('should return an empty string for a function', () => {
        const func = () => {};
        const result = serializeToJSON(func);
        expect(result).toBe('');
    });

    it('should return an empty string for a value that causes JSON.stringify to throw an error', () => {
        const circularObj: any = {};
        circularObj.self = circularObj; // Creates a circular reference
        const result = serializeToJSON(circularObj);
        expect(result).toBe('');
    });

    it('should serialize null to a JSON string', () => {
        const result = serializeToJSON(null);
        expect(result).toBe('null');
    });

    it('should serialize a boolean value to a JSON string', () => {
        const bool = true;
        const result = serializeToJSON(bool);
        expect(result).toBe('true');
    });

    it('should serialize an empty object to a JSON string', () => {
        const result = serializeToJSON({});
        expect(result).toBe('{}');
    });

    it('should serialize an empty array to a JSON string', () => {
        const result = serializeToJSON([]);
        expect(result).toBe('[]');
    });
});
