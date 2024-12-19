/**
 * The `Controls` enumeration represents a comprehensive list of control mappings
 *
 * This enumeration includes mappings for general gameplay controls, vehicle-specific
 * controls, character selection, weapon wheel interactions, cinematic modes, and
 * various contextual actions such as aiming, attacking, or interacting with objects.
 *
 * @enum{number}
 */
export enum Controls {
    NextCamera,
    LookLR,
    LookUD,
    LookUpOnly,
    LookDownOnly,
    LookLeftOnly,
    LookRightOnly,
    CinematicSlowMo,
    ScriptedFlyUd,
    ScriptedFlyLr,
    ScriptedFlyZup,
    ScriptedFlyZDown,
    WeaponWheelUd,
    WeaponWheelLR,
    WeaponWheelNext,
    WeaponWheelPrev,
    SelectNextWeapon,
    SelectPrevWeapon,
    SkipCutscene,
    CharacterWheel,
    MultiplayerInfo,
    Sprint,
    Jump,
    Enter,
    Attack,
    Aim,
    LookBehind,
    Phone,
    SpecialAbility,
    SpecialAbilitySecondary,
    MoveLr,
    MoveUd,
    MoveUpOnly,
    MoveDownOnly,
    MoveLeftOnly,
    MoveRightOnly,
    Duck,
    SelectWeapon,
    PickUp,
    SniperZoom,
    SniperZoomInOnly,
    SniperZoomOutOnly,
    SniperZoomInSecondary,
    SniperZoomOutSecondary,
    Cover,
    Reload,
    Talk,
    Detonate,
    HudSpecial,
    Arrest,
    AccurateAim,
    Context,
    ContextSecondary,
    WeaponSpecial,
    WeaponSpecialTwo,
    Dive,
    DropWeapon,
    DropAmmo,
    ThrowGrenade,
    VehMoveLr,
    VehMoveUd,
    VehMoveUpOnly,
    VehMoveDownOnly,
    VehMoveLeftOnly,
    VehMoveRightOnly,
    VehSpecial,
    VehGunLr,
    VehGunUd,
    VehAim,
    VehAttack,
    VehAttack2,
    VehAccelerate,
    VehBrake,
    VehDuck,
    VehHeadlight,
    VehExit,
    VehHandBrake,
    VehHotWireLeft,
    VehHotWireRight,
    VehLookBehind,
    VehCinCam,
    VehNextRadio,
    VehPrevRadio,
    VehNextRadioTrack,
    VehPrevRadioTrack,
    VehRadioWheel,
    VehHorn,
    VehFlyThrottleUp,
    VehFlyThrottleDown,
    VehFlyYawLeft,
    VehFlyYawRight,
    VehPassengerAim,
    VehPassengerAttack,
    VehSpecialAbilityFranklin,
    VehStuntUd,
    VehCinematicUd,
    VehCinematicUpOnly,
    VehCinematicDownOnly,
    VehCinematicLr,
    VehSelectNextWeapon,
    VehSelectPrevWeapon,
    VehRoof,
    VehJump,
    VehGrapplingHook,
    VehShuffle,
    VehDropProjectile,
    VehMouseControlOverride,
    VehFlyRollLr,
    VehFlyRollLeftOnly,
    VehFlyRollRightOnly,
    VehFlyPitchUd,
    VehFlyPitchUpOnly,
    VehFlyPitchDownOnly,
    VehFlyUnderCarriage,
    VehFlyAttack,
    VehFlySelectNextWeapon,
    VehFlySelectPrevWeapon,
    VehFlySelectTargetLeft,
    VehFlySelectTargetRight,
    VehFlyVerticalFlightMode,
    VehFlyDuck,
    VehFlyAttackCamera,
    VehFlyMouseControlOverride,
    VehSubTurnLr,
    VehSubTurnLeftOnly,
    VehSubTurnRightOnly,
    VehSUbPitchUd,
    VehSubPitchUpOnly,
    VehSubPitchDownOnly,
    VehSubThrottleUp,
    VehSubThrottleDown,
    VehSubAscend,
    VehSubDescend,
    VehSubTurnHardLeft,
    VehSubTurnHardRight,
    VehSubMouseControlOverride,
    VehPushbikePedal,
    VehPushbikeSprint,
    VehPushbikeFrontBrake,
    VehPushBikeRearBrake,
    MeleeAttackLight,
    MeleeAttackHeavy,
    MeleeAttackAlternate,
    MeleeBlock,
    ParachuteDeploy,
    ParachuteDetach,
    ParachuteTurnLr,
    ParachuteTurnLeftOnly,
    ParachuteTurnRightOnly,
    ParachutePitchUd,
    ParachutePitchUpOnly,
    ParachutePitchDownOnly,
    ParachuteBrakeLeft,
    ParachuteBrakeRight,
    ParachuteSmoke,
    ParachutePrecisionLanding,
    Map,
    SelectWeaponUnarmed,
    SelectWeaponMelee,
    SelectWeaponHandgun,
    SelectWeaponShotgun,
    SelectWeaponSmg,
    SelectWeaponAutoRifle,
    SelectWeaponSniper,
    SelectWeaponHeavy,
    SelectWeaponSpecial,
    SelectCharacterMichael,
    SelectCharacterFranklin,
    SelectCharacterTrevor,
    SelectCharacterMultiplayer,
    SaveReplayClip,
    SpecialAbilityPc,
    CellphoneUp,
    CellphoneDown,
    CellphoneLeft,
    CellphoneRight,
    CellphoneSelect,
    CellphoneCancel,
    CellphoneOption,
    CellphoneExtraOption,
    CellphoneScrollForward,
    CellphoneScrollBackward,
    CellphoneCameraFocusLock,
    CellphoneCameraGrid,
    CellphoneCameraSelfie,
    CellphoneCameraDof,
    CellphoneCameraExpression,
    FrontendDown,
    FrontendUp,
    FrontendLeft,
    FrontendRight,
    FrontendRDown,
    FrontendRUp,
    FrontendRLeft,
    FrontendRRight,
    FrontendAxisX,
    FrontendAxisY,
    FrontendRightAxisX,
    FrontendRightAxisY,
    FrontendPause,
    FrontendPauseAlternate,
    FrontendAccept,
    FrontendCancel,
    FrontendX,
    FrontendY,
    FrontendLB,
    FrontendRB,
    FrontendLT,
    FrontendRT,
    FrontendLS,
    FrontendRS,
    FrontendLeaderboard,
    FrontendSocialClub,
    FrontendSocialClubSecondary,
    FrontendDelete,
    FrontendEndScreenAccept,
    FrontendEndScreenExpand,
    FrontendSelect,
    ScriptLeftAxisX,
    ScriptLeftAxisY,
    ScriptRightAxisX,
    ScriptRightAxisY,
    ScriptRUP,
    ScriptRDown,
    ScriptRLeft,
    ScriptRRight,
    ScriptLB,
    ScriptRB,
    ScriptLT,
    ScriptRT,
    ScriptLS,
    ScriptRS,
    ScriptPadUp,
    ScriptPadDown,
    ScriptPadLeft,
    ScriptPadRight,
    ScriptSelect,
    CursorAccept,
    CursorCancel,
    CursorX,
    CursorY,
    CursorScrollUp,
    CursorScrollDown,
    EnterCheatCode,
    InteractionMenu,
    MpTextChatAll,
    MpTextChatTeam,
    MpTextChatFriends,
    MpTextChatCrew,
    PushToTalk,
    CreatorLs,
    CreatorRs,
    CreatorLt,
    CreatorRt,
    CreatorMenuToggle,
    CreatorAccept,
    CreatorDelete,
    Attack2,
    RappelJump,
    RappelLongJump,
    RappelSmashWindow,
    PrevWeapon,
    NextWeapon,
    MeleeAttack1,
    MeleeAttack2,
    Whistle,
    MoveLeft,
    MoveRight,
    MoveUp,
    MoveDown,
    LookLeft,
    LookRight,
    LookUp,
    LookDown,
    SniperZoomIn,
    SniperZoomOut,
    SniperZoomInAlternate,
    SniperZoomOutAlternate,
    VehMoveLeft,
    VehMoveRight,
    VehMoveUp,
    VehMoveDown,
    VehGunLeft,
    VehGunRight,
    VehGunUp,
    VehGunDown,
    VehLookLeft,
    VehLookRight,
    ReplayStartStopRecording,
    ReplayStartStopRecordingSecondary,
    ScaledLookLR,
    ScaledLookUD,
    ScaledLookUpOnly,
    ScaledLookDownOnly,
    ScaledLookLeftOnly,
    ScaledLookRightOnly,
    ReplayMarkerDelete,
    ReplayClipDelete,
    ReplayPause,
    ReplayRewind,
    ReplayFFWD,
    ReplayNewMarker,
    ReplayRecord,
    ReplayScreenshot,
    ReplayHideHud,
    ReplayStartPoint,
    ReplayEndPoint,
    ReplayAdvance,
    ReplayBack,
    ReplayTools,
    ReplayRestart,
    ReplayShowHotKey,
    ReplayCircleMarkerLeft,
    ReplayCircleMarkerRight,
    ReplayFovIncrease,
    ReplayFovDecrease,
    ReplayCameraUp,
    ReplayCameraDown,
    ReplaySave,
    ReplayToggleTime,
    ReplayToggleTips,
    ReplayPreview,
    ReplayToggleTimeline,
    ReplayTimelinePickupClip,
    ReplayTimelineDuplicateClip,
    ReplayTimelinePlaceClip,
    ReplayCtrl,
    ReplayTimelineSave,
    ReplayPreviewAudio,
    VehDriveLook,
    VehDriveLook2,
    VehFlyAttack2,
    RadioWheelUd,
    RadioWheelLr,
    VehSlowMoUd,
    VehSlowMoUpOnly,
    VehSlowMoDownOnly,
    VehHydraulicsControlToggle,
    VehHydraulicsControlLeft,
    VehHydraulicsControlRight,
    VehHydraulicsControlUp,
    VehHydraulicsControlDown,
    VehHydraulicsControlUd,
    VehHydraulicsControlLr,
    SwitchVisor,
    VehMeleeHold,
    VehMeleeLeft,
    VehMeleeRight,
    MapPoi,
    ReplaySnapMaticPhoto,
    VehCarJump,
    VehRocketBoost,
    VehFlyBoost,
    VehParachute,
    VehBikeWings,
    VehFLyBombBay,
    VehFlyBombCounter,
    VehTransform,
    QuadLocoReverse,
    RespawnFaster,
    HudMarkerSelect,
}