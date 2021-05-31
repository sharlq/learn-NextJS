import {useEffect,useState} from 'react'
import Head from "next/head";
import styles from "../styles/Home.module.css";
import MeetupList from '../components/meetups/MeetupList'
import axios from 'axios'
export default function Home() {
  const [meetings,setMeetings] = useState([]);
  useEffect( async()=>{
    let response = await axios.get('/api/meetings')
    await setMeetings(response.data)
    console.log(response.data)
  },[])

  return (
    <div className={styles.container}>
      
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="first Next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MeetupList meetups={meetings} />

    </div>
  );
}
