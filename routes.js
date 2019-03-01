'use strict';

const Gallery = require('./app/controllers/gallery');

module.exports = [
  { method: 'GET', path: '/', config: Gallery.index },
  {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: './public'
      }
    },
    options: { auth: false }
  }
];
