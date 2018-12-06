import Fruit, { decl } from '../Fruit';

const REGS = {
    repeat: /^(repeat-x|repeat-y|repeat|space|round|no-repeat)$/,
    box: /^(border-box|padding-box|content-box)$/,
    attachment: /^(scroll|fixed|local)$/,
};

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

class BackgroundPosition {
    originX: string;
    offsetX: string;
    originY: string;
    offsetY: string;
}

const enum BackgroundSizeKeyword {
    cover = 'cover',
    contain = 'contain',
}

class BackgroundSize {
    x: string;
    y: string;
    constructor(x: string, y: string) {

    }
}

/**
 * Unsupport two backgrounds
 */
export default class Background extends Fruit {
    protected _type: string = 'background';
    protected _inherited: boolean = false;

    public attachment: string;
    public clip: string;
    public color: string;
    public image: string;
    public origin: string;
    public position: BackgroundPosition;
    public repeat: BackgroundRepeat;
    public size: BackgroundSizeKeyword | [string, string];

    protected _absorb(prop: string, value: string) {
        const style = this._expand(prop, value ,true);
        Object.keys(style).forEach((longhand) => {
            const value = style[longhand];
            if (longhand === 'background-attachment')
                this[ValueType.attachment] = value;
            else if (longhand === 'background-clip')
                this[ValueType.clip] = value;
            else if (longhand === 'background-origin')
                this[ValueType.origin] = value;
            else if (longhand === 'background-color') {
                // @TODO:
                this[ValueType.color] = value;
            } else if (longhand === 'background-image') {
                this[ValueType.image] = value;
            } else if (longhand === 'background-position') {

            } else if (longhand === 'background-repeat') {
                const repeat = value.split(' ');
                if (!repeat[1]) {
                    if (repeat[0] === 'repeat-x') {
                        repeat[0] = 'repeat';
                        repeat[1] = 'no-repeat';
                    } else if (repeat[0] === 'repeat-y') {
                        repeat[0] = 'no-repeat';
                        repeat[1] = 'repeat';
                    } else
                        repeat[1] = repeat[0];
                }
                this.repeat = new BackgroundRepeat(repeat[0] as BackgroundRepeatKeyword, repeat[1] as BackgroundRepeatKeyword);
            } else if (longhand === 'background-size') {
                if (value === BackgroundSizeKeyword.contain || value === BackgroundSizeKeyword.cover)
                    this.size = value;
                else {
                    const size = value.split(' ');
                    if (!size[1])
                        size[1] = 'auto';
                    this.size = size as [string, string];
                }
            }
        });
        return this;
    }

    toString(complete?: boolean): string {
        return [this.color, this.image, this.repeat].join(',');
    }
}
