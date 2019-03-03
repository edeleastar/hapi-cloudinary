'use strict';

const Gallery = require('./app/controllers/gallery');

module.exports = [
  { method: 'GET', path: '/', config: Gallery.index },
  { method: 'POST', path: '/updatecredentials', config: Gallery.updateCredentials },
  { method: 'POST', path: '/uploadfile', config: Gallery.uploadFile },
  { method: 'GET', path: '/deleteimage/{id}', config: Gallery.deleteImage },
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
