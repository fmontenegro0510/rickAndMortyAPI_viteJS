import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getLocations } from '../utils/Api';
import Loader from '../components/Loader/Loader';
import Error from '../components/Error/Error';
import Sortable from '../utils/SortableListLocation';

const LocationList = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isSorted, setIsSorted] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);


  useEffect(() => {
    fetchLocations();
  }, [page]);

  const fetchLocations = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await getLocations(page);
      const data = await response.json();
      setLocations(data.results);
    } catch (error) {
      setError('Error fetching locations');
    } finally {
      setLoading(false);
    }
  };

  const sortItems = (isChecked, items) => {
    if (isChecked) {
      const sortedItems = [...items].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      return sortedItems;
    }
    return items;
  };

  const handleNextPage = () => {
    page >= 1 && page <= 6 ? setPage((prevPage) => prevPage + 1) : null;
  };

  const handlePrevPage = () => {
    page > 1 && page <= 7 ? setPage((prevPage) => prevPage - 1) : null;
  };


  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
  }

  const sortedLocations = sortItems(isSorted, locations);

  const filteredLocations = sortedLocations.filter((location) =>
  location.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div>

<div className="flex flex-col text-center w-full mb-20 mt-10">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Ubicaciones
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        ¡Prepárate para saltar entre dimensiones y descubrir lugares tan extraños como Blips and Chitz, la Ciudadela de Ricks y el Planeta Gazorpazorp en el increíble universo de Rick and Morty!        </p>
      </div>

      <div className="relative max-w-sm mx-auto mt-20">
        <input id='input'
          className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          type="search"
          placeholder="Buscar ubicación"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z"
            />
          </svg>
        </button>
      </div>


      <Sortable
        items={filteredLocations}
        onSort={(isChecked) => setIsSorted(isChecked)}
        idField="id"
      />
      <div className="flex justify-center items-center">
        <h2 className="text-gray-900 title-font font-medium mr-1">
          {" "}
          <button onClick={handlePrevPage}>Anterior</button>
        </h2>
        <div className="text-slate-500"> {page} / 7 </div>
        <h2 className="text-gray-900 title-font font-medium ml-2">
          <button onClick={handleNextPage}> Siguiente </button>
        </h2>
      </div>
    </div>
  );
};

export default LocationList ;