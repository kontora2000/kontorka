const express = require('express');
const router = express.Router();
const path = require('path');
const userRoutes = require('./auth'); 
const projectRoutes = require('./projects');

//check if app runs in dev mode (with --dev parameter)
let devBuild = false;
if (process.argv.indexOf('--dev')>0)
    devBuild=true;

module.exports = function(passport){

	/* GET login page. */

	router.get('/',function(req,res){
    res.sendFile(path.resolve() + '/views/index.html', (error) => {});
});


  router.use('/projects', projectRoutes); //set path route /projects
	router.use('/auth', userRoutes(passport)); // set path route /auth

	/* Handle Logout */
	router.get('/signout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	return router;
}





