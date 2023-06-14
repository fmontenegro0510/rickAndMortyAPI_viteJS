import React from 'react'
import RickLogo from '../../assets/rick-sanchez.svg'
import MortyLogo from '../../assets/morty-smith.svg'
import Github from '../../assets/github.svg'
const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <a
              href="https://rickandmortyapi.com/documentation"
              className="mr-5 hover:text-gray-900"
              target="_blank"
            >
              API Documentation
            </a>
          </nav>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <img src={RickLogo} alt="Rick Sanchez" />
            <span className="ml-3 text-xl">Rick and Morty</span>
            <img src={MortyLogo} alt="Morty Smith" />
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <a href="https://github.com/fmontenegro0510/rickAndMortyAPI_viteJS" target="_blank">
              <button
                type="button"
                className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
              >
                <img src={Github} alt="Github" /> Github{" "}
              </button>
            </a>
          </div>
        </div>
      </header>
      <hr />
    </>
  );
}

export default Header