var path = require('path'),
    gulp = require('gulp'),
    cssmin = require('gulp-cssmin'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch');

gulp.task('less', function(){
  gulp.src(['./less/bootstrap/bootstrap.less', './less/*.less'])
    .pipe(less())
    .pipe(gulp.dest('./css'))
    .pipe(cssmin({keepSpecialComments: 1}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./css'))
});

gulp.task('watch', function(){
    gulp.watch('./less/**/*.less', function(){ gulp.run('less'); });
});

gulp.task('default', ['less']);
