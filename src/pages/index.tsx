import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import Head from 'next/head'
import HeroTwo from "../components/HeroTwo";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nexus</title>
      </Head>
      <Navbar />
      <Hero />
      <HeroTwo />
    </div>
  )
}
