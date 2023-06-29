import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCharacters } from '../utils/Api';
import Loader from '../components/Loader/Loader';
import Error from '../components/Error/Error';
import Sortable from '../utils/SortableListCharacter';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isSorted, setIsSorted] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);


  useEffect(() => {
    fetchCharacters();
  }, [page]);

  const fetchCharacters = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await getCharacters(page);
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      setError('Error fetching characters');
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

  const sortedCharacters = sortItems(isSorted, characters);
  
  const filteredCharacters = sortedCharacters.filter((character) =>
  character.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div>
      <h1>Character List</h1>

      <input
        type="text"
        placeholder="Buscar personaje"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Sortable
        items={filteredCharacters}
        onSort={(isChecked) => setIsSorted(isChecked)}
        idField="id"
      />
      <ul>
        {filteredCharacters.map((character) => (
          <li key={character.id}>
            <Link to={`/personajes/${character.id}`}>{character.name}</Link>
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

export default CharacterList;