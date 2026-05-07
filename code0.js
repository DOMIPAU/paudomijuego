gdjs.menuCode = {};
gdjs.menuCode.localVariables = [];
gdjs.menuCode.idToCallbackMap = new Map();
gdjs.menuCode.GDBlueButtonObjects1= [];
gdjs.menuCode.GDBlueButtonObjects2= [];
gdjs.menuCode.GDMENUObjects1= [];
gdjs.menuCode.GDMENUObjects2= [];
gdjs.menuCode.GDWELCOMEObjects1= [];
gdjs.menuCode.GDWELCOMEObjects2= [];
gdjs.menuCode.GDBlueButton2Objects1= [];
gdjs.menuCode.GDBlueButton2Objects2= [];
gdjs.menuCode.GDBlueButton3Objects1= [];
gdjs.menuCode.GDBlueButton3Objects2= [];
gdjs.menuCode.GDStar_9595Yellow_9595PowerupObjects1= [];
gdjs.menuCode.GDStar_9595Yellow_9595PowerupObjects2= [];
gdjs.menuCode.GDSoldierObjects1= [];
gdjs.menuCode.GDSoldierObjects2= [];
gdjs.menuCode.GDFireballObjects1= [];
gdjs.menuCode.GDFireballObjects2= [];
gdjs.menuCode.GDspikes1Objects1= [];
gdjs.menuCode.GDspikes1Objects2= [];
gdjs.menuCode.GDAreariesgoObjects1= [];
gdjs.menuCode.GDAreariesgoObjects2= [];
gdjs.menuCode.GDGreen_9595flagObjects1= [];
gdjs.menuCode.GDGreen_9595flagObjects2= [];
gdjs.menuCode.GDRevolverObjects1= [];
gdjs.menuCode.GDRevolverObjects2= [];
gdjs.menuCode.GDFire_9595BurningObjects1= [];
gdjs.menuCode.GDFire_9595BurningObjects2= [];
gdjs.menuCode.GDCat_95956Objects1= [];
gdjs.menuCode.GDCat_95956Objects2= [];
gdjs.menuCode.GDGold_9595CoinObjects1= [];
gdjs.menuCode.GDGold_9595CoinObjects2= [];
gdjs.menuCode.GDSOLDIERObjects1= [];
gdjs.menuCode.GDSOLDIERObjects2= [];
gdjs.menuCode.GDVIDASObjects1= [];
gdjs.menuCode.GDVIDASObjects2= [];
gdjs.menuCode.GDMONEDAS2Objects1= [];
gdjs.menuCode.GDMONEDAS2Objects2= [];
gdjs.menuCode.GDSUBVIDA2Objects1= [];
gdjs.menuCode.GDSUBVIDA2Objects2= [];
gdjs.menuCode.GDStar_9595DiamondObjects1= [];
gdjs.menuCode.GDStar_9595DiamondObjects2= [];
gdjs.menuCode.GDNewTiledSpriteObjects1= [];
gdjs.menuCode.GDNewTiledSpriteObjects2= [];
gdjs.menuCode.GDNarrow_9595ladderObjects1= [];
gdjs.menuCode.GDNarrow_9595ladderObjects2= [];
gdjs.menuCode.GDbloquefantasmaObjects1= [];
gdjs.menuCode.GDbloquefantasmaObjects2= [];
gdjs.menuCode.GDBullObjects1= [];
gdjs.menuCode.GDBullObjects2= [];
gdjs.menuCode.GDVIDAS_9595BULLObjects1= [];
gdjs.menuCode.GDVIDAS_9595BULLObjects2= [];
gdjs.menuCode.GDTRIGGER_9595DERECHAObjects1= [];
gdjs.menuCode.GDTRIGGER_9595DERECHAObjects2= [];
gdjs.menuCode.GDTRIGGER_9595IZQObjects1= [];
gdjs.menuCode.GDTRIGGER_9595IZQObjects2= [];
gdjs.menuCode.GDAlternative_9595castle_9595wallObjects1= [];
gdjs.menuCode.GDAlternative_9595castle_9595wallObjects2= [];
gdjs.menuCode.GDCactus_9595_95953_9595Objects1= [];
gdjs.menuCode.GDCactus_9595_95953_9595Objects2= [];
gdjs.menuCode.GDCrateObjects1= [];
gdjs.menuCode.GDCrateObjects2= [];
gdjs.menuCode.GDSpike_9595HeadObjects1= [];
gdjs.menuCode.GDSpike_9595HeadObjects2= [];
gdjs.menuCode.GDFire_9595BallObjects1= [];
gdjs.menuCode.GDFire_9595BallObjects2= [];
gdjs.menuCode.GDpeligroObjects1= [];
gdjs.menuCode.GDpeligroObjects2= [];
gdjs.menuCode.GDLineDarkJoystickObjects1= [];
gdjs.menuCode.GDLineDarkJoystickObjects2= [];
gdjs.menuCode.GDB_9595ButtonObjects1= [];
gdjs.menuCode.GDB_9595ButtonObjects2= [];
gdjs.menuCode.GDA_9595ButtonObjects1= [];
gdjs.menuCode.GDA_9595ButtonObjects2= [];
gdjs.menuCode.GDX_9595ButtonObjects1= [];
gdjs.menuCode.GDX_9595ButtonObjects2= [];
gdjs.menuCode.GDY_9595ButtonObjects1= [];
gdjs.menuCode.GDY_9595ButtonObjects2= [];
gdjs.menuCode.GDTarget_9595round_9595buttonObjects1= [];
gdjs.menuCode.GDTarget_9595round_9595buttonObjects2= [];
gdjs.menuCode.GDMENUObjects1= [];
gdjs.menuCode.GDMENUObjects2= [];


gdjs.menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.menuCode.GDBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDBlueButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDBlueButtonObjects1[k] = gdjs.menuCode.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "escena1", true);
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton2"), gdjs.menuCode.GDBlueButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDBlueButton2Objects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDBlueButton2Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDBlueButton2Objects1[k] = gdjs.menuCode.GDBlueButton2Objects1[i];
        ++k;
    }
}
gdjs.menuCode.GDBlueButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "escena2", true);
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton3"), gdjs.menuCode.GDBlueButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDBlueButton3Objects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDBlueButton3Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDBlueButton3Objects1[k] = gdjs.menuCode.GDBlueButton3Objects1[i];
        ++k;
    }
}
gdjs.menuCode.GDBlueButton3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "escena3", true);
}
elseEventsChainSatisfied = true;
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "3c3e01bd9abb195e473c32fb0822939512a1ae09c65a9f128cac144b726d3741_Circus of Freaks.aac", false, 100, 1);
}
elseEventsChainSatisfied = true;
}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDBlueButtonObjects1.length = 0;
gdjs.menuCode.GDBlueButtonObjects2.length = 0;
gdjs.menuCode.GDMENUObjects1.length = 0;
gdjs.menuCode.GDMENUObjects2.length = 0;
gdjs.menuCode.GDWELCOMEObjects1.length = 0;
gdjs.menuCode.GDWELCOMEObjects2.length = 0;
gdjs.menuCode.GDBlueButton2Objects1.length = 0;
gdjs.menuCode.GDBlueButton2Objects2.length = 0;
gdjs.menuCode.GDBlueButton3Objects1.length = 0;
gdjs.menuCode.GDBlueButton3Objects2.length = 0;
gdjs.menuCode.GDStar_9595Yellow_9595PowerupObjects1.length = 0;
gdjs.menuCode.GDStar_9595Yellow_9595PowerupObjects2.length = 0;
gdjs.menuCode.GDSoldierObjects1.length = 0;
gdjs.menuCode.GDSoldierObjects2.length = 0;
gdjs.menuCode.GDFireballObjects1.length = 0;
gdjs.menuCode.GDFireballObjects2.length = 0;
gdjs.menuCode.GDspikes1Objects1.length = 0;
gdjs.menuCode.GDspikes1Objects2.length = 0;
gdjs.menuCode.GDAreariesgoObjects1.length = 0;
gdjs.menuCode.GDAreariesgoObjects2.length = 0;
gdjs.menuCode.GDGreen_9595flagObjects1.length = 0;
gdjs.menuCode.GDGreen_9595flagObjects2.length = 0;
gdjs.menuCode.GDRevolverObjects1.length = 0;
gdjs.menuCode.GDRevolverObjects2.length = 0;
gdjs.menuCode.GDFire_9595BurningObjects1.length = 0;
gdjs.menuCode.GDFire_9595BurningObjects2.length = 0;
gdjs.menuCode.GDCat_95956Objects1.length = 0;
gdjs.menuCode.GDCat_95956Objects2.length = 0;
gdjs.menuCode.GDGold_9595CoinObjects1.length = 0;
gdjs.menuCode.GDGold_9595CoinObjects2.length = 0;
gdjs.menuCode.GDSOLDIERObjects1.length = 0;
gdjs.menuCode.GDSOLDIERObjects2.length = 0;
gdjs.menuCode.GDVIDASObjects1.length = 0;
gdjs.menuCode.GDVIDASObjects2.length = 0;
gdjs.menuCode.GDMONEDAS2Objects1.length = 0;
gdjs.menuCode.GDMONEDAS2Objects2.length = 0;
gdjs.menuCode.GDSUBVIDA2Objects1.length = 0;
gdjs.menuCode.GDSUBVIDA2Objects2.length = 0;
gdjs.menuCode.GDStar_9595DiamondObjects1.length = 0;
gdjs.menuCode.GDStar_9595DiamondObjects2.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.menuCode.GDNarrow_9595ladderObjects1.length = 0;
gdjs.menuCode.GDNarrow_9595ladderObjects2.length = 0;
gdjs.menuCode.GDbloquefantasmaObjects1.length = 0;
gdjs.menuCode.GDbloquefantasmaObjects2.length = 0;
gdjs.menuCode.GDBullObjects1.length = 0;
gdjs.menuCode.GDBullObjects2.length = 0;
gdjs.menuCode.GDVIDAS_9595BULLObjects1.length = 0;
gdjs.menuCode.GDVIDAS_9595BULLObjects2.length = 0;
gdjs.menuCode.GDTRIGGER_9595DERECHAObjects1.length = 0;
gdjs.menuCode.GDTRIGGER_9595DERECHAObjects2.length = 0;
gdjs.menuCode.GDTRIGGER_9595IZQObjects1.length = 0;
gdjs.menuCode.GDTRIGGER_9595IZQObjects2.length = 0;
gdjs.menuCode.GDAlternative_9595castle_9595wallObjects1.length = 0;
gdjs.menuCode.GDAlternative_9595castle_9595wallObjects2.length = 0;
gdjs.menuCode.GDCactus_9595_95953_9595Objects1.length = 0;
gdjs.menuCode.GDCactus_9595_95953_9595Objects2.length = 0;
gdjs.menuCode.GDCrateObjects1.length = 0;
gdjs.menuCode.GDCrateObjects2.length = 0;
gdjs.menuCode.GDSpike_9595HeadObjects1.length = 0;
gdjs.menuCode.GDSpike_9595HeadObjects2.length = 0;
gdjs.menuCode.GDFire_9595BallObjects1.length = 0;
gdjs.menuCode.GDFire_9595BallObjects2.length = 0;
gdjs.menuCode.GDpeligroObjects1.length = 0;
gdjs.menuCode.GDpeligroObjects2.length = 0;
gdjs.menuCode.GDLineDarkJoystickObjects1.length = 0;
gdjs.menuCode.GDLineDarkJoystickObjects2.length = 0;
gdjs.menuCode.GDB_9595ButtonObjects1.length = 0;
gdjs.menuCode.GDB_9595ButtonObjects2.length = 0;
gdjs.menuCode.GDA_9595ButtonObjects1.length = 0;
gdjs.menuCode.GDA_9595ButtonObjects2.length = 0;
gdjs.menuCode.GDX_9595ButtonObjects1.length = 0;
gdjs.menuCode.GDX_9595ButtonObjects2.length = 0;
gdjs.menuCode.GDY_9595ButtonObjects1.length = 0;
gdjs.menuCode.GDY_9595ButtonObjects2.length = 0;
gdjs.menuCode.GDTarget_9595round_9595buttonObjects1.length = 0;
gdjs.menuCode.GDTarget_9595round_9595buttonObjects2.length = 0;
gdjs.menuCode.GDMENUObjects1.length = 0;
gdjs.menuCode.GDMENUObjects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);
gdjs.menuCode.GDBlueButtonObjects1.length = 0;
gdjs.menuCode.GDBlueButtonObjects2.length = 0;
gdjs.menuCode.GDMENUObjects1.length = 0;
gdjs.menuCode.GDMENUObjects2.length = 0;
gdjs.menuCode.GDWELCOMEObjects1.length = 0;
gdjs.menuCode.GDWELCOMEObjects2.length = 0;
gdjs.menuCode.GDBlueButton2Objects1.length = 0;
gdjs.menuCode.GDBlueButton2Objects2.length = 0;
gdjs.menuCode.GDBlueButton3Objects1.length = 0;
gdjs.menuCode.GDBlueButton3Objects2.length = 0;
gdjs.menuCode.GDStar_9595Yellow_9595PowerupObjects1.length = 0;
gdjs.menuCode.GDStar_9595Yellow_9595PowerupObjects2.length = 0;
gdjs.menuCode.GDSoldierObjects1.length = 0;
gdjs.menuCode.GDSoldierObjects2.length = 0;
gdjs.menuCode.GDFireballObjects1.length = 0;
gdjs.menuCode.GDFireballObjects2.length = 0;
gdjs.menuCode.GDspikes1Objects1.length = 0;
gdjs.menuCode.GDspikes1Objects2.length = 0;
gdjs.menuCode.GDAreariesgoObjects1.length = 0;
gdjs.menuCode.GDAreariesgoObjects2.length = 0;
gdjs.menuCode.GDGreen_9595flagObjects1.length = 0;
gdjs.menuCode.GDGreen_9595flagObjects2.length = 0;
gdjs.menuCode.GDRevolverObjects1.length = 0;
gdjs.menuCode.GDRevolverObjects2.length = 0;
gdjs.menuCode.GDFire_9595BurningObjects1.length = 0;
gdjs.menuCode.GDFire_9595BurningObjects2.length = 0;
gdjs.menuCode.GDCat_95956Objects1.length = 0;
gdjs.menuCode.GDCat_95956Objects2.length = 0;
gdjs.menuCode.GDGold_9595CoinObjects1.length = 0;
gdjs.menuCode.GDGold_9595CoinObjects2.length = 0;
gdjs.menuCode.GDSOLDIERObjects1.length = 0;
gdjs.menuCode.GDSOLDIERObjects2.length = 0;
gdjs.menuCode.GDVIDASObjects1.length = 0;
gdjs.menuCode.GDVIDASObjects2.length = 0;
gdjs.menuCode.GDMONEDAS2Objects1.length = 0;
gdjs.menuCode.GDMONEDAS2Objects2.length = 0;
gdjs.menuCode.GDSUBVIDA2Objects1.length = 0;
gdjs.menuCode.GDSUBVIDA2Objects2.length = 0;
gdjs.menuCode.GDStar_9595DiamondObjects1.length = 0;
gdjs.menuCode.GDStar_9595DiamondObjects2.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.menuCode.GDNarrow_9595ladderObjects1.length = 0;
gdjs.menuCode.GDNarrow_9595ladderObjects2.length = 0;
gdjs.menuCode.GDbloquefantasmaObjects1.length = 0;
gdjs.menuCode.GDbloquefantasmaObjects2.length = 0;
gdjs.menuCode.GDBullObjects1.length = 0;
gdjs.menuCode.GDBullObjects2.length = 0;
gdjs.menuCode.GDVIDAS_9595BULLObjects1.length = 0;
gdjs.menuCode.GDVIDAS_9595BULLObjects2.length = 0;
gdjs.menuCode.GDTRIGGER_9595DERECHAObjects1.length = 0;
gdjs.menuCode.GDTRIGGER_9595DERECHAObjects2.length = 0;
gdjs.menuCode.GDTRIGGER_9595IZQObjects1.length = 0;
gdjs.menuCode.GDTRIGGER_9595IZQObjects2.length = 0;
gdjs.menuCode.GDAlternative_9595castle_9595wallObjects1.length = 0;
gdjs.menuCode.GDAlternative_9595castle_9595wallObjects2.length = 0;
gdjs.menuCode.GDCactus_9595_95953_9595Objects1.length = 0;
gdjs.menuCode.GDCactus_9595_95953_9595Objects2.length = 0;
gdjs.menuCode.GDCrateObjects1.length = 0;
gdjs.menuCode.GDCrateObjects2.length = 0;
gdjs.menuCode.GDSpike_9595HeadObjects1.length = 0;
gdjs.menuCode.GDSpike_9595HeadObjects2.length = 0;
gdjs.menuCode.GDFire_9595BallObjects1.length = 0;
gdjs.menuCode.GDFire_9595BallObjects2.length = 0;
gdjs.menuCode.GDpeligroObjects1.length = 0;
gdjs.menuCode.GDpeligroObjects2.length = 0;
gdjs.menuCode.GDLineDarkJoystickObjects1.length = 0;
gdjs.menuCode.GDLineDarkJoystickObjects2.length = 0;
gdjs.menuCode.GDB_9595ButtonObjects1.length = 0;
gdjs.menuCode.GDB_9595ButtonObjects2.length = 0;
gdjs.menuCode.GDA_9595ButtonObjects1.length = 0;
gdjs.menuCode.GDA_9595ButtonObjects2.length = 0;
gdjs.menuCode.GDX_9595ButtonObjects1.length = 0;
gdjs.menuCode.GDX_9595ButtonObjects2.length = 0;
gdjs.menuCode.GDY_9595ButtonObjects1.length = 0;
gdjs.menuCode.GDY_9595ButtonObjects2.length = 0;
gdjs.menuCode.GDTarget_9595round_9595buttonObjects1.length = 0;
gdjs.menuCode.GDTarget_9595round_9595buttonObjects2.length = 0;
gdjs.menuCode.GDMENUObjects1.length = 0;
gdjs.menuCode.GDMENUObjects2.length = 0;


return;

}

gdjs['menuCode'] = gdjs.menuCode;
