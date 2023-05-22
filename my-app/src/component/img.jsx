import { useState, useEffect } from "react";


function Img({...props}) {
    return (
        <img 
            style={{width: props.width,
                    height: props.height}}
            src={props.src}
            alt={props.alt}
            className={props.class}
        />
    )

}
export default Img