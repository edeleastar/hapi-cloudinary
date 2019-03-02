'use strict';

const Gallery = {
  index: {
    handler: async function(request, h) {
      return h.view('gallery', {
        title: 'Cloudinary Gallery',
        cloudinary: this.cloudinaryCredentials
      });
    }
  },
  updateCredentials: {
    handler: async function(request, h) {
      this.cloudinaryCredentials.name = request.payload.name;
      this.cloudinaryCredentials.key = request.payload.key;
      this.cloudinaryCredentials.secret = request.payload.secret;
      return h.redirect('/');
    }
  },
  uploadFile: {
    handler: async function(request, h) {
      return h.redirect('/');
    }
  }
};

module.exports = Gallery;
