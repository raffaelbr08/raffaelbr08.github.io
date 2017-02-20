var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('compilar',function(){
	return gulp.src('./source/sass/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./assets/css'));
})

gulp.task('movejs', function(){
	return gulp.src('./source/componentes/jquery/dist/jquery.js')
	.pipe(gulp.dest('./assets/js'));
	});

gulp.task('escutar',function(){
	gulp.watch('./source/sass/**/*.scss',['compilar'])
	gulp.watch(['move']);

})
