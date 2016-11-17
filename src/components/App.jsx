class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allVideos: this.props.searchYouTube,
      currentVideo: this.props.searchYouTube[0] 
    };
    // window.searchYouTube({key: window.YOUTUBE_API_KEY,
    //                       query: 'react tutorial',
    //                       max: 7
    //                      },
    //   this.callback.bind(this)  
    // );
  }

  changeCurrentVideo(video) {
    this.setState({
      currentVideo: video
    });
  }

  callback(allVideos) {
    console.log('allVideos', allVideos);
    this.setState({allVideos: allVideos});
  }

  searchVids(searchQuery) {
    // console.log('debounce');
    window.searchYouTube({key: window.YOUTUBE_API_KEY,
                          query: searchQuery,
                          max: 7
                         },
      this.callback.bind(this)  
    );
  }

  render() {
    return (
      <div>
        <Nav submitSearch={_.debounce(this.searchVids.bind(this), 500)} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList updateVideoPlayer={this.changeCurrentVideo.bind(this)} videos={this.state.allVideos} />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
