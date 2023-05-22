import { useState, useEffect } from "react";

function AElement (props){
    return(
        <a 
            className={props.class}
            href={props.href}

        >{props.children}
            {props.value}
        </a>
    )
}

export default AElement
