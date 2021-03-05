<!--
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-10-09 16:39:21
 * @LastEditTime: 2020-10-29 12:00:04
 * @LastEditors: Do not edit
 * @FilePath: /Koa-CMS/doc/#koa-富文本编辑器-uEdit.md
-->

# koa uEditor

## 一、 Ueditor 介绍 UEditor 

    是由百度 web 前端研发部开发所见即所得富文本 web 编辑器，具有轻量，可定制， 注重用户体验等特点，开源基于 MIT 协议，允许自由使用和修改代码。 

    官网：http://ueditor.baidu.com/ 
    第三方 sdk：http://ueditor.baidu.com/website/thirdproject.html


## 二、 Koa 中使用 koa2-ueditor


1. 安装 Koa2 的 koa2-ueditor： 

npm 安装

```

  npm install koa2-ueditor --save / cnpm install koa2-ueditor --save

```javascript

2. 手动下载 koa2-ueditor 

下载地址：https://github.com/sealice/koa2-ueditor 或者 https://github.com/htzhanglong/koa2-ueditor 下载完成以后把官方例子中的 example->public->ueditor 复制到我们的项目里面。

3. 对应的 koa 业务逻辑中配置 koa2-ueditor 模块 ：


```

    const ueditor = require('koa2-ueditor') 

    // 百度富文本编辑器 图片上传路由

    router.all('/editor/controller', ueditor(['public', {
        "imageAllowFiles": [".png", ".jpg", ".jpeg"], 
        "imagePathFormat": "/upload/ueditor/image/{yyyy}{mm}{dd}/{filename}" 
    }]))

```

