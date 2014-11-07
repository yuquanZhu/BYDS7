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

var P10Layer = cc.Layer.extend({
    WindowsSize: null,
    init: function () {
        this._super();
        this.WindowsSize = cc.Director.getInstance().getWinSize();
        //标题
        var Label = cc.LabelTTF.create("P10 游戏成绩页面", "Times New Roman", 40);
        Label.setColor(cc.c3b(255, 0, 0));
        Label.setPosition(this.WindowsSize.width / 2, this.WindowsSize.height - Label.getContentSize().height);
        this.addChild(Label);

        var mGoToP18Label = cc.LabelTTF.create("注册", "Times New Roman", 40);
        var mGoToP18MenuItem = cc.MenuItemLabel.create(mGoToP18Label, this.GoToP18Method, this);
        var mGoToP18Menu = cc.Menu.create(mGoToP18MenuItem);
        this.addChild(mGoToP18Menu, 1);
        mGoToP18Menu.setPosition(cc.p(this.WindowsSize.width / 2, this.WindowsSize.height / 2));

        var mGoToP7Label = cc.LabelTTF.create("再次挑战", "Times New Roman", 40);
        var mGoToP7MenuItem = cc.MenuItemLabel.create(mGoToP7Label, this.GoToP7Method, this);
        var mGoToP7Menu = cc.Menu.create(mGoToP7MenuItem);
        this.addChild(mGoToP7Menu, 1);
        mGoToP7Menu.setPosition(cc.p(this.WindowsSize.width / 2, this.WindowsSize.height / 2 - 100));

        var mGoToP11Label = cc.LabelTTF.create("提交成绩", "Times New Roman", 40);
        var mGoToP11MenuItem = cc.MenuItemLabel.create(mGoToP11Label, this.GoToP11Method, this);
        var mGoToP11Menu = cc.Menu.create(mGoToP11MenuItem);
        this.addChild(mGoToP11Menu, 1);
        mGoToP11Menu.setPosition(cc.p(this.WindowsSize.width / 2, this.WindowsSize.height / 2-200));

    }, GoToP7Method: function () {
        var mP7Scene = P7Scene.create();
        cc.Director.getInstance().replaceScene(mP7Scene);
    }, GoToP18Method: function () {
        var mP18Scene = P18Scene.create();
        cc.Director.getInstance().replaceScene(mP18Scene);
    }, GoToP11Method: function () {
        var mP11Scene = P11Scene.create();
        cc.Director.getInstance().replaceScene(mP11Scene);
    }
});

var P10Scene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new P10Layer();
        this.addChild(layer);
        layer.init();
    }
});

P10Scene.create = function () {
    var scene = new P10Scene();
    if (scene && scene.init()) {
        return scene;
    }
    return null;
}
