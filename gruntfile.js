
module.exports = function(grunt) {
	
	// Load Grunt Contribution Libraries
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-css');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			// Bundle Javascript
			js: {
				src: 'scripts/*.js',
				dest: 'dist/scripts.js'
			},
			// Bundle CSS
			css: {
				src: 'styles/*.css',
				dest: 'dist/king.css'
			}
		},
		// Minify JavaScript
		uglify: {
			build: {
				src: 'dist/scripts.js',
				dest: 'dist/scripts.min.js'
			}
		},
		// Minify CSS
		cssmin: {
			css:{
				src: 'dist/king.css',
				dest: 'dist/king.min.css'
			}
		}
	});

	grunt.registerTask('build', ['concat','uglify','cssmin']);

};