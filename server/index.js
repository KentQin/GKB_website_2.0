import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';
import users from './routes/users';
import resetpwd from './routes/resetpwd';
import changePswd from './routes/changePswd'
import searchBar from './routes/searchBar'
import addProfile from './routes/addProfile'
import session from 'express-session';
import cookieParser from 'cookie-parser';
import './database';
import './firebase';
import config from './config'
// import busboyBodyParser from 'busboy-body-parser'
import fileUpload from 'express-fileupload'
import busboy from 'connect-busboy'
import bb from 'express-busboy'
// import multer from 'multer'

let app = express();

const compiler = webpack(webpackConfig);
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));
// app.use(multer({dest:'./uploads/'}).single('photo'));
// bb.extend(app, {
//     upload: true,
//     path: '/',
//     allowedPath: /./
// });
// app.use(busboy());
// // app.use(busboyBodyParser({ limit: '5mb' }));
// app.use(fileUpload());

app.use(cookieParser());
app.use(session({
    secret: '12345',
    name: 'test-gkb',
    cookie: {maxAge: 5*60*1000},
    saveUnintialized: false,
    resave: false
}));

// load static files like css, pictures
app.use(express.static('public'));

// set up hot reload for reacjs
app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));
// parse data from request body ==> use bodyParser middleware

// match url, then apply the middleware
app.use('/api/users', users);
app.use('/api/resetpwd', resetpwd);
app.use('/api/changePswd', changePswd);
app.use('/api/searchBar', searchBar);
app.use('/api/addProfilePic', addProfile);


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Hey Prajith, server side get the restpassword request here!
app.post('/resetpwd', (req, res) => {
    console.log("Message for reset password ",req.body);
});

if (config.dev) {
  console.log(app.listen(9000, () => console.log('Running on localhost:9000')));
} else {
  console.log(app.listen(80, () => console.log('Running on server which is public.')));
}
