import { useState, useEffect } from "react";

function Button ({...props}){
    return(
        <button
            className = {props.class}
            type = {props.type}
        >
            {props.value}
        </button>
    )
}
export default Button;