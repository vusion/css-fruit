import Fruit, { ValueNode } from './Fruit';

enum ValueType {
    top = 'top',
    right = 'right',
    bottom = 'bottom',
    left = 'left',
};

export default class Padding extends Fruit {
    protected name: string = 'padding';
    protected inherit: boolean = false;

    top: string;
    right: string;
    bottom: string;
    left: string;

    digest(valueType?: ValueType) {
        if (!valueType) {
            let count = 0;
            let node: ValueNode;
            while (node = this.eat()) {
                if (node.type === 'space' || node.type === 'comment')
                    continue;
                if (node.type === 'div' || node.type === 'string')
                    throw new TypeError(`Error node type in ${this.name} value: `);

                if (count === 0)
                    this.top = this.right = this.bottom = this.left = node.value;
                else if (count === 1)
                    this.right = this.left = node.value;
                else if (count === 2)
                    this.bottom = node.value;
                else if (count === 3)
                    this.left = node.value;
                else
                    throw new Error('length');
                count++;
            }
        } else {
            let count = 0;
            let node: ValueNode;
            while (node = this.eat()) {
                if (node.type === 'space' || node.type === 'comment')
                    continue;
                if (node.type === 'div' || node.type === 'string')
                    throw new TypeError(`Error node type in ${this.name} value: `);

                if (count === 0)
                    this.top = this.right = this.bottom = this.left = node.value;
                else if (count === 1)
                    this.right = this.left = node.value;
                else if (count === 2)
                    this.bottom = node.value;
                else if (count === 3)
                    this.left = node.value;
                else
                    throw new Error('length');
                count++;
            }
        }
    }

    toString(complete?: boolean): string {
        if (!complete) {
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
