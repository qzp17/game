var gamedata = require("gamedata");

cc.Class({
    extends: cc.Component,

    properties: {
        bulletspeed: {
            default: 2,
            type: cc.Integer
        },
        bulletstyle: {
            default: null,
            type: cc.String
        }
    },


    start() {
        var bd = gamedata.instance.bulletdamage;

        if (bd <= 3) this.bulletdamage = "" + 99;
        if (bd == 4) this.bulletdamage = "" + 98;
        if (bd == 5) this.bulletdamage = "" + 97;
        if (bd == 6) this.bulletdamage = "" + 96;
        if (bd > 6) this.bulletdamage = "" + 95;

        cc.loader.loadRes(this.bulletdamage, cc.SpriteFrame, function(err, spriteFrame) {
            this.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        }.bind(this));

        var acation = cc.moveTo(this.bulletspeed, this.node.x, 700);
        this.node.runAction(acation);
    },


    onCollisionEnter: function(other, self) {

        var rem = cc.removeSelf();
        self.node.runAction(rem);
    },


    update(dt) {

        if (this.node.y >= 600) {
            var rem = cc.removeSelf();
            this.node.runAction(rem);

        }
    },
});