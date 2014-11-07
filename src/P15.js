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

var P15Layer = cc.Layer.extend({
    WindowsSize: null,
    init: function () {
        this._super();
        this.WindowsSize = cc.Director.getInstance().getWinSize();
        //标题
        var Label = cc.LabelTTF.create("P15 分享提示页面", "Times New Roman", 40);
        Label.setColor(cc.c3b(255, 0, 0));
        Label.setPosition(this.WindowsSize.width / 2, this.WindowsSize.height - Label.getContentSize().height);
        this.addChild(Label);

        var mGoToP16Label = cc.LabelTTF.create("分享成功调用", "Times New Roman", 40);
        mGoToP16Label.setColor(cc.c3b(255, 0, 0));
        var mGoToP16MenuItem = cc.MenuItemLabel.create(mGoToP16Label, this.GoToP16Method, this);
        var mGoToP16Menu = cc.Menu.create(mGoToP16MenuItem);
        this.addChild(mGoToP16Menu, 1);
        mGoToP16Menu.setPosition(cc.p(this.WindowsSize.width / 2, this.WindowsSize.height / 2));

        //返回
        var mBackLabel = cc.LabelTTF.create("返回", "Times New Roman", 40);
        mBackLabel.setColor(cc.c3b(255, 0, 0));
        var mBackMenuItem = cc.MenuItemLabel.create(mBackLabel, this.BackMethod, this);
        var mBackMenu = cc.Menu.create(mBackMenuItem);
        this.addChild(mBackMenu, 1);
        mBackMenu.setPosition(cc.p(mBackLabel.getContentSize().width, this.WindowsSize.height - mBackLabel.getContentSize().height));

    }, GoToP16Method: function () {
        var mP16Scene = P16Scene.create();
        cc.Director.getInstance().replaceScene(mP16Scene);
    }, BackMethod: function () {
        var mP1Scene = P1Scene.create();
        cc.Director.getInstance().replaceScene(mP1Scene);
    }
});

var P15Scene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new P15Layer();
        this.addChild(layer);
        layer.init();
    }
});

P15Scene.create = function () {
    var scene = new P15Scene();
    if (scene && scene.init()) {
        return scene;
    }
    return null;
}
