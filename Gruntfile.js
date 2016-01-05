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
        },

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', ['uglify:builda']);
};