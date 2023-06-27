import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCharacters } from '../api';
import Loader from '../components/Loader';
import Error from '../components/Error';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await getCharacters();
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      setError('Error fetching characters');
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
      <h1>Character List</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Link to={`/personajes/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
