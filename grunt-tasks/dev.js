"use strict";

var fs = require('fs'),
		jshintrc = JSON.parse(fs.readFileSync('.jshintrc', 'utf8'));

module.exports = {

	// JShint all custom JavaScript files
	jshint: {
		all: {
			options: jshintrc,
			files: {
				src: ['<%= files.grunt %>', '<%= files.js %>']
			}
		}
	},
		
	// Define "watch" tasks
	watch: {
		options: {
			livereload: true
		},

		jshint_main: {
			files: ['<%= files.grunt %>', '<%= files.js %>'],
			tasks: ['jshint']
		},

		less: {
			files: ['<%= files.less %>'],
			tasks: ['less', 'concat:css', 'clean', 'copy:dev']
		}
	}

};