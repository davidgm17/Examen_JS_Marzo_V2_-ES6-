//  =========================================================
//  gulpfile.js
//  =========================================================

//  -------------------------------------------- strict mode

'use strict';
const CF = './gulp.conf';

//  ----------------------------------------------- requires

const fs = require('fs');
const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
const htmlmin = require('gulp-htmlmin');
const replace = require('gulp-string-replace');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');

// ---------------------------------------------- Gulp Conf

var config = JSON.parse(fs.readFileSync(CF));

function confReload(done) {
  config = JSON.parse(fs.readFileSync(CF));
  browserSync.reload;
  done();
};

sass.compiler = require('node-sass');

// ---------------------------------------------- Gulp Tasks

gulp.task('serve', () => {
  browserSync.init(config.browser.opts);
});

gulp.task('html', () => {
  return gulp.src(config.html.src)
    .pipe(replace('\/scss\/', '/css/'))
    .pipe(replace('\.scss', '.css'))
    .pipe(htmlmin(config.html.opts))
    .pipe(gulp.dest(config.html.dest));
});

gulp.task('img', () => {
  return gulp.src(config.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(config.images.dest));
});

gulp.task('sass', () => {
  return gulp.src(config.sass.src)
    .pipe(sass.sync(config.sass.opts.mynify).on('error', sass.logError))
    .pipe(gulp.dest(config.sass.dest))
    .pipe(browserSync.stream());
});

gulp.task('javascript', () => {
  return gulp.src(config.javascript.src)
    .pipe(babel(config.javascript.opts))
    .pipe(uglify())
    .pipe(gulp.dest(config.javascript.dest))
});

// ---------------------------------------------- Gulp Watch
gulp.task('watch:styles', () => {
  gulp.watch(config.sass.src, gulp.series(
    'sass'
  ));
  browserSync.stream();
});

gulp.task('watch:scripts', () => {
  gulp.watch(config.javascript.src, gulp.series(
    'javascript'
  )).on('change', browserSync.reload);
});

gulp.task('watch:index', () => {
  gulp.watch(config.html.src, gulp.series(
    'html'
  )).on('change', browserSync.reload);
});

gulp.task('watch:conf', () => {
  gulp.watch(CF).on('change', gulp.series(confReload));
});

gulp.task('watch', gulp.parallel('watch:index', 'watch:styles', 'watch:scripts', 'watch:conf'));

gulp.task('start', gulp.parallel('html', 'sass', 'javascript'));

// -------------------------------------------- Default task
gulp.task('default', gulp.series('start', gulp.parallel('watch', 'serve')));