'use strict';

const cloudinary = require('cloudinary');

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
      this.cloudinaryCredentials.cloud_name = request.payload.name;
      this.cloudinaryCredentials.api_key = request.payload.key;
      this.cloudinaryCredentials.api_secret = request.payload.secret;

      cloudinary.config(this.cloudinaryCredentials);
      const result = await cloudinary.v2.api.resources();
      result.resources.forEach(image => {
        console.log(image.url);
      });
      return h.view('gallery', {
        title: 'Cloudinary Gallery',
        cloudinary: this.cloudinaryCredentials,
        images: result.resources.images
      });
    }
  },
  uploadFile: {
    handler: async function(request, h) {
      return h.redirect('/');
    }
  }
};

module.exports = Gallery;
