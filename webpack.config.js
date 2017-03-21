import path from 'path';
import webpack from 'webpack';

export default {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '/client/index.js')
    ],
    output:{
        path: '/',
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [
                    path.join(__dirname, 'client'),
                    path.join(__dirname, 'server/shared')
                ],
                loaders: ['react-hot-loader', 'babel-loader'],
            },
            {
                test: /\.css$/,
                include: [
                    path.join(__dirname, 'public/css')
                ],
                loaders: 'style-loader!css-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    }
}