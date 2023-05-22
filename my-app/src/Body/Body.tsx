import { render } from "@testing-library/react";
import { useState, useEffect } from "react";
import SideBarBody from "../BodyConponent/SideBar";


function Body(){
    return(
        <div className="row mt-4">
            <div className="col-sm-2">
                <SideBarBody />
            </div>
            <div className="col-sm-10">col-sm-10</div>
        </div>
    )
}

export default Body