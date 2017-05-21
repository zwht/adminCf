var path = require('path');

var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractLESS = new ExtractTextPlugin('./assets/css/style.css');


module.exports = {
    entry: {
        main: './src/main.ts'
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'assets/js/bundle.js',
        //publicPath: "http://127.0.0.1:8888/"
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader',
                    'angular-router-loader'
                ]
            },
            {
                test: /\.less$/i,
                loader: extractLESS.extract(['css-loader', 'less-loader'])
            },
            {
                test: /\.jade$/,
                loader: 'raw-loader!jade-html-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                loader: 'url-loader?limit=8192&name=assets/images/[name]-[hash:8].[ext]'
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'assets/fonts/[name]-[hash:8].[ext]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    devServer: {
        inline: true,
        //open: true,
        host: '127.0.0.1',
        port: 8888,
        historyApiFallback: true,
        proxy: {
            '/rest': {
                //target: 'http://23.88.104.99:8888',
                target: 'http://127.0.0.1:10000',
                secure: true
            }
        }
    },
    plugins: [
        extractLESS,
        new HtmlwebpackPlugin({
            title: 'zw react',
            filename: 'index.html',
            template: 'src/index.html',
            /*minify: {
             removeComments: true,    //移除HTML中的注释
             collapseWhitespace: true    //删除空白符与换行符
             },*/
            files: {
                //"css": ["css/style.css"],
                //"js": ["js/bundle.js"],
                /*"chunks": {
                 "head": {
                 //"entry": "head_bundle.js",
                 "css": ["css/style.css"]
                 },
                 "main": {
                 //"entry": "main_bundle.js",
                 "css": []
                 }
                 }*/
            },
            showErrors: true,
            inject: true,
            hash: true
        }),
        /*new webpack.optimize.UglifyJsPlugin({    //压缩代码
         compress: {
         warnings: false
         },
         output: {
         comments: false  // remove all comments
         },
         except: ['$super', '$', 'exports', 'require']    //排除关键字
         })*/

    ]
};