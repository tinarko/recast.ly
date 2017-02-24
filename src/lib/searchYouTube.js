var searchYouTube = ({key, query, max = 5}, callback) => {
  // TODO
  // $.ajax({
  //   url: 'https://www.googleapis.com/youtube/v3/search',
  //   type: 'GET',
  //   data: {
  //     part: 'snippet',
  //     key: options.key,
  //     q: options.query,
  //     maxResults: options.max,
  //     type: 'video',
  //     videoEmbeddable: 'true'
  //   },
  //   success: function(data) {
  //     callback(data.items);
  //   },
  //   fail: function() {
  //     console.log(':(');
  //   }
  // });
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
  .done(({items}) => {
    if (callback) {
      callback(items);
    }
  })
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) => console.error(err));
  });
};

window.searchYouTube = searchYouTube;
