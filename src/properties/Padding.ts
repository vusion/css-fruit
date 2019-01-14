import Fruit, { ValueNode, ValueNodeType, ParsedDepth } from '../Fruit';
import Length from '../dataTypes/Length';
import Percentage from '../dataTypes/Percentage';

const enum ValueType {
    top = 'top',
    right = 'right',
    bottom = 'bottom',
    left = 'left',
};

export default class Padding extends Fruit {
    protected _state: { count: number };

    top: Length | Percentage | string;
    right: Length | Percentage | string;
    bottom: Length | Percentage | string;
    left: Length | Percentage | string;

    constructor();
    constructor(value: string);
    constructor(value?: string) {
        super();
        this._type = 'padding';
        this._parseDepth = ParsedDepth.shorthand;
        this.init();

        const args = arguments;
        this.tryCatch(() => {
            if (args.length === 0)
                return;
            else if (args.length === 1)
                this.parse(value);
            else
                throw new TypeError('Wrong type or excessive arguments');
        })
    }

    protected init() {
        super.init();
        this._state = { count: 0 };

        this.top = undefined;
        this.right = undefined;
        this.bottom = undefined;
        this.left = undefined;
    }

    analyzeInLoop(node: ValueNode): boolean {
        if (node.type === ValueNodeType.space || node.type === ValueNodeType.comment)
            return true;
        else if (node.type === ValueNodeType.word) {
            const length = Length.parse(node.value) as Length | string; // '0' is truthy
            const percentage = Percentage.parse(node.value) as Percentage | string
            let value: Length | Percentage | string;
            if (length || percentage)
                value = length || percentage;
            else
                return undefined;

            if (String(value)[0] === '-')
                throw new RangeError(`Negative value '${value}' is invalid`);

            if (this._state.count >= 4)
                throw new SyntaxError(`Excessive value '${value}'`);
            else if (this._state.count === 0)
                this.top = this.right = this.bottom = this.left = value;
            else if (this._state.count === 1)
                this.right = this.left = value;
            else if (this._state.count === 2)
                this.bottom = value;
            else if (this._state.count === 3)
                this.left = value;

            this._state.count++;
            return this.valid = true;
        }
    }

    toString(complete?: boolean): string {
        if(!this.valid)
            return super.toString();

        if (!complete) {
            if (this.top === this.right && this.right === this.bottom && this.bottom === this.left)
                return this.top.toString();
            else if (this.left === this.right && this.top === this.bottom)
                return [this.top, this.left].join(' ');
            else if (this.left === this.right)
                return [this.top, this.left, this.bottom].join(' ');
        }

        return [this.top, this.right, this.bottom, this.left].join(' ');
    }
}
