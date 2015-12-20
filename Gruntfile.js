module.exports = function(grunt) {

    grunt.initConfig({
        clean: ['dist'],
        copy: {
            main: {
                expand: true,
                cwd: 'src/',
                src: '**',
                dest: 'dist/',
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: './dist/',
                    hostname: 'localhost',
                }
            }
        },
        tmod: {
            template: {
                src: './src/tpl/*.html',
                dest: './dist/tpl/template.js',
                options: {
                    base: './src/tpl'
                }
            },
        },
        watch: {
            client: {
                files: ['src/**/*'],
                tasks: ['clean', 'copy', 'tmod'],
            },
            options: {
                livereload: true,
            },
        }
    })

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-tmod');

    grunt.registerTask('default', ['clean','copy', 'tmod', 'connect', 'watch']);

};
