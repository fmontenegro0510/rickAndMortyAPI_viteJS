import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getLocationByName } from '../utils/Api';
import Loader from '../components/Loader/Loader';
import Error from '../components/Error/Error';

const LocationDetailsByName = () => {
  const { name } = useParams();
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  console.log(name)
  useEffect(() => {
    fetchLocation();
  }, []);

  const fetchLocation = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await getLocationByName(name);
      const data = await response.json();
      setLocation(data);
    } catch (error) {
      setError('Error fetching location');
    } finally {
      setLoading(false);
    } 
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div>
      <h1>Location Details</h1>
      {location && (
        <div>
          <h2>{location.name}</h2>
          <p>Type: {location.type}</p>
          <p>Dimension: {location.dimension}</p>
        </div>
      )}
    </div>
  );
};

export default LocationDetailsByName;