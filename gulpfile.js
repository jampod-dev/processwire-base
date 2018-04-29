var gulp = require('gulp'),
plumber = require('gulp-plumber'),
gutil = require('gulp-util'),
sass = require('gulp-sass'),
minifycss = require('gulp-minify-css'),
autoprefixer = require('gulp-autoprefixer'),
uglify = require('gulp-uglify'),
rev = require('gulp-rev'),
imagemin = require('gulp-imagemin'),
clean = require('gulp-clean'),
concat = require('gulp-concat'),
cache = require('gulp-cache'),
rename = require('gulp-rename'),
browserSync = require('browser-sync'),
reload      = browserSync.reload;

var onError = function (err) {  
  gutil.beep();
  console.log(err);
  
};


//sync
gulp.task('browser-sync', function() {
  browserSync({
        proxy: "" // Add your site URL here
      });
});

//sassiness

gulp.task('sass', function () {
  gulp.src('dev/css/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('dev/css'));
});

//css
gulp.task('styles', function() {
  return gulp.src('dev/css/style.css')
  .pipe(gulp.dest('css'))
  .pipe(autoprefixer({
    browsers: ['last 2 versions', 'ie >= 9', 'Android >= 2.3', 'ios >= 7'],
    cascade: false
  }))
  .pipe(rename({suffix: '.min'}))
  .pipe(minifycss())
  .pipe(gulp.dest('css'));
});

//js
gulp.task('scripts', function() {
  return gulp.src('dev/js/*.js')
  .pipe(plumber({errorHandler: onError}))
  .pipe(concat('main.min.js'))
  .pipe(gulp.dest('js'))
  .pipe(rename({suffix: '.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('js'));
});

//image compression
gulp.task('images', function() {
  return gulp.src('dev/img/*')
  .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
  .pipe(gulp.dest('img'));
});

//cleanup time
gulp.task('clean', function() {
  return gulp.src(['css/*', 'js/*', 'img/*'], {read: false})
  .pipe(clean());
});

//watch all the things and reload when they change

gulp.task('watch', ['browser-sync'], function(){
  gulp.watch('dev/css/*.scss', ['sass', reload]);
  gulp.watch('dev/css/*.css', ['styles', reload]);
  gulp.watch('dev/js/*.js', ['scripts', reload]);
  gulp.watch('dev/img/*', ['images', reload]);
});