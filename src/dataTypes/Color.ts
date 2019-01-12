import Fruit, { ValueNode, ValueNodeType, ParseDeepLevel, Stem } from '../Fruit';
const ValueParser = require('postcss-value-parser');

const enum ColorType {
    'HEX' = 'HEX',
    'RGBA' = 'RGBA',
    'RGB' = 'RGB',
    'HSLA' = 'HSLA',
    'HSL' = 'HSL',
    'HSVA' = 'HSVA',
    'HSV' = 'HSV',
    'NAME' = 'NAME',
};

export const namedColorRE = /^(?:black|silver|gray|white|maroon|red|purple|fuchsia|green|lime|olive|yellow|navy|blue|teal|aqua|orange|aliceblue|antiquewhite|aquamarine|azure|beige|bisque|blanchedalmond|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|aqua|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|gainsboro|ghostwhite|gold|goldenrod|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|limegreen|linen|magenta|fuchsia|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olivedrab|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|thistle|tomato|turquoise|violet|wheat|whitesmoke|yellowgreen|rebeccapurple)$/i;
export const hexColorRE = /^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i;

export default class Color extends Fruit {
    protected _type: string = 'color';
    protected _parseDeepLevelBoundary = ParseDeepLevel.dataTypes;
    value: string;
    r: number;
    g: number;
    b: number;
    a: number;
    h: number;
    s: number;
    v: number;

    constructor(r: number = 0, g: number = 0, b: number = 0, a: number = 1) {
        super();
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;

        // 将hsv也缓存下来好了，省事
        /* eslint-disable new-cap */
        Object.assign(this, Color.RGB2HSV(this.r, this.g, this.b));
    }

    init() {
        super.init();
        this.value = undefined;
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.a = 0;
        this.h = 0;
        this.s = 0;
        this.v = 0;
    }

    protected analyzeInLoop(node: ValueNode, stem: Stem): boolean {
        if (node.type === ValueNodeType.space || node.type === ValueNodeType.comment)
            return true;
        else if (node.type === ValueNodeType.word) {
            if (node.value === 'currentColor') {
                if (this.value)
                    throw new SyntaxError(`Excessive value '${node.value}'`);
                this.value = 'currentColor';
                return this.valid = true;
            } else if (namedColorRE.test(node.value)) {
                if (this.value)
                    throw new SyntaxError(`Excessive value '${node.value}'`);
                this.value = node.value;
                // @TODO parse named value;
                return this.valid = true;
            } else if (hexColorRE.test(node.value)) {
                if (this.value)
                    throw new SyntaxError(`Excessive value '${node.value}'`);
                this.value = node.value;
                // @TODO parse named value;
                return this.valid = true;
            }
        } else if (node.type === ValueNodeType.function) {
            if (node.unclosed)
                throw new SyntaxError(`Unclosed function '${node.value}'`);
            if (node.value === 'rgb' || node.value === 'rgba' || node.value === 'hsl' || node.value === 'hsla') {
                if (this.value)
                    throw new SyntaxError(`Excessive value '${node.value}'`);
                this.value = ValueParser.stringify(node);
                return this.valid = true;
            }
        }
    }


    toString(): string {
        if (!this.valid)
            return super.toString();

        return this.value;
    }

    toTuple(): [number, number, number, number] {
        return [this.r, this.g, this.b, this.a];
    }

    toHEX(alpha: number): string {
        const fix = (num: string) => (num.length === 1 ? '0' + num : num).toUpperCase();

        return '#' + fix(this.r.toString(16)) + fix(this.g.toString(16)) + fix(this.b.toString(16));
    }

    getRGB() {
        return { r: this.r, g: this.g, b: this.b };
    }

    setRGB(r: number, g: number, b: number) {
        Object.assign(this, { r, g, b }, Color.RGB2HSV(r, g, b));
    }

    toRGB(): string {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }

    toRGBA(): string {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    }

    getHSV() {
        /* eslint-disable new-cap */
        return { h: this.h, s: this.s, v: this.v };
    }

    // toHSV()
    // CSS不支持，先不做了。其实就两句话的事

    setHSV(h: number, s: number, v: number) {
        Object.assign(this, { h, s, v }, Color.HSV2RGB(h, s, v));
    }

    getHSL() {
        /* eslint-disable new-cap */
        return Color.HSV2HSL(this.h, this.s, this.v);
    }

    setHSL(h: number, s: number, l: number) {
        //
    }

    toHSL() {
        const hsl = this.getHSL();
        return `hsl(${hsl.h}, ${Math.round(hsl.s * 100)}%, ${Math.round(hsl.l * 100)}%)`;
    }

    toHSLA() {
        const hsl = this.getHSL();
        return `hsl(${hsl.h}, ${Math.round(hsl.s * 100)}%, ${Math.round(hsl.l * 100)}%, ${this.a})`;
    }

    static fromHEX(value: string) {
        value = value.trim().slice(1);
        if (value.length !== 6 && value.length !== 3)
            throw new SyntaxError(`Unexpected length of hex number '${value}'`);
        else if (value.length === 3)
            value = `${value[0]}${value[0]}${value[1]}${value[1]}${value[2]}${value[2]}`;

        return new Color(
            parseInt(value.slice(0, 2), 16),
            parseInt(value.slice(2, 4), 16),
            parseInt(value.slice(4, 6), 16),
        );
    }

    static fromRGB(value: string) {
        value = value.trim().slice(4, -1);
        const arr = value.split(',').map((num) => +num);
        if (arr.length !== 4)
            throw new SyntaxError(`Unexpected params of rgba function '${value}'`);

        return new Color(...arr);
    }

    static fromRGBA(value: string) {
        value = value.trim().slice(5, -1);
        const arr = value.split(',').map((num) => +num);
        if (arr.length !== 4)
            throw new SyntaxError(`Unexpected params of rgba function '${value}'`);

        return new Color(...arr);
    }

    /** @TODO: fromHSL */

    static parse(value: string) {
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
    }

    /**
     * Converts an RGB color value to HSV. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
     *
     * @param   Number  r       The red, [0, 255]
     * @param   Number  g       The green, [0, 255]
     * @param   Number  b       The blue, [0, 255]
     * @return  Object          The HSV representation
     */
    static RGB2HSV(r: number, g: number, b: number) {
        r = r / 255;
        g = g / 255;
        b = b / 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);

        let h;
        const v = max;
        const d = max - min;
        const s = max === 0 ? 0 : d / max;

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
    }

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
    static HSV2RGB(h: number, s: number, v: number) {
        h = h / 360;
        s = s / 100;
        v = v / 100;

        let r, g, b;

        const i = Math.floor(h * 6);
        const f = h * 6 - i;
        const p = v * (1 - s);
        const q = v * (1 - f * s);
        const t = v * (1 - (1 - f) * s);

        /* eslint-disable chai-friendly/no-unused-expressions, no-sequences */
        switch (i % 6) {
            case 0: r = v, g = t, b = p; break;
            case 1: r = q, g = v, b = p; break;
            case 2: r = p, g = v, b = t; break;
            case 3: r = p, g = q, b = v; break;
            case 4: r = t, g = p, b = v; break;
            case 5: r = v, g = p, b = q; break;
        }

        return { r: r * 255 >> 0, g: g * 255 >> 0, b: b * 255 >> 0 };
    }

    static HSV2HSL(h: number, s: number, v: number) {
        return {
            h,
            s: (s * v / ((h = (2 - s) * v) < 1 ? h : 2 - h)) >> 0 || 0,
            l: h / 2 >> 0,
        };
    }

    static HSL2HSV(h: number, s: number, l: number) {
        s = s / 100;
        l = l / 100;
        let smin = s;
        const lmin = Math.max(l, 0.01);

        l *= 2;
        s *= (l <= 1) ? l : 2 - l;
        smin *= lmin <= 1 ? lmin : 2 - lmin;
        const v = (l + s) / 2;
        const sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

        return {
            h,
            s: sv * 100 >> 0,
            v: v * 100 >> 0,
        };
    }
}
