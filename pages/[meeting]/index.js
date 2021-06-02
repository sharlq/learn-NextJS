import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
const index = ({theMeeting}) => {
 /* let router = useRouter();
  let id = router.query.id;
  const [theMeeting, setTheMeeting] = useState({});
  useEffect(async () => {
    const res = await axios.get(`/api/singleMeeting?id=${id}`);
    await setTheMeeting(res.data[0]);
  }, []);*/
  return (
    <div>
      <img src={theMeeting[0].image} />
      <h1>{theMeeting[0]._id}</h1>
      <h2>{theMeeting[0].title}</h2>
      <h3>{theMeeting[0].address}</h3>
    </div>
  );
};
export const getStaticPaths = async () =>{
  const res = await fetch('http://localhost:3000/api/meetings');
  const meetings = await res.json();
  const paths = meetings.map(i=>{return{params:{meeting:i._id}}})
    return {
        fallback:false,
        paths
    }
} 
export const getStaticProps = async (context) => {
  console.log(context)
  let id = context.params.meeting;
  const res = await fetch(`http://localhost:3000/api/singleMeeting?id=${id}`);
  const theMeeting = await res.json();
  console.log(theMeeting)
  return {
    props: { theMeeting },
  };
};
export default index;
