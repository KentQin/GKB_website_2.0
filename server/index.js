import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';

let app = express();

const compiler = webpack(webpackConfig);
// set up hot reload for reacjs
app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));
// load static files like css, pictures
app.use(express.static('public'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

console.log(app.listen(9000, () => console.log('Running on localhost:9000')));
