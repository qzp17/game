var gamedata = require("gamedata");

cc.Class({


    extends: cc.Component,


    properties: {

        mPrefab2: {


            default: null,

            type: cc.Prefab


        },
        menemyPool: {

            default: null,

            type: cc.Node
        },

        mnpc: {

            default: null,

            type: cc.Node

        },


    },

    start() {

        this.createenemy = function() {
            var enemy = cc.instantiate(this.mPrefab2);
            enemy.x = Math.random() * 640 - 320;
            enemy.y = 800;
            this.menemyPool.addChild(enemy);
        }
        this.schedule(this.createenemy, 2 + Math.random());
    },


    update(dt) {

        if (this.mnpc.active == false) {
            this.unschedule(this.createenemy);
        }
    },


});