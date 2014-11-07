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
 测试 !
 ****************************************************************************/

var P1Layer = cc.Layer.extend({
    WindowsSize: null,
    init: function () {
        this._super();
        this.WindowsSize = cc.Director.getInstance().getWinSize();
        //标题
        var Label = cc.LabelTTF.create("P1 主页", "Times New Roman", 40);
        Label.setPosition(this.WindowsSize.width / 2, this.WindowsSize.height - Label.getContentSize().height);
        this.addChild(Label);

        var mGoToP7Label = cc.LabelTTF.create("排行榜", "Times New Roman", 40);
        var mGoToP7MenuItem = cc.MenuItemLabel.create(mGoToP7Label, this.GoToP7Method, this);
        var mGoToP7Menu = cc.Menu.create(mGoToP7MenuItem);
        this.addChild(mGoToP7Menu, 1);
        mGoToP7Menu.setPosition(cc.p(this.WindowsSize.width / 2, this.WindowsSize.height / 2));


        var mGoToP5Label = cc.LabelTTF.create("我的剩余次数", "Times New Roman", 40);
        var mGoToP5MenuItem = cc.MenuItemLabel.create(mGoToP5Label, this.GoToP5Method, this);
        var mGoToP5Menu = cc.Menu.create(mGoToP5MenuItem);
        this.addChild(mGoToP5Menu, 1);
        mGoToP5Menu.setPosition(cc.p(this.WindowsSize.width / 2, this.WindowsSize.height / 2 - 100));

        var mGoToP6Label = cc.LabelTTF.create("开始游戏", "Times New Roman", 40);
        var mGoToP6MenuItem = cc.MenuItemLabel.create(mGoToP6Label, this.GoToP6Method, this);
        var mGoToP6Menu = cc.Menu.create(mGoToP6MenuItem);
        this.addChild(mGoToP6Menu, 1);
        mGoToP7Menu.setPosition(cc.p(this.WindowsSize.width / 2, this.WindowsSize.height / 2-200));

    }, GoToP7Method: function () {
        var mP3Scene = P3Scene.create();
        cc.Director.getInstance().replaceScene(mP3Scene);
    }, GoToP5Method: function () {
        var mP5Scene = P5Scene.create();
        cc.Director.getInstance().replaceScene(mP5Scene);
    }, GoToP6Method: function () {
        var mP6Scene = P6Scene.create();
        cc.Director.getInstance().replaceScene(mP6Scene);
    }
});

var P1Scene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new P1Layer();
        this.addChild(layer);
        layer.init();
    }
});

P1Scene.create = function () {
    var scene = new P1Scene();
    if (scene && scene.init()) {
        return scene;
    }
    return null;
}
