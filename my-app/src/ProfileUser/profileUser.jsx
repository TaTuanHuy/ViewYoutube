import Input from "../component/input"
import Button from "../component/button"
import { useState, useEffect } from "react";
import axios from "axios"
function ProfileUser(props){

    const [data, setData] = useState({})

    useEffect(() =>{
        // console.log(localStorage.getItem('token'))
        const token = localStorage.getItem('token')
        const profile = async ()=>{
            try{
                    let value = await axios.post('http://localhost:8000/profileUser', { token })
                    setData(value.data)
                    console.log(value.data)
            }catch(error){
                console.log(error)
            }
        }
        profile()
    },[])

    const [user_name, setUserName] = useState('')
    const [passWord, setPasWord] = useState('')
    const [fullName, setFullName] = useState('')
    const [userId, setUserId] = useState('')


    return(
        <div>
            <div class="form-group">
                <label for="Account">Account</label>
                <Input  
                    onChange = {(e)=>{setUserName(e.target.value)}}
                    value={data.user_name}
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
                    onChange = {(e)=>{setPasWord(e.target.value)}}
                    value={data.pass_word}
                    name="pass_word"
                    type="text"
                    class="form-control" 
                    id="Password" 
                    placeholder="Password"
                />
            </div>
            <div class="form-group">
                <label for="full_name">Tên đầy đủ</label>
                <Input  
                    onChange = {(e)=>{setFullName(e.target.value)}}
                    value={data.full_name}
                    name="user_name"
                    id="full_name"
                    class="form-control"
                    placeholder="Nhập vào tài khoản của bạn"  
                    type="text"
                />
            </div>
            <div class="form-group">
                <label for="user_id">UserId</label>
                <Input  
                    onChange = {(e)=>{setUserId(e.target.value)}}
                    value={data.user_id}
                    name="user_name"
                    id="user_id"
                    class="form-control"
                    placeholder="Nhập vào tài khoản của bạn"  
                    type="text"
                />
            </div>
            <Button 
                type="button" 
                class="btn btn-primary"
                value="Sửa" />
        </div>
    )
}

export default ProfileUser