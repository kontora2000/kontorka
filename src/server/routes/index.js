import express from 'express';
import cors from 'cors';
import userRoutes from './auth';
import projectRoutes from './projects';

const router = express.Router();

export default function (passport) {
	router.use('/projects', projectRoutes); //set path route /projects
	router.use('/auth', userRoutes(passport)); // set path route /auth
	/* Handle Logout */
	router.post('/signout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
	router.get('*', (req,res)=>{
		res.status(404).send('Oops! Wrong way @@@@ hello world!');
	})
	return router;
}



