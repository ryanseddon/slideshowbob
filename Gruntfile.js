/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    watch: {
      files: ['sass/*.scss', 'index.html'],
      tasks: ['sass']
    },
    sass: {
      main: {
        options: {
          style: 'expanded',
          precision: 1
        },
        files: {
          'dist/<%= pkg.name %>.css': 'sass/<%= pkg.name %>.slides.scss'
        }
      }
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      dist: {
        src: ['dist/*.css']
      }
    },
    cssmin: {
      dist: {
        src: 'dist/<%= pkg.name %>.css',
        dest: 'dist/<%= pkg.name %>.min.css'
      }
    },
    rework: {
      'dist/<%= pkg.name %>.css': 'dist/<%= pkg.name %>.css',
      options: {
        use: [
          ['rework.prefix', 'transition'],
          ['rework.prefix', 'transform']
        ],
        vendors: ['-webkit-']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Default task.
  grunt.registerTask('default', ['sass', 'rework', 'csslint', 'cssmin']);

};
