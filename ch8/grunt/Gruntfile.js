module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      myTask: {
        files: {
          '../src/build/app.min.js': [
            '../src/MyArea.js',
            '../src/Member.js'
          ]
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['uglify']);
};
