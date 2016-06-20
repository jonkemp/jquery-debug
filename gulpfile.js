/* eslint-disable */
'use strict';

var gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    mochaPhantomJS = require('gulp-mocha-phantomjs');

var paths = {
    scripts: ['./*.js', '!./gulpfile.js']
};

gulp.task('lint', function () {
    return gulp.src(paths.scripts)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('test', function () {
    return gulp.src('testrunner.html')
      .pipe(mochaPhantomJS({
        phantomjs: {
          useColors:true
        }
      }));
});

gulp.task('watch', function () {
    gulp.watch(paths.scripts, ['lint', 'test']);
});

gulp.task('default', ['lint', 'test']);
