var path = require('path');

module.exports = {
    entry: {
        javascript: path.resolve(__dirname, './src/variable.binding.test.js')
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    devServer: {
        contentBase: path.join(__dirname),
        compress: true,
        port: 9000,
        hot: true
    },
    devtool: "source-map",
    resolve: {
        mainFields: ["module", "main"],
        extensions: ['.js']
    },
    module: {
        noParse: [
            /node_modules\/benchmark/
        ]
    }
};
