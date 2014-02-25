var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    jshint = require('gulp-jshint');

gulp.task('lint', function () {
  gulp.src(['./**/*.js', '!node_modules/**'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('default', function () {
  nodemon({script: 'app/server.js', ext: 'js'}).on('restart', ['lint']);
});