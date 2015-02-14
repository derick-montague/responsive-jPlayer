"use strict";

module.exports = {

	// Register Build Tasks
	'js'		:['concat:js', 'uglify'],
	'css'		:['less', 'concat:css', 'cssmin'],
	'build'		:['clean:build', 'css', 'js','copy'],

	// Register Dev Tasks
	'base'		:['jshint', 'less', 'concat:css', 'concat:js', 'clean:css', 'copy'],
	'default'	:['base', 'watch']
};