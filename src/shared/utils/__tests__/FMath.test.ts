import { FMath } from '../FMath';

describe('FMath', () => {
    // Clamps a number correctly within the specified range
    it('should clamp a number within the specified range', () => {
        expect(FMath.clamp(5, 1, 10)).toBe(5);
        expect(FMath.clamp(0, 1, 10)).toBe(1);
        expect(FMath.clamp(15, 1, 10)).toBe(10);
    });

    // Clamps a number when num is exactly equal to min or max
    it('should clamp a number when num is exactly equal to min or max', () => {
        expect(FMath.clamp(1, 1, 10)).toBe(1);
        expect(FMath.clamp(10, 1, 10)).toBe(10);
    });

    // Generates a random integer within the specified range
    it('should generate a random integer within the specified range', () => {
        const min = 1;
        const max = 10;
        const randomInt = FMath.getRandomInt(min, max);
        expect(randomInt).toBeGreaterThanOrEqual(min);
        expect(randomInt).toBeLessThanOrEqual(max);
    });

    // Generates a random integer when min and max are the same
    it('should generate a random integer when min and max are the same', () => {
        const minMax = 5;
        const randomInt = FMath.getRandomInt(minMax, minMax);
        expect(randomInt).toBe(minMax);
    });

    // Linearly interpolates between two values correctly
    it('should linearly interpolate between two values correctly', () => {
        expect(FMath.lerp(0, 10, 0.5)).toBe(5);
        expect(FMath.lerp(0, 10, 0.75)).toBe(7.5);
    });

    // Linearly interpolates when amount is 0 or 1
    it('should linearly interpolate when amount is 0 or 1', () => {
        expect(FMath.lerp(0, 10, 0)).toBe(0);
        expect(FMath.lerp(0, 10, 1)).toBe(10);
    });

    // Converts radians to degrees accurately
    it('should convert radians to degrees accurately', () => {
        expect(FMath.toDegrees(Math.PI)).toBe(180);
        expect(FMath.toDegrees(Math.PI / 2)).toBe(90);
    });

    // Converts radians to degrees when radians is 0 or a multiple of 2π
    it('should convert radians to degrees when radians is 0 or a multiple of 2π', () => {
        expect(FMath.toDegrees(0)).toBe(0);
        expect(FMath.toDegrees(Math.PI * 2)).toBe(360);
    });

    // Converts degrees to radians accurately
    it('should convert degrees to radians accurately', () => {
        expect(FMath.toRadians(180)).toBeCloseTo(Math.PI);
        expect(FMath.toRadians(90)).toBeCloseTo(Math.PI / 2);
    });

    // Converts degrees to radians when degrees is 0 or a multiple of 180
    it('should convert degrees to radians when degrees is 0 or a multiple of 180', () => {
        expect(FMath.toRadians(0)).toBe(0);
        expect(FMath.toRadians(360)).toBeCloseTo(Math.PI * 2);
    });

    // Calculates the distance between two points in 2D space correctly
    it('should calculate the distance between two points in 2D space correctly', () => {
        expect(FMath.distance2D(0, 0, 3, 4)).toBe(5);
    });

    // Calculates distance in 2D space when points are the same
    it('should calculate distance in 2D space when points are the same', () => {
        expect(FMath.distance2D(3, 4, 3, 4)).toBe(0);
    });

    // Calculates the distance between two points in 3D space correctly
    it('should calculate the distance between two points in 3D space correctly', () => {
        expect(FMath.distance3D(0, 0, 0, 3, 4, 12)).toBe(13);
    });

    // Calculates distance in 3D space when points are the same
    it('should calculate distance in 3D space when points are the same', () => {
        expect(FMath.distance3D(3, 4, 5, 3, 4, 5)).toBe(0);
    });

    // Normalizes a value within a range to a value between 0 and 1
    it('should normalize a value within a range to a value between 0 and 1', () => {
        expect(FMath.normalize(75, 50, 100)).toBe(0.5);
        expect(FMath.normalize(100, 50, 100)).toBe(1);
        expect(FMath.normalize(50, 50, 100)).toBe(0);
    });

    // Normalizes a value when min equals max
    it('should return NaN when normalizing with min equal to max', () => {
        expect(FMath.normalize(50, 50, 50)).toBeNaN();
    });

    // Maps a value from one range to another
    it('should map a value from one range to another', () => {
        expect(FMath.mapRange(5, 0, 10, 0, 100)).toBe(50);
        expect(FMath.mapRange(0, 0, 10, 0, 100)).toBe(0);
        expect(FMath.mapRange(10, 0, 10, 0, 100)).toBe(100);
    });

    // Maps a value when input range is zero
    it('should return NaN when mapping a value with input range equal to zero', () => {
        expect(FMath.mapRange(5, 10, 10, 0, 100)).toBeNaN();
    });

    // Checks if a value is within a specified range
    it('should check if a value is within a specified range', () => {
        expect(FMath.isInRange(5, 1, 10)).toBe(true);
        expect(FMath.isInRange(1, 1, 10)).toBe(true);
        expect(FMath.isInRange(10, 1, 10)).toBe(true);
        expect(FMath.isInRange(0, 1, 10)).toBe(false);
        expect(FMath.isInRange(11, 1, 10)).toBe(false);
    });

    // Checks if a value is within a range where min equals max
    it('should return true when the value equals min and max in isInRange', () => {
        expect(FMath.isInRange(5, 5, 5)).toBe(true);
    });

    // Checks if a value is not within an inverted range
    it('should return false if min is greater than max in isInRange', () => {
        expect(FMath.isInRange(5, 10, 1)).toBe(false);
    });
});
