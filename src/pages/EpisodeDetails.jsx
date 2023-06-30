import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEpisode, getCharactersByEpisode } from '../utils/Api';
import Loader from '../components/Loader/Loader';
import Error from '../components/Error/Error';

const EpisodeDetails = () => {
  const { id } = useParams();
  const [characters, setCharacters] = useState([]);
  const [episode, setEpisode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchEpisode();
    fetchCharacters();

  }, [id]);

  const fetchEpisode = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await getEpisode(id);
      const data = await response.json();
      console.log(data)
      setEpisode(data);
    } catch (error) {
      setError('Error fetching episode');
    } finally {
      setLoading(false);
    }
  };



  const fetchCharacters = async () => {
    try {
      const response = await getCharactersByEpisode();
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.error('Error fetching characters', error);
    }
  };


  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
  }


  const charactersInEpisode = characters.filter((character) =>
  episode.characters.includes(character.url)
  );


  return (
    <div>
      <h1>Episode Details</h1>
      {episode && (
        <div>
          <h2>{episode.name}</h2>
          <p>Air Date: {episode.air_date}</p>
          <p>Episode: {episode.episode}</p>
          <ul>
            {charactersInEpisode.map((character) => (
              <li key={character.id}>{character.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EpisodeDetails;
