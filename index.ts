// import Parser from './src/Parser';
// import Padding from './src/Padding';
// import Margin from './src/Margin';
// import Background from './src/Background';

import Fruit, { decl } from './src/Fruit';
import Background from './src/Background';

Fruit.init = function init() {
    if (Fruit.Kinds['background'])
        return;

    Fruit.Kinds = {
        background: Background,
    };
};

export default Fruit;
export {
    Background,
}

// Debug
console.log(
    Fruit.absorb('background', `#ccc url('abc') no-repeat    repeat`)
        .absorb('background-image', 'url(abc.png)')
        .absorb('background-size', '40%')
);
