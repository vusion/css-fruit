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

export const enum IrrelevantProperty {
    ignore = 'ignore',
    error = 'error',
}

export const enum ResolveDepth {
    shorthand,
    primaryLonghand,
    completeLonghand,
    virtualLonghand,
    dataTypes,
}

interface Config {
    irrelevantProperty: IrrelevantProperty;
    resolveDepth: ResolveDepth;
}

export default class Fruit {
    protected _config: Config = {
        irrelevantProperty: IrrelevantProperty.ignore,
        resolveDepth: ResolveDepth.virtualLonghand,
    };
    protected _type: string = 'fruit';
    protected _inherit: boolean = false;
    protected _resolveDepthBoundary = ResolveDepth.virtualLonghand;

    constructor();
    constructor(value?: string);
    constructor(value?: string) {
        if (arguments.length === 1)
            this.parse(value);
    }

    protected init(): void {}

    parse(value: string): this | string {
        value = value.trim();

        const stem = new Stem(value);
        this.analyze(stem);
        if (stem.head())
            throw SyntaxError('Nodes of value cannot be fully analyzed: ' + value);
        return this.toResult();
    }

    protected toResult(): this | string {
        if (this._config.resolveDepth >= this._resolveDepthBoundary)
            return this;
        else
            return this.toString();
    }

    analyze(stem: Stem): void {
        let node = stem.head();
        this.init();
        while (node) {
            if (this.analyzeInLoop(node))
                return;
            node = stem.next();
        }
    }

    /**
     * Analyze in loop
     * @param node - Node in loop
     * @returns - Whether stop loop
     */
    protected analyzeInLoop(node: ValueNode): boolean {
        return false;
    }

    toString(complete?: boolean): string {
        return this._type;
    }

    absorb(prop: string, value: string): this;
    absorb(decl: decl): this;
    absorb(decls: Array<decl>): this;
    absorb(prop: string | decl | Array<decl>, value?: string): this {
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

    protected _absorb(prop: string, value: string): this {
        // this._expand(prop, value ,true);
        return this;
    }

    static parse(value: string): Fruit | string {
        try {
            const fruit = new this();
            return fruit.parse(value);
        } catch (e) {}
    }
    // static test(value: string): boolean {}

    static validate(value: string): boolean {
        return this.parse(value) !== undefined;
    }
}
