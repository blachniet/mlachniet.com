var path = require('path'),
    gulp = require('gulp'),
    connect = require('connect'),
    cssmin = require('gulp-cssmin'),
    http = require('http'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    rename = require('gulp-rename');

gulp.task('less', function(){
  gulp.src(['./less/bootstrap/bootstrap.less', './less/*.less'])
    .pipe(less())
    .pipe(gulp.dest('./css'))
    .pipe(cssmin({keepSpecialComments: 1}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function(){
    gulp.watch('./less/**/*.less', ['less']);

    // Live Reload
    var server = livereload();
    gulp.watch(['./css/**', './fonts/**', './js/**', './*.html'], function(evt){
        server.changed(evt.path);
    });
});

gulp.task('server', ['watch'], function(){
    var app = connect()
      .use(connect.logger('dev'))
      .use(connect.static(__dirname));

    http.createServer(app).listen(3000);
});

gulp.task('default', ['server']);
