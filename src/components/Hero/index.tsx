import Image from 'next/image'

export default function Hero() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="absolute t-0 z-0 w-full h-screen bg-opacity-40 bg-black"></div>
      <div className="z-negative inset-0">
        <Image src="/assets/Sisal.jpg" layout="fill" className="object-cover" />
      </div>
      <div className="container z-10 flex flex-col w-full mx-auto items-center">
        <h4 className="font-light text-white text-xl font-sans xl:text-3xl">
          Seja bem-vindo ao
        </h4>
        <h1 className="my-5 text-blue-300 font-bold text-5xl xl:text-7xl font-sans">
          NEXUS
        </h1>
        <p className="font-extralight text-white text-base mx-4 xl:text-lg font-sans text-center xl:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas integer
          eget aliquet nibh.
        </p>
      </div>
    </div>
  )
}
