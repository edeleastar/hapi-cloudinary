'use strict';

const ImageStore = require('../utils/image-store');

const Gallery = {
  index: {
    handler: async function(request, h) {
      let allImages = [];
      let errorMessage = '';
      try {
        ImageStore.configure(this.cloudinaryCredentials);
        allImages = await ImageStore.getAllImages();
      } catch (e) {
        errorMessage = e;
      }
      return h.view('gallery', {
        title: 'Cloudinary Gallery',
        cloudinary: this.cloudinaryCredentials,
        images: allImages,
        error: errorMessage
      });
    }
  },
  updateCredentials: {
    handler: async function(request, h) {
      this.cloudinaryCredentials.cloud_name = request.payload.name;
      this.cloudinaryCredentials.api_key = request.payload.key;
      this.cloudinaryCredentials.api_secret = request.payload.secret;
      return h.redirect('/');
    }
  },
  deleteImage: {
    handler: async function(request, h) {
      ImageStore.deleteImage(request.params.id);
      return h.redirect('/');
    }
  },
  uploadFile: {
    handler: async function(request, h) {
      const file = request.payload.imagefile;
      if (Object.keys(file).length > 0) {
        await ImageStore.uploadImage(request.payload.imagefile);
        return h.redirect('/');
      }
      return h.view('gallery', {
        title: 'Cloudinary Gallery',
        cloudinary: this.cloudinaryCredentials,
        error: 'No file selected'
      });
    }
  }
};

module.exports = Gallery;
