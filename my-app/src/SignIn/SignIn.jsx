import AElement from "../component/a"
import Input from "../component/input"
import Button from "../component/button"
import CheckLogin from "../checkLogin"
import { useState } from "react"

function SignIn () {
    const [state, setState] = useState({})
    return(
    <form class="mt-4" method = "POST" action="http://localhost:8000/login">
        <div class="form-group">
            <label for="Account">Tài khoản</label>
            <Input  
                name="user_name"
                id="Account"
                class="form-control"
                placeholder="Nhập vào tài khoản của bạn"  
                type="text"
            />
        </div>
        <div class="form-group">
            <label for="Password">Password</label>
            <Input 
                name="pass_word"
                type="password"
                class="form-control" 
                id="Password" 
                placeholder="Password"/>
        </div>
        <Button 
            type="submit" 
            class="btn btn-primary"
            value="Đăng nhập" />
        <CheckLogin />
    </form>
    )
}

export default SignIn

