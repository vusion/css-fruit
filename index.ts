// import Parser from './src/Parser';
// import Padding from './src/Padding';
// import Margin from './src/Margin';
// import Background from './src/Background';

import Fruit, { decl } from './src/Fruit';
import Background from './src/Background';

class CSSFruit {
    static Kinds: { [prop: string]: any } = {
        background: Background,
    };

    static absorb(prop: string, value: string): Fruit;
    static absorb(decl: decl): Fruit;
    static absorb(decls: Array<decl>): Fruit;
    static absorb(prop: string | decl | Array<decl>, value?: string): Fruit {
        if (Array.isArray(prop)) {
            // @TODO:
            // fruit.absorb(prop);
            return;
        }

        if (typeof prop === 'object') {
            value = prop.value;
            prop = prop.prop;
        }
    }
}

export default CSSFruit;
export {
    Fruit,
    Background,
}

// Debug
console.log(
    CSSFruit.absorb('background', `#ccc url('abc') no-repeat    repeat`)
        .absorb('background-image', 'url(abc.png)')
        .absorb('background-size', '40%')
);
