(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("postcss-value-parser"), require("json5"));
	else if(typeof define === 'function' && define.amd)
		define(["postcss-value-parser", "json5"], factory);
	else if(typeof exports === 'object')
		exports["cssFruit"] = factory(require("postcss-value-parser"), require("json5"));
	else
		root["cssFruit"] = factory(root["postcss-value-parser"], root["json5"]);
})(global, function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__8__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _src_dataTypes_Color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return _src_dataTypes_Color__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_dataTypes_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _src_dataTypes_Image__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_dataTypes_Length__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Length", function() { return _src_dataTypes_Length__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_dataTypes_Number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Number", function() { return _src_dataTypes_Number__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _src_dataTypes_Percentage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Percentage", function() { return _src_dataTypes_Percentage__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _src_dataTypes_URL__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return _src_dataTypes_URL__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _src_properties_Background__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return _src_properties_Background__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _src_properties_BackgroundPosition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BackgroundPosition", function() { return _src_properties_BackgroundPosition__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _src_properties_BackgroundRepeat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BackgroundRepeat", function() { return _src_properties_BackgroundRepeat__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _src_properties_BackgroundSize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BackgroundSize", function() { return _src_properties_BackgroundSize__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _src_properties_Margin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(18);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Margin", function() { return _src_properties_Margin__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _src_properties_Padding__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Padding", function() { return _src_properties_Padding__WEBPACK_IMPORTED_MODULE_12__["default"]; });

// import Parser from './src/Parser';
// import Padding from './src/Padding';
// import Margin from './src/Margin';
// import Background from './src/Background';













var Kinds = {
    background: _src_properties_Background__WEBPACK_IMPORTED_MODULE_7__["default"],
};
_src_Fruit__WEBPACK_IMPORTED_MODULE_0__["default"].absorb = function absorb(prop, value) {
    if (this.name !== 'Fruit') {
        var fruit = new this();
        return fruit.absorb.apply(fruit, arguments);
    }
    else {
        if (Array.isArray(prop)) {
            if (!prop.length)
                return undefined;
            var first = prop[0];
            var rest = prop.slice(1) || [];
            return this.absorb(first).absorb(rest);
        }
        if (typeof prop === 'object') {
            value = prop.value;
            prop = prop.prop;
        }
        var shorthand = prop.split('-')[0];
        var Kind = Kinds[shorthand];
        if (!Kind)
            throw new Error('Unsupported property');
        return Kind.absorb(prop, value);
    }
};
/* harmony default export */ __webpack_exports__["default"] = (_src_Fruit__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stem", function() { return Stem; });
var ValueParser = __webpack_require__(2);
var Stem = /** @class */ (function () {
    function Stem(value) {
        if (Array.isArray(value))
            this.nodes = value;
        else
            this.nodes = new ValueParser(value).nodes;
        this.pos = 0;
    }
    Stem.prototype.head = function () {
        return this.nodes[this.pos];
    };
    Stem.prototype.next = function () {
        if (this.pos < this.nodes.length)
            return this.nodes[++this.pos];
    };
    return Stem;
}());

var Fruit = /** @class */ (function () {
    function Fruit() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._type = 'fruit';
        this._inherited = false;
        this._parseDepth = 3 /* virtualLonghand */;
        this.valid = false;
        if (args.length === 0)
            return;
        if (args.length === 1)
            this.parse(args[0]);
        else
            this.parse(args.join(' '));
    }
    Fruit.prototype.tryCatch = function (func) {
        try {
            func();
        }
        catch (e) {
            if (this.options.throwErrors)
                throw e;
        }
    };
    Fruit.prototype.init = function () {
        this.valid = false;
    };
    Fruit.prototype.parse = function (value) {
        var _this = this;
        this.valid = false;
        this.raw = value;
        value = value.trim();
        var stem = new Stem(value);
        this.tryCatch(function () {
            _this.analyze(stem);
            if (stem.head()) {
                _this.valid = false;
                throw SyntaxError('Nodes of value cannot be fully analyzed: ' + value);
            }
        });
        return this.toResult();
    };
    Fruit.prototype.toResult = function () {
        if (!this.valid)
            return undefined;
        if (this.options.depthParseTo > this._parseDepth || this.options.forceParsing[this._type])
            return this;
        else
            return this.toString();
    };
    Fruit.prototype.analyze = function (stem) {
        this.valid = false;
        var node;
        while (node = stem.head()) {
            var control = void 0;
            try {
                control = this.analyzeInLoop(node, stem);
            }
            catch (e) {
                this.valid = false;
                throw new Error("When analyzing <" + this._type + ">\n\t" + e);
            }
            if (control === undefined)
                return;
            else if (control === true)
                node = stem.next();
        }
    };
    /**
     * Analyze in loop
     * If meeting incompatible node.type or node.value, return true to next the loop.
     * When analyzing successful, this.valid must specified.
     * @param node - Node in loop
     * @returns - Whether next++
     */
    Fruit.prototype.analyzeInLoop = function (node, stem) {
        return true;
    };
    Object.defineProperty(Fruit.prototype, Symbol.toStringTag, {
        get: function () { return this.constructor.name; },
        enumerable: true,
        configurable: true
    });
    Fruit.prototype.toString = function (complete) {
        if (!this.valid)
            return ''; // Invalid this._type
        else
            return this.raw;
    };
    Fruit.prototype.absorb = function (prop, value) {
        var _this = this;
        if (Array.isArray(prop)) {
            prop.forEach(function (decl) { return _this.absorb(decl); });
            return this;
        }
        if (typeof prop === 'object') {
            value = prop.value;
            prop = prop.prop;
        }
        return this._absorb(prop, value);
    };
    Fruit.prototype._absorb = function (prop, value) {
        return this;
    };
    Fruit.config = function (options) {
        Object.assign(this.prototype.options.forceParsing, options.forceParsing);
        Object.assign(this.prototype.options, options);
    };
    Fruit.parse = function (value) {
        var fruit = new this();
        return fruit.parse(value);
    };
    // static test(value: string): boolean {}
    Fruit.validate = function (value) {
        try {
            return this.parse(value) !== undefined;
        }
        catch (e) {
            return false;
        }
    };
    Fruit.absorb = function (prop, value) {
        var fruit = new this();
        return fruit.absorb.apply(fruit, arguments);
    };
    return Fruit;
}());
/* harmony default export */ __webpack_exports__["default"] = (Fruit);
Fruit.prototype.options = {
    irrelevantProperty: "ignore" /* ignore */,
    depthParseTo: 4 /* dataType */,
    forceParsing: {},
    throwErrors: false,
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexColorRE", function() { return hexColorRE; });
/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _NamedColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ValueParser = __webpack_require__(2);

var hexColorRE = /^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
/* eslint-disable no-sequences, no-unused-expressions, prefer-const, new-cap */
/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 100].
 *
 * @param {number} r       The red color value
 * @param {number} g       The green color value
 * @param {number} b       The blue color value
 * @return  Array           The HSL representation
 */
function RGB2HSL(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
    if (max === min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}
/**
   * Converts an HSL color value to RGB. Conversion formula
   * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
   * Assumes h, s, and l are contained in the set [0, 100] and
   * returns r, g, and b in the set [0, 255].
   *
   * @param {number} h       The hue
   * @param {number} s       The saturation
   * @param {number} l       The lightness
   * @return  Array           The RGB representation
   */
function HSL2RGB(h, s, l) {
    h /= 360, s /= 100, l /= 100;
    var r, g, b;
    function HUE2RGB(p, q, t) {
        if (t < 0)
            t += 1;
        if (t > 1)
            t -= 1;
        if (t < 1 / 6)
            return p + (q - p) * 6 * t;
        if (t < 1 / 2)
            return q;
        if (t < 2 / 3)
            return p + (q - p) * (2 / 3 - t) * 6;
        return p;
    }
    if (s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = HUE2RGB(p, q, h + 1 / 3);
        g = HUE2RGB(p, q, h);
        b = HUE2RGB(p, q, h - 1 / 3);
    }
    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}
/**
   * Converts an RGB color value to HSV. Conversion formula
   * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
   * Assumes r, g, and b are contained in the set [0, 255] and
   * returns h, s, and v in the set [0, 100].
   *
   * @param {number} r       The red color value
   * @param {number} g       The green color value
   * @param {number} b       The blue color value
   * @return  Array           The HSV representation
   */
function RGB2HSV(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, v = max;
    var d = max - min;
    s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0; // achromatic
    }
    else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), v: Math.round(v * 100) };
}
/**
   * Converts an HSV color value to RGB. Conversion formula
   * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
   * Assumes h, s, and v are contained in the set [0, 100] and
   * returns r, g, and b in the set [0, 255].
   *
   * @param {number} h       The hue
   * @param {number} s       The saturation
   * @param {number} v       The value
   * @return  Array           The RGB representation
   */
function HSV2RGB(h, s, v) {
    h /= 360, s /= 100, v /= 100;
    var r, g, b;
    var i = Math.floor(h * 6);
    var f = h * 6 - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0:
            r = v, g = t, b = p;
            break;
        case 1:
            r = q, g = v, b = p;
            break;
        case 2:
            r = p, g = v, b = t;
            break;
        case 3:
            r = p, g = q, b = v;
            break;
        case 4:
            r = t, g = p, b = v;
            break;
        case 5:
            r = v, g = p, b = q;
            break;
    }
    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}
var Color = /** @class */ (function (_super) {
    __extends(Color, _super);
    function Color(r, g, b, a) {
        var _this = _super.call(this) || this;
        _this.valid = false;
        _this._type = 'color';
        _this._parseDepth = 4 /* dataType */;
        _this.init();
        var args = arguments;
        _this.tryCatch(function () {
            if (args.length === 0)
                return;
            else if (args.length === 1 && typeof r === 'string') {
                _this.parse(r);
            }
            else if (args.length === 3) {
                if (typeof r === 'number' && typeof g === 'number' && typeof b === 'number') {
                    _this.r = r;
                    _this.g = g;
                    _this.b = b;
                    _this.valid = true;
                }
                else
                    throw new TypeError('Wrong type of arguments');
            }
            else if (args.length === 4) {
                if (typeof r === 'number' && typeof g === 'number' && typeof b === 'number' && typeof a === 'number') {
                    _this.r = r;
                    _this.g = g;
                    _this.b = b;
                    _this.a = a;
                    _this.valid = true;
                }
                else
                    throw new TypeError('Wrong type of arguments');
            }
            else
                throw new TypeError('Wrong type or excessive arguments');
        });
        return _this;
    }
    Object.defineProperty(Color.prototype, "r", {
        // get valid() {
        //     return this.valid;
        // }
        get: function () { return this._r; },
        set: function (r) {
            if (r < 0 || r > 255)
                throw new RangeError('Red is a number between 0 and 255');
            this._r = Math.round(r);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "g", {
        get: function () { return this._g; },
        set: function (g) {
            if (g < 0 || g > 255)
                throw new RangeError('Green is a number between 0 and 255');
            this._g = Math.round(g);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "b", {
        get: function () { return this._b; },
        set: function (b) {
            if (b < 0 || b > 255)
                throw new RangeError('Blue is a number between 0 and 255');
            this._b = Math.round(b);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "a", {
        get: function () { return this._a; },
        set: function (a) {
            if (a < 0 || a > 1)
                throw new RangeError('Alpha is a number between 0 and 1');
            this._a = a;
        },
        enumerable: true,
        configurable: true
    });
    Color.prototype.init = function () {
        _super.prototype.init.call(this);
        this._value = undefined;
        this._r = 0;
        this._g = 0;
        this._b = 0;
        this._a = 1;
        this.valid = true;
        // @TODO
    };
    Color.prototype.analyzeInLoop = function (node, stem) {
        if (node.type === "space" /* space */ || node.type === "comment" /* comment */)
            return true;
        else if (node.type === "word" /* word */) {
            if (node.value === 'currentColor') {
                if (this._value)
                    throw new SyntaxError("Excessive value '" + node.value + "'");
                this._value = 'currentColor';
                return this.valid = true;
            }
            else if (node.value === 'transparent') {
                this._r = 0;
                this._g = 0;
                this._b = 0;
                this._a = 0;
                return this.valid = true;
            }
            else if (_NamedColor__WEBPACK_IMPORTED_MODULE_1__["default"][node.value]) {
                if (this._value)
                    throw new SyntaxError("Excessive value '" + node.value + "'");
                // this._value = node.value;
                var hex = _NamedColor__WEBPACK_IMPORTED_MODULE_1__["default"][node.value];
                var color = Color.fromHex(hex);
                this._r = color._r;
                this._g = color._g;
                this._b = color._b;
                this._a = color._a;
                return this.valid = true;
            }
            else if (hexColorRE.test(node.value)) {
                if (this._value)
                    throw new SyntaxError("Excessive value '" + node.value + "'");
                // this._value = node.value;
                this.setHex(node.value);
                return this.valid = true;
            }
        }
        else if (node.type === "function" /* function */) {
            if (node.unclosed)
                throw new SyntaxError("Unclosed function '" + node.value + "'");
            // if (node.value === 'rgb' || node.value === 'rgba') {
            //     let count = 0;
            //     let type = 'number';
            //     node.nodes.forEach((subNode) => {
            //         if (subNode.type === ValueNodeType.comment)
            //             return;
            //         else if (subNode.type === ValueNodeType.word) {
            //             const percentage = new Percentage(subNode.value);
            //             if (percentage.valid) {
            //                 this.a = Math.floor(percentage.number * 2.55);
            //             }
            //             const number = +subNode.value;
            //             if (number < 0 || number > )
            //         } else
            //             throw new SyntaxError(`Unexcepted type in ${node.value} function '${subNode.type}'`);
            //     });
            // } else
            if (node.value === 'rgb' || node.value === 'rgba' || node.value === 'hsl' || node.value === 'hsla') {
                if (this._value)
                    throw new SyntaxError("Excessive value '" + node.value + "'");
                this._value = ValueParser.stringify(node);
                return this.valid = true;
            }
        }
    };
    Color.prototype.toString = function () {
        if (!this.valid)
            return _super.prototype.toString.call(this);
        if (this._value)
            return this._value;
        else if (this._a === 1)
            return this.toHex();
        else
            return this.toRGBA();
    };
    /**
     * To a Tuple (Array)
     * @param alpha - Show alpha
     */
    Color.prototype.toTuple = function (alpha) {
        if (alpha)
            return [this._r, this._g, this._b, this._a];
        else
            return [this._r, this._g, this._b];
    };
    /**
     * Set color values by Hexadecimal
     * @param hex - Hexadecimal number
     */
    Color.prototype.setHex = function (hex) {
        hex = hex.slice(1);
        if (hex.length === 6 || hex.length === 8) { }
        else if (hex.length === 3)
            hex = "" + hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        else if (hex.length === 4)
            hex = "" + hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
        else
            throw new SyntaxError("Unexpected length of hex number '" + hex + "'");
        this.r = parseInt(hex.slice(0, 2), 16);
        this.g = parseInt(hex.slice(2, 4), 16);
        this.b = parseInt(hex.slice(4, 6), 16);
        this.a = parseInt(hex.slice(6, 8) || 'ff', 16) / 255;
    };
    /**
     * To a Hexadecimal string
     * @param alpha - Show alpha
     */
    Color.prototype.toHex = function (alpha) {
        var fix = function (num) { return num.length === 1 ? '0' + num : num; };
        if (alpha)
            return '#' + fix(this.r.toString(16)) + fix(this.g.toString(16)) + fix(this.b.toString(16)) + fix((this.a * 255).toString(16));
        else
            return '#' + fix(this.r.toString(16)) + fix(this.g.toString(16)) + fix(this.b.toString(16));
    };
    /**
     * Get RGB values of the color
     */
    Color.prototype.getRGB = function () {
        return { r: this._r, g: this._g, b: this._b };
    };
    /**
     * Set color values by RGB representation
     * @param r - Red, in the set [0, 255]
     * @param g - Green, in the set [0, 255]
     * @param b - Blue, in the set [0, 255]
     */
    Color.prototype.setRGB = function (r, g, b) {
        Object.assign(this, { r: r, g: g, b: b });
    };
    /**
     * To a RGB function string
     * @param percentage - Represent in percentage or not
     */
    Color.prototype.toRGB = function (percentage) {
        if (percentage)
            return "rgb(" + Math.round(this._r / 255 * 100) + "%, " + Math.round(this._g / 255 * 100) + "%, " + Math.round(this._b / 255 * 100) + "%)";
        else
            return "rgb(" + this._r + ", " + this._g + ", " + this._b + ")";
    };
    /**
     * To a RGBA function string
     * @param percentage - Represent in percentage or not
     */
    Color.prototype.toRGBA = function (percentage) {
        if (percentage)
            return "rgba(" + Math.round(this._r / 255 * 100) + "%, " + Math.round(this._g / 255 * 100) + "%, " + Math.round(this._b / 255 * 100) + "%, " + Math.round(this._a * 100) + "%)";
        else
            return "rgba(" + this._r + ", " + this._g + ", " + this._b + ", " + this._a + ")";
    };
    /**
     * Get HSV values of the color
     */
    Color.prototype.getHSV = function () {
        return RGB2HSV(this._r, this._g, this._b);
    };
    /**
     * Set color values by HSV representation
     * @param h - Hue, in the set [0, 360]
     * @param s - Saturation, in the set [0, 100]
     * @param v - Value, in the set [0, 100]
     */
    Color.prototype.setHSV = function (h, s, v) {
        Object.assign(this, { h: h, s: s, v: v }, HSV2RGB(h, s, v));
    };
    // CSS不支持，先不做了。其实就两句话的事
    // toHSV()
    /**
     * Get HSL values of the color
     */
    Color.prototype.getHSL = function () {
        return RGB2HSL(this._r, this._g, this._b);
    };
    /**
     * Create a new color from HSL representation
     * @param h - Hue, in the set [0, 360]
     * @param s - Saturation, in the set [0, 100]
     * @param l - Lightness, in the set [0, 100]
     */
    Color.prototype.setHSL = function (h, s, l) {
        Object.assign(this, HSL2RGB(h, s, l));
    };
    /**
     * To a HSL function string
     */
    Color.prototype.toHSL = function () {
        var hsl = this.getHSL();
        return "hsl(" + hsl.h + ", " + hsl.s + "%, " + hsl.l + "%)";
    };
    /**
     * To a HSLA function string
     */
    Color.prototype.toHSLA = function () {
        var hsl = this.getHSL();
        return "hsla(" + hsl.h + ", " + hsl.s + "%, " + hsl.l + "%, " + this.a + ")";
    };
    /**
     * Create a new color from Hexadecimal
     * @param hex - Hexadecimal number
     */
    Color.fromHex = function (hex) {
        var color = new Color();
        color.setHex(hex);
        return color;
    };
    /**
     * Create a new color from HSV representation
     * @param h - Hue, in the set [0, 360]
     * @param s - Saturation, in the set [0, 100]
     * @param v - Value, in the set [0, 100]
     */
    Color.fromHSV = function (h, s, v) {
        var color = new Color();
        color.setHSV(h, s, v);
        return color;
    };
    /**
     * Create a new color from HSL representation
     * @param h - Hue, in the set [0, 360]
     * @param s - Saturation, in the set [0, 100]
     * @param l - Lightness, in the set [0, 100]
     */
    Color.fromHSL = function (h, s, l) {
        var color = new Color();
        color.setHSL(h, s, l);
        return color;
    };
    return Color;
}(_Fruit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Color);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var NamedColor = {
    black: '#000000',
    silver: '#c0c0c0',
    gray: '#808080',
    white: '#ffffff',
    maroon: '#800000',
    red: '#ff0000',
    purple: '#800080',
    fuchsia: '#ff00ff',
    green: '#008000',
    lime: '#00ff00',
    olive: '#808000',
    yellow: '#ffff00',
    navy: '#000080',
    blue: '#0000ff',
    teal: '#008080',
    aqua: '#00ffff',
    orange: '#ffa500',
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    blanchedalmond: '#ffebcd',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    gold: '#ffd700',
    goldenrod: '#daa520',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavender: '#e6e6fa',
    lavenderblush: '#fff0f5',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    oldlace: '#fdf5e6',
    olivedrab: '#6b8e23',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    whitesmoke: '#f5f5f5',
    yellowgreen: '#9acd32',
    rebeccapurple: '#663399',
};
/* harmony default export */ __webpack_exports__["default"] = (NamedColor);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _URL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _ImageSet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image(value) {
        var _this = _super.call(this) || this;
        _this._type = 'image';
        _this._parseDepth = 4 /* dataType */;
        _this.init();
        var args = arguments;
        _this.tryCatch(function () {
            if (args.length === 0)
                return;
            else if (typeof value === 'string')
                _this.parse(value);
            else if (value instanceof _URL__WEBPACK_IMPORTED_MODULE_1__["default"] || value instanceof _ImageSet__WEBPACK_IMPORTED_MODULE_2__["default"]) {
                // @矛盾: 赋值给`this.value`时，应不应该检查 URL 本身的合法性？
                _this.value = value.toResult();
                _this.valid = value.valid;
            }
            else
                throw new TypeError('Wrong type or excessive arguments');
        });
        return _this;
    }
    Image.prototype.init = function () {
        _super.prototype.init.call(this);
        this._state = { count: 0 };
        this.value = undefined;
    };
    Image.prototype.toResult = function () {
        if (!this.valid)
            return _super.prototype.toResult.call(this);
        if (typeof this.value === 'string')
            return this.value;
        else
            return this.value.toResult();
    };
    Image.prototype.analyzeInLoop = function (node, stem) {
        if (node.type === "space" /* space */ || node.type === "comment" /* comment */)
            return true;
        else if (node.type === "function" /* function */) {
            if (node.unclosed)
                throw new SyntaxError("Unclosed function '" + node.value + "'");
            if (node.value === 'url') {
                if (this.value)
                    throw new SyntaxError("Excessive value '" + node.value + "'");
                var url = new _URL__WEBPACK_IMPORTED_MODULE_1__["default"]();
                url.analyze(stem);
                if (!url.valid)
                    throw new SyntaxError("Invalid <url> '" + node.value + "'");
                this.value = url.toResult();
                this.valid = true;
                return false;
            }
            else if (node.value === 'image-set' || node.value === '-webkit-image-set') {
                if (this.value)
                    throw new SyntaxError("Excessive value '" + node.value + "'");
                var imageSet = new _ImageSet__WEBPACK_IMPORTED_MODULE_2__["default"]();
                imageSet.analyze(stem);
                if (!imageSet.valid)
                    throw new SyntaxError("Invalid <image-set> '" + node.value + "'");
                this.value = imageSet.toResult();
                this.valid = true;
                return false;
            } // else
            // cont gradient = new Gradient();
        }
    };
    Image.prototype.toString = function (complete) {
        if (!this.valid)
            return _super.prototype.toString.call(this);
        return this.value.toString();
    };
    return Image;
}(_Fruit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Image);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlRE", function() { return urlRE; });
/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


// @TODO:
// const strict = false;
// const protocolRE = `(?:(?:[a-z]+:)?//)${strict ? '' : '?'}`;
// const authRE = '(?:\\S+(?::\\S*)?@)?';
// const ipRE = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';
// const hostRE = '(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)';
// const domainRE = '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*';
// const tldRE = `(?:\\.${strict ? '(?:[a-z\\u00a1-\\uffff]{2,})' : `(?:${tlds.sort((a, b) => b.length - a.length).join('|')})`})\\.?`;
// const portRE = '(?::\\d{2,5})?';
// const pathRE = '(?:[/?#][^\\s"]*)?';
// const regexRE = `(?:${protocol}|www\\.)${auth}(?:localhost|${ip}|${host}${domain}${tld})${port}${path}`;
var urlRE = /^(.*?)(\?.*?)?(#.*?)?$/i;
var URL = /** @class */ (function (_super) {
    __extends(URL, _super);
    function URL(value) {
        var _this = _super.call(this) || this;
        _this._type = 'url';
        _this._parseDepth = 4 /* dataType */;
        _this.init();
        var args = arguments;
        _this.tryCatch(function () {
            if (args.length === 0)
                return;
            else if (args.length === 1)
                _this.parse(value);
            else
                throw new TypeError('Wrong type or excessive arguments');
        });
        return _this;
    }
    URL.prototype.init = function () {
        _super.prototype.init.call(this);
        // this.quote = "'";
        this.url = undefined;
        this.path = undefined;
        this.query = undefined;
        this.hash = undefined;
    };
    URL.prototype.analyzeInLoop = function (node) {
        if (node.type === "space" /* space */ || node.type === "comment" /* comment */)
            return true;
        else if (node.type === "function" /* function */) {
            if (node.unclosed)
                throw new SyntaxError("Unclosed function '" + node.value + "'");
            if (node.value === 'url') {
                if (this.url)
                    throw new SyntaxError("Duplicated function 'url'");
                var url = '';
                if (node.nodes.length > 1)
                    throw new SyntaxError('Invalid url format');
                else if (node.nodes.length === 1) {
                    var subNode = node.nodes[0];
                    if (subNode.unclosed)
                        throw new SyntaxError("Unclosed quote '" + subNode.value + "'");
                    else
                        url = subNode.value;
                    // @discuss: keep quote?
                } // else valid
                this.url = url;
                var found = urlRE.exec(url);
                this.path = found[1] || '';
                // this.path = found[1] ? decodeURIComponent(found[1]) : '';
                if (found[2])
                    this.query = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseQuery"])(found[2]);
                this.hash = found[3] ? found[3].slice(1) : '';
                // this.hash = found[3] ? decodeURIComponent(found[3].slice(1)) : '';
                return this.valid = true;
            }
        }
    };
    URL.prototype.toString = function () {
        if (!this.valid)
            return _super.prototype.toString.call(this);
        var quote = "'";
        var queryString = this.query ? Object(_utils__WEBPACK_IMPORTED_MODULE_1__["stringifyQuery"])(this.query) : '';
        // return `url(${quote}${encodeURIComponent(this.path)}${queryString}${this.hash ? '#' + encodeURIComponent(this.hash) : ''}${quote})`;
        return "url(" + quote + this.path + queryString + (this.hash ? '#' + this.hash : '') + quote + ")";
    };
    return URL;
}(_Fruit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (URL);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseQuery", function() { return parseQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyQuery", function() { return stringifyQuery; });
/* harmony import */ var json5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var json5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(json5__WEBPACK_IMPORTED_MODULE_0__);

var specialValues = {
    null: null,
    true: true,
    false: false,
};
function parseQuery(query) {
    if (query[0] !== '?')
        throw new SyntaxError("A valid query string passed to parseQuery should begin with '?'");
    query = query.substr(1);
    if (!query)
        return {};
    if (query[0] === '{' && query.substr(-1) === '}')
        return json5__WEBPACK_IMPORTED_MODULE_0__["parse"](query);
    var args = query.split('&');
    var result = {};
    args.forEach(function (arg) {
        var idx = arg.indexOf('=');
        if (idx >= 0) {
            var name_1 = arg.substr(0, idx);
            var value = decodeURIComponent(arg.substr(idx + 1));
            if (specialValues.hasOwnProperty(value))
                value = specialValues[value];
            if (name_1.substr(-2) === '[]') {
                name_1 = decodeURIComponent(name_1.substr(0, name_1.length - 2));
                if (!Array.isArray(result[name_1]))
                    result[name_1] = [];
                result[name_1].push(value);
            }
            else {
                name_1 = decodeURIComponent(name_1);
                result[name_1] = value;
            }
        }
        else {
            if (arg[0] === '-')
                result[decodeURIComponent(arg.substr(1))] = false;
            else if (arg[0] === '+')
                result[decodeURIComponent(arg.substr(1))] = true;
            else
                result[decodeURIComponent(arg)] = true;
        }
    });
    return result;
}
function stringifyQuery(query) {
    if (Object.values(query).some(function (value) { return typeof value === 'object' && !Array.isArray(value); }))
        return '?' + json5__WEBPACK_IMPORTED_MODULE_0__["stringify"](query);
    return '?' + Object.keys(query).map(function (key) {
        var value = query[key];
        if (Array.isArray(value))
            return value.map(function (subValue) { return key + "[]=" + subValue; }).join('&');
        else if (value === true)
            return "" + key;
        else if (value === false || value === null)
            return key + "=" + value;
        else
            return key + "=" + query[key];
        // if (Array.isArray(value))
        //     return value.map((subValue) => `${encodeURIComponent(key)}[]=${encodeURIComponent(subValue)}`).join('&');
        // else if (value === true)
        //     return `${encodeURIComponent(key)}`;
        // else if (value === false || value === null)
        //     return `${encodeURIComponent(key)}=${value}`;
        // else
        //     return `${encodeURIComponent(key)}=${encodeURIComponent(query[key] as string)}`;
    }).join('&');
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8__;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _URL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _Resolution__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ImageSet = /** @class */ (function (_super) {
    __extends(ImageSet, _super);
    function ImageSet(value) {
        var _this = _super.call(this) || this;
        _this._type = 'image-set';
        _this._parseDepth = 4 /* dataType */;
        _this.init();
        var args = arguments;
        _this.tryCatch(function () {
            if (args.length === 0)
                return;
            else if (args.length === 1)
                _this.parse(value);
            else
                throw new TypeError('Wrong type or excessive arguments');
        });
        return _this;
    }
    ImageSet.prototype.init = function () {
        _super.prototype.init.call(this);
        this.prefix = '';
        this.values = {};
    };
    ImageSet.prototype.analyzeInLoop = function (node) {
        var _this = this;
        if (node.type === "space" /* space */ || node.type === "comment" /* comment */)
            return true;
        else if (node.type === "function" /* function */) {
            if (node.unclosed)
                throw new SyntaxError("Unclosed function '" + node.value + "'");
            if (node.value === 'image-set' || node.value === '-webkit-image-set') {
                if (node.value === '-webkit-image-set')
                    this.prefix = '-webkit-';
                var subNodes = node.nodes;
                var currentURL_1;
                subNodes.forEach(function (subNode) {
                    if (subNode.type === "space" /* space */ || node.type === "comment" /* comment */)
                        return true;
                    else if (subNode.type === "div" /* div */) {
                        if (subNode.value === ',')
                            currentURL_1 = undefined;
                        else
                            throw new SyntaxError("Unknown divider '" + subNode.value + "'");
                    }
                    else if (subNode.type === "function" /* function */) {
                        if (subNode.value === 'url') {
                            var url = new _URL__WEBPACK_IMPORTED_MODULE_1__["default"]();
                            url.analyze(new _Fruit__WEBPACK_IMPORTED_MODULE_0__["Stem"]([subNode]));
                            if (!url.valid)
                                throw new SyntaxError("Invalid <url> '" + node.value + "'");
                            currentURL_1 = url.toResult();
                        }
                        else
                            throw new SyntaxError("Unknown function '" + subNode.value + "'");
                    }
                    else if (subNode.type === "string" /* string */) {
                        currentURL_1 = _URL__WEBPACK_IMPORTED_MODULE_1__["default"].parse("url(" + subNode.quote + subNode.value + subNode.quote + ")");
                    }
                    else if (subNode.type === "word" /* word */) {
                        var resolution = new _Resolution__WEBPACK_IMPORTED_MODULE_2__["default"](subNode.value);
                        if (!resolution.valid)
                            throw new TypeError("Invalid <resolution> '" + subNode.value + "'");
                        // Overwrite if same resolution
                        _this.values[resolution.toDppx()] = currentURL_1;
                    }
                    else
                        throw new SyntaxError("Unknown node type '" + subNode.value + "'");
                });
                if (Object.keys(this.values).length)
                    return this.valid = true;
                else
                    return undefined;
            }
        }
    };
    ImageSet.prototype.toString = function () {
        var _this = this;
        return this.prefix + 'image-set(' + Object.keys(this.values).map(function (resolution) {
            return _this.values[resolution].toString() + ' ' + resolution;
        }).join(', ') + ')';
    };
    return ImageSet;
}(_Fruit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (ImageSet);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var unitRE = /^dpi|dpcm|dppx|x$/i;
var partialRE = new RegExp("^(" + String(_Number__WEBPACK_IMPORTED_MODULE_1__["numberRE"]).slice(2, -3) + ")(" + String(unitRE).slice(2, -3) + ")?$", 'i');
var Resolution = /** @class */ (function (_super) {
    __extends(Resolution, _super);
    function Resolution(value, unit) {
        var _this = _super.call(this) || this;
        _this._type = 'resolution';
        _this._parseDepth = 4 /* dataType */;
        _this.init();
        var args = arguments;
        _this.tryCatch(function () {
            if (args.length === 0)
                return;
            else if (args.length === 1 && typeof value === 'string')
                _this.parse(value);
            else if (args.length === 2 && typeof value === 'number') {
                if (unit && unitRE.test(unit)) {
                    _this.number = value;
                    _this.unit = unit;
                    _this.valid = true;
                }
                else
                    throw new SyntaxError("Invalid unit '" + unit + "'");
            }
            else
                throw new TypeError('Wrong type or excessive arguments');
        });
        return _this;
    }
    Resolution.prototype.init = function () {
        _super.prototype.init.call(this);
        this.number = undefined;
        this.unit = undefined;
    };
    Resolution.prototype.parse = function (value) {
        var _this = this;
        value = value.trim();
        this.tryCatch(function () {
            var found = partialRE.exec(value);
            if (!found)
                throw new SyntaxError("Invalid length '" + value + "'");
            if (!found[2])
                throw new SyntaxError('There must be a unit');
            _this.number = +found[1];
            _this.unit = found[2];
            _this.valid = true;
        });
        return this.toResult();
    };
    Resolution.prototype.toString = function (complete) {
        if (!this.valid)
            return _super.prototype.toString.call(this);
        return this.number + this.unit;
    };
    Resolution.test = function (value) {
        return partialRE.test(value);
    };
    Resolution.prototype.toDppx = function () {
        if (!this.valid)
            return this.toString();
        var unit = 'x';
        if (this.unit === 'dppx' || this.unit === 'x')
            return this.number + unit;
        else if (this.unit === 'dpi')
            return +(this.number / 96).toFixed(3) + unit;
        else if (this.unit === 'dpcm')
            return +(this.number * 2.54 / 96).toFixed(3) + unit;
    };
    Resolution.prototype.toDpi = function () {
        if (!this.valid)
            return this.toString();
        var unit = 'dpi';
        if (this.unit === 'dppx' || this.unit === 'x')
            return +(this.number * 96).toFixed(3) + unit;
        else if (this.unit === 'dpi')
            return this.number + unit;
        else if (this.unit === 'dpcm')
            return +(this.number * 2.54).toFixed(3) + unit;
    };
    Resolution.prototype.toDpcm = function () {
        if (!this.valid)
            return this.toString();
        var unit = 'dpcm';
        if (this.unit === 'dppx' || this.unit === 'x')
            return +(this.number * 96 / 2.54).toFixed(3) + unit;
        else if (this.unit === 'dpi')
            return +(this.number / 2.54).toFixed(3) + unit;
        else if (this.unit === 'dpcm')
            return this.number + unit;
    };
    return Resolution;
}(_Fruit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Resolution);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberRE", function() { return numberRE; });
var numberRE = /^[+-]?(?:\.?\d+|\d+\.\d+)(?:e[+-]?\d+)?$/i;
/* harmony default export */ __webpack_exports__["default"] = (Number);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var unitRE = /^ch|em|ex|rem|vh|vw|vmin|vmax|px|cm|mm|in|pc|pt$/i;
var experimentalUnitRE = /^cap|ch|em|ex|ic|lh|rem|rlh|vh|vw|vi|vb|vmin|vmax|px|cm|mm|Q|in|pc|pt$/i;
var partialRE = new RegExp("^(" + String(_Number__WEBPACK_IMPORTED_MODULE_1__["numberRE"]).slice(2, -3) + ")(" + String(unitRE).slice(2, -3) + ")?$", 'i');
var Length = /** @class */ (function (_super) {
    __extends(Length, _super);
    function Length(value, unit) {
        var _this = _super.call(this) || this;
        _this._type = 'length';
        _this._parseDepth = 4 /* dataType */;
        _this.init();
        var args = arguments;
        _this.tryCatch(function () {
            if (args.length === 0)
                return;
            else if (args.length === 1 && typeof value === 'string')
                _this.parse(value);
            else if (typeof value === 'number') {
                if (!unit && value === 0) {
                    _this.number = value;
                    _this.unit = '';
                    _this.valid = true;
                }
                else if (unit && unitRE.test(unit)) {
                    _this.number = value;
                    _this.unit = unit;
                    _this.valid = true;
                }
                else
                    throw new SyntaxError("Invalid unit '" + unit + "'");
            }
            else
                throw new TypeError('Wrong type or excessive arguments');
        });
        return _this;
    }
    Length.prototype.init = function () {
        _super.prototype.init.call(this);
        this.number = undefined;
        this.unit = undefined;
    };
    Length.prototype.parse = function (value) {
        var _this = this;
        value = value.trim();
        this.tryCatch(function () {
            var found = partialRE.exec(value);
            if (!found)
                throw new SyntaxError("Invalid length '" + value + "'");
            if (+found[1] !== 0 && !found[2])
                throw new SyntaxError('There must be a unit after the non-zero number');
            _this.number = +found[1];
            _this.unit = found[2] || '';
            _this.valid = true;
        });
        return this.toResult();
    };
    Length.prototype.toString = function (complete) {
        if (!this.valid)
            return _super.prototype.toString.call(this);
        if (!complete) {
            if (this.number === 0)
                return '0';
        }
        return this.number + this.unit;
    };
    Length.test = function (value) {
        return partialRE.test(value);
    };
    return Length;
}(_Fruit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Length);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var partialRE = new RegExp("^(" + String(_Number__WEBPACK_IMPORTED_MODULE_1__["numberRE"]).slice(2, -3) + ")%$", 'i');
var Percentage = /** @class */ (function (_super) {
    __extends(Percentage, _super);
    function Percentage(value) {
        var _this = _super.call(this) || this;
        _this._type = 'percentage';
        _this._parseDepth = 4 /* dataType */;
        _this.init();
        var args = arguments;
        _this.tryCatch(function () {
            if (args.length === 0)
                return;
            else if (typeof value === 'string')
                _this.parse(value);
            else if (typeof value === 'number') {
                _this.number = value;
                _this.valid = true;
            }
            else
                throw new TypeError('Wrong type or excessive arguments');
        });
        return _this;
    }
    Percentage.prototype.init = function () {
        _super.prototype.init.call(this);
        this.number = undefined;
    };
    Percentage.prototype.parse = function (value) {
        var _this = this;
        value = value.trim();
        this.tryCatch(function () {
            var found = partialRE.exec(value);
            if (!found)
                throw new SyntaxError("Invalid percentage format of '" + value + "'");
            // if (+found[1] !== 0 && !found[2])
            //     throw new SyntaxError('"%" must be after the non-zero number');
            _this.number = +found[1];
            _this.valid = true;
        });
        return this.toResult();
    };
    Percentage.prototype.toString = function (complete) {
        if (!this.valid)
            return _super.prototype.toString.call(this);
        // if (!complete) {
        //     if (this.number === 0)
        //         return '0';
        // }
        return this.number + '%';
    };
    Percentage.test = function (value) {
        return partialRE.test(value);
    };
    return Percentage;
}(_Fruit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Percentage);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundAttachmentRE", function() { return backgroundAttachmentRE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxRE", function() { return boxRE; });
/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _dataTypes_Color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _dataTypes_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _BackgroundPosition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _BackgroundRepeat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _BackgroundSize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var backgroundAttachmentRE = /^(scroll|fixed|local)$/i;
var boxRE = /^(border-box|padding-box|content-box)$/i;
var SubProperty;
(function (SubProperty) {
    SubProperty["attachment"] = "attachment";
    SubProperty["clip"] = "clip";
    SubProperty["color"] = "color";
    SubProperty["image"] = "image";
    SubProperty["origin"] = "origin";
    SubProperty["position"] = "position";
    SubProperty["repeat"] = "repeat";
    SubProperty["size"] = "size";
})(SubProperty || (SubProperty = {}));
;
/**
 * Unsupport two backgrounds
 */
var Background = /** @class */ (function (_super) {
    __extends(Background, _super);
    function Background(value) {
        var _this = _super.call(this) || this;
        _this._type = 'background';
        _this._parseDepth = 0 /* shorthand */;
        _this.init();
        var args = arguments;
        _this.tryCatch(function () {
            if (args.length === 0)
                return;
            else if (args.length === 1)
                _this.parse(value);
            else
                throw new TypeError('Wrong type or excessive arguments');
        });
        return _this;
    }
    Background.prototype.init = function () {
        _super.prototype.init.call(this);
        this._state = { boxCount: 0 };
        this.attachment = undefined;
        this.clip = undefined;
        this.color = undefined;
        this.image = undefined;
        this.origin = undefined;
        this.position = undefined;
        this.repeat = undefined;
        this.size = undefined;
    };
    Background.prototype.analyzeInLoop = function (node, stem) {
        if (node.type === "space" /* space */ || node.type === "comment" /* comment */)
            return true;
        else if (node.type === "word" /* word */) {
            if (node.value === 'none')
                this.setImage(node.value);
            else if (backgroundAttachmentRE.test(node.value)) {
                if (this.attachment)
                    throw new SyntaxError("Excessive <background-attachment> '" + node.value + "'");
                this.attachment = node.value;
                return this.valid = true;
            }
            else if (boxRE.test(node.value)) {
                if (this._state.boxCount === 0) {
                    this.clip = this.origin = node.value;
                    this._state.boxCount++;
                    return this.valid = true;
                }
                else if (this._state.boxCount === 1) {
                    this.clip = node.value;
                    this._state.boxCount++;
                    return this.valid = true;
                }
                else
                    throw new SyntaxError("Excessive <background-clip> '" + node.value + "'");
            }
            else {
                var valid = false;
                var color = new _dataTypes_Color__WEBPACK_IMPORTED_MODULE_1__["default"]();
                color.analyze(stem);
                if (color.valid) {
                    this.setColor(color);
                    valid = this.valid = true;
                }
                var position = new _BackgroundPosition__WEBPACK_IMPORTED_MODULE_3__["default"]();
                position.analyze(stem);
                if (position.valid) {
                    this.setPosition(position.toResult());
                    valid = this.valid = true;
                    node = stem.head();
                    if (!node)
                        return false;
                    if (node.type === 'div' && node.value === '/') {
                        var size = new _BackgroundSize__WEBPACK_IMPORTED_MODULE_5__["default"]();
                        stem.next();
                        size.analyze(stem);
                        if (size.valid) {
                            this.setSize(size);
                            valid = this.valid = true;
                        }
                        else
                            throw new SyntaxError("Invalid <background-size> '" + node.value + "'");
                    }
                }
                var repeat = new _BackgroundRepeat__WEBPACK_IMPORTED_MODULE_4__["default"]();
                repeat.analyze(stem);
                if (repeat.valid) {
                    this.setRepeat(repeat.toResult());
                    valid = this.valid = true;
                }
                if (valid)
                    return false;
            }
            // color
        }
        else if (node.type === "function" /* function */) {
            if (node.unclosed)
                throw new SyntaxError("Unclosed function '" + node.value + "'");
            if (node.value === 'url' || node.value === 'image-set' || node.value === '-webkit-image-set') {
                var image = new _dataTypes_Image__WEBPACK_IMPORTED_MODULE_2__["default"]();
                image.analyze(stem);
                if (!image.valid)
                    throw new SyntaxError("Invalid <image> '" + node.value + "'");
                this.setImage(image.toResult());
                this.valid = true;
                return false;
            }
            else if (node.value === 'rgb' || node.value === 'rgba' || node.value === 'hsl' || node.value === 'hsla') {
                var color = new _dataTypes_Color__WEBPACK_IMPORTED_MODULE_1__["default"]();
                color.analyze(stem);
                if (color.valid) {
                    this.setColor(color.toResult());
                    this.valid = true;
                    return false;
                }
            }
        }
    };
    Background.prototype.setColor = function (color) {
        if (this.color)
            throw new SyntaxError('Excessive <color>');
        else
            this.color = color;
    };
    Background.prototype.setImage = function (image) {
        if (this.image)
            throw new SyntaxError('Excessive <image>');
        else
            this.image = image;
    };
    Background.prototype.setPosition = function (position) {
        if (this.position)
            throw new SyntaxError('Excessive <background-position>');
        else
            this.position = position;
    };
    Background.prototype.setRepeat = function (repeat) {
        if (this.repeat)
            throw new SyntaxError('Excessive <background-repeat>');
        else
            this.repeat = repeat;
    };
    Background.prototype.setSize = function (size) {
        if (this.size)
            throw new SyntaxError('Excessive <background-size>');
        else
            this.size = size;
    };
    Background.prototype.toString = function (complete) {
        var output = [];
        this.color && output.push(this.color.toString());
        this.image && output.push(this.image.toString());
        this.position && output.push(this.position.toString());
        this.size && output.push((this.position ? '/ ' : 'left / ') + this.size.toString());
        this.repeat && output.push(this.repeat.toString());
        this.attachment && output.push(this.attachment);
        this.origin && output.push(this.origin);
        this.clip && this.clip !== this.origin && output.push(this.clip);
        return output.join(' ');
    };
    Background.prototype._absorb = function (prop, value) {
        var subProperty = prop.slice(this._type.length + 1);
        if (prop === 'background') {
            var background = new Background();
            background.parse(value);
            this.color = background.color;
            this.image = background.image;
            this.position = background.position;
            this.size = background.size;
            this.attachment = background.attachment;
            this.repeat = background.repeat;
            this.origin = background.origin;
            this.clip = background.clip;
            this.valid = background.valid;
        }
        else if (subProperty === 'size') {
            var size = _BackgroundSize__WEBPACK_IMPORTED_MODULE_5__["default"].parse(value);
            this.size = size;
            if (size instanceof _BackgroundSize__WEBPACK_IMPORTED_MODULE_5__["default"])
                this.valid = size.valid;
        }
        else if (Object.keys(SubProperty).includes(subProperty)) { // @TODO: expand it
            var background = new Background();
            background.parse(value);
            this[subProperty] = background[subProperty];
            this.valid = background.valid;
        }
        else
            throw new TypeError("Property '" + prop + "' is inconsistent with existing type '" + this._type + "'");
        return this;
    };
    return Background;
}(_Fruit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Background);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundPositionKeyword", function() { return BackgroundPositionKeyword; });
/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _dataTypes_Length__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _dataTypes_Percentage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var BackgroundPositionKeyword;
(function (BackgroundPositionKeyword) {
    BackgroundPositionKeyword["center"] = "center";
    BackgroundPositionKeyword["left"] = "left";
    BackgroundPositionKeyword["right"] = "right";
    BackgroundPositionKeyword["top"] = "top";
    BackgroundPositionKeyword["bottom"] = "bottom";
})(BackgroundPositionKeyword || (BackgroundPositionKeyword = {}));
var BackgroundPosition = /** @class */ (function (_super) {
    __extends(BackgroundPosition, _super);
    function BackgroundPosition(value) {
        var _this = _super.call(this) || this;
        _this._type = 'background-position';
        _this.init();
        var args = arguments;
        _this.tryCatch(function () {
            if (args.length === 0)
                return;
            else if (args.length === 1)
                _this.parse(value);
            else
                throw new TypeError('Wrong type or excessive arguments');
        });
        return _this;
    }
    BackgroundPosition.prototype.init = function () {
        _super.prototype.init.call(this);
        this._state = { count: 0, lastType: undefined };
        this.x = { origin: undefined, offset: undefined };
        this.y = { origin: undefined, offset: undefined };
    };
    BackgroundPosition.prototype.analyze = function (stem) {
        _super.prototype.analyze.call(this, stem);
        // Make sure each property has a value.
        if (this.valid) {
            if (!this.x.offset)
                this.x.offset = new _dataTypes_Length__WEBPACK_IMPORTED_MODULE_1__["default"](0).toResult();
            if (!this.y.offset)
                this.y.offset = new _dataTypes_Length__WEBPACK_IMPORTED_MODULE_1__["default"](0).toResult();
        }
    };
    BackgroundPosition.prototype.analyzeInLoop = function (node) {
        if (node.type === "space" /* space */ || node.type === "comment" /* comment */)
            return true;
        else if (node.type === "word" /* word */) {
            /**
             * 4 types: center, left, top, 40%
             */
            if (node.value === BackgroundPositionKeyword.center) {
                if (this._state.count >= 2)
                    throw new SyntaxError("Excessive keyword '" + node.value + "'");
                else if (this._state.count === 0) {
                    this.x.origin = this.y.origin = node.value;
                    this._state.lastType = 'center';
                    this._state.count++;
                    return this.valid = true;
                }
                else if (this._state.count === 1) {
                    /**
                     * [o] (center) + center === (center ? center ?) === (center ? center ?)
                     * [o] (left) + center === (left ? center ?) === (left ? center ?)
                     * [o] (top) + center === (center ? top ?) === (center ? top ?)
                     * [o] (20%) + center === (left 20% ? center ?) === (left 20% ? center ?)
                     */
                    // Do nothing
                    this._state.lastType = 'center';
                    this._state.count++;
                    return this.valid = true;
                }
            }
            else if (node.value === BackgroundPositionKeyword.left || node.value === BackgroundPositionKeyword.right) {
                if (this._state.count >= 3)
                    throw new SyntaxError("Excessive keyword '" + node.value + "'");
                else if (this._state.count === 0) {
                    this.x.origin = node.value;
                    this.y.origin = BackgroundPositionKeyword.center;
                    this._state.lastType = 'x';
                    this._state.count++;
                    return this.valid = true;
                }
                else if (this._state.count === 1) {
                    /**
                     * [o] (center) + left === (left ? center ?) =x= (center ? center ?)
                     * [x] (left) + left ~~~ (xxx xxx xxx xxx) ~~~ (left ? center ?)
                     * [o] (top) + left === (left ? top ?) =x= (center ? top ?)
                     * [x] (20%) + left === (xxx xxx xxx xxx) === (left 20% ? center ?)
                     */
                    if (this.x.origin !== BackgroundPositionKeyword.center)
                        throw new SyntaxError("Duplicated keyword '" + node.value + "'");
                    this.x.origin = node.value;
                    this._state.lastType = 'x';
                    this._state.count++;
                    return this.valid = true;
                }
                else if (this._state.count === 2) {
                    /**
                     * [o] (top 40%) + left === (left ? top 40%) =x= [x](center 40% top ?)
                     *
                     * [x] (center center) + left ~~~ (center ? center ?)
                     * [x] (left center) + left ~~~ (left ? center ?)
                     * [x] (top center) + left ~~~ (center ? top ?)
                     * [x] (20% center) + left ~~~ (left 20% center ?)
                     *
                     * [x] (center left) + left ~~~ (left ? center ?)
                     * [x] (top left) + left ~~~ (left ? top ?)
                     *
                     * [x] (center top) + left ~~~ (center ? top ?)
                     * [x] (left top) + left ~~~ (left ? top ?)
                     * [x] (20% top) + left ~~~ (left 20% top ?)
                     *
                     * [x] (center 40%) + left ~~~ (center ? top 40%)
                     * [x] (left 40%) + left ~~~ (left x top 40%)
                     * [x] (20% 40%) + left ~~~ (left 20% top 40%)
                     *
                     * ------ [x] (left left) + left ~~~ (xxx xxx xxx xxx)
                     * ------ [x] (top top) + left ~~~ (xxx xxx xxx xxx)
                     * ------ [x] (20% left) + left ~~~ (xxx xxx xxx xxx)
                     */
                    if (this.x.origin === BackgroundPositionKeyword.center && this.x.offset) {
                        this.x.origin = node.value;
                        this.y.offset = this.x.offset;
                        this.x.offset = undefined;
                        this._state.lastType = 'x';
                        this._state.count++;
                        return this.valid = true;
                    }
                    else
                        throw new SyntaxError("Excessive keyword '" + node.value + "'");
                }
            }
            else if (node.value === BackgroundPositionKeyword.top || node.value === BackgroundPositionKeyword.bottom) {
                if (this._state.count >= 3)
                    throw new SyntaxError("Excessive keyword '" + node.value + "'");
                else if (this._state.count === 0) {
                    this.y.origin = node.value;
                    this.x.origin = BackgroundPositionKeyword.center;
                    this._state.lastType = 'y';
                    this._state.count++;
                    return this.valid = true;
                }
                else if (this._state.count === 1) {
                    /**
                     * [o] (center) + top === (center ? top ?) =x= (center ? center ?)
                     * [o] (left) + top === (left ? top ?) ~~~ (left ? center ?)
                     * [x] (top) + top ~~~ (xxx xxx xxx xxx) =x= (center ? top ?)
                     * [o] (20%) + top === (left 20% top ?) === (left 20% ? center ?)
                     */
                    if (this.y.origin !== BackgroundPositionKeyword.center)
                        throw new SyntaxError("Duplicated keyword '" + node.value + "'");
                    this.y.origin = node.value;
                    this._state.lastType = 'y';
                    this._state.count++;
                    return this.valid = true;
                }
                else if (this._state.count === 2) {
                    /**
                     * [o] (left 40%) + top === (left 40% top ?) =x= (left ? top 40%)
                     *
                     * [x] (center center) + top ~~~ (center ? center ?)
                     * [x] (left center) + top ~~~ (left ? center ?)
                     * [x] (top center) + top ~~~ (center ? top ?)
                     * [x] (20% center) + top ~~~ (left 20% center ?)
                     *
                     * [x] (center left) + top ~~~ (left ? center ?)
                     * [x] (top left) + top ~~~ (left ? top ?)
                     *
                     * [x] (center top) + top ~~~ (center ? top ?)
                     * [x] (left top) + top ~~~ (left ? top ?)
                     * [x] (20% top) + top ~~~ (left 20% top ?)
                     *
                     * [x] (center 40%) + top ~~~ (center ? top 40%)
                     * [x] (top 40%) + top ~~~ (center 40% top ?)
                     * [x] (20% 40%) + top ~~~ (left 20% top 40%)
                     *
                     * ------ [x] (left left) + top ~~~ (xxx xxx xxx xxx)
                     * ------ [x] (top top) + top ~~~ (xxx xxx xxx xxx)
                     * ------ [x] (20% left) + top ~~~ (xxx xxx xxx xxx)
                     */
                    if (this.x.origin !== BackgroundPositionKeyword.center && this.y.offset && !this.x.offset) {
                        this.y.origin = node.value;
                        this.x.offset = this.y.offset;
                        this.y.offset = undefined;
                        this._state.lastType = 'y';
                        this._state.count++;
                        return this.valid = true;
                    }
                    else
                        throw new SyntaxError("Excessive keyword '" + node.value + "'");
                }
            }
            else {
                var length_1 = _dataTypes_Length__WEBPACK_IMPORTED_MODULE_1__["default"].parse(node.value); // '0' is truthy
                var percentage = _dataTypes_Percentage__WEBPACK_IMPORTED_MODULE_2__["default"].parse(node.value);
                var lengthPercentage = length_1 || percentage;
                if (!lengthPercentage)
                    return undefined;
                if (this._state.count >= 4)
                    throw new SyntaxError("Excessive <length-percentage> '" + lengthPercentage + "'");
                else if (this._state.count === 0) {
                    this.x.offset = lengthPercentage;
                    this.x.origin = BackgroundPositionKeyword.left;
                    this.y.origin = BackgroundPositionKeyword.center;
                    this._state.lastType = 'length-percentage';
                    this._state.count++;
                    return this.valid = true;
                }
                else if (this._state.count === 1) {
                    /**
                     * [o] (center) + 40% === (center ? top 40%) =x= (center ? center ?)
                     * [o] (left) + 40% === (left ? top 40%) =x= (left ? center ?)
                     * [~] (top) + 40% === (center 40% top ?) =x= (center ? top ?)
                     * [o] (20%) + 40% === (left 20% top 40%) === (left 20% ? center ?)
                     */
                    if (this.y.origin !== BackgroundPositionKeyword.center) {
                        this.x.offset = lengthPercentage;
                        this._state.lastType = 'length-percentage';
                        this._state.count++;
                        this.valid = false; // This is invalid but next state maybe valid
                        return true;
                    }
                    else {
                        this.y.origin = BackgroundPositionKeyword.top;
                        this.y.offset = lengthPercentage;
                        this._state.lastType = 'length-percentage';
                        this._state.count++;
                        return this.valid = true;
                    }
                }
                else if (this._state.count === 2) {
                    /**
                     * [o] (center left) + 60% ~~~ (left ? center ?)
                     * [o] (center top) + 60% ~~~ (center ? top ?)
                     * [o] (left top) + 60% === (left ? top 60%) ~~~ (left ? top ?)
                     * [o] (top left) + 60% === (left 60% top ?) ~~~ (left ? top ?)
                     *
                     * [x] (center center) + 60% ~~~ (center ? center ?)
                     * [x] (left center) + 60% ~~~ (left ? center ?)
                     * [x] (top center) + 60% ~~~ (center ? top ?)
                     * [x] (20% center) + 60% ~~~ (left 20% center ?)
                     *
                     * [x] (center 40%) + 60% ~~~ (center ? top 40%)
                     * [x] (left 40%) + 60% ~~~ (left ? top 40%)
                     * [x] (top 40%) + 60% ~~~ (center 40% top ?)
                     * [x] (20% 40%) + 60% ~~~ (left 20% top 40%)
                     *
                     * [x] (20% top) + 60% ~~~ (left 20% top ?)
                     *
                     * ------ [x] (left left) + 60% ~~~ (xxx xxx xxx xxx)
                     * ------ [x] (top top) + 60% ~~~ (xxx xxx xxx xxx)
                     * ------ [x] (20% left) + 60% ~~~ (xxx xxx xxx xxx)
                     */
                    if (!this.x.offset && !this.y.offset && this._state.lastType !== BackgroundPositionKeyword.center) {
                        if (this._state.lastType === 'x')
                            this.x.offset = lengthPercentage;
                        else if (this._state.lastType === 'y')
                            this.y.offset = lengthPercentage;
                        else
                            throw new Error('Unexpected internal error');
                        this._state.lastType = 'length-percentage';
                        this._state.count++;
                        return this.valid = true;
                    }
                    else
                        throw new SyntaxError("Excessive <length-percentage> value '" + lengthPercentage + "'");
                }
                else if (this._state.count === 3) {
                    /**
                     * [o] (top 40% left) + 80% === (left 80% top 40%) =x= (left ? top 40%)
                     * [o] (left 40% top) + 80% === (left 40% top 80%) =x= (left 40% top ?)
                     * [x] (left top 60%) + 80% ~~~ (left ? top 60%)
                     * [x] (top left 60%) + 80% ~~~ (left 60% top ?)
                     * [x] (center left 60%) + 80% ~~~ (left 60% center ?)
                     * [x] (center top 60%) + 80% ~~~ (center ? top 60%)
                     */
                    if (this._state.lastType === 'length-percentage')
                        throw new Error("Excessive <length-percentage> value '" + lengthPercentage + "'");
                    if (!this.x.offset)
                        this.x.offset = lengthPercentage;
                    else if (!this.y.offset)
                        this.y.offset = lengthPercentage;
                    else
                        throw Error('Something wrong');
                    this._state.lastType = 'length-percentage';
                    this._state.count++;
                    return this.valid = true;
                }
            }
        }
    };
    BackgroundPosition.prototype.toString = function (complete) {
        var x = [this.x.origin];
        var y = [this.y.origin];
        if (this.x.offset.toString() !== '0')
            x.push(this.x.offset.toString());
        if (this.y.offset.toString() !== '0')
            y.push(this.y.offset.toString());
        if (complete)
            return x.concat(y).join(' ');
        if (x.length === 1 && y.length === 1) {
            // I dislike 1-value syntax
            // if (x[0] === BackgroundPositionKeyword.center)
            //     x = [];
            // if (y[0] === BackgroundPositionKeyword.center)
            //     y = [];
        }
        else {
            if (x.length === 2 && x[0] === BackgroundPositionKeyword.left && (!y[1] || y[0] === BackgroundPositionKeyword.top))
                x = x.slice(1);
            if (y.length === 2 && y[0] === BackgroundPositionKeyword.top && (!x[1] || x[0] === BackgroundPositionKeyword.left))
                y = y.slice(1);
        }
        return x.concat(y).join(' ');
    };
    return BackgroundPosition;
}(_Fruit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (BackgroundPosition);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundRepeatKeyword", function() { return BackgroundRepeatKeyword; });
/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BackgroundRepeatKeyword;
(function (BackgroundRepeatKeyword) {
    BackgroundRepeatKeyword["repeat"] = "repeat";
    BackgroundRepeatKeyword["space"] = "space";
    BackgroundRepeatKeyword["round"] = "round";
    BackgroundRepeatKeyword["no-repeat"] = "no-repeat";
})(BackgroundRepeatKeyword || (BackgroundRepeatKeyword = {}));
var partialRE = /^(?:repeat-x|repeat-y|repeat|space|round|no-repeat)$/;
var BackgroundRepeat = /** @class */ (function (_super) {
    __extends(BackgroundRepeat, _super);
    function BackgroundRepeat(x, y) {
        var _this = _super.call(this) || this;
        _this._type = 'background-repeat';
        _this.init();
        var args = arguments;
        _this.tryCatch(function () {
            if (args.length === 0)
                return;
            else if (args.length === 1 && typeof x === 'string')
                _this.parse(x);
            else if (args.length === 2) {
                _this.x = x;
                _this.y = y;
                _this.valid = true;
            }
            else
                throw new TypeError('Wrong type or excessive arguments');
        });
        return _this;
    }
    BackgroundRepeat.prototype.init = function () {
        _super.prototype.init.call(this);
        this._state = { count: 0 };
        this.x = undefined;
        this.y = undefined;
    };
    BackgroundRepeat.prototype.analyzeInLoop = function (node) {
        if (node.type === "space" /* space */ || node.type === "comment" /* comment */)
            return true;
        else if (node.type === "word" /* word */) {
            if (node.value === 'repeat-x') {
                if (this._state.count >= 1)
                    throw new SyntaxError("Excessive keyword '" + node.value + "'");
                else {
                    this.x = BackgroundRepeatKeyword.repeat;
                    this.y = BackgroundRepeatKeyword['no-repeat'];
                    this._state.count += 2;
                    return this.valid = true;
                }
            }
            else if (node.value === 'repeat-y') {
                if (this._state.count >= 1)
                    throw new SyntaxError("Excessive keyword '" + node.value + "'");
                else {
                    this.x = BackgroundRepeatKeyword['no-repeat'];
                    this.y = BackgroundRepeatKeyword.repeat;
                    this._state.count += 2;
                    return this.valid = true;
                }
            }
            else if (Object.keys(BackgroundRepeatKeyword).includes(node.value)) {
                if (this._state.count >= 2)
                    throw new SyntaxError("Excessive keyword '" + node.value + "'");
                else if (this._state.count === 0) {
                    this.x = this.y = node.value;
                    this._state.count++;
                    return this.valid = true;
                }
                else if (this._state.count === 1) {
                    this.y = node.value;
                    this._state.count++;
                    return this.valid = true;
                }
                else
                    throw new Error('Unexpected internal error about _state.count');
            }
        }
    };
    BackgroundRepeat.prototype.toString = function (complete) {
        if (!this.valid)
            return _super.prototype.toString.call(this);
        if (!complete) {
            if (this.x === this.y)
                return this.x;
            else if (this.x === BackgroundRepeatKeyword.repeat && this.y === BackgroundRepeatKeyword['no-repeat'])
                return 'repeat-x';
            else if (this.y === BackgroundRepeatKeyword.repeat && this.x === BackgroundRepeatKeyword['no-repeat'])
                return 'repeat-y';
            // else go on
        }
        return [this.x, this.y].join(' ');
    };
    return BackgroundRepeat;
}(_Fruit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (BackgroundRepeat);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _dataTypes_Length__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _dataTypes_Percentage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var BackgroundSize = /** @class */ (function (_super) {
    __extends(BackgroundSize, _super);
    function BackgroundSize(width, height) {
        var _this = _super.call(this) || this;
        _this._type = 'background-size';
        _this._type = 'background-size';
        _this.init();
        var args = arguments;
        _this.tryCatch(function () {
            if (args.length === 0)
                return;
            else if (args.length === 1 && typeof width === 'string')
                _this.parse(width);
            else if (args.length === 2) {
                _this.width = width;
                _this.height = height;
                _this.valid = true;
            }
            else
                throw new TypeError('Wrong type or excessive arguments');
        });
        return _this;
    }
    BackgroundSize.prototype.init = function () {
        _super.prototype.init.call(this);
        this._state = { count: 0 };
        this.width = undefined;
        this.height = undefined;
    };
    BackgroundSize.prototype.toResult = function () {
        if (!this.valid)
            return _super.prototype.toResult.call(this);
        if (this.width === 'cover' || this.width === 'contain')
            return this.width;
        else
            return _super.prototype.toResult.call(this);
    };
    BackgroundSize.prototype.analyzeInLoop = function (node) {
        if (node.type === "space" /* space */ || node.type === "comment" /* comment */)
            return true;
        else if (node.type === "word" /* word */) {
            if (node.value === 'cover' || node.value === 'contain') {
                if (this._state.count >= 1)
                    throw new SyntaxError("Excessive keyword '" + node.value + "'");
                else {
                    this.width = this.height = node.value;
                    this._state.count += 2;
                    return this.valid = true;
                }
            }
            else {
                var length_1 = _dataTypes_Length__WEBPACK_IMPORTED_MODULE_1__["default"].parse(node.value); // '0' is truthy
                var percentage = _dataTypes_Percentage__WEBPACK_IMPORTED_MODULE_2__["default"].parse(node.value);
                var size = void 0;
                if (length_1 || percentage || node.value === 'auto')
                    size = length_1 || percentage || node.value;
                else
                    return undefined;
                if (this._state.count >= 2)
                    throw new SyntaxError("Excessive value '" + size + "'");
                else if (this._state.count === 0) {
                    this.width = size;
                    this.height = 'auto';
                    this._state.count++;
                    return this.valid = true;
                }
                else if (this._state.count === 1) {
                    this.height = size;
                    this._state.count++;
                    return this.valid = true;
                }
                else
                    throw new Error('Unexpected internal error about _state.count');
            }
        }
    };
    BackgroundSize.prototype.toString = function (complete) {
        if (!this.valid)
            return _super.prototype.toString.call(this);
        if (this.width === 'cover' || this.width === 'contain')
            return this.width;
        if (!complete) {
            if (this.height === 'auto')
                return this.width.toString();
        }
        return [this.width, this.height].join(' ');
    };
    return BackgroundSize;
}(_Fruit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (BackgroundSize);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _dataTypes_Length__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _dataTypes_Percentage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



;
var Margin = /** @class */ (function (_super) {
    __extends(Margin, _super);
    function Margin(value) {
        var _this = _super.call(this) || this;
        _this._type = 'margin';
        _this._parseDepth = 0 /* shorthand */;
        _this.init();
        var args = arguments;
        _this.tryCatch(function () {
            if (args.length === 0)
                return;
            else if (args.length === 1)
                _this.parse(value);
            else
                throw new TypeError('Wrong type or excessive arguments');
        });
        return _this;
    }
    Margin.prototype.init = function () {
        _super.prototype.init.call(this);
        this._state = { count: 0 };
        this.top = undefined;
        this.right = undefined;
        this.bottom = undefined;
        this.left = undefined;
    };
    Margin.prototype.analyzeInLoop = function (node) {
        if (node.type === "space" /* space */ || node.type === "comment" /* comment */)
            return true;
        else if (node.type === "word" /* word */) {
            var length_1 = _dataTypes_Length__WEBPACK_IMPORTED_MODULE_1__["default"].parse(node.value); // '0' is truthy
            var percentage = _dataTypes_Percentage__WEBPACK_IMPORTED_MODULE_2__["default"].parse(node.value);
            var value = void 0;
            if (length_1 || percentage || node.value === 'auto')
                value = length_1 || percentage || node.value;
            else
                return undefined;
            if (this._state.count >= 4)
                throw new SyntaxError("Excessive value '" + value + "'");
            else if (this._state.count === 0)
                this.top = this.right = this.bottom = this.left = value;
            else if (this._state.count === 1)
                this.right = this.left = value;
            else if (this._state.count === 2)
                this.bottom = value;
            else if (this._state.count === 3)
                this.left = value;
            this._state.count++;
            return this.valid = true;
        }
    };
    Margin.prototype.toString = function (complete) {
        if (!this.valid)
            return _super.prototype.toString.call(this);
        if (!complete) {
            if (this.top === this.right && this.right === this.bottom && this.bottom === this.left)
                return this.top.toString();
            else if (this.left === this.right && this.top === this.bottom)
                return [this.top, this.left].join(' ');
            else if (this.left === this.right)
                return [this.top, this.left, this.bottom].join(' ');
        }
        return [this.top, this.right, this.bottom, this.left].join(' ');
    };
    return Margin;
}(_Fruit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Margin);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _dataTypes_Length__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _dataTypes_Percentage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



;
var Padding = /** @class */ (function (_super) {
    __extends(Padding, _super);
    function Padding(value) {
        var _this = _super.call(this) || this;
        _this._type = 'padding';
        _this._parseDepth = 0 /* shorthand */;
        _this.init();
        var args = arguments;
        _this.tryCatch(function () {
            if (args.length === 0)
                return;
            else if (args.length === 1)
                _this.parse(value);
            else
                throw new TypeError('Wrong type or excessive arguments');
        });
        return _this;
    }
    Padding.prototype.init = function () {
        _super.prototype.init.call(this);
        this._state = { count: 0 };
        this.top = undefined;
        this.right = undefined;
        this.bottom = undefined;
        this.left = undefined;
    };
    Padding.prototype.analyzeInLoop = function (node) {
        if (node.type === "space" /* space */ || node.type === "comment" /* comment */)
            return true;
        else if (node.type === "word" /* word */) {
            var length_1 = _dataTypes_Length__WEBPACK_IMPORTED_MODULE_1__["default"].parse(node.value); // '0' is truthy
            var percentage = _dataTypes_Percentage__WEBPACK_IMPORTED_MODULE_2__["default"].parse(node.value);
            var value = void 0;
            if (length_1 || percentage)
                value = length_1 || percentage;
            else
                return undefined;
            if (String(value)[0] === '-')
                throw new RangeError("Negative value '" + value + "' is invalid");
            if (this._state.count >= 4)
                throw new SyntaxError("Excessive value '" + value + "'");
            else if (this._state.count === 0)
                this.top = this.right = this.bottom = this.left = value;
            else if (this._state.count === 1)
                this.right = this.left = value;
            else if (this._state.count === 2)
                this.bottom = value;
            else if (this._state.count === 3)
                this.left = value;
            this._state.count++;
            return this.valid = true;
        }
    };
    Padding.prototype.toString = function (complete) {
        if (!this.valid)
            return _super.prototype.toString.call(this);
        if (!complete) {
            if (this.top === this.right && this.right === this.bottom && this.bottom === this.left)
                return this.top.toString();
            else if (this.left === this.right && this.top === this.bottom)
                return [this.top, this.left].join(' ');
            else if (this.left === this.right)
                return [this.top, this.left, this.bottom].join(' ');
        }
        return [this.top, this.right, this.bottom, this.left].join(' ');
    };
    return Padding;
}(_Fruit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Padding);


/***/ })
/******/ ]);
});