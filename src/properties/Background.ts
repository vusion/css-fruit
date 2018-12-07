import Fruit, { ValueNode, ValueNodeType, Stem, AnalyzeLoopControl } from '../Fruit';
import Image from '../dataTypes/Image';
import BackgroundPosition from './BackgroundPosition';
import BackgroundRepeat from './BackgroundRepeat';
import BackgroundSize from './BackgroundSize';

// const REGS = {
//     repeat: /^(repeat-x|repeat-y|repeat|space|round|no-repeat)$/,
//     box: /^(border-box|padding-box|content-box)$/,
//     attachment: /^(scroll|fixed|local)$/,
// };

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

    attachment: string;
    clip: string;
    color: string;
    image: Image | string;
    origin: string;
    position: BackgroundPosition | string;
    repeat: BackgroundRepeat | string;
    size: BackgroundSize | string;

    protected analyzeInLoop(node: ValueNode, stem: Stem): AnalyzeLoopControl {
        if (node.type === ValueNodeType.space || node.type === ValueNodeType.comment)
            return AnalyzeLoopControl.next;
        else if (node.type === ValueNodeType.word) {
            if (node.value === 'none')
                this.setImage(node.value);
            else {
                const position = new BackgroundPosition();
                position.analyze(stem);
                if (position.valid) {
                    this.setPosition(position.toResult() as BackgroundPosition | string);
                }
                // else
                //     return true;
                    // const size = new Backg

                const repeat = new BackgroundRepeat();
                repeat.analyze(stem);
                if (repeat.valid) {
                    this.setRepeat(repeat.toResult() as BackgroundRepeat | string);
                }

                return AnalyzeLoopControl.continue;
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
                return AnalyzeLoopControl.continue;
            } // else if (node.value ===)
            // else
            //     return true;
        } else
            return AnalyzeLoopControl.break;
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
