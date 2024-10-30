/**
 * Enum representing the Lockdown Modes for a specific routing bucket.
 *
 * One of the aforementioned modes.
 * Sets the entity lockdown mode for a specific routing bucket.
 *
 * Lockdown modes are:
 *
 * - `strict`: No entities can be created by clients at all.
 * - `relaxed`: Only script-owned entities created by clients are blocked.
 * - `inactive`: Clients can create any entity they want.
 *
 * @enum {string}
 */
export enum BucketLockdownMode {
    Strict = 'strict',
    Relaxed = 'relaxed',
    Inactive = 'inactive',
}
