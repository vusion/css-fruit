/// <reference path="../types/postcss-value-parser.d.ts" />
import valueParser, { ValueNode } from 'postcss-value-parser';

export { ValueNode };
export interface decl {
    prop: string,
    value: string,
}

enum IrrelevantProperty {
    ignore = 'ignore',
    error = 'error',
}

interface ParserConfig {
    irrelevantProperty: IrrelevantProperty;
}

export default class Parser {
    static config: ParserConfig = {
        irrelevantProperty: IrrelevantProperty.ignore,
    }

    protected _type: string = 'parser';
    protected _inherit: boolean = false;
    protected _pos: number = 0;
    protected _nodes: Array<ValueNode> = [];

    constructor(value?: string) {
        value && this.parse(this._type, value);
    }

    parse(prop: string, value: string): Parser;
    parse(decl: decl): Parser;
    parse(decls: Array<decl>): Parser;
    parse(prop: string | decl | Array<decl>, value?: string): Parser {
        if (Array.isArray(prop)) {
            prop.forEach((decl) => this.parse(decl));
            return this;
        }

        if (typeof prop === 'object') {
            value = prop.value;
            prop = prop.prop;
        }

        const parsed = valueParser(value.trim());
        this._nodes = parsed.nodes;
        this._pos = 0;
        this.digest();
        if (this._pos !== this._nodes.length)
            throw new Error('Not digest all nodes');

        return this;
    }

    peek(): ValueNode {
        return this._nodes[this._pos];
    }

    eat(): ValueNode {
        return this._nodes[this._pos++];
    }

    digest(valueType?: any): void {

    }

    toString(): string {
        return this.constructor.name;
    }
}

