import Tetris from "./Tetris";

export default class TetrisGame extends Laya.Scene {
    constructor() {
        super();
    }

    public img_tetrisbg: Laya.Image;

    originPos: Laya.Point = new Laya.Point(0, 0); // 鼠标按下的位置
    originPos2: Laya.Point = new Laya.Point(0, 0);
    disX: number; // 移动的水平距离
    disY: number;
    disX2: number;
    disY2: number;
    // minDis: number = 80; // 滑动最小距离 
    dir: string = "";



    onAwake(): void {
        Laya.timer.frameLoop(1, this, this.onUpdate);

        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouse);
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouse);

        let tetris = new Tetris();
        tetris.init(this.img_tetrisbg);
    }

    onUpdate() {

    }

    onMouse(e: Laya.Event) {
        let x: number = Laya.stage.mouseX;
        let y: number = Laya.stage.mouseY;
        switch (e.type) {
            case Laya.Event.MOUSE_DOWN:
                this.dir = "";
                this.originPos.setTo(x, y);
                this.originPos2.setTo(x, y);
                break;
            case Laya.Event.MOUSE_UP:

                break;
            case Laya.Event.MOUSE_MOVE:
                this.disX = x - this.originPos.x;
                this.disY = y - this.originPos.y;
                if (Math.abs(this.disY) >= Math.abs(this.disX) && this.dir == "") {
                    this.dir = "UD";
                } else if (Math.abs(this.disX) > Math.abs(this.disY) && this.dir == "") {
                    this.dir = "LR";
                }

                this.disX2 = x - this.originPos2.x;
                this.disY2 = y - this.originPos2.y;
                if (this.dir == "LR") {
                    if (this.disX2 > 0) {
                        console.log("right");
                    } else if (this.disX2 < 0) {
                        console.log("left");
                    }
                } else if (this.dir == "UD") {
                    if (this.disY2 > 0) {
                        console.log("down");
                    } else if (this.disY2 < 0) {
                        console.log("up");
                    }
                }
                this.originPos2.x = x;
                this.originPos2.y = y;
                break;
        }
    }
}