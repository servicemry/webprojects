var gulp=require('gulp')//引入gulp模块
var imgmin=require('gulp-imagemin')//引入压缩图片的gulp模块
var jsmin=require('gulp-uglify')//引入压缩js gulp的模块
var cssmin=require('gulp-sass')//引入压缩sass文件的模块
var concat=require('gulp-concat')//引入合并文件的gulp模块
/***
 * gulp.task()创建任务
 * gulp.src()要执行的文件
 * gulp.dest()执行后的文件的去向
 * gulp.watch()实时监听文件
 */

 //创建拷贝的任务
 gulp.task("copyhtml",function(){
     gulp.src("src/*.html").pipe(gulp.dest("dist/"))
 })
 //创建压缩图片任务
gulp.task("imageMin",function(){
    gulp.src("src/image/*").pipe(imgmin()).pipe(gulp.dest("dist/image"))
})
//创建压缩js任务
gulp.task("jsMin",function(){
    gulp.src("src/js/*.js").pipe(jsmin()).pipe(gulp.dest("dist/js"))
})
//创建压缩Sass文件的任务
gulp.task("cssMin",function(){
    gulp.src("src/sass/*").pipe(cssmin().on('error',cssmin.logError)).pipe(gulp.dest("dist/css"))
})

//创建合并文件的concat任务
gulp.task("hebing",function(){
    gulp.src("src/js/*").pipe(concat("index.js")).pipe(jsmin()).pipe(gulp.dest("dist/js"))
})

 //创建默认任务， 并执行上述所有任务，调用直接使用gulp调用即可
 gulp.task("default",["hebing","copyhtml","imageMin","cssMin","jsMin"])

 //监听所有任务是否发生改变，如果发生改变自动执行任务
 gulp.task("watch",function(){
     gulp.watch("src/js/*",["hebing"])
     gulp.watch("src/*.html",["copyhtml"])
     gulp.watch("src/image/*",["imageMin"])
     gulp.watch("src/sass/*",["cssMin"])
     gulp.watch("src/js/*",["jsMin"])
 })

