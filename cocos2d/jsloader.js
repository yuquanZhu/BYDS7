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
(function () {
    var engine = [
        // Core
        'core/platform/CCClass.js',
        'core/cocoa/CCGeometry.js',
        'core/platform/Sys.js',
        'core/platform/CCConfig.js',
        'core/platform/miniFramework.js',
        'core/platform/CCCommon.js',
        'core/platform/CCMacro.js',
        'core/platform/CCFileUtils.js',
        'core/platform/CCTypes.js',
        'core/platform/CCEGLView.js',
        'core/platform/CCScreen.js',
        'core/platform/CCVisibleRect.js',
        'core/cocoa/CCAffineTransform.js',
        'core/support/CCPointExtension.js',
        'core/support/CCVertex.js',
        'core/support/TransformUtils.js',
        'core/base_nodes/CCNode.js',
        'core/base_nodes/CCAtlasNode.js',
        'core/textures/CCTexture2D.js',
        'core/textures/CCTextureCache.js',
        'core/textures/CCTextureAtlas.js',
        'core/scenes_nodes/CCScene.js',
        'core/layers_nodes/CCLayer.js',
        'core/sprite_nodes/CCSprite.js',
        'core/sprite_nodes/CCAnimation.js',
        'core/sprite_nodes/CCAnimationCache.js',
        'core/sprite_nodes/CCSpriteFrame.js',
        'core/sprite_nodes/CCSpriteFrameCache.js',
        'core/sprite_nodes/CCSpriteBatchNode.js',
        'core/CCConfiguration.js',
        'core/CCDirector.js',
        'core/CCCamera.js',
        'core/CCScheduler.js',
        'core/CCLoader.js',
        'core/CCDrawingPrimitives.js',
        'core/platform/CCApplication.js',
        'core/platform/CCSAXParser.js',
        'core/platform/AppControl.js',
        'core/labelTTF/CCLabelTTF.js',
        'core/CCActionManager.js',
        'kazmath/utility.js',
        'kazmath/vec2.js',
        'kazmath/vec3.js',
        'kazmath/vec4.js',
        'kazmath/ray2.js',
        'kazmath/mat3.js',
        'kazmath/mat4.js',
        'kazmath/plane.js',
        'kazmath/quaternion.js',
        'kazmath/aabb.js',
        'kazmath/GL/mat4stack.js',
        'kazmath/GL/matrix.js',
        'shaders/CCShaders.js',
        'shaders/CCShaderCache.js',
        'shaders/CCGLProgram.js',
        'shaders/CCGLStateCache.js',
        'render_texture/CCRenderTexture.js',
        'motion_streak/CCMotionStreak.js',
        'clipping_nodes/CCClippingNode.js',
        'effects/CCGrid.js',
        'effects/CCGrabber.js',
        'shape_nodes/CCDrawNode.js',
        'actions/CCAction.js',
        'actions/CCActionInterval.js',
        'actions/CCActionInstant.js',
        'actions/CCActionCamera.js',
        'actions/CCActionEase.js',
        'actions/CCActionCatmullRom.js',
        'actions/CCActionTween.js',
        'actions3d/CCActionGrid.js',
        'actions3d/CCActionGrid3D.js',
        'actions3d/CCActionTiledGrid.js',
        'actions3d/CCActionPageTurn3D.js',
        'progress_timer/CCProgressTimer.js',
        'progress_timer/CCActionProgressTimer.js',
        'transitions_nodes/CCTransition.js',
        'transitions_nodes/CCTransitionProgress.js',
        'transitions_nodes/CCTransitionPageTurn.js',
        'label_nodes/CCLabelAtlas.js',
        'label_nodes/CCLabelBMFont.js',
        'compress/ZipUtils.js',
        'compress/base64.js',
        'compress/gzip.js',
        'compress/zlib.min.js',
        'particle_nodes/CCPNGReader.js',
        'particle_nodes/CCTIFFReader.js',
        'particle_nodes/CCParticleSystem.js',
        'particle_nodes/CCParticleExamples.js',
        'particle_nodes/CCParticleBatchNode.js',
        'touch_dispatcher/CCTouchDelegateProtocol.js',
        'touch_dispatcher/CCTouchHandler.js',
        'touch_dispatcher/CCTouchDispatcher.js',
        'touch_dispatcher/CCMouseDispatcher.js',
        'keyboard_dispatcher/CCKeyboardDelegate.js',
        'keyboard_dispatcher/CCKeyboardDispatcher.js',
        'accelerometer/CCAccelerometer.js',
        'text_input_node/CCIMEDispatcher.js',
        'text_input_node/CCTextFieldTTF.js',
        'menu_nodes/CCMenuItem.js',
        'menu_nodes/CCMenu.js',
        'tileMap_nodes/CCTGAlib.js',
        'tileMap_nodes/CCTMXTiledMap.js',
        'tileMap_nodes/CCTMXXMLParser.js',
        'tileMap_nodes/CCTMXObjectGroup.js',
        'tileMap_nodes/CCTMXLayer.js',
        'parallax_nodes/CCParallaxNode.js',
        'audio/SimpleAudioEngine.js',

        // useless
        'CCUserDefault.js',
        'CCImage.js'

    ];

    var d = document;
    var c = d["ccConfig"];

    if (c.loadExtension != null && c.loadExtension == true) {
        engine = engine.concat([
            '../extensions/GUI/CCControlExtension/CCControl.js',
            '../extensions/GUI/CCControlExtension/CCControlButton.js',
            '../extensions/GUI/CCControlExtension/CCControlUtils.js',
            '../extensions/GUI/CCControlExtension/CCInvocation.js',
            '../extensions/GUI/CCControlExtension/CCScale9Sprite.js',
            '../extensions/GUI/CCControlExtension/CCMenuPassive.js',
            '../extensions/GUI/CCControlExtension/CCControlSaturationBrightnessPicker.js',
            '../extensions/GUI/CCControlExtension/CCControlHuePicker.js',
            '../extensions/GUI/CCControlExtension/CCControlColourPicker.js',
            '../extensions/GUI/CCControlExtension/CCControlSlider.js',
            '../extensions/GUI/CCControlExtension/CCControlSwitch.js',
            '../extensions/GUI/CCControlExtension/CCControlStepper.js',
            '../extensions/GUI/CCControlExtension/CCControlPotentiometer.js',
            '../extensions/GUI/CCScrollView/CCScrollView.js',
            '../extensions/GUI/CCScrollView/CCSorting.js',
            '../extensions/GUI/CCScrollView/CCTableView.js',
            '../extensions/CCBReader/CCNodeLoader.js',
            '../extensions/CCBReader/CCBReaderUtil.js',
            '../extensions/CCBReader/CCControlLoader.js',
            '../extensions/CCBReader/CCSpriteLoader.js',
            '../extensions/CCBReader/CCNodeLoaderLibrary.js',
            '../extensions/CCBReader/CCBReader.js',
            '../extensions/CCBReader/CCBValue.js',
            '../extensions/CCBReader/CCBKeyframe.js',
            '../extensions/CCBReader/CCBSequence.js',
            '../extensions/CCBReader/CCBRelativePositioning.js',
            '../extensions/CCBReader/CCBAnimationManager.js',
            '../extensions/CCEditBox/CCdomNode.js',
            '../extensions/CCEditBox/CCEditBox.js',

            '../extensions/CocoStudio/Components/CCComponent.js',
            '../extensions/CocoStudio/Components/CCComponentContainer.js',
            '../extensions/CocoStudio/CocoStudio.js',
            // CocoStudio Armature
            '../extensions/CocoStudio/Armature/utils/CCArmatureDefine.js',
            '../extensions/CocoStudio/Armature/utils/CCDataReaderHelper.js',
            '../extensions/CocoStudio/Armature/utils/CCSpriteFrameCacheHelper.js',
            '../extensions/CocoStudio/Armature/utils/CCTransformHelp.js',
            '../extensions/CocoStudio/Armature/utils/CCTweenFunction.js',
            '../extensions/CocoStudio/Armature/utils/CCUtilMath.js',
            '../extensions/CocoStudio/Armature/utils/CCArmatureDataManager.js',
            '../extensions/CocoStudio/Armature/datas/CCDatas.js',
            '../extensions/CocoStudio/Armature/display/CCDecorativeDisplay.js',
            '../extensions/CocoStudio/Armature/display/CCDisplayFactory.js',
            '../extensions/CocoStudio/Armature/display/CCDisplayManager.js',
            '../extensions/CocoStudio/Armature/display/CCSkin.js',
            '../extensions/CocoStudio/Armature/animation/CCProcessBase.js',
            '../extensions/CocoStudio/Armature/animation/CCArmatureAnimation.js',
            '../extensions/CocoStudio/Armature/animation/CCTween.js',
            '../extensions/CocoStudio/Armature/physics/CCColliderDetector.js',
            '../extensions/CocoStudio/Armature/CCArmature.js',
            '../extensions/CocoStudio/Armature/CCBone.js',
            // CocoStudio Action
            '../extensions/CocoStudio/Action/CCActionFrame.js',
            '../extensions/CocoStudio/Action/CCActionManager.js',
            '../extensions/CocoStudio/Action/CCActionNode.js',
            '../extensions/CocoStudio/Action/CCActionObject.js',
            // CocoStudio Components
            '../extensions/CocoStudio/Components/CCComAttribute.js',
            '../extensions/CocoStudio/Components/CCComAudio.js',
            '../extensions/CocoStudio/Components/CCComController.js',
            '../extensions/CocoStudio/Components/CCComRender.js',
            // CocoStudio Trigger
            '../extensions/CocoStudio/Trigger/ObjectFactory.js',
            '../extensions/CocoStudio/Trigger/TriggerBase.js',
            '../extensions/CocoStudio/Trigger/TriggerMng.js',
            '../extensions/CocoStudio/Trigger/TriggerObj.js',
            // CocoStudio GUI
            '../extensions/CocoStudio/GUI/BaseClasses/UIWidget.js',
            '../extensions/CocoStudio/GUI/Layouts/UILayout.js',
            '../extensions/CocoStudio/GUI/Layouts/UILayoutParameter.js',
            '../extensions/CocoStudio/GUI/Layouts/UILayoutDefine.js',
            '../extensions/CocoStudio/GUI/System/CocosGUI.js',
            '../extensions/CocoStudio/GUI/System/UIHelper.js',
            '../extensions/CocoStudio/GUI/System/UILayer.js',
            '../extensions/CocoStudio/GUI/UIWidgets/UIButton.js',
            '../extensions/CocoStudio/GUI/UIWidgets/UICheckBox.js',
            '../extensions/CocoStudio/GUI/UIWidgets/UIImageView.js',
            '../extensions/CocoStudio/GUI/UIWidgets/UILabel.js',
            '../extensions/CocoStudio/GUI/UIWidgets/UILabelAtlas.js',
            '../extensions/CocoStudio/GUI/UIWidgets/UILabelBMFont.js',
            '../extensions/CocoStudio/GUI/UIWidgets/UILoadingBar.js',
            '../extensions/CocoStudio/GUI/UIWidgets/UIRichText.js',
            '../extensions/CocoStudio/GUI/UIWidgets/UISlider.js',
            '../extensions/CocoStudio/GUI/UIWidgets/UISwitch.js',
            '../extensions/CocoStudio/GUI/UIWidgets/UITextField.js',
            '../extensions/CocoStudio/GUI/UIWidgets/Compatible/CompatibleClasses.js',
            '../extensions/CocoStudio/GUI/UIWidgets/ScrollWidget/UIScrollView.js',
            '../extensions/CocoStudio/GUI/UIWidgets/ScrollWidget/UIListView.js',
            '../extensions/CocoStudio/GUI/UIWidgets/ScrollWidget/UIPageView.js',
            '../extensions/CocoStudio/Reader/GUIReader.js',
            '../extensions/CocoStudio/Reader/SceneReader.js'

        ]);
    }

    if (c.loadPluginx != null && c.loadPluginx == true) {
        engine = engine.concat([
            //protocols
            '../extensions/PluginX/protocols/Config.js',
            '../extensions/PluginX/protocols/PluginUtils.js',
            '../extensions/PluginX/protocols/PluginProtocol.js',
            '../extensions/PluginX/protocols/ProtocolSocial.js',
            '../extensions/PluginX/protocols/ProtocolAds.js',
            '../extensions/PluginX/protocols/ProtocolAnalytics.js',
            //'../extensions/PluginX/protocols/ProtocolIAP.js',
            '../extensions/PluginX/protocols/PluginFactory.js',
            '../extensions/PluginX/protocols/PluginManager.js',

            //plugins
            '../extensions/PluginX/plugins/SocialWeibo.js',
            '../extensions/PluginX/plugins/SocialQQWeibo.js',
            '../extensions/PluginX/plugins/SocialQzone.js',
            '../extensions/PluginX/plugins/SocialTwitter.js',
            '../extensions/PluginX/plugins/SocialFacebook.js',
            //'../extensions/PluginX/plugins/AdsGoogle.js',
            '../extensions/PluginX/plugins/AnalyticsFlurry.js'
        ]);
    }

    if (!c.engineDir) {
        engine = [];
    }
    else {
        if(c.box2d || c.chipmunk){
            engine.push('physics_nodes/CCPhysicsSprite.js');
            engine.push('physics_nodes/CCPhysicsDebugNode.js');
            if (c.box2d === true)
                engine.push('../external/box2d/box2d.js');
            if (c.chipmunk === true)
                engine.push('../external/chipmunk/chipmunk.js');
        }
        engine.forEach(function (e, i) {
            engine[i] = c.engineDir + e;
        });
    }
    if (typeof c.box2d === "string") {
        engine.push(c.box2d);
    }
    if (typeof c.chipmunk === "string") {
        engine.push(c.chipmunk);
    }

    var loadJsImg = document.getElementById("cocos2d_loadJsImg");
//    var logoImage;
//    var text;
    if(!loadJsImg){
        loadJsImg = document.createElement('img');
        loadJsImg.src = "data:image/gif;base64,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%3D%3D";

//        logoImage = document.createElement('img');
//        logoImage.src ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACWCAIAAAAUvlBOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTVCRUFBMzcyNTE2MTFFNDk0MDNBRkVFMTU5QjVCNjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTVCRUFBMzgyNTE2MTFFNDk0MDNBRkVFMTU5QjVCNjAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NUJFQUEzNTI1MTYxMUU0OTQwM0FGRUUxNTlCNUI2MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1NUJFQUEzNjI1MTYxMUU0OTQwM0FGRUUxNTlCNUI2MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Podr4BcAACVNSURBVHja7J33cxxH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%3D";


//        text=document.createElement('div');
//        text.style.color="black";
//        text.innerHTML="加载中...";
//        text.style.width=150+"px";
//        text.style.textAlign="center";

//        text.style.left=100+"px";
//        text.style.top=100+"px";
        loadJsImg.style.position = "absolute";

        var canvasNode = document.getElementById(c.tag);
        canvasNode.style.backgroundColor = "white";

//        canvasNode.parentNode.appendChild(logoImage);
//        canvasNode.parentNode.appendChild(text);
        var canvasStyle = getComputedStyle?getComputedStyle(canvasNode):canvasNode.currentStyle;
        var cwidth = document.body.clientWidth;
        cwidth = (cwidth-canvasNode.width)/2;
        canvasNode.parentNode.appendChild(loadJsImg);
        canvasNode.style.marginLeft = cwidth+'px';



//        logoImage.style.left = canvasNode.offsetLeft + (parseFloat(canvasStyle.width) - logoImage.width)/2 + "px";
//        logoImage.style.top = (canvasNode.offsetTop + (parseFloat(canvasStyle.height) - logoImage.height)/2)-50 + "px";
//        logoImage.style.position = "absolute";


//        text.style.left = canvasNode.offsetLeft + (parseFloat(canvasStyle.width) - text.style.width)/2 + "px";
//        text.style.top = canvasNode.offsetTop + (parseFloat(canvasStyle.height) - text.style.height)/2 + "px";

//        text.style.top = parseInt(logoImage.style.top)+ logoImage.height+10+"px";
//        text.style.left = parseInt(logoImage.style.left) + (logoImage.width - parseInt(text.style.width))/2 + "px";
//        text.style.position = "absolute";

        loadJsImg.style.left = canvasNode.offsetLeft + (parseFloat(canvasStyle.width) - loadJsImg.width)/2 + "px";
//        loadJsImg.style.top = parseInt(text.style.top) + 20 + 10 + "px";
        loadJsImg.style.top = (canvasNode.offsetTop + (parseFloat(canvasStyle.height) - loadJsImg.height)/2) + "px";
        loadJsImg.style.position = "absolute";

    }
    
    var updateLoading = function(p){
        if(p>=1) {
            loadJsImg.parentNode.removeChild(loadJsImg);
//            logoImage.parentNode.removeChild(logoImage);
//            text.parentNode.removeChild(text);
            canvasNode.style.marginLeft = 0 +'px';
        }
    };

    var loaded = 0;
    var que = engine.concat(c.appFiles);
    que.push('main.js');


    var loadHandlerIE = function (loaded){
        loadNext();
        updateLoading(loaded / que.length);
        this.removeEventListener('load', loadHandlerIE, false);
    };
    var loadNext = function () {
        i++;
        if (i < que.length) {
            var f = d.createElement('script');
            f.src = que[i];
            f.addEventListener('load', loadHandlerIE.bind(f, loaded), false);
            d.body.appendChild(f);
        }
        updateLoading(i / (que.length - 1));
    };
    var loadHandler = function (){
        loaded++;
        updateLoading(loaded / que.length);
        this.removeEventListener('load', loadHandler, false);
    };

    if (navigator.userAgent.indexOf("Trident/5") > -1) {
        //ie9
        var i = -1;

        loadNext();
    }
    else {
        que.forEach(function (f, i) {
            var s = d.createElement('script');
            s.async = false;
            s.src = f;
            s.addEventListener('load', loadHandler, false);
            d.body.appendChild(s);
        });
    }
})();
