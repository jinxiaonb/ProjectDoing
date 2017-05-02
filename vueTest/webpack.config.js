var path = require('path');
//var webpack = require('webpack');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js'); //打包多个入口文件是提取公用的部分生成common.js

module.exports = {
	entry: "./src/main",
	output: {
		path: path.join(__dirname, './dist'),
		filename: '[name].js',
		publicPath: '/dist/' //公共文件生成的地址
	},
	devServer: {
		historyApiFallback: true,
		hot: false,
		inline: true,
		grogress: true
	},
	module: {
		loaders: [{
			test: /\.vue$/,
			loader: "vue"
		}, {
			test: /\.js$/,
			loader: "babel",
			exclude: /node_modules/
		}, {
			test: /\.jsx$/,
			loader: 'babel-loader!jxs-loader?harmony',
		}, {
			test: /\.css$/,
			loader: 'style!css!autoprefixer'
		}, {
			test: /\.scss$/,
			loader: 'style!css!sass?sourceMap'
		}, {
			test: /\.(png|jpg|gif)$/,
			loader: 'url-loader?limit=8192'
		}, {
			test: /\.(html|tpl)$/,
			loader: 'html-loader'
		}]
	},
	vue: {
		loaders: {
			css: 'style!css!autoprefixer',
			html: 'html-loader'
		}
	},
	babel: {
		presets: ['es2015'],
		plugins: ['transform-runtime']
	},
	resolve: {
		extensions: ['', '.js', '.vue', '.jsx'],
		alias: {
			filter: path.join(__dirname, './src/filters'),
			components: path.join(__dirname, './src/components'),
			jsx: path.join(__dirname, './src/jsx')
		}
	},
	devtool: 'eval-source-map'
}