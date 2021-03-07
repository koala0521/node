/*
 * @Author: 子非鱼
 * @Description: 文件描述~
 * @Date: 2021-03-05 17:31:50
 * @LastEditTime: 2021-03-05 19:19:20
 * @LastEditors: Do not edit
 * @FilePath: /node学习/前端知识（持续更新）/原型-原型链.js
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
 * 继承 https://zhuanlan.zhihu.com/p/110175302
 * 
 * 用构造函数和原型链的混合模式去实现继承，避免对象共享可以参考经典的extend()函数，
 * 
 * 就是用一个空函数当做中间变量
 * 
 * 
 * 
 * 
 * */ 
 

 //  继承实现 1 原型链继承 (吃大锅饭)

//  优点：

//     父类方法可以复用

// 缺点：

//     父类的引用属性会被所有子类实例共享，多个实例对引用类型的操作会被篡改（代码如下）；子类构建实例时不能向父类传递参数

//  function Person(){

//     this.name = '老张';
//     this.member = ['老大', '老二','老三','老四'];    
//  }

// Person.prototype.money = function (name) {
//     let name1 = name || this.name;
//     console.log( name + '的钱财'  );
//     return ( name + '的钱财' );
// }

// function children(name){
//     this.name = name || this.name;
    
//     name && this.member.push(name);
// } 

// 核心代码
// children.prototype = new Person();

// let li01 = new children('老6');
// let li02 = new children();



//  继承实现 2  构造函数继承 （借鸡生蛋）


// function Person(args){

//     this.name = '老张';
//     this.member = ['老大', '老二','老三','老四'];    
// }

// Person.prototype.money = function (name) {
//     let name1 = name || this.name;
//     console.log( name + '的钱财'  );
//     return ( name + '的钱财' );
// }

// function children(name){

//     // 核心代码
//     Person.call(this, '这里可以传参数');  // 利用函数 this 的转换，复制父类数据

//     this.name = name || this.name;
    
//     name && this.member.push(name);
// } 

// let li01 = new children('老6');
// let li02 = new children();


// console.log('li01___', li01);
// console.log('li02___', li02);

// 优点：

// 和原型链继承完全反过来
// 父类的引用属性不会被共享子类构建实例时可以向父类传递参数

// 缺点：

// 只能继承父类的实例属性和方法，不能继承原型属性/方法无法实现复用，
// 每个子类都有父类实例函数的副本，影响性能

 


//  继承实现 3  组合继承（上面两种结合起来） （借鸡生蛋 + 吃大锅饭 ）


// function Person(args){

//     this.name = '老张';
//     this.member = ['老大', '老二','老三','老四'];    
//     console.log(`我执行了~~`);
// }

// Person.prototype.money = function (name) {
//     let name1 = name || this.name;
//     console.log( name1 + '的钱财'  );
// }

// function children(name){

//     // 核心代码: 1、用构造函数来复制父类的实例属性
//     Person.call(this, '这里可以传参数');   // 第 2 次调用 Person()

//     this.name = name || this.name;
    
//     name && this.member.push(name);
// } 

// // 2、原型继承
// // *** 第 1 次调用 Person()
// children.prototype = new Person();

// children.prototype.constructor = children; // 手动修改构造函数指针



// let li01 = new children('老6');


// console.log('li01___', li01);
// console.log('li02___', li02);
// li01.money(); // 可以正确执行


// 优点：

//     父类的方法可以被复用
//     父类的引用属性不会被共享
//     子类构建实例时可以向父类传递参数

// 缺点（对照注释）：

//     第一次调用 Person()：给 children.prototype 写入两个属性name，member。
//     第二次调用 children()：给 li01 写入两个属性 name，member。

// 实例对象 li01 上的两个属性就屏蔽了其原型对象 children.prototype 的两个同名属性。
// 所以，组合模式的缺点就是在使用子类创建实例对象时，其原型中会存在两份相同的父类实例的属性/方法。
// 这种被覆盖的情况造成了性能上的浪费。



// 4 原型式继承 ( 是浅拷贝 )

// const Origin = {
//     nation: '中国',
//     list: [1,2,3,4]
//   }
  
  

// let Doctor1 = Object.create( Origin );
// let Doctor2 = Object.create( Origin );

// Doctor1.list.push(5);
// console.log( Doctor1.list );
// console.log( Doctor1.list );


// 5. 寄生组合继承（最优方案）

function Person(args){

    this.name = '老张';
    this.member = ['老大', '老二','老三','老四'];    
}

Person.prototype.money = function (name) {
    let name1 = name || this.name;
    console.log( name1 + '的钱财'  );
}

function children(name){

    // 1、用构造函数来复制父类的实例属性
    Person.call(this, '这里可以传参数');   // 第 2 次调用 Person()

    this.name = name || this.name;
    
    name && this.member.push(name);
} 

function inheritPortotype( father,child ){

    // 修正子类原型对象指针，指向父类原型的一个副本
    child.prototype = Object.create( father.prototype );
    // 手动修改构造函数指针
    child.prototype.constructor = child; 

}

inheritPortotype(Person, children);



let li01 = new children('老6');


console.log('li01___', li01);
console.log('li02___', li02);
li01.money(); // 可以正确执行