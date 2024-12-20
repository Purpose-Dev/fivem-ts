import {
    getRandomEnumEntry,
    Nullable,
    Vector3,
    VehiclesHash,
    WeatherEnum,
    WeatherTypeHash,
} from '@fivem-ts/shared';
import { Blip, Camera, CloudHat, Color, Entity, MarkerTypes, Model, Ped, Prop, Vehicle } from '.';

/**
 * Namespace with common world manipulations.
 * This namespace includes methods for creating entities and common world rendering.
 * You can create blips, entities, cameras and more.
 */
export namespace World {
    let currentCloudHat: CloudHat = CloudHat.Unknown;

    /**
     * Get the current camera that's rendering.
     *
     * @returns {Camera} The camera that's currently used.
     */
    export function getRenderingCamera(): Camera {
        return new Camera(GetRenderingCam());
    }

    /**
     * Sets the specified camera to be the active rendering camera.
     * Set null to reset : World.RenderingCamera = null
     * If the provided camera is null, the rendering will switch back to the default script camera.
     * Otherwise, the provided camera will be activated and used for rendering.
     *
     * @example
     * ```ts
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const myCamera = World.createCamera(position, new Vector3(0,0,0), 180);
     * World.RenderingCamera = myCamera;
     *
     * // Reset to default cam
     * World.RenderingCamera = null;
     * ```
     *
     * @param {Camera} camera - The camera object to be set as the active rendering camera. If null, the default script camera is used.
     *
     * @returns {void}
     */
    export function setRenderingCamera(camera: Camera): void {
        if (camera === null) {
            RenderScriptCams(false, false, 3000, true, false);
        } else {
            camera.IsActive = true;
            RenderScriptCams(true, false, 3000, true, false);
        }
    }

    /**
     * Returns the current date and time in game world.
     *
     * @returns {Date} The current date and time.
     */
    export function getCurrentDate(): Date {
        return new Date(
            GetClockYear(),
            GetClockMonth(),
            GetClockDayOfMonth(),
            GetClockHours(),
            GetClockMinutes(),
            GetClockSeconds(),
        );
    }

    /**
     * Set the current date of world with the specified date and time.
     *
     * @param {Date} date - The date object containing the new date and time.
     *
     * @returns {void}
     */
    export function setCurrentDate(date: Date): void {
        SetClockDate(date.getDate(), date.getMonth(), date.getDate());
        SetClockTime(date.getHours(), date.getMinutes(), date.getSeconds());
    }

    /**
     * Disables all emissive textures, street/building/vehicle lights. "EMP" effect.
     *
     * @param {boolean} state - A boolean indicating whether to turn blackout mode on or off.
     *
     * @returns {void}
     */
    export function setBlackout(state: boolean): void {
        SetBlackout(state);
    }

    /**
     * Get the current cloud hat.
     *
     * @returns {CloudHat} The current cloud hat type.
     */
    export function getCloudHat(): CloudHat {
        return currentCloudHat;
    }

    /**
     * Set the current cloud hat.
     *
     * @param {CloudHat} cloudHat The type of cloud hat.
     *
     * @returns {void}
     */
    export function setCloudHat(cloudHat: CloudHat): void {
        currentCloudHat = cloudHat;

        if (currentCloudHat === CloudHat.Unknown) {
            currentCloudHat = CloudHat.Clear01;
            ClearCloudHat();
            return;
        }

        SetCloudHatTransition(currentCloudHat, 3);
    }

    /**
     * Get the opacity of current cloud hat. Value is between 0-1.
     *
     * @returns {number} The current cloud opacity between 0.0 and 1.0
     */
    export function getCloudHatOpacity(): number {
        return GetCloudHatOpacity();
    }

    /**
     * Set opacity of current cloud hat between 0-1.
     *
     * @param {number} opacity Opacity between 0.0 and 1.0
     *
     * @returns {void}
     */
    export function setCloudHatOpacity(opacity: number): void {
        SetCloudHatOpacity(opacity);
    }

    /**
     * Loads the specified cloud hat into the environment.
     *
     * @param {CloudHat} cloudHat - The type of cloud hat to be loaded. If 'Unknown' is passed, it will default to 'Clear01'.
     *
     * @returns {void}
     */
    export function loadCloudHat(cloudHat: CloudHat): void {
        LoadCloudHat(cloudHat === CloudHat.Unknown ? CloudHat.Clear01 : cloudHat, 3);
    }

    /**
     * Preloads the specified cloud hat to ensure it is ready for use.
     *
     * @param {CloudHat} cloudHat - The type of cloud hat to preload. If the specified cloud hat is unknown, it defaults to Clear01.
     *
     * @returns {void}
     */
    export function preloadCloudHat(cloudHat: CloudHat): void {
        PreloadCloudHat(cloudHat === CloudHat.Unknown ? CloudHat.Clear01 : cloudHat);
    }

    /**
     * Unloads the specified cloud hat type. If the cloud hat type is `Unknown`,
     * it defaults to `Clear01`.
     *
     * @param {CloudHat} cloudHat - The type of cloud hat to unload.
     *
     * @returns {void}
     */
    export function unloadCloudHat(cloudHat: CloudHat): void {
        UnloadCloudHat(cloudHat === CloudHat.Unknown ? CloudHat.Clear01 : cloudHat, 0);
    }

    /**
     * Get the current weather type.
     *
     * @returns {WeatherTypeHash} The current type of weather.
     */
    export function getCurrentWeather(): WeatherTypeHash {
        return GetPrevWeatherTypeHashName();
    }

    /**
     * Set the current weather.
     *
     * @param weather {WeatherEnum} Type of weather to set.
     *
     * @returns {void}
     */
    export function setCurrentWeather(weather: WeatherEnum): void {
        if (weather !== WeatherEnum.Unknown) {
            SetWeatherTypeOverTime(weather, 1);
            setTimeout(() => {
                SetWeatherTypeNow(weather);
            }, 100);
        }
    }

    /**
     * Get the next weather type hash.
     *
     * @returns {WeatherTypeHash} Returns the hash name of the next weather type.
     */
    export function getNextWeather(): WeatherTypeHash {
        return GetNextWeatherTypeHashName();
    }

    /**
     * Sets the next weather type in the game.
     *
     * @param {WeatherEnum} weather - The weather type to set. Should not be `WeatherEnum.Unknown`.
     *
     * @returns {void}
     */
    export function setNextWeather(weather: WeatherEnum): void {
        if (weather !== WeatherEnum.Unknown) {
            SetWeatherTypeOverTime(weather, 0);
        }
    }

    /**
     * Transitions the current weather to the specified weather type over a given duration.
     *
     * @param {WeatherEnum} weather - The target weather type to transition to.
     * @param {number} duration - The amount of time, in seconds, over which the weather transition should occur.
     *
     * @returns {void}
     */
    export function transitionToWeather(weather: WeatherEnum, duration: number): void {
        if (weather !== WeatherEnum.Unknown) {
            SetWeatherTypeOverTime(weather, duration);
        }
    }

    /**
     * Creates a blip at a given position and optionally radius.
     *
     * @example
     * ```ts
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const myStoreBlip = World.createBlip(position, 5.0);
     * myStoreBlip.Sprite = BlipSprite.Store;
     * ```
     *
     * @param {Vector3} position World coordinate of blip.
     * @param {number} radius (Optional) Radius of where blip should be shown.
     *
     * @returns {Blip} Blip object.
     */
    export function createBlip(position: Vector3, radius?: number): Blip {
        if (radius !== null && radius !== undefined) {
            return new Blip(AddBlipForRadius(position.x, position.y, position.z, radius));
        }

        return new Blip(AddBlipForCoord(position.x, position.y, position.z));
    }

    /**
     * Creates a new blip for the given entity.
     *
     * @param {Entity} entity - The entity for which to create the blip.
     *
     * @returns {Blip|null} The created blip if the entity exists, otherwise null.
     */
    export function createEntityBlip(entity: Entity): Nullable<Blip> {
        if (entity !== null && entity.exists()) {
            return new Blip(AddBlipForEntity(entity.Handle));
        }

        return null;
    }

    /**
     * Destroys all existing cameras and sets your rendering camera back to GameplayCam.
     *
     * @returns {void}
     */
    export function destroyAllCameras(): void {
        DestroyAllCams(false);
    }

    /**
     * Creates a camera using 'DEFAULT_SCRIPTED_CAMERA'.
     *
     * @example
     * ```ts
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const myCamera = World.createCamera(position, new Vector3(0,0,0), 180);
     * ```
     *
     * @param {Vector3} position World coordinate where the camera should render.
     * @param {Vector3} rotation Rotation of camera relative to world.
     * @param {number} fieldOfView Field of view angle of camera.
     *
     * @returns {Camera} Camera object.
     */
    export function createCamera(
        position: Vector3,
        rotation: Vector3,
        fieldOfView: number,
    ): Camera {
        return new Camera(
            CreateCamWithParams(
                'DEFAULT_SCRIPTED_CAMERA',
                position.x,
                position.y,
                position.z,
                rotation.x,
                rotation.y,
                rotation.z,
                fieldOfView,
                true,
                2,
            ),
        );
    }

    /**
     * Creates a pedestrian (ped) instance in the game world at the specified position and heading with the provided model.
     *
     * @param {Model} model - The model to be used for creating the ped. Must be a valid pedestrian model.
     * @param {Vector3} position - The 3D vector specifying the position where the ped will be created.
     * @param [heading=0] - The heading direction for the ped. Defaults to 0 if not specified.
     *
     * @returns {Promise<Ped>} A promise that resolves to the created Ped instance, or null if the model is invalid or unavailable.
     */
    export async function createPed(
        model: Model,
        position: Vector3,
        heading = 0,
    ): Promise<Nullable<Ped>> {
        if (!model.IsPed || !(await model.request(1000))) {
            return null;
        }

        return new Ped(
            CreatePed(26, model.Hash, position.x, position.y, position.z, heading, true, false),
        );
    }

    /**
     * Creates a Ped with a random model.
     *
     * @example
     * ```ts
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const randomPed = World.createRandomPed(position);
     * ```
     *
     * @param {Vector3} position World coordinate of Ped spawn.
     *
     * @returns {Ped} Ped object.
     */
    export function createRandomPed(position: Vector3): Ped {
        return new Ped(CreateRandomPed(position.x, position.y, position.z));
    }

    /**
     * Create a vehicle at a desired location.
     *
     * @example
     * ```ts
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const model = new Model("adder");
     * const myVehicle = await World.createVehicle(model, position);
     * ```
     *
     * @param {Model} model Vehicle model to be spawned.
     * @param {Vector3} position World position (coordinates) of Vehicle spawn.
     * @param [heading=0] Heading of Vehicle when spawning.
     *
     * @returns {Vehicle} Vehicle object.
     */
    export async function createVehicle(
        model: Model,
        position: Vector3,
        heading = 0,
    ): Promise<Nullable<Vehicle>> {
        if (!model.IsVehicle || !(await model.request(1000))) {
            return null;
        }

        return new Vehicle(
            CreateVehicle(model.Hash, position.x, position.y, position.z, heading, true, false),
        );
    }

    /**
     * Create a random vehicle at a desired location.
     *
     * @example
     * ```ts
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const myVehicle = await World.createRandomVehicle(position);
     * ```
     *
     * @param {Vector3} position World position (coordinates) of Vehicle spawn.
     * @param [heading=0] Heading of Vehicle when spawning.
     *
     * @returns {Nullable<Vehicle>} Vehicle object.
     */
    export async function createRandomVehicle(
        position: Vector3,
        heading = 0,
    ): Promise<Nullable<Vehicle>> {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [_randomVehicleName, randomVehicleHash] = getRandomEnumEntry(VehiclesHash);
        const model: Model = new Model(randomVehicleHash);

        if (!model.IsVehicle || !(await model.request(1000))) {
            return null;
        }

        return new Vehicle(
            CreateVehicle(model.Hash, position.x, position.y, position.z, heading, true, false),
        );
    }

    /**
     * Spawns a [[`Prop`]] at the given position.
     *
     * @example
     * ```ts
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const model = new Model("prop_barrel_02a");
     * const myBarrelProp = await World.createProp(model, position, false, true);
     * ```
     *
     * @param {Model} model The [[`Model`]] to spawn (must be a Prop)
     * @param {Vector3} position Location of Prop
     * @param {dynamic} dynamic If set to true, the Prop will have physics otherwise it's static.
     * @param {boolean} placeOnGround If set to true, sets the Prop on the ground nearest to position.
     *
     * @returns {Promise<Prop>}
     */
    export async function createProp(
        model: Model,
        position: Vector3,
        dynamic: boolean,
        placeOnGround: boolean,
    ): Promise<Nullable<Prop>> {
        if (!model.IsProp || !(await model.request(1000))) {
            return null;
        }

        const prop = new Prop(
            CreateObject(model.Hash, position.x, position.y, position.z, true, true, dynamic),
        );

        if (placeOnGround) {
            prop.placeOnGround();
        }

        return prop;
    }

    /**
     * Draw a marker at a desired location.
     * Must be drawn every tick.
     *
     * @example
     * ```ts
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const zeroVector = new Vector3(0,0,0);
     *
     * setTick(() => {
     *  World.drawMarker(MarkerType.ThickChevronUp, position, zeroVector, zeroVector, 1.0, new Color(255,0,0));
     * })
     * ```
     *
     * @param {MarkerTypes} type Type of marker.
     * @param {Vector3} position Location of marker.
     * @param {Vector3} direction Direction facing.
     * @param {Vector3} rotation World rotation.
     * @param {Vector3} scale Size of marker.
     * @param {Color} color Color of marker.
     * @param [bobUpAndDown=false] Animated movement along marker's own X axis.
     * @param [faceCamera=false] Rendering marker facing rendering camera.
     * @param [rotateY=false] Rotate along Y axis.
     * @param {string} textureDict Custom texture dictionary for custom marker.
     * @param {string} textureName Custom texture name for custom marker.
     * @param [drawOnEntity=false] Render the marker on an entity.
     *
     * @returns {void}
     */
    export function drawMarker(
        type: MarkerTypes,
        position: Vector3,
        direction: Vector3,
        rotation: Vector3,
        scale: Vector3,
        color: Color,
        bobUpAndDown = false,
        faceCamera = false,
        rotateY = false,
        textureDict?: string,
        textureName?: string,
        drawOnEntity = false,
    ): void {
        DrawMarker(
            type,
            position.x,
            position.y,
            position.z,
            direction.x,
            direction.y,
            direction.z,
            rotation.x,
            rotation.y,
            rotation.z,
            scale.x,
            scale.y,
            scale.z,
            color.r,
            color.g,
            color.b,
            color.a,
            bobUpAndDown,
            faceCamera,
            2,
            rotateY,
            textureDict ?? '',
            textureName ?? '',
            drawOnEntity,
        );
    }

    /**
     * Creates a light in the world with a certain length (range).
     *
     * @param {Vector3} pos World coordinate where to draw the light.
     * @param {Color} color RGB colors of the light.
     * @param {range} range How far to draw the light.
     * @param {intensity} intensity Intensity of the light ("alpha").
     *
     * @returns {void}
     */
    export function drawLightWithRange(
        pos: Vector3,
        color: Color,
        range: number,
        intensity: number,
    ): void {
        DrawLightWithRange(pos.x, pos.y, pos.z, color.r, color.g, color.b, range, intensity);
    }

    /**
     * Creates a light in the world. More configurable than World.drawLightWithRange.
     *
     * @param {Vector3} pos World coordinate of spotlight.
     * @param {Vector3} dir Direction to face spotlight.
     * @param {Color} color RGB colors of spotlight.
     * @param {number} distance The maximum distance the spotlight can reach.
     * @param {number} brightness Brightness of the spotlight.
     * @param {number} roundness "Smoothness" of the edge of the spotlight.
     * @param {number} radius Radius size of spotlight.
     * @param {number} fadeOut Falloff size of the spotlight's edge.
     *
     * @returns {void}
     */
    export function drawSpotLight(
        pos: Vector3,
        dir: Vector3,
        color: Color,
        distance: number,
        brightness: number,
        roundness: number,
        radius: number,
        fadeOut: number,
    ): void {
        DrawSpotLight(
            pos.x,
            pos.y,
            pos.z,
            dir.x,
            dir.y,
            dir.z,
            color.r,
            color.g,
            color.b,
            distance,
            brightness,
            roundness,
            radius,
            fadeOut,
        );
    }

    /**
     * Creates a light in the world. Same as World.drawSpotlight, but also draws shadows.
     *
     * @param {Vector3} pos World coordinate of spotlight.
     * @param {Vector3} dir Direction to face spotlight.
     * @param {Color} color RGB colors of spotlight.
     * @param {number} distance The maximum distance the spotlight can reach.
     * @param {number} brightness Brightness of the spotlight.
     * @param {number} roundness "Smoothness" of the edge of the spotlight.
     * @param {number} radius Radius size of spotlight.
     * @param {number} fadeOut Falloff size of the spotlight's edge.
     *
     * @returns {void}
     */
    export function drawSpotLightWithShadow(
        pos: Vector3,
        dir: Vector3,
        color: Color,
        distance: number,
        brightness: number,
        roundness: number,
        radius: number,
        fadeOut: number,
    ): void {
        DrawSpotLightWithShadow(
            pos.x,
            pos.y,
            pos.z,
            dir.x,
            dir.y,
            dir.z,
            color.r,
            color.g,
            color.b,
            distance,
            brightness,
            roundness,
            radius,
            fadeOut,
            0,
        );
    }

    /**
     * Draws a line from the start vector to the end vector with the specified color.
     *
     * @param {Vector3} start - The starting point of the line.
     * @param {Vector3} end - The ending point of the line.
     * @param {Color} color - The color of the line.
     *
     * @returns {void}
     */
    export function drawLine(start: Vector3, end: Vector3, color: Color): void {
        DrawLine(
            start.x,
            start.y,
            start.z,
            end.x,
            end.y,
            end.z,
            color.r,
            color.g,
            color.b,
            color.a,
        );
    }

    /**
     * Draws a polygon defined by three vertices and a specified color.
     *
     * @param {Vector3} vertexA - The first vertex of the polygon.
     * @param {Vector3} vertexB - The second vertex of the polygon.
     * @param {Vector3} vertexC - The third vertex of the polygon.
     * @param {Color} color - The color of the polygon.
     *
     * @returns {void}
     */
    export function drawPoly(
        vertexA: Vector3,
        vertexB: Vector3,
        vertexC: Vector3,
        color: Color,
    ): void {
        DrawPoly(
            vertexA.x,
            vertexA.y,
            vertexA.z,
            vertexB.x,
            vertexB.y,
            vertexB.z,
            vertexC.x,
            vertexC.y,
            vertexC.z,
            color.r,
            color.g,
            color.b,
            color.a,
        );
    }

    /**
     * Retrieves all props in the current context.
     *
     * @returns {Prop[]} An array of props that exist.
     */
    export function getAllProps(): Prop[] {
        const props: Prop[] = [];
        const [handle, entityHandle] = FindFirstObject(Number.NaN) as [number, number];
        let prop: Prop = Entity.fromHandle(entityHandle) as Prop;

        if (prop !== undefined && prop !== null && prop.exists()) {
            props.push(prop);
        }

        let findResult: [number | boolean, number] = [false, Number.NaN];

        do {
            findResult = FindNextObject(entityHandle);
            if (findResult[0]) {
                prop = Entity.fromHandle(findResult[1]) as Prop;
                if (prop !== undefined && prop !== null && prop.exists()) {
                    props.push(prop);
                }
            }
        } while (findResult[0]);

        EndFindObject(handle);

        return props;
    }

    /**
     * Retrieves a list of all pedestrian entities currently present in the game environment.
     *
     * @returns {Ped[]} An array of `Ped` objects representing all pedestrians found.
     */
    export function getAllPeds(): Ped[] {
        const peds: Ped[] = [];
        const [handle, entityHandle] = FindFirstPed(Number.NaN) as [number, number];
        let ped: Ped = Entity.fromHandle(entityHandle) as Ped;

        if (ped !== undefined && ped !== null && ped.exists()) {
            peds.push(ped);
        }

        let findResult: [number | boolean, number] = [false, Number.NaN];

        do {
            findResult = FindNextPed(handle) as unknown as [number | boolean, number];
            if (findResult[0]) {
                ped = Entity.fromHandle(findResult[1]) as Ped;
                if (ped !== undefined && ped !== null && ped.exists()) {
                    peds.push(ped);
                }
            }
        } while (findResult[0]);

        EndFindPed(handle);

        return peds;
    }

    /**
     * Retrieves all vehicles currently present in the game world.
     *
     * @returns {Vehicle[]} An array of all vehicles found.
     */
    export function getAllVehicles(): Vehicle[] {
        const vehicles: Vehicle[] = [];
        const [handle, entityHandle] = FindFirstVehicle(Number.NaN) as [number, number];
        let vehicle: Vehicle = Entity.fromHandle(entityHandle) as Vehicle;

        if (vehicle !== undefined && vehicle !== null && vehicle.exists()) {
            vehicles.push(vehicle);
        }

        let findResult: [number | boolean, number] = [false, Number.NaN];

        do {
            findResult = FindNextVehicle(handle);
            if (findResult[0]) {
                vehicle = Entity.fromHandle(findResult[1]) as Vehicle;
                if (vehicle !== undefined && vehicle !== null && vehicle.exists()) {
                    vehicles.push(vehicle);
                }
            }
        } while (findResult[0]);

        EndFindVehicle(handle);
        return vehicles;
    }
}
