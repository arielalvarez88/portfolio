var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});


var gsgc = require('gulp-sass-generate-contents');

var creds = {
    "Author": 	"Ariel Alvarez",
    "Website": 	"You are on it"
}
gulp.task('sass-all', function () {
  gulp.src(['css/sass/var/**/*.scss', 'css/sass/*.scss', 'css/sass/src/**/*.scss'])
    .pipe(gsgc('css/sass/all.scss', creds, {forceComments: false }))
    .pipe(gulp.dest('css/sass'));
});

gulp.task('sass-watch', function () {

	var watcher = gulp.watch('css/sass/**/*.scss', function(){});
	watcher.on("change",function(){
		console.log("compiling sass");
		gulp.src(['css/sass/var/**/*.scss', 'css/sass/*.scss', 'css/sass/src/**/*.scss'])
  		.pipe(gsgc('css/sass/all.scss', creds, {forceComments: false }))
  		.pipe(gulp.dest('css/sass'));
	});

});
