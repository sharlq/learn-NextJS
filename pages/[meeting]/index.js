import React,{useEffect,useState} from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'
const index = () => {
    let router = useRouter();
    let id =router.query.id
    const [theMeeting,setTheMeeting] = useState({})
    useEffect(async()=>{
     const res =  await axios.get(`/api/singleMeeting?id=${id}`)
        await setTheMeeting(res.data[0])
    },[])
    return (
        <div>
            <img src={theMeeting.image} />
            <h1>{theMeeting._id}</h1>
            <h2>{theMeeting.title}</h2>
            <h3>{theMeeting.address}</h3>
        </div>
    )
}

export default index
