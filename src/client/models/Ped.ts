import { Entity, PedBoneCollection, Vehicle } from '.';
import { Vector3, VehicleSeat, WeaponsHash } from '../../shared';
import { DrivingStyle, HelmetType, RagdollType, SpeechModifier } from '../enums';

/**
 * Represents a pedestrian character (Ped) in the game world.
 *
 * @extends Entity
 */
export class Ped extends Entity {
    private pedBones: PedBoneCollection;
    private drivingStyle: DrivingStyle;
    private readonly speechModifierNames: string[] = [
        'SPEECH_PARAMS_STANDARD',
        'SPEECH_PARAMS_ALLOW_REPEAT',
        'SPEECH_PARAMS_BEAT',
        'SPEECH_PARAMS_FORCE',
        'SPEECH_PARAMS_FORCE_FRONTEND',
        'SPEECH_PARAMS_FORCE_NO_REPEAT_FRONTEND',
        'SPEECH_PARAMS_FORCE_NORMAL',
        'SPEECH_PARAMS_FORCE_NORMAL_CLEAR',
        'SPEECH_PARAMS_FORCE_NORMAL_CRITICAL',
        'SPEECH_PARAMS_FORCE_SHOUTED',
        'SPEECH_PARAMS_FORCE_SHOUTED_CLEAR',
        'SPEECH_PARAMS_FORCE_SHOUTED_CRITICAL',
        'SPEECH_PARAMS_FORCE_PRELOAD_ONLY',
        'SPEECH_PARAMS_MEGAPHONE',
        'SPEECH_PARAMS_HELI',
        'SPEECH_PARAMS_FORCE_MEGAPHONE',
        'SPEECH_PARAMS_FORCE_HELI',
        'SPEECH_PARAMS_INTERRUPT',
        'SPEECH_PARAMS_INTERRUPT_SHOUTED',
        'SPEECH_PARAMS_INTERRUPT_SHOUTED_CLEAR',
        'SPEECH_PARAMS_INTERRUPT_SHOUTED_CRITICAL',
        'SPEECH_PARAMS_INTERRUPT_NO_FORCE',
        'SPEECH_PARAMS_INTERRUPT_FRONTEND',
        'SPEECH_PARAMS_INTERRUPT_NO_FORCE_FRONTEND',
        'SPEECH_PARAMS_ADD_BLIP',
        'SPEECH_PARAMS_ADD_BLIP_ALLOW_REPEAT',
        'SPEECH_PARAMS_ADD_BLIP_FORCE',
        'SPEECH_PARAMS_ADD_BLIP_SHOUTED',
        'SPEECH_PARAMS_ADD_BLIP_SHOUTED_FORCE',
        'SPEECH_PARAMS_ADD_BLIP_INTERRUPT',
        'SPEECH_PARAMS_ADD_BLIP_INTERRUPT_FORCE',
        'SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED',
        'SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED_CLEAR',
        'SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED_CRITICAL',
        'SPEECH_PARAMS_SHOUTED',
        'SPEECH_PARAMS_SHOUTED_CLEAR',
        'SPEECH_PARAMS_SHOUTED_CRITICAL',
    ];

    constructor(owner: number) {
        if (!(GetEntityType(owner) !== 1)) {
            throw new Error('Ped: Attempted to create an instance with an invalid entity type.');
        }

        super(owner);
    }

    public override get Bones(): PedBoneCollection {
        if (this.pedBones === null) {
            this.pedBones = new PedBoneCollection(this);
        }

        return this.pedBones;
    }

    public get DrivingStyle() {
        return this.drivingStyle;
    }

    public set DrivingStyle(style: DrivingStyle) {
        SetDriveTaskDrivingStyle(this.handle, style);
        this.drivingStyle = style;
    }

    public get SpeechModifiersName(): string[] {
        return this.speechModifierNames;
    }

    public override get Health(): number {
        return super.Health - 100;
    }

    public override set Health(health: number) {
        super.Health = health + 100;
    }

    public get MaxHealth(): number {
        return super.MaxHealth - 100;
    }

    public set MaxHealth(amount: number) {
        super.MaxHealth = amount + 100;
    }

    public get CurrentVehicle(): Vehicle {
        const vehicle: Vehicle = new Vehicle(GetVehiclePedIsIn(this.handle, false));
        return vehicle.exists() ? vehicle : null;
    }

    public get LastVehicle(): Vehicle {
        const vehicle: Vehicle = new Vehicle(GetVehiclePedIsIn(this.handle, true));
        return vehicle.exists() ? vehicle : null;
    }

    public get VehicleTryingToEnter(): Vehicle {
        const vehicle: Vehicle = new Vehicle(GetVehiclePedIsTryingToEnter(this.handle));
        return vehicle.exists() ? vehicle : null;
    }

    public get IsJumpingOutOfVehicle(): boolean {
        return IsPedJumpingOutOfVehicle(this.handle);
    }

    public set StaysInVehicleWhenJacked(value: boolean) {
        SetPedStayInVehicleWhenJacked(this.handle, value);
    }

    public set MaxDrivingSpeed(value: number) {
        SetDriveTaskMaxCruiseSpeed(this.handle, value);
    }

    public get IsHuman(): boolean {
        return IsPedHuman(this.handle);
    }

    public set IsEnemy(value: boolean) {
        SetPedAsEnemy(this.handle, value);
    }

    public set IsPriorityTargetForEnemies(value: boolean) {
        SetEntityIsTargetPriority(this.handle, value, 0);
    }

    public get IsPlayer(): boolean {
        return IsPedAPlayer(this.handle);
    }

    public get IsCuffed(): boolean {
        return IsPedCuffed(this.handle);
    }

    public get IsWearingHelmet(): boolean {
        return IsPedWearingHelmet(this.handle);
    }

    public get IsRagdoll(): boolean {
        return IsPedRagdoll(this.handle);
    }

    public get IsIdle(): boolean {
        return (
            !this.IsInjured &&
            !this.IsRagdoll &&
            !this.IsInAir &&
            !this.IsOnFire &&
            !this.IsDucking &&
            !this.IsGettingIntoAVehicle &&
            !this.IsInCombat &&
            !this.IsInMeleeCombat &&
            (!this.isInAnyVehicle() || this.isSittingInAnyVehicle())
        );
    }

    public get IsProne(): boolean {
        return IsPedProne(this.handle);
    }

    public set IsDucking(value: boolean) {
        SetPedDucking(this.handle, value);
    }

    public get IsDucking(): boolean {
        return IsPedDucking(this.handle);
    }

    public get IsGettingUp(): boolean {
        return IsPedGettingUp(this.handle);
    }

    public get IsClimbing(): boolean {
        return IsPedClimbing(this.handle);
    }

    public get IsJumping(): boolean {
        return IsPedJumping(this.handle);
    }

    public get IsFalling(): boolean {
        return IsPedFalling(this.handle);
    }

    public get IsStopped(): boolean {
        return IsPedStopped(this.handle);
    }

    public get IsWalking(): boolean {
        return IsPedWalking(this.handle);
    }

    public get IsRunning(): boolean {
        return IsPedRunning(this.handle);
    }

    public get IsSprinting(): boolean {
        return IsPedSprinting(this.handle);
    }

    public get IsDiving(): boolean {
        return IsPedDiving(this.handle);
    }

    public get IsInParachuteFreeFall(): boolean {
        return IsPedInParachuteFreeFall(this.handle);
    }

    public get IsSwimming(): boolean {
        return IsPedSwimming(this.handle);
    }

    public get IsSwimmingUnderWater(): boolean {
        return IsPedSwimmingUnderWater(this.handle);
    }

    public get IsVaulting(): boolean {
        return IsPedVaulting(this.handle);
    }

    public get IsOnBike(): boolean {
        return IsPedOnAnyBike(this.handle);
    }

    public get IsOnFoot(): boolean {
        return IsPedOnFoot(this.handle);
    }

    public get IsInSub(): boolean {
        return IsPedInAnySub(this.handle);
    }

    public get IsInTaxi(): boolean {
        return IsPedInAnyTaxi(this.handle);
    }

    public get IsInTrain(): boolean {
        return IsPedInAnyTrain(this.handle);
    }

    public get IsInHeli(): boolean {
        return IsPedInAnyHeli(this.handle);
    }

    public get IsInPlane(): boolean {
        return IsPedInAnyPlane(this.handle);
    }

    public get IsInFlyingVehicle(): boolean {
        return IsPedInFlyingVehicle(this.handle);
    }

    public get IsInBoat(): boolean {
        return IsPedInAnyBoat(this.handle);
    }

    public get IsInPoliceVehicle(): boolean {
        return IsPedInAnyPoliceVehicle(this.handle);
    }

    public get IsJacking(): boolean {
        return IsPedJacking(this.handle);
    }

    public get IsBeingJacked(): boolean {
        return IsPedBeingJacked(this.handle);
    }

    public get IsGettingIntoAVehicle(): boolean {
        return IsPedGettingIntoAVehicle(this.handle);
    }

    public get IsTryingToEnterALockedVehicle(): boolean {
        return IsPedTryingToEnterALockedVehicle(this.handle);
    }

    public get IsInjured(): boolean {
        return IsPedInjured(this.handle);
    }

    public get IsFleeing(): boolean {
        return IsPedFleeing(this.handle);
    }

    public get IsInCombat(): boolean {
        return IsPedInCombat(this.handle, PlayerPedId());
    }

    public get IsInMeleeCombat(): boolean {
        return IsPedInMeleeCombat(this.handle);
    }

    public get IsInStealthMode(): boolean {
        return GetPedStealthMovement(this.handle);
    }

    public get IsAmbientSpeechPlaying(): boolean {
        return IsAmbientSpeechPlaying(this.handle);
    }

    public get IsScriptedSpeechPlaying(): boolean {
        return IsScriptedSpeechPlaying(this.handle);
    }

    public get IsAnySpeechPlaying(): boolean {
        return IsAnySpeechPlaying(this.handle);
    }

    public get IsAmbientSpeechEnabled(): boolean {
        return !IsAmbientSpeechDisabled(this.handle);
    }

    public set IsPainAudioEnabled(value: boolean) {
        DisablePedPainAudio(this.handle, !value);
    }

    public get IsPlantingBomb(): boolean {
        return IsPedPlantingBomb(this.handle);
    }

    public get IsShooting(): boolean {
        return IsPedShooting(this.handle);
    }

    public get IsReloading(): boolean {
        return IsPedReloading(this.handle);
    }

    public get IsDoingDriveBy(): boolean {
        return IsPedDoingDriveby(this.handle);
    }

    public get IsGoingIntoCover(): boolean {
        return IsPedGoingIntoCover(this.handle);
    }

    public get IsBeingStunned(): boolean {
        return IsPedBeingStunned(this.handle, 0);
    }

    public get IsBeingStealthKilled(): boolean {
        return IsPedBeingStealthKilled(this.handle);
    }

    public get IsPerformingStealthKill(): boolean {
        return IsPedPerformingStealthKill(this.handle);
    }

    public get IsAimingFromCover(): boolean {
        return IsPedAimingFromCover(this.handle);
    }

    public isInCover(expectUseWeapon = false): boolean {
        return IsPedInCover(this.handle, expectUseWeapon);
    }

    public get IsInCoverFacingLeft(): boolean {
        return IsPedInCoverFacingLeft(this.handle);
    }

    public set FiringPattern(value: number) {
        SetPedFiringPattern(this.handle, value);
    }

    public set DropsWeaponsOnDeath(value: boolean) {
        SetPedDropsWeaponsWhenDead(this.handle, value);
    }

    public set DrivingSpeed(value: number) {
        SetDriveTaskCruiseSpeed(this.handle, value);
    }

    public isInAnyVehicle(): boolean {
        return IsPedInAnyVehicle(this.handle, false);
    }

    public isInVehicle(vehicle: Vehicle): boolean {
        return IsPedInVehicle(this.handle, vehicle.Handle, false);
    }

    public isSittingInAnyVehicle(): boolean {
        return IsPedSittingInAnyVehicle(this.handle);
    }

    public isSittingInVehicle(vehicle: Vehicle): boolean {
        return IsPedSittingInVehicle(this.handle, vehicle.Handle);
    }

    public setIntoVehicle(vehicle: Vehicle, seat: VehicleSeat): void {
        SetPedIntoVehicle(this.handle, vehicle.Handle, seat);
    }

    public isHeadtracking(entity: Entity): boolean {
        return IsPedHeadtrackingEntity(this.handle, entity.Handle);
    }

    public isInCombatAgainst(target: Ped): boolean {
        return IsPedInCombat(this.handle, target.Handle);
    }

    public get Jacker(): Ped {
        return new Ped(GetPedsJacker(this.handle));
    }

    public get JackTarget(): Ped {
        return new Ped(GetJackTarget(this.handle));
    }

    public get MeleeTarget(): Ped {
        return new Ped(GetMeleeTargetForPed(this.handle));
    }

    public get Killer(): Entity {
        return Entity.fromHandle(GetPedSourceOfDeath(this.handle));
    }

    public kill(): void {
        this.Health = -1;
    }

    public resurrect(): void {
        const maxHealth: number = this.Health;
        const isCollisionEnabled: boolean = super.IsCollisionEnabled;

        ResurrectPed(this.Handle);
        this.MaxHealth = maxHealth;
        this.Health = maxHealth;
        super.IsCollisionEnabled = isCollisionEnabled;
        ClearPedTasksImmediately(this.Handle);
    }

    public resetVisibleDamage(): void {
        ResetPedVisibleDamage(this.handle);
    }
    public clearBloodDamage(): void {
        ClearPedBloodDamage(this.handle);
    }

    public get IsInGroup(): boolean {
        return IsPedInGroup(this.handle);
    }

    public set NeverLeavesGroup(value: boolean) {
        SetPedNeverLeavesGroup(this.handle, value);
    }

    public leaveGroup(): void {
        RemovePedFromGroup(this.handle);
    }

    public playAmbientSpeed(
        speechName: string,
        voiceName = '',
        modifier = SpeechModifier.Standard,
    ): void {
        if (modifier >= 0 && modifier < this.speechModifierNames.length) {
            if (voiceName === '') {
                PlayAmbientSpeech1(this.handle, speechName, this.speechModifierNames[modifier]);
            } else {
                PlayAmbientSpeechWithVoice(
                    this.handle,
                    speechName,
                    voiceName,
                    this.speechModifierNames[modifier],
                    false,
                );
            }
        } else {
            throw new RangeError('modifier');
        }
    }

    public applyDamage(damageAmount: number): void {
        ApplyDamageToPed(this.handle, damageAmount, true);
    }

    public hasBeenDamagedByWeapon(weapon: WeaponsHash): boolean {
        return HasPedBeenDamagedByWeapon(this.handle, weapon, 0);
    }

    public hasBeenDamagedByAnyWeapon(): boolean {
        return HasPedBeenDamagedByWeapon(this.handle, 0, 2);
    }

    public hasBeenDamagedByAnyMeleeWeapon(): boolean {
        return HasPedBeenDamagedByWeapon(this.handle, 0, 1);
    }

    public clearLastWeaponDamage(): void {
        ClearPedLastWeaponDamage(this.handle);
    }

    //@todo: Add weapon accessories methods

    /**
     * Assigns a weapon to the character with specified properties.
     *
     * @param {WeaponsHash} weapon - The type of weapon to give.
     * @param [ammoCount=999] - The amount of ammunition for the weapon.
     * @param [isHidden=false] - Whether the weapon should be hidden.
     * @param [equipNow=true] - Whether the weapon should be equipped immediately.
     *
     * @return {void}
     */
    public giveWeapon(
        weapon: WeaponsHash,
        ammoCount = 999,
        isHidden = false,
        equipNow = true,
    ): void {
        GiveWeaponToPed(this.Handle, weapon, ammoCount, isHidden, equipNow);
    }

    /**
     * Removes the specified weapon from the current entity.
     *
     * @param {WeaponsHash} weapon - The hash of the weapon to be removed.
     *
     * @return {void}
     */
    public removeWeapon(weapon: WeaponsHash): void {
        RemoveWeaponFromPed(this.Handle, weapon);
    }

    /**
     * Removes all weapons from the current entity.
     *
     * This method will strip the entity of all weapons it currently possesses.
     *
     * @return {void}
     */
    public removeAllWeapons(): void {
        RemoveAllPedWeapons(this.Handle, true);
    }

    /**
     * @experimental
     *
     * Retrieves the last recorded impact position of a weapon.
     * To Check after v0.9.0 update
     *
     * @return {Vector3} The position where the last weapon impact occurred.
     */
    public getLastWeaponImpactPosition(): Vector3 {
        const position: [boolean, number[]] = GetPedLastWeaponImpactCoord(this.handle);

        return new Vector3(Number(position[0]), position[1][0], position[1][1]); // Does this work?
    }

    public get CanRagdoll(): boolean {
        return CanPedRagdoll(this.handle);
    }

    public set CanRagdoll(value: boolean) {
        SetPedCanRagdoll(this.handle, value);
    }

    public ragdoll(duration = -1, ragdollType = RagdollType.Normal): void {
        this.CanRagdoll = true;
        SetPedToRagdoll(this.Handle, duration, duration, ragdollType, false, false, false);
    }

    public ragdollWithFall(
        duration = -1,
        ragdollType = RagdollType.Normal,
        position = this.Position,
    ): void {
        this.CanRagdoll = true;
        SetPedToRagdollWithFall(
            this.Handle,
            duration,
            duration,
            ragdollType,
            position.x,
            position.y,
            position.z,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
        );
    }

    public cancelRagdoll(): void {
        SetPedToRagdoll(this.handle, 1, 1, 1, false, false, false);
    }

    public giveHelmet(canBeRemoved: boolean, helmetType: HelmetType, textureIndex: number): void {
        GivePedHelmet(this.Handle, !canBeRemoved, helmetType, textureIndex);
    }

    public removeHelmet(instantly: boolean): void {
        RemovePedHelmet(this.Handle, instantly);
    }

    public openParachute(): void {
        ForcePedToOpenParachute(this.Handle);
    }

    public getConfigFlag(flagId: number): boolean {
        return GetPedConfigFlag(this.Handle, flagId, true);
    }

    public setConfigFlag(flagId: number, value: boolean): void {
        SetPedConfigFlag(this.handle, flagId, value);
    }

    public resetConfigFlag(flagId: number): void {
        SetPedResetFlag(this.handle, flagId, true);
    }

    public clone(networked: boolean): Ped {
        return new Ped(ClonePed(this.handle, networked, false, false));
    }
}
