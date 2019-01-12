import Fruit, { ValueNode, ValueNodeType, ParseDeepLevel } from '../Fruit';
import { parseQuery, stringifyQuery, Query } from '../utils';

// @TODO:
// const strict = false;
// const protocolRE = `(?:(?:[a-z]+:)?//)${strict ? '' : '?'}`;
// const authRE = '(?:\\S+(?::\\S*)?@)?';
// const ipRE = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';
// const hostRE = '(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)';
// const domainRE = '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*';
// const tldRE = `(?:\\.${strict ? '(?:[a-z\\u00a1-\\uffff]{2,})' : `(?:${tlds.sort((a, b) => b.length - a.length).join('|')})`})\\.?`;
// const portRE = '(?::\\d{2,5})?';
// const pathRE = '(?:[/?#][^\\s"]*)?';
// const regexRE = `(?:${protocol}|www\\.)${auth}(?:localhost|${ip}|${host}${domain}${tld})${port}${path}`;
export const urlRE = /^(.*?)(\?.*?)?(#.*?)?$/i;

export default class URL extends Fruit {
    protected _type: string = 'url';
    protected _parseDeepLevelBoundary: ParseDeepLevel = ParseDeepLevel.dataTypes;
    // quote: string;
    url: string;
    path: string;
    query: Query;
    hash: string;

    protected init() {
        super.init();
        // this.quote = "'";
        this.url = undefined;
        this.path = undefined;
        this.query = undefined;
        this.hash = undefined;
    }

    protected analyzeInLoop(node: ValueNode): boolean {
        if (node.type === ValueNodeType.space || node.type === ValueNodeType.comment)
            return true;
        else if (node.type === ValueNodeType.function) {
            if (node.unclosed)
                throw new SyntaxError(`Unclosed function '${node.value}'`);
            if (node.value === 'url') {
                if (this.url)
                    throw new SyntaxError(`Duplicated function 'url'`);

                let url = '';
                if (node.nodes.length > 1)
                    throw new SyntaxError('Invalid url format');
                else if (node.nodes.length === 1) {
                    const subNode = node.nodes[0];
                    if (subNode.unclosed)
                        throw new SyntaxError(`Unclosed quote '${subNode.value}'`);
                    else
                        url = subNode.value;
                        // @discuss: keep quote?
                } // else valid
                this.url = url;
                const found = urlRE.exec(url);
                this.path = found[1] ? decodeURIComponent(found[1]) : '';
                if (found[2])
                    this.query = parseQuery(found[2]);
                this.hash = found[3] ? decodeURIComponent(found[3].slice(1)) : '';
                return this.valid = true;
            }
        }
    }

    toString(): string {
        if (!this.valid)
            return super.toString();

        const quote = "'";
        const queryString = this.query ? stringifyQuery(this.query) : '';
        return `url(${quote}${encodeURIComponent(this.path)}${queryString}${this.hash ? '#' + encodeURIComponent(this.hash) : ''}${quote})`;
    }
}
