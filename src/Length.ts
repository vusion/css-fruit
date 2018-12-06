import Fruit, { ValueNode, ValueNodeType, ResolveDepth } from './Fruit';
import { numberRE } from './Number';

const partialRE = new RegExp(`^(${String(numberRE).slice(2, -3)})(cap|ch|em|ex|ic|lh|rem|rlh|vh|vw|vi|vb|vmin|vmax|px|cm|mm|Q|in|pc|pt)?$`, 'i');

export default class Length extends Fruit {
    protected _type: string = 'length';
    protected _resolveDepthBoundary = ResolveDepth.dataTypes;
    number: number;
    unit: string;

    init() {
        this.number = undefined;
        this.unit = undefined;
    }

    parse(value: string): this | string {
        value = value.trim();

        const found = partialRE.exec(value);
        if (!found)
            throw new SyntaxError('Invalid length');
        if (+found[1] !== 0 && !found[2])
            throw new SyntaxError('A unit should be after the non-zero number');

        this.number = +found[1];
        this.unit = found[2] || '';

        return this.toResult();
    }

    toString(complete?: boolean): string {
        if (!complete) {
            if (this.number === 0)
                return '0';
        }

        return this.number + this.unit;
    }

    static test(value: string): boolean {
        return partialRE.test(value);
    }
}
