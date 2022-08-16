import React from "react";
import dark_side from "../../../../app/assets/images/dark_side.jpeg"

class CardIndexItem extends React.Component {
    constructor(props){
        super(props)
    }


    cardPicture () {
        if (this.props.cardType === "artist") {
            return (
                <img className="card-picture artist-card-pic" src={dark_side} alt="card picture" />
            )
        } else if (this.props.cardType === "album") {
            return (
                <img className="card-picture" src={ this.props.media.pictureUrl ? this.props.media.pictureUrl : dark_side} alt="card picure" />
            )
        } else {
            let cardStyle = {
                '--color-1': `${this.props.media.color_1}`, 
                '--color-2': `${this.props.media.color_2}`
            }
            return (
                <div className="card-picture playlist-card" style={cardStyle}>
                    <span className="material-symbols-outlined">queue_music</span>
                </div>
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
                        {this.props.media.name}
                    </p>
                    <p className="card-subtitle">
                    {this.props.media.artist}                    
                    </p>
                </div>
            )
        } else {
            return (
                <div className="card-text">
                    <p className="card-title">
                        {this.props.media.name}
                    </p>
                    <p className="card-subtitle">
                       By {this.props.media.user}
                    </p>
                </div>
            ) 
        }

    }
    

    render() {
        // console.log("Card index item props", this.props)
        if (!this.props.media) {
            return null
        } else {
        return (
            <div className={`card ${this.props.cardType}`}>
                    {this.cardPicture()}
                    {this.cardText()}
            </div>
             )
        }    
       
    }
}

export default CardIndexItem;