var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: path.join(__dirname, 'app', 'main.js'),
        // vendor: ['jquery', 'bootstrap-sass', 'd3']
    },
    output: {
        path: path.join(__dirname, 'dist', 'js'),
        filename: 'main.js',
        publicPath: path.join(__dirname, 'public')
    },
    resolve: {
        extensions: [
            '',
            '.js',
            '.json',
            '.css',
            'jsonp'
        ]
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                plugins: ['transform-runtime'],
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        //new webpack.NoErrorsPlugin(),
        //new webpack.optimize.UglifyJsPlugin({
        //    compress: {
        //        warnings: false
        //    }
        //}),
        new ExtractTextPlugin('../style/style.css', {
            allChunks: true
        }),
        // new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map'
};