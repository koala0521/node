/*
 * @Author: XueBaBa
 * @Description: JS 设计模式 - 单例模式
 * @Date: 2020-09-03 11:03:38
 * @LastEditTime: 2020-09-03 11:53:00
 * @LastEditors: Do not edit
 * @FilePath: /node学习/javascript设计模式/app.js
 */


/*


    单例模式也叫单体模式，核心思想是确保一个类只对应一个实例。

    单例模式核心思路是：每次调用构造函数时，返回指向同一个对象的指针。 也就是说，我们只在第一次调用构造函数时创建新对象，之后调用返回时返回该对象即可。所以重点变成了如何缓存初次创建的变量对象。


    单例模式的作用

    单件模式经常被用来管理资源敏感的对象，比如：数据库连接对象、注册表对象、线程池对象等等，这种对象如果同时存在多个的话就会造成各种不一致的麻烦（你总不希望发生数据库重复连接的异常吧）


    此外，单例模式还可以用来减少内存开销（保证巨大对象只有一个）

*/ 




let Singleton = (function (){

    return {
        attr: '',
        getInstance: function() {
            
            if ( !this.sing ) {
                this.sing = true;
            }

            return this;
        },
        setAttr(val){
            this.attr = val;
        }
    }    
})()



let obj0 = Singleton.getInstance();
let obj1 = Singleton.getInstance();


obj0.setAttr(100);

console.log('obj1__' ,obj1.attr);


let obj2 = Singleton.getInstance();

console.log('obj2_____' ,obj2.attr);






