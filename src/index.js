// TODO: Render the `App` component to the DOM

// var callback = function(allVideos) {
//   console.log('ALLVIDEOS: ', allVideos);
//   return allVideos;
// };

// searchYouTube={
    // window.searchYouTube({key: window.YOUTUBE_API_KEY,
    //                       query: 'cats',
    //                       max: 5
    //                      },
    //   callback.bind(this)  
    // )
//   }

ReactDOM.render(
  <App />,
  document.getElementById('app'));