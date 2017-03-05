// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch'),
    bower = require ('gulp-bower'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    rigger = require('gulp-rigger'),
    livereload = require('gulp-livereload'),
    cssmin = require('gulp-minify-css'),
    browserSync = require("browser-sync").create(),
    reload = browserSync.reload, // локальний сервер, який містить в собі live reload
    filter = require('gulp-filter'),
    flatten = require('gulp-flatten'),
    merge = require('merge-stream'),
    mainBowerFiles = require ('main-bower-Files');

// global paths
var path = {
    build: {
        js: 'js/',
        vendor_js: 'js/vendor',
        style: './',
        vendor_style: 'css/',
        img: 'images/',
        fonts: 'fonts/'
    },

    src: {
        js: 'src/js/main.js',
        style:'src/style/style.scss',
        img: 'src/images/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },

    watch: {
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.scss',
        img: 'src/images/**/*.*',
        fonts: 'src/fonts/**/*.*',
        bower: '../bower_components/**/*.*'
    },
    clean: './build'
};

// dev server settings
var config = {
    server: {
        baseDir: "./"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};

gulp.task('jsVendor', function() {
    var files = (mainBowerFiles({ filter: new RegExp('.*js$', 'i') }));
    gulp.src(files)
        .pipe(concat('vendor.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest(path.build.vendor_js));
});

gulp.task('cssVendor', function() {
    var files = (mainBowerFiles({ filter: new RegExp('.*scss$', 'i') }));
    var sass_files = gulp.src(files)
        .pipe(concat('vendor.scss'))
        .pipe(sass({
            outputStyle: 'nested',
            precison: 3,
            errLogToConsole: true,
            includePaths: ['bower_components/bootstrap-sass/assets/stylesheets','bower_components/font-awesome/scss']
        }))
        .pipe(cssmin())
        .pipe(gulp.dest(path.build.style));
    var css_bower = gulp.src('./bower_components/jquery-ui/themes/flick/jquery-ui.min.css')
        .pipe(concat('css-files.css'));
    var mergedStream = merge(sass_files, css_bower)
        .pipe(concat('vendor.css'))
        .pipe(cssmin())
        .pipe(gulp.dest(path.build.vendor_style));

    return mergedStream;
});

gulp.task('fontsVendor',['fontsBootstrap'], function () {
    return gulp.src('./bower_components/**/*.{eot,svg,ttf,woff,woff2}')
        .pipe(flatten())
        .pipe(gulp.dest(path.build.fonts));
});

gulp.task('fontsBootstrap', function () {
    return gulp
        .src('bower_components/bootstrap-sass/assets/fonts/**/*')
        .pipe(gulp.dest(path.build.fonts));
});

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(livereload());
});

gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.style))
        .pipe(livereload());
});

gulp.task('image:build', function () {
    gulp.src(path.src.img)
        // .pipe(imagemin({
        //     progressive: true,
        //     interlaced: true,
        //     pngquant: true
        // }))
        .pipe(gulp.dest(path.build.img))
        .pipe(livereload());
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', [
    'js:build',
    'style:build',
    'fonts:build',
    'image:build',
    'jsVendor',
    'cssVendor',
    'fontsVendor'
]);

// watch
gulp.task('watch', function(){
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});

// gulp.task('webserver', function () {
//     browserSync.init(config);
// });

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('default', ['build', 'watch']);