import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getEpisodes } from '../utils/Api';
import Loader from '../components/Loader/Loader';
import Error from '../components/Error/Error';
import Sortable from '../utils/SortableListEpisode';

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isSorted, setIsSorted] = useState(false);

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

  const sortedEpisodes = sortItems(isSorted, episodes);

  return (
    <div>
      <h1>Episode List</h1>
      <Sortable
        items={sortedEpisodes}
        onSort={(isChecked) => setIsSorted(isChecked)}
      />
      <ul>
        {sortedEpisodes.map((episode) => (
          <li key={episode.id}>
            <Link to={`/episodios/${episode.id}`}>{episode.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodeList;