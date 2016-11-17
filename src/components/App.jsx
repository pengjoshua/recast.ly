class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allVideos: window.exampleVideoData,
      currentVideoIndex: 0 
    };
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
