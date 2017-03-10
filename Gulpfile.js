var gulp = require('gulp')
var clean = require('gulp-clean')

gulp.task('copy', function () {
  gulp
    .src('../working-area/**/*')
    .pipe(gulp.dest('../server/'))
})

gulp.task('backup', function () {
  gulp
    .src('../working-area/**/*')
    .pipe(gulp.dest('../backup/working-area'))
})

gulp.task('delete', function () {
  gulp
    .src(['../server/**/*'], { read: false })
    .pipe(clean({ force: true }))
})

gulp.task('default', ['copy'])
