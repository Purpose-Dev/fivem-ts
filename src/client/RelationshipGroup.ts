import { Relationship } from './enums';

/**
 * Class to create and manage a relationship group. Useful to manage behavior between Peds.
 */
export class RelationshipGroup {
    /**
     * The hash of the relationship group
     */
    private readonly hash: number;

    /**
     * Create a relationship group. Optionally pass a group hash.
     *
     * @param name Name of the relationship group.
     * @param groupHash Optional custom group hash (default: 0).
     */
    constructor(name: string, groupHash?: number) {
        AddRelationshipGroup(name, groupHash ? groupHash : 0);
        this.hash = groupHash ? groupHash : 0;
    }

    /**
     * Gets the hash of the relationship group.
     *
     * @returns The hash of this object.
     */
    public get Hash(): number {
        return this.hash;
    }

    /**
     * Get the relationship between two relationship groups.
     *
     * @param targetGroup The other relationship group.
     * @returns The relationship
     */
    public getRelationshipBetweenGroups(targetGroup: RelationshipGroup): Relationship {
        return GetRelationshipBetweenGroups(this.Hash, targetGroup.Hash);
    }

    /**
     * Set the relationship group between this relationship group and another one.
     *
     * @param targetGroup The other relationship group.
     * @param relationship The desired relationship.
     * @param biDirectionally If target group should have same relationship towards this.
     */
    public setRelationshipBetweenGroups(
        targetGroup: RelationshipGroup,
        relationship: Relationship,
        biDirectionally = false,
    ): void {
        SetRelationshipBetweenGroups(relationship, this.Hash, targetGroup.Hash);

        if (biDirectionally) {
            SetRelationshipBetweenGroups(relationship, targetGroup.Hash, this.Hash);
        }
    }

    /**
     * Clear the relationship between this relationship group and another.
     *
     * @param targetGroup The other relationship group.
     * @param relationship The desired relationship to clear.
     * @param biDirectionally Whether the target group should also clear the relationship.
     */
    public clearRelationshipBetweenGroups(
        targetGroup: RelationshipGroup,
        relationship: Relationship,
        biDirectionally = false,
    ): void {
        ClearRelationshipBetweenGroups(relationship, this.Hash, targetGroup.Hash);

        if (biDirectionally) {
            ClearRelationshipBetweenGroups(relationship, targetGroup.Hash, this.Hash);
        }
    }

    /**
     * Remove this relationship group from the game. This will not delete this object.
     */
    public remove(): void {
        RemoveRelationshipGroup(this.Hash);
    }
}
