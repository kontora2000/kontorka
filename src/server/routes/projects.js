const express = require('express');
const router = express.Router();
const path=require('path');

const Project = require('../models/project');
const isAuthenticated = require('../controllers/auth');

router.get('/', isAuthenticated, function(req, res) {
  Project.find({}, function(err, projects) {
    var projectsMap = {};

    projects.forEach(function(project) {
      projectsMap[project._id] = project;
    });
    res.status(200).json({ projects : projectsMap });  
  });
});

router.post('/', isAuthenticated, function (req, res) {
  const newProject = new Project();
  // set the user's local credentials
  newProject.title = req.body.title;
  newProject.content = req.body.content;
  newProject.url = req.body.url;
  newProject.size = req.body.size;
  
  // save the user
  newProject.save(function(err) {
      if (err){
          console.log('Error in Saving project: ' + err);  
          throw err;  
      }
      console.log('project succesful created');    
      res.status(201).json({ project : newProject });
  });
})

router.put('/:id', isAuthenticated, function (req, res) {
  Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, newProject) => {
      console.log('project succesful updated'); 
      return res.status(200).json({ project : newProject });
    }
  );
})

router.delete('/:id', isAuthenticated, function (req,res) {
  console.log('del method');
  Project.findByIdAndRemove(
    req.params.id,
    (err, delProject) => {
      console.log('project succesful deleted'); 
      return res.status(200).json({ project : delProject });
    }
  );
})

module.exports = router