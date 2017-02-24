// TODO: Render the `App` component to the DOM

ReactDOM.render(<App searchYouTube={_.debounce(window.searchYouTube, 500)} API_KEY={window.YOUTUBE_API_KEY}/>, document.getElementById('app'));

