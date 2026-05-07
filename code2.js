gdjs.game_32overCode = {};
gdjs.game_32overCode.localVariables = [];
gdjs.game_32overCode.idToCallbackMap = new Map();
gdjs.game_32overCode.GDBlueButtonObjects1= [];
gdjs.game_32overCode.GDBlueButtonObjects2= [];
gdjs.game_32overCode.GDOVERObjects1= [];
gdjs.game_32overCode.GDOVERObjects2= [];
gdjs.game_32overCode.GDStar_9595Yellow_9595PowerupObjects1= [];
gdjs.game_32overCode.GDStar_9595Yellow_9595PowerupObjects2= [];
gdjs.game_32overCode.GDSoldierObjects1= [];
gdjs.game_32overCode.GDSoldierObjects2= [];
gdjs.game_32overCode.GDFireballObjects1= [];
gdjs.game_32overCode.GDFireballObjects2= [];
gdjs.game_32overCode.GDspikes1Objects1= [];
gdjs.game_32overCode.GDspikes1Objects2= [];
gdjs.game_32overCode.GDAreariesgoObjects1= [];
gdjs.game_32overCode.GDAreariesgoObjects2= [];
gdjs.game_32overCode.GDGreen_9595flagObjects1= [];
gdjs.game_32overCode.GDGreen_9595flagObjects2= [];
gdjs.game_32overCode.GDRevolverObjects1= [];
gdjs.game_32overCode.GDRevolverObjects2= [];
gdjs.game_32overCode.GDFire_9595BurningObjects1= [];
gdjs.game_32overCode.GDFire_9595BurningObjects2= [];
gdjs.game_32overCode.GDCat_95956Objects1= [];
gdjs.game_32overCode.GDCat_95956Objects2= [];
gdjs.game_32overCode.GDGold_9595CoinObjects1= [];
gdjs.game_32overCode.GDGold_9595CoinObjects2= [];
gdjs.game_32overCode.GDSOLDIERObjects1= [];
gdjs.game_32overCode.GDSOLDIERObjects2= [];
gdjs.game_32overCode.GDVIDASObjects1= [];
gdjs.game_32overCode.GDVIDASObjects2= [];
gdjs.game_32overCode.GDMONEDAS2Objects1= [];
gdjs.game_32overCode.GDMONEDAS2Objects2= [];
gdjs.game_32overCode.GDSUBVIDA2Objects1= [];
gdjs.game_32overCode.GDSUBVIDA2Objects2= [];
gdjs.game_32overCode.GDStar_9595DiamondObjects1= [];
gdjs.game_32overCode.GDStar_9595DiamondObjects2= [];
gdjs.game_32overCode.GDNewTiledSpriteObjects1= [];
gdjs.game_32overCode.GDNewTiledSpriteObjects2= [];
gdjs.game_32overCode.GDNarrow_9595ladderObjects1= [];
gdjs.game_32overCode.GDNarrow_9595ladderObjects2= [];
gdjs.game_32overCode.GDbloquefantasmaObjects1= [];
gdjs.game_32overCode.GDbloquefantasmaObjects2= [];
gdjs.game_32overCode.GDBullObjects1= [];
gdjs.game_32overCode.GDBullObjects2= [];
gdjs.game_32overCode.GDVIDAS_9595BULLObjects1= [];
gdjs.game_32overCode.GDVIDAS_9595BULLObjects2= [];
gdjs.game_32overCode.GDTRIGGER_9595DERECHAObjects1= [];
gdjs.game_32overCode.GDTRIGGER_9595DERECHAObjects2= [];
gdjs.game_32overCode.GDTRIGGER_9595IZQObjects1= [];
gdjs.game_32overCode.GDTRIGGER_9595IZQObjects2= [];
gdjs.game_32overCode.GDAlternative_9595castle_9595wallObjects1= [];
gdjs.game_32overCode.GDAlternative_9595castle_9595wallObjects2= [];
gdjs.game_32overCode.GDCactus_9595_95953_9595Objects1= [];
gdjs.game_32overCode.GDCactus_9595_95953_9595Objects2= [];
gdjs.game_32overCode.GDCrateObjects1= [];
gdjs.game_32overCode.GDCrateObjects2= [];
gdjs.game_32overCode.GDSpike_9595HeadObjects1= [];
gdjs.game_32overCode.GDSpike_9595HeadObjects2= [];
gdjs.game_32overCode.GDFire_9595BallObjects1= [];
gdjs.game_32overCode.GDFire_9595BallObjects2= [];
gdjs.game_32overCode.GDpeligroObjects1= [];
gdjs.game_32overCode.GDpeligroObjects2= [];
gdjs.game_32overCode.GDLineDarkJoystickObjects1= [];
gdjs.game_32overCode.GDLineDarkJoystickObjects2= [];
gdjs.game_32overCode.GDB_9595ButtonObjects1= [];
gdjs.game_32overCode.GDB_9595ButtonObjects2= [];
gdjs.game_32overCode.GDA_9595ButtonObjects1= [];
gdjs.game_32overCode.GDA_9595ButtonObjects2= [];
gdjs.game_32overCode.GDX_9595ButtonObjects1= [];
gdjs.game_32overCode.GDX_9595ButtonObjects2= [];
gdjs.game_32overCode.GDY_9595ButtonObjects1= [];
gdjs.game_32overCode.GDY_9595ButtonObjects2= [];
gdjs.game_32overCode.GDTarget_9595round_9595buttonObjects1= [];
gdjs.game_32overCode.GDTarget_9595round_9595buttonObjects2= [];
gdjs.game_32overCode.GDMENUObjects1= [];
gdjs.game_32overCode.GDMENUObjects2= [];


gdjs.game_32overCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MENU"), gdjs.game_32overCode.GDMENUObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.game_32overCode.GDMENUObjects1.length;i<l;++i) {
    if ( gdjs.game_32overCode.GDMENUObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.game_32overCode.GDMENUObjects1[k] = gdjs.game_32overCode.GDMENUObjects1[i];
        ++k;
    }
}
gdjs.game_32overCode.GDMENUObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", true);
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.game_32overCode.GDBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.game_32overCode.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.game_32overCode.GDBlueButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.game_32overCode.GDBlueButtonObjects1[k] = gdjs.game_32overCode.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.game_32overCode.GDBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "escena1", true);
}
elseEventsChainSatisfied = true;
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "38e701a4a1949da585e53774737bbbd3e41b42ca516c6efae1296eae24925b96_The Desert.aac", false, 100, 1);
}
elseEventsChainSatisfied = true;
}

}


};

gdjs.game_32overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_32overCode.GDBlueButtonObjects1.length = 0;
gdjs.game_32overCode.GDBlueButtonObjects2.length = 0;
gdjs.game_32overCode.GDOVERObjects1.length = 0;
gdjs.game_32overCode.GDOVERObjects2.length = 0;
gdjs.game_32overCode.GDStar_9595Yellow_9595PowerupObjects1.length = 0;
gdjs.game_32overCode.GDStar_9595Yellow_9595PowerupObjects2.length = 0;
gdjs.game_32overCode.GDSoldierObjects1.length = 0;
gdjs.game_32overCode.GDSoldierObjects2.length = 0;
gdjs.game_32overCode.GDFireballObjects1.length = 0;
gdjs.game_32overCode.GDFireballObjects2.length = 0;
gdjs.game_32overCode.GDspikes1Objects1.length = 0;
gdjs.game_32overCode.GDspikes1Objects2.length = 0;
gdjs.game_32overCode.GDAreariesgoObjects1.length = 0;
gdjs.game_32overCode.GDAreariesgoObjects2.length = 0;
gdjs.game_32overCode.GDGreen_9595flagObjects1.length = 0;
gdjs.game_32overCode.GDGreen_9595flagObjects2.length = 0;
gdjs.game_32overCode.GDRevolverObjects1.length = 0;
gdjs.game_32overCode.GDRevolverObjects2.length = 0;
gdjs.game_32overCode.GDFire_9595BurningObjects1.length = 0;
gdjs.game_32overCode.GDFire_9595BurningObjects2.length = 0;
gdjs.game_32overCode.GDCat_95956Objects1.length = 0;
gdjs.game_32overCode.GDCat_95956Objects2.length = 0;
gdjs.game_32overCode.GDGold_9595CoinObjects1.length = 0;
gdjs.game_32overCode.GDGold_9595CoinObjects2.length = 0;
gdjs.game_32overCode.GDSOLDIERObjects1.length = 0;
gdjs.game_32overCode.GDSOLDIERObjects2.length = 0;
gdjs.game_32overCode.GDVIDASObjects1.length = 0;
gdjs.game_32overCode.GDVIDASObjects2.length = 0;
gdjs.game_32overCode.GDMONEDAS2Objects1.length = 0;
gdjs.game_32overCode.GDMONEDAS2Objects2.length = 0;
gdjs.game_32overCode.GDSUBVIDA2Objects1.length = 0;
gdjs.game_32overCode.GDSUBVIDA2Objects2.length = 0;
gdjs.game_32overCode.GDStar_9595DiamondObjects1.length = 0;
gdjs.game_32overCode.GDStar_9595DiamondObjects2.length = 0;
gdjs.game_32overCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.game_32overCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.game_32overCode.GDNarrow_9595ladderObjects1.length = 0;
gdjs.game_32overCode.GDNarrow_9595ladderObjects2.length = 0;
gdjs.game_32overCode.GDbloquefantasmaObjects1.length = 0;
gdjs.game_32overCode.GDbloquefantasmaObjects2.length = 0;
gdjs.game_32overCode.GDBullObjects1.length = 0;
gdjs.game_32overCode.GDBullObjects2.length = 0;
gdjs.game_32overCode.GDVIDAS_9595BULLObjects1.length = 0;
gdjs.game_32overCode.GDVIDAS_9595BULLObjects2.length = 0;
gdjs.game_32overCode.GDTRIGGER_9595DERECHAObjects1.length = 0;
gdjs.game_32overCode.GDTRIGGER_9595DERECHAObjects2.length = 0;
gdjs.game_32overCode.GDTRIGGER_9595IZQObjects1.length = 0;
gdjs.game_32overCode.GDTRIGGER_9595IZQObjects2.length = 0;
gdjs.game_32overCode.GDAlternative_9595castle_9595wallObjects1.length = 0;
gdjs.game_32overCode.GDAlternative_9595castle_9595wallObjects2.length = 0;
gdjs.game_32overCode.GDCactus_9595_95953_9595Objects1.length = 0;
gdjs.game_32overCode.GDCactus_9595_95953_9595Objects2.length = 0;
gdjs.game_32overCode.GDCrateObjects1.length = 0;
gdjs.game_32overCode.GDCrateObjects2.length = 0;
gdjs.game_32overCode.GDSpike_9595HeadObjects1.length = 0;
gdjs.game_32overCode.GDSpike_9595HeadObjects2.length = 0;
gdjs.game_32overCode.GDFire_9595BallObjects1.length = 0;
gdjs.game_32overCode.GDFire_9595BallObjects2.length = 0;
gdjs.game_32overCode.GDpeligroObjects1.length = 0;
gdjs.game_32overCode.GDpeligroObjects2.length = 0;
gdjs.game_32overCode.GDLineDarkJoystickObjects1.length = 0;
gdjs.game_32overCode.GDLineDarkJoystickObjects2.length = 0;
gdjs.game_32overCode.GDB_9595ButtonObjects1.length = 0;
gdjs.game_32overCode.GDB_9595ButtonObjects2.length = 0;
gdjs.game_32overCode.GDA_9595ButtonObjects1.length = 0;
gdjs.game_32overCode.GDA_9595ButtonObjects2.length = 0;
gdjs.game_32overCode.GDX_9595ButtonObjects1.length = 0;
gdjs.game_32overCode.GDX_9595ButtonObjects2.length = 0;
gdjs.game_32overCode.GDY_9595ButtonObjects1.length = 0;
gdjs.game_32overCode.GDY_9595ButtonObjects2.length = 0;
gdjs.game_32overCode.GDTarget_9595round_9595buttonObjects1.length = 0;
gdjs.game_32overCode.GDTarget_9595round_9595buttonObjects2.length = 0;
gdjs.game_32overCode.GDMENUObjects1.length = 0;
gdjs.game_32overCode.GDMENUObjects2.length = 0;

gdjs.game_32overCode.eventsList0(runtimeScene);
gdjs.game_32overCode.GDBlueButtonObjects1.length = 0;
gdjs.game_32overCode.GDBlueButtonObjects2.length = 0;
gdjs.game_32overCode.GDOVERObjects1.length = 0;
gdjs.game_32overCode.GDOVERObjects2.length = 0;
gdjs.game_32overCode.GDStar_9595Yellow_9595PowerupObjects1.length = 0;
gdjs.game_32overCode.GDStar_9595Yellow_9595PowerupObjects2.length = 0;
gdjs.game_32overCode.GDSoldierObjects1.length = 0;
gdjs.game_32overCode.GDSoldierObjects2.length = 0;
gdjs.game_32overCode.GDFireballObjects1.length = 0;
gdjs.game_32overCode.GDFireballObjects2.length = 0;
gdjs.game_32overCode.GDspikes1Objects1.length = 0;
gdjs.game_32overCode.GDspikes1Objects2.length = 0;
gdjs.game_32overCode.GDAreariesgoObjects1.length = 0;
gdjs.game_32overCode.GDAreariesgoObjects2.length = 0;
gdjs.game_32overCode.GDGreen_9595flagObjects1.length = 0;
gdjs.game_32overCode.GDGreen_9595flagObjects2.length = 0;
gdjs.game_32overCode.GDRevolverObjects1.length = 0;
gdjs.game_32overCode.GDRevolverObjects2.length = 0;
gdjs.game_32overCode.GDFire_9595BurningObjects1.length = 0;
gdjs.game_32overCode.GDFire_9595BurningObjects2.length = 0;
gdjs.game_32overCode.GDCat_95956Objects1.length = 0;
gdjs.game_32overCode.GDCat_95956Objects2.length = 0;
gdjs.game_32overCode.GDGold_9595CoinObjects1.length = 0;
gdjs.game_32overCode.GDGold_9595CoinObjects2.length = 0;
gdjs.game_32overCode.GDSOLDIERObjects1.length = 0;
gdjs.game_32overCode.GDSOLDIERObjects2.length = 0;
gdjs.game_32overCode.GDVIDASObjects1.length = 0;
gdjs.game_32overCode.GDVIDASObjects2.length = 0;
gdjs.game_32overCode.GDMONEDAS2Objects1.length = 0;
gdjs.game_32overCode.GDMONEDAS2Objects2.length = 0;
gdjs.game_32overCode.GDSUBVIDA2Objects1.length = 0;
gdjs.game_32overCode.GDSUBVIDA2Objects2.length = 0;
gdjs.game_32overCode.GDStar_9595DiamondObjects1.length = 0;
gdjs.game_32overCode.GDStar_9595DiamondObjects2.length = 0;
gdjs.game_32overCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.game_32overCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.game_32overCode.GDNarrow_9595ladderObjects1.length = 0;
gdjs.game_32overCode.GDNarrow_9595ladderObjects2.length = 0;
gdjs.game_32overCode.GDbloquefantasmaObjects1.length = 0;
gdjs.game_32overCode.GDbloquefantasmaObjects2.length = 0;
gdjs.game_32overCode.GDBullObjects1.length = 0;
gdjs.game_32overCode.GDBullObjects2.length = 0;
gdjs.game_32overCode.GDVIDAS_9595BULLObjects1.length = 0;
gdjs.game_32overCode.GDVIDAS_9595BULLObjects2.length = 0;
gdjs.game_32overCode.GDTRIGGER_9595DERECHAObjects1.length = 0;
gdjs.game_32overCode.GDTRIGGER_9595DERECHAObjects2.length = 0;
gdjs.game_32overCode.GDTRIGGER_9595IZQObjects1.length = 0;
gdjs.game_32overCode.GDTRIGGER_9595IZQObjects2.length = 0;
gdjs.game_32overCode.GDAlternative_9595castle_9595wallObjects1.length = 0;
gdjs.game_32overCode.GDAlternative_9595castle_9595wallObjects2.length = 0;
gdjs.game_32overCode.GDCactus_9595_95953_9595Objects1.length = 0;
gdjs.game_32overCode.GDCactus_9595_95953_9595Objects2.length = 0;
gdjs.game_32overCode.GDCrateObjects1.length = 0;
gdjs.game_32overCode.GDCrateObjects2.length = 0;
gdjs.game_32overCode.GDSpike_9595HeadObjects1.length = 0;
gdjs.game_32overCode.GDSpike_9595HeadObjects2.length = 0;
gdjs.game_32overCode.GDFire_9595BallObjects1.length = 0;
gdjs.game_32overCode.GDFire_9595BallObjects2.length = 0;
gdjs.game_32overCode.GDpeligroObjects1.length = 0;
gdjs.game_32overCode.GDpeligroObjects2.length = 0;
gdjs.game_32overCode.GDLineDarkJoystickObjects1.length = 0;
gdjs.game_32overCode.GDLineDarkJoystickObjects2.length = 0;
gdjs.game_32overCode.GDB_9595ButtonObjects1.length = 0;
gdjs.game_32overCode.GDB_9595ButtonObjects2.length = 0;
gdjs.game_32overCode.GDA_9595ButtonObjects1.length = 0;
gdjs.game_32overCode.GDA_9595ButtonObjects2.length = 0;
gdjs.game_32overCode.GDX_9595ButtonObjects1.length = 0;
gdjs.game_32overCode.GDX_9595ButtonObjects2.length = 0;
gdjs.game_32overCode.GDY_9595ButtonObjects1.length = 0;
gdjs.game_32overCode.GDY_9595ButtonObjects2.length = 0;
gdjs.game_32overCode.GDTarget_9595round_9595buttonObjects1.length = 0;
gdjs.game_32overCode.GDTarget_9595round_9595buttonObjects2.length = 0;
gdjs.game_32overCode.GDMENUObjects1.length = 0;
gdjs.game_32overCode.GDMENUObjects2.length = 0;


return;

}

gdjs['game_32overCode'] = gdjs.game_32overCode;
