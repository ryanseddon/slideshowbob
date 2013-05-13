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
          precision: 1,
          sourcemap: true
        },
        files: {
          'dist/<%= pkg.name %>.css': 'sass/<%= pkg.name %>.scss'
        }
      }
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      dist: {
        src: ['dist/<%= pkg.name %>.css']
      }
    },
    cssmin: {
      dist: {
        options: {
          banner: '<%= banner %>'
        },
        files: {
          'dist/<%= pkg.name %>.min.css': 'dist/<%= pkg.name %>.css'
        }
      }
    },
    rework: {
      'dist/<%= pkg.name %>.css': 'dist/<%= pkg.name %>.css',
      options: {
        use: [
          ['rework.prefix', 'transition'],
          ['rework.prefix', 'transform'],
          ['rework.prefix', 'box-sizing']
        ],
        vendors: ['-webkit-', '-moz-', '-o-']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Default task.
  grunt.registerTask('default', ['sass', 'rework', 'csslint', 'cssmin']);

};
