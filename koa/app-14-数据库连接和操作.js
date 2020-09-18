/*
 * @Author: XueBaBa
 * @Description: 数据库操作~
 * @Date: 2020-09-15 10:56:12
 * @LastEditTime: 2020-09-18 11:58:42
 * @LastEditors: Do not edit
 * @FilePath: /koa/app-14-数据库连接和操作.js
 */


/**
 * 
 * 1. 安装 mongodb
 * 
 * 2. 连接数据库
 * 
 * 3. 操作数据库
 * 
 * */ 

 const MongoClient = require('mongodb').MongoClient;

 const dburl = 'mongodb://127.0.0.1:27017/';
 const dbName = 'koa';



//  连接数据库
//  MongoClient.connect( dburl ,{ useUnifiedTopology: true },(err,client)=>{
     
//     if(err){
//         console.log('err' , err);
        
//         return
//     }

//     let dbo = client.db( dbName );
//     let obj = {
//         "id": Number.parseInt( Math.random()*100 ),
//         "username": "猪猪",
//         "age": 8,
//         "sex": "猪"        
//     };

//     // 插入数据
//     dbo.collection('user').insertOne(obj ,(err,result)=>{
//         if(err){
//             console.log('插入数据库失败了~~');
//             return
//         }
//         console.log(`插入数据成功~~`);
//         client.close();
//     })
    
// })


 console.time('111');

//  查询数据库
MongoClient.connect( dburl ,{ useUnifiedTopology: true },(err,db)=>{

    if(err){

        console.log('err',err);        
        return
    }

    let dbo = db.db(dbName);

    let list = dbo.collection('user').find().toArray((err,result)=>{
        if(err) console.log('err',err);

        db.close();

        console.timeEnd('111');
        
    });
    
})