import Fruit, { ParsedDepth } from '../Fruit';
import { numberRE } from './Number';

const unitRE = /^dpi|dpcm|dppx|x$/i;
const partialRE = new RegExp(`^(${String(numberRE).slice(2, -3)})(${String(unitRE).slice(2, -3)})?$`, 'i');

export default class Resolution extends Fruit {
    number: number;
    unit: string;

    constructor();
    constructor(value: string);
    constructor(number: number, unit: string);
    constructor(value?: string | number, unit?: string) {
        super();
        this._type = 'resolution';
        this._parseDepth = ParsedDepth.dataType;
        this.init();

        const args = arguments;
        this.tryCatch(() => {
            if (args.length === 0)
                return;
            else if (args.length === 1 && typeof value === 'string')
                this.parse(value);
            else if (args.length === 2 && typeof value === 'number') {
                if (unit && unitRE.test(unit)) {
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
            if (!found[2])
                throw new SyntaxError('There must be a unit');

            this.number = +found[1];
            this.unit = found[2];
            this.valid = true;
        });

        return this.toResult();
    }

    toString(complete?: boolean): string {
        if (!this.valid)
            return super.toString();

        return this.number + this.unit;
    }

    static test(value: string): boolean {
        return partialRE.test(value);
    }

    toDppx() {
        if (!this.valid)
            return this.toString();

        const unit = 'x';
        if (this.unit === 'dppx' || this.unit === 'x')
            return this.number + unit;
        else if (this.unit === 'dpi')
            return (this.number / 96) + unit;
        else if (this.unit === 'dpcm')
            return (this.number * 2.54 / 96) + unit;
    }

    toDpi() {
        if (!this.valid)
            return this.toString();

        const unit = 'dpi';
        if (this.unit === 'dppx' || this.unit === 'x')
            return (this.number * 96) + unit;
        else if (this.unit === 'dpi')
            return this.number + unit;
        else if (this.unit === 'dpcm')
            return (this.number * 2.54) + unit;
    }

    toDpcm() {
        if (!this.valid)
            return this.toString();

        const unit = 'dpcm';
        if (this.unit === 'dppx' || this.unit === 'x')
            return (this.number * 96 / 2.54) + unit;
        else if (this.unit === 'dpi')
            return (this.number / 2.54) + unit;
        else if (this.unit === 'dpcm')
            return this.number + unit;
    }
}
