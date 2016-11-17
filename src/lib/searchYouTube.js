var searchYouTube = (options, callback) => {
  // var output;
  return $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: _.extend({part: 'snippet',
                     key: window.YOUTUBE_API_KEY,
                       q: options.query, 
              maxResults: options.max,
         videoEmbeddable: 'true',
                    type: 'video'
    }),
    error: function(data) {
      console.log('Recast.ly: failed to GET data', data);
    },
    complete: function(data) {
      console.log('Recast.ly: successfully GET data', data.responseJSON.items);
      // data = data.responseJSON.items;
      // return callback(getVideoDetails(data.responseJSON.items));
      var snippetData = data.responseJSON.items;

      var allVideoID = _.reduce(data.responseJSON.items, function(accum, video) {
        accum.push(video.id.videoId);
        return accum;
      }, []).join(',');
      console.log('video IDs', allVideoID);

      return $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/videos',
        type: 'GET',
        data: _.extend({part: 'contentDetails,statistics',
                     key: window.YOUTUBE_API_KEY,
                      id: allVideoID
      }),
        error: function(data) {
          console.log('Recast.ly: failed to GET videos', data);
        },
        complete: function(data) {
          console.log('Recast.ly: successfully GET videos', data.responseJSON.items);
          var newData = _.reduce(snippetData, function(accum, video, index) {
            var newObject = _.extend(video, data.responseJSON.items[index]);
            accum.push(newObject);
            return accum;
          }, []);
          return callback(newData);
        }
      });
    }
  });
};

// var getVideoDetails = (dataArray) => {
//   // string: comma seperated list of video ids form ajax get request
//   var allVideoID = _.reduce(dataArray, function(accum, video) {
//     accum.push(video.id.videoId);
//     return accum;
//   }, []).join(',');
//   console.log('video IDs', allVideoID);

//   return $.ajax({
//     url: 'https://www.googleapis.com/youtube/v3/videos',
//     type: 'GET',
//     data: _.extend({part: 'snippet,contentDetails,statistics',
//                      key: window.YOUTUBE_API_KEY,
//                       id: allVideoID
//     }),
//     error: function(data) {
//       console.log('Recast.ly: failed to GET videos', data);
//     },
//     complete: function(data) {
//       console.log('Recast.ly: successfully GET videos', data.responseJSON.items);
//       return data.responseJSON.items;
//     }
//   });
//   // contentDetails, statistics
//   // filers: id
// };

window.searchYouTube = searchYouTube;
