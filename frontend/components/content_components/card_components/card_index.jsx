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
        

    return (
        <div className={`${className}`}>
            <div className="card-grid">
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