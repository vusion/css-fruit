# css-fruit

- [README in English](README.md)

这是一个 npm 仓库模板。

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

## 特性

- 可以设置解析深度
- 链式调用
- ...

## 安装

``` shell
npm install --save-dev css-fruit
```

## 示例

### 快速开始

下面是一个简单的例子：

``` js
import Fruit from 'css-fruit';

const background = Fruit.absorb('background', 'url(abc.png) #eee right top repeat-x');
```

生成的 background 对象具有如下结构：

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

### 链式调用

我们知道，CSS 具有覆写特性。

``` css
.some-class {
    background: url(abc.png) #eee repeat-x;
    background-size: 100%;
    background-position: top right;
}
```

Fruit 中的`absorb`方法通过链式调用可以合并之后的样式。

``` js
import Fruit from 'css-fruit';
const background = Fruit
    .absorb('background', 'url(abc.png) #eee repeat-x')
    .absorb('background-size', '100%')
    .absorb('background-position', 'top right');
```

注意：要确保 absorb 前后的属性对应的简写属性相同。

### Decl or Array

absorb 方法允许传入类似 postcss decl 结构的对象。

``` js
import Fruit from 'css-fruit';
const background = Fruit
    .absorb({ prop: 'background', value: 'url(abc.png) #eee repeat-x' })
    .absorb({ prop: 'background-size', value: '100%' })
    .absorb({ prop: 'background-position', value: 'top right' });
```

也可以传入一个数组，取代链式调用。

``` js
import Fruit from 'css-fruit';
const background = Fruit.absorb([
    { prop: 'background', value: 'url(abc.png) #eee repeat-x' },
    { prop: 'background-size', value: '100%' },
    { prop: 'background-position', value: 'top right' }
]);
```

### 按需引入

比如你的项目中只处理关于`background`的 CSS 属性，那么可以使用按需引入。

``` js
import { Background } from 'css-fruit';

const background = Background
    .absorb('background', 'url(abc.png) #eee repeat-x')
    .absorb('background-size', '100%')
    .absorb('background-position', 'top right');
```

<!-- ## 选项

#### name

某个功能的名称。

- Type: `string`
- Default: `'hello'`

#### auto

是否自动做某件事。

- Type: `boolean`
- Default: `'true'` -->

## 开发

### build

``` shell
npm run build
```

### test

``` shell
npm run test
```

## 修改日志

See [Releases](https://github.com/necfe/css-fruit/releases)

## 贡献指南

See [Contributing Guide](https://github.com/vusion/DOCUMENTATION/issues/8)

## 开源协议

[MIT](LICENSE)
