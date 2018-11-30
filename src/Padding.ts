import valueParser from 'postcss-value-parser';

export default class Padding {
    _inherit: boolean = false;
    top: string;
    right: string;
    bottom: string;
    left: string;

    constructor(value: string, type?: string) {
        this.digest(value, type);
    }

    digest(value: string, type?: string) {
        if (value === undefined)
            return;

        const parsed = valueParser(value.trim());
        const trimedNodes = parsed.nodes.filter((node) => {
            if (node.type === 'div' || node.type === 'string')
                throw new TypeError('Error node type in padding value: ' + value);
            else if (node.type === 'space' || node.type === 'comment')
                return false;
            else
                return true;
        });

        if (!type) {
            if (trimedNodes.length === 1) {
                this.top = this.right = this.bottom = this.left = trimedNodes[0].value;
            } else if (trimedNodes.length === 2) {
                this.top = this.bottom = trimedNodes[0].value;
                this.right = this.left = trimedNodes[1].value;
            } else if (trimedNodes.length === 3) {
                this.top = trimedNodes[0].value;
                this.right = this.left = trimedNodes[1].value;
                this.bottom = trimedNodes[2].value;
            } else
                throw new Error('length');
        } else { // Longhand
            if (trimedNodes.length !== 1)
                throw new Error('length');
            this[type] = value;
        }
    }

    toString(redundant?: boolean): string {
        if (!redundant) {
            if (this.top === this.right && this.right === this.bottom && this.bottom === this.left)
                return this.top;
            else if (this.left === this.right && this.top === this.bottom)
                return [this.top, this.left].join(' ');
            else if (this.left === this.right)
                return [this.top, this.left, this.bottom].join(' ');
        }

        return [this.top, this.right, this.bottom, this.left].join(' ');
    }
}
