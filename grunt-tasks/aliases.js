"use strict";

module.exports = {

	// Register Build Tasks
	'js'		:['jshint','concat:js', 'uglify'],
	'css'		:['less', 'concat:css', 'cssmin'],
	'build'		:['clean', 'css', 'js','copy'],

	// Register Dev Tasks
	'base'		:['clean:js', 'clean:css', 'css', 'js', 'copy:dev'],
	'default'	:['base', 'watch']
};