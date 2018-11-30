import Result from './src/Result';
import Padding from './src/Padding';
import Margin from './src/Margin';
import Background from './src/Background';

interface decl {
    prop: string,
    value: string,
}

export default {
    Ctors: {},
    init() {
        if (this.Ctors['padding'])
            return;

        this.Ctors = {
            result: Result,
            padding: Padding,
            margin: Margin,
            background: Background,
        }
    },
    parse(prop: decl | string, value?: string): Result {
        if (typeof prop === 'object') {
            value = prop.value;
            prop = prop.prop;
        }

        this.init();
        const re = /^(\w+?)(?:-(.+))?$/;
        const [full, shorthand, type] = prop.match(re);
        const Ctor = this.Ctors[shorthand];
        return new Ctor(value, type);
    },
};

export {
    Result,
    Padding,
    Margin,
    Background,
}
// new Background();

