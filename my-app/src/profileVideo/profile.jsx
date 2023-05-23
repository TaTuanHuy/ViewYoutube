import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import Img from "../component/img"

function Profile (props) {
    const params = useParams();

    const [item, setItem] = useState('')

    useEffect(() => {
        const getData = async () => {
            try{
                const res = await axios.get(`http://localhost:8000/${params.id}`)
                setItem(res.data)
            }catch(error){
                console.log(error)
            }
    }
    getData()
}, [])

    const srcVideo = `https://www.youtube.com/embed/${item.video_id}`
    const srcImg = `https://i.ytimg.com/vi/${item.video_id}/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCKppUbDXKiAEJ6HVDT1SZfXZyNuA`
    return(
        <div class = "row">
            <div class="col-8">
                <iframe width="1025" height="500" src={srcVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <div class="ml-2">
                    <h2 class="mt-4">{item.video_name}</h2>
                    <div class="description">
                        <Img 
                        width = "40px"
                        height = "40px"
                        class="card-img-top img-profile rounded-circle" 
                        src={srcImg} alt="Card image cap"/>
                        <p class="ml-4">{item.video_description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
