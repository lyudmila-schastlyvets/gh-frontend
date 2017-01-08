// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'), // compile code scss
    sourcemaps = require('gulp-sourcemaps'), // generate css maps
    watch = require('gulp-watch'), // watch changes in the files
    bower = require ('gulp-bower'),
    autoprefixer = require('gulp-autoprefixer'), // add prefixes
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'), // minimize images
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
    mainBowerFiles = require ('main-bower-Files');
   //bowerMain = require('bower-main'), // to add bower plugins to head
   // wiredep = require('wiredep').stream;

var sassBower = {
    sassPath: 'src/style',
    bowerDir: 'src/bower_components'
};

// global paths
var path = {
    build: { // path to ready files
        html: 'build/',
        js: 'build/js/',
        style: 'build/style/',
        img: 'build/images/',
        fonts: 'build/fonts/'
    },

    src: { // path to source files
        html:'src/*.html', // all files with .html
        js: 'src/js/main.js', // only main.js files
        style:'src/style/main.scss',
        img: 'src/images/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },

    watch: { // path to files which we want to watch
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.scss',
        img: 'src/images/**/*.*',
        fonts: 'src/fonts/**/*.*',
        bower: '../bower_components/**/*.*'
    },
    clean: './build',
};

// dev server settings
var config = {
    server: {
        baseDir: "./build"
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
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js));
});

gulp.task('cssVendor', function() {
    var files = (mainBowerFiles({ filter: new RegExp('.*scss$', 'i') }));
    gulp.src(files)
        .pipe(concat('vendor.scss'))
        .pipe(sass({
            outputStyle: 'nested',
            precison: 3,
            errLogToConsole: true,
            includePaths: ['bower_components/bootstrap-sass/assets/stylesheets','bower_components/font-awesome/scss']
        }))
        .pipe(cssmin())
        .pipe(gulp.dest(path.build.style));
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

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger()) //Прогоним через rigger
        .pipe(gulp.dest(path.build.html)) //Выплюнем их в папку build
        .pipe(livereload()); //И перезагрузим наш сервер для обновлений
});

gulp.task('js:build', function () {
    gulp.src(path.src.js) //Найдем наш main файл
        .pipe(rigger()) //Прогоним через rigger
        .pipe(sourcemaps.init()) //Инициализируем sourcemap
        .pipe(uglify()) //Сожмем наш js
        .pipe(sourcemaps.write()) //Пропишем карты
        .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
        .pipe(livereload()); //И перезагрузим сервер
});

gulp.task('style:build', function () {
    gulp.src(path.src.style) //Выберем наш main.scss
        .pipe(sourcemaps.init()) //То же самое что и с js
        .pipe(sass()) //Скомпилируем
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(cssmin()) //Сожмем
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.style)) //И в build
        .pipe(livereload());
});

gulp.task('image:build', function () {
    gulp.src(path.src.img) //Выберем наши картинки
        .pipe(imagemin({ //Сожмем их
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img)) //И бросим в build
        .pipe(reload({stream: true}));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', [
    'html:build',
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
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
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

gulp.task('webserver', function () {
    browserSync.init(config);
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('default', ['build', 'webserver', 'watch']);