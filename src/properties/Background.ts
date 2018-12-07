import Fruit, { ValueNode, ValueNodeType, Stem } from '../Fruit';
import Color from '../dataTypes/Color';
import Image from '../dataTypes/Image';
import BackgroundPosition from './BackgroundPosition';
import BackgroundRepeat from './BackgroundRepeat';
import BackgroundSize from './BackgroundSize';

export const backgroundAttachmentRE = /^(scroll|fixed|local)$/i;
export const boxRE = /^(border-box|padding-box|content-box)$/i;

const enum ValueType {
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
    protected _type: string = 'background';
    protected _inherited: boolean = false;
    protected _state: { boxCount: number };
    attachment: string;
    clip: string;
    color: Color | string;
    image: Image | string;
    origin: string;
    position: BackgroundPosition | string;
    repeat: BackgroundRepeat | string;
    size: BackgroundSize | string;

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
                    throw new SyntaxError('Excessive background-attachment');
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
                    throw new SyntaxError('Excessive background-clip')
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
                    if (node.type === 'div' && node.value === '/') {
                        const size = new BackgroundSize();
                        stem.next();
                        size.analyze(stem);
                        if (size.valid) {
                            this.setSize(size);
                            valid = this.valid = true;
                        } else
                            throw new SyntaxError('Invalid background-size');
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
                throw new SyntaxError('Unclosed function: ' + node.value);
            if (node.value === 'url') {
                const image = new Image();
                image.analyze(stem);
                if (!image.valid)
                    throw new SyntaxError('Invalid image');
                this.setImage(image.toResult() as Image | string);
                return false;
            } else if (node.value === 'rgb' || node.value === 'rgba' || node.value === 'hsl' || node.value === 'hsla') {
                const color = new Color();
                color.analyze(stem);
                if (color.valid) {
                    this.setColor(color);
                    this.valid = true;
                }
            }
        }
    }

    private setColor(color: Color | string): void {
        if (this.color)
            throw new SyntaxError('Excessive color');
        else
            this.color = color;
    }

    private setImage(image: Image | string): void {
        if (this.image)
            throw new SyntaxError('Excessive image');
        else
            this.image = image;
    }

    private setPosition(position: BackgroundPosition | string): void {
        if (this.position)
            throw new SyntaxError('Excessive background-position');
        else
            this.position = position;
    }

    private setRepeat(repeat: BackgroundRepeat | string): void {
        if (this.repeat)
            throw new SyntaxError('Excessive background-repeat');
        else
            this.repeat = repeat;
    }

    private setSize(size: BackgroundSize | string): void {
        if (this.size)
            throw new SyntaxError('Excessive background-size');
        else
            this.size = size;
    }

    // protected _absorb(prop: string, value: string) {
    //     const style = this._expand(prop, value ,true);
    //     Object.keys(style).forEach((longhand) => {
    //         const value = style[longhand];
    //         if (longhand === 'background-attachment')
    //             this[ValueType.attachment] = value;
    //         else if (longhand === 'background-clip')
    //             this[ValueType.clip] = value;
    //         else if (longhand === 'background-origin')
    //             this[ValueType.origin] = value;
    //         else if (longhand === 'background-color') {
    //             // @TODO:
    //             this[ValueType.color] = value;
    //         } else if (longhand === 'background-image') {
    //             this[ValueType.image] = value;
    //         } else if (longhand === 'background-position') {

    //         } else if (longhand === 'background-repeat') {
    //             const repeat = value.split(' ');
    //             if (!repeat[1]) {
    //                 if (repeat[0] === 'repeat-x') {
    //                     repeat[0] = 'repeat';
    //                     repeat[1] = 'no-repeat';
    //                 } else if (repeat[0] === 'repeat-y') {
    //                     repeat[0] = 'no-repeat';
    //                     repeat[1] = 'repeat';
    //                 } else
    //                     repeat[1] = repeat[0];
    //             }
    //             this.repeat = new BackgroundRepeat(repeat[0] as BackgroundRepeatKeyword, repeat[1] as BackgroundRepeatKeyword);
    //         } else if (longhand === 'background-size') {
    //             if (value === BackgroundSizeKeyword.contain || value === BackgroundSizeKeyword.cover)
    //                 this.size = value;
    //             else {
    //                 const size = value.split(' ');
    //                 if (!size[1])
    //                     size[1] = 'auto';
    //                 this.size = size as [string, string];
    //             }
    //         }
    //     });
    //     return this;
    // }

    toString(complete?: boolean): string {
        return [this.color, this.image, this.repeat].join(',');
    }
}
