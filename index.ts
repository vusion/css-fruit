// import Parser from './src/Parser';
// import Padding from './src/Padding';
// import Margin from './src/Margin';
// import Background from './src/Background';

import Fruit, { decl } from './src/Fruit';
import Background from './src/properties/Background';

const Kinds: { [prop: string]: any } = {
    background: Background,
};

Fruit.absorb = function absorb(prop: string | decl | Array<decl>, value?: string): Fruit {
    if (this.name !== 'Fruit') {
        const fruit = new this();
        return fruit.absorb.apply(fruit, arguments);
    } else {
        if (Array.isArray(prop)) {
            const first = prop[0];
            const rest = prop.slice(1);
            return this.absorb(first).absorb(rest);
        }

        if (typeof prop === 'object') {
            value = prop.value;
            prop = prop.prop;
        }

        const shorthand = prop.split('-')[0];
        const Kind = Kinds[shorthand];
        if (!Kind)
            throw new Error('Unsupported property');

        return Kind.absorb(prop, value);
    }
};

export default Fruit;
export {
    Background,
}

