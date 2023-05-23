import { useState, useEffect } from "react"
import axios from "axios"

function CheckLogin(){
    const [state, setState] = useState({
        username: "",
        password: "",
    })
    const [token, setToken] = useState('')

    useEffect(() => {
        const getData = async () => {
            try{
                const res = await axios.post(`http://localhost:8000/login`, {
                    // username: state.username,
                    // password: state.password,
                    username: 'Huy1',
                    password: 'Huy02012002',
                    
                })
                // setToken(res.data)
                console.log(res.data)
                localStorage.setItem('token', JSON.stringify(res.data));
            }catch(error){
                console.log(error)
            }
    }

    getData()
}, [])

    return(
        <div>Test</div>
    )
}

export default CheckLogin