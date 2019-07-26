cc.Class({
    extends: cc.Component,

    properties: {
        // 声明进度条
        progress: cc.ProgressBar,
        // 进度显示文本
        text: cc.Label
    },

    start() {

        this.text.string = '0' + '%';
        this.progress.progress = 0;
        cc.loader.downloader.loadSubpackage('res', function(err) {
            if (err) {
                return console.error(err);
            }
        });

        cc.loader.downloader.loadSubpackage('resources', function(err) {
            if (err) {
                return console.error(err);
            }
        });

        cc.director.preloadScene('Scene1', (completedCount, totalCount, item) => {
            let p = completedCount / totalCount;
            this.progress.progress = p;
            this.text.string = parseInt(p * 100) + '%';

            console.log(this.text.string);
        }, () => {
            cc.director.loadScene('Scene1');
        });
    },

});