import {
    isShorthandProperty,
    isValidDeclaration,
    getShorthandComputedProperties,
    expandShorthandProperty,
    getShorthandsForProperty,
} from 'css-property-parser';

export interface decl {
    prop: string,
    value: string,
}

export default class Fruit {
    protected _name: string = 'fruit';
    protected _inherit: boolean = false;

    constructor(value?: string) {
        value && this.absorb(this._name, value);
    }

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
        this._expand(prop, value ,true);
        return this;
    }

    protected _expand(prop: string, value: string, recursive?: boolean, initial?: boolean) {
        return expandShorthandProperty(prop, value, recursive, initial);
    }

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

        const shorthands = getShorthandsForProperty(prop);
        const shorthand = shorthands[shorthands.length - 1];
        if (!shorthand)
            throw new Error('Unknown property: ' + prop);

        const fruit = new Fruit.Kinds[shorthand]();
        return fruit.absorb(prop, value);
    }
}
