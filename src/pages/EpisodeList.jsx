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
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchEpisodes();
  }, [page]);

  const fetchEpisodes = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await getEpisodes(page);
      const data = await response.json();
      console.log(data.results)
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

  const sortedEpisodes = sortItems(isSorted, episodes);
  
  const filteredEpisodes = sortedEpisodes.filter((episode) =>
  episode.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div>
      <h1>Episode List</h1>
      <input
        type="text"
        placeholder="Buscar episodio"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Sortable
        items={filteredEpisodes}
        onSort={(isChecked) => setIsSorted(isChecked)}
        idField="id"
      />
      <ul>
        {filteredEpisodes.map((episode) => (
          <li key={episode.id}>
            <Link to={`/episodios/${episode.id}`}>{episode.name}</Link>
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

export default EpisodeList;