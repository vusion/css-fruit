import Fruit, { ValueNode, ValueNodeType, ParsedDepth } from '../Fruit';
import { numberRE } from './Number';

const partialRE = new RegExp(`^(${String(numberRE).slice(2, -3)})%$`, 'i');

export default class Percentage extends Fruit {
    number: number;

    constructor();
    constructor(value: string | number);
    constructor(value?: string | number) {
        super();
        this._type = 'percentage';
        this._parseDepth = ParsedDepth.dataType;
        this.init();

        const args = arguments;
        this.tryCatch(() => {
            if (args.length === 0)
                return;
            else if (typeof value === 'string')
                this.parse(value);
            else if (typeof value === 'number') {
                this.number = value;
                this.valid = true;
            } else
                throw new TypeError('Wrong type or excessive arguments');
        });
    }

    init() {
        super.init();
        this.number = undefined;
    }

    parse(value: string): Fruit | string {
        value = value.trim();

        try {
            const found = partialRE.exec(value);
            if (!found)
                throw new SyntaxError(`Invalid percentage format of '${value}'`);
            // if (+found[1] !== 0 && !found[2])
            //     throw new SyntaxError('"%" must be after the non-zero number');

            this.number = +found[1];
            this.valid = true;
        } catch (e) {
            if (this.options.throwErrors)
                throw e;
        }

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
