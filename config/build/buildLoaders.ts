import { ModuleOptions } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/types'
import { buildBabelLoader } from './babel/buildBabelLoader'

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
	const isDev = options.mode === 'development'

	const cssLoaderWithModules = {
		loader: 'css-loader',
		options: {
			modules: {
				localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
			},
		},
	}

	const assetLoader = {
		test: /\.(png|jpg|jpeg|gif)$/i,
		type: 'asset/resource',
	}

	const svgrLoader = {
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		use: [
			{
				loader: '@svgr/webpack',
				options: {
					icon: true,
					svgConfig: {
						plugins: [
							{
								name: 'convertColors',
								params: {
									currentColor: true,
								},
							},
						],
					},
				},
			},
		],
	}

	const scssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			cssLoaderWithModules,
			'sass-loader',
		],
	}

	const babelLoader = buildBabelLoader(options)
	return [assetLoader, scssLoader, babelLoader, svgrLoader]
}
