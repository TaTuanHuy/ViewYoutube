import { useState, useEffect } from "react";
import axios from "axios"
import Card from "../component/Card"
import Img from "../component/img"
import AElement from "../component/a";
import { Outlet, Link } from "react-router-dom";

function BodyContent (){
    const [videoItem, videoSetting] = useState([])

    useEffect(() => {
        const getData = async() => {
            try{
                const res = await axios.get('http://localhost:8000/')
                videoSetting(res.data)
            }catch(error){
                console.log(error)     
            }
        }
        getData()
        }
        ,[])

    return(
            <div className="row">
                {
                    videoItem.map( (item) => {
                        const src = `https://i.ytimg.com/vi/${item.video_id}/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCKppUbDXKiAEJ6HVDT1SZfXZyNuA`
                        const link = `/${item.video_id}`
                        return(
                        <Card class = "card"
                              width = "18rem">
                            <Img 
                                class = "card-img-top"
                                src = {src}
                            />
                            <div class="card-body">
                                <h5 class="card-title">{item.video_name}</h5>
                                <p class="card-text">{item.video_description}</p>
                                    <Link to={link}>Xem ngay</Link>
                            </div>
                        </Card> )
                    }
                    )
                }
            </div>
    )
}
export default BodyContent