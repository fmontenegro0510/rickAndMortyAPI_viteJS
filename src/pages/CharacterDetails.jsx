import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacter } from '../utils/Api';
import Loader from '../components/Loader/Loader';
import Error from '../components/Error/Error';

import Card from '../components/Card/Card';

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
    // const {id, name, status, species, gender, image } = character
    <div>
      {character && (
         <Card character={character}  key={character.id} />
      )}
    </div>
  );
};

export default CharacterDetails;
