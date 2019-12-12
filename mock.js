const express = require('express')
const app = express()

app.get('/api/coures/list',(req,res)=>{
    //支持跨域调用
    res.header('Access-Control-Allow-Origin',"*")
    // res.header('Content-Security-Policy',"default-src 'none'")
    res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE')
    res.header('Content-Type','application/json;chareset=utf-8')
    res.json({
        code:0,
        list:[
            {name:'web全栈', id:1},
            {name:'js高级', id:2},
            {name:'web小白', id:3},
            {name:'Java高级', id:4}
        ]
    })
})


app.listen(9090,()=>{
    console.log('mock 启动完毕')
})