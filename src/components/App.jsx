class App extends React.Component { 
  constructor (props) {
    super(props);
    
    this.state = {
      currentVideo: window.exampleVideoData[0],
      videos: window.exampleVideoData
    };
    debugger;
    this.handleClick = this.handleClick.bind(this);
    this.getYouTubeVideos = this.getYouTubeVideos.bind(this);
  }

  componentDidMount() {
    this.getYouTubeVideos('cute kittens');
  }


  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query,
      max: 5
    };
    
    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      });
    }); 
  }

  handleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render () {
    return (
      <div>
        <Nav getVideos={this.getYouTubeVideos}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList handleClick={this.handleClick} videos={this.state.videos}/>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
