'use strict';

const Gallery = {
  index: {
    handler: async function(request, h) {
      return h.view('gallery', { title: 'Cloudinary Gallery' });
    }
  }
};

module.exports = Gallery;
