var webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
	entry: './client/app.js',
	output: {
		path: './client',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
			    test: /\.js?$/,
			    exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query:
                {
                  presets:['es2015']
                }                
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}
       	]
 },
	plugins: [
		new webpack.HotModuleReplacementPlugin()
   ]
};
