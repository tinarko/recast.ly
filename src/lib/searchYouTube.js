var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      key: options.key,
      q: options.query,
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: 'true'
    },
    success: function(data) {
      callback(data.items);
    },
    fail: function() {
      console.log(':(');
    }
  });
};

window.searchYouTube = searchYouTube;
