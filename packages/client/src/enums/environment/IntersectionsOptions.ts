/**
 * List of possible entity intersections. Used for RayCasting.
 *
 * @enum{number}
 */
export enum IntersectionsOptions {
	Everything = -1,
	Map = 1,
	MissionEntities,
	Peds1 = 12,
	Objects = 16,
	Unk1 = 32,
	Unk2 = 64,
	Unk3 = 128,
	Vegetation = 256,
	Unk4 = 512,
}
