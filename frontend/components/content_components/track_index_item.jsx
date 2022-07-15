import React from "react";

class TrackIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isHovering: false
        };
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
        this.onMouseOffHandler = this.onMouseOffHandler.bind(this);
    }

    

    onMouseEnterHandler () {
        this.setState({
            isHovering: true
        })
    }
    onMouseOffHandler () {
        this.setState({
            isHovering: false
        })
    }
    
    render(){
        return (
            <li className="track-item" 
            onMouseOver={this.onMouseEnterHandler} 
            onMouseLeave={this.onMouseOffHandler}
            >
                <div className="track-item-left">
                    <div className="track-play-position" >
                        {this.state.isHovering ? <i className="fa fa-play" ></i> : (this.props.position + 1)}
                    </div>
                    <div className="track-text">
                        <p className="track-title">{this.props.track.name}</p>
                        <p className="track-subtitle">{this.props.artist[this.props.track.artist_id].name}</p>
                    </div>

                </div>
                <div className="track-item-right">
                    <div className="track-right-hoverables">
                        {this.state.isHovering ? <i className="fa fa-heart"></i> :"" }
                    </div>
                    <p>{this.props.track.duration}</p>
                    <div className="track-right-hoverables">
                        {this.state.isHovering ? <i className="fa fa-ellipsis-h"></i> :"" }
                    </div>                    
                </div>
            </li>
        )
    }
    

}



export default TrackIndexItem;