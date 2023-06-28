import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
        {items.map((location) => (
          <li key={location.id}>
            <Link to={`/ubicaciones/${location.id}`}>{location.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sortable;
