/*
 * @Author: XueBaBa
 * @Description: multer 文件上传封装
 * @Date: 2020-08-20 17:58:07
 * @LastEditTime: 2020-08-20 18:12:45
 * @LastEditors: Do not edit
 * @FilePath: /express/12/model/tools.js
 */


const path = require('path');
const multer  = require('multer');

let tools = {
    upload: function(){

        let storage = multer.diskStorage({
            destination: function (req, file, cb) {
                // 上传路劲
                cb(null, 'static/uploads')
            },
            // 自定义文件
            filename: function (req, file, cb) {
                let ext = path.extname(file.originalname);
                cb(null, Date.now() + '.' + ext);
            }
          })
          
        return multer({ storage: storage })  
    }
}

module.exports = tools
