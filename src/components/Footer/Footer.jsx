import React from 'react'
import ShipRyM from '../../assets/shiprym.svg'

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img
              className="w-10 h-10 text-white p-2 bg-white-500 rounded-full"
              src={ShipRyM}
              alt="ship Rick and Morty"
            />
            <span className="ml-3 text-xl">Rick and Morty</span>
          </a>
          <p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
          Rick and Morty is created by Justin Roiland and Dan Harmon for Adult Swim. The data and images are used without claim of ownership and belong to their respective owners. <br />
          This API is open source and uses a BSD license.
          </p>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 <br />
            Informatorio Chaco
            {/* <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@knyttneve</a> */}
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer