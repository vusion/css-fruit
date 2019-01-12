import Fruit, { ValueNode, ValueNodeType } from '../Fruit';
import Length from '../dataTypes/Length';
import Percentage from '../dataTypes/Percentage';

export default class BackgroundSize extends Fruit {
    protected _type: string = 'background-size';
    protected _state: { count: number };
    width: Length | Percentage | string;
    height: Length | Percentage | string;

    constructor(value?: string);
    constructor(width: string, height?: string) {
        super(width);
        if (arguments.length > 1) {
            this.width = width;
            this.height = height;
        }
    }

    protected init() {
        super.init();
        this._state = { count: 0 };
        this.width = undefined;
        this.height = undefined;
    }

    toResult(): Fruit | string {
        if (!this.valid)
            return super.toResult();
        if (this.width === 'cover' || this.width === 'contain')
            return this.width;
        else
            return super.toResult();
    }

    protected analyzeInLoop(node: ValueNode): boolean {
        if (node.type === ValueNodeType.space || node.type === ValueNodeType.comment)
            return true;
        else if (node.type === ValueNodeType.word) {
            if (node.value === 'cover' || node.value === 'contain') {
                if (this._state.count >= 1)
                    throw new SyntaxError(`Excessive keyword '${node.value}'`);
                else {
                    this.width = this.height = node.value;
                    this._state.count += 2;
                    return this.valid = true;
                }
            } else {
                const length = Length.parse(node.value) as Length | string; // '0' is truthy
                const percentage = Percentage.parse(node.value) as Percentage | string
                let size;
                if (length || percentage || node.value === 'auto')
                    size = length || percentage || node.value;
                else
                    return undefined;

                if (this._state.count >= 2)
                    throw new SyntaxError(`Excessive value '${size}'`);
                else if (this._state.count === 0) {
                    this.width = size;
                    this.height = 'auto';
                    this._state.count++;
                    return this.valid = true;
                } else if (this._state.count === 1) {
                    this.height = size;
                    this._state.count++;
                    return this.valid = true;
                } else
                    throw new Error('Unexpected internal error about _state.count');
            }
        }
    }

    toString(complete?: boolean): string {
        if (!this.valid)
            return super.toString();

        if (this.width === 'cover' || this.width === 'contain')
            return this.width;

        if (!complete) {
            if (this.height === 'auto')
                return this.width.toString();
        }

        return [this.width, this.height].join(' ');
    }
}
