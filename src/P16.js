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

var P16Layer = cc.Layer.extend({
    WindowsSize: null,
    init: function () {
        this._super();
        this.WindowsSize = cc.Director.getInstance().getWinSize();
        //标题
        var Label = cc.LabelTTF.create("P16 分享成功页面", "Times New Roman", 40);
        Label.setColor(cc.c3b(255, 0, 0));
        Label.setPosition(this.WindowsSize.width / 2, this.WindowsSize.height - Label.getContentSize().height);
        this.addChild(Label);

        var mGoToP14Label = cc.LabelTTF.create("我要抽奖", "Times New Roman", 40);
        mGoToP14Label.setColor(cc.c3b(255, 0, 0));
        var mGoToP14MenuItem = cc.MenuItemLabel.create(mGoToP14Label, this.GoToP14Method, this);
        var mGoToP14Menu = cc.Menu.create(mGoToP14MenuItem);
        this.addChild(mGoToP14Menu, 1);
        mGoToP14Menu.setPosition(cc.p(this.WindowsSize.width / 2, this.WindowsSize.height / 2));

    }
    , GoToP14Method: function () {
        var mP14Scene = P14Scene.create();
        cc.Director.getInstance().replaceScene(mP14Scene);
    }
});

var P16Scene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new P16Layer();
        this.addChild(layer);
        layer.init();
    }
});

P16Scene.create = function () {
    var scene = new P16Scene();
    if (scene && scene.init()) {
        return scene;
    }
    return null;
}
