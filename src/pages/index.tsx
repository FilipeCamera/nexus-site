import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nexus</title>
      </Head>
      <Navbar />
      <Hero />
    </div>
  )
}
