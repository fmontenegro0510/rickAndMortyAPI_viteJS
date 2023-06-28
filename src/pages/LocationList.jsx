import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getLocations } from '../utils/Api';
import Loader from '../components/Loader/Loader';
import Error from '../components/Error/Error';
import SortableList from '../utils/SortableList';

const LocationList = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await getLocations();
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

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
  }

  const sortedLocations = sortItems(isSorted, locations);

  return (
    <div>
      <h1>Location List</h1>
      <SortableList
        items={sortedLocations}
        onSort={(isChecked) => setIsSorted(isChecked)}
      />
      <ul>   
        {sortedLocations.map((location) => (
          <li key={location.id}>
            <Link to={`/ubicaciones/${location.id}`}>{location.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationList ;