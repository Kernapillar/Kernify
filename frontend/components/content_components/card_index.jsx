import React from "react";
import CardIndexItem from "./card_index_item";
import { Link } from "react-router-dom";

const CardIndex = (props) => {
    let className;
    if (props.preview === true) {
        className = "preview"
    } else {
        className = "index"
    }
        
    // console.log("cardindex props: ", props)
    return (
        <div className={`${className}`}>
            <div className="card-grid">
                {/* if breaks check artist prop threading here! */}
                {props.mediaArr.map(media => 
                <Link to={`/${props.cardType}s/${(media.id)}`} key={`linkKey-${media.id}`}>
                    <CardIndexItem key={`${props.cardType}-${media.id}`} artist={props.artist} media={media} cardType={`${props.cardType}`} />
                </Link>
                )}
            </div>
            
        </div>
    )
}

export default CardIndex;