const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const notify = require('gulp-notify');
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const plumber = require('gulp-plumber');

// ------------------------------------scss→css
gulp.task('sass', function () {
	return gulp.src([
		'_src/style.scss',
	])
		.pipe(sass({ outputStyle: 'expanded' }))
		.pipe(postcss([
			autoprefixer({
				cascade: false
			})
		]))
		.pipe(gulp.dest('assets/css/'))
		.pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
});
gulp.task('watch', () => {
	gulp.watch([
		'_src/*.scss',
	], gulp.series('sass'));
});
gulp.task('default', gulp.parallel('sass', 'watch'));