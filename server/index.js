import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';
import './database';
import users from "./routes/users";

let app = express();

// parse data from request body ==> use bodyParser middleware
app.use(bodyParser.json());

// match url, then apply the middleware
app.use('/api/users', users);

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
});

// Hey Prajith, server side get the restpassword request here!
app.post('/resetpwd', (req, res) => {
    console.log("Message for reset password ",req.body);
});

app.use('/api/user/signup',users);

console.log(app.listen(9000, () => console.log('Running on localhost:9000')));


