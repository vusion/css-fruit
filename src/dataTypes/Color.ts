import Fruit, { ValueNode, ValueNodeType, ParsedDepth, Stem } from '../Fruit';
const ValueParser = require('postcss-value-parser');
import Percentage from './Percentage';
import NamedColor from './NamedColor';

export const hexColorRE = /^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i;

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
function RGB2HSL(r: number, g: number, b: number) {
    r /= 255, g /= 255, b /= 255;

    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
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
function HSL2RGB(h: number, s: number, l: number) {
    h /= 360, s /= 100, l /= 100;
    let r, g, b;

    function HUE2RGB(p: number, q: number, t: number) {
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
    } else {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;

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
function RGB2HSV(r: number, g: number, b: number) {
    r /= 255, g /= 255, b /= 255;

    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, v = max;

    const d = max - min;
    s = max === 0 ? 0 : d / max;

    if (max === min) {
        h = 0; // achromatic
    } else {
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
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
function HSV2RGB(h: number, s: number, v: number) {
    h /= 360, s /= 100, v /= 100;
    let r, g, b;

    const i = Math.floor(h * 6);
    const f = h * 6 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);

    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }

    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}

export default class Color extends Fruit {
    valid: boolean = false;
    private _value: string;
    private _r: number;
    private _g: number;
    private _b: number;
    private _a: number;

    // get valid() {
    //     return this.valid;
    // }

    get r() { return this._r; }
    set r(r: number) {
        if (r < 0 || r > 255)
            throw new RangeError('Red is a number between 0 and 255');
        this._r = Math.round(r);
    }

    get g() { return this._g; }
    set g(g: number) {
        if (g < 0 || g > 255)
            throw new RangeError('Green is a number between 0 and 255');
        this._g = Math.round(g);
    }

    get b() { return this._b; }
    set b(b: number) {
        if (b < 0 || b > 255)
            throw new RangeError('Blue is a number between 0 and 255');
        this._b = Math.round(b);
    }

    get a() { return this._a; }
    set a(a: number) {
        if (a < 0 || a > 1)
            throw new RangeError('Alpha is a number between 0 and 1');
        this._a = a;
    }

    constructor();
    constructor(value: string);
    constructor(r: number, g: number, b: number);
    constructor(r: number, g: number, b: number, a: number);
    constructor(r?: string | number, g?: number, b?: number, a?: number) {
        super();
        this._type = 'color';
        this._parseDepth = ParsedDepth.dataType;
        this.init();

        const args = arguments;
        this.tryCatch(() => {
            if (args.length === 0)
                return;
            else if (args.length === 1 && typeof r === 'string') {
                this.parse(r);
            } else if (args.length === 3) {
                if (typeof r === 'number' && typeof g === 'number' && typeof b === 'number') {
                    this.r = r;
                    this.g = g;
                    this.b = b;
                    this.valid = true;
                } else
                    throw new TypeError('Wrong type of arguments');
            } else if (args.length === 4) {
                if (typeof r === 'number' && typeof g === 'number' && typeof b === 'number' && typeof a === 'number') {
                    this.r = r;
                    this.g = g;
                    this.b = b;
                    this.a = a;
                    this.valid = true;
                } else
                    throw new TypeError('Wrong type of arguments');
            } else
                throw new TypeError('Wrong type or excessive arguments');
        });
    }

    init() {
        super.init();
        this._value = undefined;
        this._r = 0;
        this._g = 0;
        this._b = 0;
        this._a = 1;
        this.valid = true;
        // @TODO
    }

    protected analyzeInLoop(node: ValueNode, stem: Stem): boolean {
        if (node.type === ValueNodeType.space || node.type === ValueNodeType.comment)
            return true;
        else if (node.type === ValueNodeType.word) {
            if (node.value === 'currentColor') {
                if (this._value)
                    throw new SyntaxError(`Excessive value '${node.value}'`);
                this._value = 'currentColor';

                return this.valid = true;
            } else if (node.value === 'transparent') {
                this._r = 0;
                this._g = 0;
                this._b = 0;
                this._a = 0;
                return this.valid = true;
            } else if (NamedColor[node.value]) {
                if (this._value)
                    throw new SyntaxError(`Excessive value '${node.value}'`);
                // this._value = node.value;

                const hex = NamedColor[node.value];
                const color = Color.fromHEX(hex);
                this._r = color._r;
                this._g = color._g;
                this._b = color._b;
                this._a = color._a;
                return this.valid = true;
            } else if (hexColorRE.test(node.value)) {
                if (this._value)
                    throw new SyntaxError(`Excessive value '${node.value}'`);
                // this._value = node.value;

                this.setHEX(node.value);
                return this.valid = true;
            }
        } else if (node.type === ValueNodeType.function) {
            if (node.unclosed)
                throw new SyntaxError(`Unclosed function '${node.value}'`);

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
                    throw new SyntaxError(`Excessive value '${node.value}'`);



                this._value = ValueParser.stringify(node);
                return this.valid = true;
            }
        }
    }

    toString(): string {
        if (!this.valid)
            return super.toString();

        if (this._value)
            return this._value;
        else if (this._a === 1)
            return this.toHEX();
        else
            return this.toRGBA();
    }

    /**
     * To a Tuple (Array)
     * @param alpha - Show alpha
     */
    toTuple(alpha?: boolean): [number, number, number] | [number, number, number, number] {
        if (alpha)
            return [this._r, this._g, this._b, this._a];
        else
            return [this._r, this._g, this._b];
    }

    /**
     * Set color values by Hexadecimal
     * @param hex - Hexadecimal number
     */
    setHEX(hex: string) {
        hex = hex.slice(1);
        if (hex.length === 6 || hex.length === 8) {}
        else if (hex.length === 3)
            hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
        else if (hex.length === 4)
            hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
        else
            throw new SyntaxError(`Unexpected length of hex number '${hex}'`);

        this.r = parseInt(hex.slice(0, 2), 16);
        this.g = parseInt(hex.slice(2, 4), 16);
        this.b = parseInt(hex.slice(4, 6), 16);
        this.a = parseInt(hex.slice(6, 8) || 'ff', 16) / 255;
    }

    /**
     * To a Hexadecimal string
     * @param alpha - Show alpha
     */
    toHEX(alpha?: boolean): string {
        const fix = (num: string) => num.length === 1 ? '0' + num : num;

        if (alpha)
            return '#' + fix(this.r.toString(16)) + fix(this.g.toString(16)) + fix(this.b.toString(16)) + fix((this.a * 255).toString(16));
        else
            return '#' + fix(this.r.toString(16)) + fix(this.g.toString(16)) + fix(this.b.toString(16));
    }

    /**
     * Get RGB values of the color
     */
    getRGB() {
        return { r: this._r, g: this._g, b: this._b };
    }

    /**
     * Set color values by RGB representation
     * @param r - Red, in the set [0, 255]
     * @param g - Green, in the set [0, 255]
     * @param b - Blue, in the set [0, 255]
     */
    setRGB(r: number, g: number, b: number) {
        Object.assign(this, { r, g, b });
    }

    /**
     * To a RGB function string
     * @param percentage - Represent in percentage or not
     */
    toRGB(percentage?: boolean): string {
        if (percentage)
            return `rgb(${Math.round(this._r / 255 * 100)}%, ${Math.round(this._g / 255 * 100)}%, ${Math.round(this._b / 255 * 100)}%)`
        else
            return `rgb(${this._r}, ${this._g}, ${this._b})`;
    }

    /**
     * To a RGBA function string
     * @param percentage - Represent in percentage or not
     */
    toRGBA(percentage?: boolean): string {
        if (percentage)
            return `rgba(${Math.round(this._r / 255 * 100)}%, ${Math.round(this._g / 255 * 100)}%, ${Math.round(this._b / 255 * 100)}%, ${Math.round(this._a * 100)}%)`
        else
            return `rgba(${this._r}, ${this._g}, ${this._b}, ${this._a})`;
    }

    /**
     * Get HSV values of the color
     */
    getHSV() {
        return RGB2HSV(this._r, this._g, this._b);
    }

    /**
     * Set color values by HSV representation
     * @param h - Hue, in the set [0, 360]
     * @param s - Saturation, in the set [0, 100]
     * @param v - Value, in the set [0, 100]
     */
    setHSV(h: number, s: number, v: number) {
        Object.assign(this, { h, s, v }, HSV2RGB(h, s, v));
    }

    // CSS不支持，先不做了。其实就两句话的事
    // toHSV()

    /**
     * Get HSL values of the color
     */
    getHSL() {
        return RGB2HSL(this._r, this._g, this._b);
    }

    /**
     * Create a new color from HSL representation
     * @param h - Hue, in the set [0, 360]
     * @param s - Saturation, in the set [0, 100]
     * @param l - Lightness, in the set [0, 100]
     */
    setHSL(h: number, s: number, l: number) {
        Object.assign(this, HSL2RGB(h, s, l));
    }

    /**
     * To a HSL function string
     */
    toHSL() {
        const hsl = this.getHSL();
        return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
    }

    /**
     * To a HSLA function string
     */
    toHSLA() {
        const hsl = this.getHSL();
        return `hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, ${this.a})`;
    }

    /**
     * Create a new color from Hexadecimal
     * @param hex - Hexadecimal number
     */
    static fromHEX(hex: string) {
        const color = new Color();
        color.setHEX(hex);
        return color;
    }

    /**
     * Create a new color from HSV representation
     * @param h - Hue, in the set [0, 360]
     * @param s - Saturation, in the set [0, 100]
     * @param v - Value, in the set [0, 100]
     */
    static fromHSV(h: number, s: number, v: number) {
        const color = new Color();
        color.setHSV(h, s, v);
        return color;
    }

    /**
     * Create a new color from HSL representation
     * @param h - Hue, in the set [0, 360]
     * @param s - Saturation, in the set [0, 100]
     * @param l - Lightness, in the set [0, 100]
     */
    static fromHSL(h: number, s: number, l: number) {
        const color = new Color();
        color.setHSL(h, s, l);
        return color;
    }
}
