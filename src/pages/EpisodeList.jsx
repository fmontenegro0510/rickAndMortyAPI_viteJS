import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getEpisodes } from '../api';
import Loader from '../components/Loader';
import Error from '../components/Error';

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchEpisodes();
  }, []);

  const fetchEpisodes = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await getEpisodes();
      const data = await response.json();
      setEpisodes(data.results);
    } catch (error) {
      setError('Error fetching episodes');
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
      <h1>Episode List</h1>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <Link to={`/episodios/${episode.id}`}>{episode.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodeList;
