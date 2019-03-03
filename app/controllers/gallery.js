'use strict';

const cloudinary = require('cloudinary');
const fs = require('fs');
const util = require('util');

const writeFile = util.promisify(fs.writeFile);

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
      return h.view('gallery', {
        title: 'Cloudinary Gallery',
        cloudinary: this.cloudinaryCredentials,
        images: result.resources
      });
    }
  },
  deleteImage: {
    handler: async function(request, h) {
      await cloudinary.v2.uploader.destroy(request.params.id, {});
      const result = await cloudinary.v2.api.resources();
      return h.view('gallery', {
        title: 'Cloudinary Gallery',
        cloudinary: this.cloudinaryCredentials,
        images: result.resources
      });
    }
  },
  uploadFile: {
    handler: async function(request, h) {
      const title = request.payload.title;
      await writeFile('./public/temp.img', request.payload.imagefile);
      await cloudinary.uploader.upload('./public/temp.img');
      const result = await cloudinary.v2.api.resources();
      return h.view('gallery', {
        title: 'Cloudinary Gallery',
        cloudinary: this.cloudinaryCredentials,
        images: result.resources
      });
    }
  }
};

module.exports = Gallery;
