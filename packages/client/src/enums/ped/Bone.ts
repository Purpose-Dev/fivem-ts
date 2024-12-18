/**
 * An enumeration representing various skeletal and facial bones in a character model.
 *
 * SKEL_ROOT - The root of the skeleton.
 * SKEL_Pelvis - The pelvis bone.
 * SKEL_L_Thigh - The left thigh bone.
 * SKEL_L_Calf - The left calf bone.
 * SKEL_L_Foot - The left foot bone.
 * SKEL_L_Toe0 - The left big toe bone.
 * IK_L_Foot - The inverse kinematics for the left foot.
 * PH_L_Foot - The physical representation of the left foot.
 * MH_L_Knee - The motion handling for the left knee.
 * SKEL_R_Thigh - The right thigh bone.
 * SKEL_R_Calf - The right calf bone.
 * SKEL_R_Foot - The right foot bone.
 * SKEL_R_Toe0 - The right big toe bone.
 * IK_R_Foot - The inverse kinematics for the right foot.
 * PH_R_Foot - The physical representation of the right foot.
 * MH_R_Knee - The motion handling for the right knee.
 * RB_L_ThighRoll - The roll of the left thigh.
 * RB_R_ThighRoll - The roll of the right thigh.
 * SKEL_Spine_Root - The base of the spine.
 * SKEL_Spine0 - The first spine bone.
 * SKEL_Spine1 - The second spine bone.
 * SKEL_Spine2 - The third spine bone.
 * SKEL_Spine3 - The fourth spine bone.
 * SKEL_L_Clavicle - The left clavicle bone.
 * SKEL_L_UpperArm - The left upper arm bone.
 * SKEL_L_Forearm - The left forearm bone.
 * SKEL_L_Hand - The left hand bone.
 * SKEL_L_Finger00 - The left thumb metacarpal bone.
 * SKEL_L_Finger01 - The left thumb proximal phalanx bone.
 * SKEL_L_Finger02 - The left thumb distal phalanx bone.
 * SKEL_L_Finger10 - The left index metacarpal bone.
 * SKEL_L_Finger11 - The left index proximal phalanx bone.
 * SKEL_L_Finger12 - The left index middle phalanx bone.
 * SKEL_L_Finger20 - The left middle metacarpal bone.
 * SKEL_L_Finger21 - The left middle proximal phalanx bone.
 * SKEL_L_Finger22 - The left middle middle phalanx bone.
 * SKEL_L_Finger30 - The left ring metacarpal bone.
 * SKEL_L_Finger31 - The left ring proximal phalanx bone.
 * SKEL_L_Finger32 - The left ring middle phalanx bone.
 * SKEL_L_Finger40 - The left pinky metacarpal bone.
 * SKEL_L_Finger41 - The left pinky proximal phalanx bone.
 * SKEL_L_Finger42 - The left pinky middle phalanx bone.
 * PH_L_Hand - The physical representation of the left hand.
 * IK_L_Hand - The inverse kinematics for the left hand.
 * RB_L_ForeArmRoll - The roll of the left forearm.
 * RB_L_ArmRoll - The roll of the left arm.
 * MH_L_Elbow - The motion handling for the left elbow.
 * SKEL_R_Clavicle - The right clavicle bone.
 * SKEL_R_UpperArm - The right upper arm bone.
 * SKEL_R_Forearm - The right forearm bone.
 * SKEL_R_Hand - The right hand bone.
 * SKEL_R_Finger00 - The right thumb metacarpal bone.
 * SKEL_R_Finger01 - The right thumb proximal phalanx bone.
 * SKEL_R_Finger02 - The right thumb distal phalanx bone.
 * SKEL_R_Finger10 - The right index metacarpal bone.
 * SKEL_R_Finger11 - The right index proximal phalanx bone.
 * SKEL_R_Finger12 - The right index middle phalanx bone.
 * SKEL_R_Finger20 - The right middle metacarpal bone.
 * SKEL_R_Finger21 - The right middle proximal phalanx bone.
 * SKEL_R_Finger22 - The right middle middle phalanx bone.
 * SKEL_R_Finger30 - The right ring metacarpal bone.
 * SKEL_R_Finger31 - The right ring proximal phalanx bone.
 * SKEL_R_Finger32 - The right ring middle phalanx bone.
 * SKEL_R_Finger40 - The right pinky metacarpal bone.
 * SKEL_R_Finger41 - The right pinky proximal phalanx bone.
 * SKEL_R_Finger42 - The right pinky middle phalanx bone.
 * PH_R_Hand - The physical representation of the right hand.
 * IK_R_Hand - The inverse kinematics for the right hand.
 * RB_R_ForeArmRoll - The roll of the right forearm.
 * RB_R_ArmRoll - The roll of the right arm.
 * MH_R_Elbow - The motion handling for the right elbow.
 * SKEL_Neck_1 - The first neck bone.
 * SKEL_Head - The head bone.
 * IK_Head - The inverse kinematics for the head.
 * FACIAL_facialRoot - The root of the facial bones.
 * FB_L_Brow_Out_000 - The left outer eyebrow bone.
 * FB_L_Lid_Upper_000 - The left upper eyelid bone.
 * FB_L_Eye_000 - The left eye bone.
 * FB_L_CheekBone_000 - The left cheekbone.
 * FB_L_Lip_Corner_000 - The left lip corner bone.
 * FB_R_Lid_Upper_000 - The right upper eyelid bone.
 * FB_R_Eye_000 - The right eye bone.
 * FB_R_CheekBone_000 - The right cheekbone.
 * FB_R_Brow_Out_000 - The right outer eyebrow bone.
 * FB_R_Lip_Corner_000 - The right lip corner bone.
 * FB_Brow_Centre_000 - The center brow bone.
 * FB_UpperLipRoot_000 - The root of the upper lip bones.
 * FB_UpperLip_000 - The upper lip bone.
 * FB_L_Lip_Top_000 - The left upper lip top bone.
 * FB_R_Lip_Top_000 - The right upper lip top bone.
 * FB_Jaw_000 - The jaw bone.
 * FB_LowerLipRoot_000 - The root of the lower lip bones.
 * FB_LowerLip_000 - The lower lip bone.
 * FB_L_Lip_Bot_000 - The left lower lip bottom bone.
 * FB_R_Lip_Bot_000 - The right lower lip bottom bone.
 * FB_Tongue_000 - The tongue bone.
 * RB_Neck_1 - The roll of the first neck bone.
 * IK_Root - The inverse kinematics root bone.
 *
 * @enum{number}
 */
export enum Bone {
    Unknown = -1,
    SKEL_ROOT,
    SKEL_Pelvis = 11816,
    SKEL_L_Thigh = 58271,
    SKEL_L_Calf = 63931,
    SKEL_L_Foot = 14201,
    SKEL_L_Toe0 = 2108,
    IK_L_Foot = 65245,
    PH_L_Foot = 57717,
    MH_L_Knee = 46078,
    SKEL_R_Thigh = 51826,
    SKEL_R_Calf = 36864,
    SKEL_R_Foot = 52301,
    SKEL_R_Toe0 = 20781,
    IK_R_Foot = 35502,
    PH_R_Foot = 24806,
    MH_R_Knee = 16335,
    RB_L_ThighRoll = 23639,
    RB_R_ThighRoll = 6442,
    SKEL_Spine_Root = 57597,
    SKEL_Spine0 = 23553,
    SKEL_Spine1 = 24816,
    SKEL_Spine2,
    SKEL_Spine3,
    SKEL_L_Clavicle = 64729,
    SKEL_L_UpperArm = 45509,
    SKEL_L_Forearm = 61163,
    SKEL_L_Hand = 18905,
    SKEL_L_Finger00 = 26610,
    SKEL_L_Finger01 = 4089,
    SKEL_L_Finger02,
    SKEL_L_Finger10 = 26611,
    SKEL_L_Finger11 = 4169,
    SKEL_L_Finger12,
    SKEL_L_Finger20 = 26612,
    SKEL_L_Finger21 = 4185,
    SKEL_L_Finger22,
    SKEL_L_Finger30 = 26613,
    SKEL_L_Finger31 = 4137,
    SKEL_L_Finger32,
    SKEL_L_Finger40 = 26614,
    SKEL_L_Finger41 = 4153,
    SKEL_L_Finger42,
    PH_L_Hand = 60309,
    IK_L_Hand = 36029,
    RB_L_ForeArmRoll = 61007,
    RB_L_ArmRoll = 5232,
    MH_L_Elbow = 22711,
    SKEL_R_Clavicle = 10706,
    SKEL_R_UpperArm = 40269,
    SKEL_R_Forearm = 28252,
    SKEL_R_Hand = 57005,
    SKEL_R_Finger00 = 58866,
    SKEL_R_Finger01 = 64016,
    SKEL_R_Finger02,
    SKEL_R_Finger10 = 58867,
    SKEL_R_Finger11 = 64096,
    SKEL_R_Finger12,
    SKEL_R_Finger20 = 58868,
    SKEL_R_Finger21 = 64112,
    SKEL_R_Finger22,
    SKEL_R_Finger30 = 58869,
    SKEL_R_Finger31 = 64064,
    SKEL_R_Finger32,
    SKEL_R_Finger40 = 58870,
    SKEL_R_Finger41 = 64080,
    SKEL_R_Finger42,
    PH_R_Hand = 28422,
    IK_R_Hand = 6286,
    RB_R_ForeArmRoll = 43810,
    RB_R_ArmRoll = 37119,
    MH_R_Elbow = 2992,
    SKEL_Neck_1 = 39317,
    SKEL_Head = 31086,
    IK_Head = 12844,
    FACIAL_facialRoot = 65068,
    FB_L_Brow_Out_000 = 58331,
    FB_L_Lid_Upper_000 = 45750,
    FB_L_Eye_000 = 25260,
    FB_L_CheekBone_000 = 21550,
    FB_L_Lip_Corner_000 = 29868,
    FB_R_Lid_Upper_000 = 43536,
    FB_R_Eye_000 = 27474,
    FB_R_CheekBone_000 = 19336,
    FB_R_Brow_Out_000 = 1356,
    FB_R_Lip_Corner_000 = 11174,
    FB_Brow_Centre_000 = 37193,
    FB_UpperLipRoot_000 = 20178,
    FB_UpperLip_000 = 61839,
    FB_L_Lip_Top_000 = 20279,
    FB_R_Lip_Top_000 = 17719,
    FB_Jaw_000 = 46240,
    FB_LowerLipRoot_000 = 17188,
    FB_LowerLip_000 = 20623,
    FB_L_Lip_Bot_000 = 47419,
    FB_R_Lip_Bot_000 = 49979,
    FB_Tongue_000 = 47495,
    RB_Neck_1 = 35731,
    IK_Root = 56604,
}
