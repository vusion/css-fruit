import Fruit, { ValueNode, ValueNodeType, ParsedDepth } from '../Fruit';
import { numberRE } from './Number';

const unitRE = /^ch|em|ex|rem|vh|vw|vmin|vmax|px|cm|mm|in|pc|pt$/i;
const experimentalUnitRE = /^cap|ch|em|ex|ic|lh|rem|rlh|vh|vw|vi|vb|vmin|vmax|px|cm|mm|Q|in|pc|pt$/i;
const partialRE = new RegExp(`^(${String(numberRE).slice(2, -3)})(${String(unitRE).slice(2, -3)})?$`, 'i');

export default class Length extends Fruit {
    number: number;
    unit: string;

    constructor();
    constructor(value: string | number);
    constructor(number: number, unit: string);
    constructor(value?: string | number, unit?: string) {
        super();
        this._type = 'length';
        this._parseDepth = ParsedDepth.dataType;
        this.init();

        const args = arguments;
        this.tryCatch(() => {
            if (args.length === 0)
                return;
            else if (args.length === 1 && typeof value === 'string')
                this.parse(value);
            else if (typeof value === 'number') {
                if (!unit && value === 0) {
                    this.number = value;
                    this.unit = '';
                    this.valid = true;
                } else if (unit && unitRE.test(unit)) {
                    this.number = value;
                    this.unit = unit;
                    this.valid = true;
                } else
                    throw new SyntaxError(`Invalid unit '${unit}'`);
            } else
                throw new TypeError('Wrong type or excessive arguments');
        });
    }

    init() {
        super.init();
        this.number = undefined;
        this.unit = undefined;
    }

    parse(value: string): Fruit | string {
        value = value.trim();

        this.tryCatch(() => {
            const found = partialRE.exec(value);
            if (!found)
                throw new SyntaxError(`Invalid length '${value}'`);
            if (+found[1] !== 0 && !found[2])
                throw new SyntaxError('There must be a unit after the non-zero number');

            this.number = +found[1];
            this.unit = found[2] || '';
            this.valid = true;
        });

        return this.toResult();
    }

    toString(complete?: boolean): string {
        if (!this.valid)
            return super.toString();

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
