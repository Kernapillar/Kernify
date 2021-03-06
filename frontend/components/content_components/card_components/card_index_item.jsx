import React from "react";
import dark_side from "../../../../app/assets/images/dark_side.jpeg"

class CardIndexItem extends React.Component {
    constructor(props){
        super(props)
        // console.log("this is what the card item props looks like",this.props.media)
    }


    cardPicture () {
        if (this.props.cardType === "artist") {
            return (
                <img className="card-picture artist-card-pic" src={dark_side} alt="card picture" />
            )
        } else {
            return (
                <img className="card-picture" src={ this.props.media.pictureUrl ? this.props.media.pictureUrl : dark_side} alt="card picure" />
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
            // console.log("media peek for playlist: ", this.props)
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