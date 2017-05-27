# GKB

GKB - Geographical Knowledge Based Search

We are sure no one can compete Google, but we have tried to create something google does not have right now.
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
  Node            React
| Express       | Redux          | es2015      |
| Mongoose      | Bootstrap      | Babel       |
| Firebase      | Underscore.js  | Webpack     |
| Nodemailer    | Font-Awesome   |             |
| Curlrequest   | Moment.js      |             |

