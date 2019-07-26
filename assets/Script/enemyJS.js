var gamedata = require("gamedata");

cc.Class({
    extends: cc.Component,

    properties: {

        mSpeed: { default: 1, type: cc.Float, },
        mhealth: { default: null },
        mscore: { default: null },
        style: { default: null, type: cc.String },
        bodystyle: { default: null, type: cc.String },

    },


    start() {

        var enemyhp = gamedata.instance.bulletdamage;
        this.mhealth = Math.floor(Math.random() * enemyhp * 5);
        this.mscore = this.mhealth;
        var s = Math.floor(Math.random() * 25 + 1);
        var b = Math.floor(Math.random() * 37 + 1);
        this.style = "" + s;
        this.bodystyle = "" + b;
        cc.loader.loadRes(this.style, cc.SpriteFrame, function(err, spriteFrame) {
            this.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        }.bind(this));

        cc.loader.loadRes(this.bodystyle, cc.SpriteFrame, function(err, spriteFrame) {
            this.node.getComponentInChildren(cc.Sprite).spriteFrame = spriteFrame;
        }.bind(this));

        this.node.setPosition((Math.random() * 640 - 320), 800);
        var x = this.node.x;
        var spawn = cc.spawn(
            cc.moveTo(8, x, -700),
            cc.rotateBy(10, 360),
        );
        this.node.runAction(spawn);
        var lab = this.getComponentInChildren(cc.Label);
        var rt = cc.rotateBy(10, -360);
        lab.node.runAction(rt);
    },

    onCollisionEnter: function(other, self) {

        this.mhealth -= gamedata.instance.bulletdamage;
    },

    update(dt) {
        var lab = this.getComponentInChildren(cc.Label);
        lab.string = this.mhealth;
        if (this.node.y <= -600) {
            var rem = cc.removeSelf();
            this.node.runAction(rem);

        }
        if (this.mhealth <= 0) {
            var rem = cc.removeSelf();
            this.node.runAction(rem);
            gamedata.instance.score += this.mscore;
        }

    },


});