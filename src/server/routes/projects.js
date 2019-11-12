import express from 'express';
// import multer from 'multer';

// eslint-disable-next-line no-unused-vars
import isAuthenticated from '../controllers/auth';
import Project from '../models/project';

const router = express.Router();

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, './uploads/');
//   },
//   filename(req, file, cb) {
//     let filename = '';
//     switch (file.mimetype) {
//     case 'image/png':
//       filename = `${file.fieldname}-${Date.now()}.png`;
//       break;
//     case 'image/jpeg':
//       filename += '.jpeg';
//       filename = `${file.fieldname}-${Date.now()}.jpeg`;
//       break;
//     default:
//       break;
//     }

//     cb(null, filename);
//   },
// });


// const upload = multer({ storage, });

router.get('/', (req, res) => {
  Project.deleteMany({ isRemoveable: true, }, () => {});
  Project.find({}, (err, projects) => {
    res.status(200).json({ projects, });  
  });
});

router.post('/', /* isAuthenticated , */ (req, res) => {
  const newProject = new Project(req.body);   
  // save the user
  newProject.save((err) => {
    if (err) { 
      throw err;  
    }
    res.status(201).json({ project: newProject, });
  });
});

router.put('/:id', /* isAuthenticated , */ (req, res) => {
  Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, },
    (err, newProject) => res.status(200).json({ project: newProject, })
  );
});

router.patch('/:id', /* isAuthenticated , */ (req, res) => {
  console.log('patch !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
  Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, },
    (err, newProject) => res.status(200).json({ project: newProject, })
  );
});

router.delete('/:id', /* isAuthenticated , */ (req, res) => {
  Project.findByIdAndRemove(
    req.params.id,
    (err, delProject) => res.status(200).json({ project: delProject, })
  );
});

export default router;
