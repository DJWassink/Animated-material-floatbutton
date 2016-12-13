var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('sass', function () {
    return gulp.src('./src/*.sass')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./dist'));
});

gulp.task('clean-css', ['sass'], function() {
    return gulp.src('./dist/*.css')
      .pipe(cleanCss({compatibility: 'ie8'}))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./dist'))
});

gulp.task('watch', function () {
    gulp.watch('./src/*.sass', ['sass']);
});

gulp.task('default', ['sass', 'clean-css']);
