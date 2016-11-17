class App extends React.Component {
  constructor(props) {
    super(props);
    // console.log('WHAT THIS.PROPS IS', this.props.searchYouTube);
    this.state = {
      allVideos: window.exampleVideoData,
      currentVideoIndex: 0 
    };
    window.searchYouTube({key: window.YOUTUBE_API_KEY,
                          query: 'react',
                          max: 5
                         },
      this.callback.bind(this)  
    );

  }

  changeCurrentVideo(index) {
    console.log('function triggered with', index);
    if (typeof index === 'number') {
      this.setState({
        currentVideoIndex: index
      });
    } else {
      console.log('INDEX NOT A NUMBER');
    }
  }

  callback(allVideos) {
    console.log('allvids', allVideos.responseJSON.items);
    this.setState({allVideos: allVideos.responseJSON.items});
    console.log(this.state.allVideos);
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.allVideos[this.state.currentVideoIndex]} />
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
