/*
 * @Author: XueBaBa
 * @Description: 路由
 * @Date: 2020-07-31 16:11:54
 * @LastEditTime: 2020-08-17 14:21:14
 * @LastEditors: Do not edit
 * @FilePath: /node??/08/module/router.js
 */

const fs = require(`fs`);
const path = require(`path`);
const common = require(`../common/common`);
const http = require('http');
const url = require('url');
const ejs = require(`ejs`);


function readFile(staticPath, pathName) {

   return new Promise((resolve, reject) => {

      fs.readFile(`./${staticPath}${pathName}`, (err, data) => {
         if (!err) {
            resolve(data.toString())
         } else {
            resolve(false)
         }

      });
   })

}


let app = {
   static: async (req, res, staticPath) => {


      let pathName = url.parse(req.url).pathname;
      pathName = pathName === '/' ? '/index.html' : pathName;
      let extname = path.extname(pathName);
      let mime = await common.getfileMime(extname);
      let data = await readFile(staticPath, pathName);

      if (data) {
         res.writeHead(200, { 'Content-Type': mime });
         res.end(data);
      }

   },
   login: (req, res) => {

      ejs.renderFile('./views/login.ejs', {}, (err, data) => {
         res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
         res.end(data);
      });

      return
   },
   doLogin: (req, res) => {

      let postData = '';

      req.on('data', (chunk) => {
         postData += chunk;
      })
      req.on('end', () => {
         console.log(`postData ____`, postData);
         res.end(postData);
      })

   },
   error: (req, res) => {
      res.end('error')
   }

};
module.exports = app;
