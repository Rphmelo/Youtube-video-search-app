import React, { Component }  from "react";
import ReactDOM from "react-dom";
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

// Your Youtube API Key goes here
const YOUTUBE_API_KEY = "AIzaSyDIT1NrVC4RTfOOQsNPn9weCiBbFJD0_QU";

class App extends Component {
    constructor(props){
        super(props);
        this.state = { videos: []};
        
        YTSearch({key: YOUTUBE_API_KEY, term: 'reactjs'}, (videos) => {
            this.setState({videos});
        });
    }

    render(){
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));