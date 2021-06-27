// Name       : Yoobin-Kim
// Assignment : final_project-make_a_game
// Course     : CS099
// Spring 2021

let defaultImage = [];


let backgroundImage;
let rightMoveImage = [];
let leftMoveImage = [];
let leftAttackImage = [];
let rightAttackImage = [];
let rigthGuardImage = [];
let leftGuardImage = [];
let RRollImage = [];


let doorImage = [];

let verPlatForm;
let platFormImage;
let platFormImage_2;
// let hpImage;

let uiImage =[];
let keyIs = false;



let skeletonDefault = [];
let skelRAttack = [];
let skelLAttack = [];
let skelMove = [];

let mageMove = [];
let mageRAttack = [];
let mageLAttack = [];
let magicImage = [];

let bigSkelRA = [];
let bigSkelLA = [];
let bigSkelL = [];
let bigSkelR = [];
let bigSkelEffect = [];

let archerMove = [];
let archerLA = [];
let archerRA = [];
let archerArrow = [];

let bossMove = [];
let bossLA = [];
let bossRA = [];
let bossEffect = [];


let effectImage;


let player;

let enemy = [];


let platForm = [];
let mainImage = [];

let pikeImage = [];



let door;
let itemImage = [];
let key;



let stateCheck;
let screenCheck = 0;
let spawnCheck = 0;

let checkPause = false;
let cameraState = 2400;

let backgroundMusic = [];
let sfx = [];
let skelSfx = [];
let bigSfx = [];
let archerSfx = [];
let mageSfx = [];
let bossSfx = [];

let doorMusic;



function preload()
{

    backgroundMusic.push(loadSound("./Assets/Music/The golden Forest.mp3"));
    backgroundMusic.push(loadSound("./Assets/Music/LEGACY - Encounter of Misdeeds MP3.mp3"));
    backgroundMusic.push(loadSound("./Assets/Music/LEGACY - The World At Your Door MP3.mp3"));
    doorMusic = loadSound("./Assets/Music/474178__dwoboyle__door-stone-large-001.wav");

    sfx.push(loadSound("./Assets/Music/471097__spycrah__knife-sword-swing.wav"));
    sfx.push(loadSound("./Assets/Music/161378__vinrax__bone-crack4.wav"));
    sfx.push(loadSound("./Assets/Music/274833_rempen_forest-dry-leaves-walk.wav"));
    sfx.push(loadSound("./Assets/Music/422760__kierankeegan__jump-forest-2.wav"));
    skelSfx.push(loadSound("./Assets/Music/319590__hybrid-v__shield-bash-impact.wav"));
    skelSfx.push(loadSound("./Assets/Music/263008__dermotte__metallic-hit.wav"));

    bigSfx.push(loadSound("./Assets//Music/191694__deleted-user-3544904__explosion-4 .wav"));
    bigSfx.push(loadSound("./Assets/Music/263008__dermotte__metallic-hit.wav"));
    
    archerSfx.push(loadSound("./Assets/Music/263008__dermotte__metallic-hit.wav"));
    archerSfx.push(loadSound("./Assets/Music/319590__hybrid-v__shield-bash-impact.wav"));
    archerSfx.push(loadSound("./Assets/Music/511489__lydmakeren__fx-bow.wav"));
    archerSfx.push(loadSound("./Assets/Music/511489__lydmakeren__fxarrow2.wav"));

    mageSfx.push(loadSound("./Assets/Music/263008__dermotte__metallic-hit.wav"));
    mageSfx.push(loadSound("./Assets/Music/396499__alonsotm__icespell03.wav"));
    
    bossSfx.push(loadSound("./Assets/Music/263008__dermotte__metallic-hit.wav"));
    bossSfx.push(loadSound("./Assets/Music/319590__hybrid-v__shield-bash-impact.wav"));
    bossSfx.push(loadSound("./Assets/Music/396499__alonsotm__icespell03.wav"));
    bossSfx.push(loadSound("./Assets/Music/420612__glaneur-de-sons__sword-swing-b-strong-02.wav"));

    platFormImage = loadImage("./Assets/platForm.png");
    platFormImage_2 = loadImage("./Assets/platForm_2.png");

    backgroundImage = loadImage("./Assets/bg_forest.png");
    defaultImage.push(loadImage("./Assets/Default.PNG"));
    defaultImage.push(loadImage("./Assets/Default_2.PNG"));
    rightMoveImage.push(loadImage("./Assets/Right/right_1.png"));
    rightMoveImage.push(loadImage("./Assets/Right/right_2.png"));
    rightMoveImage.push(loadImage("./Assets/Right/right_3.png"));
    rightMoveImage.push(loadImage("./Assets/Right/right_4.png"));
    rightMoveImage.push(loadImage("./Assets/Right/right_5.png"));
    leftMoveImage.push(loadImage("./Assets/Left/left_1.png"));
    leftMoveImage.push(loadImage("./Assets/Left/left_2.png"));
    leftMoveImage.push(loadImage("./Assets/Left/left_3.png"));
    leftMoveImage.push(loadImage("./Assets/Left/left_4.png"));
    leftMoveImage.push(loadImage("./Assets/Left/left_5.png"));

    leftAttackImage.push(loadImage("./Assets/LeftAttack/leftAttack1.png"));
    leftAttackImage.push(loadImage("./Assets/LeftAttack/leftAttack2.png"));
    leftAttackImage.push(loadImage("./Assets/LeftAttack/leftAttack3.png"));
    leftAttackImage.push(loadImage("./Assets/LeftAttack/leftAttack4.png"));
    leftAttackImage.push(loadImage("./Assets/LeftAttack/leftAttack5.png"));
    leftAttackImage.push(loadImage("./Assets/LeftAttack/leftAttack6.png"));
    leftAttackImage.push(loadImage("./Assets/LeftAttack/leftAttack7.png"));
    leftAttackImage.push(loadImage("./Assets/LeftAttack/Left_2_1.png"));
    leftAttackImage.push(loadImage("./Assets/LeftAttack/Left_2_2.png"));
    leftAttackImage.push(loadImage("./Assets/LeftAttack/Left_2_3.png"));
    leftAttackImage.push(loadImage("./Assets/LeftAttack/leftSkill_1.PNG"));
    leftAttackImage.push(loadImage("./Assets/LeftAttack/leftSkill_2.PNG"));
    


    rightAttackImage.push(loadImage("./Assets/RightAttack/right_1.png"));
    rightAttackImage.push(loadImage("./Assets/RightAttack/right_2.png"));
    rightAttackImage.push(loadImage("./Assets/RightAttack/right_3.png"));
    rightAttackImage.push(loadImage("./Assets/RightAttack/right_4.png"));
    rightAttackImage.push(loadImage("./Assets/RightAttack/right_5.png"));
    rightAttackImage.push(loadImage("./Assets/RightAttack/right_6.png"));
    rightAttackImage.push(loadImage("./Assets/RightAttack/right_7.png"));
    rightAttackImage.push(loadImage("./Assets/RightAttack/Right_2_1.png"));
    rightAttackImage.push(loadImage("./Assets/RightAttack/Right_2_2.png"));
    rightAttackImage.push(loadImage("./Assets/RightAttack/Right_2_3.png"));
    rightAttackImage.push(loadImage("./Assets/RightAttack/rightSkill_1.PNG"));
    rightAttackImage.push(loadImage("./Assets/RightAttack/rightSkill_2.PNG"));
    
    
    rigthGuardImage.push(loadImage("./Assets/guardR/guard_R_1.png"));
    rigthGuardImage.push(loadImage("./Assets/guardR/guard_R_2.png"));
    rigthGuardImage.push(loadImage("./Assets/guardR/guard_R_3.png"));
    rigthGuardImage.push(loadImage("./Assets/guardR/guard_R_4.png"));
    rigthGuardImage.push(loadImage("./Assets/guardR/guard_R_5.png"));
    rigthGuardImage.push(loadImage("./Assets/guardR/guard_R_6.png"));
    leftGuardImage.push(loadImage("./Assets/guardL/guard_L_1.png"));
    leftGuardImage.push(loadImage("./Assets/guardL/guard_L_2.png"));
    leftGuardImage.push(loadImage("./Assets/guardL/guard_L_3.png"));
    leftGuardImage.push(loadImage("./Assets/guardL/guard_L_4.png"));
    leftGuardImage.push(loadImage("./Assets/guardL/guard_L_5.png"));
    leftGuardImage.push(loadImage("./Assets/guardL/guard_L_6.png"));

    
    RRollImage.push(loadImage("./Assets/RRoll/RollR_2.png"));
    RRollImage.push(loadImage("./Assets/RRoll/RollR_3.png"));
    RRollImage.push(loadImage("./Assets/RRoll/RollR_4.png"));

    RRollImage.push(loadImage("./Assets/LRoll/RollL_1.png"));
    RRollImage.push(loadImage("./Assets/LRoll/RollL_2.png"));
    RRollImage.push(loadImage("./Assets/LRoll/RollL_3.png"));

    mageMove.push(loadImage("./Assets/Mage/Move/moveR.png"));
    mageMove.push(loadImage("./Assets/Mage/Move/moveL.png"));
    mageMove.push(loadImage("./Assets/Mage/Move/RAttacked_1.png"));
    mageMove.push(loadImage("./Assets/Mage/Move/LAttacked_1.png"));
    mageMove.push(loadImage("./Assets/Mage/Move/MageDead_1.png"));
    mageMove.push(loadImage("./Assets/Mage/Move/MageDead_2.png"));
    mageMove.push(loadImage("./Assets/Mage/Move/MageDead_3.png"));
    mageMove.push(loadImage("./Assets/Mage/Move/MageDead_4.png"));

    mageRAttack.push(loadImage("./Assets/Mage/RAttack/RAttack_1.png"));
    mageRAttack.push(loadImage("./Assets/Mage/RAttack/RAttack_2.png"));
    mageRAttack.push(loadImage("./Assets/Mage/RAttack/RAttack_3.png"));
    mageRAttack.push(loadImage("./Assets/Mage/RAttack/RAttack_4.png"));
    mageRAttack.push(loadImage("./Assets/Mage/RAttack/RAttack_5.png"));
    mageRAttack.push(loadImage("./Assets/Mage/RAttack/RAttack_6.png"));
    mageRAttack.push(loadImage("./Assets/Mage/RAttack/RAttack_7.png"));

    mageLAttack.push(loadImage("./Assets/Mage/LAttack/LAttack_1.png"));
    mageLAttack.push(loadImage("./Assets/Mage/LAttack/LAttack_2.png"));
    mageLAttack.push(loadImage("./Assets/Mage/LAttack/LAttack_3.png"));
    mageLAttack.push(loadImage("./Assets/Mage/LAttack/LAttack_4.png"));
    mageLAttack.push(loadImage("./Assets/Mage/LAttack/LAttack_5.png"));
    mageLAttack.push(loadImage("./Assets/Mage/LAttack/LAttack_6.png"));
    mageLAttack.push(loadImage("./Assets/Mage/LAttack/LAttack_7.png"));


    magicImage.push(loadImage("./Assets/Mage/Magic/magic_1.png"));
    magicImage.push(loadImage("./Assets/Mage/Magic/magic_2.png"));
    magicImage.push(loadImage("./Assets/Mage/Magic/magic_3.png"));
    magicImage.push(loadImage("./Assets/Mage/Magic/magic_4.png"));
    magicImage.push(loadImage("./Assets/Mage/Magic/magic_5.png"));
    magicImage.push(loadImage("./Assets/Mage/Magic/magic_6.png"));
    magicImage.push(loadImage("./Assets/Mage/Magic/magic_7.png"));
    magicImage.push(loadImage("./Assets/Mage/Magic/magic_8.png"));
    magicImage.push(loadImage("./Assets/Mage/Magic/magic_9.png"));
    magicImage.push(loadImage("./Assets/Mage/Magic/magic_10.png"));
    magicImage.push(loadImage("./Assets/Mage/Magic/magic_11.png"));
    magicImage.push(loadImage("./Assets/Mage/Magic/magic_12.png"));

    //BigSkelton
    
    bigSkelEffect.push(loadImage("./Assets/BigSkel/LEffect/LEffect_1.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/LEffect/LEffect_2.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/LEffect/LEffect_3.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/LEffect/LEffect_4.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/LEffect/LEffect_5.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/LEffect/LEffect_6.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/LEffect/LEffect_7.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/LEffect/LEffect_8.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/LEffect/LEffect_9.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/LEffect/LEffect_10.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/LEffect/LEffect_11.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/LEffect/LEffect_12.png"));
    

    
    bigSkelEffect.push(loadImage("./Assets/BigSkel/REffect/REffect_2.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/REffect/REffect_3.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/REffect/REffect_4.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/REffect/REffect_5.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/REffect/REffect_6.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/REffect/REffect_7.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/REffect/REffect_8.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/REffect/REffect_9.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/REffect/REffect_10.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/REffect/REffect_11.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/REffect/REffect_12.png"));
    bigSkelEffect.push(loadImage("./Assets/BigSkel/REffect/REffect_13.png"));

    bigSkelL.push(loadImage("./Assets/BigSkel/Left/Left_1.png"));
    bigSkelL.push(loadImage("./Assets/BigSkel/Left/Left_2.png"));
    bigSkelL.push(loadImage("./Assets/BigSkel/Left/Left_3.png"));
    bigSkelL.push(loadImage("./Assets/BigSkel/Left/Left_4.png"));
    bigSkelL.push(loadImage("./Assets/BigSkel/Left/Left_5.png"));
    bigSkelL.push(loadImage("./Assets/BigSkel/Left/Left_6.png"));

    bigSkelL.push(loadImage("./Assets/BigSkel/Right/Right_1.png"));
    bigSkelL.push(loadImage("./Assets/BigSkel/Right/Right_2.png"));
    bigSkelL.push(loadImage("./Assets/BigSkel/Right/Right_3.png"));
    bigSkelL.push(loadImage("./Assets/BigSkel/Right/Right_4.png"));
    bigSkelL.push(loadImage("./Assets/BigSkel/Right/Right_5.png"));
    bigSkelL.push(loadImage("./Assets/BigSkel/Right/Right_6.png"));

    bigSkelL.push(loadImage("./Assets/BigSkel/bigSkelDead_1.png"));
    bigSkelL.push(loadImage("./Assets/BigSkel/bigSkelDead_2.png"));
    bigSkelL.push(loadImage("./Assets/BigSkel/bigSkelDead_3.png"));

    
    bigSkelLA.push(loadImage("./Assets/BigSkel/LeftA/LeftA_3.png"));
    bigSkelLA.push(loadImage("./Assets/BigSkel/LeftA/LeftA_4.png"));
    bigSkelLA.push(loadImage("./Assets/BigSkel/LeftA/LeftA_5.png"));

    
    bigSkelRA.push(loadImage("./Assets/BigSkel/RightA/RightA_3.png"));
    bigSkelRA.push(loadImage("./Assets/BigSkel/RightA/RightA_4.png"));
    bigSkelRA.push(loadImage("./Assets/BigSkel/RightA/RightA_5.png"));


    //Archer
    archerArrow.push(loadImage("./Assets/Archer/Arrow/LArrow.png"));
    archerArrow.push(loadImage("./Assets/Archer/Arrow/RArrow.png"));

    archerMove.push(loadImage("./Assets/Archer/Move/ArcherL_1.png"));
    archerMove.push(loadImage("./Assets/Archer/Move/ArcherL_2.png"));
    archerMove.push(loadImage("./Assets/Archer/Move/ArcherL_3.png"));
    archerMove.push(loadImage("./Assets/Archer/Move/ArcherL_4.png"));
    archerMove.push(loadImage("./Assets/Archer/Move/ArcherL_5.png")); //4

    archerMove.push(loadImage("./Assets/Archer/Move/ArcherR_1.png"));
    archerMove.push(loadImage("./Assets/Archer/Move/ArcherR_2.png"));
    archerMove.push(loadImage("./Assets/Archer/Move/ArcherR_3.png"));
    archerMove.push(loadImage("./Assets/Archer/Move/ArcherR_4.png"));
    archerMove.push(loadImage("./Assets/Archer/Move/ArcherR_5.png")); //9

    archerMove.push(loadImage("./Assets/Archer/Move/LAttacked.png"));
    archerMove.push(loadImage("./Assets/Archer/Move/RAttacked.png"));

    archerMove.push(loadImage("./Assets/Archer/Move/archerDead_1.png"));
    archerMove.push(loadImage("./Assets/Archer/Move/archerDead_2.png"));
    archerMove.push(loadImage("./Assets/Archer/Move/archerDead_3.png"));

    archerLA.push(loadImage("./Assets/Archer/LAttack/LAttack_2.png"));
    archerLA.push(loadImage("./Assets/Archer/LAttack/LAttack_3.png"));
    archerLA.push(loadImage("./Assets/Archer/LAttack/LAttack_4.png"));
    archerLA.push(loadImage("./Assets/Archer/LAttack/LAttack_5.png"));
    archerLA.push(loadImage("./Assets/Archer/LAttack/LAttack_6.png"));

    archerRA.push(loadImage("./Assets/Archer/RAttack/RAttack_2.png"));
    archerRA.push(loadImage("./Assets/Archer/RAttack/RAttack_3.png"));
    archerRA.push(loadImage("./Assets/Archer/RAttack/RAttack_4.png"));
    archerRA.push(loadImage("./Assets/Archer/RAttack/RAttack_5.png"));
    archerRA.push(loadImage("./Assets/Archer/RAttack/RAttack_6.png"));

    mainImage.push(loadImage("./Assets/MainMenu.png"));
    mainImage.push(loadImage("./Assets/Start.png"));
    mainImage.push(loadImage("./Assets/End.png"));
    mainImage.push(loadImage("./Assets/Tutorial.png"));
    mainImage.push(loadImage("./Assets/Tutor_1.png"));
    mainImage.push(loadImage("./Assets/Tutor_2.png"));
    mainImage.push(loadImage("./Assets/story.png"));

    //Boss
    bossEffect.push(loadImage("./Assets/Boss/defaiutImage/magic_1.png"));
    bossEffect.push(loadImage("./Assets/Boss/defaiutImage/magic_2.png"));
    bossEffect.push(loadImage("./Assets/Boss/defaiutImage/magic_3.png"));
    bossEffect.push(loadImage("./Assets/Boss/defaiutImage/magic_4.png"));
    bossEffect.push(loadImage("./Assets/Boss/defaiutImage/magic_5.png"));
    bossEffect.push(loadImage("./Assets/Boss/defaiutImage/magic_6.png"));
    bossEffect.push(loadImage("./Assets/Boss/defaiutImage/magic_7.png"));

    bossLA.push(loadImage("./Assets/Boss/LeftAttack/LeftAttack_1.png"));
    bossLA.push(loadImage("./Assets/Boss/LeftAttack/LeftAttack_2.png"));
    bossLA.push(loadImage("./Assets/Boss/LeftAttack/LeftAttack_3.png"));
    bossLA.push(loadImage("./Assets/Boss/LeftAttack/LeftAttack_4.png"));
    bossLA.push(loadImage("./Assets/Boss/LeftAttack/LeftAttack_5.png"));
    bossLA.push(loadImage("./Assets/Boss/LeftAttack/LeftAttack_6.png"));
    bossLA.push(loadImage("./Assets/Boss/LeftAttack/LeftAttack_7.png"));
    bossLA.push(loadImage("./Assets/Boss/LeftAttack/LeftAttack_8.png"));

    bossRA.push(loadImage("./Assets/Boss/RightAttack/RightAttack_1.png"));
    bossRA.push(loadImage("./Assets/Boss/RightAttack/RightAttack_2.png"));
    bossRA.push(loadImage("./Assets/Boss/RightAttack/RightAttack_3.png"));
    bossRA.push(loadImage("./Assets/Boss/RightAttack/RightAttack_4.png"));
    bossRA.push(loadImage("./Assets/Boss/RightAttack/RightAttack_5.png"));
    bossRA.push(loadImage("./Assets/Boss/RightAttack/RightAttack_6.png"));
    bossRA.push(loadImage("./Assets/Boss/RightAttack/RightAttack_7.png"));
    bossRA.push(loadImage("./Assets/Boss/RightAttack/RightAttack_8.png"));
    bossRA.push(loadImage("./Assets/Boss/RightAttack/Right_2_1.png")); //8
    bossRA.push(loadImage("./Assets/Boss/RightAttack/Right_2_2.png"));
    bossRA.push(loadImage("./Assets/Boss/RightAttack/Right_2_3.png"));
    bossRA.push(loadImage("./Assets/Boss/RightAttack/Right_2_4.png"));
    bossRA.push(loadImage("./Assets/Boss/RightAttack/Right_2_5.png"));
    bossRA.push(loadImage("./Assets/Boss/RightAttack/Right_2_6.png"));
    bossRA.push(loadImage("./Assets/Boss/RightAttack/Right_2_7.png"));
    bossRA.push(loadImage("./Assets/Boss/RightAttack/Right_2_8.png"));
    bossRA.push(loadImage("./Assets/Boss/RightAttack/Right_2_9.png"));
    bossRA.push(loadImage("./Assets/Boss/RightAttack/Right_2_10.png"));
    bossRA.push(loadImage("./Assets/Boss/RightAttack/Right_2_11.png"));
    bossRA.push(loadImage("./Assets/Boss/RightAttack/Right_2_12.png"));
    bossRA.push(loadImage("./Assets/Boss/RightAttack/Right_2_13.png"));
    bossRA.push(loadImage("./Assets/Boss/RightAttack/Right_2_14.png"));

    bossMove.push(loadImage("./Assets/Boss/Move/Lmove_1.png"));
    bossMove.push(loadImage("./Assets/Boss/Move/Lmove_2.png"));
    bossMove.push(loadImage("./Assets/Boss/Move/Lmove_3.png"));
    bossMove.push(loadImage("./Assets/Boss/Move/Lmove_4.png"));
    bossMove.push(loadImage("./Assets/Boss/Move/Rmove_1.png"));
    bossMove.push(loadImage("./Assets/Boss/Move/Rmove_2.png"));
    bossMove.push(loadImage("./Assets/Boss/Move/Rmove_3.png"));
    bossMove.push(loadImage("./Assets/Boss/Move/Rmove_4.png")); // 7
    bossMove.push(loadImage("./Assets/Boss/Move/boss_stun_R1.png")); // 8
    bossMove.push(loadImage("./Assets/Boss/Move/boss_stun_R2.png"));
    bossMove.push(loadImage("./Assets/Boss/Move/boss_stun_R3.png"));
    bossMove.push(loadImage("./Assets/Boss/Move/boss_stun_R4.png"));
    bossMove.push(loadImage("./Assets/Boss/Move/boss_stun_L1.png"));
    bossMove.push(loadImage("./Assets/Boss/Move/boss_stun_L2.png"));
    bossMove.push(loadImage("./Assets/Boss/Move/boss_stun_L3.png"));
    bossMove.push(loadImage("./Assets/Boss/Move/boss_stun_L4.png"));

   
    





    verPlatForm = loadImage("./Assets/PlatForm/Vetical_Platfrom.png");
   
    itemImage.push(loadImage("./Assets/Item/Key.png"));
    itemImage.push(loadImage("./Assets/Item/EndingItem.png"));

    effectImage = loadImage("./Assets/Effect/Effect.png");

    doorImage.push(loadImage("./Assets/PlatForm/door_1.png"));
    doorImage.push(loadImage("./Assets/PlatForm/door_2.png"));
    doorImage.push(loadImage("./Assets/PlatForm/door_3.png"));

    //Skeleton
    skeletonDefault.push(loadImage("./Assets/Skleton/Default/Defualt_1.png"));
    skeletonDefault.push(loadImage("./Assets/Skleton/Default/Defualt_2.png"));
    skeletonDefault.push(loadImage("./Assets/Skleton/Default/Defualt_3.png"));
    
    skeletonDefault.push(loadImage("./Assets/Skleton/AttackedRight/AttackedRIght_2.png"));
    skeletonDefault.push(loadImage("./Assets/Skleton/AttackedLeft/LeftAttacked_2.png"));


    skelRAttack.push(loadImage("./Assets/Skleton/rAttack/attackR_1.png"));
    skelRAttack.push(loadImage("./Assets/Skleton/rAttack/attackR_2.png"));
    skelRAttack.push(loadImage("./Assets/Skleton/rAttack/attackR_3.png"));
    
    skelRAttack.push(loadImage("./Assets/Skleton/rStun/stun_1.png"));
    skelRAttack.push(loadImage("./Assets/Skleton/rStun/stun_2.png"));
    skelRAttack.push(loadImage("./Assets/Skleton/rStun/stun_3.png"));

  
    skelLAttack.push(loadImage("./Assets/Skleton/lAttack/lAttack_1.png"));
    skelLAttack.push(loadImage("./Assets/Skleton/lAttack/lAttack_2.png"));
    skelLAttack.push(loadImage("./Assets/Skleton/lAttack/lAttack_3.png"));

   
    skelLAttack.push(loadImage("./Assets/Skleton/lStun/lStun_1.png"));
    skelLAttack.push(loadImage("./Assets/Skleton/lStun/lStun_2.png"));
    skelLAttack.push(loadImage("./Assets/Skleton/lStun/lStun_3.png"));

    
    skelMove.push(loadImage("./Assets/Skleton/walkRight/rightWalk_1.png"));
    skelMove.push(loadImage("./Assets/Skleton/walkRight/rightWalk_2.png"));
    skelMove.push(loadImage("./Assets/Skleton/walkRight/rightWalk_3.png"));
    skelMove.push(loadImage("./Assets/Skleton/walkRight/rightWalk_4.png"));
    
  
    skelMove.push(loadImage("./Assets/Skleton/walkLeft/walkLeft_1.png"));
    skelMove.push(loadImage("./Assets/Skleton/walkLeft/walkLeft_2.png"));
    skelMove.push(loadImage("./Assets/Skleton/walkLeft/walkLeft_3.png"));
    skelMove.push(loadImage("./Assets/Skleton/walkLeft/walkLeft_4.png"));

    skelMove.push(loadImage("./Assets/Skleton/skelDead_1.png"));
    skelMove.push(loadImage("./Assets/Skleton/skelDead_2.png"));
    skelMove.push(loadImage("./Assets/Skleton/skelDead_3.png"));

   
    skelMove.push(loadImage("./Assets/Skleton/attackedImage/attackedLeft.png"));
    skelMove.push(loadImage("./Assets/Skleton/attackedImage/attackedRight.png"));


    //UI
    // hpImage = loadImage("./Assets/UI/HP.png");
    uiImage.push(loadImage("./Assets/UI/HP.png"));
    uiImage.push(loadImage("./Assets/UI/shield.png"));
    uiImage.push(loadImage("./Assets/UI/brokenShield.png"));

    uiImage.push(loadImage("./Assets/UI/Roll_0.png"));
    uiImage.push(loadImage("./Assets/UI/Roll_1.png"));
    uiImage.push(loadImage("./Assets/UI/Roll_2.png"));
    uiImage.push(loadImage("./Assets/UI/Roll_3.png"));

    uiImage.push(loadImage("./Assets/Effect/skillEffect.png"));
    
    uiImage.push(loadImage("./Assets/UI/Skill.png"));

    pikeImage.push(loadImage("./Assets/PlatForm/Pike_1.PNG"));
    pikeImage.push(loadImage("./Assets/PlatForm/Pike_2.PNG"));
    player = new Player(defaultImage, rightMoveImage , leftMoveImage,leftAttackImage, rightAttackImage,rigthGuardImage,leftGuardImage,uiImage,RRollImage,sfx);
    
}



function setup()
{
    createCanvas( 1200, 600 );
    frameRate(60);
    stateCheck = 0;
    checkPause = 0;
    if(!backgroundMusic[0].isLoaded())
    {
        backgroundMusic[0] = loadSound("./Assets/Music/The golden Forest.mp3");
        
    }
    if(!backgroundMusic[1].isLoaded())
    {
        backgroundMusic[1] = loadSound("./Assets/Music/LEGACY - Encounter of Misdeeds MP3.mp3");
    }
    if(!backgroundMusic[2].isLoaded())
    {
        backgroundMusic[2] = loadSound("./Assets/Music/LEGACY - The World At Your Door MP3.mp3");
    }
      
}

function draw()
{
    

    
    background( 0 );
    if(!backgroundMusic[0].isPlaying() && stateCheck != 5)
    {
        push();
        if(backgroundMusic[2].isPlaying())
        {
            backgroundMusic[2].stop();
        }
        backgroundMusic[0].play();
        backgroundMusic[0].setVolume(0.2);
        pop();
    }
    if(stateCheck == 5 && screenCheck == 5 && !backgroundMusic[2].isPlaying())
    {
        if(backgroundMusic[1].isPlaying())
        {
            backgroundMusic[1].stop();
        }
        backgroundMusic[2].play();
    }
    if(stateCheck == 5 && screenCheck != 5 && !backgroundMusic[1].isPlaying())
    {
        if(backgroundMusic[0].isPlaying())
        {
            backgroundMusic[0].stop();
        }
        backgroundMusic[1].play();
    }
    
    
    push();

    if(screenCheck == 1)
    {
    stateManager();
   
    
    if(player.pos.x > 600 && player.pos.x <= cameraState-500 && stateCheck != 5)
    {
        
        translate(-(player.pos.x-600),0);
        
        image(backgroundImage,player.pos.x-600,0);
        // player.seeUIImage(player.pos.x-600);
        if(checkPause == 1)
        {
            
            textSize(30);
            text("Pause Press ESC",player.pos.x-100,300);
        }
        
    }else if(player.pos.x >= cameraState-500 && stateCheck != 5)
    {
        
        translate(-(cameraState-1100),0);
        image(backgroundImage,cameraState-1100,0);
        // player.seeUIImage(cameraState-1100);
        if(checkPause == 1)
        {
            
            textSize(30);
            text("Pause Press ESC",cameraState-600,300);
        }
    }else{
        translate(0,0);
        image(backgroundImage,0,0);
        // player.seeUIImage(0);
        if(checkPause == 1)
        {
            
            textSize(30);
            text("Pause Press ESC",500,300);
        }
    }
    


    
    
    if(checkPause == 0 && screenCheck == 1)
    {

        
        
            if(spawnCheck == 0)
            {
                firstStateSpawn(stateCheck);
                spawnCheck = 1;
            }

            
            updateMonsterAndPlatForm();
            if(door != 0)
            {
                door.colPlayer(player);
                door.animUpdate();
            }
           
            if(key != 0)
            {
                if(keyIs && key.isRemove == 0)
                {
                        key.draw();
                        if(door != 0)
                        {
                            key.checkPlayer(player,door);
                        }else{
                            key.checkPlayer(player,0);
                        }
                    
                }else if(enemy.length == 0 && key.isRemove == 1 && key.type == 1)
                {
                    screenCheck = 5;
                    key = 0;
                }
            }
            
            if(player.pos.x > 600 && player.pos.x <= cameraState-500 && stateCheck != 5)
            {
                player.seeUIImage(player.pos.x-600);
            }else if(player.pos.x >= cameraState-500 && stateCheck != 5)
            {
                player.seeUIImage(cameraState-1100);
            }else{
                player.seeUIImage(0);
            }
            push();
            player.updateAnim();
            pop();
            player.checkKeyboard();
            player.update();
            player.addGravity();
            // player.checkCamera();
            player.checkLeft(stateCheck);
            playerCheck();
            




    






        }




    
    
    pop();
        
    }else if(screenCheck == 0 || screenCheck == 2)
    {
        mainMenu();
    }else if(screenCheck == 5)
    {
        endMenu();
    }else if(screenCheck == 3 || screenCheck == 4)
    {
        tutorScreen();
    }
    if(!focused)
    {
        checkPause = 1;
    }
}
    
    

function tutorScreen()
{
    if(screenCheck == 3)
    {
        image(mainImage[4],100,0);
    }else{
        image(mainImage[5],100,0);
    }

}



function endMenu()
{
    image(backgroundImage,0,0);
    image(mainImage[2],0,0,1200,600);
}



function stateManager()
{
    if(player.pos.x > cameraState && keyIs)
    {
        stateCheck++;
        player.pos.x = 100;
        spawnCheck = 0;
        player.startPlay = 0;
        if(stateCheck == 3)
        {
            console.log("addad")
            cameraState = 2200;
        }else if(stateCheck == 4){
            cameraState = 3500;
        }else{
            cameraState = 2400;
        }
        
        
    }
}

function firstStateSpawn(state)
{
    if(state == 0)
    {
        enemy.splice(0,enemy.length);
        platForm.splice(0,platForm.length);
        keyIs = false;

        door = new Door(doorImage,2400,400,100,100,doorMusic);
        key = new Item(itemImage[0],1800,200,0);
        platForm.push(new PlatForm(0,500,1200,100,true,0,0,platFormImage));
        platForm.push(new PlatForm(1300,500,1200,100,true,0,0,platFormImage));
        platForm.push(new PlatForm(900,300,1200,100,false,0,0,platFormImage));
        platForm.push(new PlatForm(2400,0,100,400,true,1,verPlatForm));
        

        enemy.push(new Skeleton(1,skeletonDefault,1200,250,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage,skelSfx));
        enemy.push(new Skeleton(1,skeletonDefault,1400,250,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage,skelSfx));
        enemy.push(new Skeleton(1,skeletonDefault,1500,150,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage,skelSfx));
        enemy.push(new Skeleton(1,skeletonDefault,1000,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage,skelSfx));
        enemy.push(new Skeleton(1,skeletonDefault,900,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage,skelSfx));
        enemy.push(new Skeleton(1,skeletonDefault,550,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage,skelSfx));
        enemy.push(new Skeleton(1,skeletonDefault,400,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage,skelSfx));
        enemy.push(new Skeleton(1,skeletonDefault,2000,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage,skelSfx));
        enemy.push(new Skeleton(1,skeletonDefault,2100,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage,skelSfx));

        enemy.push(new Skeleton(1,skeletonDefault,2300,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage,skelSfx));
        enemy.push(new Skeleton(1,skeletonDefault,1600,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage,skelSfx));
        
    }else if(state == 1)
    {
        enemy.splice(0,enemy.length);
        platForm.splice(0,platForm.length);
        keyIs = false;

        
        key = new Item(itemImage[0],1800,200,0);
        door = new Door(doorImage,2400,400,100,100,doorMusic);

        platForm.push(new PlatForm(0,500,1200,100,true,0,0,platFormImage));
        platForm.push(new PlatForm(1300,500,1200,100,true,0,0,platFormImage));
        platForm.push(new PlatForm(900,300,1200,100,false,0,0,platFormImage));
        platForm.push(new PlatForm(2400,0,100,400,true,1,verPlatForm));

        enemy.push(new Skeleton(1,skeletonDefault,550,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage,skelSfx));
        enemy.push(new Skeleton(1,skeletonDefault,400,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage,skelSfx));
        enemy.push(new BigSkel(3,bigSkelEffect,700,450,25,-25,28,-50,40,bigSkelRA,bigSkelLA,bigSkelL,effectImage,bigSfx));
        

        enemy.push(new Skeleton(1,skeletonDefault,2000,250,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage,skelSfx));
        enemy.push(new Skeleton(1,skeletonDefault,1700,250,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage,skelSfx));
        enemy.push(new BigSkel(3,bigSkelEffect,2000,250,25,-25,28,-50,40,bigSkelRA,bigSkelLA,bigSkelL,effectImage,bigSfx));

        enemy.push(new BigSkel(3,bigSkelEffect,2300,450,25,-25,28,-50,40,bigSkelRA,bigSkelLA,bigSkelL,effectImage,bigSfx));
        enemy.push(new Skeleton(1,skeletonDefault,2300,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage,skelSfx));
        enemy.push(new Skeleton(1,skeletonDefault,2300,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage,skelSfx));
        

    }else if(state == 2)
    {
        enemy.splice(0,enemy.length);
        platForm.splice(0,platForm.length);
        keyIs = false;

        
        key = new Item(itemImage[0],1800,200,0);
        door = new Door(doorImage,2400,400,100,100,doorMusic);

        platForm.push(new PlatForm(0,500,1200,100,true,0,0,platFormImage));
        platForm.push(new PlatForm(1300,500,1200,100,true,0,0,platFormImage));
        platForm.push(new PlatForm(900,300,1200,100,false,0,0,platFormImage));
        platForm.push(new PlatForm(2400,0,100,400,true,1,verPlatForm));

        enemy.push(new Skeleton(1,skeletonDefault,550,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage,skelSfx));
        enemy.push(new Skeleton(1,skeletonDefault,400,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage,skelSfx));
        enemy.push(new Mage(2,magicImage,700,450,25,-25,28,-50,40,mageRAttack,mageLAttack,mageMove,effectImage,mageSfx));
        

        enemy.push(new Skeleton(1,skeletonDefault,2000,250,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage,skelSfx));
        enemy.push(new Skeleton(1,skeletonDefault,1700,250,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage,skelSfx));
        enemy.push(new Mage(2,magicImage,2000,250,25,-25,28,-50,40,mageRAttack,mageLAttack,mageMove,effectImage,mageSfx));

        
        enemy.push(new Mage(2,magicImage,2300,250,25,-25,28,-50,40,mageRAttack,mageLAttack,mageMove,effectImage,mageSfx));
        enemy.push(new Skeleton(1,skeletonDefault,2300,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage,skelSfx));
        enemy.push(new Skeleton(1,skeletonDefault,2300,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage,skelSfx));





    }else if(state == 3)
    {
        enemy.splice(0,enemy.length);
        platForm.splice(0,platForm.length);
        keyIs = false;
        key = new Item(itemImage[0],2000,200,0);
        door = new Door(doorImage,2200,400,100,100,doorMusic);
        platForm.push(new PlatForm(2200,0,100,400,true,1,verPlatForm));

        platForm.push(new PlatForm(0,500,1200,100,true,0,0,platFormImage));
        platForm.push(new PlatForm(1200,500,1200,100,true,0,0,platFormImage));
        
        platForm.push(new Pike(380,436,pikeImage,5.0,1));

        platForm.push(new Pike(500,436,pikeImage,5.0,1));
        platForm.push(new Pike(620,436,pikeImage,5.0,1));
        platForm.push(new Pike(740,436,pikeImage,5.0,1));

        platForm.push(new Pike(840+100,436,pikeImage,3.0,0));
        platForm.push(new Pike(960+100+50,436,pikeImage,3.0,1));
        platForm.push(new Pike(1080+100+100,436,pikeImage,3.0,0));
        platForm.push(new Pike(1200+100+150,436,pikeImage,3.0,1));
        platForm.push(new Pike(1320+100+200,436,pikeImage,3.0,0));
        platForm.push(new Pike(1440+100+250,436,pikeImage,3.0,1));
        enemy.push(new Archer(4,archerArrow,2100,450,25,-25,28,-50,40,archerRA,archerLA,archerMove,effectImage,1,archerSfx));
    }else if(state == 4)
    {
        enemy.splice(0,enemy.length);
        platForm.splice(0,platForm.length);
        keyIs = false;

        
        key = new Item(itemImage[0],3400,200,0);
        door = new Door(doorImage,3500,400,100,100,doorMusic);

        platForm.push(new PlatForm(0,500,1200,100,true,0,0,platFormImage));
        platForm.push(new PlatForm(1300,500,2400,100,true,0,0,platFormImage_2));
        platForm.push(new PlatForm(900,300,1200,100,false,0,0,platFormImage));
        platForm.push(new PlatForm(3500,0,100,400,true,1,verPlatForm));

        enemy.push(new Skeleton(1,skeletonDefault,550,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage,skelSfx));
        enemy.push(new BigSkel(3,bigSkelEffect,400,450,25,-25,28,-50,40,bigSkelRA,bigSkelLA,bigSkelL,effectImage,bigSfx));
        enemy.push(new BigSkel(3,bigSkelEffect,700,450,25,-25,28,-50,40,bigSkelRA,bigSkelLA,bigSkelL,effectImage,bigSfx));
        

        enemy.push(new Skeleton(1,skeletonDefault,2000,250,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage,skelSfx));
        enemy.push(new Skeleton(1,skeletonDefault,1700,250,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage,skelSfx));
        
        enemy.push(new Mage(2,magicImage,2000,250,25,-25,28,-50,40,mageRAttack,mageLAttack,mageMove,effectImage,mageSfx));


        enemy.push(new BigSkel(3,bigSkelEffect,2300,450,25,-25,28,-50,40,bigSkelRA,bigSkelLA,bigSkelL,effectImage,bigSfx));
        enemy.push(new Skeleton(1,skeletonDefault,2300,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage,skelSfx));
        enemy.push(new Skeleton(1,skeletonDefault,2300,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage,skelSfx));
        enemy.push(new Archer(4,archerArrow,2900,450,25,-25,28,-50,40,archerRA,archerLA,archerMove,effectImage,1,archerSfx));
        enemy.push(new Archer(4,archerArrow,3000,450,25,-25,28,-50,40,archerRA,archerLA,archerMove,effectImage,1,archerSfx));



    }
    else if(state == 5)
    {
        enemy.splice(0,enemy.length);
        keyIs = false;
        door = 0
        platForm.splice(0,platForm.length);
        key = new Item(itemImage[1],600,200,1);
        enemy.push(new Boss(5,bossEffect,500,450,15,-40,28,-50,40,bossRA,bossLA,bossMove,effectImage,bossSfx));
        platForm.push(new PlatForm(0,500,1200,100,true,0,0,platFormImage));

    }
    
}

function updateMonsterAndPlatForm()
{

    for(var a= 0; a<platForm.length;a++)
            {

                platForm[a].draw();
                platForm[a].colPlayer(player);
            }


    for(var a = 0; a<enemy.length;a++)
    {
        if(enemy[a].life > 0)
        {
            if(enemy[a].pos.y > 600)
            {
                enemy[a].life = 0;
            }
            enemy[a].animUpdate();
            enemy[a].update();
            if(enemy[a].type == 1)
            {
                enemy[a].checkParry(player);
                enemy[a].checkAttack(player);
            }else{
                enemy[a].checkAttack(player);
                enemy[a].specialAttack(player);
            }

            if(enemy[a].type == 5)
            {
                BossHp(enemy[a]);
            }

                for(var b = 0;b<platForm.length;b++)
                {
                    
                    if(platForm[b].type != 3)
                    {
                        enemy[a].platformCheck(platForm[b]);
                        if(player.startPlay == 1)
                        {
                            enemy[a].behavior(player,platForm[b]);
                            enemy[a].moveUpdate();
                        }
                        platForm[b].colMonster(enemy[a]);
                    }
                    
                }
            
        }else{
            if(enemy[a].type != 5)
            {
                enemy[a].dead();
                let c = 0;
                for(var e = 0; e < enemy.length ; e ++)
                {
                    if(enemy[e].isDead == 1)
                    {
                        c++;
                    }
                    if(c == enemy.length)
                    {
                        keyIs = true;
                    }
                }
            }else{
                keyIs = true;
                enemy.splice(a,1);
            }
            
        }
    }
    player.checkAttack(enemy);

   
}

function playerCheck()
{
    if(player.pos.y > 600 && player.startPlay == 1)
    {
        player.life -= 1;
        player.pos.x = 100;
        player.pos.y = 480;
    }
    if(player.life <1)
    {
        keyIs = false;
        if(stateCheck != 3)
        {
            player.attackedCheck = 0;
        }
        if(stateCheck < 3)
        {
            stateCheck = 0
        }else if(stateCheck == 5)
        {
            stateCheck = 5
        }else{
            stateCheck = 3
        }
        
        
        
        spawnCheck = 0;
        player.pos.x = 100;
        player.pos.y = 480;
        player.life = 5;
        player.startPlay = 0;
        checkPause = 1;
        if(stateCheck == 4)
        {
            cameraState = 3500;
        }else if(stateCheck == 3)
        {
            cameraState = 2200;
        }else{
            cameraState = 2400;
        }
        
        player.rollCount = 3;
        player.skillCount = 1;
        player.animState = 0;
        player.isSkill = 0;   
        player.attackCheck = 0;
        player.shieldCount = 3;

        player.attackedVel.x = 0;
        
        player.rollVec.x = 0;
        player.checkRoll = 0;
        player.rollCountDeltaTime = 0;
        player.skillCountDelta = 0;
        player.guardRefillDelta = 0;
    }
}


function mainMenu()
{
    if(screenCheck == 0)
    {
        image(mainImage[0],400,50,400,200);
        image(mainImage[1],500,300);
        image(mainImage[3],500,400);
    }else if(screenCheck == 2)
    {
        image(mainImage[6],200,0);
    }
    
   
}
 
function mousePressed()
{
    if(focused)
    {

    
    if(screenCheck == 0)
    {
        if((mouseX > 500 && mouseX < 700) && (mouseY > 300 && mouseY < 350))
        {
            screenCheck = 2;
        }else if((mouseX > 500 && mouseX < 700) && (mouseY > 400 && mouseY < 450))
        {
            screenCheck = 3;
        }
        
    }else if(screenCheck == 2)
    {  
        screenCheck = 1;
    }else if(screenCheck == 3)
    {
        screenCheck = 4;
    }else if(screenCheck == 4)
    {
        screenCheck = 0;
    }else if(screenCheck == 5)
    {
        screenCheck = 0;
        stateCheck = 0;
        spawnCheck = 0;
        player.pos.x = 100;
        player.pos.y = 480;
        player.life = 5;
        player.startPlay = 0;
        cameraState = 2400;
        player.rollCount = 3;
        player.skillCount = 1;
        player.animState = 0;
        player.isSkill = 0;   
        player.attackCheck = 0;

        player.attackedVel.x = 0;
        player.attackedCheck = 0;
        player.rollVec.x = 0;
        player.checkRoll = 0;
        player.rollCountDeltaTime = 0;
        player.skillCountDelta = 0;
        player.guardRefillDelta = 0;
    }
}
    console.log(screenCheck);
    
    
}

function keyPressed()
{
    

    if(focused)
    {
            if(checkPause == 1 && keyCode == 27)
        {
            checkPause = 0;
        }else if(checkPause == 0 && keyCode == 27)
        {
            checkPause = 1;
        }
    }
    

}

function BossHp(boss)
{
    push();
    textSize(30);
    fill(0);
    text("RichKing",400,100);
    fill('red');
    rect(530,80,300*(boss.life / 20),25);
    pop();

}