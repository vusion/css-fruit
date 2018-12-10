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

export const enum ValueNodeType {
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

export const enum AnalyzeLoopControl {
    next = 'next',
    stay = 'stay',
    break = 'break',
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
    raw: string;
    valid: boolean = false;

    constructor();
    constructor(value?: string);
    constructor(value?: string) {
        if (arguments.length === 1 && value)
            this.parse(value);
    }

    protected init(): void {
        this.valid = false;
    }

    parse(value: string): Fruit | string {
        this.raw = value;
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
        let node;
        this.init();
        while (node = stem.head()) {
            let control: boolean;
            try {
                control = this.analyzeInLoop(node, stem);
            } catch (e) {
                this.valid = false;
                throw e;
            }

            if (control === undefined)
                return;
            else if (control === true)
                node = stem.next();
        }
    }

    /**
     * Analyze in loop
     * If meeting incompatible node.type or node.value, return true to next the loop.
     * When analyzing successful, this.valid must specified.
     * @param node - Node in loop
     * @returns - Whether next++
     */
    protected analyzeInLoop(node: ValueNode, stem: Stem): boolean {
        return true;
    }

    get [Symbol.toStringTag]() { return this.constructor.name; }
    toString(complete?: boolean): string {
        if (!this.valid)
            return ''; // Invalid this._type
        else
            return this.raw;
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

    // private static Kinds: { [prop: string]: any };

    static absorb(prop: string, value: string): Fruit;
    static absorb(decl: decl): Fruit;
    static absorb(decls: Array<decl>): Fruit;
    static absorb(prop: string | decl | Array<decl>, value?: string): Fruit {
        const fruit = new this();
        return fruit.absorb.apply(fruit, arguments);
    }
}
