import Fruit, { ValueNode, ValueNodeType, Stem } from './Fruit';

export enum BackgroundRepeatKeyword {
    repeat = 'repeat',
    space = 'space',
    round = 'round',
    'no-repeat' = 'no-repeat',
}

const partialRE = /^(?:repeat-width|repeat-height|repeat|space|round|no-repeat)$/;

export default class BackgroundSize extends Fruit {
    protected _type: string = 'background-repeat';
    protected _state: { count: number };
    width: BackgroundRepeatKeyword;
    height: BackgroundRepeatKeyword;

    constructor(value?: string);
    constructor(width: BackgroundRepeatKeyword, height?: BackgroundRepeatKeyword) {
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

    protected analyzeInLoop(node: ValueNode): boolean {
        if (node.type === ValueNodeType.space || node.type === ValueNodeType.comment)
            return false;
        else if (node.type === ValueNodeType.word) {
            if (node.value === 'repeat-width') {
                if (this._state.count > 0)
                    throw new SyntaxError('Excessive keywords found');
                else {
                    this.width = BackgroundRepeatKeyword.repeat;
                    this.height = BackgroundRepeatKeyword['no-repeat'];
                    this._state.count += 2;
                }
            } else if (node.value === 'repeat-height') {
                if (this._state.count > 0)
                    throw new SyntaxError('Excessive keywords found');
                else {
                    this.width = BackgroundRepeatKeyword['no-repeat'];
                    this.height = BackgroundRepeatKeyword.repeat;
                    this._state.count += 2;
                }
            } else if (Object.keys(BackgroundRepeatKeyword).includes(node.value)) {
                if (this._state.count > 1)
                    throw new SyntaxError('Excessive keywords found');
                else if (this._state.count === 0) {
                    this.width = this.height = node.value as BackgroundRepeatKeyword;
                    this._state.count++;
                } else if (this._state.count === 1) {
                    this.height = node.value as BackgroundRepeatKeyword;
                    this._state.count++;
                } else
                    throw new Error('State Problem!');
            }
        }
        return true;
    }

    toString(complete?: boolean) {
        if (!complete) {
            if (this.width === this.height)
                return this.width;
            else if (this.width === BackgroundRepeatKeyword.repeat && this.height === BackgroundRepeatKeyword['no-repeat'])
                return 'repeat-width';
            else if (this.height === BackgroundRepeatKeyword.repeat && this.width === BackgroundRepeatKeyword['no-repeat'])
                return 'repeat-height';
            // else;
        }

        return [this.width, this.height].join(' ');
    }

    // static test(value: string) {
    //     return
    // }
}
