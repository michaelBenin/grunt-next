module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      target1: ['lib/**/*.js'],
      target2: ['test/**/*.js'],
      target3: ['Gruntfile.js']
    },
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', 'jshint');

  grunt.registerTask('test', function () {
    console.log(this);
  });
};