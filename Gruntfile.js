module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'//添加banner
            },
            builda: {
                options: {
                    mangle: false,
                    preserveComments: 'all', 
                },
                files: [{
                    expand:true,
                    cwd:'js',
                    src:'**/*.js',
                    dest: 'dest/js',
                }],
            },
            buildb: {
                options: {
                    mangle: false,
                    preserveComments: 'all', 
                },
                files: {
                    'js/index.min.js': ['js/index.js'],
                },
            },
            release: {
                files: {
                    'cv/js/index.min.js': ['cv/js/index.js','cv/js/initFunc.js'],
                },
            },
        },

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask('builda', ['uglify:builda']);
    grunt.registerTask('buildb', ['uglify:buildb']);
    grunt.registerTask('release', ['uglify:release']);

};