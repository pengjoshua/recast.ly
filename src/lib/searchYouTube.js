var searchYouTube = (options, callback) => {
  // var output;
  return $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: _.extend({part: 'snippet',
                     key: options.key,
                       q: options.query, 
              maxResults: options.max,
         videoEmbeddable: 'true',
                    type: 'video'
    }),
    // success: function(data) {
      // console.log('Recast.ly: successfully GET data', data);
      // output = callback(data.items);
      // console.log('result', result);
    // },
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
