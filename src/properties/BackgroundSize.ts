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
        this._state = { count: 0 };
        this.width = undefined;
        this.height = undefined;
    }

    protected toResult(): this | string {
        if (this.width === 'cover' || this.width === 'contain')
            return this.width;
        else
            return super.toResult();
    }

    protected analyzeInLoop(node: ValueNode): boolean {
        if (node.type === ValueNodeType.space || node.type === ValueNodeType.comment)
            return false;
        else if (node.type === ValueNodeType.word) {
            if (node.value === 'cover' || node.value === 'contain') {
                if (this._state.count > 0)
                    throw new SyntaxError('Excessive keywords found');
                else {
                    this.width = this.height = node.value;
                    this._state.count += 2;
                }
            } else {
                const length = Length.parse(node.value) as Length | string;
                const percentage = Percentage.parse(node.value) as Percentage | string
                let size;
                if (length !== undefined)
                    size = length;
                else if (percentage !== undefined)
                    size = percentage;
                else if (node.value === 'auto')
                    size = node.value;
                else
                    return true; // Incompatible value

                if (this._state.count > 1)
                    throw new SyntaxError('Excessive values');
                else if (this._state.count === 0) {
                    this.width = size;
                    this.height = 'auto';
                    this._state.count++;
                } else if (this._state.count === 1) {
                    this.height = size;
                    this._state.count++;
                } else
                    throw new Error('State Problem!');
            }
        } else // Break loop due to incompatible node.type or node.value
            return true;
    }

    toString(complete?: boolean): string {
        if (this.width === 'cover' || this.width === 'contain')
            return this.width;

        if (!complete) {
            if (this.height === 'auto')
                return this.width.toString();
        }

        return [this.width, this.height].join(' ');
    }
}
