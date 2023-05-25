
import Input from "../component/input"
import Button from "../component/button"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Register () {
    const navigation = useNavigate()
    const [account, setAccount] = useState('')
    const [password, setPassword] = useState('')
    const [full_name, setFull_name] = useState('')
    const [user_id, setUserId] = useState('')


    function btnRegister(){
        const createUser = async () => {
            try{
                await axios.post("http://localhost:8000/register", {
                user_name : account,
                pass_word : password,
                full_name : full_name,
                user_id : user_id
            })
            navigation("/")
            }catch(error){
            navigation("/Register")
            }
        }
        createUser()
    }


    return(
    <form class="mt-4">
        <div class="form-group">
            <label for="Account">Tài khoản</label>
            <Input
                onChange={(e) => {setAccount(e.target.value)}}
                id="Account"
                name = "user_name"
                class="form-control"
                placeholder="Nhập vào tài khoản của bạn"  
                type="text"
            />
        </div>
        <div class="form-group">
            <label for="Password">Password</label>
            <Input 
                onChange={(e) => {setPassword(e.target.value)}}
                name = "pass_word"
                type="password"
                class="form-control" 
                id="Password" 
                placeholder="Password"/>
        </div>
        <div class="form-group">
            <label for="full_name">Tên của bạn</label>
            <Input 
                onChange={(e) => {setFull_name(e.target.value)}}
                name = "full_name"
                type="text"
                class="form-control" 
                id="full_name" 
                placeholder="Tạ Tuấn Huy"/>
        </div>
        <div class="form-group">
            <label for="user_id">User ID</label>
            <Input 
                onChange={(e) => {setUserId(e.target.value)}}
                name="user_id"
                type="text"
                class="form-control" 
                id="user_id" 
                placeholder="18"/>
        </div>
    
        <Button 
            onClick = {btnRegister}
            type="button" 
            class="btn btn-primary"
            value="Đăng kí" />
    </form>
    )
}

export default Register