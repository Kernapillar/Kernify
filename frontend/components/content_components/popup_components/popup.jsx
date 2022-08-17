import {React, useState, useEffect, useRef} from "react";


const Popup = (props) => {

    const [showing, setShowing] = useState(props.showing)

    useEffect(() => {
        if (showing) {

            setTimeout(() => setShowing(false), 2000)
        }


    })

    return (
        <>
            { showing ? (<p className="popup"> added to playlist</p>) : null}
        
        </>
    )

}

export default Popup