import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card/Card';

const Sortable = ({ items, onSort, idField }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setIsChecked(isChecked);
    onSort(isChecked);
  };

  return (
<>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Personajes</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">¡Prepárate para conocer a los personajes más locos y divertidos! Desde el genio científico Rick hasta su valiente nieto Morty, junto con una variedad de alienígenas y criaturas interdimensionales. En nuestra página, descubrirás un universo lleno de humor y caos.</p>
    </div>

    <label>
        Ordenar alfabéticamente:
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </label>
    <div className="flex flex-wrap -m-2">
      {items.map((character) => (
        <div className="p-2 lg:w-1/4 md:w-1/2 w-full" key={character.id}>
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={character.image}  alt={character.name} />
          <div className="flex-grow">
          <Link to={`/personajes/${character.id}`}>
            <h2 className="text-gray-900 title-font font-medium">{character.name}</h2>
            <p className="text-gray-500">{character.species}</p>
            </Link>
          </div>
        </div>
      </div>
      ))}




    </div>
  </div>
</section>

</>
  );
};

export default Sortable;
