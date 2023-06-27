import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacter } from '../api';
import Loader from '../components/Loader';
import Error from '../components/Error';

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCharacter();
  }, [id]);

  const fetchCharacter = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await getCharacter(id);
      const data = await response.json();
      setCharacter(data);
    } catch (error) {
      setError('Error fetching character');
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
      <h1>Character Details</h1>
      {character && (
        <div>
          <h2>{character.name}</h2>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          {/* Render more character details */}
        </div>
      )}
    </div>
  );
};

export default CharacterDetails;
