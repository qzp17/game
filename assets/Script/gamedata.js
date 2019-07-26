var GameData = cc.Class({



    extends: cc.Component,



    statics: {

        instance: null

    },



    properties: {

        gold: 100,

        score: 0, //得分

        time: 0, //时间

        bulletdamage: 1,

        npc: true

    },

});


GameData.instance = new GameData();



module.exports = GameData;