const express = require('express');
const app = express();
const d3 = import('d3');

// 设置静态文件目录
app.use(express.static('public'));

// 根路由的处理程序
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// 启动服务器
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
