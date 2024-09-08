import { BucketLockdownMode } from '../enums';

export module Buckets {}
/**
 * Represents a population-aware routing bucket, also known as a 'dimension' or 'virtual world'.
 *
 * In the context of a FiveM server, routing buckets are used to segregate entities and players into different
 * logical spaces that can operate independently. These buckets allow you to control entity routing, player visibility,
 * and interaction within the game world, with the added capability of managing population awareness.
 */
export class Bucket {
    private readonly bucketName: string;
    private readonly bucketId: number;
    private bucketPopulation: boolean;
    private bucketEntityLockdown: BucketLockdownMode;
    private readonly entities: number[] = [];
    private readonly players: string[] = [];

    /**
     * Creates a new instance of the `Bucket` class.
     *
     * @param bucketName - The name of the bucket.
     * @param bucketId - The unique identifier for the bucket.
     * @param bucketPopulation - (Optional) A flag to enable or disable population within the bucket. Defaults to `false`.
     * @param bucketEntityLockdownMode - (Optional) The mode controlling entity access within the bucket. Defaults to `BucketLockdownMode.Relaxed`.
     */
    constructor(
        bucketName: string,
        bucketId: number,
        bucketPopulation?: boolean,
        bucketEntityLockdownMode?: BucketLockdownMode,
    ) {
        this.bucketName = bucketName;
        this.bucketId = bucketId;
        this.BucketPopulation = bucketPopulation ?? false;
        this.BucketEntityLockdownMode = bucketEntityLockdownMode ?? BucketLockdownMode.Relaxed;
    }

    /**
     * Gets the name of the bucket.
     *
     * @returns The name of the bucket.
     */
    public get BucketName(): string {
        return this.bucketName;
    }

    /**
     * Gets the unique ID of the bucket.
     *
     * @returns The unique identifier of the bucket.
     */
    public get BucketId(): number {
        return this.bucketId;
    }

    /**
     * Retrieves the current population status of the bucket.
     *
     * @return The population status of the bucket.
     */
    public get BucketPopulation(): boolean {
        return this.bucketPopulation;
    }

    /**
     * Sets the bucket population state for this instance and updates the corresponding routing bucket.
     *
     * @param enabled - A boolean flag indicating whether the bucket population should be enabled (true) or disabled (false).
     */
    public set BucketPopulation(enabled: boolean) {
        this.bucketPopulation = enabled;
        SetRoutingBucketPopulationEnabled(this.bucketId, enabled);
    }

    /**
     * Retrieves the current lockdown mode of the bucket entity.
     *
     * @return The current lockdown mode of the bucket entity.
     */
    public get BucketEntityLockdownMode(): BucketLockdownMode {
        return this.bucketEntityLockdown;
    }

    /**
     * Sets the lockdown mode for the bucket entity.
     *
     * @param mode - The lockdown mode to be set for the bucket entity.
     */
    public set BucketEntityLockdownMode(mode: BucketLockdownMode) {
        this.bucketEntityLockdown = mode;
        SetRoutingBucketEntityLockdownMode(this.bucketId, mode);
    }

    /**
     * Gets a list of entity IDs currently assigned to the bucket.
     *
     * @returns An array of entity IDs.
     */
    public get Entities(): number[] {
        return this.entities;
    }

    /**
     * Gets a list of player IDs currently assigned to the bucket.
     *
     * @returns An array of player IDs.
     */
    public get Players(): string[] {
        return this.players;
    }

    /**
     * Adds an entity to the bucket if it is not already present.
     *
     * @param entityId - The ID of the entity to add.
     * @returns `true` if the entity was successfully added; `false` if the entity was already present.
     */
    public addEntity(entityId: number): boolean {
        if (this.entities.includes(entityId)) return false;

        SetEntityRoutingBucket(entityId, this.bucketId);
        this.entities.push(entityId);
        return true;
    }

    /**
     * Adds a player to the bucket if they are not already present.
     *
     * @param playerId - The ID of the player to add.
     * @returns `true` if the player was successfully added; `false` if the player was already present.
     */
    public addPlayer(playerId: string): boolean {
        if (this.players.includes(playerId)) return false;

        SetPlayerRoutingBucket(playerId, this.bucketId);
        this.players.push(playerId);
        return true;
    }
}
