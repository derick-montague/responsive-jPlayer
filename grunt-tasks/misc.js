"use strict";

module.exports = {
	copy: {
			build: {
				files: [
					{expand: true, cwd: '<%= folders.src %>/img',  src: ['*'], dest: '<%= folders.build %>/img'}
					
				]	
			},
			dev: {
				files: [
					{expand: true, cwd: '<%= folders.src %>/js/app/playlist',  src: ['*'], dest: '<%= folders.build %>/playlist'}
				]
			}
		},
		clean: {
			build: ['<%= folders.build %>/**/*'],
			css: ['<%= folders.build %>/css/*'],
			js:  ['<%= folders.build %>/js/*', '<%= folders.build %>/playlist/*']
		}
};