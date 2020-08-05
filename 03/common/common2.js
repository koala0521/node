/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-07-31 16:22:03
 * @LastEditTime: 2020-07-31 16:24:27
 * @LastEditors: Do not edit
 * @FilePath: /nodejs/03/common/common2.js
 */ 

 module.exports = {
     hello: function(){
        console.log('Hello Node');
    
        return `Hello Node`         
     },
     name: function(name){
        console.log('hello '+  name );
    
        return 'hello '+  name            
     }
 }