//The "wrapper" function
module.exports = function(grunt) {
  
	//Project and task configuration
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
        
        sass:{
            dist:{
                files:{
                    'styles.css': 'assets/scss/styles.scss'
                      }
                 }
        
             },
        watch:{
            sass:{
                files:['assess/scss/*.scss'],
                tasks:['sass']
                    }
                }
	});


	//Loading Grunt plugins and tasks
	require('load-grunt-tasks')(grunt);


	//Custom tasks
	grunt.registerTask('default', ['sass', 'watch']);
    

};
