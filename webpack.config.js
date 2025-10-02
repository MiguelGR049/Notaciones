const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // tu JS principal
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // limpia la carpeta dist antes de generar
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // usa este como base
            filename: 'index.html', // genera este dentro de dist
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i, // para que puedas importar css
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    mode: 'development', // o 'production' cuando subas a servidor
};
