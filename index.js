const express = require('express');
const { spawn } = require('child_process');
const app = express();

// 設置靜態文件目錄
app.use(express.static('public'));

// 其他路由和中間件
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// 呼叫並執行py檔
app.get('/execute_script', (req, res) => {
    const scriptPath = 'C:\\Users\\taiwa\\OneDrive\\桌面\\test\\python-map\\weather.py';
    const pythonProcess = spawn('python', [scriptPath]);
    pythonProcess.on('close', (code) => {
        if (code === 0) {
            res.sendStatus(200);
        } else {
            res.sendStatus(500);
        }
    });
});

// 設置靜態文件目錄
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
