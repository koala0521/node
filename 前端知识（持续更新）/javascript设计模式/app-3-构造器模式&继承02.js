/*
 * @Author: XueBaBa
 * @Description: JS 设计模式 - 构造器模式
 * @Date: 2020-09-03 11:03:38
 * @LastEditTime: 2020-09-03 16:22:11
 * @LastEditors: Do not edit
 * @FilePath: /node学习/javascript设计模式/app-3-构造器模式&继承02.js
 */


/*

    构造器模式是用来实现属性共享的。所谓“构造器模式”，其实只是一个基本常识：把私有属性定义在构造函数中，把公有属性定义在原型对象上。

*/ 

function Animal(arg){
    
    this.arg = arg || `父类`;
}

// 功能属性直接保存在 prototype 
Animal.prototype.type = 'animal';

// 公共方法
Animal.prototype.readArg = function(){
    
    console.log('_____arg' , this.arg );
    
}


/* 子类实现继承 ：直接继承 */ 

function Cat(){
    // 继承父类实例属性
    Animal.call(this,'子类');
}

// 继承父类原型  子类和父类使用同一个原型对象（缺点：修改 prototype 时，子类和父类同时会受到影响）
Cat.prototype = Animal.prototype;  

 // 修改构造函数指针，防止指针错误
Cat.prototype.constructor = Cat; 

let parent = new Animal();
let child = new Cat();

parent.readArg();
child.readArg();
