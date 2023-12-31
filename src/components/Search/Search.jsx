import React from 'react'

const Search = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              ubba lubba dub dub, Ingrese el nombre del personaje que desea
                buscar{" "}
              </h1>
              <p className=" mx-auto leading-relaxed text-base">
                Wubba lubba dub dub, Ingrese el nombre del personaje que desea
                buscar
              </p>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Buscar
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Search