import Fruit, { ValueNode, ValueNodeType, ParsedDepth, Stem } from '../Fruit';
import URL from './URL';

export default class ImageSet extends Fruit {
    prefix: string;
    resolutions: { [prop: string]: URL | string };

    constructor();
    constructor(value: string);
    constructor(value?: string) {
        super();
        this._type = 'image-set';
        this._parseDepth = ParsedDepth.dataType;
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
        this.prefix = '';
        this.resolutions = {};
    }

    protected analyzeInLoop(node: ValueNode): boolean {
        if (node.type === ValueNodeType.space || node.type === ValueNodeType.comment)
            return true;
        else if (node.type === ValueNodeType.function) {
            if (node.unclosed)
                throw new SyntaxError(`Unclosed function '${node.value}'`);
            if (node.value === 'image-set' || node.value === '-webkit-image-set') {
                if (node.value === '-webkit-image-set')
                    this.prefix = '-webkit-';

                const subNodes = node.nodes;
                let currentURL: URL | string;
                subNodes.forEach((subNode) => {
                    if (subNode.type === ValueNodeType.space || node.type === ValueNodeType.comment)
                        return true;
                    else if (subNode.type === ValueNodeType.div) {
                        if (subNode.value === ',')
                            currentURL = undefined;
                        else
                            throw new SyntaxError(`Unknown divider '${subNode.value}'`);
                    } else if (subNode.type === ValueNodeType.function) {
                        if (subNode.value === 'url') {
                            const url = new URL();
                            url.analyze(new Stem([subNode]));
                            if (!url.valid)
                                throw new SyntaxError(`Invalid <url> '${node.value}'`);
                            currentURL = url.toResult() as URL | string;
                        } else
                            throw new SyntaxError(`Unknown function '${subNode.value}'`);
                    } else if (subNode.type === ValueNodeType.string) {
                        currentURL = URL.parse(`url(${subNode.quote}${subNode.value}${subNode.quote})`) as URL | string;
                    } else if (subNode.type === ValueNodeType.word) {
                        // @TODO: if (xxx) Validate resolution
                        this.resolutions[subNode.value] = currentURL;
                    } else
                        throw new SyntaxError(`Unknown node type '${subNode.value}'`);
                });

                if (Object.keys(this.resolutions).length)
                    return this.valid = true;
                else
                    return undefined;
            }
        }
    }

    toString(): string {
        return this.prefix + 'image-set(' + Object.keys(this.resolutions).map((resolution) => {
            return this.resolutions[resolution].toString() + ' ' + resolution;
        }).join(', ') + ')';
    }
}
