/**
 * Sets what happens when the entity is orphaned and no longer has its original owner.
 * **NOTE**: This native doesn't guarantee the persistence of the entity.
 * https://github.com/citizenfx/fivem/commit/db0d747a9c900d93e336028ee495ed87ea946c83#diff-ace4096b9336f866094d85230f5cbddd788ad5c158cac2bc613b872c55cb53f4R23
 *
 *
 * @enum {number}
 */
export enum EntityOrphanMode {
    /**
     * Default, this will delete the entity when it isn't relevant to any players
     * NOTE: this *doesn't* mean when they're no longer in scope
     */
    DeleteWhenNotRelevant = 0,
    /**
     * The entity will be deleted whenever its original owner disconnects
     * NOTE: if this is set when the entities original owner has already left it will be
     * marked for deletion (similar to just calling DELETE_ENTITY)
     */
    DeleteOnOwnerDisconnect = 1,
    /**
     * The entity will never be deleted by the server when it does relevancy checks
     * you should only use this on entities that need to be relatively persistent
     */
    KeepEntity = 2,
}
