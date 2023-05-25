import Input from "../component/input"
import Button from "../component/button"
import CheckLogin from "../checkLogin"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

function SignIn () {
    const navigation = useNavigate()
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
   
   function getValue(){
        const token = async ()=>{
            try{
                    let value = await axios.post('http://localhost:8000/login', {
                    user_name: userName,
                    pass_word: password
                })
                localStorage.clear()
                localStorage.setItem('token', value.data)
                navigation("/")
            }catch(error){
                navigation("/SignIn")
            }
        }
        token()
   }

    return(
        <div>
            <div class="form-group">
                <label for="Account">Tài khoản</label>
                <Input  
                    onChange={(e) => setUserName(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                    name="pass_word"
                    type="password"
                    class="form-control" 
                    id="Password" 
                    placeholder="Password"
                    />
            </div>
            <Button 
                onClick={getValue} 
                type="button" 
                class="btn btn-primary"
                value="Đăng nhập" />
        </div>
    )
}

export default SignIn

