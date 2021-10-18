const gulp = require("gulp");
const browserSync = require('browser-sync').create();

gulp.task("sync", function() {
    return gulp
    .src("./css/*.css")
    .pipe(browserSync.stream());
});

gulp.task("default", gulp.series("sync", function() {
  gulp.watch("./css/*", gulp.series("sync"));
  gulp.watch("./index.html").on('change', browserSync.reload);
  gulp.watch("./js/*").on('change', browserSync.reload);
  
  return browserSync.init({
  server: "./"
  });
}));