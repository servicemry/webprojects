本案例演示如何使用gulp自动构建工具
1.npm init 构建package.json
2.npm install gulp -g --save 全局安装gulp
3.npm install gulp --save-dev将gulp安装在当前项目中
4.在当前项目下创建gulpfile.js文件
5.引入gulp模块到gulpfile.js文件中
安装各种模块(打开终端 切换到当前目录下)
npm install gulp-imagemin --save-dev 压缩图片的gulp模块
npm install gulp-uglify --save-dev  压缩js gulp的模块
npm install gulp-sass --save-dev  压缩sass文件的模块
npm install gulp-concat --save-dev  合并文件的gulp模块