gdjs.WINNERCode = {};
gdjs.WINNERCode.localVariables = [];
gdjs.WINNERCode.idToCallbackMap = new Map();
gdjs.WINNERCode.GDNewTextObjects1= [];
gdjs.WINNERCode.GDNewTextObjects2= [];
gdjs.WINNERCode.GDStar_9595Yellow_9595PowerupObjects1= [];
gdjs.WINNERCode.GDStar_9595Yellow_9595PowerupObjects2= [];
gdjs.WINNERCode.GDSoldierObjects1= [];
gdjs.WINNERCode.GDSoldierObjects2= [];
gdjs.WINNERCode.GDFireballObjects1= [];
gdjs.WINNERCode.GDFireballObjects2= [];
gdjs.WINNERCode.GDspikes1Objects1= [];
gdjs.WINNERCode.GDspikes1Objects2= [];
gdjs.WINNERCode.GDAreariesgoObjects1= [];
gdjs.WINNERCode.GDAreariesgoObjects2= [];
gdjs.WINNERCode.GDGreen_9595flagObjects1= [];
gdjs.WINNERCode.GDGreen_9595flagObjects2= [];
gdjs.WINNERCode.GDRevolverObjects1= [];
gdjs.WINNERCode.GDRevolverObjects2= [];
gdjs.WINNERCode.GDFire_9595BurningObjects1= [];
gdjs.WINNERCode.GDFire_9595BurningObjects2= [];
gdjs.WINNERCode.GDCat_95956Objects1= [];
gdjs.WINNERCode.GDCat_95956Objects2= [];
gdjs.WINNERCode.GDGold_9595CoinObjects1= [];
gdjs.WINNERCode.GDGold_9595CoinObjects2= [];
gdjs.WINNERCode.GDSOLDIERObjects1= [];
gdjs.WINNERCode.GDSOLDIERObjects2= [];
gdjs.WINNERCode.GDVIDASObjects1= [];
gdjs.WINNERCode.GDVIDASObjects2= [];
gdjs.WINNERCode.GDMONEDAS2Objects1= [];
gdjs.WINNERCode.GDMONEDAS2Objects2= [];
gdjs.WINNERCode.GDSUBVIDA2Objects1= [];
gdjs.WINNERCode.GDSUBVIDA2Objects2= [];
gdjs.WINNERCode.GDStar_9595DiamondObjects1= [];
gdjs.WINNERCode.GDStar_9595DiamondObjects2= [];
gdjs.WINNERCode.GDNewTiledSpriteObjects1= [];
gdjs.WINNERCode.GDNewTiledSpriteObjects2= [];
gdjs.WINNERCode.GDNarrow_9595ladderObjects1= [];
gdjs.WINNERCode.GDNarrow_9595ladderObjects2= [];
gdjs.WINNERCode.GDbloquefantasmaObjects1= [];
gdjs.WINNERCode.GDbloquefantasmaObjects2= [];
gdjs.WINNERCode.GDBullObjects1= [];
gdjs.WINNERCode.GDBullObjects2= [];
gdjs.WINNERCode.GDVIDAS_9595BULLObjects1= [];
gdjs.WINNERCode.GDVIDAS_9595BULLObjects2= [];
gdjs.WINNERCode.GDTRIGGER_9595DERECHAObjects1= [];
gdjs.WINNERCode.GDTRIGGER_9595DERECHAObjects2= [];
gdjs.WINNERCode.GDTRIGGER_9595IZQObjects1= [];
gdjs.WINNERCode.GDTRIGGER_9595IZQObjects2= [];
gdjs.WINNERCode.GDAlternative_9595castle_9595wallObjects1= [];
gdjs.WINNERCode.GDAlternative_9595castle_9595wallObjects2= [];
gdjs.WINNERCode.GDCactus_9595_95953_9595Objects1= [];
gdjs.WINNERCode.GDCactus_9595_95953_9595Objects2= [];
gdjs.WINNERCode.GDCrateObjects1= [];
gdjs.WINNERCode.GDCrateObjects2= [];
gdjs.WINNERCode.GDSpike_9595HeadObjects1= [];
gdjs.WINNERCode.GDSpike_9595HeadObjects2= [];
gdjs.WINNERCode.GDFire_9595BallObjects1= [];
gdjs.WINNERCode.GDFire_9595BallObjects2= [];
gdjs.WINNERCode.GDpeligroObjects1= [];
gdjs.WINNERCode.GDpeligroObjects2= [];
gdjs.WINNERCode.GDLineDarkJoystickObjects1= [];
gdjs.WINNERCode.GDLineDarkJoystickObjects2= [];
gdjs.WINNERCode.GDB_9595ButtonObjects1= [];
gdjs.WINNERCode.GDB_9595ButtonObjects2= [];
gdjs.WINNERCode.GDA_9595ButtonObjects1= [];
gdjs.WINNERCode.GDA_9595ButtonObjects2= [];
gdjs.WINNERCode.GDX_9595ButtonObjects1= [];
gdjs.WINNERCode.GDX_9595ButtonObjects2= [];
gdjs.WINNERCode.GDY_9595ButtonObjects1= [];
gdjs.WINNERCode.GDY_9595ButtonObjects2= [];
gdjs.WINNERCode.GDTarget_9595round_9595buttonObjects1= [];
gdjs.WINNERCode.GDTarget_9595round_9595buttonObjects2= [];
gdjs.WINNERCode.GDMENUObjects1= [];
gdjs.WINNERCode.GDMENUObjects2= [];


gdjs.WINNERCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MENU"), gdjs.WINNERCode.GDMENUObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WINNERCode.GDMENUObjects1.length;i<l;++i) {
    if ( gdjs.WINNERCode.GDMENUObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.WINNERCode.GDMENUObjects1[k] = gdjs.WINNERCode.GDMENUObjects1[i];
        ++k;
    }
}
gdjs.WINNERCode.GDMENUObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}
elseEventsChainSatisfied = true;
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "ec411ed96e2fe3b8b9b21d3d5def530f0f3e545630dad141bfed9c8143568119_07 - Downtown Destruction.aac", true, 100, 1);
}
elseEventsChainSatisfied = true;
}

}


};

gdjs.WINNERCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WINNERCode.GDNewTextObjects1.length = 0;
gdjs.WINNERCode.GDNewTextObjects2.length = 0;
gdjs.WINNERCode.GDStar_9595Yellow_9595PowerupObjects1.length = 0;
gdjs.WINNERCode.GDStar_9595Yellow_9595PowerupObjects2.length = 0;
gdjs.WINNERCode.GDSoldierObjects1.length = 0;
gdjs.WINNERCode.GDSoldierObjects2.length = 0;
gdjs.WINNERCode.GDFireballObjects1.length = 0;
gdjs.WINNERCode.GDFireballObjects2.length = 0;
gdjs.WINNERCode.GDspikes1Objects1.length = 0;
gdjs.WINNERCode.GDspikes1Objects2.length = 0;
gdjs.WINNERCode.GDAreariesgoObjects1.length = 0;
gdjs.WINNERCode.GDAreariesgoObjects2.length = 0;
gdjs.WINNERCode.GDGreen_9595flagObjects1.length = 0;
gdjs.WINNERCode.GDGreen_9595flagObjects2.length = 0;
gdjs.WINNERCode.GDRevolverObjects1.length = 0;
gdjs.WINNERCode.GDRevolverObjects2.length = 0;
gdjs.WINNERCode.GDFire_9595BurningObjects1.length = 0;
gdjs.WINNERCode.GDFire_9595BurningObjects2.length = 0;
gdjs.WINNERCode.GDCat_95956Objects1.length = 0;
gdjs.WINNERCode.GDCat_95956Objects2.length = 0;
gdjs.WINNERCode.GDGold_9595CoinObjects1.length = 0;
gdjs.WINNERCode.GDGold_9595CoinObjects2.length = 0;
gdjs.WINNERCode.GDSOLDIERObjects1.length = 0;
gdjs.WINNERCode.GDSOLDIERObjects2.length = 0;
gdjs.WINNERCode.GDVIDASObjects1.length = 0;
gdjs.WINNERCode.GDVIDASObjects2.length = 0;
gdjs.WINNERCode.GDMONEDAS2Objects1.length = 0;
gdjs.WINNERCode.GDMONEDAS2Objects2.length = 0;
gdjs.WINNERCode.GDSUBVIDA2Objects1.length = 0;
gdjs.WINNERCode.GDSUBVIDA2Objects2.length = 0;
gdjs.WINNERCode.GDStar_9595DiamondObjects1.length = 0;
gdjs.WINNERCode.GDStar_9595DiamondObjects2.length = 0;
gdjs.WINNERCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.WINNERCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.WINNERCode.GDNarrow_9595ladderObjects1.length = 0;
gdjs.WINNERCode.GDNarrow_9595ladderObjects2.length = 0;
gdjs.WINNERCode.GDbloquefantasmaObjects1.length = 0;
gdjs.WINNERCode.GDbloquefantasmaObjects2.length = 0;
gdjs.WINNERCode.GDBullObjects1.length = 0;
gdjs.WINNERCode.GDBullObjects2.length = 0;
gdjs.WINNERCode.GDVIDAS_9595BULLObjects1.length = 0;
gdjs.WINNERCode.GDVIDAS_9595BULLObjects2.length = 0;
gdjs.WINNERCode.GDTRIGGER_9595DERECHAObjects1.length = 0;
gdjs.WINNERCode.GDTRIGGER_9595DERECHAObjects2.length = 0;
gdjs.WINNERCode.GDTRIGGER_9595IZQObjects1.length = 0;
gdjs.WINNERCode.GDTRIGGER_9595IZQObjects2.length = 0;
gdjs.WINNERCode.GDAlternative_9595castle_9595wallObjects1.length = 0;
gdjs.WINNERCode.GDAlternative_9595castle_9595wallObjects2.length = 0;
gdjs.WINNERCode.GDCactus_9595_95953_9595Objects1.length = 0;
gdjs.WINNERCode.GDCactus_9595_95953_9595Objects2.length = 0;
gdjs.WINNERCode.GDCrateObjects1.length = 0;
gdjs.WINNERCode.GDCrateObjects2.length = 0;
gdjs.WINNERCode.GDSpike_9595HeadObjects1.length = 0;
gdjs.WINNERCode.GDSpike_9595HeadObjects2.length = 0;
gdjs.WINNERCode.GDFire_9595BallObjects1.length = 0;
gdjs.WINNERCode.GDFire_9595BallObjects2.length = 0;
gdjs.WINNERCode.GDpeligroObjects1.length = 0;
gdjs.WINNERCode.GDpeligroObjects2.length = 0;
gdjs.WINNERCode.GDLineDarkJoystickObjects1.length = 0;
gdjs.WINNERCode.GDLineDarkJoystickObjects2.length = 0;
gdjs.WINNERCode.GDB_9595ButtonObjects1.length = 0;
gdjs.WINNERCode.GDB_9595ButtonObjects2.length = 0;
gdjs.WINNERCode.GDA_9595ButtonObjects1.length = 0;
gdjs.WINNERCode.GDA_9595ButtonObjects2.length = 0;
gdjs.WINNERCode.GDX_9595ButtonObjects1.length = 0;
gdjs.WINNERCode.GDX_9595ButtonObjects2.length = 0;
gdjs.WINNERCode.GDY_9595ButtonObjects1.length = 0;
gdjs.WINNERCode.GDY_9595ButtonObjects2.length = 0;
gdjs.WINNERCode.GDTarget_9595round_9595buttonObjects1.length = 0;
gdjs.WINNERCode.GDTarget_9595round_9595buttonObjects2.length = 0;
gdjs.WINNERCode.GDMENUObjects1.length = 0;
gdjs.WINNERCode.GDMENUObjects2.length = 0;

gdjs.WINNERCode.eventsList0(runtimeScene);
gdjs.WINNERCode.GDNewTextObjects1.length = 0;
gdjs.WINNERCode.GDNewTextObjects2.length = 0;
gdjs.WINNERCode.GDStar_9595Yellow_9595PowerupObjects1.length = 0;
gdjs.WINNERCode.GDStar_9595Yellow_9595PowerupObjects2.length = 0;
gdjs.WINNERCode.GDSoldierObjects1.length = 0;
gdjs.WINNERCode.GDSoldierObjects2.length = 0;
gdjs.WINNERCode.GDFireballObjects1.length = 0;
gdjs.WINNERCode.GDFireballObjects2.length = 0;
gdjs.WINNERCode.GDspikes1Objects1.length = 0;
gdjs.WINNERCode.GDspikes1Objects2.length = 0;
gdjs.WINNERCode.GDAreariesgoObjects1.length = 0;
gdjs.WINNERCode.GDAreariesgoObjects2.length = 0;
gdjs.WINNERCode.GDGreen_9595flagObjects1.length = 0;
gdjs.WINNERCode.GDGreen_9595flagObjects2.length = 0;
gdjs.WINNERCode.GDRevolverObjects1.length = 0;
gdjs.WINNERCode.GDRevolverObjects2.length = 0;
gdjs.WINNERCode.GDFire_9595BurningObjects1.length = 0;
gdjs.WINNERCode.GDFire_9595BurningObjects2.length = 0;
gdjs.WINNERCode.GDCat_95956Objects1.length = 0;
gdjs.WINNERCode.GDCat_95956Objects2.length = 0;
gdjs.WINNERCode.GDGold_9595CoinObjects1.length = 0;
gdjs.WINNERCode.GDGold_9595CoinObjects2.length = 0;
gdjs.WINNERCode.GDSOLDIERObjects1.length = 0;
gdjs.WINNERCode.GDSOLDIERObjects2.length = 0;
gdjs.WINNERCode.GDVIDASObjects1.length = 0;
gdjs.WINNERCode.GDVIDASObjects2.length = 0;
gdjs.WINNERCode.GDMONEDAS2Objects1.length = 0;
gdjs.WINNERCode.GDMONEDAS2Objects2.length = 0;
gdjs.WINNERCode.GDSUBVIDA2Objects1.length = 0;
gdjs.WINNERCode.GDSUBVIDA2Objects2.length = 0;
gdjs.WINNERCode.GDStar_9595DiamondObjects1.length = 0;
gdjs.WINNERCode.GDStar_9595DiamondObjects2.length = 0;
gdjs.WINNERCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.WINNERCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.WINNERCode.GDNarrow_9595ladderObjects1.length = 0;
gdjs.WINNERCode.GDNarrow_9595ladderObjects2.length = 0;
gdjs.WINNERCode.GDbloquefantasmaObjects1.length = 0;
gdjs.WINNERCode.GDbloquefantasmaObjects2.length = 0;
gdjs.WINNERCode.GDBullObjects1.length = 0;
gdjs.WINNERCode.GDBullObjects2.length = 0;
gdjs.WINNERCode.GDVIDAS_9595BULLObjects1.length = 0;
gdjs.WINNERCode.GDVIDAS_9595BULLObjects2.length = 0;
gdjs.WINNERCode.GDTRIGGER_9595DERECHAObjects1.length = 0;
gdjs.WINNERCode.GDTRIGGER_9595DERECHAObjects2.length = 0;
gdjs.WINNERCode.GDTRIGGER_9595IZQObjects1.length = 0;
gdjs.WINNERCode.GDTRIGGER_9595IZQObjects2.length = 0;
gdjs.WINNERCode.GDAlternative_9595castle_9595wallObjects1.length = 0;
gdjs.WINNERCode.GDAlternative_9595castle_9595wallObjects2.length = 0;
gdjs.WINNERCode.GDCactus_9595_95953_9595Objects1.length = 0;
gdjs.WINNERCode.GDCactus_9595_95953_9595Objects2.length = 0;
gdjs.WINNERCode.GDCrateObjects1.length = 0;
gdjs.WINNERCode.GDCrateObjects2.length = 0;
gdjs.WINNERCode.GDSpike_9595HeadObjects1.length = 0;
gdjs.WINNERCode.GDSpike_9595HeadObjects2.length = 0;
gdjs.WINNERCode.GDFire_9595BallObjects1.length = 0;
gdjs.WINNERCode.GDFire_9595BallObjects2.length = 0;
gdjs.WINNERCode.GDpeligroObjects1.length = 0;
gdjs.WINNERCode.GDpeligroObjects2.length = 0;
gdjs.WINNERCode.GDLineDarkJoystickObjects1.length = 0;
gdjs.WINNERCode.GDLineDarkJoystickObjects2.length = 0;
gdjs.WINNERCode.GDB_9595ButtonObjects1.length = 0;
gdjs.WINNERCode.GDB_9595ButtonObjects2.length = 0;
gdjs.WINNERCode.GDA_9595ButtonObjects1.length = 0;
gdjs.WINNERCode.GDA_9595ButtonObjects2.length = 0;
gdjs.WINNERCode.GDX_9595ButtonObjects1.length = 0;
gdjs.WINNERCode.GDX_9595ButtonObjects2.length = 0;
gdjs.WINNERCode.GDY_9595ButtonObjects1.length = 0;
gdjs.WINNERCode.GDY_9595ButtonObjects2.length = 0;
gdjs.WINNERCode.GDTarget_9595round_9595buttonObjects1.length = 0;
gdjs.WINNERCode.GDTarget_9595round_9595buttonObjects2.length = 0;
gdjs.WINNERCode.GDMENUObjects1.length = 0;
gdjs.WINNERCode.GDMENUObjects2.length = 0;


return;

}

gdjs['WINNERCode'] = gdjs.WINNERCode;
