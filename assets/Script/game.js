const Npc = require("npcJS");
var gamedata = require("gamedata");


cc.Class({
    extends: cc.Component,
    properties: {
        npc: Npc,
    },

    onLoad: function() {

        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        // manager.enabledDebugDraw = true;
    },

    start: function() {

    },

    update: function(dt) {
        var lab = this.getComponentInChildren(cc.Label);

        var bot = this.getComponentInChildren(cc.Button);

        if (gamedata.instance.npc) {
            bot.node.active = false;

            lab.string = "得分:" + gamedata.instance.score;
            gamedata.instance.time++;

        }
        if (!gamedata.instance.npc) {
            bot.node.active = true;
            lab.string = "获得金币:" + Math.floor(gamedata.instance.score / 10);
            lab.node.setPosition(0, 150);
        }

    },
});