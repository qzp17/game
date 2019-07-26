var gamedata = require("gamedata");

cc.Class({
    extends: cc.Component,

    properties: {

    },


    start() {


    },
    changeScene1() {
        cc.director.loadScene("Scene2");
        gamedata.instance.npc = true;
        gamedata.instance.score = 0;

    },

    changeScene2() {
        cc.director.loadScene("Scene1");
        gamedata.instance.npc = false;
        gamedata.instance.gold = gamedata.instance.gold + Math.floor(gamedata.instance.score / 10);
    },

    // update (dt) {},
});