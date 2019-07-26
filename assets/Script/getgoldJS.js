var gamedata = require("gamedata");


cc.Class({
    extends: cc.Component,

    properties: {

    },

    start() {


    },

    update(dt) {
        this.node.string = "获得金币" + gamedata.instance.score / 10;
    },
});