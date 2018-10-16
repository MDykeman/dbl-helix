module.exports = function (grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'src/css/styles.css': 'src/sass/style.scss'
                }
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 1 version']
                    })
                ]
            },
            dist: {
                src: 'src/css/styles.css'
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'src/sass/style.scss',
                        'index.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        },
        watch: {
            css: {
                files: ['src/sass/*.scss'],
                tasks: ['sass', 'postcss:dist'],
                options: {
                    livereload: true,
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['browserSync', 'watch']);

};