import { useState, useEffect } from "react";

function Button ({...props}){
    return(
        <button
            onClick = {props.onClick}
            className = {props.class}
            type = {props.type}
        >
            {props.value}
        </button>
    )
}
export default Button;