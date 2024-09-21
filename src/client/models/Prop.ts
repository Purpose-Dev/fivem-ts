import { Entity } from '.';

/**
 * Represents a Prop entity.
 *
 * This class extends the Entity class and provides functionalities
 * specific to Prop entities. A Prop is a type of entity that can be
 * placed on the ground correctly within the game environment.
 */
export class Prop extends Entity {
    constructor(id: number) {
        if (!(GetEntityType(id) !== 3)) {
            throw new Error('Prop: Attempted to create an instance with an invalid entity type.');
        }
        super(id);
    }

    /**
     * Positions the object on the ground properly.
     *
     * This method uses the underlying 'PlaceObjectOnGroundProperly' function with
     * the current object's handle to adjust its position such that it rests
     * appropriately on the ground.
     *
     * @return {void}
     */
    public placeOnGround(): void {
        PlaceObjectOnGroundProperly(this.Handle);
    }

    /**
     * Places the object on the ground properly using the appropriate game function.
     * Adjusts the position of the object to ensure it is correctly aligned with the ground.
     *
     * @return {void}
     */
    public placeOnGround2(): void {
        PlaceObjectOnGroundProperly_2(this.Handle);
    }
}
