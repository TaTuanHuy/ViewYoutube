import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Img from "./img"

function DropDown(props){
    return(
        <div class={props.class}>
            {props.children}
        </div>
    )
}
export default DropDown