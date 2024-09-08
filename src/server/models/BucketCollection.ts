import { Bucket } from './Bucket';
import { BucketLockdownMode } from '../enums';

/**
 * Represents a collection of population-aware routing buckets.
 *
 * In the context of a FiveM server, routing buckets are used to segregate entities and players into different
 * logical spaces that can operate independently. These buckets allow you to control entity routing, player visibility,
 * and interaction within the game world, with the added capability of managing population awareness.
 */
export class BucketCollection {
    private readonly buckets: Map<number, Bucket> = new Map();

    /**
     * Creates a new instance of the `BucketCollection` class.
     */
    constructor() {}

    /**
     * Gets the map of buckets.
     *
     * @returns {Map<number, Bucket>} A map where the key is the bucket ID and the value is the bucket.
     */
    public get Buckets(): Map<number, Bucket> {
        return this.buckets;
    }

    /**
     * Gets the count of buckets in the collection.
     *
     * @returns {number} The number of buckets in the collection.
     */
    public get BucketCount(): number {
        return this.buckets.size;
    }

    /**
     * Retrieves all buckets in the collection.
     *
     * @returns An array of all buckets in the collection.
     */
    public getAllBuckets(): Bucket[] {
        return Array.from(this.buckets.values());
    }

    /**
     * Retrieves a bucket from the collection.
     *
     * @param bucketId - The unique identifier of the bucket to retrieve.
     * @returns The bucket with the specified identifier, or `undefined` if no such bucket exists.
     */
    public getBucket(bucketId: number): Bucket | undefined {
        return this.buckets.get(bucketId);
    }

    /**
     * Create a new bucket and add it to the collection.
     *
     * @param name - The name of the bucket.
     * @param id - The unique identifier for the bucket.
     * @param population - (Optional) A flag to enable or disable population within the bucket. Defaults to `false`.
     * @param entityLockdownMode - (Optional) The mode controlling entity access within the bucket. Defaults to `BucketLockdownMode.Relaxed`.
     */
    public createBucket(
        name: string,
        id: number,
        population?: boolean,
        entityLockdownMode?: BucketLockdownMode,
    ): void {
        this.addBucket(new Bucket(name, id, population, entityLockdownMode));
    }

    /**
     * Adds a new bucket to the collection.
     *
     * @param bucket - The bucket to add to the collection.
     */
    public addBucket(bucket: Bucket): void {
        if (!this.buckets.has(bucket.BucketId)) {
            this.buckets.set(bucket.BucketId, bucket);
        }
    }

    /**
     * Removes a bucket from the collection.
     *
     * @param bucketId - The unique identifier of the bucket to remove.
     */
    public removeBucket(bucketId: number): void {
        if (this.buckets.has(bucketId)) {
            this.buckets.delete(bucketId);
        }
    }

    /**
     * Removes all buckets from the collection.
     */
    public clear(): void {
        this.buckets.clear();
    }

    /**
     * Retrieves a list of buckets that are currently populated.
     *
     * @returns An array of buckets that are currently populated.
     */
    public getPopulatedBuckets(): Bucket[] {
        return this.getAllBuckets().filter(bucket => bucket.BucketPopulation);
    }

    /**
     * Retrieves a list of buckets that are currently empty.
     *
     * @returns An array of buckets that are currently empty.
     */
    public getEmptyBuckets(): Bucket[] {
        return this.getAllBuckets().filter(bucket => !bucket.BucketPopulation);
    }
}

export const bucketCollection: BucketCollection = new BucketCollection();
