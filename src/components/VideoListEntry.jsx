// var ytDurationFormat = require('youtube-duration-format');
// import as ytDurationFormat from 'youtube-duration-format';
// got from stack overflow... just styling
var parseDuration = function(e) { 
  var n = e.replace(/D|H|M/g, ':').replace(/P|T|S/g, '').split(':'); 
  if (1 === n.length) {
    2 !== n[0].length && (n[0] = '0' + n[0]), n[0] = '0:' + n[0];
  } else {
    for (var r = 1, l = n.length - 1; l >= r; r++) {
      2 !== n[r].length && (n[r] = '0' + n[r]);
    }
    return n.join(':');
  }
};


// var VideoListEntry = (props) => (
 
//   <div className="video-list-entry VLE" onClick={ () => { props.updateVideoPlayer(props.video); } } >
//     <div className="media-left media-middle">
//       <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
//     </div>
//     <div className="media-body">
//       <div className="video-list-entry-title">{props.video.snippet.title}</div>
//       <div className="video-list-entry-detail VLE">{props.video.snippet.description}</div>
//       <div className="video-list-entry-detail VLE">{props.video.statistics.viewCount + ' views'
//       + ' - ' + parseDuration(props.video.contentDetails.duration)}</div>
//     </div>
//   </div>

// );

class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  onMouseIn() {
    console.log('hovering!');
    // event.stopPropagation();
    this.setState({
      hover: true
    });
  }

  onMouseOut() {
    console.log('not hovering!');
    this.setState({
      hover: false
    });
  }

  render() {
    var style = {
      color: this.state.hover ? 'white' : '#999',
      backgroundColor: this.state.hover ? '#e62117' : 'white'
    };

    var titleStyle = {
      color: this.state.hover ? 'white' : 'black',
      backgroundColor: this.state.hover ? '#e62117' : 'white'
    };

    return (
      <div style={titleStyle} className="video-list-entry" onMouseEnter={ this.onMouseIn.bind(this) } onMouseLeave={ this.onMouseOut.bind(this) } onClick={ () => { this.props.updateVideoPlayer(this.props.video); } } >
        <div className="media-left media-middle">
          <img className="media-object" src={this.props.video.snippet.thumbnails.default.url} alt="" />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title">{this.props.video.snippet.title}</div>
          <div style={style} className="video-list-entry-detail">{this.props.video.snippet.description}</div>
          <div style={style} className="video-list-entry-detail">{this.props.video.statistics.viewCount + ' views'
          + ' - ' + parseDuration(this.props.video.contentDetails.duration)}</div>
        </div>
      </div>
    );
  }
}

// onClick={this.props.updateVideoPlayer(this.props.key)} 
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
