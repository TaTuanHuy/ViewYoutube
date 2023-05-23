import { useState, useEffect } from "react";

function Card (props){

    return (
        <div className="col-3 mt-4">
            <div 
            class={props.class}
            style={{width: props.width,
                height: props.height}}
            >
                {/* <img class="card-img-top" src="" alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div> */}
                {props.children}
            </div>
        </div>
    )
}
export default Card