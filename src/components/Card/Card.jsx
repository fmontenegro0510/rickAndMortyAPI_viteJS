import React from 'react'
import { Link } from 'react-router-dom';
import { goBack } from '../../utils/Navigator'

const Card = ({character}) => {

  const {id, name, status, species, gender, image, origin } = character



  return (
    <>
      <section className="text-gray-600 body-font" key={id}>
        <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 mb-10">
        <a className="text-blue-500 inline-flex items-center mt-4" onClick={goBack}>
          Volver Atrás
          {/* <Link to="/personajes">Volver</Link>  */}
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" alt={name} src={image} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{character.name}</div>
              <p className="text-gray-700 text-base">
                Origen: 
                <Link to={`/ubicaciones/${character.origin.name}`}> {character.origin.name}</Link>
              </p>
            </div>
            <div className="px-2 pt-4 pb-2">
              <span className="inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Género: {character.gender}
              </span>
              <span className="inline-block bg-cyan-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Status: {character.status}
              </span>
              <span className="inline-block bg-lime-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Species: {character.species}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Card