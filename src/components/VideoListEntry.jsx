// var ytDurationFormat = require('youtube-duration-format');
// import as ytDurationFormat from 'youtube-duration-format';
//got from stack over flow... just styling
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


var VideoListEntry = (props) => (
 
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div onClick={ () => { props.updateVideoPlayer(props.video); } } className="video-list-entry-title">{props.video.snippet.title}</div>
      {/*<div className="video-list-entry-detail">{props.video.snippet.description}</div>*/}
      <div className="video-list-entry-detail">{props.video.statistics.viewCount + ' views'
      + ' - ' + parseDuration(props.video.contentDetails.duration)}</div>
    </div>
  </div>

);

// onClick={this.props.updateVideoPlayer(this.props.key)} 
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
