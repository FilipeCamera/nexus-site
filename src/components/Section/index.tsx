import Image from 'next/image'

export default function Section() {
  return (
    <div className="flex flex-col items-center justify-around py-5 px-5 lg:px-8 lg:flex-row">
      <div className="flex flex-col items-center xl:w-1/2">
        <div className="lg:border-b-0 lg:w-full border-b w-4/5 flex items-center justify-center">
          <h2 className="font-sans text-gray-800 font-medium my-2 text-lg lg:text-2xl">
            Sobre Nós
          </h2>
        </div>
        <p className="font-sans text-gray-600 py-4 xl:py-0 xl:text-center text-justify text-sm xl:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae
          sapien pellentesque habitant morbi tristique senectus. Cras semper
          auctor neque vitae tempus quam pellentesque nec nam. Quis viverra nibh
          cras pulvinar mattis nunc sed blandit. Nulla porttitor massa id neque
          aliquam vestibulum. Semper quis lectus nulla at volutpat diam ut
          venenatis tellus. Lorem donec massa sapien faucibus et molestie ac.
          Eget duis at tellus at urna.
        </p>
      </div>
      <div className="w-full xl:w-2/5">
        <Image
          src="/assets/logoNexus.png"
          width="100%"
          height="100%"
          layout="responsive"
          className="object-cover"
        />
      </div>
    </div>
  )
}
