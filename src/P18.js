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

var P18Layer = cc.Layer.extend({
    WindowsSize: null,
    init: function () {
        this._super();
        this.WindowsSize = cc.Director.getInstance().getWinSize();
        //标题
        var Label = cc.LabelTTF.create("P18 注册页面", "Times New Roman", 40);
        Label.setColor(cc.c3b(255, 0, 0));
        Label.setPosition(this.WindowsSize.width / 2, this.WindowsSize.height - Label.getContentSize().height);
        this.addChild(Label);

        var mGoToP10Label_Submit = cc.LabelTTF.create("确认注册", "Times New Roman", 40);
        mGoToP10Label_Submit.setColor(cc.c3b(255, 0, 0));
        var mGoToP10MenuItem_Submit = cc.MenuItemLabel.create(mGoToP10Label_Submit, this.GoToP10Method, this);
        var mGoToP10Menu_Submit = cc.Menu.create(mGoToP10MenuItem_Submit);
        this.addChild(mGoToP10Menu_Submit, 1);
        mGoToP10Menu_Submit.setPosition(cc.p(this.WindowsSize.width / 2, this.WindowsSize.height / 2));

        var mGoToP10Label_Later = cc.LabelTTF.create("稍后注册", "Times New Roman", 40);
        mGoToP10Label_Later.setColor(cc.c3b(255, 0, 0));
        var mGoToP10MenuItem_Later = cc.MenuItemLabel.create(mGoToP10Label_Later, this.GoToP10Method, this);
        var mGoToP10Menu_Later = cc.Menu.create(mGoToP10MenuItem_Later);
        this.addChild(mGoToP10Menu_Later, 1);
        mGoToP10Menu_Later.setPosition(cc.p(this.WindowsSize.width / 2, this.WindowsSize.height / 2-100));
    }
    , GoToP10Method: function () {
        var mP10Scene = P10Scene.create();
        cc.Director.getInstance().replaceScene(mP10Scene);
    }
});

var P18Scene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new P18Layer();
        this.addChild(layer);
        layer.init();
    }
});

P18Scene.create = function () {
    var scene = new P18Scene();
    if (scene && scene.init()) {
        return scene;
    }
    return null;
}
