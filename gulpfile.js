const gulp = require ('gulp');
const browserSync = require ('browser-sync').create ();
const sass = require ('gulp-sass') (require ('node-sass'));
const autoprefixer = require ('gulp-autoprefixer');
// const babel = require ('gulp-babel');
const browserify = require ('browserify');
const babelify = require ('babelify');
const source = require ('vinyl-source-stream');
const buffer = require ('vinyl-buffer');
const plumber = require ('gulp-plumber');
const watchify = require ('watchify');
const uglify = require ('gulp-uglify');
const size = require ('gulp-size');

const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded',
};

const jsFiles = ['background.js', 'popup.js', 'sigaa.js'];

function jsTask () {
  jsFiles.map (function (entry) {
    return browserify ({
      entries: ['src/scripts/' + entry],
      cache: {},
      packageCache: {},
      // plugin: [watchify],
    })
      .transform (babelify, {presets: ['@babel/preset-env']})
      .bundle ()
      .on ('error', function (error) {
        console.error (error.toString ());
        this.emit ('end');
      })
      .pipe (plumber ())
      .pipe (source (entry))
      .pipe (buffer ())
      .pipe (uglify ())
      .pipe (size ())
      .pipe (gulp.dest ('src'));
  });
  return gulp.src ('src/scripts/*js').pipe (gulp.dest ('src'));
}

gulp.task ('scripts', jsTask);

gulp.task ('sass', function () {
  return gulp
    .src ('src/sass/**/*.scss')
    .pipe (plumber ())
    .pipe (sass (sassOptions).on ('error', sass.logError))
    .pipe (autoprefixer ())
    .pipe (gulp.dest ('src'));
  // .pipe (browserSync.stream ());
});

// gulp.task ('scripts', function () {
//   return gulp
//     .src ('src/scripts/*.js')
//     .pipe (
//       babel ({
//         presets: ['@babel/preset-env'],
//         plugins: [['@babel/transform-runtime']],
//       })
//     )
//     .pipe (gulp.dest ('src'));
// });

gulp.task ('watch', function () {
  gulp.watch ('src/sass/**/*.scss', gulp.series ('sass'));
  gulp.watch ('src/scripts/*.js', gulp.series ('scripts'));
});

// Static Server + watching scss/html files
// gulp.task ('serve', gulp.series ('sass'), function () {
//   browserSync.init ({
//     server: './src',
//   });

//   gulp.watch ('src/sass/*.scss', gulp.series ('sass'));
//   gulp.watch ('src/*.html').on ('change', browserSync.reload);
// });

gulp.task ('default', gulp.series ('watch'));
