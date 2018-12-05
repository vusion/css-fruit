const ValueParser = require('postcss-value-parser');

export interface decl {
    prop: string,
    value: string,
}

export interface ValueNode {
    type: string;
    value: string;
}

export enum ValueNodeType {
    word = 'word',
    string = 'string',
    div = 'div',
    space = 'space',
    comment = 'comment',
    function = 'function',
}

export class Stem {
    nodes: Array<ValueNode>;
    pos: number;
    constructor(value: string) {
        this.nodes = new ValueParser(value).nodes;
        this.pos = 0;
    }

    head(): ValueNode {
        return this.nodes[this.pos];
    }

    next(): ValueNode {
        if (this.pos < this.nodes.length)
            return this.nodes[++this.pos];
    }
}

// enum IrrelevantProperty {
//     ignore = 'ignore',
//     error = 'error',
// }

// interface ParserConfig {
//     irrelevantProperty: IrrelevantProperty;
// }

export default class Fruit {
    protected _type: string = 'fruit';
    protected _inherit: boolean = false;

    constructor();
    constructor(value?: string);
    constructor(value?: string) {
        if (arguments.length === 1)
            this._parse(value);
        // value && this.absorb(this._type, value);
    }

    protected _parse(value: string): void {}
    protected _analyze(value?: Array<ValueNode> | string): void {}
    // toString(complete?: boolean): string;

    absorb(prop: string, value: string): Fruit;
    absorb(decl: decl): Fruit;
    absorb(decls: Array<decl>): Fruit;
    absorb(prop: string | decl | Array<decl>, value?: string): Fruit {
        if (Array.isArray(prop)) {
            prop.forEach((decl) => this.absorb(decl));
            return this;
        }

        if (typeof prop === 'object') {
            value = prop.value;
            prop = prop.prop;
        }

        return this._absorb(prop, value);
    }

    protected _absorb(prop: string, value: string) {
        // this._expand(prop, value ,true);
        return this;
    }

    // protected _expand(prop: string, value: string, recursive?: boolean, initial?: boolean) {
    //     return expandShorthandProperty(prop, value, recursive, initial);
    // }

    static Kinds: { [prop: string]: any } = {};
    static init(): void {
        // realized in index.ts for import reason
    }

    static absorb(prop: string, value: string): Fruit;
    static absorb(decl: decl): Fruit;
    static absorb(decls: Array<decl>): Fruit;
    static absorb(prop: string | decl | Array<decl>, value?: string): Fruit {
        Fruit.init();

        if (Array.isArray(prop)) {
            // @TODO:
            // fruit.absorb(prop);
            return;
        }

        if (typeof prop === 'object') {
            value = prop.value;
            prop = prop.prop;
        }

        // const shorthands = getShorthandsForProperty(prop);
        // const shorthand = shorthands[shorthands.length - 1];
        // if (!shorthand)
        //     throw new Error('Unknown property: ' + prop);

        // const fruit = new Fruit.Kinds[shorthand]();
        // return fruit.absorb(prop, value);
    }

    static validate(value: string): boolean {
        try {
            new this(value);
            return true;
        } catch (e) {
            return false;
        }
    }
}
