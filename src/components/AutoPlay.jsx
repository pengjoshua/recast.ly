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
      color: this.state.autoplay ? '#5f00cc' : '#999',
      backgroundColor: this.state.autoplay ? '#44a0e2' : 'white',
      borderColor: this.state.autoplay ? '#3900cc' : '#999'
    };

    return (
      <div>
        <button className="autoplay" style={style} onClick={ this.onButtonClick.bind(this) } >Autoplay</button>
      </div>
    );
  }
}



window.AutoPlay = AutoPlay;