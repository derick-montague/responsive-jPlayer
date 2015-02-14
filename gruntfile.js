"use strict";

var gruntTasks = require('grunt-tasks');

module.exports = function(grunt) {

  gruntTasks(grunt, {
      tasks: 'grunt-tasks/*.js',
      config: 'grunt-tasks/config.js',
      aliases: 'grunt-tasks/aliases.js'
  });
};