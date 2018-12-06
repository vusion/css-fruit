import Fruit, { ValueNode, ValueNodeType, ResolveDepth, Stem } from '../Fruit';
import URL from './URL';

export default class Image extends Fruit {
    protected _type: string = 'background-image';
    protected _resolveDepthBoundary: ResolveDepth = ResolveDepth.dataTypes;
    protected _state: { count: number };
    value: URL | string;

    // constructor(value?: string);
    // constructor(width: string, height?: string) {
    //     super(width);
    //     if (arguments.length > 1) {
    //         this.width = width;
    //         this.height = height;
    //     }
    // }

    protected init() {
        super.init();
        this._state = { count: 0 };
        this.value = undefined;
    }

    protected toResult(): this | string {
        if (!this.valid)
            return super.toResult();
        this.value
    }

    protected analyzeInLoop(node: ValueNode, stem: Stem): boolean {
        if (node.type === ValueNodeType.space || node.type === ValueNodeType.comment)
            return false;
        else if (node.type === ValueNodeType.function) {
            if (this.value)
                    throw new SyntaxError('Excessive values');
            if (node.unclosed)
                throw new SyntaxError('Unclosed function: ' + node.value);
            if (node.value === 'url') {
                const url = new URL();
                url.analyze(stem);
                if (url.valid)
                    this.value = url;
                else
                    throw new SyntaxError('Invalid url: ' + node.value);
            }

            // cont gradient = new Gradient();

            if (this.value)
                this.valid = true;
        } else // Break loop due to incompatible node.type or node.value
            return true;
    }

    toString(complete?: boolean): string {
        if (!this.valid)
            return super.toString();
        return this.value.toString();
    }
}
