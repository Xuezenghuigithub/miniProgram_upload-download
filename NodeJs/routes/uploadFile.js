var express = require('express')
var router = express.Router()
var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
var multer = require('multer'); // 引入multer中间件
var storage = multer.diskStorage({ // multer磁盘存储引擎
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) { // 文件重命名
        var filename = req.body.filename;
        cb(null, filename)
    }
})
var upload = multer({
    storage: storage
})

var fs = require('fs'); // 引入文件模块

router.post('/uploadFile', upload.single('file'), (req, res, next) => {
    var file = req.file; // 文件信息
    var body = req.body; // 文本域信息
    console.log('body', body);
    console.log('file', file);
    res.json({
        status: 200
    })
})

router.post('/downloadFile',(req,res) => {
    var filename = req.body.filename;
    var file = './uploads/'+ filename;
    console.log(file);
    res.writeHead(200, { //设置响应头
        'Content-Type': 'application/octet-stream',//告诉浏览器这是一个二进制文件
        'Content-Disposition': 'attachment; filename=' + encodeURI(filename),//告诉浏览器这是一个需要下载的文件
    });
    var readStream = fs.createReadStream(file);//得到文件输入流
    readStream.on('data', (chunk) => {
        res.write(chunk, 'binary');//文档内容以二进制的格式写到response的输出流
    });
    readStream.on('end', () => {
        res.end();
    })
})

module.exports = router;