/**
 * Enum representing a list of weapon hashes.
 * Contains categories such as melees, handguns, submachine guns, shotguns,
 * assault rifles, light machine guns, sniper rifles, heavy weapons, throwables,
 * and miscellaneous items.
 *
 * @enum{number}
 */
export enum WeaponsHash {
    Unknown = -1,

    /* Melees */
    Dagger = -1834847097,
    Bat = -1786099057,
    Bottle = -102323637,
    Crowbar = -2067956739,
    Unarmed = -1569615261,
    Flashlight = -1951375401,
    GolfClub = 1141786504,
    Hammer = 1317494643,
    Hatchet = -102973651,
    Knuckle = -656458692,
    Knife = -1716189206,
    Machete = -581044007,
    Switchblade = -538741184,
    Nightstick = 1737195953,
    PipeWrench = 419712736,
    BattleAxe = -853065399,
    PoolCue = -1810795771,
    StoneHatchet = 940833800,
    CandyCane = 1703483498,
    StunRod = -624951259,

    /* Handguns */
    Pistol = 453432689,
    PistolMk2 = -1075685676,
    CombatPistol = 1593441988,
    ApPistol = 584646201,
    StunGun = 911657153,
    Pistol50 = -1716589765,
    SnsPistol = -1076751822,
    SnsPistolMk2 = -2009644972,
    HeavyPistol = -771403250,
    VintagePistol = 137902532,
    FlareGun = 1198879012,
    MarksmanPistol = -598887786,
    Revolver = -1045183535,
    RevolverMk2 = -879347409,
    DoubleActionRevolver = -1746263880,
    RayPistol = -1355376991,
    CeramicPistol = 727643628,
    NavyRevolver = -1853920116,
    GadgetPistol = 1470379660,
    StunGunMp = 1171102963,
    PistolXm3 = 465894841,

    /* Submachines Guns */
    MicroSmg = 324215364,
    Smg = 736523883,
    SmgMk2 = 2024373456,
    AssaultSmg = -270015777,
    CombatPdw = 171789620,
    MachinePistol = -619010992,
    MiniSmg = -1121678507,
    RayCarbine = 1198256469,
    TecPistol = 350597077,

    /* Shotguns */
    PumpShotgun = 487013001,
    PumpShotgunMk2 = 1432025498,
    SawnOffShotgun = 2017895192,
    AssaultShotgun = -494615257,
    BullpupShotgun = -1654528753,
    Musket = -1466123874,
    HeavyShotgun = 984333226,
    DoubleBarrelShotgun = -275439685,
    SweeperShotgun = 317205821,
    CombatShotgun = 94989220,

    /* Assault Rifles */
    AssaultRifle = -1074790547,
    AssaultRifleMk2 = 961495388,
    CarbineRifle = -2084633992,
    CarbineRifleMk2 = -86904375,
    AdvancedRifle = -1357824103,
    SpecialCarbine = -1063057011,
    SpecialCarbineMk2 = -1768145561,
    BullpupRifle = 2132975508,
    BullpupRifleMk2 = -2066285827,
    CompactRifle = 1649403952,
    MilitaryRifle = -1658906650,
    HeavyRifle = -947031628,
    TacticalRifle = -774507221,
    BattleRifle = 1924557585,

    /* Light Machine Guns */
    Mg = -1660422300,
    CombatMg = 2144741730,
    CombatMgMk2 = -608341376,
    Gusenberg = 1627465347,

    /* Sniper Rifles */
    SniperRifle = 100416529,
    HeavySniper = 205991906,
    HeavySniperMk2 = 177293209,
    MarksmanRifle = -952879014,
    MarksmanRifleMk2 = 1785463520,
    PrecisionRifle = 1853742572,

    /* Heavy Weapons */
    Rpg = -1312131151,
    GrenadeLauncher = -1568386805,
    GrenadeLauncherSmoke = 1305664598,
    MiniGun = 1119849093,
    Firework = 2138347493,
    RailGun = 1834241177,
    HomingLauncher = 1672152130,
    CompactLauncher = 125959754,
    RayMinigun = -1238556825,
    EmpLauncher = -618237638,
    RailGunXm3 = -22923932,
    SnowLauncher = 62870901,

    /* Throwables */
    Grenade = -1813897027,
    GasBz = -1600701090,
    Molotov = 615608432,
    StickyBomb = 741814745,
    ProximityMine = -1420407917,
    SnowBall = 126349499,
    PipeBomb = -1169823560,
    Ball = 600439132,
    SmokeGrenade = -37975472,
    Flare = 1233104067,
    AcidPackage = -135142818,

    /* Miscellaneous */
    PetrolCan = 883325847,
    Parachute = -72657034,
    FireExtinguisher = 101631238,
    HazardCan = -1168940174,
    FertilizerCan = 406929569,
    NightVision = -1491061156,

    /* Unknown */
    HackingDevice = 485882440,
    Handcuffs = -800287667,
    GarbageBag = -499989876,
    Tranquilizer = 849905853,
    MetalDetector = -610080759,
}
