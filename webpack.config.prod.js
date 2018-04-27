const HtmlWebpackPlugin = require('html-webpack-plugin')
//导入webpack 
const webpack = require('webpack')
const path=require('path')
module.exports = {
    entry: './src/main.js',//入口
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(ttf|eot|woff|svg|png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader'
                    }
                ]
            },
            
        ]
    },
    plugins: [
        //将来以template为模版，生成一个index.html并且发布到webpack-dev-server开启的node服务器上面去
        new HtmlWebpackPlugin({
            template: './template.html'
        }),
        //导入全局的包
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            $axios:'axios'
        })
    ]
}
