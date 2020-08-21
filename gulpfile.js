var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var terser = require('gulp-terser');
var browserSync = require('browser-sync').create();

var sassOptions = {
    outputStyle: 'compressed'
};

var prefixerOptions = {
};


gulp.task('sass', function() {
    return gulp.src('./sass/main.scss')
        .pipe(sass(sassOptions))
        .pipe(prefix(prefixerOptions))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('js', function() {

    var jsFiles = './scripts/*.js',
        jsDest = './js';

    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(terser())
        .pipe(gulp.dest(jsDest));
});


gulp.task('serve', gulp.series('sass','js', function() {
    
    browserSync.init({
        server: "./"
    });

    gulp.watch("./sass/*.scss", gulp.series('sass'));
    gulp.watch("./scripts/*.js", gulp.series('js'));
    gulp.watch("./*.html").on('change', browserSync.reload);
}));



gulp.task('default', gulp.series('serve'));