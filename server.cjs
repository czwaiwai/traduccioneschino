var express = require('express')
var app = express()
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))
app.post('/message', (req, res) => {
    let params = req.body
    // {
    //     name: 'fgh',
    //     email: '278178596@qq.com',
    //     subject: 'fds',
    //     message: 'ghfhjgj'
    //   }
    res.json({
        code: 0,
        message: '收到消息'
    })
})

app.listen(3000,() =>{
    console.log('服务已启动')
})