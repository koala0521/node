/*
 * @Author: XueBaBa
 * @Description: 类、静态方法 ~
 * @Date: 2020-09-15 10:56:12
 * @LastEditTime: 2020-09-18 10:55:39
 * @LastEditors: Do not edit
 * @FilePath: /koa/app.js
 */


 class Person{

    constructor(name){
        this.name = name;    
    }

    // 静态方法
    static good(){
        console.log('这是静态方法~');
        
    }

    say(){
        console.log('hello world');        
    }

    run(){
        console.log('i am running');
        
    }

 }


 Person.good();

 let p1 = new Person('小王');

 p1.say();