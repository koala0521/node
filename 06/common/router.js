/*
 * @Author: XueBaBa
 * @Description: 路由
 * @Date: 2020-07-31 16:11:54
 * @LastEditTime: 2020-08-13 18:01:29
 * @LastEditors: Do not edit
 * @FilePath: /node学习/05/common/router.js
 */

const fs = require(`fs`);
const path = require(`path`);
const common = require(`../module/common`);
const http = require('http');
const url = require('url');

exports.static = async function (req, res, staticPath) {


   console.log(url.parse(req.url));

   let pathName = url.parse(req.url).pathname;
   pathName = pathName === '/' ? '/index.html' : pathName;
   let extname = path.extname(pathName);
   let mime = await common.getfileMime(extname);
   let data = await readFile(staticPath, pathName);

   if (data) {
      res.writeHead(200, { 'Content-Type': mime });
      res.end(data);
   }

}


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