var gulp = require("gulp");

var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


// 编译Sass
gulp.task('sass', function() {
    gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./csss'));
});

// 合并，压缩文件
gulp.task('scripts', function() {
    gulp.src('test/*/*/*.js')
        //.pipe(concat('fck.js'))
        //.pipe(gulp.dest('fck'))
        //.pipe(rename('fck.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task("family",function(){
    gulp.src("").pipe(concat())
})

// 默认任务
gulp.task('default', function(){
    gulp.run( 'sass', 'scripts');

    // 监听文件变化
    gulp.watch('./js/*.js', function(){
        gulp.run( 'sass', 'scripts');
    });
    gulp.watch('sass/*.scss', function(){
        gulp.run( 'sass', 'scripts');
    });
});
