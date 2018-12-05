declare namespace PostcssValueParser {
class ValueNode {
    type: string;
    value: string;
}

enum ValueNodeType {
    word = 'word',
    string = 'string',
    div = 'div',
    space = 'space',
    comment = 'comment',
    function = 'function',
}

class ValueParser {
    constructor();
    constructor(value: string);
    nodes: Array<ValueNode>;
    walk(cb: (node: ValueNode) => void, bubble?: boolean): ValueParser;
    toString(): string;
}

    // export = ValueParser;
    // export default function (value: string): ValueParser;
    // export declare function(value: string): Object;

}
