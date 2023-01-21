
module.exports = function (grunt) {
	
    'use strict';
    
	// Load Grunt Contribution Libraries
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-css');
	grunt.loadNpmTasks('grunt-release');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			// Bundle Javascript
			js: {
				src: 'src/scripts/*.js',
				dest: 'dist/king.js'
			},
			// Bundle CSS
			css: {
				src: 'src/styles/*.css',
				dest: 'dist/king.css'
			}
		},
		// Minify JavaScript
		uglify: {
			build: {
				src: 'dist/king.js',
				dest: 'dist/king.min.js'
			}
		},
		// Minify CSS
		cssmin: {
			css: {
				src: 'dist/king.css',
				dest: 'dist/king.min.css'
			}
		}
	});

	grunt.registerTask('build', ['concat', 'uglify', 'cssmin']);
	grunt.registerTask('release');
};