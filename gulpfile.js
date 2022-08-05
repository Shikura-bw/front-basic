const gulp = require('gulp')
const notify = require('gulp-notify')
const plumber = require('gulp-plumber')
const ejs = require('gulp-ejs')
const rename = require('gulp-rename');
const fs = require('fs')

// ----------------------------------------- EJS

const src = './src'

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

gulp.task('watch', () => {
  gulp.watch(src + '/template/**/*.ejs', gulp.series('ejs'))
})

gulp.task('default', gulp.series('ejs', 'watch'))
gulp.task('build', gulp.series('ejs'))