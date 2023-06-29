import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card/Card';

const Sortable = ({ items, onSort, idField }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setIsChecked(isChecked);
    onSort(isChecked);
  };

  return (
    <div>
      <label>
        Ordenar alfabéticamente:
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </label>
      <ul>
        {items.map((character) => (
          <li key={character.id}>
            <Link to={`/personajes/${character.id}`}>{character.name}</Link>
          </li>
         ))}
      </ul>
    </div>
  );
};

export default Sortable;
