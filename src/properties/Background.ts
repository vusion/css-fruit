import Fruit, { ValueNode, ValueNodeType, Stem, ParsedDepth } from '../Fruit';
import Color from '../dataTypes/Color';
import Image from '../dataTypes/Image';
import BackgroundPosition from './BackgroundPosition';
import BackgroundRepeat from './BackgroundRepeat';
import BackgroundSize from './BackgroundSize';

export const backgroundAttachmentRE = /^(scroll|fixed|local)$/i;
export const boxRE = /^(border-box|padding-box|content-box)$/i;

enum SubProperty {
    attachment = 'attachment',
    clip = 'clip',
    color = 'color',
    image = 'image',
    origin = 'origin',
    position = 'position',
    repeat = 'repeat',
    size = 'size',
};

/**
 * Unsupport two backgrounds
 */
export default class Background extends Fruit {
    protected _state: { boxCount: number };
    attachment: string;
    clip: string;
    color: Color | string;
    image: Image | string;
    origin: string;
    position: BackgroundPosition | string;
    repeat: BackgroundRepeat | string;
    size: BackgroundSize | string;

    constructor();
    constructor(value: string);
    constructor(value?: string) {
        super();
        this._type = 'background';
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
        this._state = { boxCount: 0 };
        this.attachment = undefined;
        this.clip = undefined;
        this.color = undefined;
        this.image = undefined;
        this.origin = undefined;
        this.position = undefined;
        this.repeat = undefined;
        this.size = undefined;
    }

    protected analyzeInLoop(node: ValueNode, stem: Stem): boolean {
        if (node.type === ValueNodeType.space || node.type === ValueNodeType.comment)
            return true;
        else if (node.type === ValueNodeType.word) {
            if (node.value === 'none')
                this.setImage(node.value);
            else if (backgroundAttachmentRE.test(node.value)) {
                if (this.attachment)
                    throw new SyntaxError(`Excessive <background-attachment> '${node.value}'`);
                this.attachment = node.value;
                return this.valid = true;
            } else if (boxRE.test(node.value)) {
                if (this._state.boxCount === 0) {
                    this.clip = this.origin = node.value;
                    this._state.boxCount++;
                    return this.valid = true;
                } else if (this._state.boxCount === 1) {
                    this.clip = node.value;
                    this._state.boxCount++;
                    return this.valid = true;
                } else
                    throw new SyntaxError(`Excessive <background-clip> '${node.value}'`);
            } else {
                let valid: boolean = false;

                const color = new Color();
                color.analyze(stem);
                if (color.valid) {
                    this.setColor(color);
                    valid = this.valid = true;
                }

                const position = new BackgroundPosition();
                position.analyze(stem);
                if (position.valid) {
                    this.setPosition(position.toResult() as BackgroundPosition | string);
                    valid = this.valid = true;

                    node = stem.head();
                    if (!node)
                        return false;
                    if (node.type === 'div' && node.value === '/') {
                        const size = new BackgroundSize();
                        stem.next();
                        size.analyze(stem);
                        if (size.valid) {
                            this.setSize(size);
                            valid = this.valid = true;
                        } else
                            throw new SyntaxError(`Invalid <background-size> '${node.value}'`);
                    }
                }

                const repeat = new BackgroundRepeat();
                repeat.analyze(stem);
                if (repeat.valid) {
                    this.setRepeat(repeat.toResult() as BackgroundRepeat | string);
                    valid = this.valid = true;
                }

                if (valid)
                    return false;
            }
            // color
        } else if (node.type === ValueNodeType.function) {
            if (node.unclosed)
                throw new SyntaxError(`Unclosed function '${node.value}'`);
            if (node.value === 'url') {
                const image = new Image();
                image.analyze(stem);
                if (!image.valid)
                    throw new SyntaxError(`Invalid <image> '${node.value}'`);
                this.setImage(image.toResult() as Image | string);
                this.valid = true;
                return false;
            } else if (node.value === 'rgb' || node.value === 'rgba' || node.value === 'hsl' || node.value === 'hsla') {
                const color = new Color();
                color.analyze(stem);
                if (color.valid) {
                    this.setColor(color.toResult() as Color | string);
                    this.valid = true;
                }
            }
        }
    }

    private setColor(color: Color | string): void {
        if (this.color)
            throw new SyntaxError('Excessive <color>');
        else
            this.color = color;
    }

    private setImage(image: Image | string): void {
        if (this.image)
            throw new SyntaxError('Excessive <image>');
        else
            this.image = image;
    }

    private setPosition(position: BackgroundPosition | string): void {
        if (this.position)
            throw new SyntaxError('Excessive <background-position>');
        else
            this.position = position;
    }

    private setRepeat(repeat: BackgroundRepeat | string): void {
        if (this.repeat)
            throw new SyntaxError('Excessive <background-repeat>');
        else
            this.repeat = repeat;
    }

    private setSize(size: BackgroundSize | string): void {
        if (this.size)
            throw new SyntaxError('Excessive <background-size>');
        else
            this.size = size;
    }

    toString(complete?: boolean): string {
        const output: Array<string> = [];
        this.color && output.push(this.color.toString());
        this.image && output.push(this.image.toString());
        this.position && output.push(this.position.toString());
        this.size && output.push((this.position ? '/ ' : 'left / ') + this.size.toString());
        this.repeat && output.push(this.repeat.toString());
        this.attachment && output.push(this.attachment);
        this.origin && output.push(this.origin);
        this.clip && this.clip !== this.origin && output.push(this.clip);
        return output.join(' ');
    }

    protected _absorb(prop: string, value: string): this {
        const subProperty = prop.slice(this._type.length + 1) as SubProperty;
        if (prop === 'background') {
            const background = new Background();
            background.parse(value);
            this.color = background.color;
            this.image = background.image;
            this.position = background.position;
            this.size = background.size;
            this.attachment = background.attachment;
            this.repeat = background.repeat;
            this.origin = background.origin;
            this.clip = background.clip;

            this.valid = background.valid;
        } else if (subProperty === 'size') {
            const size = BackgroundSize.parse(value);
            this.size = size as BackgroundSize | string;

            if (size instanceof BackgroundSize)
                this.valid = size.valid;
        } else if (Object.keys(SubProperty).includes(subProperty)) { // @TODO: expand it
            const background = new Background();
            background.parse(value);
            this[subProperty] = background[subProperty];

            this.valid = background.valid;
        } else
            throw new TypeError(`Property '${prop}' is inconsistent with existing type '${this._type}'`);
        return this;
    }
}
