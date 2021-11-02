import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'
import {merge} from 'webpack-merge'
const __dirname = path.resolve()

const isAnalyze = typeof process.env.BUNDLE_ANALYZE !== "undefined"

const common = {
	entry: './src/index.js',
	plugins: [
	new HtmlWebpackPlugin({
		hash: true,
		template: './src/index.html',
	}),
	isAnalyze && new BundleAnalyzerPlugin()
	].filter(Boolean),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	module: {
		rules: [
		{
			test: /\.m?js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {}
			},
				resolve: { // https://github.com/graphql/graphql-js/issues/2721#issuecomment-723008284
					fullySpecified: false
				},
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(gif|png|jpe?g)$/,
				exclude: /flags/,
				use: [
				{
					loader: 'file-loader',
				}
				]
			},
			]
		}
	}

	const production = {
		devtool: 'source-map',
	}

	const development = {
		devtool: 'eval-source-map',
		devServer: {
			historyApiFallback: true,
		},
	}


	export default (env, args) => {
		switch(args.mode) {
			case 'development':
			return merge(common, development);
			case 'production':
			return merge(common, production);
			default:
			throw new Error('No matching configuration was found!');
		}
	}
