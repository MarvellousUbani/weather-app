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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body{\\r\\n    background:#D6D7DA;\\r\\n    position:relative;\\r\\n    overflow:hidden;\\r\\n}\\r\\n.container{\\r\\n    border-radius: 40px;\\r\\n    background:#fff;\\r\\n    max-width:90%;\\r\\n    margin:3rem auto;\\r\\n    font-family: 'Nunito', sans-serif;\\r\\n    display:flex;\\r\\n}\\r\\n.sidebar{\\r\\n    padding:1.5rem 3rem;\\r\\n    flex:1;\\r\\n}\\r\\n.main{\\r\\n    padding:1.5rem 3rem;\\r\\n    width:70%;\\r\\n    background:#F6F6F8;\\r\\n    border-top-right-radius: 40px;\\r\\n    border-bottom-right-radius: 40px;\\r\\n}\\r\\n.input-group{\\r\\n    width:100%;\\r\\n    display: flex;\\r\\n}\\r\\n#search-weather{\\r\\n    font-size:1rem;\\r\\n    font-family: 'Nunito', sans-serif;\\r\\n    padding: .4rem 1rem;\\r\\n    border: none;\\r\\n    width:50%;\\r\\n}\\r\\n#search-weather::placeholder{\\r\\n    color:#000;\\r\\n}\\r\\n#search-weather:focus{\\r\\n    outline:none;\\r\\n    border-bottom: 1px solid #000;\\r\\n}\\r\\n#get-weather-btn:active, #get-weather-btn:focus{\\r\\n    outline:none;\\r\\n}\\r\\n#get-weather-btn{\\r\\n    font-size: 1rem;\\r\\n    padding: .5rem 1rem;\\r\\n    background:transparent;\\r\\n    border-radius:20px;\\r\\n    border:1px solid #000;\\r\\n    transition: all ease-in-out .5s;\\r\\n}\\r\\n#get-weather-btn:hover{\\r\\n    background:#000;\\r\\n    color:#fff;\\r\\n}\\r\\n#weather-icon{\\r\\n    display:block;\\r\\n    transition: all .5s;\\r\\n}\\r\\n.temperature-value{\\r\\n    font-size: 5rem;\\r\\n    font-weight: 800;\\r\\n    font-family: sans-serif;\\r\\n}\\r\\n.temperature-mode{\\r\\n    position: relative;\\r\\n    font-size: 2rem;\\r\\n    font-weight: 700;\\r\\n    top: -2rem;\\r\\n}\\r\\n.date-day{\\r\\n    font-size: 1.6rem;\\r\\n    font-weight: 600;\\r\\n}\\r\\n.card-group{\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    margin: 4rem auto;\\r\\n}\\r\\n.weather-desc{\\r\\n    text-transform: capitalize;\\r\\n}\\r\\n.card{\\r\\n    width: 32%;\\r\\n    margin-right: 1%;\\r\\n    background: #fff;\\r\\n    padding: 2rem;\\r\\n    border-radius: 20px;\\r\\n    box-shadow: 1px 1px 3px #e5e5e5;\\r\\n}\\r\\n.loader{\\r\\n    background: #d6d7da;\\r\\n    height: 100%;\\r\\n    width: 100%;\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    z-index:2;\\r\\n}\\r\\n.loader-img{\\r\\n    text-align: center;\\r\\n}\\r\\n.loader-img img{\\r\\n    max-width: 400px;\\r\\n}\\r\\n.font-mid-black{\\r\\n    font-size: 3rem;\\r\\n    font-weight: 600;\\r\\n}\\r\\n.font-grey{\\r\\n    font-size: 1.3rem;\\r\\n    color: #8f8e8e;\\r\\n    text-transform: capitalize;\\r\\n}\\r\\n.fh-btn, .cs-btn{\\r\\n    border: none;\\r\\n    background: #000;\\r\\n    color: #fff;\\r\\n    height: 30px;\\r\\n    width: 30px;\\r\\n    border-radius: 50%;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.fh-btn:active, .cs-btn:active,.fh-btn:focus, .cs-btn:focus{\\r\\n    outline:none;\\r\\n}\\r\\n.error-message{\\r\\n    background: rgba(255, 0, 0, 0.1);\\r\\n    padding: .3rem 1rem;\\r\\n    border-radius: 20px;\\r\\n    transition: all .5s;\\r\\n}\\r\\n.hidden{\\r\\n    display:none;\\r\\n}\\r\\n@media(max-width:1000px){\\r\\n    .container, .card-group{\\r\\n        flex-direction: column;\\r\\n        max-width:100%;\\r\\n   }\\r\\n    .sidebar{\\r\\n        max-width:100%;\\r\\n   }\\r\\n    .main{\\r\\n        background:transparent;\\r\\n   }\\r\\n    .card{\\r\\n        width: 90%;\\r\\n        margin-bottom: 1rem;\\r\\n        margin-right: 0;\\r\\n        background: #f9f9f9 \\r\\n   }\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! exports provided: setTemperature, displayWeatherData, findAndDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setTemperature\", function() { return setTemperature; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayWeatherData\", function() { return displayWeatherData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findAndDisplay\", function() { return findAndDisplay; });\nconst errorBox = document.querySelector(\".error-message\");\r\nconst tempValue = document.querySelector(\".temperature-value\");\r\nconst tempMode = document.querySelector(\".temperature-mode\");\r\nconst cityName = document.getElementById(\"search-weather\");\r\nlet weatherResult = {};\r\n\r\nconst weekDays = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"];\r\n\r\nconst unixTimeConverter = (timestamp) => {\r\n    const date = new Date(timestamp * 1000);\r\n    const hours = date.getHours();\r\n    const minutes = \"0\" + date.getMinutes();\r\n    const seconds = \"0\" + date.getSeconds();\r\n    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);\r\n\r\n    return formattedTime;\r\n}\r\n\r\nconst setTemperature = (e) => {\r\n    if(e.target.textContent === \"F\"){\r\n        tempValue.innerHTML = `${weatherResult.tempFah}`;\r\n        tempMode.innerHTML = `°F`;\r\n    }\r\n    if(e.target.textContent === \"C\"){\r\n        tempValue.innerHTML = `${weatherResult.tempCelcius}`;\r\n        tempMode.innerHTML = `°C`;\r\n    }\r\n}\r\n\r\nconst getWeather = async (cityValue) => {\r\n    // API Key\r\n    const weatherAppId = `c38553d04516622ea92b67238ae69d62`;\r\n\r\n    const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${weatherAppId}`);\r\n    const weatherData = await weatherRes.json();\r\n\r\n    const { description, icon } = weatherData.weather[0];\r\n    const { temp, humidity, pressure } = weatherData.main;\r\n    const { country, sunrise, sunset } = weatherData.sys;\r\n   \r\n    weatherResult =  {\r\n        tempCelcius:`${Math.ceil(temp-273.15)}`,\r\n        tempFah: `${Math.ceil((temp-273.15) * 9/5 + 32)}`,\r\n        icon: `https://openweathermap.org/img/wn/${icon}@4x.png`,\r\n        humidity: `${humidity}%`,\r\n        pressure: ` ${pressure} hpa`,\r\n        place: `${cityValue}, ${country}`,\r\n        sunrise: `${unixTimeConverter(sunrise)}`,\r\n        sunset:`${unixTimeConverter(sunset)}`,\r\n        day:`${weekDays[new Date().getDay()]}`,\r\n        time: `${unixTimeConverter(new Date().getTime())}`,\r\n        description\r\n    }\r\n}\r\n\r\nconst displayWeatherData = () => {\r\n    document.getElementById(\"weather-icon\").setAttribute(`src`, `${weatherResult.icon}`);\r\n    tempValue.innerHTML = `${weatherResult.tempCelcius}`;\r\n    document.querySelector(\".date-day\").innerHTML = `${weatherResult.day}`;\r\n    document.querySelector(\".date-time\").innerHTML = `${weatherResult.time}`;\r\n    document.querySelector(\".weather-desc\").innerHTML = `${weatherResult.description}`;\r\n    document.querySelector(\".hm-value\").innerHTML = `${weatherResult.humidity}`;\r\n    document.querySelector(\".ps-value\").innerHTML = `${weatherResult.pressure}`;\r\n    document.querySelector(\".sr-value\").innerHTML = `${weatherResult.sunrise}`;\r\n    document.querySelector(\".ss-value\").innerHTML = `${weatherResult.sunset}`;\r\n    document.querySelector(\".city-place\").innerHTML = `${weatherResult.place}`;\r\n     tempMode.innerHTML = `°C`;\r\n}\r\n\r\nconst findAndDisplay = async (city) => {\r\n    let cityInfo = city; \r\n    try{\r\n        if(typeof city !== \"string\"){cityInfo = cityName.value; }\r\n        await getWeather(cityInfo);\r\n        cityName.value = \"\";\r\n        errorBox.classList.add(\"hidden\");\r\n        displayWeatherData();\r\n    }\r\n    catch(err){\r\n       \r\n        errorBox.classList.remove(\"hidden\");\r\n        errorBox.innerHTML = `City Not Found, Try again`;\r\n        cityName.value = \"\";\r\n        console.log(err);\r\n    }\r\n   \r\n}\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\r\n\r\n\r\nconst weatherBtn = document.getElementById(\"get-weather-btn\");\r\nconst cityName = document.getElementById(\"search-weather\");\r\n\r\nweatherBtn.addEventListener(\"click\", _dom__WEBPACK_IMPORTED_MODULE_1__[\"findAndDisplay\"]);\r\ncityName.addEventListener(\"keyup\", (e) => { if(e.keyCode === 13){ Object(_dom__WEBPACK_IMPORTED_MODULE_1__[\"findAndDisplay\"])();}})\r\ndocument.querySelector(\".temp-group\").addEventListener(\"click\", _dom__WEBPACK_IMPORTED_MODULE_1__[\"setTemperature\"])\r\n\r\nconst INIT = async () => {\r\n    await Object(_dom__WEBPACK_IMPORTED_MODULE_1__[\"findAndDisplay\"])(\"Lagos\");\r\n    document.querySelector(\".loader\").classList.add(\"hidden\");\r\n    document.querySelector(\".container\").classList.remove(\"hidden\");\r\n};\r\n\r\nINIT();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ })

/******/ });