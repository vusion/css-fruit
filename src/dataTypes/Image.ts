import Fruit, { ValueNode, ValueNodeType, ParsedDepth, Stem } from '../Fruit';
import URL from './URL';
import ImageSet from './ImageSet';

export default class Image extends Fruit {
    protected _state: { count: number };
    value: URL | ImageSet | string;

    constructor();
    constructor(value: string | URL | ImageSet);
    constructor(value?: string | URL | ImageSet) {
        super();
        this._type = 'image';
        this._parseDepth = ParsedDepth.dataType;
        this.init();

        const args = arguments;
        this.tryCatch(() => {
            if (args.length === 0)
                return;
            else if (typeof value === 'string')
                this.parse(value);
            else if (value instanceof URL || value instanceof ImageSet) {
                // @矛盾: 赋值给`this.value`时，应不应该检查 URL 本身的合法性？
                this.value = value.toResult() as URL | ImageSet | string;
                this.valid = value.valid;
            } else
                throw new TypeError('Wrong type or excessive arguments');
        });
    }

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

    protected analyzeInLoop(node: ValueNode, stem: Stem) {
        if (node.type === ValueNodeType.space || node.type === ValueNodeType.comment)
            return true;
        else if (node.type === ValueNodeType.function) {
            if (node.unclosed)
                throw new SyntaxError(`Unclosed function '${node.value}'`);
            if (node.value === 'url') {
                if (this.value)
                    throw new SyntaxError(`Excessive value '${node.value}'`);
                const url = new URL();
                url.analyze(stem);
                if (!url.valid)
                    throw new SyntaxError(`Invalid <url> '${node.value}'`);
                this.value = url.toResult() as URL | string;
                this.valid = true;
                return false;
            } else if (node.value === 'image-set' || node.value === '-webkit-image-set') {
                if (this.value)
                throw new SyntaxError(`Excessive value '${node.value}'`);
                const imageSet = new ImageSet();
                imageSet.analyze(stem);
                if (!imageSet.valid)
                    throw new SyntaxError(`Invalid <image-set> '${node.value}'`);
                this.value = imageSet.toResult() as ImageSet | string;
                this.valid = true;
                return false;
            } // else
            // cont gradient = new Gradient();
        }
    }

    toString(complete?: boolean): string {
        if (!this.valid)
            return super.toString();
        return this.value.toString();
    }
}
