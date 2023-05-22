import { useState, useEffect } from "react";
import Img from "./img"

function UserIcon(props){
    // const Avatar = props.renderAvatar;
    return(
        <div 
            className={props.class}
            id={props.id}
            data-toggle={props.dataToggle}
            >
            {props.children}
        </div>
    )
}

export default UserIcon
