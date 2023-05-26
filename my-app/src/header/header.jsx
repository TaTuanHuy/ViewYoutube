import { render } from "@testing-library/react";
import { useState, useEffect, createContext, useContext } from "react";
import Input from "../component/input"
import Button from "../component/button";
import AElement from "../component/a"
import UserIcon from "../component/userIcons"
import Img from "../component/img"
import DropDown from "../component/dropDown"
import { DropDownNotAuth, DropDownAuth } from "../SettingHeader/dropDown"
import AuthContext from "../checkAuth/auth"


function Header() {



    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-around">
            <AElement 
                class="navbar-brand d-flex align-items-center"
                href="http://localhost:3000/"
                value="Youtube"
            >
                <Img
                    class = "ml-4"
                    width = "50px"
                    height = "30px"
                    src = "https://cdn.pixabay.com/photo/2016/11/19/03/08/youtube-1837872_960_720.png"
                />
            </AElement>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse d-flex justify-content-between" id="navbarSupportedContent">
                <form class="form-inline my-2 my-lg-0 d-flex justify-content-center">
                    <Input 
                        class="form-control mr-sm-2 rounded" 
                        type="search" 
                        placeholder="Search"
                    />

                    <Button
                        class="btn btn-outline-success my-2 my-sm-0" 
                        type="submit"
                        value="Search"
                    />
                    
                </form>
            </div>

            {/* {auth ? <DropDownAuth />: <DropDownNotAuth />} */}
            <DropDownAuth />
        </nav>
    )
}

export default Header
