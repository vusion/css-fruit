// import Parser from './src/Parser';
// import Padding from './src/Padding';
// import Margin from './src/Margin';
// import Background from './src/Background';

import Fruit, { decl } from './src/Fruit';

import Color from './src/dataTypes/Color';
import Image from './src/dataTypes/Image';
import Length from './src/dataTypes/Length';
import Number from './src/dataTypes/Number';
import Percentage from './src/dataTypes/Percentage';
import URL from './src/dataTypes/URL';

import Background from './src/properties/Background';
import BackgroundPosition from './src/properties/BackgroundPosition';
import BackgroundRepeat from './src/properties/BackgroundRepeat';
import BackgroundSize from './src/properties/BackgroundSize';
import Margin from './src/properties/Margin';
import Padding from './src/properties/Padding';

const Kinds: { [prop: string]: any } = {
    background: Background,
};

Fruit.absorb = function absorb(prop: string | decl | Array<decl>, value?: string): Fruit {
    if (this.name !== 'Fruit') {
        const fruit = new this();
        return fruit.absorb.apply(fruit, arguments);
    } else {
        if (Array.isArray(prop)) {
            if (!prop.length)
                return undefined;

            const first = prop[0];
            const rest = prop.slice(1) || [];
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
    Color,
    Image,
    Length,
    Number,
    Percentage,
    URL,

    Background,
    BackgroundPosition,
    BackgroundRepeat,
    BackgroundSize,
    Margin,
    Padding,
}

