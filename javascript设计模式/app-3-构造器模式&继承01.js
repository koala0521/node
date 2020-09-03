/*
 * @Author: XueBaBa
 * @Description: JS 设计模式 - 构造器模式
 * @Date: 2020-09-03 11:03:38
 * @LastEditTime: 2020-09-03 15:44:02
 * @LastEditors: Do not edit
 * @FilePath: /node学习/javascript设计模式/app-3-构造器模式&继承01.js
 */


/*


    构造器模式是用来实现属性共享的。所谓“构造器模式”，其实只是一个基本常识：把私有属性定义在构造函数中，把公有属性定义在原型对象上。

*/ 


function Super(arg){
    
    this.arg = arg || `父类`;
    
}

// 公共方法
Super.prototype.readArg = function(){
    
    console.log('_____arg' , this.arg );
    
}

/* 子类实现继承 */ 
function Sub(){
    // 继承父类实例属性
    Super.call(this,'子类');
}

// 继承父类原型的方法
Sub.prototype = new Super();  

 // 修改构造函数指针，防止指针错误
Sub.prototype.constructor = Sub; 

let parent = new Super();
let child = new Sub();


parent.readArg();
child.readArg();

console.log('Sub_____', child );



