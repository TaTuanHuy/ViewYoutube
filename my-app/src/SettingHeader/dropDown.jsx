import AElement from "../component/a"
import UserIcon from "../component/userIcons"
import Img from "../component/img"
import DropDown from "../component/dropDown"
// import Button from "../component/button"
function DropDownNotAuth(){
    return(
        <DropDown class="dropdown">
            <UserIcon class = "collapse d-flex justify-content-between dropdown-toggle"
                    id="navbarSupportedContent dropdownMenuButton"
                    dataToggle="dropdown"
            >
                <Img 
                width = "30px"
                height = "30px"
                class="rounded-circle"
                src = "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                alt = "Ảnh Youtube"
                />
            </UserIcon>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <AElement 
                    class="dropdown-item"
                    href="http://localhost:3000/SignIn"
                    value="Đăng Nhập"
                />
                <AElement 
                    class="dropdown-item"
                    href="http://localhost:3000/Register"
                    value="Đăng kí"
                />
            </div>
        </DropDown>
    )
}

function DropDownAuth(){
    return(
        <DropDown class="dropdown">
            <UserIcon class = "collapse d-flex justify-content-between dropdown-toggle"
                    id="navbarSupportedContent dropdownMenuButton"
                    dataToggle="dropdown"
            >
                <Img 
                width = "30px"
                height = "30px"
                class="rounded-circle"
                src = "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                alt = "Ảnh Youtube"
                />
            </UserIcon>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <AElement 
                    class="dropdown-item"
                    href="http://localhost:3000/profileUser"
                    value="Thông tin của bạn"
                />
                <AElement 
                    class="dropdown-item"
                    href="#"
                    value="Cài đặt"
                />
                <AElement 
                    class="dropdown-item"
                    href="#"
                    value="Chỉnh sửa Video của bạn"
                />
                <AElement 
                    class="dropdown-item"
                    href="#"
                    value="Đăng xuất"
                />
            </div>
        </DropDown>
    )
}

export {
    DropDownNotAuth,
    DropDownAuth
}