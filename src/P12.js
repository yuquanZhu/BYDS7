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

var P12Layer = cc.Layer.extend({
        WindowsSize: null,
        init: function () {
            this._super();
            this.WindowsSize = cc.Director.getInstance().getWinSize();
            //标题
            var Label = cc.LabelTTF.create("P12 信息登记页面", "Times New Roman", 40);
            Label.setColor(cc.c3b(255, 0, 0));
            Label.setPosition(this.WindowsSize.width / 2, this.WindowsSize.height - Label.getContentSize().height);
            this.addChild(Label);

            //已经提交过电话号码 SubmitPhone=1  or  未提交过电话号码 SubmitPhone=2
            var mGoToP13Label = cc.LabelTTF.create("确认", "Times New Roman", 40);
            mGoToP13Label.setColor(cc.c3b(255, 0, 0));
            var mGoToP13MenuItem = cc.MenuItemLabel.create(mGoToP13Label, this.GoToP13Method, this);
            var mGoToP13Menu = cc.Menu.create(mGoToP13MenuItem);
            this.addChild(mGoToP13Menu, 1);
            mGoToP13Menu.setPosition(cc.p(this.WindowsSize.width / 2, this.WindowsSize.height / 2));

        }, GoToP13Method: function () {
            var mP13Scene = P13Scene.create();
            cc.Director.getInstance().replaceScene(mP13Scene);
        }

    })  ;

var P12Scene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new P12Layer();
        this.addChild(layer);
        layer.init();
    }
});

P12Scene.create = function () {
    var scene = new P12Scene();
    if (scene && scene.init()) {
        return scene;
    }
    return null;
}
