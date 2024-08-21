import { Vector3, Vec3 } from '../Vector3';

describe('Vector3', () => {
    test('Should create a new Vector3 instance with given x, y, z values', () => {
        const vec = new Vector3(1, 2, 3);
        expect(vec.x).toBe(1);
        expect(vec.y).toBe(2);
        expect(vec.z).toBe(3);
    });

    test('Should calculate the length (magnitude) of the vector', () => {
        const vec = new Vector3(1, 2, 2);
        expect(vec.Length).toBe(3);
    });

    test('Should clone the vector', () => {
        const vec = new Vector3(1, 2, 3);
        const clone = vec.clone();
        expect(clone).toEqual(vec);
        expect(clone).not.toBe(vec);
    });

    test('Should calculate the distance squared between two vectors', () => {
        const vec1 = new Vector3(1, 2, 3);
        const vec2: Vec3 = { x: 4, y: 5, z: 6 };
        expect(vec1.distanceSquared(vec2)).toBe(27);
    });

    test('Should calculate the distance between two vectors', () => {
        const vec1 = new Vector3(1, 2, 3);
        const vec2: Vec3 = { x: 4, y: 5, z: 6 };
        expect(vec1.distance(vec2)).toBeCloseTo(5.196, 3);
    });

    test('Should normalize the vector', () => {
        const vec = new Vector3(3, 0, 0);
        const normalized = vec.normalize;
        expect(normalized.Length).toBeCloseTo(1, 3);
        expect(normalized.x).toBeCloseTo(1, 3);
        expect(normalized.y).toBeCloseTo(0, 3);
        expect(normalized.z).toBeCloseTo(0, 3);
    });

    test('Should calculate the cross product of two vectors', () => {
        const vec1 = new Vector3(1, 0, 0);
        const vec2: Vec3 = { x: 0, y: 1, z: 0 };
        const cross = vec1.crossProduct(vec2);
        expect(cross).toEqual(new Vector3(0, 0, 1));
    });

    test('Should calculate the dot product of two vectors', () => {
        const vec1 = new Vector3(1, 2, 3);
        const vec2: Vec3 = { x: 4, y: 5, z: 6 };
        expect(vec1.dotProduct(vec2)).toBe(32);
    });

    test('Should add a vector or number to this vector', () => {
        const vec1 = new Vector3(1, 2, 3);
        const vec2: Vec3 = { x: 4, y: 5, z: 6 };
        const result1 = vec1.add(vec2);
        const result2 = vec1.add(1);
        expect(result1).toEqual(new Vector3(5, 7, 9));
        expect(result2).toEqual(new Vector3(2, 3, 4));
    });

    test('Should subtract a vector or number from this vector', () => {
        const vec1 = new Vector3(4, 5, 6);
        const vec2: Vec3 = { x: 1, y: 2, z: 3 };
        const result1 = vec1.subtract(vec2);
        const result2 = vec1.subtract(1);
        expect(result1).toEqual(new Vector3(3, 3, 3));
        expect(result2).toEqual(new Vector3(3, 4, 5));
    });

    test('Should multiply this vector by a number or another vector', () => {
        const vec1 = new Vector3(1, 2, 3);
        const vec2: Vec3 = { x: 4, y: 5, z: 6 };
        const result1 = vec1.multiply(vec2);
        const result2 = vec1.multiply(2);
        expect(result1).toEqual(new Vector3(4, 10, 18));
        expect(result2).toEqual(new Vector3(2, 4, 6));
    });

    test('Should divide this vector by a number or another vector', () => {
        const vec1 = new Vector3(4, 6, 8);
        const vec2: Vec3 = { x: 2, y: 3, z: 4 };
        const result1 = vec1.divide(vec2);
        const result2 = vec1.divide(2);
        expect(result1).toEqual(new Vector3(2, 2, 2));
        expect(result2).toEqual(new Vector3(2, 3, 4));
    });

    test("Should replace the current vector's components with another vector's components", () => {
        const vec1 = new Vector3(1, 2, 3);
        const vec2: Vec3 = { x: 4, y: 5, z: 6 };
        vec1.replace(vec2);
        expect(vec1).toEqual(new Vector3(4, 5, 6));
    });

    // Static method tests
    test('Should create a Vector3 instance from a number or vector', () => {
        const vec1 = Vector3.create(1);
        const vec2 = Vector3.create({ x: 2, y: 3, z: 4 });
        expect(vec1).toEqual(new Vector3(1, 1, 1));
        expect(vec2).toEqual(new Vector3(2, 3, 4));
    });

    test('Should clone a vector', () => {
        const vec1 = new Vector3(1, 2, 3);
        const clone = Vector3.clone(vec1);
        expect(clone).toEqual(vec1);
        expect(clone).not.toBe(vec1);
    });

    test('Should add two vectors or a vector and a number', () => {
        const vec1 = new Vector3(1, 2, 3);
        const vec2: Vec3 = { x: 4, y: 5, z: 6 };
        const result1 = Vector3.add(vec1, vec2);
        const result2 = Vector3.add(vec1, 1);
        expect(result1).toEqual(new Vector3(5, 7, 9));
        expect(result2).toEqual(new Vector3(2, 3, 4));
    });

    test('Should subtract a vector or a number from another vector', () => {
        const vec1 = new Vector3(4, 5, 6);
        const vec2: Vec3 = { x: 1, y: 2, z: 3 };
        const result1 = Vector3.subtract(vec1, vec2);
        const result2 = Vector3.subtract(vec1, 1);
        expect(result1).toEqual(new Vector3(3, 3, 3));
        expect(result2).toEqual(new Vector3(3, 4, 5));
    });

    test('Should multiply two vectors or a vector and a number', () => {
        const vec1 = new Vector3(1, 2, 3);
        const vec2: Vec3 = { x: 4, y: 5, z: 6 };
        const result1 = Vector3.multiply(vec1, vec2);
        const result2 = Vector3.multiply(vec1, 2);
        expect(result1).toEqual(new Vector3(4, 10, 18));
        expect(result2).toEqual(new Vector3(2, 4, 6));
    });

    test('Should divide a vector by another vector or a number', () => {
        const vec1 = new Vector3(4, 6, 8);
        const vec2: Vec3 = { x: 2, y: 3, z: 4 };
        const result1 = Vector3.divide(vec1, vec2);
        const result2 = Vector3.divide(vec1, 2);
        expect(result1).toEqual(new Vector3(2, 2, 2));
        expect(result2).toEqual(new Vector3(2, 3, 4));
    });

    test('Should calculate the dot product of two vectors', () => {
        const vec1 = new Vector3(1, 2, 3);
        const vec2: Vec3 = { x: 4, y: 5, z: 6 };
        expect(Vector3.dotProduct(vec1, vec2)).toBe(32);
    });

    test('Should calculate the cross product of two vectors', () => {
        const vec1 = new Vector3(1, 0, 0);
        const vec2: Vec3 = { x: 0, y: 1, z: 0 };
        const cross = Vector3.crossProduct(vec1, vec2);
        expect(cross).toEqual(new Vector3(0, 0, 1));
    });

    test('Should normalize a vector', () => {
        const vec = new Vector3(3, 0, 0);
        const normalized = Vector3.normalize(vec);
        expect(normalized.Length).toBeCloseTo(1, 3);
        expect(normalized.x).toBeCloseTo(1, 3);
        expect(normalized.y).toBeCloseTo(0, 3);
        expect(normalized.z).toBeCloseTo(0, 3);
    });
});
