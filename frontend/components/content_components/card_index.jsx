import React from "react";
import CardIndexItem from "./card_index_item";

const CardIndex = (props) => {
    let className;
    if (props.preview === true) {
        className = "preview"
    } else {
        className = "index"
    }
        
    console.log("cardindex props: ", props)
    return (
        <div className={`${className}`}>
            <div className="card-grid">
                {/* if breaks check artist prop threading here! */}
                {props.mediaArr.map(media => <CardIndexItem key={media.id} artist={props.artist} media={media} cardType={`${props.cardType}`} />)}
            </div>
            
        </div>
    )
}

export default CardIndex;