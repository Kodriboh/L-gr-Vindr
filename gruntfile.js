module.exports = function(grunt) {
    grunt.initConfig({

        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: './resources/sass',
                    src: ['*.scss'],
                    dest: './public/css',
                    ext: '.css'
                }]
            }
        },

        watch: {
            css: {
                files: [
                    './resources/css/*.scss',
                    './resources/css/partials/*.scss',
                    './resources/css/partials/*/*.scss',
                ],
                tasks: ['sass', 'cssmin'],
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: './public/css',
                    src: ['*.css', '!*.min.css'],
                    dest: './public/css',
                    ext: '.min.css'
                }]
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    './resources/js/*.min.js' : ['./public/js/*.js']
                }
            }
        }
        
    });

    // load tasks
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', 'watch');
};