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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /opt/kmd/Apico/src/index.js: Support for the experimental syntax 'jsx' isn't currently enabled (6:17):\\n\\n\\u001b[0m \\u001b[90m 4 | \\u001b[39m\\u001b[36mimport\\u001b[39m \\u001b[33mApp\\u001b[39m from \\u001b[32m'./App'\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 5 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 6 | \\u001b[39m\\u001b[33mReactDOM\\u001b[39m\\u001b[33m.\\u001b[39mrender(\\u001b[33m<\\u001b[39m\\u001b[33mApp\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m,\\u001b[39m document\\u001b[33m.\\u001b[39mgetElementById(\\u001b[32m'app'\\u001b[39m))\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m                \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 7 | \\u001b[39m\\u001b[90m// If you want your app to work offline and load faster, you can change\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 8 | \\u001b[39m\\u001b[90m// unregister() to register() below. Note this comes with some pitfalls.\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 9 | \\u001b[39m\\u001b[90m// Learn more about service workers: https://bit.ly/CRA-PWA\\u001b[39m\\u001b[0m\\n\\nAdd @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.\\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.\\n    at Parser._raise (/opt/kmd/Apico/node_modules/@babel/parser/lib/index.js:757:17)\\n    at Parser.raiseWithData (/opt/kmd/Apico/node_modules/@babel/parser/lib/index.js:750:17)\\n    at Parser.expectOnePlugin (/opt/kmd/Apico/node_modules/@babel/parser/lib/index.js:8849:18)\\n    at Parser.parseExprAtom (/opt/kmd/Apico/node_modules/@babel/parser/lib/index.js:10170:22)\\n    at Parser.parseExprSubscripts (/opt/kmd/Apico/node_modules/@babel/parser/lib/index.js:9688:23)\\n    at Parser.parseMaybeUnary (/opt/kmd/Apico/node_modules/@babel/parser/lib/index.js:9668:21)\\n    at Parser.parseExprOps (/opt/kmd/Apico/node_modules/@babel/parser/lib/index.js:9538:23)\\n    at Parser.parseMaybeConditional (/opt/kmd/Apico/node_modules/@babel/parser/lib/index.js:9511:23)\\n    at Parser.parseMaybeAssign (/opt/kmd/Apico/node_modules/@babel/parser/lib/index.js:9466:21)\\n    at Parser.parseExprListItem (/opt/kmd/Apico/node_modules/@babel/parser/lib/index.js:10846:18)\\n    at Parser.parseCallExpressionArguments (/opt/kmd/Apico/node_modules/@babel/parser/lib/index.js:9885:22)\\n    at Parser.parseSubscript (/opt/kmd/Apico/node_modules/@babel/parser/lib/index.js:9785:31)\\n    at Parser.parseSubscripts (/opt/kmd/Apico/node_modules/@babel/parser/lib/index.js:9711:19)\\n    at Parser.parseExprSubscripts (/opt/kmd/Apico/node_modules/@babel/parser/lib/index.js:9694:17)\\n    at Parser.parseMaybeUnary (/opt/kmd/Apico/node_modules/@babel/parser/lib/index.js:9668:21)\\n    at Parser.parseExprOps (/opt/kmd/Apico/node_modules/@babel/parser/lib/index.js:9538:23)\\n    at Parser.parseMaybeConditional (/opt/kmd/Apico/node_modules/@babel/parser/lib/index.js:9511:23)\\n    at Parser.parseMaybeAssign (/opt/kmd/Apico/node_modules/@babel/parser/lib/index.js:9466:21)\\n    at Parser.parseExpression (/opt/kmd/Apico/node_modules/@babel/parser/lib/index.js:9418:23)\\n    at Parser.parseStatementContent (/opt/kmd/Apico/node_modules/@babel/parser/lib/index.js:11339:23)\\n    at Parser.parseStatement (/opt/kmd/Apico/node_modules/@babel/parser/lib/index.js:11210:17)\\n    at Parser.parseBlockOrModuleBlockBody (/opt/kmd/Apico/node_modules/@babel/parser/lib/index.js:11785:25)\\n    at Parser.parseBlockBody (/opt/kmd/Apico/node_modules/@babel/parser/lib/index.js:11771:10)\\n    at Parser.parseTopLevel (/opt/kmd/Apico/node_modules/@babel/parser/lib/index.js:11141:10)\\n    at Parser.parse (/opt/kmd/Apico/node_modules/@babel/parser/lib/index.js:12843:10)\\n    at parse (/opt/kmd/Apico/node_modules/@babel/parser/lib/index.js:12896:38)\\n    at parser (/opt/kmd/Apico/node_modules/@babel/core/lib/parser/index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/opt/kmd/Apico/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/opt/kmd/Apico/node_modules/@babel/core/lib/transformation/index.js:31:50)\\n    at run.next (<anonymous>)\\n    at Function.transform (/opt/kmd/Apico/node_modules/@babel/core/lib/transform.js:27:41)\\n    at transform.next (<anonymous>)\\n    at step (/opt/kmd/Apico/node_modules/gensync/index.js:254:32)\\n    at gen.next (/opt/kmd/Apico/node_modules/gensync/index.js:266:13)\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });