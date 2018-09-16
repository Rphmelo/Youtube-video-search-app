import React, { Component } from 'react';

class VideoList extends Component {

    constructor(props){
        super(props);
    }
    videoItens = this.props.videos.map(video => {
        return <VideoListItem video={video}/>
    });
    
    render(){
        console.log(this.props.videos.length);
        return (
            <ul className="col-md-4 list-group">
                {this.videoItens}
            </ul>
        )
    }
}

export default VideoList;