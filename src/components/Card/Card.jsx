import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({character}) => {

  const {id, name, status, species, gender, image } = character


  return (
    <>
    <section class="text-gray-600 body-font" key={id}>
      <div class="container px-5 py-24 mx-auto flex flex-wrap flex-col">
        <img class="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded" alt={name} src={image} />
        <div class="flex flex-col text-center w-full">
          <h1 class="text-xl font-medium title-font mb-4 text-gray-900">{name}</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">{species}</p>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">{gender}</p>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">{status}</p>
          <button>
        <Link to="/personajes">Volver</Link>
      </button>

        </div>
      </div>
    </section>
    </>
  );
}

export default Card