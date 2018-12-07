import Fruit, { ValueNode, ValueNodeType, ResolveDepth, Stem, AnalyzeLoopControl } from '../Fruit';
import URL from './URL';

export default class Image extends Fruit {
    protected _type: string = 'image';
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

    toResult(): Fruit | string {
        if (!this.valid)
            return super.toResult();
        if (typeof this.value === 'string')
            return this.value;
        else
            return this.value.toResult();
    }

    protected analyzeInLoop(node: ValueNode, stem: Stem): AnalyzeLoopControl {
        if (node.type === ValueNodeType.space || node.type === ValueNodeType.comment)
            return AnalyzeLoopControl.next;
        else if (node.type === ValueNodeType.function) {
            if (node.unclosed)
                throw new SyntaxError('Unclosed function: ' + node.value);
            if (node.value === 'url') {
                if (this.value)
                    throw new SyntaxError('Excessive values');
                const url = new URL();
                url.analyze(stem);
                if (!url.valid)
                    throw new SyntaxError('Invalid url: ' + node.value);
                this.value = url.toResult() as URL | string;
                this.valid = true;
                return AnalyzeLoopControl.continue;
            } else
                return AnalyzeLoopControl.break;
            // cont gradient = new Gradient();
        } else // Break loop due to incompatible node.type or node.value
            return AnalyzeLoopControl.break;
    }

    toString(complete?: boolean): string {
        if (!this.valid)
            return super.toString();
        return this.value.toString();
    }
}
