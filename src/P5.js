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

var P5Layer = cc.Layer.extend({
    WindowsSize: null,
    init: function () {
        this._super();
        this.WindowsSize = cc.Director.getInstance().getWinSize();
        //标题
        var Label = cc.LabelTTF.create("P5 兑奖页面(剩余次数)", "Times New Roman", 40);
        Label.setColor(cc.c3b(255, 0, 0));
        Label.setPosition(this.WindowsSize.width / 2, this.WindowsSize.height - Label.getContentSize().height);
        this.addChild(Label);

        //返回
        var mBackLabel = cc.LabelTTF.create("返回", "Times New Roman", 40);
        mBackLabel.setColor(cc.c3b(255, 0, 0));
        var mBackMenuItem = cc.MenuItemLabel.create(mBackLabel, this.BackMethod, this);
        var mBackMenu = cc.Menu.create(mBackMenuItem);
        this.addChild(mBackMenu, 1);
        mBackMenu.setPosition(cc.p(mBackLabel.getContentSize().width, this.WindowsSize.height - mBackLabel.getContentSize().height));

    }, BackMethod: function () {
        var mP1Scene = P1Scene.create();
        cc.Director.getInstance().replaceScene(mP1Scene);
    }
});

var P5Scene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new P5Layer();
        this.addChild(layer);
        layer.init();
    }
});

P5Scene.create = function () {
    var scene = new P5Scene();
    if (scene && scene.init()) {
        return scene;
    }
    return null;
}
