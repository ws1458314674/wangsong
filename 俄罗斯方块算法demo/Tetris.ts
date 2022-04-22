// import TrickImg from "./TrickImg";

export default class Tetris {

    // #region 定义砖块int[i, j, y, x] Tricks: i为那块砖,j为状态,y为列, x为行
    private Tricks = [
        [
            [
                [1, 0, 0, 0],
                [1, 0, 0, 0],
                [1, 0, 0, 0],
                [1, 0, 0, 0]
            ],
            [
                [1, 1, 1, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            [
                [1, 0, 0, 0],
                [1, 0, 0, 0],
                [1, 0, 0, 0],
                [1, 0, 0, 0]
            ],
            [
                [1, 1, 1, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ]
        ],
        [
            [
                [1, 1, 0, 0],
                [1, 1, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            [
                [1, 1, 0, 0],
                [1, 1, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            [
                [1, 1, 0, 0],
                [1, 1, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            [
                [1, 1, 0, 0],
                [1, 1, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ]
        ],
        [
            [
                [1, 0, 0, 0],
                [1, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 0, 0]
            ],
            [
                [0, 1, 1, 0],
                [1, 1, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            [
                [1, 0, 0, 0],
                [1, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 0, 0]
            ],
            [
                [0, 1, 1, 0],
                [1, 1, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ]
        ],
        [
            [
                [1, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 0, 0]
            ],
            [
                [0, 0, 1, 0],
                [1, 1, 1, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            [
                [1, 0, 0, 0],
                [1, 0, 0, 0],
                [1, 1, 0, 0],
                [0, 0, 0, 0]
            ],
            [
                [1, 1, 1, 0],
                [1, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ]
        ]
    ];

    // 背景数组
    private bgGraoud = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    private tetrisParent: Laya.Image;

    private CurrentTrick: number[][] = []; //当前的砖块  
    // private CurrentTrickImg: TrickImg; // 当前砖块的图片
    //CurrentTrickNum当前砖块的数目, CurrentStatusNum当前状态, CurrentX当前x, CurrentY当前y, Sorce分数  
    private CurrentTrickNum: number;
    private CurrentStatusNum: number;
    private CurrentX: number;
    private CurrentY: number;
    private Sorce: number;
    private TricksNum: number = 4;
    private StatusNum: number = 4;

    public init(tetrisParent: Laya.Image) {
        this.tetrisParent = tetrisParent;
        this.BeginTricks();

        Laya.stage.on(Laya.Event.KEY_DOWN, this, this.onKeyDown);
    }

    onKeyDown(e: Laya.Event) {
        switch (e.keyCode) {
            case 37:
                this.LeftTricks();
                break;
            case 40:
                this.DownTricks();
                break;
            case 39:
                this.RightTricks();
                break;
            case 32: // 空格
                this.ChangeTricks();
                break;
        }
    }

    /**
     * 随机生成方块和状态
     */
    private BeginTricks() {
        this.CurrentTrick = [];
        // 随机生成砖码和状态码  
        let i = Math.floor(Math.random() * (this.TricksNum));
        let j = Math.floor(Math.random() * (this.StatusNum));
        this.CurrentTrickNum = i;
        this.CurrentStatusNum = j;
        this.CurrentX = 6;
        this.CurrentY = 0;
        // 分配数组  
        for (let y = 0; y < 4; y++) {
            this.CurrentTrick.push([]);
            for (let x = 0; x < 4; x++) {
                this.CurrentTrick[y][x] = this.Tricks[i][j][y][x];
                this.bgGraoud[this.CurrentY + y][this.CurrentX + x] = this.CurrentTrick[y][x];
            }
        }
        // timer1.Start();
        console.log(this.CurrentTrick);
        console.log(this.bgGraoud);

        // this.CurrentTrickImg = Laya.Pool.getItemByClass("trickImg", TrickImg);
        // this.tetrisParent.addChild(this.CurrentTrickImg);
        // this.CurrentTrickImg.rotateBy2dArr(this.CurrentTrick);
        // this.CurrentTrickImg.pos(this.CurrentX * 40, this.CurrentY * 40);
    }

    /**
     * 变化方块
     */
    private ChangeTricks() {
        // 进行旋转之前必须判断当前情况是否能够旋转
        // 可以旋转的时候需要判断方块的坐标需不需要变化
        if (this.CurrentStatusNum < 3) {
            this.CurrentStatusNum++;
        } else {
            this.CurrentStatusNum = 0;
        }
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                this.CurrentTrick[y][x] = this.Tricks[this.CurrentTrickNum][this.CurrentStatusNum][y][x];
            }
        }

        // this.CurrentTrickImg.rotateBy2dArr(this.CurrentTrick);
    }

    /**
     * 下落方块
     */
    private DownTricks() {
        if (this.CheckIsDown()) {
            this.CurrentY++;
        } else {
            if (this.CurrentY == 0) {
                console.log("游戏结束");
                return;
            }
            //下落完成，修改背景  
            for (let y = 0; y < 4; y++) {
                for (let x = 0; x < 4; x++) {
                    if (this.CurrentTrick[y][x] == 1) {
                        this.bgGraoud[this.CurrentY + y][this.CurrentX + x] = this.CurrentTrick[y][x];
                    }
                }
            }
            // CheckSore();
            this.BeginTricks();
            this.DelLine();
        }
        // Draw();
        // this.CurrentTrickImg.y = this.CurrentY * 40;
    }

    /**
     * 检查是否可以向下
     */
    private CheckIsDown(): boolean {
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                if (this.CurrentTrick[y][x] == 1) {
                    //超过了背景  
                    if (y + this.CurrentY + 1 >= 20) {
                        return false;
                    }
                    if (x + this.CurrentX >= 14) {
                        this.CurrentX = 13 - x;
                    }
                    if (this.bgGraoud[y + this.CurrentY + 1][x + this.CurrentX] == 1) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    /**
     * 左移砖块
     */
    private LeftTricks() {
        if (this.CheckIsLeft()) {
            this.CurrentX--;
        }
        // this.CurrentTrickImg.x = this.CurrentX * 40;
    }

    /**
     * 检查是否可以向左
     */
    private CheckIsLeft(): boolean {
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                if (this.CurrentTrick[y][x] == 1) {
                    if (x + this.CurrentX - 1 < 0) {
                        return false;
                    }
                    if (this.bgGraoud[y + this.CurrentY][x + this.CurrentX - 1] == 1) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    /**
     * 右移砖块
     */
    private RightTricks() {
        if (this.CheckIsRight()) {
            this.CurrentX++;
        }
        // this.CurrentTrickImg.x = this.CurrentX * 40;
    }

    /**
     * 检查是否可以右移
     */
    private CheckIsRight(): boolean {
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                if (this.CurrentTrick[y][x] == 1) {
                    if (x + this.CurrentX + 1 >= 14) {
                        return false;
                    }
                    if (this.bgGraoud[y + this.CurrentY][x + this.CurrentX + 1] == 1) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    /**
     * 消行
     */
    public DelLine() {
        let c = 0;
        for (let a = 0; a < 20; a++) {
            for (let b = 0; b < 14; b++) {
                if (this.bgGraoud[a][b] == 1) {
                    c = c + 1;
                    if (c == 14) {
                        // score += 10;
                        for (let d = a; d > 0; d--) {
                            for (let e = 0; e < 14; e++) {
                                this.bgGraoud[d][e] = this.bgGraoud[d - 1][e];
                            }
                        }

                    }
                }
            }
            c = 0;
        }
    }

    /**
     * 检查分数
     */
    private CheckSore() {
        for (let y = 19; y > -1; y--) {
            let isFull = true;
            for (let x = 13; x > -1; x--) {
                if (this.bgGraoud[y][x] == 0) {
                    isFull = false;
                    break;
                }
            }
            if (isFull) {
                //增加积分  
                this.Sorce = this.Sorce + 100;
                for (let yy = y; yy > 0; yy--) {
                    for (let xx = 0; xx < 14; xx++) {
                        let temp = this.bgGraoud[yy - 1][xx];
                        this.bgGraoud[yy][xx] = temp;
                    }
                }
                y++;
                // label1.Text = Sorce.ToString();;
                // Draw();
            }
        }
    }

    /**
     * 渲染砖块
     */
    private DrawTricks() {
        for (let y = 19; y > -1; y--) {
            for (let x = 13; x > -1; x--) {
                // if () {

                // }
            }
        }
    }
}