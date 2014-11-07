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
var CustomTableViewCell = cc.TableViewCell.extend({
    draw:function (ctx) {
        this._super(ctx);
    }
});

var P3Layer = cc.Layer.extend({
    WindowsSize: null,
    init: function () {
        this._super();
        this.WindowsSize = cc.Director.getInstance().getWinSize();
        //标题
        var Label = cc.LabelTTF.create("游戏排行榜", "Microsoft yahei", 40);
        Label.setColor(cc.c3b(15, 48, 170));
        Label.setPosition(this.WindowsSize.width / 2, this.WindowsSize.height - Label.getContentSize().height);
        this.addChild(Label);

        //返回
        var mBackLabel = cc.LabelTTF.create("返回", "Times New Roman", 40);
        mBackLabel.setColor(cc.c3b(255, 0, 0));
        var mBackMenuItem = cc.MenuItemLabel.create(mBackLabel, this.BackMethod, this);
        var mBackMenu = cc.Menu.create(mBackMenuItem);
        this.addChild(mBackMenu, 1);
        mBackMenu.setPosition(cc.p(mBackLabel.getContentSize().width, this.WindowsSize.height - mBackLabel.getContentSize().height));

        //背景图片
        var background;

        //列表
        var tableView = cc.TableView.create(this, cc.size(300, 350));
        tableView.setDirection(cc.SCROLLVIEW_DIRECTION_VERTICAL);
        tableView.setPosition(size.width/2-150, size.height - 450);
        tableView.setDelegate(this);
        tableView.setVerticalFillOrder(cc.TABLEVIEW_FILL_TOPDOWN);
        this.addChild(tableView);
        tableView.reloadData();

    }, BackMethod: function () {
        var mP1Scene = P1Scene.create();
        cc.Director.getInstance().replaceScene(mP1Scene);
    },

    scrollViewDidScroll:function (view) {
    },
    scrollViewDidZoom:function (view) {
    },

    tableCellTouched:function (table, cell) {
        cc.log("cell touched at index: " + cell.getIdx());
    },

    tableCellSizeForIndex:function (table, idx) {
        return cc.size(300,50);     //间距
    },

    tableCellAtIndex:function (table, idx) {
        var strValue = idx.toFixed(0);
        var phone = "15989155910";
        var score = "135";
        var cell = table.dequeueCell();
        var label;
        var label2;
        var label3;
        if (!cell) {
            cell = new CustomTableViewCell();
            var sprite = cc.Sprite.create(s_TableBorder);
            sprite.setAnchorPoint(0,0);
            sprite.setPosition(0, 0);
            cell.addChild(sprite);

            label = cc.LabelTTF.create(strValue, "Helvetica", 20.0);
            label.setColor(cc.c4(0,0,0));
            label.setPosition(38,24);
            //label.setAnchorPoint(0,0);
            label.setTag(123);

            label2 = cc.LabelTTF.create(phone, "Helvetica", 20.0);
            label2.setColor(cc.c4(0,0,0));
            label2.setPosition(145,24);
            //label2.setAnchorPoint(0,0);
            label2.setTag(123);

            label3 = cc.LabelTTF.create(score, "Helvetica", 20.0);
            label3.setColor(cc.c4(0,0,0));
            label3.setPosition(249,24);
            //label3.setAnchorPoint(0,0);
            label3.setTag(123);

            cell.addChild(label);
            cell.addChild(label2);
            cell.addChild(label3);
        } else {
            label = cell.getChildByTag(123);
            label.setString(strValue);
        }
        return cell;
    },

    numberOfCellsInTableView:function (table) {
        return 100;
    }
});

var P3Scene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new P3Layer();
        this.addChild(layer);
        layer.init();
    }
});

P3Scene.create = function () {
    var scene = new P3Scene();
    if (scene && scene.init()) {
        return scene;
    }
    return null;
}
