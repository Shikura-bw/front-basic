const gulp = require('gulp')
const notify = require('gulp-notify')
const plumber = require('gulp-plumber')
const ejs = require('gulp-ejs')
const rename = require('gulp-rename');
const fs = require('fs')

// ----------------------------------------- EJS

const src = './_src'

gulp.task('ejs', (done) => {
    const jsonData = '_src/pages.json';
    const json = JSON.parse(fs.readFileSync(jsonData));
    const pages = json.pages;
    const template = '_src/template/template.ejs';

    for (let i = 0; i < pages.length; i++) {
      gulp.src(template)
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(ejs({
          jsonData: pages[i],
          dir: pages[i].dir
        }))
        .pipe(rename((path) => {
          path.dirname += pages[i].dir;
          path.basename = pages[i].name;
          path.extname = '.html';
        }))
        .pipe(gulp.dest('./dist'));
    }
    done();
})

gulp.task('copy', (done) => {
  gulp.src('_src/assets/img/**')
    .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
    .pipe(gulp.dest(`./dist/assets/img`));
  done();
})

gulp.task('watch', (done) => {
  gulp.watch(src + '/template/**/*.ejs', gulp.series('ejs'));
  gulp.watch(src + '/assets/img/**', gulp.series('copy'));
  done();
})

gulp.task('default', gulp.series('ejs', 'copy', 'watch'))
gulp.task('build', gulp.series('ejs', 'copy'))