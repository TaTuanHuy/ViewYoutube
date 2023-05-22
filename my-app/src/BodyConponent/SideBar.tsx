import { useState, useEffect } from "react";
import AElement from "../component/a"

function SideBarBody (){
    return(
        <nav className="nav flex-column">
            <AElement class ="nav-link btn-light mt-3 rounded"
                      href = "#"
                      value = "Trang chủ"
            >
            </AElement>
            <AElement class ="nav-link btn-light mt-3 rounded"
                      href = "#"
                      value = "Thư viện"
            />
            <AElement class ="nav-link btn-light mt-3 rounded"
                      href = "#"
                      value = "Video đã xem"
            />
        </nav>
    )
}

export default SideBarBody;