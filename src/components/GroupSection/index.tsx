export default function GroupSection() {
  return (
    <div className="flex flex-col items-center my-10">
      <div className="border-gray-400 border-b w-4/5 border-opacity-40">
        <h2 className="font-sans font-medium text-lg text-gray-800 text-center my-1 lg:text-2xl">
          Equipe
        </h2>
      </div>
      <div className='flex w-4/5 lg:w-auto'>
        <h1 className='font-sans font-regular text-base text-center my-8'>UFRB - Universidade Federal do Recôncavo da Bahia</h1>
      </div>
      <div id="container" className="w-4/5 mx-auto">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/4 p-2">
            <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
              <div className="mb-3">
                <img
                  className="w-auto mx-auto rounded-full"
                  src="https://i.pravatar.cc/150?img=66"
                  alt=""
                />
              </div>
              <h2 className="text-xl font-medium text-gray-800">Pande Muliada</h2>
              <span className="text-orange-600 block mb-5">Front End Developer</span>
            </div>
          </div>
          <div className="sm:w-1/4 p-2">
            <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
              <div className="mb-3">
                <img
                  className="w-auto mx-auto rounded-full"
                  src="https://i.pravatar.cc/150?img=31"
                  alt=""
                />
              </div>
              <h2 className="text-xl font-medium text-gray-800">Saraswati Cahyati</h2>
              <span className="text-orange-600 block mb-5">Back End Developer</span>
            </div>
          </div>
          <div className="sm:w-1/4 p-2">
            <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
              <div className="mb-3">
                <img
                  className="w-auto mx-auto rounded-full"
                  src="https://i.pravatar.cc/150?img=18"
                  alt=""
                />
              </div>
              <h2 className="text-xl font-medium text-gray-800">Wayan Alex</h2>
              <span className="text-orange-600 block mb-5">Data Scientist</span>
            </div>
          </div>
          <div className="sm:w-1/4 p-2">
            <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
              <div className="mb-3">
                <img
                  className="w-auto mx-auto rounded-full"
                  src="https://i.pravatar.cc/150?img=28"
                  alt=""
                />
              </div>
              <h2 className="text-xl font-medium text-gray-800">Ketut Julia</h2>
              <span className="text-orange-500 block mb-5">Project Manager</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
