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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/dev-server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dev-server.js":
/*!***************************!*\
  !*** ./src/dev-server.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _server_hmr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server/hmr */ \"./src/server/hmr.js\");\n\n //hot module reload\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use('/', express__WEBPACK_IMPORTED_MODULE_0___default.a.static(__dirname + '/'));\napp.use('/views', express__WEBPACK_IMPORTED_MODULE_0___default.a.static(__dirname + \"/views\"));\napp.use('/build', express__WEBPACK_IMPORTED_MODULE_0___default.a.static(__dirname + \"/build\"));\napp.use('/assets', express__WEBPACK_IMPORTED_MODULE_0___default.a.static(__dirname + \"/assets\")); //routes\n\n_server_hmr__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init(app);\napp.get('/', function (req, res) {\n  res.sendFile(__dirname + '/views/index.html');\n});\napp.get('/auth', function (req, res) {\n  res.sendFile(__dirname + '/views/auth.html');\n});\n\nconst http = __webpack_require__(/*! http */ \"http\");\n\nconst server = http.createServer(app);\nserver.listen(8000, () => {\n  console.log(\"Static server started at 8000!\");\n});\n\n//# sourceURL=webpack:///./src/dev-server.js?");

/***/ }),

/***/ "./src/server/hmr.js":
/*!***************************!*\
  !*** ./src/server/hmr.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _webpack_dev_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../webpack.dev.config */ \"./webpack.dev.config.js\");\n/* harmony import */ var _webpack_dev_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_webpack_dev_config__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction initWebpackHMR(app) {\n  const compiler = webpack__WEBPACK_IMPORTED_MODULE_0___default()(_webpack_dev_config__WEBPACK_IMPORTED_MODULE_3___default.a);\n  app.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default()(compiler, {\n    logLevel: 'warn',\n    publicPath: _webpack_dev_config__WEBPACK_IMPORTED_MODULE_3___default.a.output.publicPath\n  }));\n  app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler, {\n    log: console.log\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  init: initWebpackHMR\n});\n\n//# sourceURL=webpack:///./src/server/hmr.js?");

/***/ }),

/***/ "./webpack.dev.config.js":
/*!*******************************!*\
  !*** ./webpack.dev.config.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst VueLoaderPlugin = __webpack_require__(/*! vue-loader/lib/plugin */ \"vue-loader/lib/plugin\");\n\nconst Dotenv = __webpack_require__(/*! dotenv-webpack */ \"dotenv-webpack\");\n\nlet conf = {\n  mode: 'development',\n  context: __dirname + '/views/index.html',\n  entry: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', __dirname + '/src/client/client.js'],\n  output: {\n    path: path.resolve(__dirname, './build/client/'),\n    filename: 'bundle.js',\n    publicPath: path.resolve(__dirname, './build/client/') + '/'\n  },\n  devtool: '#source-map',\n  target: 'web',\n  module: {\n    rules: [{\n      test: /\\.vue$/,\n      loader: 'vue-loader'\n    }, {\n      test: /\\.js$/,\n      loader: 'babel-loader'\n    }, {\n      test: /\\.css$/,\n      use: ['vue-style-loader', 'css-loader']\n    }, {\n      test: /\\.scss$/,\n      use: ['vue-style-loader', 'css-loader', 'sass-loader']\n    }]\n  },\n  plugins: [new Dotenv(), new VueLoaderPlugin(), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],\n  resolve: {\n    extensions: ['.js', '.vue', '.json'],\n    alias: {\n      'vue$': 'vue/dist/vue.esm.js'\n    }\n  }\n};\nmodule.exports = conf;\n\n//# sourceURL=webpack:///./webpack.dev.config.js?");

/***/ }),

/***/ "dotenv-webpack":
/*!*********************************!*\
  !*** external "dotenv-webpack" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv-webpack\");\n\n//# sourceURL=webpack:///external_%22dotenv-webpack%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "vue-loader/lib/plugin":
/*!****************************************!*\
  !*** external "vue-loader/lib/plugin" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"vue-loader/lib/plugin\");\n\n//# sourceURL=webpack:///external_%22vue-loader/lib/plugin%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });