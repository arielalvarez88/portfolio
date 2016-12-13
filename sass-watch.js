var gulp = require('gulp');
var gsgc = require('gulp-sass-generate-contents');

var creds = {
    "Author": 	"Ariel Alvarez",
    "Website": 	"You are on it"
}
gulp.task('gulp-sass-generate-contents', function () {

	gulp.watch('css/sass/*.scss', function(){
		gulp.src(['css/sass/**/*.scss'])
  		.pipe(gsgc('css/all.scss', creds, {forceComments: false }))
  		.pipe(gulp.dest('css'));	
	});
  
});



