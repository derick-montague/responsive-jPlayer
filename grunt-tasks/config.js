"use strict";

module.exports = {
	pkg: '<json:package.json>',
	folders: {
		src		: ['src'],
		libs	: ['<%= folders.src %>/js/libs'],
		build	: ['dist'],
		shims	: ['<%= folders.src %>/js/shims']
	},
	build: {
		css		: ['<%= folders.build %>/css'],
		js		: ['<%= folders.build %>/js']
	},
	files: {
		grunt	: ['gruntfile.js', 'grunt-tasks/*.js'],
		less	: ['<%= folders.src %>/less/**/*.less'],
		js		: ['<%= folders.src %>/js/app/*.js']
	}
};