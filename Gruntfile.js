// Generated on 2015-02-13 by Luciano Murruni
'use strict';

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = require('./bower.json').appPath;

  grunt.initConfig({

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [appConfig + '/{,*/}*.js']
      }
    },
    copy: {
      dist: {
        expand: true,
        cwd: appConfig.devel + '/',
        dest: appConfig.dist + '/',
        src: ['*.*']
      },
      demo: {
        cwd: appConfig.devel + '/',
        dest: 'demo/',
        expand: true,
        src: ['*.*']
      }
    },
    uglify: {
      dest: {
        options: {
          sourceMap: true,
          mangle: false,
          wrap: false,
          beautify: false,
          banner: '/*ng-responsive-carousel component functions.*/'
        },
        src: [appConfig.devel + '/ng-responsive-carousel.js'],
        dest: appConfig.dist + '/ng-responsive-carousel.min.js'
      }
    },
    clean: {
      dest: {
        src: [appConfig.dist + '/']
      }
    },
    karma: {
      unit: {
        configFile: appConfig.test + '/karma.conf.js'
      }
    },
    protractor: {
      options: {
        configFile: 'node_modules/grunt-protractor-runner/node_modules/protractor/docs/referenceConf.js', // Default config file
        keepAlive: true, // If false, the grunt process stops when the test fails.
        noColor: false, // If true, protractor will not use colors in its output.
        args: {
          // Arguments passed to the command
        }
      },
      your_target: { // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
        options: {
          configFile: appConfig.test + '/e2e/e2e.conf.js', // Target-specific config file
          args: {} // Target-specific arguments
        }
      },
    },
    protractor_webdriver: {
      options: {
        // Task-specific options go here.
      },
      your_target: {
        // Target-specific file lists and/or options go here.
      },
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
            'demo',
            'dev'
          ]
        }
      }
    },
    concurrent: {
      server: [
        'copy:demo'
      ]
    },
    watch: {
      js: {
        files: [appConfig.dev + '/*.js'],
        tasks: ['newer:jshint:all', 'newer:copy:demo'],
        options: {
          livereload: true
        }
      },
      styles: {
        files: [appConfig.dev + '/*.css'],
        tasks: ['newer:copy:dist', 'newer:copy:demo']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          'demo/{,*/}*.html',
          appConfig.dev + '/{,*/}*.css',
          appConfig.dev + '/{,*/}*.js'
        ]
      }
    }

  });

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('test', ['karma']);
  grunt.registerTask('e2e-test', ['protractor_webdriver', 'protractor']);
  grunt.registerTask('build', ['clean', 'uglify', 'copy']);
  grunt.registerTask('serve', ['copy', 'concurrent:server', 'connect:livereload', 'watch']);

}