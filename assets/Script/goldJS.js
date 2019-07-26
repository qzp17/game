var gamedata = require("gamedata");

cc.Class({
    extends: cc.Component,

    properties: {

    },


    start() {
        var lab = this.getComponentInChildren(cc.Label);
        lab.string = gamedata.instance.gold;
    },

    update(dt) {
        var lab = this.getComponentInChildren(cc.Label);
        lab.string = gamedata.instance.gold;
    }
});