/*const gulp = require('gulp');
let imagemin = null;
let rename = null;
let size = null;

async function compressImages() {
  [imagemin, rename, size] = await Promise.all([
    import('gulp-imagemin'),
    import('gulp-rename'),
    import('gulp-size')
  ]);

  // Log the size of the uncompressed files
  const uncompressedSize = size.default({ showFiles: true, pretty: true });

  // Log the size of the compressed files
  const compressedSize = size.default({ showFiles: true, pretty: true });

  return gulp.src('src/assets/images/**.{jpg,jpeg,png,gif,svg}')
    // Log the size of the uncompressed files before compression
    .pipe(uncompressedSize)
    .pipe(imagemin.default())
    // Log the size of the compressed files after compression
    .pipe(compressedSize)
    .pipe(rename.default(function(file) {
      file.dirname = file.dirname.replace('/images', '/compressed-images');
    }))
    .pipe(gulp.dest('src/assets/compressed-images'));
}

gulp.task('compress-images', compressImages);*/

const gulp = require('gulp');
const tar = require('gulp-tar');
const gzip = require('gulp-gzip');
const size = require('gulp-size');

function compressImages() {
  // Log the size of the uncompressed files
  const uncompressedSize = size({ showFiles: true, pretty: true });

  // Log the size of the compressed files
  const compressedSize = size({ showFiles: true, pretty: true });

  return gulp.src('src/assets/images/**/*.{jpg,jpeg,png,gif,svg}')
    // Log the size of the uncompressed files before compression
    .pipe(uncompressedSize)
    .pipe(tar('images.tar'))
    .pipe(gzip())
    // Log the size of the compressed files after compression
    .pipe(compressedSize)
    .pipe(gulp.dest('./src/assets/compressed-images'));
}

gulp.task('compress-images', compressImages);
