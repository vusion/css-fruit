import Fruit, { ValueNode, ValueNodeType } from '../Fruit';

export enum BackgroundRepeatKeyword {
    repeat = 'repeat',
    space = 'space',
    round = 'round',
    'no-repeat' = 'no-repeat',
}

const partialRE = /^(?:repeat-x|repeat-y|repeat|space|round|no-repeat)$/;

export default class BackgroundRepeat extends Fruit {
    protected _type: string = 'background-repeat';
    protected _state: { count: number };
    x: BackgroundRepeatKeyword;
    y: BackgroundRepeatKeyword;

    constructor();
    constructor(value: string);
    constructor(x: BackgroundRepeatKeyword, y: BackgroundRepeatKeyword);
    constructor(x?: BackgroundRepeatKeyword | string, y?: BackgroundRepeatKeyword) {
        super();
        try {
            if (arguments.length === 0)
                return;
            else if (arguments.length === 1)
                this.parse(x);
            else if (arguments.length === 2) {
                this.x = x as BackgroundRepeatKeyword;
                this.y = y;
                this.valid = true;
            } else
                throw new TypeError(`Excessive arguments ${arguments}`);
        } catch (e) {
            if (this.options.throwErrors)
                throw e;
        }
    }

    protected init() {
        super.init();
        this._state = { count: 0 };
        this.x = undefined;
        this.y = undefined;
    }

    protected analyzeInLoop(node: ValueNode): boolean {
        if (node.type === ValueNodeType.space || node.type === ValueNodeType.comment)
            return true;
        else if (node.type === ValueNodeType.word) {
            if (node.value === 'repeat-x') {
                if (this._state.count >= 1)
                    throw new SyntaxError(`Excessive keyword '${node.value}'`);
                else {
                    this.x = BackgroundRepeatKeyword.repeat;
                    this.y = BackgroundRepeatKeyword['no-repeat'];
                    this._state.count += 2;
                    return this.valid = true;
                }
            } else if (node.value === 'repeat-y') {
                if (this._state.count >= 1)
                    throw new SyntaxError(`Excessive keyword '${node.value}'`);
                else {
                    this.x = BackgroundRepeatKeyword['no-repeat'];
                    this.y = BackgroundRepeatKeyword.repeat;
                    this._state.count += 2;
                    return this.valid = true;
                }
            } else if (Object.keys(BackgroundRepeatKeyword).includes(node.value)) {
                if (this._state.count >= 2)
                    throw new SyntaxError(`Excessive keyword '${node.value}'`);
                else if (this._state.count === 0) {
                    this.x = this.y = node.value as BackgroundRepeatKeyword;
                    this._state.count++;
                    return this.valid = true;
                } else if (this._state.count === 1) {
                    this.y = node.value as BackgroundRepeatKeyword;
                    this._state.count++;
                    return this.valid = true;
                } else
                throw new Error('Unexpected internal error about _state.count');
            }
        }
    }

    toString(complete?: boolean) {
        if(!this.valid)
            return super.toString();

        if (!complete) {
            if (this.x === this.y)
                return this.x;
            else if (this.x === BackgroundRepeatKeyword.repeat && this.y === BackgroundRepeatKeyword['no-repeat'])
                return 'repeat-x';
            else if (this.y === BackgroundRepeatKeyword.repeat && this.x === BackgroundRepeatKeyword['no-repeat'])
                return 'repeat-y';
            // else go on
        }

        return [this.x, this.y].join(' ');
    }
}
