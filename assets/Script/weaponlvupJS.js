var gamedata = require("gamedata");

cc.Class({
    extends: cc.Component,

    properties: {

    },



    start() {

    },

    wplvup: function() {
        if (gamedata.instance.gold - gamedata.instance.bulletdamage * 10 >= 0) {
            gamedata.instance.gold -= gamedata.instance.bulletdamage * 10;
            gamedata.instance.bulletdamage++;
        }
    },

    update() {

        var lab = this.getComponentInChildren(cc.Label);
        lab.string = "武器伤害：" + gamedata.instance.bulletdamage;
    }

});