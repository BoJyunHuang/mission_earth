const express = require('express');
const app = express();
const d3 = import('d3');

// 設置靜態文件目錄
app.use(express.static('public'));

// 其他路由和中間件
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// 設置靜態文件目錄
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
