/*
 * @Author: 子非鱼
 * @Description: 文件描述~
 * @Date: 2021-03-05 17:31:50
 * @LastEditTime: 2021-03-05 18:15:30
 * @LastEditors: Do not edit
 * @FilePath: /前端知识（持续更新）/原型-原型链.js
 */



/** 
 *  1. 原型
 * 原型对象也是普通的对象，是对象一个自带隐式的 __proto__ 属性，原型也有可能有自己的原型，
 * 如果一个原型对象的原型不为 null 的话，我们就称之为原型链
 * 
 * 2. 原型链
 * 原型链是由一些用来继承和共享属性的对象组成的（有限的）对象链
 * 
 * 
 * 
 * 3. 继承
 * 
 * 用构造函数和原型链的混合模式去实现继承，避免对象共享可以参考经典的extend()函数，
 * 
 * 就是用一个空函数当做中间变量
 * 
 * 
 * */ 
 

 function Person(){

     this.name = '鱼儿';
    this.age = 666;    
 }

Person.prototype.run = function () {
    console.log('Person', this.name);
    return this.name;
}
Person.prototype.say = function () {
    console.log('Person', this.age);
    return this.name;
}

function Li(name){

    this.say = function (name) {
        this.name = name || 'Tom';        
    }
} 

Li.prototype = new Person();

let li01 = new Li('小李1号');
let li02 = new Li();

console.log('li01___', li01);
console.log('li02___', li02);


 