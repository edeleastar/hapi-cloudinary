'use strict';

const Gallery = {
  index: {
    handler: async function(request, h) {
      return h.view('gallery', { title: 'Cloudinary Gallery' });
    }
  },
  updateCredentials: {
    handler: async function(request, h) {
      console.log(`credentials - name: ${request.payload.name} `);
      console.log(`credentials - key: ${request.payload.key} `);
      console.log(`credentials - secret: ${request.payload.secret} `);
      return h.redirect('/');
    }
  },
  uploadFile: {
    handler: async function(request, h) {
      console.log(`credentials - secret: ${request.payload.title} `);
      return h.redirect('/');
    }
  }
};

module.exports = Gallery;
