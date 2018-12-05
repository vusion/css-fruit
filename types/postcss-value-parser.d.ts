declare module 'postcss-value-parser' {
    export class ValueNode {
        type: string;
        value: string;
    }

    class ValueParser {
        constructor(value: string);
        nodes: Array<ValueNode>;
        walk(cb: (node: ValueNode) => void, bubble?: boolean): ValueParser;
        toString(): string;
    }

    export default function (value: string): ValueParser;
}
