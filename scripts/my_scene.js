
// MyScene1クラス
// 他のJSファイルから呼び出された場合はシーンを返す
class MyScene extends Phaser.Scene {

    // 継承した「Phaser.Scene」クラスのコンストラクタの呼び出し
    constructor() {
        super({ key: 'MyScene', active: true });
    }

    // シーンの事前読み込み処理
    preload() {
         // 画像の読み込み(使用する時の名前, パス)
        this.load.image('background', 'assets/background.png');
        this.load.image('taro', 'assets/taro.png');
        this.load.image('jiro', 'assets/jiro.png');
    }

    // シーン初期化処理
    create() {
         // 単体画像をシーンに追加(X座標,Y座標,画像名)
        this.add.image(D_WIDTH/2, D_HEIGHT/2, 'background');
        this.text = this.add.text(10, 10, 'Scene 1').setFontSize(32).setColor('#ff0');
        this.text = this.add.text(600, 400, 'MyWorld').setFontSize(32);
        const player1 = this.physics.add.sprite(D_WIDTH/2, D_HEIGHT/2, 'taro');
        const player2 = this.physics.add.sprite(300, 200, 'jiro');
        this.player1 = player1
        this.player2 = player2
        this.player1.angle = 0
        this.keys = {};
        this.keys.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keys.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keys.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.text1 = null;
    }
    
  // 毎フレーム実行される繰り返し処理
    update() {
        // this.player1.angle += 5;
        // this.player1.setVelocityY(-75);
        // this.player1.setVelocityX(75);
        // if (this.player1.x >= 650) 
        // {
        //     this.player1.x = D_WIDTH/2;
        //     this.player1.y = D_HEIGHT/2;
        // }
        let cursors = this.input.keyboard.createCursorKeys();
        if (cursors.left.isDown) {
        this.player1.x -= 3;
        this.player2.x += 3;
        } else if (cursors.right.isDown) {
        this.player1.x += 3;
        this.player2.x -= 3;
        }
        if (this.keys.keyA.isDown) this.showText('Hello!');
        if (this.keys.keyS.isDown) this.showText('Hey!');
        if (this.keys.keyD.isDown) this.hideText();
    }
    showText(message) {
        if (!this.text1) {
            this.text1 = this.add.text(100, 50, message).setFontSize(32);
        }
    }
    hideText() {
        if (this.text1) {
            this.text1.destroy();
            this.text1 = null;
        }
    }
}