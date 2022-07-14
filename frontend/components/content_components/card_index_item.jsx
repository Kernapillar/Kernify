import React from "react";
import dark_side from "../../../app/assets/images/dark_side.jpeg"

class CardIndexItem extends React.Component {
    constructor(props){
        super(props)
    }


    cardPicture () {
        if (this.props.cardType === "artjist") {
            return (
                <img className="card-picture artist-card-pic" src={dark_side} alt="card picture" />
            )
        } else {
            return (
                <img className="card-picture" src={dark_side} alt="card picure" />
            )
        }
    }

    cardText () {
        if (this.props.cardType === "artist") {
            return (
                <div className="card-text">
                    <p className="card-title">
                        {this.props.media.name}
                    </p>
                    <p className="card-subtitle">
                        Artist
                    </p>
                </div>
            )
        } else if (this.props.cardType === 'album') {
            return (
                <div className="card-text">
                    <p className="card-title">
                        {this.props.album.title}
                    </p>
                    <p className="card-subtitle">
                       {this.props.media.name}
                    </p>
                </div>
            )
        } else {
            return (
                <div className="card-text">
                    <p className="card-title">
                        {this.props.playlist.title}
                    </p>
                    <p className="card-subtitle">
                       By {this.props.user.username}
                    </p>
                </div>
            ) 
        }

    }
    

    render() {
        return (
            <div className={`card ${this.props.cardType}`}>
                    {this.cardPicture()}
                    {this.cardText()}
            </div>
        )
    }
}

export default CardIndexItem;