const ValueParser = require('postcss-value-parser');

export interface decl {
    prop: string,
    value: string,
}

export interface ValueNode {
    type: string;
    value: string;
    sourceIndex: number;
    before: string;
    after: string;
    quote: string;
    unclosed: boolean;
    nodes: Array<ValueNode>;
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
    protected _inherited: boolean = false;
    protected _resolveDepthBoundary = ResolveDepth.virtualLonghand;
    valid: boolean = false;

    constructor();
    constructor(value?: string);
    constructor(value?: string) {
        if (arguments.length === 1)
            this.parse(value);
    }

    protected init(): void {
        this.valid = false;
    }

    parse(value: string): Fruit | string {
        value = value.trim();

        const stem = new Stem(value);
        this.analyze(stem);
        if (stem.head()) {
            this.valid = false;
            throw SyntaxError('Nodes of value cannot be fully analyzed: ' + value);
        }
        return this.toResult();
    }

    toResult(): Fruit | string {
        if (!this.valid)
            return undefined;
        if (this._config.resolveDepth >= this._resolveDepthBoundary)
            return this;
        else
            return this.toString();
    }

    analyze(stem: Stem): void {
        let node = stem.head();
        this.init();
        while (node) {
            try {
                if (this.analyzeInLoop(node, stem))
                    return;
            } catch (e) {
                this.valid = false;
                throw e;
            }
            node = stem.next();
        }
    }

    /**
     * Analyze in loop
     * If meeting incompatible node.type or node.value, return true to stop the loop.
     * When analyzing successful, this.valid must specified.
     * @param node - Node in loop
     * @returns - Whether stop loop
     */
    protected analyzeInLoop(node: ValueNode, stem: Stem): boolean {
        return false;
    }

    get [Symbol.toStringTag]() { return this.constructor.name; }
    toString(complete?: boolean): string {
        if (!this.valid)
            return ''; // Invalid this._type
        else
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