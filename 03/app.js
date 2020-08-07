/*
 * @Author: XueBaBa
 * @Description: 小练习 ~~ 读取目录下的所有文件夹  await & async
 * @Date: 2020-08-05 18:11:52
 * @LastEditTime: 2020-08-07 18:14:20
 * @LastEditors: Do not edit
 * @FilePath: /node学习/03/app.js
 */
const fs = require('fs');
let PATH = './www';



// 1. 判断资源是目类型还是文件类型

async function isDir(path){
    return new Promise((resolve,reject)=>{

        fs.stat(path,(err,data)=>{
            if( err ){
                console.log('err' , err);
                return
            }
            if( data.isDirectory() ){
                resolve(true)
            }else{
                resolve(false)
            }
        })
    })

}



function main(rootPath){

    let flielist = [];

    fs.readdir( rootPath ,async (err,data)=>{
        if(err){
            console.log(err);
            return        
        }
    
        // data.forEach( async(el) => {
        //     let state =  await isDir(`${ rootPath }/${ el }`);

        //     if( state ){
        //         flielist.push( el )
        //     }
        // });
        
        for (let index = 0; index < data.length; index++) {
            let el = data[index];
            let state =  await isDir(`${ rootPath }/${ el }`);

            if( state ){
                flielist.push( el )
            }            
        }

        console.log('flielist_____' , flielist);        
    })    

}

main(PATH);



