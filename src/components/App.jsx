class App extends React.Component { 
  constructor (props) {
    super(props);
    console.log(props);
    this.state = {
      title: ''
    };
  }

  onClick() {
    console.log('clicked!');
    this.setState({
      title: window.exampleVideoData.snippet.title
    });
  }

  render () {
    console.log(this);
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={window.exampleVideoData[0]}/>
        </div>
        <div className="col-md-5">
          <VideoList onClick={this.onClick.bind(this)} videos={window.exampleVideoData}/>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
