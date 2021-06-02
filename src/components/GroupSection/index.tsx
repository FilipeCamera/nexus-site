import { useState } from 'react'

export default function GroupSection() {
  const [active, setActive] = useState(false)
  return (
    <div className="flex flex-col items-center my-10">
      <div className="border-gray-400 border-b w-4/5 border-opacity-40">
        <h2 className="font-sans font-medium text-lg text-gray-800 text-center my-1 lg:text-2xl">
          Equipe
        </h2>
      </div>
      <div className="flex w-4/5 lg:w-auto">
        <h1 className="font-sans font-regular text-base text-center my-8 text-gray-800">
          UFRB - Universidade Federal do Recôncavo da Bahia
        </h1>
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
              <h2 className="font-medium text-gray-800 text-base">
                Dra. Ana Cristina Fermino Soares
              </h2>
              <span className="text-orange-600 block mb-5 text-sm">
                Front End Developer
              </span>
            </div>
          </div>
          <div className="sm:w-1/4 p-2">
            <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
              <div className="mb-3">
                <img
                  className="w-auto mx-auto rounded-full"
                  src="https://i.pravatar.cc/150?img=66"
                  alt=""
                />
              </div>
              <h2 className="text-base font-medium text-gray-800">
                Dra. Franceli da Silva
              </h2>
              <span className="text-orange-600 text-sm block mb-5">
                Front End Developer
              </span>
            </div>
          </div>
          <div className="sm:w-1/4 p-2">
            <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
              <div className="mb-3">
                <img
                  className="w-auto mx-auto rounded-full"
                  src="https://i.pravatar.cc/150?img=66"
                  alt=""
                />
              </div>
              <h2 className="text-base font-medium text-gray-800">Dra. Cintia Armond</h2>
              <span className="text-orange-600 text-sm block mb-5">
                Front End Developer
              </span>
            </div>
          </div>
          <div className="sm:w-1/4 p-2">
            <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
              <div className="mb-3">
                <img
                  className="w-auto mx-auto rounded-full"
                  src="https://i.pravatar.cc/150?img=66"
                  alt=""
                />
              </div>
              <h2 className="text-base font-medium text-gray-800">Dra. Camila</h2>
              <span className="text-orange-600 text-sm block mb-5">
                Front End Developer
              </span>
            </div>
          </div>
        </div>
        {active ? (
          <>
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
                  <h2 className="text-base font-medium text-gray-800">
                    Dr. Júlio César Azevedo Nóbrega
                  </h2>
                  <span className="text-orange-600 text-sm block mb-5">
                    Front End Developer
                  </span>
                </div>
              </div>
              <div className="sm:w-1/4 p-2">
                <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
                  <div className="mb-3">
                    <img
                      className="w-auto mx-auto rounded-full"
                      src="https://i.pravatar.cc/150?img=66"
                      alt=""
                    />
                  </div>
                  <h2 className="text-base font-medium text-gray-800">
                    Dr. Júlio César Azevedo Nóbrega
                  </h2>
                  <span className="text-orange-600 text-sm block mb-5">
                    Front End Developer
                  </span>
                </div>
              </div>
              <div className="sm:w-1/4 p-2">
                <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
                  <div className="mb-3">
                    <img
                      className="w-auto mx-auto rounded-full"
                      src="https://i.pravatar.cc/150?img=66"
                      alt=""
                    />
                  </div>
                  <h2 className="text-base font-medium text-gray-800">
                    Dr. Júlio César Azevedo Nóbrega
                  </h2>
                  <span className="text-orange-600 text-sm block mb-5">
                    Front End Developer
                  </span>
                </div>
              </div>
              <div className="sm:w-1/4 p-2">
                <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
                  <div className="mb-3">
                    <img
                      className="w-auto mx-auto rounded-full"
                      src="https://i.pravatar.cc/150?img=66"
                      alt=""
                    />
                  </div>
                  <h2 className="text-base font-medium text-gray-800">
                    Dr. Júlio César Azevedo Nóbrega
                  </h2>
                  <span className="text-orange-600 text-sm block mb-5">
                    Front End Developer
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center">
              <div className="sm:w-1/4 p-2">
                <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
                  <div className="mb-3">
                    <img
                      className="w-auto mx-auto rounded-full"
                      src="https://i.pravatar.cc/150?img=66"
                      alt=""
                    />
                  </div>
                  <h2 className="text-base font-medium text-gray-800">
                    Dr. Carlos Alfredo Lopes de Carvalho
                  </h2>
                  <span className="text-orange-600 text-sm block mb-5">
                    Front End Developer
                  </span>
                </div>
              </div>
              <div className="sm:w-1/4 p-2">
                <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
                  <div className="mb-3">
                    <img
                      className="w-auto mx-auto rounded-full"
                      src="https://i.pravatar.cc/150?img=66"
                      alt=""
                    />
                  </div>
                  <h2 className="text-base font-medium text-gray-800">
                    Dr. José Fernandes de Melo Filho
                  </h2>
                  <span className="text-orange-600 text-sm block mb-5">
                    Front End Developer
                  </span>
                </div>
              </div>
            </div>
          </>
        ) : null}
        </div>
        <div className="py-5">
          <div
            onClick={() => setActive(!active)}
            className="hover:text-orange-700 flex items-center justify-center text-orange-600 shadow-lg w-10 h-10 rounded-full transition duration-200 cursor-pointer"
          >
            {active === false ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            )}
          </div>
      </div>
    </div>
  )
}
