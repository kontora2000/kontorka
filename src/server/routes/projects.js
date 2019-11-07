import express from 'express';
import multer from 'multer';

import isAuthenticated from '../controllers/auth';
import Project from '../models/project';

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './uploads/');
  },
  filename(req, file, cb) {
    let filename = '';
    switch (file.mimetype) {
    case 'image/png':
      filename = `${file.fieldname}-${Date.now()}.png`;
      break;
    case 'image/jpeg':
      filename += '.jpeg';
      filename = `${file.fieldname}-${Date.now()}.jpeg`;
      break;
    default:
      break;
    }

    cb(null, filename);
  },
});


const upload = multer({ storage, });

router.get('/', (req, res) => {
  Project.find({}, (err, projects) => {
    const projectsMap = {};

    projects.forEach((project) => {
      projectsMap[project._id] = project;
    });

    res.status(200).json({ projects, });  
  });
});

router.post('/', upload.single('image'), (req, res) => {
  const newProject = new Project({ ...req.body, ...req.file, });   
  // save the user
  newProject.save((err) => {
    if (err) { 
      throw err;  
    }
    res.status(201).json({ project: newProject, });
  });
});

router.put('/:id', isAuthenticated, (req, res) => {
  Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, },
    (err, newProject) => res.status(200).json({ project: newProject, })
  );
});

router.delete('/:id', (req, res) => {
  Project.findByIdAndRemove(
    req.params.id,
    (err, delProject) => res.status(200).json({ project: delProject, })
  );
});

export default router;
