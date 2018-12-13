# css-fruit

- [中文说明](README.zh-CN.md)

A Parser and Analysis of CSS Declaration.

[![CircleCI][circleci-img]][circleci-url]
[![NPM Version][npm-img]][npm-url]
[![Dependencies][david-img]][david-url]
[![NPM Download][download-img]][download-url]

[circleci-img]: https://img.shields.io/circleci/project/github/necfe/css-fruit.svg?style=flat-square
[circleci-url]: https://circleci.com/gh/necfe/css-fruit
[npm-img]: http://img.shields.io/npm/v/css-fruit.svg?style=flat-square
[npm-url]: http://npmjs.org/package/css-fruit
[david-img]: http://img.shields.io/david/necfe/css-fruit.svg?style=flat-square
[david-url]: https://david-dm.org/necfe/css-fruit
[download-img]: https://img.shields.io/npm/dm/css-fruit.svg?style=flat-square
[download-url]: https://npmjs.org/package/css-fruit

## Features

- Can set parse depth
- Chained call
- ...

## Install

``` shell
npm install --save-dev css-fruit
```

## Example

### Quickstart

``` js
import Fruit from 'css-fruit';

const background = Fruit.absorb('background', 'url(abc.png) #eee right top / 100% repeat-x');
```

CommonJS Code

``` js
const Fruit = require('css-fruit').default;

const background = Fruit.absorb('background', 'url(abc.png) #eee right top / 100% repeat-x');
```

Following is the structure of generated backgroud object:

``` js
background: Background {
    valid: true,
    color: #eee,
    image: 'url(\'abc.png\')',
    position: BackgroundPosition {
        valid: true,
        x: { origin: 'right', offset: undefined },
        y: { origin: 'top', offset: undefined },
    },
    size: BackgroundSize {
        valid: true,
        width: '100%',
        height: 'auto',
    },
    repeat: BackgroundRepeat {
        valid: true,
        x: 'repeat',
        y: 'no-repeat',
    },
    attachment: undefined,
    origin: undefined,
    clip: undefined
}
```

### Chained call

Make sure props of declarations related to same shorthand.

``` js
import Fruit from 'css-fruit';
const background = Fruit
    .absorb('background', 'url(abc.png) #eee repeat-x')
    .absorb('background-size', '100%')
    .absorb('background-position', 'top right');
```

### Decl or Array

An object like postcss decl struct is allowed:

``` js
import Fruit from 'css-fruit';
const background = Fruit
    .absorb({ prop: 'background', value: 'url(abc.png) #eee repeat-x' })
    .absorb({ prop: 'background-size', value: '100%' })
    .absorb({ prop: 'background-position', value: 'top right' });
```

You can pass an Array also.

``` js
import Fruit from 'css-fruit';
const background = Fruit.absorb([
    { prop: 'background', value: 'url(abc.png) #eee repeat-x' },
    { prop: 'background-size', value: '100%' },
    { prop: 'background-position', value: 'top right' }
]);
```

### import as required

If you want process CSS properties only about background in your project, it is better to import as required.

``` js
import { Background } from 'css-fruit';

const background = Background
    .absorb('background', 'url(abc.png) #eee repeat-x')
    .absorb('background-size', '100%')
    .absorb('background-position', 'top right');
```

<!-- ## Options

#### name

Name of something.

- Type: `string`
- Default: `'hello'`

#### auto

Do something automatically.

- Type: `boolean`
- Default: `'true'` -->

## Develop

### build

``` shell
npm run build
```

### test

``` shell
npm run test
```

## Changelog

See [Releases](https://github.com/vusion/css-fruit/releases)

## Contributing

See [Contributing Guide](https://github.com/vusion/DOCUMENTATION/issues/8)

## License

[MIT](LICENSE)
