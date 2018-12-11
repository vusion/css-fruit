(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("postcss-value-parser"));
	else if(typeof define === 'function' && define.amd)
		define(["postcss-value-parser"], factory);
	else if(typeof exports === 'object')
		exports["cssFruit"] = factory(require("postcss-value-parser"));
	else
		root["cssFruit"] = factory(root["postcss-value-parser"]);
})(global, function(__WEBPACK_EXTERNAL_MODULE__2__) {
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
/* harmony import */ var _src_properties_Background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return _src_properties_Background__WEBPACK_IMPORTED_MODULE_1__["default"]; });

// import Parser from './src/Parser';
// import Padding from './src/Padding';
// import Margin from './src/Margin';
// import Background from './src/Background';


var Kinds = {
    background: _src_properties_Background__WEBPACK_IMPORTED_MODULE_1__["default"],
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
    function Fruit(value) {
        this._type = 'fruit';
        this._inherited = false;
        this._parseDeepLevelBoundary = 3 /* virtualLonghand */;
        this.valid = false;
        if (arguments.length === 1 && value)
            this.parse(value);
    }
    Fruit.prototype.init = function () {
        this.valid = false;
    };
    Fruit.prototype.parse = function (value) {
        this.raw = value;
        value = value.trim();
        var stem = new Stem(value);
        this.analyze(stem);
        if (stem.head()) {
            this.valid = false;
            throw SyntaxError('Nodes of value cannot be fully analyzed: ' + value);
        }
        return this.toResult();
    };
    Fruit.prototype.toResult = function () {
        if (!this.valid)
            return undefined;
        if (this.options.parseDeepLevel >= this._parseDeepLevelBoundary || this.options.forceParsing[this._type])
            return this;
        else
            return this.toString();
    };
    Fruit.prototype.analyze = function (stem) {
        var node;
        this.init();
        while (node = stem.head()) {
            var control = void 0;
            try {
                control = this.analyzeInLoop(node, stem);
            }
            catch (e) {
                this.valid = false;
                throw e;
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
        console.log(this.prototype);
        Object.assign(this.prototype.options.forceParsing, options.forceParsing);
        Object.assign(this.prototype.options, options);
    };
    Fruit.parse = function (value) {
        try {
            var fruit = new this();
            return fruit.parse(value);
        }
        catch (e) { }
    };
    // static test(value: string): boolean {}
    Fruit.validate = function (value) {
        return this.parse(value) !== undefined;
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
    parseDeepLevel: 3 /* virtualLonghand */,
    forceParsing: {},
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundAttachmentRE", function() { return backgroundAttachmentRE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxRE", function() { return boxRE; });
/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _dataTypes_Color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _dataTypes_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _BackgroundPosition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _BackgroundRepeat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _BackgroundSize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
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
    function Background() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._type = 'background';
        _this._inherited = false;
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
                    throw new SyntaxError('Excessive background-attachment');
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
                    throw new SyntaxError('Excessive background-clip');
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
                            throw new SyntaxError('Invalid background-size');
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
                throw new SyntaxError('Unclosed function: ' + node.value);
            if (node.value === 'url') {
                var image = new _dataTypes_Image__WEBPACK_IMPORTED_MODULE_2__["default"]();
                image.analyze(stem);
                if (!image.valid)
                    throw new SyntaxError('Invalid image');
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
                }
            }
        }
    };
    Background.prototype.setColor = function (color) {
        if (this.color)
            throw new SyntaxError('Excessive color');
        else
            this.color = color;
    };
    Background.prototype.setImage = function (image) {
        if (this.image)
            throw new SyntaxError('Excessive image');
        else
            this.image = image;
    };
    Background.prototype.setPosition = function (position) {
        if (this.position)
            throw new SyntaxError('Excessive background-position');
        else
            this.position = position;
    };
    Background.prototype.setRepeat = function (repeat) {
        if (this.repeat)
            throw new SyntaxError('Excessive background-repeat');
        else
            this.repeat = repeat;
    };
    Background.prototype.setSize = function (size) {
        if (this.size)
            throw new SyntaxError('Excessive background-size');
        else
            this.size = size;
    };
    Background.prototype.toString = function (complete) {
        var output = [];
        this.color && output.push(this.color.toString());
        this.image && output.push(this.image.toString());
        this.position && output.push(this.position.toString());
        this.size && output.push((this.position ? '/ ' : 'left /') + this.size.toString());
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
            throw new Error('Incompatible property: ' + prop);
        return this;
    };
    return Background;
}(_Fruit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Background);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namedColorRE", function() { return namedColorRE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexColorRE", function() { return hexColorRE; });
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

var ValueParser = __webpack_require__(2);
;
var namedColorRE = /^(?:black|silver|gray|white|maroon|red|purple|fuchsia|green|lime|olive|yellow|navy|blue|teal|aqua|orange|aliceblue|antiquewhite|aquamarine|azure|beige|bisque|blanchedalmond|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|aqua|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|gainsboro|ghostwhite|gold|goldenrod|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|limegreen|linen|magenta|fuchsia|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olivedrab|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|thistle|tomato|turquoise|violet|wheat|whitesmoke|yellowgreen|rebeccapurple)$/i;
var hexColorRE = /^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
var Color = /** @class */ (function (_super) {
    __extends(Color, _super);
    function Color(r, g, b, a) {
        if (r === void 0) { r = 0; }
        if (g === void 0) { g = 0; }
        if (b === void 0) { b = 0; }
        if (a === void 0) { a = 1; }
        var _this = _super.call(this) || this;
        _this._type = 'color';
        _this._parseDeepLevelBoundary = 4 /* dataTypes */;
        _this.r = r;
        _this.g = g;
        _this.b = b;
        _this.a = a;
        // 将hsv也缓存下来好了，省事
        /* eslint-disable new-cap */
        Object.assign(_this, Color.RGB2HSV(_this.r, _this.g, _this.b));
        return _this;
    }
    Color.prototype.init = function () {
        _super.prototype.init.call(this);
        this.value = undefined;
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.a = 0;
        this.h = 0;
        this.s = 0;
        this.v = 0;
    };
    Color.prototype.analyzeInLoop = function (node, stem) {
        if (node.type === "space" /* space */ || node.type === "comment" /* comment */)
            return true;
        else if (node.type === "word" /* word */) {
            if (node.value === 'currentColor') {
                if (this.value)
                    throw new SyntaxError('Excessive value');
                this.value = 'currentColor';
                return this.valid = true;
            }
            else if (namedColorRE.test(node.value)) {
                if (this.value)
                    throw new SyntaxError('Excessive value');
                this.value = node.value;
                // @TODO parse named value;
                return this.valid = true;
            }
            else if (hexColorRE.test(node.value)) {
                if (this.value)
                    throw new SyntaxError('Excessive value');
                this.value = node.value;
                // @TODO parse named value;
                return this.valid = true;
            }
        }
        else if (node.type === "function" /* function */) {
            if (node.unclosed)
                throw new SyntaxError('Unclosed function: ' + node.value);
            if (node.value === 'rgb' || node.value === 'rgba' || node.value === 'hsl' || node.value === 'hsla') {
                if (this.value)
                    throw new SyntaxError('Excessive value');
                this.value = ValueParser.stringify(node);
                return this.valid = true;
            }
        }
    };
    Color.prototype.toString = function () {
        if (!this.valid)
            return _super.prototype.toString.call(this);
        return this.value;
    };
    Color.prototype.toTuple = function () {
        return [this.r, this.g, this.b, this.a];
    };
    Color.prototype.toHEX = function (alpha) {
        var fix = function (num) { return (num.length === 1 ? '0' + num : num).toUpperCase(); };
        return '#' + fix(this.r.toString(16)) + fix(this.g.toString(16)) + fix(this.b.toString(16));
    };
    Color.prototype.getRGB = function () {
        return { r: this.r, g: this.g, b: this.b };
    };
    Color.prototype.setRGB = function (r, g, b) {
        Object.assign(this, { r: r, g: g, b: b }, Color.RGB2HSV(r, g, b));
    };
    Color.prototype.toRGB = function () {
        return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    };
    Color.prototype.toRGBA = function () {
        return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.a + ")";
    };
    Color.prototype.getHSV = function () {
        /* eslint-disable new-cap */
        return { h: this.h, s: this.s, v: this.v };
    };
    // toHSV()
    // CSS不支持，先不做了。其实就两句话的事
    Color.prototype.setHSV = function (h, s, v) {
        Object.assign(this, { h: h, s: s, v: v }, Color.HSV2RGB(h, s, v));
    };
    Color.prototype.getHSL = function () {
        /* eslint-disable new-cap */
        return Color.HSV2HSL(this.h, this.s, this.v);
    };
    Color.prototype.setHSL = function (h, s, l) {
        //
    };
    Color.prototype.toHSL = function () {
        var hsl = this.getHSL();
        return "hsl(" + hsl.h + ", " + Math.round(hsl.s * 100) + "%, " + Math.round(hsl.l * 100) + "%)";
    };
    Color.prototype.toHSLA = function () {
        var hsl = this.getHSL();
        return "hsl(" + hsl.h + ", " + Math.round(hsl.s * 100) + "%, " + Math.round(hsl.l * 100) + "%, " + this.a + ")";
    };
    Color.fromHEX = function (value) {
        value = value.trim().slice(1);
        if (value.length !== 6 && value.length !== 3)
            throw new SyntaxError('Unexpected length of hex number');
        else if (value.length === 3)
            value = "" + value[0] + value[0] + value[1] + value[1] + value[2] + value[2];
        return new Color(parseInt(value.slice(0, 2), 16), parseInt(value.slice(2, 4), 16), parseInt(value.slice(4, 6), 16));
    };
    Color.fromRGB = function (value) {
        value = value.trim().slice(4, -1);
        var arr = value.split(',').map(function (num) { return +num; });
        if (arr.length !== 4)
            throw new SyntaxError('Unexpected params of rgba function');
        return new (Color.bind.apply(Color, [void 0].concat(arr)))();
    };
    Color.fromRGBA = function (value) {
        value = value.trim().slice(5, -1);
        var arr = value.split(',').map(function (num) { return +num; });
        if (arr.length !== 4)
            throw new SyntaxError('Unexpected params of rgba function');
        return new (Color.bind.apply(Color, [void 0].concat(arr)))();
    };
    /** @TODO: fromHSL */
    Color.parse = function (value) {
        value = value.trim();
        if (value[0] === '#')
            return this.fromHEX(value);
        else if (value.startsWith('rgba('))
            return this.fromRGBA(value);
        else if (value.startsWith('rgb('))
            return this.fromRGB(value);
        // else if (value.startsWith('hsla('))
        //     return this.fromHSLA(value);
        // else if (value.startsWith('hsl('))
        //     return this.fromHSL(value);
        // else
        // return this.fromNAME(value);
    };
    /**
     * Converts an RGB color value to HSV. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
     *
     * @param   Number  r       The red, [0, 255]
     * @param   Number  g       The green, [0, 255]
     * @param   Number  b       The blue, [0, 255]
     * @return  Object          The HSV representation
     */
    Color.RGB2HSV = function (r, g, b) {
        r = r / 255;
        g = g / 255;
        b = b / 255;
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var h;
        var v = max;
        var d = max - min;
        var s = max === 0 ? 0 : d / max;
        if (max === min)
            h = 0; // achromatic
        else {
            if (max === r)
                h = (g - b) / d + (g < b ? 6 : 0);
            else if (max === g)
                h = (b - r) / d + 2;
            else if (max === b)
                h = (r - g) / d + 4;
            h /= 6;
        }
        return { h: h * 360 >> 0, s: s * 100 >> 0, v: v * 100 >> 0 };
    };
    /**
     * Converts an HSV color value to RGB. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
     * returns r, g, and b in the set [0, 255].
     *
     * @param   Number  h       The hue, [0, 360]
     * @param   Number  s       The saturation, [0, 100]
     * @param   Number  v       The value, [0, 100]
     * @return  Object          The RGB representation
     */
    Color.HSV2RGB = function (h, s, v) {
        h = h / 360;
        s = s / 100;
        v = v / 100;
        var r, g, b;
        var i = Math.floor(h * 6);
        var f = h * 6 - i;
        var p = v * (1 - s);
        var q = v * (1 - f * s);
        var t = v * (1 - (1 - f) * s);
        /* eslint-disable chai-friendly/no-unused-expressions, no-sequences */
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
        return { r: r * 255 >> 0, g: g * 255 >> 0, b: b * 255 >> 0 };
    };
    Color.HSV2HSL = function (h, s, v) {
        return {
            h: h,
            s: (s * v / ((h = (2 - s) * v) < 1 ? h : 2 - h)) >> 0 || 0,
            l: h / 2 >> 0,
        };
    };
    Color.HSL2HSV = function (h, s, l) {
        s = s / 100;
        l = l / 100;
        var smin = s;
        var lmin = Math.max(l, 0.01);
        l *= 2;
        s *= (l <= 1) ? l : 2 - l;
        smin *= lmin <= 1 ? lmin : 2 - lmin;
        var v = (l + s) / 2;
        var sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);
        return {
            h: h,
            s: sv * 100 >> 0,
            v: v * 100 >> 0,
        };
    };
    return Color;
}(_Fruit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Color);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _URL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
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
    function Image() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._type = 'image';
        _this._parseDeepLevelBoundary = 4 /* dataTypes */;
        return _this;
    }
    // constructor(value?: string);
    // constructor(width: string, height?: string) {
    //     super(width);
    //     if (arguments.length > 1) {
    //         this.width = width;
    //         this.height = height;
    //     }
    // }
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
                throw new SyntaxError('Unclosed function: ' + node.value);
            if (node.value === 'url') {
                if (this.value)
                    throw new SyntaxError('Excessive values');
                var url = new _URL__WEBPACK_IMPORTED_MODULE_1__["default"]();
                url.analyze(stem);
                if (!url.valid)
                    throw new SyntaxError('Invalid url: ' + node.value);
                this.value = url.toResult();
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
    function URL() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._type = 'url';
        _this._parseDeepLevelBoundary = 4 /* dataTypes */;
        return _this;
    }
    URL.prototype.init = function () {
        _super.prototype.init.call(this);
        // this.quote = "'";
        this.url = undefined;
        this.path = undefined;
        this.query = {};
        this.hash = undefined;
    };
    URL.prototype.analyzeInLoop = function (node) {
        var _this = this;
        if (node.type === "space" /* space */ || node.type === "comment" /* comment */)
            return true;
        else if (node.type === "function" /* function */) {
            if (node.unclosed)
                throw new SyntaxError('Unclosed function: ' + node.value);
            if (node.value === 'url') {
                if (this.url)
                    throw new SyntaxError('Duplicated url functions');
                var url = '';
                if (node.nodes.length > 1)
                    throw new SyntaxError('Invalid url');
                else if (node.nodes.length === 1) {
                    var subNode = node.nodes[0];
                    if (subNode.unclosed)
                        throw new SyntaxError('Unclosed quote: ' + subNode.value);
                    else
                        url = subNode.value;
                    // @discuss: keep quote?
                } // else valid
                this.url = url;
                var found = urlRE.exec(url);
                this.path = found[1] ? decodeURIComponent(found[1]) : '';
                if (found[2]) {
                    var parts = found[2].slice(1).split('&');
                    parts.forEach(function (part) {
                        var pair = part.split('=');
                        if (pair[0])
                            _this.query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]) || '';
                    });
                }
                this.hash = found[3] ? decodeURIComponent(found[3].slice(1)) : '';
                return this.valid = true;
            }
        }
    };
    URL.prototype.toString = function () {
        var _this = this;
        if (!this.valid)
            return _super.prototype.toString.call(this);
        var quote = "'";
        var query = Object.keys(this.query).map(function (key) { return encodeURIComponent(key) + "=" + encodeURIComponent(_this.query[key]); }).join('&');
        return "url(" + quote + encodeURIComponent(this.path) + (query ? '?' + query : '') + (this.hash ? '#' + encodeURIComponent(this.hash) : '') + quote + ")";
    };
    return URL;
}(_Fruit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (URL);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundPositionKeyword", function() { return BackgroundPositionKeyword; });
/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _dataTypes_Length__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _dataTypes_Percentage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
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
    function BackgroundPosition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._type = 'background-position';
        return _this;
    }
    BackgroundPosition.prototype.init = function () {
        _super.prototype.init.call(this);
        this._state = { count: 0, lastType: undefined };
        this.x = { origin: undefined, offset: undefined };
        this.y = { origin: undefined, offset: undefined };
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
                    throw new SyntaxError('Excessive keyword');
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
                    throw new SyntaxError('Excessive keyword');
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
                        throw new SyntaxError('Duplicated keywords: ' + node.value);
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
                        throw new SyntaxError('Excessive keyword: ' + node.value);
                }
            }
            else if (node.value === BackgroundPositionKeyword.top || node.value === BackgroundPositionKeyword.bottom) {
                if (this._state.count >= 3)
                    throw new SyntaxError('Excessive keyword');
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
                        throw new SyntaxError('Duplicated keywords: ' + node.value);
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
                        throw new SyntaxError('Excessive keyword: ' + node.value);
                }
            }
            else {
                var length_1 = _dataTypes_Length__WEBPACK_IMPORTED_MODULE_1__["default"].parse(node.value); // '0' is truthy
                var percentage = _dataTypes_Percentage__WEBPACK_IMPORTED_MODULE_2__["default"].parse(node.value);
                var lengthPercentage = length_1 || percentage;
                if (!lengthPercentage)
                    return undefined;
                if (this._state.count >= 4)
                    throw new SyntaxError('Excessive <length-percentage> value: ' + lengthPercentage);
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
                            throw new Error('xxx');
                        this._state.lastType = 'length-percentage';
                        this._state.count++;
                        return this.valid = true;
                    }
                    else
                        throw new SyntaxError('Excessive <length-percentage> value: ' + lengthPercentage);
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
                        throw new Error('Excessive <length-percentage> value: ' + lengthPercentage);
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
        if (this.x.offset)
            x.push(this.x.offset.toString());
        if (this.y.offset)
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
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


var experimentalRE = new RegExp("^(" + String(_Number__WEBPACK_IMPORTED_MODULE_1__["numberRE"]).slice(2, -3) + ")(cap|ch|em|ex|ic|lh|rem|rlh|vh|vw|vi|vb|vmin|vmax|px|cm|mm|Q|in|pc|pt)?$", 'i');
var partialRE = new RegExp("^(" + String(_Number__WEBPACK_IMPORTED_MODULE_1__["numberRE"]).slice(2, -3) + ")(ch|em|ex|rem|vh|vw|vmin|vmax|px|cm|mm|in|pc|pt)?$", 'i');
var Length = /** @class */ (function (_super) {
    __extends(Length, _super);
    function Length() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._type = 'length';
        _this._parseDeepLevelBoundary = 4 /* dataTypes */;
        return _this;
    }
    Length.prototype.init = function () {
        _super.prototype.init.call(this);
        this.number = undefined;
        this.unit = undefined;
    };
    Length.prototype.parse = function (value) {
        value = value.trim();
        this.init();
        var found = partialRE.exec(value);
        if (!found)
            throw new SyntaxError('Invalid length');
        if (+found[1] !== 0 && !found[2])
            throw new SyntaxError('A unit should be after the non-zero number');
        this.number = +found[1];
        this.unit = found[2] || '';
        this.valid = true;
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberRE", function() { return numberRE; });
var numberRE = /^[+-]?(?:\.?\d+|\d+\.\d+)(?:e[+-]?\d+)?$/i;
/* harmony default export */ __webpack_exports__["default"] = (Number);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
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
    function Percentage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._type = 'percentage';
        _this._parseDeepLevelBoundary = 4 /* dataTypes */;
        return _this;
    }
    Percentage.prototype.init = function () {
        _super.prototype.init.call(this);
        this.number = undefined;
    };
    Percentage.prototype.parse = function (value) {
        value = value.trim();
        this.init();
        var found = partialRE.exec(value);
        if (!found)
            throw new SyntaxError('Invalid percentage');
        // if (+found[1] !== 0 && !found[2])
        //     throw new SyntaxError('"%" should be after the non-zero number');
        this.number = +found[1];
        this.valid = true;
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
/* 11 */
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
        var _this = _super.call(this, x) || this;
        _this._type = 'background-repeat';
        if (arguments.length > 1) {
            _this.x = x;
            _this.y = y;
        }
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
                    throw new SyntaxError('Excessive keyword');
                else {
                    this.x = BackgroundRepeatKeyword.repeat;
                    this.y = BackgroundRepeatKeyword['no-repeat'];
                    this._state.count += 2;
                    return this.valid = true;
                }
            }
            else if (node.value === 'repeat-y') {
                if (this._state.count >= 1)
                    throw new SyntaxError('Excessive keyword');
                else {
                    this.x = BackgroundRepeatKeyword['no-repeat'];
                    this.y = BackgroundRepeatKeyword.repeat;
                    this._state.count += 2;
                    return this.valid = true;
                }
            }
            else if (Object.keys(BackgroundRepeatKeyword).includes(node.value)) {
                if (this._state.count >= 2)
                    throw new SyntaxError('Excessive keyword');
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
                    throw new Error('State inside problem!');
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _dataTypes_Length__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _dataTypes_Percentage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
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
        var _this = _super.call(this, width) || this;
        _this._type = 'background-size';
        if (arguments.length > 1) {
            _this.width = width;
            _this.height = height;
        }
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
                    throw new SyntaxError('Excessive keyword');
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
                    throw new SyntaxError('Excessive <size> value: ' + size);
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
                    throw new Error('State Problem!');
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


/***/ })
/******/ ]);
});