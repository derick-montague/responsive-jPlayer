"use strict";

module.exports = {

		concat: {
			js: {
				src: [
					'<%= folders.libs %>/jquery-1.11.2.js',
					'<%= folders.libs %>/**/*.js',
					'<%= files.js %>'
				], 
				dest: '<%= build.js %>/app.js'
			}
		},

		// Minify All JS Files
		uglify: {
			options: {
					compress  : false, 
					mangle    : false,
					sourceMap : true,
					report    : 'min'
			},
			libs: {
				files: {
					'<%= build.js %>/app.min.js' : ['<%= build.js %>/app.js']
				}
			},
			inferior: {
				files: {
					'<%= build.js %>/shims.min.js' : [
						'<%= folders.shims %>/modernizr.custom.js'
					]
				}
			}
		}

};