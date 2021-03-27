import React, { useState } from "react";

export default function Navbar() {
  const [isOpenMenu, setIsOpenM] = useState(false);
  const [isOpenProjetos, setIsOpenP] = useState(false);
  return (
    <nav className="bg-transparent fixed top-0 w-full z-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-500 focus:outline-none"
              aria-controls="mobile-menu"
              onClick={() => setIsOpenM(!isOpenMenu)}
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex-shrink-0 flex items-center">
              <p className="font-normal text-white text-base">NEXUS</p>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4 mr-6">
                <a
                  href="#"
                  className="flex flex-row items-center text-white hover:bg-blue-400 hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-light"
                >
                  <div className="flex items-center justify-center w-5 h-5 mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  INSTITUIÇÃO
                </a>

                <a
                  href="#"
                  className="flex flex-row items-center text-white hover:bg-blue-400 hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-light"
                >
                  <div className="flex items-center justify-center w-5 h-5 mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  EQUIPE
                </a>

                <a
                  href="#"
                  className="flex flex-row items-center text-white hover:bg-blue-400 hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-light"
                >
                  <div className="flex items-center justify-center w-5 h-5 mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  GALERIA
                </a>

                <div className="relative">
                  <button
                    type="button"
                    className="w-full text-white group hover:bg-blue-400 hover:bg-opacity-20 rounded-md px-3 py-2 inline-flex items-center text-sm font-light focus:outline-none"
                    onClick={() => setIsOpenP(!isOpenProjetos)}
                  >
                    <div className="flex items-center justify-center w-5 h-5 mr-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>PROJETOS</span>

                    <svg
                      className="text-white ml-2 h-5 w-5 group-hover:text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>

                  <div
                    className={
                      isOpenProjetos
                        ? "absolute z-10 left-1/2 transform -translate-x-3/4 mt-3 px-2 w-screen max-w-md sm:px-0"
                        : "hidden"
                    }
                  >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-4 py-5 sm:gap-5 sm:p-5">
                        <a
                          href="#"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          <div className="text-orange-600 flex items-center justify-center w-5 h-5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M13 7H7v6h6V7z" />
                              <path
                                fillRule="evenodd"
                                d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-normal text-gray-900">
                              IndSus - Indicador de sustentabilidade
                            </p>
                            <p className="mt-1 text-xs text-gray-500">
                              Aplicativo desenvolvido para facilitar a pesquisa
                              em campo
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${isOpenMenu ? "sm:hidden" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="flex flex-row items-center text-white hover:bg-blue-400 hover:bg-opacity-20 block px-3 py-2 rounded-md text-sm font-light"
            aria-current="page"
          >
            <div className="flex items-center justify-center w-5 h-5 mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            INSTITUIÇÃO
          </a>

          <a
            href="#"
            className="flex flex-row items-center text-white hover:bg-blue-400 hover:bg-opacity-20 block px-3 py-2 rounded-md text-sm font-light"
          >
            <div className="flex items-center justify-center w-5 h-5 mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            EQUIPE
          </a>

          <a
            href="#"
            className="flex flex-row items-center text-white hover:bg-blue-400 hover:bg-opacity-20 block px-3 py-2 rounded-md text-sm font-light"
          >
            <div className="flex items-center justify-center w-5 h-5 mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            GALERIA
          </a>

          <div className="relative flex flex-col items-center">
            <button
              type="button"
              className="w-full text-white group hover:bg-blue-400 hover:bg-opacity-20 rounded-md px-3 py-2 inline-flex items-center text-sm font-light focus:outline-none"
              aria-expanded="false"
              onClick={() => setIsOpenP(!isOpenProjetos)}
            >
              <div className="flex items-center justify-center w-5 h-5 mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span>PROJETOS</span>

              <svg
                className="text-white ml-2 h-5 w-5 group-hover:text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <div
              className={
                isOpenProjetos ? "px-2 w-screen max-w-md sm:px-0" : "hidden"
              }
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  <a
                    href="#"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                  >
                    <div className="text-orange-600 flex items-center justify-center w-5 h-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M13 7H7v6h6V7z" />
                        <path
                          fillRule="evenodd"
                          d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">
                        IndSus - Indicador de Sustentabilidade
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        Aplicativo desenvolvido para facilitar a pesquisa em
                        campo
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
