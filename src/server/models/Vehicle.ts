import { Entity } from '.';

// @todo: Add Methods related to Vehicle

/**
 * Vehicle class that extends the Entity class.
 * Represents a vehicle entity.
 *
 * @extends {Entity}
 */
export class Vehicle extends Entity {
    constructor(id: number) {
        if (!(GetEntityType(id) === 2)) {
            throw new Error('Entity type is not a vehicle');
        }
        super(id);
    }
}
