/*
 * @Author: XueBaBa
 * @Description: 文件描述~
 * @Date: 2020-09-18 11:33:14
 * @LastEditTime: 2020-09-18 12:30:29
 * @LastEditors: Do not edit
 * @FilePath: /koa/module/db.js
 */

const MongoClient = require('mongodb').MongoClient;

const Config = require('./config');

class Db{


    constructor(){
        this.dbClinet = null;
        this.connect();
    }

    // 单例模式，解决数据库多次实例化的问题
    static getInstance(){
        if( !Db.instance ){
            Db.instance = new Db();        
        }

        return Db.instance
    }

    connect(){
        
        return new Promise((resolve,reject)=>{

            if( !this.dbClinet ){  // 保存数据库对象，解决了多次连接数据库问题

                MongoClient.connect( Config.dbUrl,{ useUnifiedTopology: true },(err,db)=>{
                    if( err ){
                        console.log('err',err);
                        reject(err);
                        return
                    }
    
                    this.dbClinet = db.db(Config.dbName);
                    resolve( this.dbClinet );
                                        
                    console.log('数据库连接成功');
    
                })
            }else{
                resolve( this.dbClinet );
            }

        })
        

    }

    find(cName,opt){

        return new Promise((resolve,reject)=>{
            this.connect().then((db)=>{
            
                let result = db.collection(cName).find(opt).toArray((err,data)=>{
                    if(err){
                        console.log('err',err);
                        reject(err);
                        return                    
                    }
                    resolve(data)
                    
                });
            })
        })

    }

    insert(){
        
    }

    update(){
        
    }

}


exports.myDb = Db.getInstance();