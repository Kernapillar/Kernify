import React from "react";
import {useState, useEffect, useRef} from "react";


const Popup = (props) => {

    const [showing, setShowing] = useState(false)

    useEffect(() => {
        props.receiveResponse();
        console.log("RESPONSE", props.response)

    }, [])
    
    useEffect(() => {
        if (props.response[0]) {
            setShowing(true)
            setTimeout(() => setShowing(false), 2000)
            setTimeout(() => props.clearResponse(), 3001)
            
        }
    }, [props.response[0]])

    return (
        <>
         <p onClick={() => console.log("RESPO", props)} className={`popup ${showing ? "popup-shown" : "popup-hidden"}`}> {`${props.response}`} </p>
            {/* <p onClick={() => console.log("RESPO", props)} className="popup"> {`${props.response}`} </p>  */}
            
        </>
        
            
    )

}

export default Popup