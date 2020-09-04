/*
 * @Author: XueBaBa
 * @Description: JS 设计模式 - 观察者模式
 * @Date: 2020-09-03 11:03:38
 * @LastEditTime: 2020-09-04 17:50:39
 * @LastEditors: Do not edit
 * @FilePath: /node学习/javascript设计模式/app-4-观察者模式.js
 */


/*

一.什么是观察者模式？

    把现实世界中的报纸与订阅者的关系抽象出来就是观察者模式，一种报纸对应多个订阅者，订阅者可以随时解除订阅，未订阅的读者也可以随时开始订阅。一旦有新报纸发布，所有的订阅者都会收到新内容。

    在观察者模式中，报纸叫做主题Subject，订阅者叫做观察者Observer，一个Subject可以被多个Observer关注，Observer可以随时解除关注，新的Observer也可以随时关注Subject。Subject内容发生改变时，会通知所有的Observer。

    我们现在可以通过实现一个观察者模式来进一步扩展我们刚才所学到的东西。这个实现包含一下组件：

        被观察者：维护一组观察者， 提供用于增加和移除观察者的方法。
        观察者：提供一个更新接口，用于当被观察者状态变化时，得到通知。
        具体的被观察者：状态变化时广播通知给观察者，保持具体的观察者的信息。
        具体的观察者：保持一个指向具体被观察者的引用，实现一个更新接口，用于观察，以便保证自身状态总是和被观察者状态一致的。


    
*/ 

// 观察者信息维护
function ObserverList(){
    this.list = [];
}

// 维护观察者 : add
ObserverList.prototype.add = function(obj){
    this.list.push(obj)
}

// 维护观察者 : remove
ObserverList.prototype.remove = function(obj){
    this.list = this.list.splice(this.list.findIndex((el)=>{
        return el.id === obj.id
    }),1)
}

// 维护观察者 : 读取指定的观察者
ObserverList.prototype.get = function(index){
    return this.list[index]
};

// 数量
ObserverList.prototype.Count = function(){
    return this.list.length;
};


// 被观察者
function Subject(){
    this.observers = new ObserverList();
}
// 订阅
Subject.prototype.addObserver = function(observer){
    this.observers.add(observer)
}

// 取消订阅
Subject.prototype.removeObserver = function(observer){
    this.observers.remove(observer)
}

// 发布通知
Subject.prototype.notice = function(context){
    let count = this.observers.Count();

    console.log('this.observers ____' , context );
    
    for (let index = 0; index < count; index++) {
        
        this.observers.get(index).Update(context);
        
    }
}





// 具体的被观察者

let realSubject = new Subject();


setTimeout(() => {
    realSubject.notice(`放假通知`);
}, 2000);




// 具体的观察者
function createOb(item){

    return {
        id: (Math.random() * 10000).toFixed(0),
        name: item.name,
        Update: function(notice){
            console.log(`___收到【${ notice }】通知。我是：${ item.name } 我打算${ item.action }`);
            
        }
    }
}


let obs = [
    {
        name: '张三',
        action: '回家'
    },{
        name: '李四',
        action: '旅行'     
    },{
        name: '小丽',
        action: '宅在家里'           
    },{
        name: '小美',
        action: '加班😭' 
    }
];

console.log('====================================');
console.log(realSubject);
console.log('====================================');

// 观察者调用被观察者的接口，发起订阅
for (let index = 0; index < obs.length; index++) {

    realSubject.addObserver(createOb( obs[index] ));
}