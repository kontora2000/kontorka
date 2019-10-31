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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-session */ \"express-session\");\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_server_passport_init__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/server/passport/init */ \"./src/server/passport/init.js\");\n/* harmony import */ var _src_server_passport_init__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_server_passport_init__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_7__);\n//import path from 'path';\n //server\n\n\n\n //security\n\n //passport\n\n\n //mongoose db parameters and models\n\n\n\nconst dbConfig = __webpack_require__(/*! ./src/server/db */ \"./src/server/db.js\"); // Connect to DB\n\n\nmongoose__WEBPACK_IMPORTED_MODULE_7___default.a.connect(dbConfig.url, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true,\n  useFindAndModify: false\n}); //check if app runs in dev mode (with --dev parameter)\n\nlet devBuild = false;\nif (process.argv.indexOf('--dev') > 0) devBuild = true; //init exprees\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()(); //init session parsers\n\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.json()); // support json encoded bodies\n\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.urlencoded({\n  extended: true\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(express_session__WEBPACK_IMPORTED_MODULE_1___default()({\n  secret: 'kontoraSecretKey',\n  resave: true,\n  saveUninitialized: true\n})); // init passport and routes\n\napp.use(passport__WEBPACK_IMPORTED_MODULE_5___default.a.initialize());\napp.use(passport__WEBPACK_IMPORTED_MODULE_5___default.a.session());\n_src_server_passport_init__WEBPACK_IMPORTED_MODULE_6___default()(passport__WEBPACK_IMPORTED_MODULE_5___default.a);\nconst routes = initRoutes(passport__WEBPACK_IMPORTED_MODULE_5___default.a);\napp.use('/', routes); //listening port\n\nvar http = __webpack_require__(/*! http */ \"http\");\n\nvar server = http.createServer(app);\nserver.listen(2000, () => {\n  if (devBuild) console.log(\"Backend started at 2000 at development mode!\");\n});\n\n//# sourceURL=webpack:///./server.js?");

/***/ }),

/***/ "./src/server/db.js":
/*!**************************!*\
  !*** ./src/server/db.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  'url': 'mongodb://localhost:27017'\n};\n\n//# sourceURL=webpack:///./src/server/db.js?");

/***/ }),

/***/ "./src/server/models/user.js":
/*!***********************************!*\
  !*** ./src/server/models/user.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar Schema = mongoose.Schema;\nconst UserSchema = new Schema({\n  username: String,\n  password: String //passwordHash: String,\n  //passwordSalt: String\n\n});\nmodule.exports = mongoose.model('user', UserSchema);\n\n//# sourceURL=webpack:///./src/server/models/user.js?");

/***/ }),

/***/ "./src/server/passport/init.js":
/*!*************************************!*\
  !*** ./src/server/passport/init.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var login = __webpack_require__(/*! ./login */ \"./src/server/passport/login.js\");\n\nvar signup = __webpack_require__(/*! ./signup */ \"./src/server/passport/signup.js\");\n\nvar User = __webpack_require__(/*! ../models/user */ \"./src/server/models/user.js\");\n\nmodule.exports = function (passport) {\n  // Passport needs to be able to serialize and deserialize users to support persistent login sessions\n  passport.serializeUser(function (user, done) {\n    done(null, user._id);\n  });\n  passport.deserializeUser(function (id, done) {\n    User.findById(id, function (err, user) {\n      done(err, user);\n    });\n  }); // Setting up Passport Strategies for Login and SignUp/Registration\n\n  login(passport); //signup(passport);\n}; // import login from './login';\n// import signup from './signup';\n// import User from '../models/user';\n// let initPassport =  function(passport) {\n//     passport.serializeUser(function(user, done) {\n//         done(null, user._id);\n//     });\n//     passport.deserializeUser(function(id, done) {\n//         User.findById(id, function(err, user) {\n//             done(err, user);\n//         });\n//     });\n//     login(passport);     \n// }\n// export default initPassport;\n\n//# sourceURL=webpack:///./src/server/passport/init.js?");

/***/ }),

/***/ "./src/server/passport/login.js":
/*!**************************************!*\
  !*** ./src/server/passport/login.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var LocalStrategy = __webpack_require__(/*! passport-local */ \"passport-local\").Strategy;\n\nvar User = __webpack_require__(/*! ../models/user */ \"./src/server/models/user.js\");\n\nvar bCrypt = __webpack_require__(/*! bcrypt-nodejs */ \"bcrypt-nodejs\");\n\nmodule.exports = function (passport) {\n  passport.use('login', new LocalStrategy({\n    passReqToCallback: true\n  }, function (req, username, password, done) {\n    // check in mongo if a user with username exists or not\n    User.findOne({\n      'username': username\n    }, function (err, user) {\n      // In case of any error, return using the done method\n      if (err) return done(err); // Username does not exist, log the error and redirect back\n\n      if (!user) {\n        console.log('User Not Found with username ' + username);\n        return done(null, false, {\n          message: 'User not found'\n        });\n      } // User exists but wrong password, log the error \n\n\n      if (!isValidPassword(user, password)) {\n        console.log('Invalid Password');\n        return done(null, false, {\n          message: 'Invalid password'\n        }); // redirect back to login page\n      } // User and password both match, return user from done method\n      // which will be treated like success\n\n\n      console.log('success user!!!!!!');\n      return done(null, user);\n    });\n  }));\n\n  var isValidPassword = function (user, password) {\n    return bCrypt.compareSync(password, user.password);\n  };\n};\n\n//# sourceURL=webpack:///./src/server/passport/login.js?");

/***/ }),

/***/ "./src/server/passport/signup.js":
/*!***************************************!*\
  !*** ./src/server/passport/signup.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var LocalStrategy = __webpack_require__(/*! passport-local */ \"passport-local\").Strategy;\n\nvar User = __webpack_require__(/*! ../models/user */ \"./src/server/models/user.js\");\n\nvar bCrypt = __webpack_require__(/*! bcrypt-nodejs */ \"bcrypt-nodejs\");\n\nmodule.exports = function (passport) {\n  passport.use('signup', new LocalStrategy({\n    passReqToCallback: true // allows us to pass back the entire request to the callback\n\n  }, function (req, username, password, done) {\n    findOrCreateUser = function () {\n      // find a user in Mongo with provided username\n      User.findOne({\n        'username': username\n      }, function (err, user) {\n        // In case of any error, return using the done method\n        if (err) {\n          console.log('Error in SignUp: ' + err);\n          return done(err);\n        } // already exists\n\n\n        if (user) {\n          console.log('User already exists with username: ' + username);\n          return done(null, false, {\n            message: 'User Already Exists'\n          });\n        } else {\n          // if there is no user with that email\n          // create the user\n          var newUser = new User(); // set the user's local credentials\n\n          newUser.username = username;\n          newUser.password = createHash(password); //newUser.email = req.param('email');\n          //newUser.firstName = req.param('firstName');\n          //newUser.lastName = req.param('lastName');\n          // save the user\n\n          newUser.save(function (err) {\n            if (err) {\n              console.log('Error in Saving user: ' + err);\n              throw err;\n            }\n\n            console.log('User Registration succesful');\n            return done(null, newUser);\n          });\n        }\n      });\n    }; // Delay the execution of findOrCreateUser and execute the method\n    // in the next tick of the event loop\n\n\n    process.nextTick(findOrCreateUser);\n  })); // Generates hash using bCrypt\n\n  var createHash = function (password) {\n    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);\n  };\n};\n\n//# sourceURL=webpack:///./src/server/passport/signup.js?");

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

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

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

/***/ })

/******/ });