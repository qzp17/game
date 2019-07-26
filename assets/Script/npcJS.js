var gamedata = require("gamedata");

cc.Class({
    extends: cc.Component,

    properties: {

        weapon: cc.Node,

    },



    start() {

    },



    onLoad() {

        //节点初始位置,每次触摸结束更新

        this.nodePos = this.node.getPosition();

        //触摸监听(this.node.parent是屏幕)

        //想达到按住节点，节点才能移动的效果

        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);

        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);

        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);


    },



    //触摸移动；

    onTouchMove(event) {

        var self = this;

        var touches = event.getTouches();

        //触摸刚开始的位置

        var oldPos = self.node.parent.convertToNodeSpaceAR(touches[0].getStartLocation());

        //触摸时不断变更的位置

        var newPos = self.node.parent.convertToNodeSpaceAR(touches[0].getLocation());



        //var subPos = cc.pSub(oldPos,newPos); 1.X版本是cc.pSub



        var subPos = oldPos.sub(newPos); // 2.X版本是 p1.sub(p2);



        self.node.x = self.nodePos.x - subPos.x;

        self.node.y = self.nodePos.y - subPos.y;



        // 控制节点移不出屏幕; 

        var minX = -self.node.parent.width / 2 + self.node.width / 2; //最小X坐标；

        var maxX = Math.abs(minX);

        var minY = -self.node.parent.height / 2 + self.node.height / 2; //最小Y坐标；

        var maxY = Math.abs(minY);

        var nPos = self.node.getPosition(); //节点实时坐标；



        if (nPos.x < minX) {

            nPos.x = minX;

        };

        if (nPos.x > maxX) {

            nPos.x = maxX;

        };

        if (nPos.y < minY) {

            nPos.y = minY;

        };

        if (nPos.y > maxY) {

            nPos.y = maxY;

        };

        self.node.setPosition(nPos);

    },

    onTouchEnd() {

        this.nodePos = this.node.getPosition(); //获取触摸结束之后的node坐标；

    },

    onTouchCancel: function() {

        this.nodePos = this.node.getPosition(); //获取触摸结束之后的node坐标；

    },


    onCollisionEnter: function(other, self) {

        this.node.active = false;
        var rem = cc.removeSelf();
        other.node.runAction(rem);
        gamedata.instance.npc = false;
    },

});