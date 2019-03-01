'use strict';

const Gallery = {
  index: {
    handler: async function(request, h) {
      return h.view('gallery', { title: 'List of Pictures' });
    }
  }
};

module.exports = Gallery;
