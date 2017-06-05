# GKB

GKB - Geographical Knowledge Based Search

We are sure no one can compete with Google, but we have tried to create something google does not have right now.
People, even after search for places on google, do not get to the exact location as quickly as they would like to. We students of University of Melbourne have created an application
which would describe a place automatically or with the help of crowdsourcing, making life easy for users to get to their desired place.

This application searches for places from both the worlds 1. OSM 2. Google. The automatic descriptions are generated with the help of Open Street Map(OSM) integrated with wikipedia. OSM data are queried with the help of apache Jena framework and nominatim which are placed in our servers. Google place search is queried only when we do not get results from OSM. But for everything else we use the help of google's services, such as google maps, google autoSuggestion, google photo places.


## Technology

Server side, GKB is built with the [Express](http://expressjs.com/)
framework. We're using [MongoDB](http://www.mongodb.org/) as a data store.

The front-end is built with [React](https://facebook.github.io/react/) with [Redux](http://redux.js.org/).
We're using [Webpack](https://webpack.js.org/) for the asset pipeline.

| On The Server | On The Client  | Development |
| ------------- | -------------- | ----------- |
| Node          | React          |
| Express       | Redux          | es2015      |
| Mongoose      | Bootstrap      | Babel       |
| Firebase      | Underscore.js  | Webpack     |
| Nodemailer    | Font-Awesome   |             |
| Curlrequest   | Moment.js      |             |


## Requirements

You need [Node.js](http://nodejs.org/download/) and
[MongoDB](http://www.mongodb.org/downloads) installed and running.

You need [`babel-cli`], for es2015 javascript code to be compiled.

We use [`bcrypt`](https://github.com/ncb000gt/node.bcrypt.js) for hashing
secrets. If you have issues during installation related to `bcrypt` then [refer
to this wiki
page](https://github.com/jedireza/drywall/wiki/bcrypt-Installation-Trouble).

We use [`nodemailer`](https://nodemailer.com/about/) for email transport.


## Installation

```bash
$ git clone https://github.com/KentQin/GKB_website_2.0.git && cd ./GKB_website_2.0
$ npm install
```


## Setup

First you need to setup your config file in ./server/config.js to setup your google, firebase API keys.
Then you need to setup your nodemailer email transport service in ./server/mailServer.js
There will be 2 files naming, index.js and index.css. These 2 files have to be copied into the /node_modules/react-google-places-suggest/ . 

## File structure
client Folder: all front-end files.
+   acions Folder: all redux action files.  
+   components Folder: all react componenet files.  
+   reducer Folder: all reducer files.  
+   utils Folder: set authentication token.  
+   index File: the entry of the front-end part; sessionStorage and loacalStroage is set from here.  
  
public Folder: Css file and temporary img file.  

server Folder: all back-end files.
+   models Folder: all data schema files.  
+   routes Folder: HTTP requests are proccessed here.  
+   shared Folder:  contains validations folder which contains all files to do back-end data valisation work.  


## Running the app

```bash
$ npm start

> nodemon --watch server --exec babel-node -- server/index.js

[nodemon] 1.11.0

[nodemon] watching: F:\Uni Melb\4th sem\Research Project\GKB\GKB_final\GKB_website_2.0_latest\GKB_website_2.0\server/**/*

[nodemon] starting `babel-node server/index.js`
express-session deprecated undefined saveUninitialized option; provide saveUninitialized option server\index.js:108:38
Server {
  domain: null,
  _events:
   { request:
      { [Function: app]
        domain: undefined,
        _events: [Object],
        _maxListeners: undefined,
        setMaxListeners: [Function: setMaxListeners],
        getMaxListeners: [Function: getMaxListeners],
        emit: [Function: emit],
        addListener: [Function: addListener],
        on: [Function: addListener],
        prependListener: [Function: prependListener],
        once: [Function: once],
        prependOnceListener: [Function: prependOnceListener],
        removeListener: [Function: removeListener],
        removeAllListeners: [Function: removeAllListeners],
        listeners: [Function: listeners],
        listenerCount: [Function: listenerCount],
        eventNames: [Function: eventNames],
        init: [Function: init],
        defaultConfiguration: [Function: defaultConfiguration],
        lazyrouter: [Function: lazyrouter],
        handle: [Function: handle],
        use: [Function: use],
        route: [Function: route],
        engine: [Function: engine],
        param: [Function: param],
        set: [Function: set],
        path: [Function: path],
        enabled: [Function: enabled],
        disabled: [Function: disabled],
        enable: [Function: enable],
        disable: [Function: disable],
        acl: [Function],
        bind: [Function],
        checkout: [Function],
        connect: [Function],
        copy: [Function],
        delete: [Function],
        get: [Function],
        head: [Function],
        link: [Function],
        lock: [Function],
        'm-search': [Function],
        merge: [Function],
        mkactivity: [Function],
        mkcalendar: [Function],
        mkcol: [Function],
        move: [Function],
        notify: [Function],
        options: [Function],
        patch: [Function],
        post: [Function],
        propfind: [Function],
        proppatch: [Function],
        purge: [Function],
        put: [Function],
        rebind: [Function],
        report: [Function],
        search: [Function],
        subscribe: [Function],
        trace: [Function],
        unbind: [Function],
        unlink: [Function],
        unlock: [Function],
        unsubscribe: [Function],
        all: [Function: all],
        del: [Function],
        render: [Function: render],
        listen: [Function: listen],
        request: [Object],
        response: [Object],
        cache: {},
        engines: {},
        settings: [Object],
        _eventsCount: 1,
        locals: [Object],
        mountpath: '/',
        _router: [Object] },
     connection: [Function: connectionListener],
     listening: { [Function: g] listener: [Function] } },
  _eventsCount: 3,
  _maxListeners: undefined,
  _connections: 0,
  _handle:
   TCP {
     bytesRead: 0,
     _externalStream: {},
     fd: -1,
     reading: false,
     owner: [Circular],
     onread: null,
     onconnection: [Function: onconnection],
     writeQueueSize: 0 },
  _usingSlaves: false,
  _slaves: [],
  _unref: false,
  allowHalfOpen: true,
  pauseOnConnect: false,
  httpAllowHalfOpen: false,
  timeout: 120000,
  _pendingResponseData: 0,
  _connectionKey: '6::::9000' }
Running on localhost:9000
database connected to great
webpack built 865acd360d562fcabbb5 in 34617ms
```


## Philosophy

 - Create a website and user system.
 - Write code in a simple and consistent way.
 - Only create minor utilities or plugins to avoid repetitiveness.
 - Find and use good tools.
 - Use tools in their native/default behavior.
