const path = require('path');

module.exports = {
    mode: 'none',
    // mode: 'production',
    entry: {
        'css-fruit': './index.ts',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        library: 'cssFruit',
        libraryTarget: 'umd',
    },
    externals: {
        'postcss-value-parser': 'postcss-value-parser',
    },
    target: 'node',
    resolve: {
        extensions: ['.js', '.ts', '.json'],
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ },
        ],
    },
};
