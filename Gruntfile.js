module.exports = function (grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'src/css/styles.css': 'src/sass/style.scss'
                }
            }
        },
        watch: {
            css: {
                files: ['src/sass/*.scss'],
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch', 'sass']);

};