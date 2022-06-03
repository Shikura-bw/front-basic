const config = require('./config')
const gulp = require('gulp')
const watch = require('gulp-watch')
const notify = require('gulp-notify')
const plumber = require('gulp-plumber')
const ejs = require('gulp-ejs')
const rename = require('gulp-rename');

// ----------------------------------------- EJS
gulp.task('ejs', () => {
  return gulp.src([
    config.path.src + 'template/[^_]*.ejs',
    config.path.src + 'template/[^_]**/[^_]*.ejs',
    config.path.src + 'template/[^_]**/[^_]**/[^_]*.ejs',
    config.path.src + 'template/[^_]**/[^_]**/[^_]**/[^_]*.ejs'
  ])
    .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
    .pipe(ejs())
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest(config.path.dest))
})

gulp.task('watch', () => {
  watch(config.path.src + 'template/**/*.ejs', gulp.series('ejs'))
})

gulp.task('default', gulp.series('ejs', 'watch'))
gulp.task('build', gulp.series('ejs'))