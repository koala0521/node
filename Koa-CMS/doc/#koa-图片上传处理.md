<!--
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-10-09 16:39:21
 * @LastEditTime: 2020-10-13 11:25:15
 * @LastEditors: Do not edit
 * @FilePath: /Koa-CMS/doc/#koa-图片上传处理.md
-->

# koa 


## 一、 上传插件 @koa/multer

@koa/multer 是一个 node.js 中间件，用于处理 multipart/form-data 类型的表单数据，它主要 用于上传文件。 

注意: Multer 不会处理任何非 multipart/form-data 类型的表单数据，意思就是我们要上传图 片必须在 form 表单上面加 multipart/form-data


## 二、Koa 上传文件模块 @koa/multer 使用

1、 安装

```

    npm install --save @koa/multer multer

```

2、引入配置 @koa/multer 模块 ：


```
const multer = require('@koa/multer');
var upload = multer(); 

```

3、文件上传本地配置

```

    //配置 
    var storage = multer.diskStorage({ 

        //文件保存路径 
        destination: function (req, file, cb) { 

            cb(null, 'public/uploads/')  //注意路径必须存在 
            
        
        },
        //修改文件名称 
        filename: function (req, file, cb) {

            var fileFormat = (file.originalname).split("."); 
            cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]); 
        } 
    })

    //加载配置 
    var upload = multer({ storage: storage }) 

```javascript


4、使用 @koa/multer

```
    // upload.single('face') 传入的字段需要和 form 表单的 name 相同
    router.post('/doAdd', upload.single('face'), async (ctx, next) => {
        
        ctx.body = { 
            filename: ctx.req.file.filename,
            //返回文件名 
            body:ctx.req.body 
        } 
    });

```

