/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var P7Layer = cc.Layer.extend({
    WindowsSize: null,
    _GameResult: null,
    _DrawTimeView: null,
    //计时
    _TimeCount: null,
    init: function () {
        this._super();
        this.WindowsSize = cc.Director.getInstance().getWinSize();
        //Draw元件
        this._DrawTimeView = cc.DrawNode.create();
        //背景
        var background = cc.Sprite.create(s_GameBackground);
        background.setPosition(this.WindowsSize.width / 2, this.WindowsSize.height / 2);
        if (this.WindowsSize.height / background.getContentSize().height > this.WindowsSize.width / background.getContentSize().width) {
            background.setScale(this.WindowsSize.height / background.getContentSize().height);
        } else {
            background.setScale(this.WindowsSize.width / background.getContentSize().width);
        }
        this.addChild(background);


        //标题
        var Label = cc.LabelTTF.create("P7 游戏界面", "Times New Roman", 40);
        Label.setColor(cc.c3b(255, 0, 0));
        Label.setPosition(this.WindowsSize.width / 2, Label.getContentSize().height);
        this.addChild(Label);

        //游戏完成   _GameResult用与决定游戏结果  1 = 一关未过就失败 ， 2 = 已过关未提交过 ，3 = 已过关已提交过
        this._GameResult = 2;
        var mFinishGameLabel = cc.LabelTTF.create("游戏线束", "Times New Roman", 40);
        mFinishGameLabel.setColor(cc.c3b(255, 0, 0));
        var mFinishGameMenuItem = cc.MenuItemLabel.create(mFinishGameLabel, this.FinishGameMethod, this);
        var mFinishGameMenu = cc.Menu.create(mFinishGameMenuItem);
        this.addChild(mFinishGameMenu, 1);
        mFinishGameMenu.setPosition(cc.p(this.WindowsSize.width / 2, this.WindowsSize.height / 2));

        this._DrawTimeView.drawRect(cc.p(0, 0), cc.p(this.WindowsSize.width, 30), cc.c4f(1, 0, 0, 1), 0, cc.c4f(1, 0, 0, 1));
        this.addChild(this._DrawTimeView, 5);
        this._DrawTimeView.setPosition(0, this.WindowsSize.height - 35);
        this._TimeCount = 0;
        this.TimeViewWidth = (this.WindowsSize.width - 0);
        this.TimeViewWidthSpace = this.TimeViewWidth / 120;
        this.schedule(this.TimeAnimation, 0.25, 120);
    }, FinishGameMethod: function () {
        if (this._GameResult) {
            if (this._GameResult == 1) {
                //跳去P8
                var mP8Scene = P8Scene.create();
                cc.Director.getInstance().replaceScene(mP8Scene);
            } else if (this._GameResult == 2) {
                //跳去P8
                var mP10Scene = P10Scene.create();
                cc.Director.getInstance().replaceScene(mP10Scene);
            } else if (this._GameResult == 3) {
                var mP9Scene = P9Scene.create();
                cc.Director.getInstance().replaceScene(mP9Scene);
            }
        } else {
            //当失败
        }
    }
    //时间条动画
    , TimeViewWidth: null, TimeViewWidthSpace: null,
    TimeAnimation: function () {
        this._DrawTimeView.clear();
        this._DrawTimeView.drawRect(cc.p(0, 0), cc.p(this.WindowsSize.width - (this.TimeViewWidthSpace * this._TimeCount), 30), cc.c4f(1, 0, 0, 1), 0, cc.c4f(1, 0, 0, 1));
        if (this._TimeCount == 120) {
            this._DrawTimeView.clear()
            //没时间
            console.log("over");
            alert("over");
        } else {
            //加时间
            this._TimeCount++;
        }
    }
});

var P7Scene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new P7Layer();
        this.addChild(layer);
        layer.init();
    }
});

P7Scene.create = function () {
    var scene = new P7Scene();
    if (scene && scene.init()) {
        return scene;
    }
    return null;
}
