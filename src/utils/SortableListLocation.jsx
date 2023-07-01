import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {colorHEX} from '../utils/Color'

const Sortable = ({ items, onSort, idField }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setIsChecked(isChecked);
    onSort(isChecked);
  };

  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <p className="text-l mt-2 text-gray-500 mb-8 w-full">
        {" "}
        Ordenar alfabéticamente:{" "}
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </label>
      </p>
      <div className="flex flex-wrap -m-2">
        {items.map((location) => (
          <div className="p-2 lg:w-1/4 md:w-1/2 w-full" key={location.id}>
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <div
                className= {`bg-[#E0E7FF]` + ' w-20 h-20 rounded-full inline-flex items-center justify-center text-[#6366F1]  text-xl font-bold  mr-2' }>
                {location.name.charAt(0)}
              </div>
              <div className="flex-grow">
              <Link to={`/ubicaciones/${location.id}`}>
                  <h2 className="text-gray-900 title-font font-medium">
                    {location.name} 
 
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Sortable;
