import {useState} from 'react';

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import Head from 'next/head'
import Section from "../components/Section";
import dynamic from "next/dynamic";

export default function Home() {
  const [active, setActive] = useState(false)
  const ScrollComponent = dynamic(() => import('../components/Scroll'), {ssr: false})
  return (
    <div>
      <Head>
        <title>Nexus</title>
      </Head>
      <ScrollComponent setActive={setActive}/>
      <Navbar scrollActive={active}/>
      <Hero />
      <Section />
    </div>
  )
}
