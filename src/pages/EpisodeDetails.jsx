import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEpisode } from '../api';
import Loader from '../components/Loader';
import Error from '../components/Error';

const EpisodeDetails = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchEpisode();
  }, [id]);

  const fetchEpisode = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await getEpisode(id);
      const data = await response.json();
      setEpisode(data);
    } catch (error) {
      setError('Error fetching episode');
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
      <h1>Episode Details</h1>
      {episode && (
        <div>
          <h2>{episode.name}</h2>
          <p>Air Date: {episode.air_date}</p>
          <p>Episode: {episode.episode}</p>
          {/* Render more episode details */}
        </div>
      )}
    </div>
  );
};

export default EpisodeDetails;
