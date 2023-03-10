const path = require('path');

module.exports = {
    mode: "production",
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
      },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
