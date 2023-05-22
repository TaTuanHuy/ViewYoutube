import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';


function Input ({...props}){
    // for (let prop in props) {
    //     console.log('prop item ' + prop.aria-label)
    // }
    return(
        <input 
            className={props.class}
            type={props.type}
            placeholder={props.placeholder}
        />
    )
}

export default Input