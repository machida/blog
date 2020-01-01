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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _footerFixed = __webpack_require__(1);

var _footerFixed2 = _interopRequireDefault(_footerFixed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*--------------------------------------------------------------------------*
 *
 *  footerFixed.js
 *
 *  MIT-style license.
 *
 *  2007 Kazuma Nishihata [to-R]
 *  http://blog.webcreativepark.net
 *
 *--------------------------------------------------------------------------*/

new function () {

  var footerId = "footer";
  //メイン
  function footerFixed() {
    //ドキュメントの高さ
    var dh = document.getElementsByTagName("body")[0].clientHeight;
    //フッターのtopからの位置
    document.getElementById(footerId).style.top = "0px";
    var ft = document.getElementById(footerId).offsetTop;
    //フッターの高さ
    var fh = document.getElementById(footerId).offsetHeight;
    //ウィンドウの高さ
    if (window.innerHeight) {
      var wh = window.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight != 0) {
      var wh = document.documentElement.clientHeight;
    }
    if (ft + fh < wh) {
      document.getElementById(footerId).style.position = "relative";
      document.getElementById(footerId).style.top = wh - fh - ft - 1 + "px";
    }
  }

  //文字サイズ
  function checkFontSize(func) {

    //判定要素の追加
    var e = document.createElement("div");
    var s = document.createTextNode("S");
    e.appendChild(s);
    e.style.visibility = "hidden";
    e.style.position = "absolute";
    e.style.top = "0";
    document.body.appendChild(e);
    var defHeight = e.offsetHeight;

    //判定関数
    function checkBoxSize() {
      if (defHeight != e.offsetHeight) {
        func();
        defHeight = e.offsetHeight;
      }
    }
    setInterval(checkBoxSize, 1000);
  }

  //イベントリスナー
  function addEvent(elm, listener, fn) {
    try {
      elm.addEventListener(listener, fn, false);
    } catch (e) {
      elm.attachEvent("on" + listener, fn);
    }
  }

  addEvent(window, "load", footerFixed);
  addEvent(window, "load", function () {
    checkFontSize(footerFixed);
  });
  addEvent(window, "resize", footerFixed);
}();

/***/ })
/******/ ]);