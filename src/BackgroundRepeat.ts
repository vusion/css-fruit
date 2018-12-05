import Fruit, { ValueNode, ValueNodeType, Stem } from './Fruit';

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

    constructor(value?: string);
    constructor(x: BackgroundRepeatKeyword, y?: BackgroundRepeatKeyword) {
        super(x);
        if (arguments.length > 1) {
            this.x = x;
            this.y = y;
        }
    }

    _init() {
        this._state = { count: 0 };
        this.x = undefined;
        this.y = undefined;
    }

    _parse(value: string) {
        value = value.trim();

        const stem = new Stem(value);
        this.analyze(stem);
        if (stem.head())
            throw SyntaxError('Nodes of value cannot be fully analyzed: ' + value);
    }

    analyze(stem: Stem) {
        let node = stem.head();
        this._init();
        while (node) {
            if (!this.analyzeInLoop(node))
                node = stem.next();
        }
    }

    analyzeInLoop(node: ValueNode): boolean {
        if (node.type === ValueNodeType.space || node.type === ValueNodeType.comment)
            return;
        else if (node.type === ValueNodeType.word) {
            if (node.value === 'repeat-x') {
                if (this._state.count > 0)
                    throw new SyntaxError('Excessive keywords found');
                else {
                    this.x = BackgroundRepeatKeyword.repeat;
                    this.y = BackgroundRepeatKeyword['no-repeat'];
                    this._state.count += 2;
                }
            } else if (node.value === 'repeat-y') {
                if (this._state.count > 0)
                    throw new SyntaxError('Excessive keywords found');
                else {
                    this.x = BackgroundRepeatKeyword['no-repeat'];
                    this.y = BackgroundRepeatKeyword.repeat;
                    this._state.count += 2;
                }
            } else if (Object.keys(BackgroundRepeatKeyword).includes(node.value)) {
                if (this._state.count > 1)
                    throw new SyntaxError('Excessive keywords found');
                else if (this._state.count === 0) {
                    this.x = this.y = node.value as BackgroundRepeatKeyword;
                    this._state.count++;
                } else if (this._state.count === 1) {
                    this.y = node.value as BackgroundRepeatKeyword;
                    this._state.count++;
                } else
                    throw new Error('State Problem!');
            } else
                throw new Error(`Unknown ${this._type} keyword: ${node.value}`);
        } else
            throw new SyntaxError('Wrong node type: ' + node.type);
    }

    toString(complete?: boolean) {
        if (!complete) {
            if (this.x === this.y)
                return this.x;
            else if (this.x === BackgroundRepeatKeyword.repeat && this.y === BackgroundRepeatKeyword['no-repeat'])
                return 'repeat-x';
            else if (this.y === BackgroundRepeatKeyword.repeat && this.x === BackgroundRepeatKeyword['no-repeat'])
                return 'repeat-y';
            // else;
        }

        return [this.x, this.y].join(' ');
    }

    // static test(value: string) {
    //     return
    // }

    // static validate(value: string) {

    // }
}
