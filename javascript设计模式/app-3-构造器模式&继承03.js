/*
 * @Author: XueBaBa
 * @Description: JS 设计模式 - 构造器模式 完美继承
 * @Date: 2020-09-03 11:03:38
 * @LastEditTime: 2020-09-03 16:22:47
 * @LastEditors: Do not edit
 * @FilePath: /node学习/javascript设计模式/app-3-构造器模式&继承03.js
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


/* 子类实现继承 ：利用空对象做中介实现继承 */ 

function Dog(){
    // 继承父类实例属性
    Animal.call(this,`狗子`);

    console.log('____this', this);
}


function extend(parent,child){

    // 空对象做中介
    function F(){}
    F.prototype = parent.prototype;
    child.prototype = new F(); 
    child.prototype.constructor = child;
    Child.uber = Parent.prototype; // 保留父原型做备用属性
}

extend(Animal , Dog);


let child2 = new Dog();


child2.readArg();
