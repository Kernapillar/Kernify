import React from "react";
import CardIndexItem from "./card_index_item";

const cardIndex = (mediaArr, cardType, preview=false) => {
    let className;
    if (preview === true) {
        className = "preview"
    } else {
        className = "index"
    }
        
    return (
        <div className={`${className}`}>
            <div className="card-grid">
                {mediaArr.map(media => <CardIndexItem key={media.id} media={media} cardType={`${cardType}`} />)}
            </div>
            
        </div>
    )
}

export default cardIndex;