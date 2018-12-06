import Fruit, { ValueNode, ValueNodeType, ResolveDepth } from '../Fruit';
import { numberRE } from './Number';

const partialRE = new RegExp(`^(${String(numberRE).slice(2, -3)})%$`, 'i');

export default class Percentage extends Fruit {
    protected _type: string = 'percentage';
    protected _resolveDepthBoundary = ResolveDepth.dataTypes;
    number: number;

    init() {
        super.init();
        this.number = undefined;
    }

    parse(value: string): this | string {
        value = value.trim();
        this.init();

        const found = partialRE.exec(value);
        if (!found)
            throw new SyntaxError('Invalid percentage');
        // if (+found[1] !== 0 && !found[2])
        //     throw new SyntaxError('"%" should be after the non-zero number');

        this.number = +found[1];
        this.valid = true;

        return this.toResult();
    }

    toString(complete?: boolean): string {
        if (!this.valid)
            return super.toString();

        // if (!complete) {
        //     if (this.number === 0)
        //         return '0';
        // }

        return this.number + '%';
    }

    static test(value: string): boolean {
        return partialRE.test(value);
    }
}
