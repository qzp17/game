cc.Class({


    extends: cc.Component,

    properties: {

        mPrefab: {

            default: null,

            type: cc.Prefab

        },


        mbulletPool: {

            default: null,

            type: cc.Node
        },


        mnpc: {

            default: null,

            type: cc.Node

        },


    },


    start() {

        this.schedule(function() {
            if (this.mnpc.active == true) {
                var bullet = cc.instantiate(this.mPrefab);
                var bx = this.mnpc.x;
                var by = this.mnpc.y + 30;
                bullet.setPosition(bx, by)
                this.mbulletPool.addChild(bullet);
            }
        }, 0.5);

    },
    update(dt) {

    },

});