const	auto					= require('autoprefixer-stylus'),
			axis 					= require('axis'),
			cssnano 			= require('cssnano'),
			gulp 					= require('gulp'),
			nib 					= require('nib'),
			postcss 			= require('gulp-postcss'),
			stylus 				= require('gulp-stylus'),
			rupture 			= require('rupture'),
			typographic 	= require('typographic');


gulp.task('theme', () => {

	const processors = [
    cssnano
		];

	return gulp.src('./source/theme.styl')
		.pipe(stylus({
			use: [auto(), axis(), nib(), rupture(), typographic() ]
		}))
		// .pipe(postcss(processors))
		.pipe(gulp.dest('./css'));
});

gulp.task('seeds', () => {

  const processors = [
    cssnano
  ];

  return gulp.src('./source/seeds.styl')
    .pipe(stylus({
      use: [nib(), rupture(), typographic(), axis()]
    }))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./css'));
});

gulp.task('default', () => {
	gulp.watch('**/*.styl',  gulp.series('theme'));
});

gulp.task('seeds:watch', () => {
  gulp.watch('**/*.styl',  gulp.series('theme'));
});
