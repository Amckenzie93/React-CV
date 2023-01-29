/// <binding BeforeBuild='Build' />
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass')(require('sass'));
var typeScript = require('gulp-typescript');

var SassPath = "src/SCSS/",
    sassOutPath = "public/assets/css/",
    //tsPath = "Typescript/",
    //tsOutPath = "wwwroot/js/";

//Compiles SCSS into CSS
gulp.task("SCSS", function () {
    return gulp.src(SassPath + "Main.scss")
        .pipe(sass({
            includePaths: ['node_modules']
        }))
        .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(sassOutPath));
});

//Watches SCSS for changes on the fly
gulp.task("watch", function () {
    gulp.watch("SCSS/**/*.scss", gulp.series("SCSS"));
});

//Compile TS
gulp.task('TypeScript', function () {
    return gulp.src([tsPath + '*.ts'])
        .pipe(typeScript({
            noImplicitAny: false,
            module: "amd",
            removeComments: true,
            target: 'es5',
            lib: ['es5', 'es2017', 'dom'],
            outFile: 'Main.js',
            allowJs: true
        }))
        .pipe(gulp.dest(tsOutPath));
});


//Compiles both SCSS and JS on build
gulp.task('Build', gulp.series('SCSS', 'TypeScript'));