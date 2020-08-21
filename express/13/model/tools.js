/*
 * @Author: XueBaBa
 * @Description: multer 文件上传封装
 * @Date: 2020-08-20 17:58:07
 * @LastEditTime: 2020-08-21 12:06:01
 * @LastEditors: Do not edit
 * @FilePath: /express/13/model/tools.js
 */


const path = require('path');
const multer  = require('multer');
const sd = require('silly-datetime');
const mkdirp = require('mkdirp');

let tools = {
    upload: function(){

        let storage = multer.diskStorage({

            // 配置上传目录
            destination:  async (req, file, cb)=> {

                // 1 获取当前日期
                let day = sd.format( new Date() , 'YYYYMMDD');
                let dir = path.join('static/uploads',day);
                
                // 同步创建文件夹
                await mkdirp(dir);
                // 上传文件
                cb(null, dir );

            },
            // 自定义文件
            filename: (req, file, cb) =>{
                let ext = path.extname(file.originalname);
                console.log('ext____' , ext );
                
                cb(null, Date.now() + ext);
            }
          })
          
        return multer({ storage: storage })  
    }
}

module.exports = tools
