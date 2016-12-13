var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('sass', function () {
    return gulp.src('./src/*.sass')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./build'));
});

gulp.task('clean-css', ['sass'], function() {
    return gulp.src('./build/*.css')
      .pipe(cleanCss({compatibility: 'ie8'}))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./build'))
});

gulp.task('watch', function () {
    gulp.watch('./src/*.sass', ['sass']);
});

gulp.task('default', ['sass', 'clean-css']);
