const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, '..', './source-code/root.tsx'),
    resolve:{
        extensions:['.tsx', '.ts', '.js']
    },

    module:{
        rules:[
            {
                test:/\.(ts|js)x?$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader:'babel-loader',
                    }
                ]
            },
            {
                test: /\.(s?css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type:'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
                type:'asset/inline',
            },
        ]
    },

    output:{
        path: path.resolve(__dirname, '..', './build'),
        filename: 'bundle.js'
        
    },
    plugins:[
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, '..', './source-code/index.html')
        }),
    ],
}