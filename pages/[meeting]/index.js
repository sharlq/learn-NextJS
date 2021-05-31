import React from 'react'
import MeetupItem from '../../components/meetups/MeetupItem'
import meetings from '../../public/meetings'
import {useRouter} from 'next/router'
const index = () => {
    let router = useRouter();
    let id =router.query.id
let theMeeting = meetings.find((meeting)=>meeting.id === id)
    return (
        <div>
            <img src={theMeeting.image} />
            <h1>{theMeeting.id}</h1>
            <h2>{theMeeting.title}</h2>
            <h3>{theMeeting.address}</h3>
        </div>
    )
}

export default index
