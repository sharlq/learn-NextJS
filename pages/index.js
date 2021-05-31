import Head from "next/head";
import styles from "../styles/Home.module.css";
import MeetupList from '../components/meetups/MeetupList'
import meetings from '../public/meetings'
export default function Home() {

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
