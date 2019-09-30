# miniProgram_upload-download
微信小程序中将PDF文件上传至后台Node.js服务器进行数据处理和存储，在Vue中进行后台存储PDF文件的下载。

🔗博客文章链接：[小程序中PDF文件的上传及下载](https://xuezenghuigithub.github.io/2019/09/30/upload_pdf/#more)

## 目录介绍及项目启动
#### miniProgram

微信小程序代码部分，实现选择会话中PDF文件并上传至Node后台。使用微信开发者工具打开，**勾选详情中不校验合法域名、web-view(业务域名)、TLS版本以及HTTPS证书选项再进行编译**。

#### NodeJs
后台接口部分，Node.js+Express+multer，实现的PDF文件的存储及
