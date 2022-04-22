export default class TrickImg extends Laya.Image {
    constructor() {
        super();
        this.init();
    }

    private trickImgChildArr: Laya.Image[][];

    /**
     * 初始化砖块
     */
    init() {
        this.width = 160;
        this.height = 160;
        this.pos(0, 0);
        this.skin = "";
        this.trickImgChildArr = [];

        for (let i = 0; i < 4; i++) {
            this.trickImgChildArr.push([]);
            for (let j = 0; j < 4; j++) {
                let img = new Laya.Image();
                img.width = 40;
                img.height = 40;
                img.skin = "";
                this.addChild(img);
                img.pos(j * 40, i * 40);
                this.trickImgChildArr[i][j] = img;
            }
        }
    }

    /**
     * 根据二维数组旋转砖块
     */
    rotateBy2dArr(currentTrick: number[][]) {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (currentTrick[j][i] == 1) {
                    this.trickImgChildArr[j][i].skin = "test/back_poker.png";
                } else {
                    this.trickImgChildArr[j][i].skin = "";
                }
            }
        }
    }
}