const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = (env, options) => {
    console.log(env, options)
    return {
        resolve: {
            extensions: ['.js'],
            alias: {
                '~' : path.resolve(__dirname, 'src')
            }
        },
        entry: './src/main.js',
        output: {
            // paht: '',
            // filename: 'core.js',/
            publicPath: '/',  // 경로를 절대경로로 작성해주기 위해.
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                {
                    test: /\.s?css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
            new CopyPlugin({
                patterns: [
                    { from: 'static' }
                ]
            })
        ],
        devServer: {
            port: 8080,
            open: true, // 브라우저가 자동으로 오픈됨.
            historyApiFallback: true // 
        }
    }
}