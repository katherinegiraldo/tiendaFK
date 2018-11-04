var pug 	= require('gulp-pug');
var stylus 	= require('gulp-stylus');
var gulp 	= require('gulp');
var nib 	= require('nib');
var browserSync	= require('browser-sync').create();


gulp.task('tienda', function(){
	browserSync.init({
		server: '../tiendaFK/public',
		port: 9000
	});

	gulp.watch("assets/templates/*.pug", ["compilarPug"]);
	gulp.watch("assets/stylus/*.styl", ["compilarStylus"]);
});


gulp.task('compilarPug',function(){
	gulp.src('assets/templates/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('public/'))
		.pipe(browserSync.stream());
});

gulp.task('compilarStylus',function(){
	 gulp.src('assets/stylus/*.styl')
        .pipe(stylus({ use: nib(), compress: true }))
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.stream());
});
