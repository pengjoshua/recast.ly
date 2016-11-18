class AutoPlay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoplay: false
    };
  }

  onButtonClick() {
    console.log('clicked autoplay');
    this.setState({
      autoplay: !this.state.autoplay
    });
    this.props.changeAutoPlay();
  }

  render() {
    var style = {
      color: this.state.autoplay ? 'white' : '#999',
      backgroundColor: this.state.autoplay ? '#44a0e2' : 'white'
    };

    return (
      <div>
        <button className="autoplay" style={style} onClick={ this.onButtonClick.bind(this) } >AutoPlay</button>
      </div>
    );
  }
}



window.AutoPlay = AutoPlay;