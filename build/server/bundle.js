/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/controllers/auth.js":
/*!****************************************!*\
  !*** ./src/server/controllers/auth.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nmodule.exports = function (req, res, next) {\n  // if user is authenticated in the session, call the next() to call the next request handler \n  // Passport adds this method to request object. A middleware is allowed to add properties to\n  // request and response objects\n  let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase\n\n  if (token.startsWith('Bearer ')) {\n    // Remove Bearer from string\n    token = token.slice(7, token.length);\n  }\n\n  if (token) {\n    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {\n      if (err) {\n        return res.json({\n          success: false,\n          message: 'Token is not valid'\n        });\n      } else {\n        req.decoded = decoded;\n        next();\n      }\n    });\n  } else {\n    return res.status(401).json({\n      success: false,\n      message: 'Authorization token is not supplied'\n    });\n  }\n};\n\n//# sourceURL=webpack:///./src/server/controllers/auth.js?");

/***/ }),

/***/ "./src/server/models/project.js":
/*!**************************************!*\
  !*** ./src/server/models/project.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar Schema = mongoose.Schema;\nconst ProjectSchema = new Schema({\n  title: String,\n  content: String,\n  size: String,\n  url: String\n});\nmodule.exports = mongoose.model('project', ProjectSchema);\n\n//# sourceURL=webpack:///./src/server/models/project.js?");

/***/ }),

/***/ "./src/server/models/user.js":
/*!***********************************!*\
  !*** ./src/server/models/user.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst bCrypt = __webpack_require__(/*! bcrypt-nodejs */ \"bcrypt-nodejs\");\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nconst Schema = mongoose.Schema;\nconst UserSchema = new Schema({\n  username: {\n    type: String,\n    required: true\n  },\n  password: {\n    type: String,\n    trim: true,\n    required: true\n  },\n  token: {\n    type: String,\n    required: true\n  }\n});\nUserSchema.pre('save', function (next) {\n  // Hash the password before saving the user model\n  if (this.isModified('password')) {\n    this.password = bCrypt.hashSync(this.password, bCrypt.genSaltSync(10), null);\n  }\n\n  next();\n});\n\nUserSchema.methods.validatePassword = function (password) {\n  return bCrypt.compareSync(password, this.password);\n};\n\nUserSchema.methods.generateJWT = function () {\n  const token = jwt.sign({\n    username: this.username,\n    id: this._id\n  }, process.env.JWT_KEY, {\n    expiresIn: '24h'\n  });\n  this.token = token;\n  this.save();\n  return token;\n};\n\nmodule.exports = mongoose.model('user', UserSchema);\n\n//# sourceURL=webpack:///./src/server/models/user.js?");

/***/ }),

/***/ "./src/server/passport/init.js":
/*!*************************************!*\
  !*** ./src/server/passport/init.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var login = __webpack_require__(/*! ./login */ \"./src/server/passport/login.js\");\n\nvar signup = __webpack_require__(/*! ./signup */ \"./src/server/passport/signup.js\");\n\nvar User = __webpack_require__(/*! ../models/user */ \"./src/server/models/user.js\"); // import login from './login';\n// import signup from './signup';\n// import User from '../models/user';\n\n\nmodule.exports = function (passport) {\n  // Passport needs to be able to serialize and deserialize users to support persistent login sessions\n  passport.serializeUser(function (user, done) {\n    done(null, user._id);\n  });\n  passport.deserializeUser(function (id, done) {\n    User.findById(id, function (err, user) {\n      done(err, user);\n    });\n  }); // Setting up Passport Strategies for Login and SignUp/Registration\n\n  login(passport); //signup(passport);\n}; // let initPassport =  function(passport) {\n//     passport.serializeUser(function(user, done) {\n//         done(null, user._id);\n//     });\n//     passport.deserializeUser(function(id, done) {\n//         User.findById(id, function(err, user) {\n//             done(err, user);\n//         });\n//     });\n//     login(passport);     \n// }\n// export default initPassport;\n\n//# sourceURL=webpack:///./src/server/passport/init.js?");

/***/ }),

/***/ "./src/server/passport/login.js":
/*!**************************************!*\
  !*** ./src/server/passport/login.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var LocalStrategy = __webpack_require__(/*! passport-local */ \"passport-local\").Strategy;\n\nvar User = __webpack_require__(/*! ../models/user */ \"./src/server/models/user.js\");\n\nmodule.exports = function (passport) {\n  passport.use('login', new LocalStrategy({\n    passReqToCallback: true\n  }, function (req, username, password, done) {\n    // check in mongo if a user with username exists or not\n    User.findOne({\n      username\n    }).then(user => {\n      if (!user || !user.validatePassword(password)) {\n        return done(null, false, {\n          errors: {\n            'email or password': 'is invalid'\n          }\n        });\n      }\n\n      return done(null, user);\n    }).catch(done);\n  }));\n};\n\n//# sourceURL=webpack:///./src/server/passport/login.js?");

/***/ }),

/***/ "./src/server/passport/signup.js":
/*!***************************************!*\
  !*** ./src/server/passport/signup.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var LocalStrategy = __webpack_require__(/*! passport-local */ \"passport-local\").Strategy;\n\nvar User = __webpack_require__(/*! ../models/user */ \"./src/server/models/user.js\");\n\nvar bCrypt = __webpack_require__(/*! bcrypt-nodejs */ \"bcrypt-nodejs\");\n\nmodule.exports = function (passport) {\n  passport.use('signup', new LocalStrategy({\n    passReqToCallback: true // allows us to pass back the entire request to the callback\n\n  }, function (req, username, password, done) {\n    findOrCreateUser = function () {\n      // find a user in Mongo with provided username\n      User.findOne({\n        'username': username\n      }, function (err, user) {\n        // In case of any error, return using the done method\n        if (err) {\n          console.log('Error in SignUp: ' + err);\n          return done(err);\n        } // already exists\n\n\n        if (user) {\n          console.log('User already exists with username: ' + username);\n          return done(null, false, {\n            message: 'User Already Exists'\n          });\n        } else {\n          // if there is no user with that email\n          // create the user\n          const newUser = new User(req.body); // save the user\n\n          newUser.save(function (err) {\n            if (err) {\n              console.log('Error in Saving user: ' + err);\n              throw err;\n            }\n\n            console.log('User Registration succesful');\n            return done(null, newUser);\n          });\n        }\n      });\n    }; // Delay the execution of findOrCreateUser and execute the method\n    // in the next tick of the event loop\n\n\n    process.nextTick(findOrCreateUser);\n  }));\n};\n\n//# sourceURL=webpack:///./src/server/passport/signup.js?");

/***/ }),

/***/ "./src/server/routes/auth.js":
/*!***********************************!*\
  !*** ./src/server/routes/auth.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (passport) {\n  /* Handle Auth methods */\n  router.post('/', function (req, res, next) {\n    passport.authenticate('login', function (err, user, info) {\n      if (err) {\n        return next(err);\n      }\n\n      if (!user) {\n        return res.status(401).json(info);\n      }\n\n      req.logIn(user, function (err) {\n        if (err) {\n          return next(err);\n        }\n\n        user.generateJWT();\n        const {\n          password,\n          __v,\n          ...savedUser\n        } = req.user._doc;\n        return res.status(200).json({\n          user: savedUser\n        });\n      });\n    })(req, res, next);\n  });\n  return router;\n});\n\n//# sourceURL=webpack:///./src/server/routes/auth.js?");

/***/ }),

/***/ "./src/server/routes/index.js":
/*!************************************!*\
  !*** ./src/server/routes/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ \"./src/server/routes/auth.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ \"./src/server/routes/projects.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_projects__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (passport) {\n  router.use('/projects', _projects__WEBPACK_IMPORTED_MODULE_3___default.a); //set path route /projects\n\n  router.use('/auth', Object(_auth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(passport)); // set path route /auth\n\n  /* Handle Logout */\n\n  router.post('/signout', function (req, res) {\n    req.logout();\n    res.redirect('/');\n  });\n  router.get('*', (req, res) => {\n    res.status(404).send('Oops! Wrong way @@@@ hello world!');\n  });\n  return router;\n});\n\n//# sourceURL=webpack:///./src/server/routes/index.js?");

/***/ }),

/***/ "./src/server/routes/projects.js":
/*!***************************************!*\
  !*** ./src/server/routes/projects.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst router = express.Router();\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst Project = __webpack_require__(/*! ../models/project */ \"./src/server/models/project.js\");\n\nconst isAuthenticated = __webpack_require__(/*! ../controllers/auth */ \"./src/server/controllers/auth.js\");\n\nrouter.get('/', isAuthenticated, function (req, res) {\n  Project.find({}, function (err, projects) {\n    var projectsMap = {};\n    projects.forEach(function (project) {\n      projectsMap[project._id] = project;\n    });\n    res.status(200).json({\n      projects: projectsMap\n    });\n  });\n});\nrouter.post('/', function (req, res) {\n  const newProject = new Project(); // set the user's local credentials\n\n  newProject.title = req.body.title;\n  newProject.content = req.body.content;\n  newProject.url = req.body.url;\n  newProject.size = req.body.size; // save the user\n\n  newProject.save(function (err) {\n    if (err) {\n      console.log('Error in Saving project: ' + err);\n      throw err;\n    }\n\n    console.log('project succesful created');\n    res.status(201).json({\n      project: newProject\n    });\n  });\n});\nrouter.put('/:id', isAuthenticated, function (req, res) {\n  Project.findByIdAndUpdate(req.params.id, req.body, {\n    new: true\n  }, (err, newProject) => {\n    console.log('project succesful updated');\n    return res.status(200).json({\n      project: newProject\n    });\n  });\n});\nrouter.delete('/:id', isAuthenticated, function (req, res) {\n  console.log('del method');\n  Project.findByIdAndRemove(req.params.id, (err, delProject) => {\n    console.log('project succesful deleted');\n    return res.status(200).json({\n      project: delProject\n    });\n  });\n});\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/server/routes/projects.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express-session */ \"express-session\");\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _passport_init__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./passport/init */ \"./src/server/passport/init.js\");\n/* harmony import */ var _passport_init__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_passport_init__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _routes_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/index */ \"./src/server/routes/index.js\");\n//import path from 'path';\n\n\n //server\n\n\n\n //passport\n\n\n //mongoose db parameters and models\n\n //routes\n\n //connect to DB\n\ndotenv__WEBPACK_IMPORTED_MODULE_2___default.a.config();\nmongoose__WEBPACK_IMPORTED_MODULE_8___default.a.connect(process.env.DB_URL, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true,\n  useFindAndModify: false\n}); //check if app runs in dev mode (with --dev parameter)\n\nlet devBuild = false;\nif (process.argv.indexOf('--dev') > 0) devBuild = true; //init exprees\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use('*', cors__WEBPACK_IMPORTED_MODULE_1___default()()); //init session parsers\n\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_5___default.a.json()); // support json encoded bodies\n\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_5___default.a.urlencoded({\n  extended: true\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_4___default()());\napp.use(express_session__WEBPACK_IMPORTED_MODULE_3___default()({\n  secret: 'kontoraSecretKey',\n  resave: false,\n  saveUninitialized: false\n})); // init passport and routes\n\napp.use(passport__WEBPACK_IMPORTED_MODULE_6___default.a.initialize());\napp.use(passport__WEBPACK_IMPORTED_MODULE_6___default.a.session());\n_passport_init__WEBPACK_IMPORTED_MODULE_7___default()(passport__WEBPACK_IMPORTED_MODULE_6___default.a);\nconst routes = Object(_routes_index__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(passport__WEBPACK_IMPORTED_MODULE_6___default.a);\napp.use('/', routes); //listening port\n\nvar http = __webpack_require__(/*! http */ \"http\");\n\nvar server = http.createServer(app);\nserver.listen(2002, () => {\n  if (devBuild) console.log(\"Backend started at 2002 at development mode!!!!\");\n});\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "bcrypt-nodejs":
/*!********************************!*\
  !*** external "bcrypt-nodejs" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt-nodejs\");\n\n//# sourceURL=webpack:///external_%22bcrypt-nodejs%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-local\");\n\n//# sourceURL=webpack:///external_%22passport-local%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });