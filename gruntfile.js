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
            scripts:{
                files:['assess/js/*.js'],
                tasks:['uglify']
                    }
                },
        
        uglify:{
            my_target:{
                files: {
                    'js/scripts.js' : ['assets/js/scripts.js']
                        }
                    }
                },
        
        jshint: {
            all: ['assets/js/*.js']
        }
        
	});


	//Loading Grunt plugins and tasks
	require('load-grunt-tasks')(grunt);


	//Custom tasks
	grunt.registerTask('default', ['sass','uglify', 'jshint', 'watch']);
    

};
