var searchYouTube = (options, callback) => {
  

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: _.extend({part: 'snippet',
                     key: options.key,
                       q: options.query, 
              maxResults: options.max,
         videoEmbeddable: 'true',
                    type: 'video'
    }),
    success: function(data) {
      console.log('Recast.ly: successfully GET data', data);
      callback(data.items);
    },
    error: function(data) {
      console.log('Recast.ly: failed to GET data', data);
    }
  });
};

window.searchYouTube = searchYouTube;
