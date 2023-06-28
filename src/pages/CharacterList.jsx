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

  const sortedCharacters = sortItems(isSorted, characters);

  return (
    <div>
      <h1>Character List</h1>
      <Sortable
        items={sortedCharacters}
        onSort={(isChecked) => setIsSorted(isChecked)}
      />
      <ul>
        {sortedCharacters.map((character) => (
          <li key={character.id}>
            <Link to={`/personajes/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;