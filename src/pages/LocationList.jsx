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
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
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
      <h1>Location List</h1>
      <input
        type="text"
        placeholder="Buscar ubicación"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Sortable
        items={filteredLocations}
        onSort={(isChecked) => setIsSorted(isChecked)}
        idField="id"
      />
      <ul>
        {filteredLocations.map((location) => (
          <li key={location.id}>
            <Link to={`/ubicaciones/${location.id}`}>{location.name}</Link>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePrevPage}>Anterior</button>
        <button onClick={handleNextPage}>Siguiente</button>
      </div>
    </div>
  );
};

export default LocationList ;