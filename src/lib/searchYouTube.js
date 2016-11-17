var searchYouTube = (options, callback) => {
  // var output;
  return $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: _.extend({part: 'snippet',
                     key: window.YOUTUBE_API_KEY,
                       q: options.query, 
              maxResults: '5',
         videoEmbeddable: 'true',
                    type: 'video'
    }),
    error: function(data) {
      console.log('Recast.ly: failed to GET data', data);
    },
    complete: function(data) {
      console.log('Recast.ly: successfully GET data', data);
      return callback(data);
    }
  });
};

window.searchYouTube = searchYouTube;
