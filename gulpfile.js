const { src, dest, watch, series, parallel,} = require('gulp');
const browserSync = require('browser-sync').create();

// Плагины
const rename = require('gulp-rename');
const csso = require('gulp-csso');
const autoprefixer = require('gulp-autoprefixer');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const fileInclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');
const less = require('gulp-less');
var path = require('path');


// обработка html
const html = function() {
return src(['./src/html/index.html','./src/html/modelm72.html', './src/html/fotom72.html', './src/html/fotom52.html', 
'./src/html/fotom61.html', './src/html/fotom62.html', './src/html/fotom63.html', './src/html/fotom66.html', './src/html/fotom67.html', 
'./src/html/foto810.html', './src/html/foto840.html', './src/html/table.html','./src/html/history.html'])
   .pipe(plumber({
       errorHandler: notify.onError()
    }))
   .pipe(fileInclude())
   .pipe(size({title:'До сжатия'}))
   .pipe(htmlmin({
       collapseWhitespace: true
   })) 
   .pipe(size({title:'После сжатия'}))
   .pipe(dest('./public'))
   .pipe(browserSync.stream());
}
// Обработка less

const style = function () {
    return src('./less/style.less', { sourcemaps: true})
      .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
      }))
      .pipe(autoprefixer())
      .pipe(size({title:'До сжатия'}))
      .pipe(dest('./public/css', { sourcemaps: true}))
      .pipe(rename({suffix: '.min'}))
      .pipe(csso())
      .pipe(size({title:'После сжатия'}))
      .pipe(dest('./public/css', { sourcemaps: true}))
};

// Сервер 
const server = () => {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });

}

// Наблюдение
const watcher = function () {
    watch('./src/html/*.html', html);
    watch('./less/**/*.less', style);
    watch('./less/**/*.less').on('change', browserSync.reload);
}
// Задачи
exports.html = html;
exports.watch = watcher;
exports.style = style;

exports.dev = series(
    html, 
    parallel(watcher, server, style)
);