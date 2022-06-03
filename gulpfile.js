const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const sassGlob = require('gulp-sass-glob');
const cleanCss = require('gulp-clean-css');
const ejs = require('gulp-ejs');
const rename = require("gulp-rename");
const browserSync = require('browser-sync');
const path = require('path');


const srcArea = {
    css: '_src/scss/**/*.scss',
    js: '_src/js/*.js',
    ejs: '_src/ejs/**/*.ejs'
}
const destArea = {
    css: 'dist/assets/css/',
    js: 'dist/assets/js/',
    ejs: 'dist/'
}

const html = () => {
    return src([srcArea.ejs, '!' + "_src/ejs/**/_*.ejs"])
        .pipe(ejs({}, {}, { ext: '.html' }))
        .pipe(rename({ extname: ".html" }))
        .pipe(dest(destArea.ejs))
}

const css = () => {
    return src([srcArea.css, '!' + "_src/scss/**/_*.scss"])
        .pipe(sassGlob())
        .pipe(sass({ outputStyle: 'expanded' })
            .on('error', sass.logError))
        .pipe(postcss([
            require('autoprefixer')({
                cascade: false
            }),
        ]))
        .pipe(dest(destArea.css))
}

const js = () => {
    return src([srcArea.js, '!' + "_src/js/_*.js"])
    .pipe(dest(destArea.js))
}

const browser = () => {
    return browserSync({
        server: {
            baseDir: 'dist/'
        }
    })
}

function reload(done) {
    browserSync.reload();
    done();
}
function sync() {
    watch(srcArea.css, series(css));
    watch(srcArea.ejs, series(html));
}

exports.default = series(css, js , html);
exports.watch = parallel(browser, sync);
exports.test = series(html);
exports.js = series(js);